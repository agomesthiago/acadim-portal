'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Search, Stethoscope, ShieldCheck, ArrowRight } from 'lucide-react';
import { SectionBadge } from './SectionBadge';

export function HelpNavigation() {
  const paths = [
    {
      title: 'Quero entender o que é uma distrofia muscular',
      desc: 'Explicação simples e acessível sobre os conceitos fundamentais da patologia.',
      href: '/distrofias#o-que-e',
      icon: BookOpen,
      color: 'text-brand-blue bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800',
    },
    {
      title: 'Estou procurando uma doença específica',
      desc: 'Consulte o catálogo de patologias neuromusculares por nome, gene ou CID.',
      href: '/distrofias#encontre-uma-condicao',
      icon: Search,
      color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800',
    },
    {
      title: 'Quero entender sintomas e diagnóstico',
      desc: 'Saiba quais são os primeiros sinais, exames de sangue e testes de DNA.',
      href: '/distrofias/duchenne#sintomas',
      icon: Stethoscope,
      color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800',
    },
    {
      title: 'Quero conhecer meus direitos no SUS',
      desc: 'Guia prático para obter fraldas, órteses, fisioterapia e medicamentos públicos no RJ.',
      href: '/noticias/direitos-sus-medicamentos-orteses-guia',
      icon: ShieldCheck,
      color: 'text-brand-red bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800',
    },
  ];

  return (
    <section id="como-podemos-ajudar" className="py-16 bg-surface-subtle border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <SectionBadge icon={BookOpen} text="Orientação Prática" variant="blue" />
          <h2 className="text-2xl sm:text-3xl font-display font-black text-text-primary">
            Como podemos ajudar?
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-medium">
            Você não precisa conhecer o nome da doença para começar a entender o que está acontecendo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, idx) => {
            const Icon = path.icon;
            return (
              <Link
                key={idx}
                href={path.href}
                className="group flex flex-col justify-between p-6 bg-surface-default border border-border-default rounded-3xl shadow-sm hover:shadow-md hover:border-brand-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${path.color}`}>
                    <Icon className="w-6 h-6 shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-text-primary group-hover:text-brand-blue transition-colors">
                      {path.title}
                    </h3>
                    <p className="text-xs text-text-secondary mt-2 leading-relaxed">
                      {path.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:translate-x-1 transition-transform">
                  <span>Acessar conteúdo</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
