'use client';

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import Image from 'next/image';

import React, { useState, useEffect } from 'react';

const MASCOT_OPTIONS = [
  { src: '/clara.svg', alt: 'Clara, fundadora da ACADIM' },
  { src: '/pedro.svg', alt: 'Pedro, fundador da ACADIM' },
  { src: '/mascotes.png', alt: 'Clara e Pedro, fundadores da ACADIM' },
];

export default function NotFound() {
  // Estado com valor determinístico inicial para evitar hydration mismatch
  const [selectedMascot, setSelectedMascot] = useState(MASCOT_OPTIONS[2]);

  useEffect(() => {
    // Seleciona aleatoriamente no cliente após a montagem
    const randomIndex = Math.floor(Math.random() * MASCOT_OPTIONS.length);
    setSelectedMascot(MASCOT_OPTIONS[randomIndex]);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-subtle px-4 py-12">
      <div className="max-w-md w-full bg-surface-default p-8 sm:p-12 rounded-3xl border border-border-default shadow-xl text-center space-y-6">
        <div className="relative w-48 h-48 mx-auto">
          <Image
            src={selectedMascot.src}
            alt={selectedMascot.alt}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-black text-text-primary">Ops! Página não encontrada</h1>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            A página que você tentou acessar não existe, foi movida ou está temporariamente indisponível.
          </p>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-red text-white text-xs font-black uppercase tracking-wider rounded-xl hover:bg-brand-red-hover transition-colors min-h-[44px]"
          >
            <Home size={16} />
            Voltar ao Início
          </Link>
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.history.back();
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-slate-200 text-slate-600 text-xs font-black uppercase tracking-wider rounded-xl hover:border-brand-red hover:text-brand-red transition-all min-h-[44px]"
          >
            <ArrowLeft size={16} />
            Página Anterior
          </button>
        </div>
      </div>
    </div>
  );
}
