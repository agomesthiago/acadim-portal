'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

const InstagramIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
);
const FacebookIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/></svg>
);
const YoutubeIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);
const LinkedinIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-inverse text-white border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group text-left min-h-[44px]">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md overflow-hidden bg-white">
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
            <p className="text-slate-400 text-xs leading-relaxed">
              Associação Carioca de Distrofia Muscular. Há 28 anos oferecendo acolhimento, orientação e garantia de direitos.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">Links Rápidos</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/#hero" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/#sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link href="/#mascotes" className="hover:text-white transition-colors">Mascotes</Link></li>
              <li><Link href="/distrofias" className="hover:text-white transition-colors">Distrofias</Link></li>
              <li><Link href="/noticias" className="hover:text-white transition-colors">Notícias & Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">Canais Oficiais</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-brand-red" />
                <a href="https://www.instagram.com/acadimrj/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  @acadimrj
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#38bdf8]" />
                <a href="tel:+5521994412104" className="hover:text-white">(21) 99441-2104 (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#38bdf8]" />
                <a href="mailto:acadim.rj@gmail.com" className="hover:text-white">acadim.rj@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">Redes Sociais</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/acadimrj/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da ACADIM" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E31B23] transition-colors min-h-[44px] min-w-[44px]">
                <InstagramIcon className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.facebook.com/ACADIMRJ/" target="_blank" rel="noopener noreferrer" aria-label="Facebook da ACADIM" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0066CC] transition-colors min-h-[44px] min-w-[44px]">
                <FacebookIcon className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube da ACADIM" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors min-h-[44px] min-w-[44px]">
                <YoutubeIcon className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer bottom social ribbon matching reference image */}
        <div className="bg-[#8ad6d2]/20 rounded-2xl p-6 text-center border border-[#8ad6d2]/30">
          <p className="font-display font-bold text-[#8ad6d2] text-sm uppercase tracking-wider mb-4">
            Siga-nos nas Redes sociais
          </p>
          <div className="flex justify-center items-center gap-4">
            <a href="https://www.instagram.com/acadimrj/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform min-h-[44px] min-w-[44px]">
              <InstagramIcon className="w-5 h-5 text-white" />
            </a>
            <a href="https://www.facebook.com/ACADIMRJ/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center shadow-lg hover:scale-110 transition-transform min-h-[44px] min-w-[44px]">
              <FacebookIcon className="w-5 h-5 text-white" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center shadow-lg hover:scale-110 transition-transform min-h-[44px] min-w-[44px]">
              <YoutubeIcon className="w-5 h-5 text-white" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center shadow-lg hover:scale-110 transition-transform min-h-[44px] min-w-[44px]">
              <LinkedinIcon className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <div className="text-center text-xs text-slate-500 pt-4">
          © {new Date().getFullYear()} ACADIM — Associação Carioca de Distrofia Muscular. CNPJ: 02.916.982/0001-91. 28 anos de história e dedicação.
        </div>
      </div>
    </footer>
  );
};
