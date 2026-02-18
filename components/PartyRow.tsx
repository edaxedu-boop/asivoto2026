import React from 'react';
import { Party } from '../types';
import { User, X as XIcon } from 'lucide-react';

interface PartyRowProps {
  party: Party;
  isSelected: boolean;
  isDimmed: boolean;
  onSelect: (id: string) => void;
  isEven: boolean;

  // Design Variant
  variant?: 'presidential' | 'senatorial' | 'regional';

  // Marks
  isLogoMarked?: boolean;
  isSubItem1Marked?: boolean;
  isSubItem2Marked?: boolean;

  // Values (Text to display in the boxes, overrides default "1" or "2" or "X")
  subItem1Value?: string | number | null;
  subItem2Value?: string | number | null;

  // Handlers
  onToggleLogo?: () => void;
  onToggleSubItem1?: () => void;
  onToggleSubItem2?: () => void;
  currentSection?: number;
}

export const PartyRow: React.FC<PartyRowProps> = ({
  party,
  isSelected,
  isDimmed,
  onSelect,
  isEven,
  variant = 'presidential',
  isLogoMarked = false,
  isSubItem1Marked = false,
  isSubItem2Marked = false,
  subItem1Value,
  subItem2Value,
  onToggleLogo,
  onToggleSubItem1,
  onToggleSubItem2,
  currentSection
}) => {
  // Only allow pointer cursor/interaction for the selectable item (p4)
  const canSelect = party.id === 'p4';

  // --- Pointer & Popup Logic ---
  const showLogoPointer = canSelect && isSelected && !isLogoMarked;

  let showSub1Pointer = false;
  let showSub2Pointer = false;

  if (variant === 'presidential') {
    showSub1Pointer = canSelect && isSelected && isLogoMarked && !isSubItem1Marked;
  } else if (variant === 'senatorial') {
    showSub1Pointer = canSelect && isSelected && isLogoMarked && !isSubItem1Marked;
    showSub2Pointer = canSelect && isSelected && isLogoMarked && isSubItem1Marked && !isSubItem2Marked;
  } else if (variant === 'regional') {
    showSub1Pointer = canSelect && isSelected && isLogoMarked && !isSubItem1Marked;
  }

  // Define where the instruction popup should appear
  const showLogoInstruction = showLogoPointer;
  const showSub1Instruction = showSub1Pointer && variant === 'presidential'; // Only for Section 1 Candidate Image
  const showSub2Instruction = false; // Never for preference boxes

  // Pointer Components
  const TrianglePointerUp = () => (
    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 animate-bounce z-[70] pointer-events-none">
      <div className="w-0 h-0 
        border-l-[10px] border-l-transparent
        border-b-[16px] border-b-cyan-400
        border-r-[10px] border-r-transparent
        drop-shadow-lg"
      ></div>
    </div>
  );

  const TrianglePointerDown = () => (
    <div className="absolute -top-7 left-1/2 -translate-x-1/2 animate-bounce z-[70] pointer-events-none">
      <div className="w-0 h-0 
        border-l-[10px] border-l-transparent
        border-t-[16px] border-t-cyan-400
        border-r-[10px] border-r-transparent
        drop-shadow-lg"
      ></div>
    </div>
  );

  const InstructionPopup = () => (
    <div className="absolute bottom-[calc(100%+12px)] right-2 w-[160px] xs:w-[190px] md:w-[240px] z-[80] pointer-events-none drop-shadow-2xl">
      <div className="bg-vote-teal text-white text-[9px] xs:text-[10px] md:text-[12px] font-black py-3 px-3 rounded-2xl border-2 border-white text-center leading-tight uppercase tracking-tight shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        RECUERDA AL MARCAR CON UNA X O + TIENE QUE ESTAR DENTRO DEL RECUADRO NO SALIRTE
      </div>
      <div className="absolute -bottom-2 right-4 w-5 h-5 bg-vote-teal rotate-45 border-r-2 border-b-2 border-white"></div>
    </div>
  );

  const XOverlay = () => (
    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
      <XIcon className="w-full h-full text-black stroke-[4] opacity-90 p-1" />
    </div>
  );

  const NumberOverlay = ({ num }: { num: string | number }) => (
    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
      <span className="text-3xl font-black text-black">{num}</span>
    </div>
  );

  const contentBlurStyle = !isSelected ? 'opacity-50 blur-[3px]' : '';
  const boxBorderStyle = isSelected ? 'border-black border-[3px]' : 'border-gray-400 border-[2px]';

  return (
    <div
      onClick={() => onSelect(party.id)}
      className={`
        relative flex-1 flex items-center justify-between px-2 sm:px-4 transition-all duration-300 select-none
        ${canSelect ? 'cursor-pointer' : 'cursor-default'}
        ${isSelected ? 'bg-[#ffe4e6] border-y-2 border-vote-yellow z-[50]' : (currentSection === 5 ? 'bg-[#fffcd6]' : (currentSection === 4 ? 'bg-[#deedd5]' : (currentSection === 3 ? 'bg-[#e0ccc1]' : (variant === 'presidential' ? 'bg-[#dff0fa]' : (variant === 'senatorial' ? 'bg-[#fcdce7]' : (isEven ? 'bg-white' : 'bg-[#f8fcfd]'))))))} 
        ${isSelected && (variant === 'senatorial' || variant === 'regional') ? '!bg-[#ffebee]' : (isSelected ? '!bg-[#e3f2fd]' : '')}
        ${!isSelected && 'border-b border-black'}
      `}
    >
      <div className={`flex-1 pr-2 sm:pr-4 transition-all duration-300 flex items-center self-stretch`}>
        {party.displayNumber && (
          <div className="border-r border-black pr-2 mr-2 py-4 h-full flex items-center self-stretch">
            <span className="text-xs sm:text-sm font-bold shrink-0 text-black">
              {party.displayNumber}
            </span>
          </div>
        )}
        <span className={`text-xs sm:text-sm uppercase ${isSelected ? 'text-black font-black tracking-tight' : 'text-gray-500 font-medium'}`}>
          {party.name}
        </span>
      </div>

      <div className={`flex space-x-2 sm:space-x-3 items-center py-0.5 sm:py-1 relative`}>

        {/* LOGO BOX */}
        <div className="relative" onClick={(e) => { if (canSelect && onToggleLogo) { e.stopPropagation(); onToggleLogo(); } }}>
          {showLogoPointer && (showLogoInstruction ? <TrianglePointerUp /> : <TrianglePointerDown />)}
          {showLogoInstruction && <InstructionPopup />}

          <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white flex items-center justify-center shadow-sm relative overflow-hidden ${boxBorderStyle}`}>
            {isLogoMarked && <XOverlay />}
            <div className={`w-full h-full p-0.5 flex items-center justify-center transition-all duration-300 ${contentBlurStyle}`}>
              {party.logoUrl ? (
                <img src={party.logoUrl} alt="Logo" className="w-full h-full object-contain" />
              ) : party.id === 'p4' ? (
                <div className="w-full h-full bg-[#009ee3] flex items-center justify-center border border-black/10">
                  <span className="text-white font-black text-4xl leading-none font-sans drop-shadow-sm">R</span>
                </div>
              ) : (
                <div className={`w-full h-full ${party.logoColor} flex items-center justify-center`}>
                  <span className="text-white font-bold text-2xl">{party.logoInitial}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* PRESIDENTIAL (Candidate Photo) */}
        {variant === 'presidential' && (
          <div className="relative" onClick={(e) => { if (canSelect && onToggleSubItem1) { e.stopPropagation(); onToggleSubItem1(); } }}>
            {showSub1Pointer && (showSub1Instruction ? <TrianglePointerUp /> : <TrianglePointerDown />)}
            {showSub1Instruction && <InstructionPopup />}

            <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white flex items-center justify-center shadow-sm overflow-hidden relative ${boxBorderStyle}`}>
              {isSubItem1Marked && <XOverlay />}
              <div className={`w-full h-full flex items-center justify-center transition-all duration-300 ${contentBlurStyle}`}>
                {party.candidateImageUrl ? (
                  <img src={party.candidateImageUrl} alt="Candidate" className="w-full h-full object-cover" />
                ) : party.hasCandidateImage ? (
                  <img src={`https://picsum.photos/seed/${party.id}/200`} alt="Candidate" className="w-full h-full object-cover" />
                ) : (
                  <User className="text-gray-300 w-8 h-8" />
                )}
              </div>
            </div>
          </div>
        )}

        {/* SENATORIAL (2 Preference Boxes) */}
        {variant === 'senatorial' && (
          <>
            <div className="relative" onClick={(e) => { if (canSelect && onToggleSubItem1) { e.stopPropagation(); onToggleSubItem1(); } }}>
              {showSub1Pointer && (showSub1Instruction ? <TrianglePointerUp /> : <TrianglePointerDown />)}
              {showSub1Instruction && <InstructionPopup />}
              <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white flex items-center justify-center shadow-sm relative ${boxBorderStyle}`}>
                {isSubItem1Marked && <NumberOverlay num={subItem1Value || "1"} />}
              </div>
            </div>

            <div className="relative" onClick={(e) => { if (canSelect && onToggleSubItem2) { e.stopPropagation(); onToggleSubItem2(); } }}>
              {showSub2Pointer && (showSub2Instruction ? <TrianglePointerUp /> : <TrianglePointerDown />)}
              {showSub2Instruction && <InstructionPopup />}
              <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white flex items-center justify-center shadow-sm relative ${boxBorderStyle}`}>
                {isSubItem2Marked && <NumberOverlay num={subItem2Value || "2"} />}
              </div>
            </div>
          </>
        )}

        {/* REGIONAL (1 Preference Box) */}
        {variant === 'regional' && (
          <div className="relative" onClick={(e) => { if (canSelect && onToggleSubItem1) { e.stopPropagation(); onToggleSubItem1(); } }}>
            {showSub1Pointer && (showSub1Instruction ? <TrianglePointerUp /> : <TrianglePointerDown />)}
            {showSub1Instruction && <InstructionPopup />}
            <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white flex items-center justify-center shadow-sm relative ${boxBorderStyle}`}>
              {isSubItem1Marked && <NumberOverlay num={subItem1Value || "1"} />}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};