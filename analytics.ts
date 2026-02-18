// Analytics Service - Sistema de seguimiento de eventos
// Por ahora usa localStorage, luego se conectará a MongoDB

export interface AnalyticsEvent {
  id: string;
  timestamp: number;
  sessionId: string;
  eventType: 'page_view' | 'district_select' | 'vote_cast' | 'simulation_complete' | 'pdf_share' | 'session_start' | 'session_abandon';
  data: {
    district?: string;
    partyId?: string;
    sectionId?: number;
    candidateId?: string;
    candidateName?: string;
    candidateNumber?: number;
    prefValue1?: number;
    prefValue2?: number;
    userAgent?: string;
    screenResolution?: string;
  };
}

export interface AnalyticsSession {
  sessionId: string;
  startTime: number;
  endTime?: number;
  district?: string;
  completed: boolean;
  shared: boolean;
  votes: Array<{
    sectionId: number;
    partyId: string;
    prefValue1?: number;
    prefValue2?: number;
  }>;
}

export interface AnalyticsSummary {
  totalSessions: number;
  completedSessions: number;
  abandonedSessions: number;
  sharedResults: number;
  districtStats: Record<string, number>;
  partyStats: Record<string, number>;
  sectionStats: Record<number, number>;
  completionRate: number;
  shareRate: number;
  averageSessionDuration: number;
  hourlyActivity: Record<string, number>;
  dailyActivity: Record<string, number>;
  // Estadísticas detalladas de candidatos
  senatorsNationalStats: Record<number, { count: number; name: string }>;
  senatorsRegionalStats: Record<number, { count: number; name: string }>;
  deputiesStats: Record<number, { count: number; name: string }>;
  parlamentoAndinoStats: Record<number, { count: number; name: string }>;
}

const ANALYTICS_STORAGE_KEY = 'voto_digital_analytics';
const SESSION_STORAGE_KEY = 'voto_digital_current_session';
const BACKEND_URL = import.meta.env.PROD ? '/api/events' : 'http://localhost:5000/api/events';

class AnalyticsService {
  private sessionId: string;
  private sessionStartTime: number;

  constructor() {
    this.sessionId = this.getOrCreateSessionId();
    this.sessionStartTime = Date.now();
    this.trackEvent('session_start', {});
  }

