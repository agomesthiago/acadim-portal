import React from 'react';
import { HeaderNav } from '@/components/HeaderNav';

export default function Loading() {
  return (
    <div className="min-h-screen bg-surface-subtle flex flex-col text-text-primary">
      <HeaderNav />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-surface-subtle border-t-brand-red rounded-full animate-spin"></div>
          <p className="text-sm font-bold text-text-tertiary animate-pulse">Carregando...</p>
        </div>
      </main>
    </div>
  );
}
