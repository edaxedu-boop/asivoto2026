import React, { useRef, useState } from 'react';
import { BallotHeader } from './BallotHeader';
import { VoteRecord } from '../types';
import { PARTIES } from '../constants';
import { Download, RotateCcw, ChevronLeft, Share2, Facebook, Instagram, MessageCircle, Twitter, X, ExternalLink } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { analytics } from '../analytics';
import confetti from 'canvas-confetti';


interface SummaryViewProps {
  votes: VoteRecord[];
  selectedDistrict: string;
  onBack: () => void;
  onRestart: () => void;
}

export const SummaryView: React.FC<SummaryViewProps> = ({ votes, selectedDistrict, onBack, onRestart }) => {
  const resultRef = useRef<HTMLDivElement>(null);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [isPdfMode, setIsPdfMode] = useState(false);

  const FALLBACK_LOGO = "https://i.imgur.com/kMm0Yr6.png";
  const FALLBACK_CANDIDATE = "https://i.imgur.com/yTpDS10.png";

  React.useEffect(() => {
    // Sonido de celebración (intento reproducir)
    const audio = new Audio('https://www.soundjay.com/human/sounds/applause-01.mp3');
    audio.volume = 0.4;
    audio.play().catch(e => console.log("Reproducción de audio bloqueada por el navegador:", e));

    // Animación de fuegos artificiales
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // Lanzar confeti desde dos puntos aleatorios arriba
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const generatePDFBlob = async (): Promise<Blob | null> => {
    if (!resultRef.current) return null;

    // ACTIVAR MODO PDF (Sube las marcas para corregir desfase)
    setIsPdfMode(true);

    // Mostrar el banner temporalmente para el PDF
    const banner = document.querySelector('.pdf-only-banner') as HTMLElement;
    if (banner) {
      banner.classList.remove('hidden');
    }

    // Pequeña pausa para que React actualice el DOM con la nueva posición
    await new Promise(resolve => setTimeout(resolve, 300));

    // Captura con alta calidad
    const canvas = await html2canvas(resultRef.current, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
    });

    // Ocultar el banner y DESACTIVAR MODO PDF
    if (banner) {
      banner.classList.add('hidden');
    }
    setIsPdfMode(false);

    const imgData = canvas.toDataURL('image/png');
    // 'l' para landscape (horizontal), 'mm' unidades, 'a4' formato
    const pdf = new jsPDF('l', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);

    // Ajustar imagen al ancho de la página horizontal (dejando un pequeño margen)
    const margin = 10;
    const contentWidth = pdfWidth - (margin * 2);
    const imgHeight = (imgProps.height * contentWidth) / imgProps.width;

    // Calcular posición Y para centrar verticalmente
    let yPos = (pdfHeight - imgHeight) / 2;
    if (yPos < 0) yPos = 0;

    // Añadimos la imagen al PDF centrada horizontalmente (margen izquierdo) y verticalmente
    pdf.addImage(imgData, 'PNG', margin, yPos, contentWidth, imgHeight);

    // CRITICAL: Añadir el link interactivo en el PDF
    const appUrl = window.location.origin + window.location.pathname;

    // Ajustamos la posición Y del link relativa a la imagen
    const bannerHeightMM = 20; // Banner un poco más delgado en horizontal
    const linkY = yPos + imgHeight - bannerHeightMM - 3;

    pdf.link(margin, linkY, contentWidth, bannerHeightMM, { url: appUrl });

    // Texto de ayuda invisible
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(1);
    pdf.text("CLICK PARA PRACTICAR TU VOTO", 10, 10);

    return pdf.output('blob');
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      const blob = await generatePDFBlob();
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `simulacro-voto-${selectedDistrict.toLowerCase()}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
        analytics.trackPDFShare(); // Track PDF download
      }
    } catch (error) {
      console.error("Error PDF:", error);
      alert("Error al generar el PDF interactivo.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Mi Simulacro de Voto 2026',
      text: "¡Mira mi simulacro de voto! Practica tú también aquí: ",
      url: window.location.href,
    };

    setIsSharing(true);
    try {
      const blob = await generatePDFBlob();
      if (!blob) throw new Error("No se pudo generar el archivo");

      const file = new File([blob], `mi-voto-digital.pdf`, { type: 'application/pdf' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          ...shareData,
          files: [file]
        });
        analytics.trackPDFShare(); // Track successful share
      } else if (navigator.share) {
        await navigator.share(shareData);
        analytics.trackPDFShare(); // Track successful share
      } else {
        setShowShareMenu(true);
      }
    } catch (error) {
      if ((error as any).name !== 'AbortError') {
        setShowShareMenu(true);
      }
    } finally {
      setIsSharing(false);
    }
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent("¡Mira mi simulacro de voto! Practica tú también aquí: " + window.location.href)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent("¡Mira mi simulacro de voto! Practica tú también aquí:")}`,
  };

  const CenteredMark = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
    <div
      className={`absolute z-30 pointer-events-none ${className}`}
      style={{
        // Web: 50% (Centrado), PDF: 35% (Posición anterior, marcas más altas)
        top: isPdfMode ? '35%' : '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <span style={{ display: 'block', lineHeight: '1', textAlign: 'center' }}>
        {children}
      </span>
    </div>
  );

  const renderCell = (vote: VoteRecord | undefined, type: 'presidential' | 'senatorial' | 'regional') => {
    if (!vote) return <div className="h-full w-full bg-gray-50"></div>;
    const { marks, prefValues, partyId } = vote;
    const party = PARTIES.find(p => p.id === partyId);
    const boxBaseClass = "w-4 h-4 xs:w-5 xs:h-5 sm:w-9 sm:h-9 md:w-11 md:h-11 border-[1px] sm:border-[2px] border-black relative bg-white shrink-0 mx-px sm:mx-1 shadow-sm overflow-hidden";

    return (
      <div className="flex flex-nowrap items-center justify-center w-full h-full">
        <div className={boxBaseClass} style={{ position: 'relative' }}>
          <img
            src={party?.logoUrl || FALLBACK_LOGO}
            alt="L"
            className="w-full h-full object-contain p-0.5 z-10"
            crossOrigin="anonymous"
            onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_LOGO; }}
          />
          {marks.logo && (
            <CenteredMark>
              <span className="text-black font-black text-[10px] sm:text-2xl md:text-4xl drop-shadow-[0_0_1px_rgba(255,255,255,1)]" style={{ lineHeight: '1' }}>X</span>
            </CenteredMark>
          )}
        </div>
        {type === 'presidential' && (
          <div className={boxBaseClass} style={{ position: 'relative' }}>
            <img
              src={party?.candidateImageUrl || FALLBACK_CANDIDATE}
              className="absolute inset-0 w-full h-full object-cover z-10"
              alt="C"
              crossOrigin="anonymous"
              onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_CANDIDATE; }}
            />
            {marks.subItem1 && (
              <CenteredMark>
                <span className="text-black font-black text-[10px] sm:text-2xl md:text-4xl drop-shadow-[0_0_1px_rgba(255,255,255,1)]" style={{ lineHeight: '1' }}>X</span>
              </CenteredMark>
            )}
          </div>
        )}
        {(type === 'senatorial' || type === 'regional') && (
          <div className={boxBaseClass} style={{ position: 'relative' }}>
            {marks.subItem1 && prefValues.pref1 !== null && (
              <CenteredMark>
                <span className="text-[7px] sm:text-xl md:text-3xl font-black text-black" style={{ lineHeight: '1' }}>{prefValues.pref1}</span>
              </CenteredMark>
            )}
          </div>
        )}
        {type === 'senatorial' && (
          <div className={boxBaseClass} style={{ position: 'relative' }}>
            {marks.subItem2 && prefValues.pref2 !== null && (
              <CenteredMark>
                <span className="text-[7px] sm:text-xl md:text-3xl font-black text-black" style={{ lineHeight: '1' }}>{prefValues.pref2}</span>
              </CenteredMark>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden relative">
      <style>{`
        @keyframes pulse-btn { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.03); } }
        .animate-pulse-fast { animation: pulse-btn 1.5s infinite; }
        .compact-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); }
        .btn-link-pdf { transition: all 0.3s ease; }
        .btn-link-pdf:active { transform: scale(0.98); background-color: #e0f2f1; }
      `}</style>
      <BallotHeader />

      <main ref={resultRef} className="flex-1 w-full max-w-4xl mx-auto px-2 flex flex-col items-center justify-start pt-4 pb-2 bg-white overflow-hidden">

        {/* Banner "Botón" Interactuable (Solo visible en PDF) */}


        <div className="w-full bg-white rounded-xl border-[2px] md:border-[3px] border-gray-800 shadow-lg overflow-hidden shrink-0">
          <div className="bg-[#d4d2d3] py-1 sm:py-1.5 px-2 sm:px-3 flex items-center justify-center border-b-2 border-gray-800">
            <div className="text-black font-black text-[10px] sm:text-sm md:text-base uppercase tracking-widest">
              MI VOTO 2026
            </div>
          </div>

          <div className="p-1 sm:p-2 md:p-2 bg-white">
            <div className="compact-grid border-[1px] border-gray-800 rounded-lg overflow-hidden shadow-inner">
              {[
                { t: 'PRESIDENTE', s: '' },
                { t: 'SENADORES', s: 'NACIONAL' },
                { t: 'SENADORES', s: 'REGIONAL' },
                { t: 'DIPUTADOS', s: '' },
                { t: 'PARLAMENTO', s: 'ANDINO' }
              ].map((h, i) => (
                <div key={i} className={`p-0.5 flex flex-col items-center justify-center min-h-[30px] sm:min-h-[50px] md:min-h-[45px] bg-gray-50 border-b-[1px] border-gray-800 ${i < 4 ? 'border-r-[1px]' : ''}`}>
                  <span className="text-[8px] sm:text-[11px] md:text-[13px] font-black uppercase text-gray-800 leading-none text-center">{h.t}</span>
                  {h.s && <span className="text-[5px] sm:text-[7px] md:text-[9px] text-gray-400 font-bold mt-0.5">{h.s}</span>}
                </div>
              ))}

              <div className="border-r-[1px] border-gray-800 min-h-[40px] sm:min-h-[70px] md:min-h-[60px] flex items-center justify-center" style={{ backgroundColor: '#deeff7' }}>
                {renderCell(votes.find(v => v.sectionId === 1), 'presidential')}
              </div>
              <div className="border-r-[1px] border-gray-800 min-h-[40px] sm:min-h-[70px] md:min-h-[60px] flex items-center justify-center" style={{ backgroundColor: '#ffdeea' }}>
                {renderCell(votes.find(v => v.sectionId === 2), 'senatorial')}
              </div>
              <div className="border-r-[1px] border-gray-800 min-h-[40px] sm:min-h-[70px] md:min-h-[60px] flex items-center justify-center" style={{ backgroundColor: '#e3cec3' }}>
                {renderCell(votes.find(v => v.sectionId === 3), 'regional')}
              </div>
              <div className="border-r-[1px] border-gray-800 min-h-[40px] sm:min-h-[70px] md:min-h-[60px] flex items-center justify-center" style={{ backgroundColor: '#deedd5' }}>
                {renderCell(votes.find(v => v.sectionId === 4), 'senatorial')}
              </div>
              <div className="min-h-[40px] sm:min-h-[70px] md:min-h-[60px] flex items-center justify-center" style={{ backgroundColor: '#fffcd6' }}>
                {renderCell(votes.find(v => v.sectionId === 5), 'senatorial')}
              </div>
            </div>

            <div className="mt-2 flex justify-between items-center px-1">
              <div className="text-[7px] sm:text-[10px] font-black text-gray-800 uppercase italic">DISTRITO: {selectedDistrict}</div>
              <div className="text-[5px] sm:text-[8px] font-bold text-gray-400 uppercase tracking-tighter">SIMULADOR ELECTORAL DIGITAL</div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm mt-3 space-y-2 shrink-0" data-html2canvas-ignore="true">
          <button
            onClick={handleShare}
            disabled={isSharing}
            className="w-full bg-vote-teal text-white font-black py-2.5 px-6 rounded-lg uppercase flex items-center justify-center gap-2 shadow-md text-[10px] border-b-2 border-[#004d5a]"
          >
            <Share2 className="w-4 h-4" /> {isSharing ? 'PREPARANDO...' : 'COMPARTIR RESULTADO'}
          </button>

          <div className="w-full p-1 bg-white border border-gray-100 rounded-xl flex justify-center shadow-sm">
            <img src="https://i.imgur.com/FRjuZ13.png" alt="Ref" className="max-h-[140px] sm:max-h-[180px] object-contain rounded-lg" />
          </div>
        </div>
        <div
          onClick={() => window.open(window.location.href, '_blank')}
          className="pdf-only-banner w-full mt-4 px-4 py-3 bg-white border-4 border-vote-teal rounded-2xl text-center shadow-lg cursor-pointer hidden"
        >
          <div className="flex items-center justify-center gap-2">
            <ExternalLink className="w-4 h-4 text-vote-teal" />
            <p className="text-vote-teal font-black text-[12px] sm:text-base uppercase tracking-tight">
              ¡PRACTICA TU VOTO AQUÍ MISMO!
            </p>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full bg-white border-t-2 border-gray-100 px-4 py-3 h-24 shadow-2xl z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 h-full">
          <button onClick={onBack} className="bg-gray-100 text-gray-500 font-bold p-3 rounded-lg flex flex-col items-center border border-gray-200 min-w-[70px]">
            <ChevronLeft className="w-4 h-4" /><span className="text-[8px]">ATRÁS</span>
          </button>

          <button
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            className={`flex-1 bg-vote-teal text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg text-xs sm:text-base border-b-4 border-[#004d5a] ${isDownloading ? 'opacity-70' : 'animate-pulse-fast'}`}
          >
            <Download className="w-5 h-5" /> {isDownloading ? 'ESPERE...' : 'DESCARGAR'}
          </button>

          <button onClick={onRestart} className="bg-gray-100 text-gray-500 font-bold p-3 rounded-lg flex flex-col items-center border border-gray-200 min-w-[70px]">
            <RotateCcw className="w-4 h-4" /><span className="text-[8px]">REINICIAR</span>
          </button>
        </div>
      </footer>

      {showShareMenu && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowShareMenu(false)}>
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl font-black text-gray-900 uppercase">COMPARTIR EN:</h4>
              <button onClick={() => setShowShareMenu(false)} className="p-1"><X className="w-6 h-6 text-gray-400" /></button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-blue-50 border border-blue-100 group">
                <Facebook className="w-8 h-8 text-[#1877F2]" />
                <span className="text-[10px] font-black uppercase text-[#1877F2]">Facebook</span>
              </a>
              <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-green-50 border border-green-100">
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
                <span className="text-[10px] font-black uppercase text-[#25D366]">WhatsApp</span>
              </a>
              <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <Twitter className="w-8 h-8 text-black" />
                <span className="text-[10px] font-black uppercase text-black">X</span>
              </a>
              <button onClick={() => { alert('¡Copia el link y compártelo!'); setShowShareMenu(false); }} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-pink-50 border border-pink-100">
                <Instagram className="w-8 h-8 text-[#E4405F]" />
                <span className="text-[10px] font-black uppercase text-[#E4405F]">Instagram</span>
              </button>
            </div>
            <p className="mt-4 text-[9px] text-gray-400 text-center font-bold uppercase">Nota: El PDF adjunto es interactivo. Al abrirlo, cualquier persona podrá tocar el banner superior para venir al simulador.</p>
          </div>
        </div>
      )}
    </div>
  );
};