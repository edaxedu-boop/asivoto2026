import React, { useState, useEffect, useCallback } from 'react';
import { BallotHeader } from './BallotHeader';
import { ProgressBar } from './ProgressBar';
import { PartyRow } from './PartyRow';
import { CandidateModal } from './CandidateModal';
import { PARTIES, SENATOR_CANDIDATES, REGIONAL_SENATOR_CANDIDATES, REGIONAL_DEPUTY_CANDIDATES, PARLAMENTO_ANDINO_CANDIDATES } from '../constants';
import { ChevronLeft, ChevronRight, X, AlertCircle, CheckCircle2, Plus } from 'lucide-react';
import { Candidate, VoteRecord } from '../types';

const PROGRESS_STORAGE_KEY = 'voto_digital_ballot_progress';

interface BallotViewProps {
  onBack: () => void;
  onFinish: (votes: VoteRecord[]) => void;
  selectedDistrict: string;
}

export const BallotView: React.FC<BallotViewProps> = ({ onBack, onFinish, selectedDistrict }) => {
  const [currentSection, setCurrentSection] = useState(1);
  const [allVotes, setAllVotes] = useState<Record<number, VoteRecord>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  const [selectedPartyId, setSelectedPartyId] = useState<string>('p4');
  const [marks, setMarks] = useState({
    logo: false,
    subItem1: false,
    subItem2: false
  });
  const [voteValues, setVoteValues] = useState<{
    pref1: number | null,
    pref2: number | null
  }>({ pref1: null, pref2: null });

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePrefSlot, setActivePrefSlot] = useState<1 | 2 | null>(null);

  // Instruction/Error Banner
  const [showBanner, setShowBanner] = useState(true);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Audio utility to simulate "writing an X"
  const playWritingSound = useCallback(() => {
    try {
      const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      const audioCtx = new AudioContextClass();

      const playStroke = (startTime: number) => {
        const bufferSize = audioCtx.sampleRate * 0.12;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1800;
        filter.Q.value = 1.2;

        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.08, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.12);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);

        noise.start(startTime);
      };

      playStroke(audioCtx.currentTime);
      playStroke(audioCtx.currentTime + 0.15);

      setTimeout(() => audioCtx.close(), 500);
    } catch (e) {
      console.error("Audio error", e);
    }
  }, []);

  useEffect(() => {
    const savedProgress = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        if (parsed.allVotes) setAllVotes(parsed.allVotes);
        if (parsed.currentSection) setCurrentSection(parsed.currentSection);
      } catch (e) {
        console.error("Error parsing ballot progress", e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const existingVote = allVotes[currentSection];
    if (existingVote) {
      setSelectedPartyId(existingVote.partyId);
      setMarks(existingVote.marks);
      setVoteValues(existingVote.prefValues);
    } else {
      setMarks({ logo: false, subItem1: false, subItem2: false });
      setVoteValues({ pref1: null, pref2: null });
      setSelectedPartyId('p4');
    }

    setShowBanner(true);
    setValidationError(null);
    setIsModalOpen(false);
  }, [currentSection, isLoaded, allVotes]);

  useEffect(() => {
    if (!isLoaded) return;

    const currentVoteObj: VoteRecord = {
      sectionId: currentSection,
      partyId: selectedPartyId,
      marks: { ...marks },
      prefValues: { ...voteValues }
    };

    const dataToSave = {
      currentSection,
      allVotes: {
        ...allVotes,
        [currentSection]: currentVoteObj
      }
    };
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(dataToSave));
  }, [marks, voteValues, selectedPartyId, currentSection, allVotes, isLoaded]);

  const saveCurrentState = () => {
    setAllVotes(prev => ({
      ...prev,
      [currentSection]: {
        sectionId: currentSection,
        partyId: selectedPartyId,
        marks: { ...marks },
        prefValues: { ...voteValues }
      }
    }));
  };

  const handleSelectRow = (id: string) => {
    if (id === 'p4') {
      setSelectedPartyId(id);
      if (!showBanner) setShowBanner(true);
    }
  };

  const handleToggleLogo = () => {
    const nextLogoState = !marks.logo;
    setMarks(prev => ({ ...prev, logo: nextLogoState }));

    if (nextLogoState) {
      setValidationError(null);
      playWritingSound();
    }

    if (!showBanner) setShowBanner(true);
  };

  const handleToggleSubItem1 = () => {
    if (currentSection >= 2 && currentSection <= 5) {
      if (!marks.logo) {
        setValidationError("Debe marcar el símbolo del partido antes de ingresar votos preferenciales.");
        setShowBanner(true);
        return;
      }
      setValidationError(null);
      setActivePrefSlot(1);
      setIsModalOpen(true);
    } else {
      const nextState = !marks.subItem1;
      setMarks(prev => ({ ...prev, subItem1: nextState }));
      if (nextState) playWritingSound();
    }
    if (!showBanner) setShowBanner(true);
  };

  const handleToggleSubItem2 = () => {
    if (currentSection === 2 || currentSection === 4 || currentSection === 5) {
      if (!marks.logo) {
        setValidationError("Debe marcar el símbolo del partido antes de ingresar votos preferenciales.");
        setShowBanner(true);
        return;
      }
      setValidationError(null);
      setActivePrefSlot(2);
      setIsModalOpen(true);
    } else {
      setMarks(prev => ({ ...prev, subItem2: !prev.subItem2 }));
    }
    if (!showBanner) setShowBanner(true);
  };

  const handleCandidateSelect = (candidate: Candidate | null) => {
    if (!candidate) {
      // Handle "CONTINUAR" when no candidates
      const currentCandidates = getCandidatesForSection();
      if (currentCandidates.length === 0 && currentSection >= 2) {
        // For sections with 2 preference boxes, we mark both as "continuar-ready"
        setMarks(prev => ({ ...prev, subItem1: true, subItem2: true }));
      }
      setIsModalOpen(false);
      setActivePrefSlot(null);
      return;
    }

    const isMultiPref = currentSection === 2 || currentSection === 4 || currentSection === 5;

    if (isMultiPref) {
      if (activePrefSlot === 1 && voteValues.pref2 === candidate.number) {
        setValidationError("Los votos preferenciales no pueden repetirse");
        setShowBanner(true);
        setIsModalOpen(false);
        setActivePrefSlot(null);
        return;
      }
      if (activePrefSlot === 2 && voteValues.pref1 === candidate.number) {
        setValidationError("Los votos preferenciales no pueden repetirse");
        setShowBanner(true);
        setIsModalOpen(false);
        setActivePrefSlot(null);
        return;
      }
    }

    if (activePrefSlot === 1) {
      setVoteValues(prev => ({ ...prev, pref1: candidate.number }));
      setMarks(prev => ({ ...prev, subItem1: true }));
    } else if (activePrefSlot === 2) {
      setVoteValues(prev => ({ ...prev, pref2: candidate.number }));
      setMarks(prev => ({ ...prev, subItem2: true }));
    }

    setValidationError(null);
    setIsModalOpen(false);
    setActivePrefSlot(null);
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
    setValidationError(null);
  };

  const handleNext = () => {
    saveCurrentState();

    if (currentSection < 5) {
      setCurrentSection(prev => prev + 1);
    } else {
      const finalVoteData: Record<number, VoteRecord> = {
        ...allVotes,
        [currentSection]: {
          sectionId: currentSection,
          partyId: selectedPartyId,
          marks: { ...marks },
          prefValues: { ...voteValues }
        }
      };
      const votesArray = Object.values(finalVoteData).sort((a, b) => a.sectionId - b.sectionId);
      onFinish(votesArray);
    }
  };

  const handlePrevious = () => {
    saveCurrentState();
    if (currentSection > 1) {
      setCurrentSection(prev => prev - 1);
    } else {
      onBack();
    }
  };

  const getCandidatesForSection = (): Candidate[] => {
    if (currentSection === 2) return SENATOR_CANDIDATES;
    if (currentSection === 3) return REGIONAL_SENATOR_CANDIDATES[selectedDistrict] || [];
    if (currentSection === 4) return REGIONAL_DEPUTY_CANDIDATES[selectedDistrict] || [];
    if (currentSection === 5) return PARLAMENTO_ANDINO_CANDIDATES;
    return [];
  };

  const currentCandidates = getCandidatesForSection();
  const hasNoCandidates = currentSection >= 2 && currentCandidates.length === 0;

  let isVoteComplete = false;
  let bannerText = "";

  if (validationError) {
    bannerText = validationError;
  } else {
    if (currentSection === 1) {
      isVoteComplete = marks.logo && marks.subItem1;
      if (!marks.logo) bannerText = "Marca el símbolo del partido.";
      else if (!marks.subItem1) bannerText = "Marca la fotografía del candidato.";
      else bannerText = "Voto completado. Pulse Siguiente.";
    } else if (currentSection === 2 || currentSection === 4 || currentSection === 5) {
      // Sections with 2 boxes
      isVoteComplete = marks.logo && (marks.subItem1 && marks.subItem2);

      if (!marks.logo) bannerText = "Marca el símbolo del partido.";
      else if (!marks.subItem1 && !hasNoCandidates) bannerText = "Selecciona tu primer candidato preferencial.";
      else if (!marks.subItem2 && !hasNoCandidates) bannerText = "Selecciona tu segundo candidato preferencial.";
      else if (hasNoCandidates && (!marks.subItem1 || !marks.subItem2)) bannerText = "No se encontraron candidatos. Pulse los recuadros y luego Continuar.";
      else bannerText = currentSection === 5 ? "Voto completado. Pulse Finalizar." : "Voto completado. Pulse Siguiente.";
    } else if (currentSection === 3) {
      // Sections with 1 box
      isVoteComplete = marks.logo && (marks.subItem1 || hasNoCandidates);

      if (!marks.logo) bannerText = "Marca el símbolo del partido.";
      else if (!marks.subItem1 && !hasNoCandidates) bannerText = "Selecciona tu candidato preferencial.";
      else if (hasNoCandidates && !marks.subItem1) bannerText = "No se encontraron candidatos. Pulse el recuadro y luego Continuar.";
      else bannerText = "Voto completado. Pulse Siguiente.";
    }
  }

  let sectionTitle = "";
  if (currentSection === 1) sectionTitle = "Presidente y Vicepresidentes";
  else if (currentSection === 2) sectionTitle = "Senadores – Nivel Nacional";
  else if (currentSection === 3) sectionTitle = `SENADORES - (${selectedDistrict.toUpperCase()})`;
  else if (currentSection === 4) sectionTitle = `DIPUTADOS - (${selectedDistrict.toUpperCase()})`;
  else if (currentSection === 5) sectionTitle = "PARLAMENTO ANDINO";

  const getRowVariant = () => {
    if (currentSection === 1) return 'presidential';
    if (currentSection === 3) return 'regional';
    return 'senatorial';
  };

  const isFinalStep = currentSection === 5;

  if (!isLoaded) return null;

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden relative">
      <style>{`
        @keyframes heartbeat-btn {
          0% { transform: scale(1); }
          14% { transform: scale(1.05); }
          28% { transform: scale(1); }
          42% { transform: scale(1.05); }
          70% { transform: scale(1); }
        }
        .animate-heartbeat-btn { animation: heartbeat-btn 2s infinite; }
      `}</style>

      {isModalOpen && (
        <CandidateModal
          title={sectionTitle}
          candidates={currentCandidates}
          onSelect={handleCandidateSelect}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <BallotHeader />

      <main className="flex-1 flex flex-col w-full max-w-5xl mx-auto px-2 sm:px-4 min-h-0 py-1 sm:py-2">
        <div className="shrink-0 mb-1 sm:mb-2">
          <ProgressBar current={currentSection} total={5} />
        </div>

        <div className={`flex-1 flex flex-col border-2 border-black rounded-xl overflow-visible shadow-lg bg-white mb-20 min-h-0`}>
          <div className="bg-white border-b-2 border-black py-1 sm:py-2 text-center shrink-0 rounded-t-[10px]">
            <h2 className="text-black font-extrabold text-sm sm:text-base uppercase tracking-tight">
              {sectionTitle}
            </h2>
          </div>

          <div className="bg-[#d3d3d1] border-b-2 border-black py-1 px-0.5 sm:py-2 sm:px-4 shrink-0 flex flex-wrap items-center justify-center gap-x-1 sm:gap-x-2 gap-y-0.5 text-black font-bold text-[8px] xs:text-[10px] sm:text-sm uppercase leading-none sm:leading-tight text-center tracking-tight">
            <span>MARQUE CON UNA CRUZ</span>
            <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 bg-white border border-black flex items-center justify-center shadow-sm shrink-0">
              <Plus className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-black stroke-[4]" />
            </div>
            <span>O UN ASPA</span>
            <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 bg-white border border-black flex items-center justify-center shadow-sm shrink-0">
              <X className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-black stroke-[4]" />
            </div>
            <span>DENTRO DEL RECUADRO DEL SÍMBOLO Y/O FOTOGRAFÍA DE SU CANDIDATO A ELEGIR</span>
          </div>

          <div className="flex-1 flex flex-col overflow-y-auto overflow-x-visible hide-scrollbar">
            {PARTIES.map((party, index) => {
              const isSelected = selectedPartyId === party.id;
              const isDimmed = selectedPartyId !== null && !isSelected;

              return (
                <React.Fragment key={party.id}>
                  <PartyRow
                    party={party}
                    isSelected={isSelected}
                    isDimmed={isDimmed}
                    onSelect={handleSelectRow}
                    isEven={index % 2 === 0}
                    variant={getRowVariant()}
                    currentSection={currentSection}
                    isLogoMarked={isSelected ? marks.logo : false}
                    isSubItem1Marked={isSelected ? marks.subItem1 : false}
                    isSubItem2Marked={isSelected ? marks.subItem2 : false}
                    subItem1Value={isSelected ? voteValues.pref1 : null}
                    subItem2Value={isSelected ? voteValues.pref2 : null}
                    onToggleLogo={isSelected ? handleToggleLogo : undefined}
                    onToggleSubItem1={isSelected ? handleToggleSubItem1 : undefined}
                    onToggleSubItem2={isSelected ? handleToggleSubItem2 : undefined}
                  />

                  {isSelected && showBanner && (
                    <div className={`
                        border-t border-b px-2 sm:px-4 py-1.5 sm:py-2 flex justify-between items-center animate-in fade-in slide-in-from-top-2 duration-200 shrink-0 relative z-20
                        ${validationError ? 'bg-orange-50 border-orange-200' : 'bg-[#fff9c4] border-vote-yellow'}
                    `}>
                      <div className="flex items-center gap-2">
                        {validationError && <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 shrink-0" />}
                        <span className={`font-bold text-xs sm:text-sm ${validationError ? 'text-orange-800' : 'text-vote-teal'}`}>
                          {bannerText}
                        </span>
                      </div>
                      <button
                        onClick={handleCloseBanner}
                        className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-black/5 transition-colors"
                      >
                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-3 px-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 h-20">
        <div className="max-w-5xl mx-auto flex justify-between items-center gap-4 h-full">
          <button
            onClick={handlePrevious}
            className="flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500 font-bold uppercase text-sm hover:bg-gray-100 transition-colors w-32"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Atrás
          </button>

          <button
            onClick={handleNext}
            disabled={!isVoteComplete}
            className={`
                flex-1 flex items-center justify-center px-6 py-3 rounded-lg font-bold uppercase text-sm transition-all duration-300 shadow-sm max-w-md
                ${isVoteComplete
                ? 'bg-vote-teal hover:bg-[#005a69] text-white animate-heartbeat-btn shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
            `}
          >
            {isFinalStep ? 'Finalizar' : 'Siguiente'}
            {isFinalStep ? <CheckCircle2 className="w-5 h-5 ml-2" /> : <ChevronRight className="w-5 h-5 ml-1" />}
          </button>
        </div>
      </footer>
    </div>
  );
};