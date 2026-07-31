import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { AcadimLogo } from './AcadimLogo';
import type { NavLink } from '../lib/data';
import { defaultNavLinks } from '../lib/data';

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

type Props = { links?: NavLink[] };

export function Navbar({ links = defaultNavLinks }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
          <div
            className={`flex items-center justify-between rounded-2xl transition-all duration-300 px-4 sm:px-5 py-3 ${
              scrolled
                ? 'bg-white/90 backdrop-blur-md shadow-md border border-slate-200/80'
                : 'bg-white/70 backdrop-blur-sm border border-slate-200/60'
            }`}
          >
            <a href="#inicio" aria-label="Ir para a página inicial">
              <AcadimLogo />
            </a>

            <div className="hidden lg:flex items-center gap-0.5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-[#0066CC] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contato"
                className="text-sm font-semibold text-[#0066CC] hover:text-[#004499] transition-colors"
              >
                Fale conosco
              </a>
              <motion.a
                href="#doar"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#E31B23] hover:bg-[#b91c1c] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-red-500/20 transition-colors"
              >
                <Heart className="w-4 h-4" fill="currentColor" />
                Quero doar
              </motion.a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700"
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden pt-24 px-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 shadow-2xl space-y-1 border border-slate-200"
            >
              {links.map((link) => (
                <a
                  key={link.href}
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
                  Fale conosco
                </a>
                <a
                  href="#doar"
                  onClick={() => setMobileOpen(false)}
                  className="py-3.5 px-4 text-center bg-[#E31B23] text-white rounded-xl font-bold shadow-md inline-flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" fill="currentColor" />
                  Quero doar
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
