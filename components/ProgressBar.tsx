import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-6 bg-cyan-50 rounded-lg py-3 px-6 flex items-center justify-between border border-cyan-100 shadow-sm">
      <span className="text-gray-500 font-medium text-sm md:text-base">
        Sección {current} de {total}
      </span>
      
      <div className="flex space-x-2">
        {Array.from({ length: total }).map((_, idx) => (
          <div 
            key={idx}
            className={`h-2 w-8 rounded-full ${
              idx + 1 === current 
                ? 'bg-vote-teal' 
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};