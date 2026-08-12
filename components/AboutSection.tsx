'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, HeartHandshake, Shield, CheckCircle2, ArrowRight, Info } from 'lucide-react';
import { SectionBadge } from './SectionBadge';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: BookOpen,
      title: "CONHECIMENTO",
      subtitle: "Informação científica e acessível",
      desc: "Informação acessível sobre distrofias musculares e outras doenças neuromusculares para pacientes, famílias e profissionais de saúde."
    },
    {
      icon: HeartHandshake,
      title: "ACOLHIMENTO",
      subtitle: "Suporte às famílias e cuidadores",
      desc: "Orientação para pessoas com deficiência, famílias e cuidadores sobre diagnóstico, acompanhamento multidisciplinar e qualidade de vida."
    },
    {
      icon: Shield,
      title: "DEFESA DE DIREITOS",
      subtitle: "Cidadania e Saúde Pública",
      desc: "Informação e participação na construção de políticas públicas, garantindo o acesso a medicamentos, órteses e exames pelo SUS."
    }
  ];

  return (
    <section id="sobre" className="bg-white text-text-primary py-20 border-t-4 border-brand-red relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        
        {/* Cabeçalho da Seção Institucional */}
        <header className="max-w-4xl space-y-4">
          <SectionBadge icon={Info} text="Sobre a ACADIM" variant="red" />
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-text-primary leading-tight">
            Conhecimento para quem convive com doenças neuromusculares.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            A <strong className="font-extrabold text-text-primary">Associação Carioca de Distrofia Muscular (ACADIM)</strong> atua há 28 anos no Estado do Rio de Janeiro oferecendo acolhimento humano, informação científica compreensível e atuação firme na garantia de direitos no SUS.
          </p>
        </header>

        {/* Três Blocos Objetivos de Atuação */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <article 
                key={idx}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-surface-inverse text-white flex items-center justify-center group-hover:bg-brand-red transition-colors shadow-md">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-brand-red block">
                      {pillar.title}
                    </span>
                    <h3 className="text-lg font-black text-text-primary mt-0.5">
                      {pillar.subtitle}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200">
                  <span className="text-xs font-extrabold text-slate-900 group-hover:text-brand-red flex items-center gap-1.5 transition-colors">
                    <span>Atuação Garantida</span>
                    <CheckCircle2 size={15} className="text-brand-red" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bloco de Integração com a Foto Institucional */}
        <div className="bg-surface-subtle rounded-3xl p-6 sm:p-8 border border-border-subtle flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <figure className="relative w-36 h-36 md:w-44 md:h-44 shrink-0 overflow-hidden rounded-2xl border-2 border-white shadow-md bg-white p-1">
            <Image 
              src="/assets/cadeirante.jpg" 
              alt="Pessoa em cadeira de rodas com sorriso expressando autonomia e acolhimento da ACADIM" 
              fill
              sizes="(max-width: 768px) 144px, 176px"
              className="object-cover rounded-xl"
            />
          </figure>
          
          <div className="space-y-3 flex-1 text-center md:text-left">
            <h3 className="text-xl font-black text-text-primary">
              Compreenda a Patologia e Exija Seus Direitos
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-2xl">
              Nossa enciclopédia detalha cada forma de distrofia muscular em linguagem simples para que você e sua família possam entender o diagnóstico, acompanhar os exames e buscar os tratamentos corretos.
            </p>
            <div className="pt-1">
              <Link
                href="/distrofias"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-extrabold text-xs py-3 px-5 rounded-2xl transition-all shadow-md min-h-[44px]"
              >
                <span>Conhecer a Enciclopédia de Distrofias</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Rodapé da Seção Institucional */}
        <footer className="bg-surface-inverse rounded-3xl p-6 sm:p-8 text-white flex flex-wrap items-center justify-between gap-6 border border-white/10 shadow-lg">
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-red shrink-0" aria-hidden="true" />
              <span>Acolhimento Familiar</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-red shrink-0" aria-hidden="true" />
              <span>Orientação no SUS</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-red shrink-0" aria-hidden="true" />
              <span>Inclusão e Acessibilidade</span>
            </div>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe8T95-5_uJCXLVs4XDPOsAOKDhcKGOXbmHHGbKH3E-HkJEvw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-black text-white uppercase tracking-wider bg-brand-red hover:bg-brand-red-hover px-6 py-3.5 min-h-[44px] flex items-center rounded-2xl transition-colors shadow-md shrink-0"
          >
            Cadastre-se na ACADIM
          </a>
        </footer>

      </div>
    </section>
  );
};
