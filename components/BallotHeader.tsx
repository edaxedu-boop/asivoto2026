import React from 'react';

export const BallotHeader: React.FC = () => {
  return (
    <header className="w-full bg-vote-teal text-white py-4 shadow-md">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wide">
          Cédula de Votación Digital - Práctica
        </h1>
        <p className="text-sm md:text-base text-cyan-100 mt-1 font-light">
          Simulador de Votación Electoral
        </p>
      </div>
    </header>
  );
};