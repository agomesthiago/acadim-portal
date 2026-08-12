'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { DiseaseDetail, MedicalGroup } from '@/lib/distrofias-types';
import { Dna, Activity, ShieldAlert, Search, Filter, ArrowRight, HeartPulse, Sparkles } from 'lucide-react';

interface DistrofiasSearchClientProps {
  diseases: DiseaseDetail[];
  groups: MedicalGroup[];
}

const GROUP_ACCENTS: Record<string, { border: string; bg: string; text: string; badgeBg: string }> = {
  'Distrofinopatias': {
    border: 'border-l-brand-red',
    bg: 'bg-red-50/40 dark:bg-red-950/10',
    text: 'text-brand-red',
    badgeBg: 'bg-brand-red/10 text-brand-red',
  },
  'Distrofias Musculares das Cinturas (LGMD)': {
    border: 'border-l-brand-blue',
    bg: 'bg-blue-50/40 dark:bg-blue-950/10',
    text: 'text-brand-blue',
    badgeBg: 'bg-brand-blue/10 text-brand-blue',
  },
  'Distrofias Musculares Congênitas (CMD)': {
    border: 'border-l-purple-500',
    bg: 'bg-purple-50/40 dark:bg-purple-950/10',
    text: 'text-purple-600 dark:text-purple-400',
    badgeBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  },
  'Facioscapuloumeral (FSHD)': {
    border: 'border-l-emerald-500',
    bg: 'bg-emerald-50/40 dark:bg-emerald-950/10',
    text: 'text-emerald-600 dark:text-emerald-400',
    badgeBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  'Miotônica (DM)': {
    border: 'border-l-amber-500',
    bg: 'bg-amber-50/40 dark:bg-amber-950/10',
    text: 'text-amber-600 dark:text-amber-400',
    badgeBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  'Emery-Dreifuss (EDMD)': {
    border: 'border-l-indigo-500',
    bg: 'bg-indigo-50/40 dark:bg-indigo-950/10',
    text: 'text-indigo-600 dark:text-indigo-400',
    badgeBg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  },
  'Oculofaríngea (OPMD)': {
    border: 'border-l-rose-500',
    bg: 'bg-rose-50/40 dark:bg-rose-950/10',
    text: 'text-rose-600 dark:text-rose-400',
    badgeBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  },
};

export const DistrofiasSearchClient: React.FC<DistrofiasSearchClientProps> = ({ diseases, groups }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('todos');

  const filteredDiseases = useMemo(() => {
    return diseases.filter((d) => {
      const matchesGroup = selectedGroup === 'todos' || d.group === selectedGroup;
      const query = searchQuery.toLowerCase().trim();

      if (!query) return matchesGroup;

      const matchesSearch =
        d.name.toLowerCase().includes(query) ||
        d.shortName.toLowerCase().includes(query) ||
        d.gene.toLowerCase().includes(query) ||
        d.protein.toLowerCase().includes(query) ||
        (d.cid && d.cid.toLowerCase().includes(query)) ||
        d.summary.toLowerCase().includes(query) ||
        d.affectedSystems.some((sys) => sys.toLowerCase().includes(query)) ||
        d.synonyms.some((s) => s.toLowerCase().includes(query));

      return matchesGroup && matchesSearch;
    });
  }, [diseases, selectedGroup, searchQuery]);

  return (
    <section id="encontre-uma-condicao" className="space-y-8 scroll-mt-28">
      {/* Barra de Busca & Filtros por Grupo */}
      <div className="bg-surface-default border border-border-subtle p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Input de Busca */}
          <div className="relative flex-1">
            <label htmlFor="distrofia-search" className="sr-only">Buscar Distrofia Muscular</label>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} aria-hidden="true" />
            <input
              id="distrofia-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Busque por doença, gene, sigla ou CID..."
              className="w-full pl-11 pr-4 py-3.5 bg-surface-subtle border border-border-default rounded-2xl text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
            />
          </div>

          {/* Contador de Resultados */}
          <div className="text-xs font-extrabold text-text-secondary whitespace-nowrap bg-surface-subtle px-4 py-3.5 rounded-2xl border border-border-subtle text-center shrink-0">
            {filteredDiseases.length} {filteredDiseases.length === 1 ? 'condição encontrada' : 'condições encontradas'}
          </div>
        </div>

        {/* Dica de busca amigável */}
        <p className="text-xs text-text-tertiary flex items-center gap-1.5 font-medium">
          <Sparkles size={14} className="text-brand-blue shrink-0" />
          <span>Não sabe o nome exato? Digite uma palavra que você conhece (ex: criança, coração, deglutição, braço, DMD, G71.0).</span>
        </p>

        {/* Filtros por Grupo (Scroll horizontal em mobile) */}
        <div className="space-y-3 pt-2 border-t border-border-subtle">
          <span className="text-xs font-extrabold uppercase tracking-wider text-text-tertiary flex items-center gap-1.5">
            <Filter size={14} />
            <span>Selecione um Grupo para Filtrar:</span>
          </span>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
            <button
              onClick={() => setSelectedGroup('todos')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all min-h-[44px] snap-start cursor-pointer ${
                selectedGroup === 'todos'
                  ? 'bg-brand-red text-white shadow-sm'
                  : 'bg-surface-subtle text-text-secondary hover:bg-border-subtle'
              }`}
            >
              Todas as Doenças ({diseases.length})
            </button>

            {groups.map((group) => {
              const count = diseases.filter((d) => d.group === group).length;
              const isSelected = selectedGroup === group;
              return (
                <button
                  key={group}
                  onClick={() => setSelectedGroup(group)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all min-h-[44px] snap-start cursor-pointer ${
                    isSelected
                      ? 'bg-brand-red text-white shadow-sm'
                      : 'bg-surface-subtle text-text-secondary hover:bg-border-subtle'
                  }`}
                >
                  {group} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid de Cards Cognitivos das Distrofias */}
      {filteredDiseases.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDiseases.map((disease) => {
            const accent = GROUP_ACCENTS[disease.group] || {
              border: 'border-l-slate-400',
              bg: 'bg-surface-default',
              text: 'text-text-primary',
              badgeBg: 'bg-slate-100 text-slate-700',
            };

            return (
              <article
                key={disease.slug}
                className={`bg-surface-default border border-border-subtle rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border-l-8 ${accent.border}`}
              >
                <div className="space-y-4">
                  {/* Badge de Grupo & Sinalizadores */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${accent.badgeBg}`}>
                      {disease.group}
                    </span>
                    {disease.cid && (
                      <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 font-mono">
                        CID {disease.cid}
                      </span>
                    )}
                  </div>

                  {/* Nome da Doença e Sigla */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-text-primary group-hover:text-brand-red transition-colors leading-snug">
                      {disease.name}
                    </h3>
                    <p className="text-xs font-bold text-text-tertiary mt-1">
                      {disease.shortName} {disease.synonyms.length > 1 ? `· ${disease.synonyms[0]}` : ''}
                    </p>
                  </div>

                  {/* 1. O que é? (Resumo em Linguagem Clara) */}
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal bg-surface-subtle p-3.5 rounded-2xl border border-border-subtle">
                    {disease.summary}
                  </p>

                  {/* Ficha Rápida: Início, Impacto e Gene */}
                  <div className="space-y-2 text-xs pt-1">
                    <div className="flex items-start gap-2 text-text-secondary">
                      <HeartPulse size={15} className="text-brand-red shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-extrabold text-text-primary">Início típico:</strong>{' '}
                        <span>{disease.onsetAge}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-text-secondary">
                      <Activity size={15} className="text-brand-blue shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-extrabold text-text-primary">Principal impacto:</strong>{' '}
                        <span>{disease.affectedSystems[0] || 'Musculatura esquelética'}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-text-secondary">
                      <Dna size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-extrabold text-text-primary">Gene associado:</strong>{' '}
                        <span className="font-mono font-bold text-text-primary">{disease.gene}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer do Card com CTA Desritivo */}
                <div className="pt-5 mt-5 border-t border-border-subtle">
                  <Link
                    href={`/distrofias/${disease.slug}`}
                    aria-label={`Ver informações completas sobre ${disease.name}`}
                    className="w-full inline-flex items-center justify-between bg-surface-subtle hover:bg-brand-red hover:text-white text-text-primary font-extrabold text-xs py-3 px-4 rounded-2xl transition-all min-h-[44px] group-hover:shadow"
                  >
                    <span>Entender a {disease.shortName}</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform shrink-0" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="bg-surface-default border border-border-subtle rounded-3xl p-12 text-center space-y-4">
          <ShieldAlert size={40} className="text-brand-red mx-auto" />
          <h3 className="text-xl font-bold text-text-primary">Nenhuma distrofia encontrada</h3>
          <p className="text-xs sm:text-sm text-text-tertiary max-w-md mx-auto">
            Não encontramos resultados para sua busca. Tente buscar por um termo mais amplo (ex: &quot;criança&quot;, &quot;musculo&quot;, &quot;cabeça&quot;) ou selecione &quot;Todas as Doenças&quot; no filtro acima.
          </p>
        </div>
      )}
    </section>
  );
};

