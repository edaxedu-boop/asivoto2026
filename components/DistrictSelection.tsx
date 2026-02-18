import React from 'react';
import { BallotHeader } from './BallotHeader';
import { MapPin } from 'lucide-react';
import { PeruMap } from './PeruMap';

interface DistrictSelectionProps {
  onSelect: (district: string) => void;
}

const DISTRICTS = [
  "Amazonas", "Ancash", "Apurimac", "Arequipa", "Ayacucho", "Cajamarca",
  "Callao", "Cusco", "Peruanos en el Extranjero", "Huancavelica", "Huanuco",
  "Ica", "Junin", "La Libertad", "Lambayeque", "Lima Metropolitana",
  "Lima Provincias", "Loreto", "Madre de Dios", "Moquegua", "Pasco",
  "Piura", "Puno", "San Martin", "Tacna", "Tumbes", "Ucayali"
];

export const DistrictSelection: React.FC<DistrictSelectionProps> = ({ onSelect }) => {
  const [showMapMobile, setShowMapMobile] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowMapMobile(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-[#f3f4f6]">
      <style>{`
        /* Custom Scrollbar Styles */
        .custom-scrollbar::-webkit-scrollbar {
          width: 12px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: #f8fafc;
          border-radius: 8px;
          margin-block: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1; /* slate-300 */
          border-radius: 20px;
          border: 3px solid #f8fafc; /* Create padding effect */
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8; /* slate-400 */
        }
        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 #f8fafc;
        }
      `}</style>
      <BallotHeader />

      <main className="flex-1 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
        <div className="w-full max-w-7xl bg-white rounded-3xl shadow-xl border border-gray-100 p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 max-h-full overflow-hidden">

          {/* Map Column (Visible temporarily on mobile, always on desktop) */}
          <div
            className={`
              flex flex-col items-center justify-center w-full md:w-1/3 lg:w-[400px] shrink-0 
              bg-transparent md:bg-gray-50 
              rounded-2xl p-0 md:p-4 border-0 md:border border-gray-100 relative 
              transition-all duration-1000 ease-in-out transform origin-top overflow-hidden
              ${showMapMobile
                ? 'opacity-100 max-h-[80vh] translate-y-0 scale-100 mb-4 md:mb-0'
                : 'opacity-0 max-h-0 -translate-y-10 scale-95 mb-0 pointer-events-none md:opacity-100 md:max-h-full md:translate-y-0 md:scale-100 md:pointer-events-auto md:mb-0'}
            `}
          >
            <div className="w-full flex-1 flex items-center justify-center min-h-[300px] md:min-h-0">
              <PeruMap onSelect={onSelect} className="w-full h-full object-contain" />
            </div>
          </div>

          {/* List Column */}
          <div className="flex-1 flex flex-col min-h-0 w-full">
            {/* Card Header */}
            <div className="flex flex-col items-center justify-center mb-4 sm:mb-6 shrink-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#e0f2f1] rounded-full flex items-center justify-center mb-2 sm:mb-4 shadow-sm">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-vote-teal fill-current" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center mb-1 sm:mb-2">
                Selecciona tu Distrito
              </h2>
              <p className="text-gray-500 text-center font-light text-sm sm:text-base">
                Elige donde votar o usa el mapa
              </p>
            </div>

            {/* Grid Container */}
            <div className="overflow-y-auto custom-scrollbar flex-1 min-h-0 pr-2 pb-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                {DISTRICTS.map((district) => (
                  <button
                    key={district}
                    onClick={() => onSelect(district)}
                    className="group relative flex items-center w-full p-3 bg-[#eff8fa] hover:bg-[#e0f2f5] border border-transparent hover:border-vote-teal/30 rounded-xl transition-all duration-200 text-left"
                  >
                    <MapPin className="w-5 h-5 text-vote-teal/50 group-hover:text-vote-teal mr-3 transition-colors shrink-0" />

                    <span className="text-gray-700 font-medium group-hover:text-vote-teal text-sm truncate">
                      {district}
                    </span>

                    {/* Hover Arrow Effect */}
                    <div className="absolute right-3 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                      <svg className="w-4 h-4 text-vote-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>


            </div>
          </div>

        </div>
      </main>
    </div>
  );
};