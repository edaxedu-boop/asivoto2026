import React, { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { BallotView } from './components/BallotView';
import { DistrictSelection } from './components/DistrictSelection';
import { SummaryView } from './components/SummaryView';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { VoteRecord } from './types';
import { analytics } from './analytics';
import { SENATOR_CANDIDATES, REGIONAL_SENATOR_CANDIDATES, REGIONAL_DEPUTY_CANDIDATES, PARLAMENTO_ANDINO_CANDIDATES } from './constants';

const STORAGE_KEY = 'voto_digital_session';

export default function App() {
  // Detectar si la URL es /admin ANTES de inicializar el estado
  const isAdminRoute = window.location.pathname === '/admin' || window.location.pathname.includes('/admin');

  const [view, setView] = useState<'home' | 'district' | 'simulation' | 'summary' | 'admin-login' | 'admin-dashboard'>(
    isAdminRoute ? 'admin-login' : 'home'
  );
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [finalVotes, setFinalVotes] = useState<VoteRecord[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load state from localStorage on mount (solo si NO es admin)
  useEffect(() => {
    if (isAdminRoute) {
      setIsInitialized(true);
      return;
    }

    const savedSession = localStorage.getItem(STORAGE_KEY);
    if (savedSession) {
      try {
        const parsed = JSON.parse(savedSession);
        // We only restore if we were mid-process or finished
        if (parsed.view) setView(parsed.view);
        if (parsed.selectedDistrict) setSelectedDistrict(parsed.selectedDistrict);
        if (parsed.finalVotes) setFinalVotes(parsed.finalVotes);
      } catch (e) {
        console.error("Failed to load saved session", e);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save state whenever relevant variables change
  useEffect(() => {
    if (!isInitialized || view.startsWith('admin')) return;

    const sessionData = {
      view,
      selectedDistrict,
      finalVotes
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionData));
  }, [view, selectedDistrict, finalVotes, isInitialized]);

  const handleStart = () => {
    analytics.trackPageView('district-selection');
    setView('district');
  };

  const handleDistrictSelect = (district: string) => {
    analytics.trackDistrictSelection(district);
    setSelectedDistrict(district);
    setView('simulation');
  };

  const handleBackToHome = () => {
    analytics.trackSessionAbandon();
    setView('home');
    setSelectedDistrict('');
    setFinalVotes([]);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('voto_digital_ballot_progress'); // Clear ballot specific storage too
  };

  const handleBackToDistrict = () => {
    setView('district');
    setFinalVotes([]);
  };

  const handleSimulationFinish = (votes: VoteRecord[]) => {
    analytics.trackSimulationComplete(selectedDistrict);

    // Rastrear cada voto con información detallada de candidatos
    votes.forEach(vote => {
      let candidates: any[] = [];

      // Obtener la lista de candidatos según la sección
      if (vote.sectionId === 2) {
        candidates = SENATOR_CANDIDATES;
      } else if (vote.sectionId === 3) {
        candidates = REGIONAL_SENATOR_CANDIDATES[selectedDistrict] || [];
      } else if (vote.sectionId === 4) {
        candidates = REGIONAL_DEPUTY_CANDIDATES[selectedDistrict] || [];
      } else if (vote.sectionId === 5) {
        candidates = PARLAMENTO_ANDINO_CANDIDATES;
      }

      // Rastrear voto preferencial 1
      if (vote.prefValues.pref1) {
        const candidate = candidates.find(c => c.number === vote.prefValues.pref1);
        if (candidate) {
          analytics.trackVoteCast(
            vote.sectionId,
            vote.partyId,
            candidate.number,
            candidate.name,
            vote.prefValues.pref1,
            vote.prefValues.pref2 || undefined
          );
        }
      }

      // Rastrear voto preferencial 2 (si existe y es diferente)
      if (vote.prefValues.pref2 && vote.prefValues.pref2 !== vote.prefValues.pref1) {
        const candidate = candidates.find(c => c.number === vote.prefValues.pref2);
        if (candidate) {
          analytics.trackVoteCast(
            vote.sectionId,
            vote.partyId,
            candidate.number,
            candidate.name,
            vote.prefValues.pref1 || undefined,
            vote.prefValues.pref2
          );
        }
      }

      // Si no hay votos preferenciales, solo rastrear el partido
      if (!vote.prefValues.pref1 && !vote.prefValues.pref2) {
        analytics.trackVoteCast(vote.sectionId, vote.partyId);
      }
    });

    setFinalVotes(votes);
    setView('summary');
  };

  const handleAdminLogin = () => {
    setView('admin-dashboard');
  };

  const handleAdminLogout = () => {
    window.location.href = '/';
  };

  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-2xl">Cargando...</div>
      </div>
    );
  }

  return (
    <>
      {view === 'home' && (
        <Home onStart={handleStart} />
      )}

      {view === 'district' && (
        <DistrictSelection onSelect={handleDistrictSelect} />
      )}

      {view === 'simulation' && (
        <BallotView
          onBack={handleBackToDistrict}
          onFinish={handleSimulationFinish}
          selectedDistrict={selectedDistrict}
        />
      )}

      {view === 'summary' && (
        <SummaryView
          votes={finalVotes}
          selectedDistrict={selectedDistrict}
          onBack={() => setView('simulation')}
          onRestart={handleBackToHome}
        />
      )}

      {view === 'admin-login' && (
        <AdminLogin onLogin={handleAdminLogin} />
      )}

      {view === 'admin-dashboard' && (
        <AdminDashboard onBack={handleAdminLogout} />
      )}
    </>
  );
}