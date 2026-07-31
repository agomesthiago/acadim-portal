import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Menu, X, Heart, Users, BookOpen, Shield, Phone,
  ChevronDown, ArrowRight, Eye, Flag, Gem,
  Mail, Check, Award, ShoppingBag,
  Shirt, Home, Footprints, Stethoscope,
  GraduationCap, Scale, ArrowUpRight, ExternalLink,
  Smile
} from 'lucide-react';

// ============================================================================
// Animation variants
// ============================================================================
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE_OUT }
  })
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
} as const;

function Reveal({ children, delay = 0, className = '', y = 20 }: { children: React.ReactNode; delay?: number; className?: string; y?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.65, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// Social Icons
// ============================================================================
const InstagramIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
);
const FacebookIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/></svg>
);
const YoutubeIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);
const LinkedinIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

// ============================================================================
// Official ACADIM Logo Component (Red Arch + Blue Pill Badge)
// ============================================================================
function AcadimLogo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      {/* Red Arch Symbol */}
      <div className="relative flex-shrink-0">
        <svg width={compact ? "36" : "46"} height={compact ? "32" : "40"} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 75 C 10 30, 40 10, 85 10 C 60 25, 45 45, 45 75 C 32 55, 22 65, 10 75 Z" fill="#E31B23"/>
          <path d="M28 75 C 28 45, 52 28, 85 28 C 65 38, 55 55, 55 75 Z" fill="#E31B23"/>
          <path d="M48 75 C 48 58, 65 46, 85 46 C 72 56, 68 66, 68 75 Z" fill="#E31B23"/>
        </svg>
      </div>

      <div className="flex flex-col justify-center">
        {/* Blue Capsule Badge */}
        <div className="bg-[#0066CC] px-3 py-0.5 rounded-full inline-flex items-center shadow-md">
          <span className="font-display font-black text-white tracking-widest text-sm sm:text-base uppercase leading-none">
            ACADIM
          </span>
        </div>
        {!compact && (
          <span className={`text-[10px] sm:text-[11px] font-semibold tracking-tight mt-1 leading-tight ${
            light ? 'text-white/80' : 'text-[#0066CC]'
          }`}>
            Associação Carioca de Distrofia Muscular
          </span>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// Mascots Component (Representation of Blonde Girl & Dark-haired Boy)
// ============================================================================
function MascotsIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl bg-gradient-to-br from-blue-50 via-white to-red-50 p-6 border-2 border-[#0066CC]/20 shadow-2xl flex flex-col items-center justify-between overflow-hidden group">
      <div className="absolute inset-0 bg-radial from-[#0066CC]/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Badge Top */}
      <div className="z-10 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full border border-[#0066CC]/20 shadow-sm flex items-center gap-2">
        <Smile className="w-4 h-4 text-[#E31B23]" />
        <span className="text-xs font-bold text-[#0066CC] uppercase tracking-wider">Nossos Mascotes Oficiais</span>
      </div>

      {/* Mascot Avatars Illustration */}
      <div className="relative z-10 w-full flex items-center justify-center gap-4 my-2">
        {/* Girl Mascot Card */}
        <motion.div 
          whileHover={{ y: -6, scale: 1.03 }}
          className="flex-1 bg-white rounded-2xl p-4 shadow-lg border border-red-100 flex flex-col items-center text-center"
        >
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-pink-200 to-yellow-100 border-4 border-[#E31B23] flex items-center justify-center shadow-md mb-2 overflow-hidden">
            {/* Character Graphic */}
            <div className="absolute top-2 w-16 h-10 bg-yellow-300 rounded-t-full border-b-2 border-yellow-500" />
            <div className="absolute top-6 w-10 h-7 bg-sky-400 rounded-md border-2 border-sky-600 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white border border-sky-700" />
              <div className="w-3 h-3 rounded-full bg-white border border-sky-700" />
            </div>
            <div className="absolute bottom-2 w-8 h-2 bg-red-400 rounded-full" />
          </div>
          <p className="font-display font-bold text-sm text-[#0B132B]">Nossa Heroína</p>
          <p className="text-[11px] text-slate-500">Cadeira vermelha & óculos azuis</p>
        </motion.div>

        {/* Boy Mascot Card */}
        <motion.div 
          whileHover={{ y: -6, scale: 1.03 }}
          className="flex-1 bg-white rounded-2xl p-4 shadow-lg border border-blue-100 flex flex-col items-center text-center"
        >
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-blue-200 to-yellow-100 border-4 border-[#0066CC] flex items-center justify-center shadow-md mb-2 overflow-hidden">
            {/* Character Graphic */}
            <div className="absolute top-1 w-16 h-8 bg-slate-900 rounded-t-full" />
            <div className="absolute top-8 w-12 h-6 flex items-center justify-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
            </div>
            <div className="absolute bottom-2 w-7 h-2 bg-red-500 rounded-full" />
          </div>
          <p className="font-display font-bold text-sm text-[#0B132B]">Nosso Campeão</p>
          <p className="text-[11px] text-slate-500">Cadeira amarela & camiseta vermelha</p>
        </motion.div>
      </div>

      {/* Official ACADIM Mascot Pill Footer */}
      <div className="z-10 w-full bg-[#0066CC] py-2.5 rounded-xl shadow-md text-center">
        <span className="font-display font-black text-white text-lg tracking-widest uppercase">
          ACADIM
        </span>
        <p className="text-[10px] text-white/90 font-medium">Inclusão, Alegria e Caminhada Juntos</p>
      </div>
    </div>
  );
}

// ============================================================================
// Navbar
// ============================================================================
function Navbar() {
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

// ============================================================================
// Hero Section
// ============================================================================
function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 80]);
  const y2 = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-[#0B132B] pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Red & Blue Ambient Orbs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-10 -left-20 w-[550px] h-[550px] rounded-full bg-[#0066CC]/25 blur-[140px] animate-float-slow"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-20 -right-20 w-[550px] h-[550px] rounded-full bg-[#E31B23]/20 blur-[150px] animate-float-reverse"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B132B]/50 to-[#0B132B]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 border border-white/20"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#E31B23] animate-pulse" />
              <span className="text-xs font-bold text-white tracking-wide uppercase">
                Existe há 28 anos de história e acolhimento
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
              className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.98] tracking-tight"
            >
              Bem vindo a<br />
              <span className="text-gradient-blue">ACADIM.</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white/90">
                Você não está sozinho.<br />
                Nós caminhamos juntos.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal"
            >
              Oferecemos apoio, informação qualificada e promoção da qualidade de vida
              para pessoas com distrofia muscular e outras doenças neuromusculares, além de
              suas famílias no Rio de Janeiro e em todo o Brasil.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#doar"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0066CC] hover:bg-[#004499] px-8 py-4 text-base font-bold text-white shadow-2xl shadow-blue-600/40 transition-all"
              >
                <Heart className="w-5 h-5 text-red-400" fill="currentColor" />
                COMO DOAR
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#sobre"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full glass px-8 py-4 text-base font-bold text-white hover:bg-white/15 transition-colors border border-white/20"
              >
                Conheça Nossa História
              </motion.a>
            </motion.div>

            {/* Quick Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#E31B23]/20 border border-[#E31B23]/40 flex items-center justify-center text-[#E31B23]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold">28 Anos</p>
                  <p className="text-slate-400 text-[11px]">De impacto contínuo</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#0066CC]/20 border border-[#0066CC]/40 flex items-center justify-center text-[#38bdf8]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold">+2.500 Famílias</p>
                  <p className="text-slate-400 text-[11px]">Atendidas com carinho</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Mobile Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE_OUT }}
              className="relative"
            >
              {/* Glow back */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E31B23] via-[#0066CC] to-[#38bdf8] rounded-[50px] blur-3xl opacity-50" />

              {/* Phone Container */}
              <div className="relative w-[280px] sm:w-[320px] aspect-[9/19] rounded-[3rem] bg-slate-900 p-3 shadow-2xl border-[3px] border-white/20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20" />
                <div className="w-full h-full rounded-[2.3rem] overflow-hidden relative bg-slate-950">
                  <img
                    src="/images/hero-portrait.jpg"
                    alt="Criança sorrindo na cadeira de rodas com óculos"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent" />
                  
                  {/* Phone Header Badge */}
                  <div className="absolute top-8 left-3 right-3 glass rounded-2xl p-2.5 flex items-center justify-between">
                    <AcadimLogo light compact />
                    <span className="text-[9px] bg-[#E31B23] text-white px-2 py-0.5 rounded-full font-bold uppercase">
                      Ao Vivo
                    </span>
                  </div>

                  {/* Phone Bottom Floating Card */}
                  <div className="absolute bottom-5 left-3 right-3 glass-dark rounded-2xl p-3 border border-white/15">
                    <p className="text-xs font-bold text-white">Você não está sozinho.</p>
                    <p className="text-[11px] text-sky-300">Nós caminhamos juntos.</p>
                  </div>
                </div>
              </div>

              {/* Floating Pill Left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 top-20 glass-dark rounded-2xl px-4 py-2.5 shadow-2xl border border-white/20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#E31B23] flex items-center justify-center text-white">
                    <Heart className="w-3.5 h-3.5" fill="currentColor" />
                  </div>
                  <span className="text-xs font-bold text-white">Acolhimento</span>
                </div>
              </motion.div>

              {/* Floating Pill Right */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-6 top-1/2 glass-dark rounded-2xl px-4 py-2.5 shadow-2xl border border-white/20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#0066CC] flex items-center justify-center text-white">
                    <Shield className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-white">Garantia de Direitos</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ============================================================================
// About Us / Sobre nós (Exact Copy Provided)
// ============================================================================
function AboutUs() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 bg-[#38bdf8]/15 text-[#0B132B] border-y border-[#0066CC]/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <Reveal>
          <div className="inline-block bg-[#0066CC] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md mb-2">
            Sobre Nós
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0B132B]">
            História de <span className="text-[#0066CC]">Compromisso</span> e <span className="text-[#E31B23]">Cuidado</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 text-left sm:text-center space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              A <strong className="text-[#0B132B]">Associação Carioca de Distrofia Muscular (ACADIM)</strong> nasceu do compromisso com a vida, a dignidade e o cuidado com pessoas que convivem com a distrofia muscular e outras doenças neuromusculares.
            </p>
            <p>
              Aqui, informação, acolhimento e ação caminham juntos. Nosso trabalho é voltado para oferecer apoio, orientação e promover qualidade de vida às pessoas com distrofia muscular e suas famílias, além de estimular a conscientização da sociedade sobre a importância da inclusão e do acesso à saúde.
            </p>
            <p className="font-semibold text-[#0066CC] italic text-lg sm:text-xl">
              &ldquo;Explore nosso site, conheça nossa história, entenda mais sobre a patologia e descubra como você pode fazer parte dessa rede de apoio.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ============================================================================
// Official Mascots Highlight Section
// ============================================================================
function MascotsSection() {
  return (
    <section id="mascotes" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-red-100 text-[#E31B23] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                <Smile className="w-4 h-4" />
                Inclusão Representada
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0B132B] tracking-tight">
                Conheça nossos <span className="text-[#0066CC]">Mascotes</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Nossos mascotes simbolizam a alegria, a coragem e a resiliência das crianças e jovens atendidos pela ACADIM. Eles estampam nossos materiais educativos, eventos e campanhas de conscientização, reforçando que a vida em cadeira de rodas é cheia de possibilidades e sorrisos.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                  <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B132B] text-sm">Representatividade Infantil</h4>
                    <p className="text-xs text-slate-600">Representam com orgulho a realidade dos nossos membros em todas as idades.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-2xl border border-red-100">
                  <div className="w-8 h-8 rounded-full bg-[#E31B23] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B132B] text-sm">Conscientização Escolar</h4>
                    <p className="text-xs text-slate-600">Usados em cartilhas de inclusão para combater o capacitismo nas escolas.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.2}>
              <MascotsIllustration />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Mission, Vision and Values (With Exact Quotes)
// ============================================================================
function MissionVisionValues() {
  const pillars = [
    {
      icon: Eye,
      title: 'Visão',
      color: 'bg-red-500',
      badge: 'Rede de Referência',
      content: 'Ser reconhecida como referência na defesa de direitos, promoção do cuidado integral e melhoria da qualidade de vida das pessoas com Distrofia Muscular.',
    },
    {
      icon: Flag,
      title: 'Missão',
      color: 'bg-blue-600',
      badge: 'Promover Informação',
      content: 'Promover informação qualificada sobre Distrofia Muscular, combater estigmas, apoiar pessoas afetadas e suas famílias, e atuar pela garantia de direitos e pelo acesso a cuidados adequados, contribuindo para que cada indivíduo desenvolva seu potencial e participe plenamente da sociedade.',
    },
    {
      icon: Gem,
      title: 'Valores',
      color: 'bg-sky-500',
      badge: 'Princípios Éticos',
      content: 'Qualidade de Vida, Inclusão Social, Equidade, Cidadania, Transparência, Ética e Colaboração.',
    },
  ];

  return (
    <section id="missao" className="py-24 lg:py-32 bg-[#0B132B] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066CC]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E31B23]/20 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-[#38bdf8] text-xs font-black uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full">
              Fundamentos da ACADIM
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white mt-4">
              Missão, visão <span className="text-gradient-red">e valores</span>
            </h2>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl p-8 border border-white/15 relative flex flex-col justify-between group hover:bg-white/10 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${p.color} text-white flex items-center justify-center shadow-lg`}>
                    <p.icon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-300 bg-white/10 px-3 py-1 rounded-full uppercase">
                    {p.badge}
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-4">{p.title}</h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{p.content}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-[#38bdf8] text-xs font-bold">
                <Check className="w-4 h-4 text-[#E31B23]" />
                Compromisso permanente
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// Services & Action Areas
// ============================================================================
function ServicesSection() {
  const services = [
    {
      icon: Heart,
      title: 'Acolhimento Familiar',
      desc: 'Atendimento humanizado para quem recebe o diagnóstico, tirando dúvidas e acolhendo angústias desde o primeiro momento.',
    },
    {
      icon: Stethoscope,
      title: 'Orientação em Saúde',
      desc: 'Informação qualificada com equipe técnica e médicos parceiros especializados em doenças neuromusculares.',
    },
    {
      icon: Scale,
      title: 'Garantia de Direitos',
      desc: 'Auxílio na orientação jurídica para obtenção de BPC, medicamentos, exames e isenções garantidos por lei.',
    },
    {
      icon: Users,
      title: 'Grupos de Apoio',
      desc: 'Encontros periódicos entre portadores e cuidadores para troca de experiências, fortalecimento mútuo e amizade.',
    },
    {
      icon: GraduationCap,
      title: 'Capacitação & Cursos',
      desc: 'Palestras e workshops para cuidadores, familiares e profissionais de saúde e educação sobre manejos diários.',
    },
    {
      icon: Shield,
      title: 'Conscientização Social',
      desc: 'Campanhas de massa como o Setembro Verde para combater o capacitismo e exigir políticas públicas efetivas.',
    },
  ];

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-slate-50 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-[#0066CC] text-xs font-black uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full">
              Como Ajudamos
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0B132B] mt-4">
              Pilares de Atuação da <span className="text-[#0066CC]">ACADIM</span>
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg">
              Oferecemos uma estrutura integrada para que ninguém precise enfrentar a distrofia isoladamente.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066CC] flex items-center justify-center mb-6 group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#0B132B] mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Dual Target: Portadores vs Investidores
// ============================================================================
function DualTargetImpact() {
  return (
    <section id="impacto" className="py-24 lg:py-32 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0B132B]">
              Junte-se à nossa <span className="text-[#E31B23]">Rede de Apoio</span>
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg">
              Seja buscando apoio direto para você e sua família, seja investindo como doador ou parceiro.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Box 1: Portadores */}
          <Reveal delay={0.1}>
            <div className="bg-gradient-to-br from-blue-50 to-sky-100/60 rounded-3xl p-8 sm:p-10 border border-blue-200 shadow-xl flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#0066CC] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase mb-6">
                  Para Portadores & Cuidadores
                </div>
                <h3 className="font-display font-black text-3xl text-[#0B132B] mb-4">
                  Precisa de apoio ou orientação?
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Cadastre-se para ter acesso gratuito ao nosso acolhimento, grupos de conversa, material educativo e orientação jurídica especializada.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Atendimento acolhedor sem custos',
                    'Orientações médicas e fisioterápicas',
                    'Defesa dos seus direitos assegurados',
                    'Acolhimento caloroso pela comunidade',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                href="#contato"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-[#0066CC] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-[#004499] transition-all"
              >
                Quero me cadastrar <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </Reveal>

          {/* Box 2: Investidores */}
          <Reveal delay={0.2}>
            <div className="bg-gradient-to-br from-red-50 to-amber-100/50 rounded-3xl p-8 sm:p-10 border border-red-200 shadow-xl flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#E31B23] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase mb-6">
                  Para Doadores & Empresas
                </div>
                <h3 className="font-display font-black text-3xl text-[#0B132B] mb-4">
                  Quer investir no impacto social?
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Sua contribuição sustenta projetos que levam dignidade e saúde para centenas de famílias no Rio de Janeiro com prestação de contas transparente.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Transparência com relatórios regulares',
                    'Certificado de investimento social responsável',
                    'Selo de empresa parceira oficial da ACADIM',
                    'Dedução fiscal conforme legislação vigente',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-[#E31B23] text-white flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                href="#doar"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-[#E31B23] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-[#b91c1c] transition-all"
              >
                Como Doar Agora <Heart className="w-4 h-4" fill="currentColor" />
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Online Bazaar
// ============================================================================
function BazarSection() {
  const items = [
    { icon: Shirt, title: 'Roupas femininas, masculinas e infantis', color: 'bg-blue-600' },
    { icon: Home, title: 'Utilidades para o lar', color: 'bg-red-600' },
    { icon: Footprints, title: 'Calçados', color: 'bg-[#0066CC]' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0B132B] text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-[#38bdf8] uppercase tracking-wider mb-3">
              <ShoppingBag className="w-4 h-4" />
              Bazar Beneficente
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white">
              BAZAR <span className="text-gradient-red">ONLINE</span>
            </h2>
            <p className="text-slate-300 mt-3 text-sm sm:text-base">
              Todo o valor arrecadado é revertido diretamente para a manutenção do atendimento aos nossos membros.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.1}>
              <div className="glass rounded-3xl p-8 border border-white/15 text-center flex flex-col items-center justify-between h-full group hover:bg-white/10 transition-all">
                <div className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
                  <cat.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-6 leading-snug">
                  {cat.title}
                </h3>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#38bdf8] text-[#0B132B] font-black uppercase text-xs tracking-wider px-8 py-3 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  ACESSE
                </motion.a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Secondary Nav Bar (Exact matches reference mockup)
// ============================================================================
function SecondaryNav() {
  const links = [
    'Home',
    'Conhecendo as distrofias',
    'Tipos de distrofia',
    'Cuidado e qualidade de vida',
    'Conte conosco',
    'Blog'
  ];

  return (
    <div className="bg-[#8ad6d2] py-4 overflow-x-auto border-t-4 border-[#0066CC]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-center gap-6 md:gap-10 min-w-max">
          {links.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`font-display text-base md:text-xl lg:text-2xl font-bold whitespace-nowrap transition-colors ${
                i === 1 ? 'text-[#0B132B] underline decoration-2' : 'text-[#0B132B]/70 hover:text-[#0B132B]'
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Blog Section
// ============================================================================
function BlogSection() {
  const posts = [
    {
      title: 'Entendendo a Distrofia Muscular de Duchenne e Becker',
      tag: 'Saúde & Ciência',
      date: 'Março 2025',
    },
    {
      title: 'Guia de Direitos das Pessoas com Deficiência no Rio de Janeiro',
      tag: 'Legislação',
      date: 'Fevereiro 2025',
    },
    {
      title: 'Importância da Fisioterapia Respiratória Precoce',
      tag: 'Qualidade de Vida',
      date: 'Janeiro 2025',
    },
  ];

  return (
    <section id="blog" className="py-24 bg-slate-100 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-[#0066CC] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                <BookOpen className="w-4 h-4" />
                Informação que empodera
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0B132B]">
                Nosso <span className="text-[#0066CC]">Blog</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                <p>
                  <strong>Fique por dentro das novidades.</strong> Informação de qualidade faz a diferença no cuidado e na inclusão.
                </p>
                <p>
                  No blog da ACADIM, você encontra notícias, conteúdos educativos, atualizações sobre distrofia muscular, direitos das pessoas com deficiência, eventos e ações da nossa associação.
                </p>
                <p className="font-semibold text-[#0066CC]">
                  Acompanhe, informe-se e caminhe conosco. Conhecimento compartilhado fortalece vidas.
                </p>
                <div className="pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-[#0066CC] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full shadow-md hover:bg-[#004499] transition-all"
                  >
                    Acesse o Blog <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {posts.map((post, i) => (
              <Reveal key={post.title} delay={0.1 + i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-200 transition-all group cursor-pointer flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-extrabold uppercase bg-blue-50 text-[#0066CC] px-2.5 py-0.5 rounded-md">
                        {post.tag}
                      </span>
                      <span className="text-xs text-slate-400">{post.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#0B132B] group-hover:text-[#0066CC] transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-[#0066CC] group-hover:text-white transition-colors flex-shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FAQ Accordion
// ============================================================================
function FAQSection() {
  const faqs = [
    {
      q: 'O que é a ACADIM?',
      a: 'A Associação Carioca de Distrofia Muscular (ACADIM) é uma organização sem fins lucrativos que há 28 anos oferece acolhimento, orientação e defesa de direitos para pessoas com distrofia muscular e doenças neuromusculares no Estado do Rio de Janeiro.',
    },
    {
      q: 'Como posso me cadastrar para receber atendimento?',
      a: 'Você pode se cadastrar diretamente enviando uma mensagem pelo nosso formulário de contato abaixo ou via WhatsApp. Nossa equipe técnica agendará uma acolhida inicial.',
    },
    {
      q: 'A ACADIM cobra mensalidade ou taxa de associação?',
      a: 'Não. Todo o acolhimento e orientação prestados às pessoas com distrofia muscular e suas famílias são totalmente gratuitos.',
    },
    {
      q: 'Como faço para doar ou investir na associação?',
      a: 'Você pode realizar doações via Pix, cartão de crédito, doação de produtos para o nosso Bazar Online ou firmando parcerias institucionais empresariais.',
    },
    {
      q: 'Onde fica localizada a ACADIM?',
      a: 'Nossa sede fica na cidade do Rio de Janeiro, mas prestamos orientação online e remota para famílias de diversos municípios do estado.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Reveal>
            <span className="text-[#0066CC] text-xs font-black uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">
              Dúvidas Frequentes
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0B132B] mt-3">
              Perguntas <span className="text-[#E31B23]">Frequentes</span>
            </h2>
          </Reveal>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.05}>
              <div className="border border-slate-200 rounded-2xl overflow-hidden transition-all">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left p-6 font-display font-bold text-lg text-[#0B132B] flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#0066CC] transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="p-6 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Donation Section / CTA
// ============================================================================
function DonationCTA() {
  return (
    <section id="doar" className="py-24 lg:py-32 bg-gradient-to-br from-[#0B132B] via-[#004499] to-[#0B132B] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-radial from-[#E31B23]/20 via-transparent to-transparent opacity-60" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 bg-[#E31B23] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
            <Heart className="w-4 h-4" fill="currentColor" />
            Fortaleça esta Causa
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white leading-tight">
            Sua ajuda transforma <span className="text-gradient-red">vidas reais</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Há 28 anos, a ACADIM caminha ao lado de centenas de famílias. Contribua com qualquer valor e ajude a manter nossos projetos ativos.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 max-w-xl mx-auto shadow-2xl space-y-6">
            <p className="text-sm font-bold text-sky-200 uppercase tracking-widest">
              Chave Pix de Doação Oficial
            </p>
            <div className="bg-white text-[#0B132B] p-4 rounded-2xl font-mono text-lg sm:text-xl font-black tracking-wider flex items-center justify-between border-2 border-[#0066CC]">
              <span>CNPJ: 00.000.000/0001-00</span>
              <button
                onClick={() => navigator.clipboard?.writeText("00.000.000/0001-00")}
                className="bg-[#0066CC] text-white text-xs px-3 py-1.5 rounded-lg font-sans font-bold hover:bg-[#004499]"
              >
                Copiar
              </button>
            </div>
            <p className="text-xs text-slate-300">
              Banco Oficial: Itaú • Conta Corrente da Associação Carioca de Distrofia Muscular
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ============================================================================
// Footer
// ============================================================================
function Footer() {
  return (
    <footer id="contato" className="bg-[#0B132B] text-white border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <AcadimLogo light />
            <p className="text-slate-400 text-xs leading-relaxed">
              Associação Carioca de Distrofia Muscular. Há 28 anos oferecendo acolhimento, orientação e garantia de direitos.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">Links Rápidos</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#mascotes" className="hover:text-white transition-colors">Mascotes</a></li>
              <li><a href="#missao" className="hover:text-white transition-colors">Missão & Visão</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">Canais Oficiais</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-[#E31B23]" />
                <a href="https://www.instagram.com/acadimrj/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  @acadimrj
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#38bdf8]" />
                <span>Atendimento Rio de Janeiro</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#38bdf8]" />
                <span>contato@acadim.org.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">Redes Sociais</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/acadimrj/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E31B23] transition-colors">
                <InstagramIcon className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0066CC] transition-colors">
                <FacebookIcon className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors">
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
            <a href="https://www.instagram.com/acadimrj/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <InstagramIcon className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <FacebookIcon className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <YoutubeIcon className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <LinkedinIcon className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <div className="text-center text-xs text-slate-500 pt-4">
          © {new Date().getFullYear()} ACADIM — Associação Carioca de Distrofia Muscular. 28 anos de história e dedicação.
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// Main App
// ============================================================================
export default function App() {
  return (
    <div className="min-h-screen bg-[#0B132B] text-slate-900 selection:bg-[#E31B23] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <MascotsSection />
        <MissionVisionValues />
        <ServicesSection />
        <DualTargetImpact />
        <BazarSection />
        <BlogSection />
        <SecondaryNav />
        <FAQSection />
        <DonationCTA />
      </main>
      <Footer />
    </div>
  );
}
