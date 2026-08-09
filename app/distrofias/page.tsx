'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ContactSection } from '@/components/ContactSection';
import { getAllDiseases, getAllMedicalGroups } from '@/lib/distrofias-data';

import { Dna, Activity, ShieldAlert, Search, Filter, BookOpen, ArrowRight, HeartPulse } from 'lucide-react';

export default function DistrofiasPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('todos');

  const diseases = getAllDiseases();
  const groups = getAllMedicalGroups();

  const filteredDiseases = useMemo(() => {
    return diseases.filter((d) => {
      const matchesGroup = selectedGroup === 'todos' || d.group === selectedGroup;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        d.name.toLowerCase().includes(query) ||
        d.shortName.toLowerCase().includes(query) ||
        d.gene.toLowerCase().includes(query) ||
        d.protein.toLowerCase().includes(query) ||
        (d.cid && d.cid.toLowerCase().includes(query)) ||
        d.synonyms.some((s) => s.toLowerCase().includes(query));
      return matchesGroup && matchesSearch;
    });
  }, [diseases, selectedGroup, searchQuery]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Enciclopédia de Distrofias Musculares | ACADIM',
    description: 'Guia enciclopédico sobre grupos, tipos, genes e características clínicas das distrofias musculares.',
    publisher: {
      '@type': 'Organization',
      name: 'ACADIM - Associação Carioca de Distrofia Muscular',
      url: 'https://acadim.org.br',
    },
    about: filteredDiseases.map((d) => ({
      '@type': 'MedicalCondition',
      name: d.name,
      alternateName: d.synonyms,
      associatedAnatomy: {
        '@type': 'AnatomicalStructure',
        name: 'Músculo esquelético',
      },
    })),
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Institucional da Enciclopédia */}
      <div className="bg-surface-inverse text-white rounded-3xl p-8 sm:p-12 shadow-2xl mb-12 relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 text-brand-red font-extrabold text-xs uppercase tracking-wider">
            <BookOpen size={14} />
            <span>Conhecimento Científico & Saúde</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Enciclopédia de Distrofias Musculares
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Base de conhecimento enciclopédica sobre grupos, genética, genes responsáveis, proteínas e diretrizes clínicas para o acompanhamento de condições neuromusculares.
          </p>
        </div>
      </div>

      {/* Barra de Busca & Filtro de Grupos */}
      <div className="bg-surface-default border border-border-subtle p-6 rounded-2xl shadow-sm mb-10 space-y-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Input de Busca */}
          <div className="relative flex-1">
            <label htmlFor="distrofia-search" className="sr-only">Buscar Distrofia Muscular por Nome, CID ou Gene</label>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} aria-hidden="true" />
            <input
              id="distrofia-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nome, CID (ex: G71.0), gene (ex: DMD, CAPN3), proteína ou sinônimo..."
              className="w-full pl-11 pr-4 py-3 bg-surface-subtle border border-border-default rounded-xl text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          {/* Contador de Resultados */}
          <div className="text-xs font-extrabold text-text-secondary whitespace-nowrap bg-surface-subtle px-4 py-3 rounded-xl border border-border-subtle text-center">
            {filteredDiseases.length} {filteredDiseases.length === 1 ? 'condição encontrada' : 'condições encontradas'}
          </div>
        </div>

        {/* Filtros por Grupo */}
        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-text-tertiary flex items-center gap-1.5">
            <Filter size={14} />
            <span>Filtrar por Grupo Médico:</span>
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setSelectedGroup('todos')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                selectedGroup === 'todos'
                  ? 'bg-brand-red text-white'
                  : 'bg-surface-subtle text-text-secondary hover:bg-border-subtle'
              }`}
            >
              Todos os Grupos ({diseases.length})
            </button>

            {groups.map((group) => {
              const count = diseases.filter((d) => d.group === group).length;
              return (
                <button
                  key={group}
                  onClick={() => setSelectedGroup(group)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    selectedGroup === group
                      ? 'bg-brand-red text-white'
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

      {/* Grid de Cards Enciclopédicos */}
      {filteredDiseases.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDiseases.map((disease) => (
            <article
              key={disease.slug}
              className="bg-surface-default border border-border-subtle rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-blue/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Badge de Grupo */}
                <div className="flex items-center justify-between gap-2">
                  <span className="bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {disease.group}
                  </span>
                  <div className="flex gap-2 items-center">
                    {disease.cid && (
                      <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700">
                        {disease.cid}
                      </span>
                    )}
                    <span className="text-[10px] font-bold text-text-tertiary">
                      {disease.inheritance}
                    </span>
                  </div>
                </div>

                {/* Título & Sinônimos */}
                <div>
                  <h2 className="text-xl font-black text-text-primary group-hover:text-brand-red transition-colors">
                    {disease.name}
                  </h2>
                  <p className="text-xs font-semibold text-text-tertiary mt-0.5">
                    {disease.synonyms.join(' · ')}
                  </p>
                </div>

                {/* Ficha Técnica Rápida */}
                <div className="bg-surface-subtle rounded-xl p-3 border border-border-subtle space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-text-tertiary font-medium flex items-center gap-1">
                      <Dna size={13} className="text-brand-red" />
                      Gene:
                    </span>
                    <span className="font-extrabold text-text-primary font-mono">{disease.gene}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-text-tertiary font-medium flex items-center gap-1">
                      <Activity size={13} className="text-brand-blue" />
                      Proteína:
                    </span>
                    <span className="font-extrabold text-text-primary truncate max-w-[170px]" title={disease.protein}>
                      {disease.protein}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-text-tertiary font-medium flex items-center gap-1">
                      <HeartPulse size={13} className="text-emerald-600" />
                      Início:
                    </span>
                    <span className="font-bold text-text-primary">{disease.onsetAge}</span>
                  </div>
                </div>

                {/* Resumo */}
                <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                  {disease.summary}
                </p>
              </div>

              {/* Footer do Card com Link da Wiki */}
              <div className="pt-4 mt-4 border-t border-border-subtle">
                <Link
                  href={`/distrofias/${disease.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-surface-subtle hover:bg-brand-red hover:text-white text-text-primary font-extrabold text-xs py-2.5 px-4 rounded-xl transition-all min-h-[44px]"
                >
                  <span>Explorar Ficha Médica Wiki</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="bg-surface-default border border-border-subtle rounded-2xl p-12 text-center space-y-3">
          <ShieldAlert size={36} className="text-brand-red mx-auto" />
          <h3 className="text-lg font-bold text-text-primary">Nenhuma distrofia encontrada</h3>
          <p className="text-xs text-text-tertiary max-w-sm mx-auto">
            Tente ajustar os termos de busca ou selecione outro grupo de classificação no filtro acima.
          </p>
        </div>
      )}

      {/* Seção de Contato e Dúvidas */}
      <div className="mt-16">
        <ContactSection />
      </div>
    </div>
  );
}
