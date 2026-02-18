import React from 'react';
import { MousePointer2 } from 'lucide-react';

interface HomeProps {
   onStart: () => void;
}

export const Home: React.FC<HomeProps> = ({ onStart }) => {
   return (
      <div className="h-screen w-full bg-white flex flex-col items-center py-6 px-4 font-sans overflow-hidden relative">
         <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes cursor-path {
          0% { top: 35%; left: 12%; opacity: 0; transform: scale(1.2); }
          5% { opacity: 1; }
          20% { top: 35%; left: 12%; transform: scale(1); }
          
          35% { top: 45%; left: 82%; transform: scale(1); }
          55% { top: 45%; left: 82%; transform: scale(1); }
          
          70% { top: 80%; left: 50%; transform: scale(1); }
          85% { top: 88%; left: 50%; transform: scale(0.9); }
          
          95% { opacity: 0; }
          100% { top: 35%; left: 12%; opacity: 0; transform: scale(1.2); }
        }
        @keyframes heartbeat {
          0% { transform: scale(1); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
          5% { transform: scale(1.05); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
          10% { transform: scale(1); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
          15% { transform: scale(1.05); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
          50% { transform: scale(1); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
          100% { transform: scale(1); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
        }
        .animate-float-1 { animation: float 4s ease-in-out infinite; }
        .animate-float-2 { animation: float 5s ease-in-out infinite 0.5s; }
        .animate-float-3 { animation: float 4.5s ease-in-out infinite 1s; }
        .animate-cursor-path { animation: cursor-path 8s ease-in-out infinite; }
        .animate-heartbeat { animation: heartbeat 2s infinite; }
      `}</style>

         {/* Title */}
         <h1 className="text-3xl md:text-5xl font-black text-black mb-2 text-center uppercase tracking-tight shrink-0 z-10">
            ASISEVOTA2026
         </h1>

         {/* Desktop Layout (Image + Popups) */}
         <div className="hidden md:flex flex-1 w-full relative items-center justify-center min-h-0">
            <div className="relative h-full w-full max-w-7xl flex items-center justify-center">
               <img
                  src="/images/img2.png"
                  alt="Muestra de Cédula Escritorio"
                  className="max-h-full max-w-full object-contain drop-shadow-2xl rounded-2xl md:rounded-3xl"
               />

               {/* Popup 1: Left */}
               <div className="absolute left-[2%] xl:left-[8%] top-[30%] max-w-[240px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-4 animate-float-1 z-20">
                  <div className="flex items-start gap-3">
                     <div className="flex-shrink-0 w-8 h-8 bg-vote-teal text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">1</div>
                     <p className="text-sm font-semibold text-gray-700 leading-tight pt-1">Busca tu candidato en la tabla</p>
                  </div>
                  <div className="absolute top-1/2 -right-2 w-4 h-4 bg-white border-t border-r border-gray-100 transform rotate-45 shadow-sm"></div>
               </div>

               {/* Popup 2: Right */}
               <div className="absolute right-[2%] xl:right-[8%] top-[40%] max-w-[260px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-4 animate-float-2 z-20">
                  <div className="flex items-start gap-3">
                     <div className="flex-shrink-0 w-8 h-8 bg-vote-teal text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">2</div>
                     <p className="text-sm font-semibold text-gray-700 leading-tight pt-1">Una vez encontrado tu candidato.</p>
                  </div>
                  <div className="absolute top-1/2 -left-2 w-4 h-4 bg-white border-b border-l border-gray-100 transform rotate-45 shadow-sm"></div>
               </div>

               {/* Popup 3: Bottom Center */}
               <div className="absolute bottom-[2%] left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-3 z-20 whitespace-nowrap animate-float-3">
                  <div className="flex items-center gap-3">
                     <div className="flex-shrink-0 w-6 h-6 bg-vote-teal text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm">3</div>
                     <p className="text-sm font-bold text-vote-teal">Haz clic en "Iniciar Simulación" ↓</p>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45 -translate-x-1/2 shadow-sm"></div>
               </div>

               {/* Cursor Animation Layer */}
               <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
                  <div className="absolute animate-cursor-path">
                     <MousePointer2 className="w-12 h-12 text-white fill-black drop-shadow-2xl opacity-90" />
                  </div>
               </div>
            </div>
         </div>

         {/* Mobile Layout (Image + Popups Replicated) */}
         <div className="md:hidden flex-1 w-full flex items-center justify-center min-h-0 overflow-visible mb-4 relative">
            <div className="relative h-full w-full flex items-center justify-center">
               <img
                  src="/images/img1.png"
                  alt="Muestra de Cédula Móvil"
                  className="max-h-full max-w-full object-contain drop-shadow-2xl rounded-xl"
               />

               {/* Mobile Popup 1 */}
               <div className="absolute left-[-2%] top-[15%] max-w-[140px] bg-white rounded-lg shadow-xl border border-gray-100 p-2 animate-float-1 z-20 scale-90 origin-left">
                  <div className="flex items-start gap-2">
                     <div className="flex-shrink-0 w-5 h-5 bg-vote-teal text-white rounded-full flex items-center justify-center font-bold text-xs">1</div>
                     <p className="text-[10px] font-bold text-gray-800 leading-tight">Busca tu candidato en la tabla</p>
                  </div>
                  <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white border-t border-r border-gray-100 transform rotate-45 shadow-sm"></div>
               </div>

               {/* Mobile Popup 2: Positioned LOWER as requested */}
               <div className="absolute right-[-2%] top-[52%] max-w-[160px] bg-white rounded-lg shadow-xl border border-gray-100 p-2 animate-float-2 z-20 scale-90 origin-right">
                  <div className="flex items-start gap-2">
                     <div className="flex-shrink-0 w-5 h-5 bg-vote-teal text-white rounded-full flex items-center justify-center font-bold text-xs">2</div>
                     <p className="text-[10px] font-bold text-gray-800 leading-tight">Una vez encontrado tu candidato.</p>
                  </div>
                  <div className="absolute top-1/2 -left-1 w-2 h-2 bg-white border-b border-l border-gray-100 transform rotate-45 shadow-sm"></div>
               </div>

               {/* Mobile Popup 3 */}
               <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl border border-gray-100 p-2 z-20 whitespace-nowrap animate-float-3 scale-90">
                  <div className="flex items-center gap-2">
                     <div className="flex-shrink-0 w-5 h-5 bg-vote-teal text-white rounded-full flex items-center justify-center font-bold text-xs">3</div>
                     <p className="text-[10px] font-bold text-vote-teal">Clic en "Iniciar" ↓</p>
                  </div>
                  <div className="absolute -bottom-1.5 left-1/2 w-3 h-3 bg-white border-b border-r border-gray-100 transform rotate-45 -translate-x-1/2 shadow-sm"></div>
               </div>

               {/* Cursor Animation Layer for Mobile (Added) */}
               <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
                  <div className="absolute animate-cursor-path">
                     <MousePointer2 className="w-10 h-10 text-white fill-black drop-shadow-2xl opacity-80" />
                  </div>
               </div>
            </div>
         </div>

         {/* Button */}
         <button
            onClick={onStart}
            className="bg-vote-teal hover:bg-[#005a69] text-white font-black py-4 px-16 rounded-full text-xl md:text-2xl shadow-xl transform shrink-0 z-30 mt-auto md:mt-2 animate-heartbeat hover:animate-none hover:scale-105 transition-all"
         >
            Iniciar Simulación
         </button>

      </div>
   );
};