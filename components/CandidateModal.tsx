import React from 'react';
import { X, Hand, AlertCircle } from 'lucide-react';
import { Candidate } from '../types';

interface CandidateModalProps {
  candidates: Candidate[];
  onSelect: (candidate: Candidate | null) => void;
  onClose: () => void;
  title: string;
}

export const CandidateModal: React.FC<CandidateModalProps> = ({ candidates, onSelect, onClose, title }) => {
  const hasCandidates = candidates.length > 0;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-lg flex flex-col max-h-[85vh] shadow-2xl relative animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        
        {/* Header */}
        <div className="p-5 text-center border-b border-gray-100 relative shrink-0">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">
            {title}
          </h3>
          
          {hasCandidates ? (
              <>
                  <div className="flex items-center justify-center gap-2 mt-2 text-vote-teal font-bold animate-pulse">
                    <Hand className="w-5 h-5 rotate-12" />
                    <span>Selecciona un candidato</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Desliza para ver más ↓</p>
              </>
          ) : (
              <div className="flex items-center justify-center gap-2 mt-4 text-orange-500 font-bold">
                  <AlertCircle className="w-6 h-6" />
                  <span>No se encontraron candidatos</span>
              </div>
          )}
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
          <style>{`
            .custom-scrollbar::-webkit-scrollbar { width: 6px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #e2e8f0; border-radius: 20px; }
          `}</style>
          
          {hasCandidates ? (
              candidates.map((candidate) => (
                <button
                  key={candidate.id}
                  onClick={() => onSelect(candidate)}
                  className="w-full bg-white border border-gray-200 rounded-2xl p-3 flex items-center gap-4 hover:border-vote-teal hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl border-2 border-vote-teal flex items-center justify-center shrink-0 group-hover:bg-cyan-50 transition-colors">
                    <span className="text-2xl md:text-3xl font-bold text-vote-teal">
                      {candidate.number}
                    </span>
                  </div>

                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-100 overflow-hidden shrink-0 border border-gray-100">
                    <img 
                      src={candidate.imageUrl || `https://picsum.photos/seed/${candidate.id}/200`} 
                      alt={candidate.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <span className="text-left text-sm font-bold text-gray-700 uppercase leading-tight">
                    {candidate.name}
                  </span>
                </button>
              ))
          ) : (
              <div className="flex flex-col items-center justify-center py-10 space-y-6">
                  <p className="text-gray-500 text-center px-6">
                      Para continuar con la simulación en este distrito, pulse el botón.
                  </p>
                  <button
                    onClick={() => onSelect(null)}
                    className="bg-vote-teal text-white font-bold py-3 px-10 rounded-xl shadow-lg hover:bg-[#005a69] transition-colors uppercase tracking-wider"
                  >
                    CONTINUAR
                  </button>
              </div>
          )}
        </div>
      </div>
    </div>
  );
};