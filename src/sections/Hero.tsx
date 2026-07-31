import { motion } from 'framer-motion';
import { ArrowRight, Heart, Shield, Users } from 'lucide-react';
import { AcadimLogo } from '../components/AcadimLogo';
import type { Hero as HeroData } from '../lib/data';

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const iconMap = {
  heart: Heart,
  shield: Shield,
  users: Users,
} as const;

const colorMap = {
  red: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: 'bg-[#E31B23]',
    text: 'text-slate-900',
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: 'bg-[#0066CC]',
    text: 'text-slate-900',
  },
} as const;

export function Hero({ data }: { data: HeroData }) {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white"
    >
      {/* Orbs suaves (claros) */}
      <div className="absolute top-10 -left-20 w-[500px] h-[500px] rounded-full bg-[#0066CC]/10 blur-[120px] animate-float-slow pointer-events-none" />
      <div className="absolute top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#E31B23]/10 blur-[120px] animate-float-reverse pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="inline-flex items-center gap-2 rounded-full bg-white border border-red-200 px-4 py-2 shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#E31B23] animate-pulse" />
              <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                {data.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
              className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-[#0f172a] leading-[1.02] tracking-tight"
            >
              {data.title}
              <br />
              <span className="text-gradient-blue">ACADIM.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0f172a] leading-tight"
            >
              {data.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed"
            >
              {data.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                href={data.primaryCta.href}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#E31B23] hover:bg-[#b91c1c] px-7 py-4 text-base font-bold text-white shadow-lg shadow-red-500/20 transition-colors"
              >
                <Heart className="w-5 h-5" fill="currentColor" />
                {data.primaryCta.label}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href={data.secondaryCta.href}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white border-2 border-[#0066CC] px-7 py-4 text-base font-bold text-[#0066CC] hover:bg-blue-50 transition-colors"
              >
                {data.secondaryCta.label}
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4 border-t border-slate-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-red-100 border border-red-200 flex items-center justify-center text-[#E31B23]">
                  <Heart className="w-5 h-5" fill="currentColor" />
                </div>
                <div>
                  <p className="text-slate-900 text-sm font-bold">Acolhimento gratuito</p>
                  <p className="text-slate-500 text-xs">Desde o primeiro diagnóstico</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-[#0066CC]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-900 text-sm font-bold">+2.500 famílias</p>
                  <p className="text-slate-500 text-xs">Caminhando juntas</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Direita: quadro de imagem real + cards flutuantes */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE_OUT }}
              className="relative w-full max-w-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E31B23]/20 via-[#0066CC]/20 to-sky-300/20 rounded-[40px] blur-3xl opacity-70" />

              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl aspect-[4/5] bg-slate-100">
                <img
                  src={data.heroImage}
                  alt={data.heroAlt}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="bg-white/90 backdrop-blur rounded-xl p-2">
                    <AcadimLogo light={false} compact />
                  </div>
                  <span className="text-[10px] bg-[#E31B23] text-white px-2.5 py-1 rounded-full font-bold uppercase shadow-sm">
                    Há 27 anos
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-2xl p-3 border border-white/80">
                  <p className="text-sm font-bold text-slate-900">
                    Você não está sozinho.
                  </p>
                  <p className="text-xs text-[#0066CC] font-semibold">
                    Nós caminhamos juntos.
                  </p>
                </div>
              </div>

              {/* Pills flutuantes */}
              {data.floatingPills.map((pill, i) => {
                const Icon = iconMap[pill.icon];
                const c = colorMap[pill.color];
                const positionClass =
                  i === 0
                    ? '-left-4 sm:-left-8 top-16'
                    : '-right-4 sm:-right-8 top-1/2 -translate-y-1/2';
                return (
                  <motion.div
                    key={pill.label}
                    animate={{ y: [0, i === 0 ? -10 : 10, 0] }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className={`absolute ${positionClass} ${c.bg} rounded-2xl px-4 py-2.5 shadow-lg border ${c.border} flex items-center gap-2 min-w-max`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full ${c.icon} flex items-center justify-center text-white flex-shrink-0`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className={`text-xs font-bold ${c.text}`}>{pill.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
