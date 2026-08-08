'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: "Nossa Missão",
      desc: "Promover informação qualificada sobre Distrofia Muscular, combater estigmas, apoiar pessoas afetadas e suas famílias, e atuar pela garantia de direitos e pelo acesso a cuidados adequados no SUS e na rede de saúde."
    },
    {
      icon: Eye,
      title: "Nossa Visão",
      desc: "Ser reconhecida no Estado do Rio de Janeiro como referência na defesa de direitos, promoção do cuidado integral, incentivo à pesquisa e melhoria contínua da qualidade de vida das pessoas com Distrofia Muscular."
    },
    {
      icon: HeartHandshake,
      title: "Nossos Valores",
      desc: "Qualidade de vida, inclusão social sem barreiras, equidade no atendimento, cidadania ativa, transparência na gestão, ética inegociável e colaboração entre famílias e profissionais."
    }
  ];

  return (
    <section id="sobre" className="bg-white text-text-primary py-20 border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Cabeçalho da Seção */}
        <header className="max-w-4xl mb-12 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[3px] bg-brand-red inline-block rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">
              Sobre a ACADIM
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text-primary leading-tight">
            Nascida do compromisso inabalável com a vida, a dignidade e o acolhimento.
          </h2>

          <div className="space-y-4 text-base text-slate-700 leading-relaxed font-normal">
            <p>
              A <strong className="font-extrabold text-text-primary">Associação Carioca de Distrofia Muscular (ACADIM)</strong> atua no acolhimento e suporte integral de pessoas que convivem com a distrofia muscular e doenças neuromusculares no Rio de Janeiro. Aqui, informação precisa, escuta empática e ação comunitária caminham juntas.
            </p>
            <p>
              Nosso trabalho capacita famílias a compreenderem o diagnóstico genético, buscarem tratamentos fisioterapêuticos e médicos adequados, e exigirem o cumprimento dos seus direitos fundamentais no SUS. Conscientizamos a sociedade para construir um estado mais inclusivo e acessível.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-start gap-6 flex-wrap pt-2">
            <figure className="relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white p-2">
              <Image 
                src="/mascotes.png" 
                alt="Mascotes ilustrativos da ACADIM representando a união e força das famílias" 
                fill
                className="object-contain p-2"
              />
            </figure>
            
            <div className="space-y-2 max-w-md">
              <h3 className="text-lg font-extrabold text-text-primary">
                Compreenda a Patologia
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Conheça as particularidades de cada tipo de distrofia muscular para orientar o acompanhamento multidisciplinar correto.
              </p>
              <Link
                href="/distrofias"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-red hover:text-brand-red-hover hover:underline pt-1 transition-colors group"
              >
                <span>Conheça o Catálogo de Distrofias</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </header>

        {/* Subseção: Pilares Institucionais */}
        <div className="mb-6">
          <h3 className="text-xl font-extrabold text-text-primary mb-6 tracking-tight">
            Pilares da Nossa Atuação
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <article 
                  key={idx}
                  className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface-inverse text-white flex items-center justify-center mb-5 group-hover:bg-brand-red transition-colors shadow-md">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-black text-text-primary mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Rodapé da Seção: Destaques de Atuação */}
        <footer className="mt-10 bg-surface-inverse rounded-2xl p-6 text-white flex flex-wrap items-center justify-between gap-4 border border-white/10 shadow-lg">
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-red shrink-0" aria-hidden="true" />
              <span>Rede de Apoio Familiar</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-red shrink-0" aria-hidden="true" />
              <span>Orientação Jurídica & SUS</span>
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
            className="text-xs font-black text-white uppercase tracking-wider bg-brand-red hover:bg-brand-red-hover px-5 py-3 min-h-[44px] flex items-center rounded-xl transition-colors shadow-md"
          >
            Cadastre-se na ACADIM
          </a>
        </footer>

      </div>
    </section>
  );
};
