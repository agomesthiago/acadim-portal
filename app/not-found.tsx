import React from 'react';
import Link from 'next/link';
import { HeaderNav } from '@/components/HeaderNav';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-subtle flex flex-col text-text-primary">
      <HeaderNav />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-surface-default border border-border-subtle rounded-2xl p-8 sm:p-12 max-w-lg w-full text-center space-y-6 shadow-xl">
          <div className="text-6xl font-black text-brand-red opacity-80">404</div>
          <h1 className="text-3xl font-black text-text-primary">Página não encontrada</h1>
          <p className="text-base text-text-secondary">
            O conteúdo que você está procurando pode ter sido removido, mudado de nome, ou está temporariamente indisponível.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-brand-red text-white text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-xl hover:bg-brand-red-hover transition-colors"
            >
              Voltar ao Início
            </Link>
            <Link
              href="/distrofias"
              className="inline-flex items-center justify-center gap-2 bg-surface-subtle text-text-primary border border-border-subtle text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-xl hover:bg-slate-200 transition-colors"
            >
              Enciclopédia Médica
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
