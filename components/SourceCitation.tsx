'use client';

import React from 'react';
import { ShieldCheck, BookOpen, AlertCircle } from 'lucide-react';
import { PrimarySource } from '@/lib/news-types';
import { formatDate } from '@/lib/date-utils';

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
            Publicado na fonte em: {formatDate(source.originalPublishedAt, { day: '2-digit', month: 'long', year: 'numeric' })}
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
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
          <BookOpen size={14} className="text-brand-blue" />
          <span>Atribuição Editorial e Revisão pela Redação ACADIM</span>
        </div>

        <div className="flex items-center gap-1 text-[11px] text-slate-400 font-semibold">
          <AlertCircle size={13} />
          <span>Fonte primária jornalística / institucional</span>
        </div>
      </div>
    </div>
  );
};
