'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowLeft, AlertCircle, Dna, Activity, HeartPulse } from 'lucide-react';
import { getAllDiseases } from '@/lib/distrofias-data';

export const ConditionSection: React.FC = () => {
  const diseases = getAllDiseases();

  return (
    <section id="distrofias" className="bg-slate-50 text-text-primary py-[4rem]">
      <div className="max-w-[80rem] mx-auto px-[1.5rem] w-full">

        {/* Breadcrumb */}
        <div className="mb-[2.5rem]">
          <Link
            href="/"
            className="inline-flex items-center gap-[0.5rem] text-sm font-semibold text-text-primary/70 hover:text-brand-red transition-colors min-h-[44px] py-2"
            aria-label="Voltar para a página inicial da ACADIM"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Voltar ao início</span>
          </Link>
        </div>

        {/* Introdução */}
        <div className="max-w-[56rem] mb-[3.5rem] space-y-[1rem]">
          <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-brand-red bg-brand-red/10 border border-brand-red/20 px-[0.875rem] py-[0.25rem] rounded-full">
            Conhecimento é poder
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-text-primary leading-tight">
            Enciclopédia de Distrofias Musculares
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Quando um diagnóstico chega, a primeira coisa que uma família precisa é de informação médica clara, honesta e acolhedora. A ACADIM disponibiliza uma base de conhecimento enciclopédica com diagnósticos genéticos, proteínas afetadas e manifestações clínicas.
          </p>
          <p className="text-base text-slate-600 leading-relaxed">
            Navegue pelos principais <strong>grupos e subtipos de distrofia muscular</strong> catalogados segundo as diretrizes científicas da MDA, NINDS e GARD.{' '}
            <strong>Nenhuma família deveria enfrentar isso sozinha.</strong>
          </p>

          <div
            role="note"
            className="flex items-start gap-[0.75rem] bg-blue-50 border border-blue-200 rounded-[0.75rem] p-[1rem] mt-[1rem]"
          >
            <AlertCircle size={20} className="text-semantic-info shrink-0 mt-[0.125rem]" aria-hidden="true" />
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Importante:</strong> As informações nesta enciclopédia são educativas. O diagnóstico e o acompanhamento devem ser realizados por uma equipe médica especializada em doenças neuromusculares.
            </p>
          </div>
        </div>

        {/* Grid das Condições */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
          {diseases.map((item, index) => (
            <div
              key={item.slug}
              className="bg-white rounded-[1.25rem] p-[1.75rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-red/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Número + Badge */}
                <div className="flex items-start justify-between gap-[0.5rem]">
                  <div className="flex items-center gap-[0.5rem] flex-wrap">
                    <span className="text-xs font-black text-white bg-surface-inverse px-[0.5rem] py-[0.125rem] rounded-md shrink-0">
                      #{index + 1}
                    </span>
                    <span className="text-xs font-bold text-brand-blue bg-blue-50 px-[0.75rem] py-[0.25rem] rounded-md leading-snug">
                      {item.group}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider shrink-0 text-right">
                    {item.inheritance}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-text-primary">
                  {item.name}
                </h2>

                {/* Ficha Técnica Rápida */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium flex items-center gap-1">
                      <Dna size={13} className="text-brand-red" />
                      Gene:
                    </span>
                    <span className="font-extrabold text-slate-900 font-mono">{item.gene}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium flex items-center gap-1">
                      <Activity size={13} className="text-brand-blue" />
                      Proteína:
                    </span>
                    <span className="font-extrabold text-slate-900 truncate max-w-[170px]" title={item.protein}>
                      {item.protein}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium flex items-center gap-1">
                      <HeartPulse size={13} className="text-emerald-600" />
                      Início:
                    </span>
                    <span className="font-bold text-slate-900">{item.onsetAge}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>

              <div className="pt-[1rem] mt-4 border-t border-slate-100">
                <Link
                  href={`/distrofias/${item.slug}`}
                  className="w-full inline-flex items-center justify-center gap-[0.375rem] text-xs font-extrabold bg-slate-100 hover:bg-brand-red hover:text-white text-text-primary transition-colors min-h-[44px] py-2.5 px-4 rounded-xl"
                  aria-label={`Ver ficha médica completa de ${item.name}`}
                >
                  <span>Explorar Ficha Médica Wiki</span>
                  <ChevronRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-[3rem] bg-surface-inverse rounded-[1.5rem] p-[2rem] text-white flex flex-col sm:flex-row items-center justify-between gap-[1.5rem]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-[0.375rem]">
              Você não está sozinho
            </p>
            <h2 className="text-2xl font-black leading-tight">
              Receba suporte e orientação da ACADIM.
            </h2>
            <p className="text-slate-300 text-sm mt-[0.5rem] leading-relaxed">
              Nossa equipe conecta famílias a médicos, fisioterapeutas e assistência jurídica para acesso ao SUS.
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe8T95-5_uJCXLVs4XDPOsAOKDhcKGOXbmHHGbKH3E-HkJEvw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-brand-red hover:bg-brand-red-hover text-white font-extrabold px-[1.5rem] py-[0.875rem] rounded-[0.875rem] transition-colors text-sm uppercase tracking-wide min-h-[44px] flex items-center"
            aria-label="Cadastre-se na ACADIM — abre em nova aba"
          >
            Cadastre-se na ACADIM
          </a>
        </div>

      </div>
    </section>
  );
};
