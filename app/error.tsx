'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RefreshCcw, Home } from 'lucide-react';

const MASCOT_OPTIONS = [
  { src: '/clara.svg', alt: 'Clara, mascote fundadora da ACADIM' },
  { src: '/pedro.svg', alt: 'Pedro, mascote fundador da ACADIM' },
  { src: '/mascotes.png', alt: 'Clara e Pedro, mascotes fundadores da ACADIM' },
];

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [selectedMascot, setSelectedMascot] = useState(MASCOT_OPTIONS[2]);

  useEffect(() => {
    console.error('ACADIM Error Boundary Caught:', error);
    const randomIndex = Math.floor(Math.random() * MASCOT_OPTIONS.length);
    setSelectedMascot(MASCOT_OPTIONS[randomIndex]);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-subtle px-4 py-12">
      <div className="max-w-md w-full bg-surface-default p-8 sm:p-12 rounded-3xl border border-border-default shadow-xl text-center space-y-6">
        <div className="relative w-40 h-40 mx-auto">
          <Image
            src={selectedMascot.src}
            alt={selectedMascot.alt}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-black text-text-primary">Algo deu errado</h1>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            Desculpe, encontramos um erro inesperado ao tentar carregar esta página. Nossa equipe técnica já pode estar ciente.
          </p>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-red text-white text-xs font-black uppercase tracking-wider rounded-xl hover:bg-brand-red-hover transition-colors min-h-[44px]"
          >
            <RefreshCcw size={16} />
            Tentar Novamente
          </button>
          
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-slate-200 text-slate-600 text-xs font-black uppercase tracking-wider rounded-xl hover:border-brand-red hover:text-brand-red transition-all min-h-[44px]"
          >
            <Home size={16} />
            Página Inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
