import React, { useState, useEffect } from 'react';
import { analytics, AnalyticsSummary } from '../analytics';
import { PARTIES } from '../constants';
import { BarChart3, Users, CheckCircle, XCircle, Share2, Clock, TrendingUp, Download, RefreshCw } from 'lucide-react';

interface AdminDashboardProps {
    onBack: () => void;
}

export function AdminDashboard({ onBack }: AdminDashboardProps) {
    const [summary, setSummary] = useState<AnalyticsSummary | null>(null);
    const [rawEvents, setRawEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
        setLoading(true);
        try {
            // Intentar cargar desde el backend (MongoDB)
            const backendEvents = await analytics.fetchBackendEvents();

            if (backendEvents && backendEvents.length > 0) {
                setRawEvents(backendEvents);
                setSummary(analytics.getSummary(backendEvents));
            } else {
                // Fallback a local si no hay backend o está vacío
                setSummary(analytics.getSummary());
            }
        } catch (error) {
            console.error('Error loading analytics:', error);
            setSummary(analytics.getSummary());
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleExport = () => {
        const csvData = analytics.exportToCSV(rawEvents);
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `reporte-votos-${new Date().toISOString().slice(0, 10)}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const formatDuration = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}m ${seconds}s`;
    };

    if (loading || !summary) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-white text-2xl">Cargando datos...</div>
            </div>
        );
    }

    const getPartyName = (partyId: string) => {
        const party = PARTIES.find(p => p.id === partyId);
        return party ? party.name : partyId;
    };

    const topDistricts = Object.entries(summary.districtStats)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10);

    const topParties = Object.entries(summary.partyStats)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 7);

    return (
        <div className="min-h-screen bg-gray-900 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">📊 Dashboard Administrativo</h1>
                            <p className="text-white/80">Análisis en tiempo real del simulador de votación</p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={loadData}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all"
                            >
                                <RefreshCw className="w-5 h-5" />
                                Actualizar
                            </button>
                            <button
                                onClick={handleExport}
                                className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all"
                            >
                                <Download className="w-5 h-5" />
                                Exportar
                            </button>
                            <button
                                onClick={onBack}
                                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
                            >
                                Salir
                            </button>
                        </div>
                    </div>
                </div>

                {/* KPIs principales */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                        <div className="flex items-center justify-between mb-2">
                            <Users className="w-8 h-8 text-blue-400" />
                            <span className="text-3xl font-bold text-white">{summary.totalSessions}</span>
                        </div>
                        <p className="text-white/80 text-sm">Total de Visitas</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                        <div className="flex items-center justify-between mb-2">
                            <CheckCircle className="w-8 h-8 text-green-400" />
                            <span className="text-3xl font-bold text-white">{summary.completedSessions}</span>
                        </div>
                        <p className="text-white/80 text-sm">Simulaciones Completadas</p>
                        <div className="mt-2 bg-green-500/20 rounded-full h-2">
                            <div
                                className="bg-green-500 h-2 rounded-full transition-all"
                                style={{ width: `${summary.completionRate}%` }}
                            />
                        </div>
                        <p className="text-white/60 text-xs mt-1">{summary.completionRate.toFixed(1)}% tasa de finalización</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                        <div className="flex items-center justify-between mb-2">
                            <XCircle className="w-8 h-8 text-red-400" />
                            <span className="text-3xl font-bold text-white">{summary.abandonedSessions}</span>
                        </div>
                        <p className="text-white/80 text-sm">Sesiones Abandonadas</p>
                        <div className="mt-2 bg-red-500/20 rounded-full h-2">
                            <div
                                className="bg-red-500 h-2 rounded-full transition-all"
                                style={{ width: `${100 - summary.completionRate}%` }}
                            />
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                        <div className="flex items-center justify-between mb-2">
                            <Share2 className="w-8 h-8 text-purple-400" />
                            <span className="text-3xl font-bold text-white">{summary.sharedResults}</span>
                        </div>
                        <p className="text-white/80 text-sm">Resultados Compartidos</p>
                        <div className="mt-2 bg-purple-500/20 rounded-full h-2">
                            <div
                                className="bg-purple-500 h-2 rounded-full transition-all"
                                style={{ width: `${summary.shareRate}%` }}
                            />
                        </div>
                        <p className="text-white/60 text-xs mt-1">{summary.shareRate.toFixed(1)}% de los completados</p>
                    </div>
                </div>

                {/* Métricas adicionales */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                        <div className="flex items-center gap-3 mb-4">
                            <Clock className="w-6 h-6 text-yellow-400" />
                            <h2 className="text-xl font-bold text-white">Duración Promedio de Sesión</h2>
                        </div>
                        <p className="text-4xl font-bold text-white">{formatDuration(summary.averageSessionDuration)}</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                        <div className="flex items-center gap-3 mb-4">
                            <TrendingUp className="w-6 h-6 text-green-400" />
                            <h2 className="text-xl font-bold text-white">Métricas de Conversión</h2>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-white/80">Tasa de Finalización:</span>
                                <span className="text-white font-bold">{summary.completionRate.toFixed(1)}%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white/80">Tasa de Compartido:</span>
                                <span className="text-white font-bold">{summary.shareRate.toFixed(1)}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Estadísticas por distrito */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <BarChart3 className="w-6 h-6 text-blue-400" />
                        <h2 className="text-xl font-bold text-white">Top 10 Distritos Más Visitados</h2>
                    </div>
                    <div className="space-y-3">
                        {topDistricts.map(([district, count], index) => {
                            const percentage = (count / summary.totalSessions) * 100;
                            return (
                                <div key={district}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-white/90">
                                            {index + 1}. {district}
                                        </span>
                                        <span className="text-white font-bold">{count} visitas ({percentage.toFixed(1)}%)</span>
                                    </div>
                                    <div className="bg-white/20 rounded-full h-3">
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all"
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Estadísticas por partido */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <BarChart3 className="w-6 h-6 text-green-400" />
                        <h2 className="text-xl font-bold text-white">Votos por Partido Político</h2>
                    </div>
                    <div className="space-y-3">
                        {topParties.map(([partyId, count], index) => {
                            const totalVotes = Object.values(summary.partyStats).reduce((a, b) => a + b, 0);
                            const percentage = totalVotes > 0 ? (count / totalVotes) * 100 : 0;
                            return (
                                <div key={partyId}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-white/90">
                                            {index + 1}. {getPartyName(partyId)}
                                        </span>
                                        <span className="text-white font-bold">{count} votos ({percentage.toFixed(1)}%)</span>
                                    </div>
                                    <div className="bg-white/20 rounded-full h-3">
                                        <div
                                            className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all"
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Senadores Nacionales más votados */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <BarChart3 className="w-6 h-6 text-cyan-400" />
                        <h2 className="text-xl font-bold text-white">Top Senadores Nacionales Más Votados</h2>
                    </div>
                    <div className="space-y-3">
                        {Object.entries(summary.senatorsNationalStats)
                            .sort(([, a], [, b]) => b.count - a.count)
                            .slice(0, 10)
                            .map(([number, data], index) => {
                                const totalVotes = Object.values(summary.senatorsNationalStats).reduce((sum, d) => sum + d.count, 0);
                                const percentage = totalVotes > 0 ? (data.count / totalVotes) * 100 : 0;
                                return (
                                    <div key={number}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-white/90">
                                                {index + 1}. #{number} - {data.name}
                                            </span>
                                            <span className="text-white font-bold">{data.count} votos ({percentage.toFixed(1)}%)</span>
                                        </div>
                                        <div className="bg-white/20 rounded-full h-3">
                                            <div
                                                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all"
                                                style={{ width: `${percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        {Object.keys(summary.senatorsNationalStats).length === 0 && (
                            <p className="text-white/60 text-center py-4">No hay datos disponibles aún</p>
                        )}
                    </div>
                </div>

                {/* Senadores Regionales más votados */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <BarChart3 className="w-6 h-6 text-indigo-400" />
                        <h2 className="text-xl font-bold text-white">Top Senadores Regionales Más Votados</h2>
                    </div>
                    <div className="space-y-3">
                        {Object.entries(summary.senatorsRegionalStats)
                            .sort(([, a], [, b]) => b.count - a.count)
                            .slice(0, 10)
                            .map(([number, data], index) => {
                                const totalVotes = Object.values(summary.senatorsRegionalStats).reduce((sum, d) => sum + d.count, 0);
                                const percentage = totalVotes > 0 ? (data.count / totalVotes) * 100 : 0;
                                return (
                                    <div key={number}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-white/90">
                                                {index + 1}. #{number} - {data.name}
                                            </span>
                                            <span className="text-white font-bold">{data.count} votos ({percentage.toFixed(1)}%)</span>
                                        </div>
                                        <div className="bg-white/20 rounded-full h-3">
                                            <div
                                                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all"
                                                style={{ width: `${percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        {Object.keys(summary.senatorsRegionalStats).length === 0 && (
                            <p className="text-white/60 text-center py-4">No hay datos disponibles aún</p>
                        )}
                    </div>
                </div>

                {/* Diputados más votados */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <BarChart3 className="w-6 h-6 text-pink-400" />
                        <h2 className="text-xl font-bold text-white">Top Diputados Más Votados</h2>
                    </div>
                    <div className="space-y-3">
                        {Object.entries(summary.deputiesStats)
                            .sort(([, a], [, b]) => b.count - a.count)
                            .slice(0, 10)
                            .map(([number, data], index) => {
                                const totalVotes = Object.values(summary.deputiesStats).reduce((sum, d) => sum + d.count, 0);
                                const percentage = totalVotes > 0 ? (data.count / totalVotes) * 100 : 0;
                                return (
                                    <div key={number}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-white/90">
                                                {index + 1}. #{number} - {data.name}
                                            </span>
                                            <span className="text-white font-bold">{data.count} votos ({percentage.toFixed(1)}%)</span>
                                        </div>
                                        <div className="bg-white/20 rounded-full h-3">
                                            <div
                                                className="bg-gradient-to-r from-pink-500 to-rose-500 h-3 rounded-full transition-all"
                                                style={{ width: `${percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        {Object.keys(summary.deputiesStats).length === 0 && (
                            <p className="text-white/60 text-center py-4">No hay datos disponibles aún</p>
                        )}
                    </div>
                </div>

                {/* Parlamento Andino más votados */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <BarChart3 className="w-6 h-6 text-amber-400" />
                        <h2 className="text-xl font-bold text-white">Top Parlamento Andino Más Votados</h2>
                    </div>
                    <div className="space-y-3">
                        {Object.entries(summary.parlamentoAndinoStats)
                            .sort(([, a], [, b]) => b.count - a.count)
                            .slice(0, 10)
                            .map(([number, data], index) => {
                                const totalVotes = Object.values(summary.parlamentoAndinoStats).reduce((sum, d) => sum + d.count, 0);
                                const percentage = totalVotes > 0 ? (data.count / totalVotes) * 100 : 0;
                                return (
                                    <div key={number}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-white/90">
                                                {index + 1}. #{number} - {data.name}
                                            </span>
                                            <span className="text-white font-bold">{data.count} votos ({percentage.toFixed(1)}%)</span>
                                        </div>
                                        <div className="bg-white/20 rounded-full h-3">
                                            <div
                                                className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full transition-all"
                                                style={{ width: `${percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        {Object.keys(summary.parlamentoAndinoStats).length === 0 && (
                            <p className="text-white/60 text-center py-4">No hay datos disponibles aún</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
