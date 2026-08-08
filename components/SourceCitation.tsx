'use client';

import React from 'react';
import { ExternalLink, ShieldCheck, BookOpen, AlertCircle } from 'lucide-react';
import { PrimarySource } from '@/lib/news-types';

interface SourceCitationProps {
  source: PrimarySource;
  creditText?: string;
}

export const SourceCitation: React.FC<SourceCitationProps> = ({ source, creditText }) => {
  return (
    <div className="my-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
      <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-200">
        <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-brand-blue">
          <ShieldCheck size={16} className="text-brand-red" />
          <span>Fonte Primária & Atribuição Ética</span>
        </div>
        {source.originalPublishedAt && (
          <span className="text-[11px] font-semibold text-slate-500">
            Publicado na fonte em: {new Date(source.originalPublishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </span>
        )}
      </div>

      <div className="space-y-1">
        <h4 className="text-sm font-extrabold text-text-primary leading-snug">
          {source.title || source.name}
        </h4>
        <p className="text-xs text-slate-600 font-medium">
          Veículo / Organização: <strong className="text-slate-800">{source.name}</strong>
        </p>
      </div>

      {creditText && (
        <p className="text-xs italic text-slate-500 border-l-2 border-brand-red pl-3 py-0.5">
          {creditText}
        </p>
      )}

      <div className="pt-2 flex items-center justify-between flex-wrap gap-3 text-xs">
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-white border border-slate-300 hover:border-brand-blue text-brand-blue font-bold px-3.5 py-2 rounded-xl transition-all shadow-xs hover:shadow-md shrink-0"
          aria-label={`Acessar publicação original em ${source.name}`}
        >
          <BookOpen size={14} />
          <span>Acessar Publicação Original na Íntegra</span>
          <ExternalLink size={12} />
        </a>

        <div className="flex items-center gap-1 text-[11px] text-slate-400 font-semibold">
          <AlertCircle size={13} />
          <span>Link externo verificado pela Redação ACADIM</span>
        </div>
      </div>
    </div>
  );
};
