'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePix } from '@/context/PixContext';

export const HeaderNav: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openPixModal } = usePix();

  const links = [
    { name: 'Início', href: '/#hero' },
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Nossa História', href: '/sobre-nos' },
    { name: 'Distrofias', href: '/distrofias' },
    { name: 'Notícias', href: '/noticias' },
  ];

  // Estado de Scroll (STATE A x STATE B)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechamento via tecla Escape e Scroll Lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-white/10 py-0'
          : 'bg-slate-950/75 backdrop-blur-sm border-b border-white/10 py-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo Institucional Oficial ACADIM (Transparente SVG) */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group text-left min-h-[44px]">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
            <Image src="/logo.svg" alt="Símbolo Institucional ACADIM" fill className="object-contain" priority />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-lg sm:text-xl tracking-tight leading-none">
              ACA<span className="text-brand-red">DIM</span>
            </span>
            <span className="hidden sm:block text-[10px] text-slate-300 font-semibold tracking-wider uppercase mt-0.5">
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
            className="flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-extrabold text-sm px-6 min-h-[44px] rounded-full shadow-lg shadow-brand-red/25 hover:shadow-brand-red/45 hover:-translate-y-0.5 transition-all cursor-pointer"
            aria-label="Fazer Doação PIX"
          >
            <Heart size={16} className="fill-current" />
            <span>Fazer Doação</span>
          </button>
        </div>

        {/* Botão Mobile */}
        <div className="xl:hidden flex items-center gap-2">
          <button
            onClick={openPixModal}
            className="flex items-center justify-center gap-1 bg-brand-red text-white font-extrabold text-xs px-3 min-h-[44px] rounded-full shadow cursor-pointer"
            aria-label="Doar PIX"
          >
            <Heart size={14} className="fill-current" />
            <span>Doar</span>
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            aria-label={mobileOpen ? "Fechar menu principal" : "Abrir menu principal"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Menu Mobile Dropdown */}
      {mobileOpen && (
        <div className="xl:hidden bg-slate-950 border-t border-white/10 px-4 py-4 space-y-2 animate-fade-in">
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
