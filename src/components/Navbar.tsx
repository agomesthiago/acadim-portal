import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { EASE_OUT } from './Animations';
import { AcadimLogo } from './AcadimLogo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Mascotes', href: '#mascotes' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Missão & Visão', href: '#missao' },
    { label: 'Impacto', href: '#impacto' },
    { label: 'Blog', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between rounded-2xl transition-all duration-300 px-5 py-3 ${
            scrolled
              ? 'glass-dark shadow-2xl shadow-black/30 border border-white/10'
              : 'bg-white/90 backdrop-blur-md shadow-lg border border-slate-200/80'
          }`}>
            <a href="#inicio">
              <AcadimLogo light={scrolled} />
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs font-semibold rounded-lg transition-all group ${
                    scrolled
                      ? 'text-white/80 hover:text-white hover:bg-white/10'
                      : 'text-slate-700 hover:text-[#0066CC] hover:bg-blue-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contato"
                className={`text-xs font-bold transition-colors ${
                  scrolled ? 'text-white/90 hover:text-white' : 'text-[#0066CC] hover:text-[#004499]'
                }`}
              >
                Fale Conosco
              </a>
              <motion.a
                href="#doar"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#E31B23] hover:bg-[#b91c1c] px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-red-500/25 transition-all"
              >
                <Heart className="w-3.5 h-3.5" fill="currentColor" />
                Como Doar
              </motion.a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-xl ${scrolled ? 'text-white' : 'text-[#0B132B]'}`}
              aria-label="Abrir menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden pt-24 px-4 bg-slate-950/80 backdrop-blur-xl"
          >
            <div className="bg-white rounded-3xl p-6 shadow-2xl space-y-2 border border-slate-200">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-4 text-slate-800 hover:text-[#0066CC] hover:bg-blue-50 rounded-xl transition-colors font-semibold"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#contato"
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-center text-[#0066CC] border border-[#0066CC]/30 rounded-xl font-bold"
                >
                  Fale Conosco
                </a>
                <a
                  href="#doar"
                  onClick={() => setMobileOpen(false)}
                  className="py-3.5 px-4 text-center bg-[#E31B23] text-white rounded-xl font-bold shadow-lg"
                >
                  Como Doar
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
