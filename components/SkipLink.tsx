'use client';

import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-brand-red focus:text-white focus:font-black focus:text-sm focus:px-6 focus:py-3 focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white"
    >
      Ir para o conteúdo principal (Atalho de Acessibilidade)
    </a>
  );
};
