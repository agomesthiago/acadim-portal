'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePix } from '@/context/PixContext';

export const HeaderNav: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openPixModal } = usePix();

  const links = [
    { name: 'Início', href: '/#hero' },
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Mascotes', href: '/#mascotes' },
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Impacto', href: '/#impacto' },
    { name: 'Bazar Online', href: '/#bazar' },
    { name: 'Distrofias', href: '/distrofias' },
    { name: 'Notícias', href: '/noticias' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contato', href: '/#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo ACADIM */}
        <Link href="/" className="flex items-center gap-3 group text-left min-h-[44px]">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform overflow-hidden bg-white">
            <Image src="/logo.png" alt="Logo ACADIM" width={40} height={40} className="object-contain p-1" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-xl tracking-tight leading-none">
              ACA<span className="text-brand-red">DIM</span>
            </span>
            <span className="text-[10px] text-slate-300 font-semibold tracking-wider uppercase mt-0.5">
              Distrofia Muscular RJ
            </span>
          </div>
        </Link>

        {/* Links Desktop */}
        <nav aria-label="Navegação principal" className="hidden xl:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-200 hover:text-white transition-colors relative py-2 min-h-[44px] flex items-center hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red after:transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Botão de Doação Principal */}
        <div className="hidden xl:flex items-center gap-4">
          <button
            onClick={openPixModal}
            className="flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-extrabold text-sm px-6 min-h-[44px] rounded-full shadow-lg shadow-brand-red/25 hover:shadow-brand-red/45 hover:-translate-y-0.5 transition-all"
            aria-label="Fazer Doação PIX"
          >
            <Heart size={16} className="fill-current" />
            <span>Fazer Doação (PIX)</span>
          </button>
        </div>

        {/* Botão Mobile */}
        <div className="xl:hidden flex items-center gap-2">
          <button
            onClick={openPixModal}
            className="flex items-center justify-center gap-1 bg-brand-red text-white font-extrabold text-xs px-3 min-h-[44px] rounded-full shadow"
            aria-label="Doar PIX"
          >
            <Heart size={14} className="fill-current" />
            <span>Doar</span>
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={mobileOpen ? "Fechar menu principal" : "Abrir menu principal"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Menu Mobile Dropdown */}
      {mobileOpen && (
        <div className="xl:hidden bg-surface-inverse border-t border-white/10 px-4 py-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-slate-200 hover:text-white py-2 px-3 rounded-lg hover:bg-white/10 transition-colors min-h-[44px] flex items-center"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
