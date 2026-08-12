import React from 'react';
import Link from 'next/link';
import { DiseaseDetail, MedicalGroup } from '@/lib/distrofias-types';
import { Dna, Activity, ArrowRight } from 'lucide-react';

interface DistrofiaCardProps {
  disease: DiseaseDetail;
  accent: {
    border: string;
    bg: string;
    text: string;
    badgeBg: string;
  };
}

export const DistrofiaCard: React.FC<DistrofiaCardProps> = ({ disease, accent }) => {
  return (
    <article
      className={`bg-white dark:bg-slate-900 rounded-2xl border-l-4 ${accent.border} border-y border-r border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group`}
    >
      <div className="space-y-4">
        {/* Subtype Badge & CID */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${accent.badgeBg}`}>
            {disease.shortName}
          </span>
          {disease.cid && (
            <span className="text-xs font-mono text-slate-600 dark:text-slate-400 font-semibold bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
              CID: {disease.cid}
            </span>
          )}
        </div>

        {/* Título Principal */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-blue transition-colors">
            {disease.name}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
            {disease.group}
          </p>
        </div>

        {/* Resumo Acessível */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
          {disease.summary}
        </p>

        {/* Ficha Genética Rápida */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2 text-xs">
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1.5 font-medium">
              <Dna className="w-3.5 h-3.5 text-blue-500 shrink-0" /> Gene Mutado:
            </span>
            <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{disease.gene}</span>
          </div>

          <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1.5 font-medium">
              <Activity className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Início Típico:
            </span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">{disease.onsetAge}</span>
          </div>
        </div>
      </div>

      {/* CTA para Ficha Completa */}
      <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800">
        <Link
          href={`/distrofias/${disease.slug}`}
          className="inline-flex items-center justify-between w-full text-xs font-bold text-brand-blue dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-950/30"
          aria-label={`Ver detalhes completos sobre a ${disease.name}`}
        >
          <span>Ver sintomas, diagnóstico e cuidados</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};