  private getOrCreateSessionId(): string {
    let sessionId = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId);
    }
    return sessionId;
  }

  private getEvents(): AnalyticsEvent[] {
    const stored = localStorage.getItem(ANALYTICS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  private saveEvents(events: AnalyticsEvent[]): void {
    localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(events));
  }

  trackEvent(eventType: AnalyticsEvent['eventType'], data: AnalyticsEvent['data']): void {
    const events = this.getEvents();
    const event: AnalyticsEvent = {
      id: `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      eventType,
      data: {
        ...data,
        userAgent: navigator.userAgent,
        screenResolution: `${window.screen.width}x${window.screen.height}`
      }
    };
    events.push(event);
    events.push(event);
    this.saveEvents(events);

    // Enviar al backend (fire and forget)
    this.sendToBackend(event).catch(err => console.error('Error sending analytics to backend:', err));
  }

  private async sendToBackend(event: AnalyticsEvent): Promise<void> {
    try {
      await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
    } catch (error) {
      // Silently fail if backend is unreachable, data is saved in localStorage anyway
      // console.warn('Backend analytics unreachanble');
    }
  }

  // Método para recuperar todos los eventos del backend (usado por el Dashboard)
  async fetchBackendEvents(): Promise<AnalyticsEvent[]> {
    try {
      const response = await fetch(BACKEND_URL);
      if (!response.ok) throw new Error('Failed to fetch events');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching backend events:', error);
      return [];
    }
  }

  trackPageView(page: string): void {
    this.trackEvent('page_view', { district: page });
  }

  trackDistrictSelection(district: string): void {
    this.trackEvent('district_select', { district });
  }

  trackVoteCast(
    sectionId: number,
    partyId: string,
    candidateNumber?: number,
    candidateName?: string,
    prefValue1?: number,
    prefValue2?: number
  ): void {
    this.trackEvent('vote_cast', {
      sectionId,
      partyId,
      candidateNumber,
      candidateName,
      prefValue1,
      prefValue2
    });
  }

  trackSimulationComplete(district: string): void {
    this.trackEvent('simulation_complete', { district });
  }

  trackPDFShare(): void {
    this.trackEvent('pdf_share', {});
  }

  trackSessionAbandon(): void {
    this.trackEvent('session_abandon', {});
  }

  getSummary(customEvents?: AnalyticsEvent[]): AnalyticsSummary {
    const events = customEvents || this.getEvents();

    // Agrupar eventos por sesión
    const sessions = new Map<string, AnalyticsSession>();

    events.forEach(event => {
      if (!sessions.has(event.sessionId)) {
        sessions.set(event.sessionId, {
          sessionId: event.sessionId,
          startTime: event.timestamp,
          completed: false,
          shared: false,
          votes: []
        });
      }

      const session = sessions.get(event.sessionId)!;

      if (event.eventType === 'district_select' && event.data.district) {
        session.district = event.data.district;
      }

      if (event.eventType === 'vote_cast' && event.data.sectionId && event.data.partyId) {
        session.votes.push({
          sectionId: event.data.sectionId,
          partyId: event.data.partyId
        });
      }

      if (event.eventType === 'simulation_complete') {
        session.completed = true;
        session.endTime = event.timestamp;
      }

      if (event.eventType === 'pdf_share') {
        session.shared = true;
      }

      if (event.eventType === 'session_abandon') {
        session.endTime = event.timestamp;
      }
    });

    const sessionsArray = Array.from(sessions.values());
    const totalSessions = sessionsArray.length;
    const completedSessions = sessionsArray.filter(s => s.completed).length;
    const abandonedSessions = sessionsArray.filter(s => !s.completed).length;
    const sharedResults = sessionsArray.filter(s => s.shared).length;

    // Estadísticas por distrito
    const districtStats: Record<string, number> = {};
    sessionsArray.forEach(session => {
      if (session.district) {
        districtStats[session.district] = (districtStats[session.district] || 0) + 1;
      }
    });

    // Estadísticas por partido
    const partyStats: Record<string, number> = {};
    sessionsArray.forEach(session => {
      session.votes.forEach(vote => {
        partyStats[vote.partyId] = (partyStats[vote.partyId] || 0) + 1;
      });
    });

    // Estadísticas por sección
    const sectionStats: Record<number, number> = {};
    sessionsArray.forEach(session => {
      session.votes.forEach(vote => {
        sectionStats[vote.sectionId] = (sectionStats[vote.sectionId] || 0) + 1;
      });
    });

    // Duración promedio de sesión
    const completedSessionsWithDuration = sessionsArray.filter(s => s.endTime);
    const averageSessionDuration = completedSessionsWithDuration.length > 0
      ? completedSessionsWithDuration.reduce((sum, s) => sum + (s.endTime! - s.startTime), 0) / completedSessionsWithDuration.length
      : 0;

    // Actividad por hora
    const hourlyActivity: Record<string, number> = {};
    events.forEach(event => {
      const hour = new Date(event.timestamp).getHours();
      const hourKey = `${hour}:00`;
      hourlyActivity[hourKey] = (hourlyActivity[hourKey] || 0) + 1;
    });

    // Actividad por día
    const dailyActivity: Record<string, number> = {};
    events.forEach(event => {
      const date = new Date(event.timestamp).toLocaleDateString();
      dailyActivity[date] = (dailyActivity[date] || 0) + 1;
    });

    // Estadísticas de candidatos por sección
    const senatorsNationalStats: Record<number, { count: number; name: string }> = {};
    const senatorsRegionalStats: Record<number, { count: number; name: string }> = {};
    const deputiesStats: Record<number, { count: number; name: string }> = {};
    const parlamentoAndinoStats: Record<number, { count: number; name: string }> = {};

    // Procesar eventos de votos para extraer candidatos
    events.forEach(event => {
      if (event.eventType === 'vote_cast' && event.data.candidateNumber && event.data.candidateName) {
        const { sectionId, candidateNumber, candidateName } = event.data;

        if (sectionId === 2) {
          // Senadores Nacionales
          if (!senatorsNationalStats[candidateNumber]) {
            senatorsNationalStats[candidateNumber] = { count: 0, name: candidateName };
          }
          senatorsNationalStats[candidateNumber].count++;
        } else if (sectionId === 3) {
          // Senadores Regionales
          if (!senatorsRegionalStats[candidateNumber]) {
            senatorsRegionalStats[candidateNumber] = { count: 0, name: candidateName };
          }
          senatorsRegionalStats[candidateNumber].count++;
        } else if (sectionId === 4) {
          // Diputados
          if (!deputiesStats[candidateNumber]) {
            deputiesStats[candidateNumber] = { count: 0, name: candidateName };
          }
          deputiesStats[candidateNumber].count++;
        } else if (sectionId === 5) {
          // Parlamento Andino
          if (!parlamentoAndinoStats[candidateNumber]) {
            parlamentoAndinoStats[candidateNumber] = { count: 0, name: candidateName };
          }
          parlamentoAndinoStats[candidateNumber].count++;
        }
      }
    });

    return {
      totalSessions,
      completedSessions,
      abandonedSessions,
      sharedResults,
      districtStats,
      partyStats,
      sectionStats,
      completionRate: totalSessions > 0 ? (completedSessions / totalSessions) * 100 : 0,
      shareRate: completedSessions > 0 ? (sharedResults / completedSessions) * 100 : 0,
      averageSessionDuration,
      hourlyActivity,
      dailyActivity,
      senatorsNationalStats,
      senatorsRegionalStats,
      deputiesStats,
      parlamentoAndinoStats
    };
  }

  getAllEvents(): AnalyticsEvent[] {
    return this.getEvents();
  }

  clearAnalytics(): void {
    localStorage.removeItem(ANALYTICS_STORAGE_KEY);
  }

  exportData(): string {
    return JSON.stringify({
      events: this.getEvents(),
      summary: this.getSummary(),
      exportedAt: new Date().toISOString()
    }, null, 2);
  }

  // Nuevo método para exportar a CSV (Excel)
  exportToCSV(customEvents?: AnalyticsEvent[]): string {
    const events = customEvents || this.getEvents();
    const sessions = new Map<string, any>();

    // Procesar sesiones para tener una fila por usuario
    events.forEach(event => {
      if (!sessions.has(event.sessionId)) {
        sessions.set(event.sessionId, {
          sessionId: event.sessionId,
          startTime: new Date(event.timestamp).toLocaleString(),
          endTime: '',
          district: '',
          status: 'Incompleto',
          votePresident: '',
          voteSenadorNac: '',
          voteSenadorReg: '',
          voteDiputado: '',
          voteParlamentoAndino: ''
        });
      }

      const session = sessions.get(event.sessionId);

      if (event.eventType === 'district_select') {
        session.district = event.data.district || '';
      }

      if (event.eventType === 'simulation_complete') {
        session.status = 'Completado';
        session.endTime = new Date(event.timestamp).toLocaleString();
      }

      if (event.eventType === 'vote_cast') {
        const { sectionId, partyId, candidateName, candidateNumber } = event.data;
        const voteInfo = candidateName ? `${partyId} (${candidateName} #${candidateNumber})` : partyId;

        if (sectionId === 1) session.votePresident = voteInfo;
        if (sectionId === 2) session.voteSenadorNac = session.voteSenadorNac ? `${session.voteSenadorNac} | ${voteInfo}` : voteInfo;
        if (sectionId === 3) session.voteSenadorReg = session.voteSenadorReg ? `${session.voteSenadorReg} | ${voteInfo}` : voteInfo;
        if (sectionId === 4) session.voteDiputado = session.voteDiputado ? `${session.voteDiputado} | ${voteInfo}` : voteInfo;
        if (sectionId === 5) session.voteParlamentoAndino = session.voteParlamentoAndino ? `${session.voteParlamentoAndino} | ${voteInfo}` : voteInfo;
      }
    });

    // Crear cabeceras CSV
    const headers = [
      'ID Sesion',
      'Inicio',
      'Fin',
      'Estado',
      'Distrito',
      'Voto Presidente',
      'Votos Senador Nacional',
      'Votos Senador Regional',
      'Votos Diputados',
      'Votos Parlamento Andino'
    ];

    // Convertir a texto CSV
    const rows = Array.from(sessions.values()).map(s => [
      s.sessionId,
      s.startTime,
      s.endTime,
      s.status,
      s.district,
      s.votePresident,
      s.voteSenadorNac,
      s.voteSenadorReg,
      s.voteDiputado,
      s.voteParlamentoAndino
    ].map(cell => `"${(cell || '').replace(/"/g, '""')}"`).join(',')); // Escapar comillas dobles

    return [headers.join(','), ...rows].join('\n');
  }

  async resetBackendData(): Promise<boolean> {
    try {
      const response = await fetch(BACKEND_URL, {
        method: 'DELETE',
      });
      if (response.ok) {
        this.clearAnalytics(); // También borrar local
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error resetting backend data:', error);
      return false;
    }
  }
}

// Singleton instance
export const analytics = new AnalyticsService();
