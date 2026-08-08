'use client';

import React from 'react';
import { Quote } from 'lucide-react';

export const StoriesSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Quando meu filho foi diagnosticado com Duchenne, me senti desamparada. Encontrar a ACADIM nos deu a orientação que precisávamos para iniciar a fisioterapia motora e exigir o acesso aos corticoides no SUS.",
      author: "Ana Paula Mendes",
      context: "Mãe de Lucas, 9 anos — Niterói, RJ"
    },
    {
      quote: "A troca de experiências nos encontros promovidos pela ACADIM mudou completamente minha perspectiva. Hoje me mantenho informado sobre os trials clínicos e cuido da minha autonomia com esperança.",
      author: "Ricardo Almeida",
      context: "Paciente com FSHD, 34 anos — Rio de Janeiro, RJ"
    },
    {
      quote: "A atuação articulada da ACADIM com os centros de referência médica no Rio de Janeiro é indispensável para que pacientes recém-diagnosticados recebam intervenção multidisciplinar precoce.",
      author: "Dra. Helena Machado",
      context: "Neuropediatra parceira da rede de saúde no RJ"
    }
  ];

  return (
    <section id="historias" className="bg-surface-inverse text-white py-20 border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Cabeçalho da Seção */}
        <header className="max-w-4xl mb-12 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[3px] bg-brand-red inline-block rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">
              Histórias & Depoimentos
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            Vozes reais de quem caminha conosco nessa jornada.
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-normal">
            Relatos de pacientes, mães, pais e profissionais parceiros unidos pelo propósito de combater o preconceito e garantir cuidados adequados a quem convive com distrofia muscular.
          </p>
        </header>

        {/* Grid dos Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <article 
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/15 hover:bg-white/15 transition-all flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                <Quote size={28} className="text-brand-red fill-current" aria-hidden="true" />
                <blockquote className="text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <footer className="pt-5 mt-5 border-t border-white/10">
                <h3 className="font-extrabold text-white text-base">{item.author}</h3>
                <p className="text-xs text-slate-400 mt-0.5 font-medium">{item.context}</p>
              </footer>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
