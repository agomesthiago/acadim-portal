'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const SECTIONS = [
  { id: 'hero', name: 'Início' },
  { id: 'sobre', name: 'Sobre Nós' },
  { id: 'servicos', name: 'Serviços' },
  { id: 'impacto', name: 'Impacto' },
  { id: 'bazar', name: 'Bazar Online' },
  { id: 'faq', name: 'Perguntas Frequentes' },
  { id: 'doar', name: 'Como Doar' },
  { id: 'contato', name: 'Contato' },
];

export const NavigationDots: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside aria-label="Navegação por seções" className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <Link
            key={section.id}
            href={`/#${section.id}`}
            className="group relative flex items-center justify-center p-1.5 focus:outline-none"
            aria-label={`Navegar para seção ${section.name}`}
          >
            {/* Tooltip do Nome da Seção */}
            <span className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-inverse text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-lg whitespace-nowrap pointer-events-none border border-white/10">
              {section.name}
            </span>

            {/* Dot indicador */}
            <span 
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isActive 
                  ? 'bg-brand-red scale-125 ring-4 ring-brand-red/30' 
                  : 'bg-white/40 hover:bg-white hover:scale-110'
              }`}
            />
          </Link>
        );
      })}
    </aside>
  );
};
