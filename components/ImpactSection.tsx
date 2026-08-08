'use client';

import React from 'react';
import { Users, Calendar, Award, DollarSign, Microscope, ShieldCheck } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "1.200+",
      label: "Famílias Apoiadas",
      subtext: "Atendimentos na região metropolitana e interior do Estado do RJ"
    },
    {
      icon: Calendar,
      value: "48+",
      label: "Eventos & Simpósios",
      subtext: "Encontros de capacitação, orientação médica e apoio mútuo"
    },
    {
      icon: Award,
      value: "25+",
      label: "Anos de História",
      subtext: "Luta ininterrupta pelos direitos das famílias (Fundada em 1998)"
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Transparência",
      subtext: "Prestação de contas rígida e integridade na aplicação dos recursos"
    },
    {
      icon: Microscope,
      value: "Apoio",
      label: "À Pesquisa Científica",
      subtext: "Atuação conjunta com a Aliança Distrofia Brasil (ADB) e trials"
    },
    {
      icon: DollarSign,
      value: "Rede",
      label: "de Solidariedade",
      subtext: "Fundo convertido em exames, aparelhos, órteses e insumos"
    }
  ];

  return (
    <section id="impacto" className="bg-slate-100 text-text-primary py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Cabeçalho da Seção */}
        <header className="max-w-4xl mb-12 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[3px] bg-brand-red inline-block rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">
              Como Atuamos & Nosso Impacto
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text-primary leading-tight">
            Aqui, informação qualificada, acolhimento e ação caminhamos juntos.
          </h2>
          
          <p className="text-base text-slate-700 leading-relaxed font-normal">
            Nosso trabalho diário oferece apoio direto a recém-diagnosticados, orientação jurídica para obtenção de medicamentos e equipamentos no SUS, além de estimular a conscientização pública sobre a relevância do diagnóstico genético precoce.
          </p>
        </header>

        {/* Grid das Estatísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <article
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-border-default transition-all shadow-sm flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-inverse text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-brand-red transition-colors mt-1">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-black tracking-tight text-brand-red leading-none font-mono tabular-nums">
                    {stat.value}
                  </div>
                  <h3 className="text-base font-extrabold text-text-primary leading-snug">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {stat.subtext}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
