'use client';

import React, { useEffect } from 'react';
import { HeaderNav } from '@/components/HeaderNav';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-surface-subtle flex flex-col text-text-primary">
      <HeaderNav />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-surface-default border border-border-subtle rounded-2xl p-8 sm:p-12 max-w-lg w-full text-center space-y-6 shadow-xl">
          <div className="text-6xl font-black text-amber-500 opacity-80">⚠️</div>
          <h1 className="text-3xl font-black text-text-primary">Algo deu errado!</h1>
          <p className="text-base text-text-secondary">
            Desculpe, encontramos um erro inesperado ao tentar carregar esta página.
          </p>
          <div className="pt-4 flex justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-2 bg-brand-red text-white text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-xl hover:bg-brand-red-hover transition-colors"
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
