import React from 'react';
import { MapPin } from 'lucide-react';

interface PeruMapProps {
    onSelect: (district: string) => void;
    className?: string;
}

// Coordenadas aproximadas (top%, left%) para cada departamento
const REGION_COORDS: Record<string, { top: number; left: number }> = {
    "Amazonas": { top: 18, left: 32 },
    "Ancash": { top: 43, left: 24 },
    "Apurimac": { top: 73, left: 52 },
    "Arequipa": { top: 82, left: 55 },
    "Ayacucho": { top: 68, left: 45 },
    "Cajamarca": { top: 24, left: 22 },
    "Callao": { top: 59, left: 22 },
    "Cusco": { top: 68, left: 60 },
    "Huancavelica": { top: 64, left: 38 },
    "Huanuco": { top: 43, left: 35 },
    "Ica": { top: 73, left: 32 },
    "Junin": { top: 54, left: 38 },
    "La Libertad": { top: 33, left: 20 },
    "Lambayeque": { top: 25, left: 14 },
    "Lima Metropolitana": { top: 60, left: 28 },
    "Lima Provincias": { top: 58, left: 32 },
    "Loreto": { top: 20, left: 65 },
    "Madre de Dios": { top: 60, left: 78 },
    "Moquegua": { top: 88, left: 65 },
    "Pasco": { top: 49, left: 35 },
    "Piura": { top: 15, left: 12 },
    "Puno": { top: 78, left: 72 },
    "San Martin": { top: 30, left: 32 },
    "Tacna": { top: 92, left: 68 },
    "Tumbes": { top: 8, left: 8 },
    "Ucayali": { top: 45, left: 55 },
};

export const PeruMap: React.FC<PeruMapProps> = ({ onSelect, className = "" }) => {
    return (
        <div className={`relative w-full max-w-[400px] aspect-[0.7] mx-auto flex flex-col items-center justify-center ${className}`}>
            {/* Título arriba */}
            <div className="absolute top-0 w-full text-center z-20 pt-2 pointer-events-none">
                <h1 className="text-lg sm:text-xl md:text-lg font-black text-vote-teal uppercase tracking-tight drop-shadow-sm leading-tight">
                    Elecciones a nivel nacional 2026
                </h1>
            </div>

            {/* Subtítulo abajo */}
            <div className="absolute bottom-4 w-full text-center z-20 pointer-events-none">
                <p className="text-[10px] sm:text-xs text-gray-500 tracking-wide drop-shadow-sm font-medium">
                    Simulador de votación electoral
                </p>
            </div>

            {/* Estilos de animación */}
            <style>{`
                @keyframes map-heartbeat {
                    0%, 100% { transform: scale(1); filter: drop-shadow(0 0 2px #003670); }
                    50% { transform: scale(1.02); filter: drop-shadow(0 0 8px rgba(0, 54, 112, 0.4)); }
                }
            `}</style>

            {/* Mapa Base con animación */}
            <img
                src="/images/mapa.png"
                alt="Mapa de Perú"
                className="w-full h-full object-contain opacity-90"
                style={{
                    animation: 'map-heartbeat 3s ease-in-out infinite'
                }}
            />

            {/* Marcadores */}
            {/* Marcadores eliminados por solicitud del usuario (el diseño ya tiene iconos) */}
            {/* Si se requiere interactividad futura, se necesitaría un mapa de imagen o coordenadas ajustadas */}
        </div>
    );
};
