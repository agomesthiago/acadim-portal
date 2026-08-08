'use client';

import React from 'react';
import { ShoppingBag, Shirt, Home, Footprints } from 'lucide-react';

export const BazarSection: React.FC = () => {
  const items = [
    { icon: Shirt, title: 'Roupas femininas, masculinas e infantis', color: 'bg-blue-600' },
    { icon: Home, title: 'Utilidades para o lar', color: 'bg-red-600' },
    { icon: Footprints, title: 'Calçados', color: 'bg-[#0066CC]' },
  ];

  return (
    <section id="bazar" className="py-20 lg:py-28 bg-surface-inverse text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-[#38bdf8] uppercase tracking-wider mb-3">
              <ShoppingBag className="w-4 h-4" aria-hidden="true" />
              Bazar Beneficente
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white">
              BAZAR <span className="text-gradient-red">ONLINE</span>
            </h2>
            <p className="text-slate-300 mt-3 text-sm sm:text-base">
              Todo o valor arrecadado é revertido diretamente para a manutenção do atendimento aos nossos membros.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((cat) => {
            const Icon = cat.icon;
            return (
              <article
                key={cat.title}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/15 text-center flex flex-col items-center justify-between h-full group hover:bg-white/10 transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 transition-transform`} aria-hidden="true">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-6 leading-snug">
                  {cat.title}
                </h3>
                <a
                  href="#contato"
                  className="bg-[#38bdf8] hover:bg-white text-[#0B132B] font-black uppercase text-xs tracking-wider px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all inline-flex items-center justify-center min-h-[44px]"
                >
                  ACESSE
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
