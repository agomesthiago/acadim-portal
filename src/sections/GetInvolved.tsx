import { motion } from 'framer-motion';
import { ArrowRight, Heart, HandHelping, Building2, UserRound } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import type { Track } from '../lib/data';

const iconMap = {
  blue: UserRound,
  red: Heart,
  sky: Building2,
  amber: HandHelping,
} as const;

const colorMap = {
  blue: {
    bg: 'from-blue-50 to-sky-100/60',
    border: 'border-blue-200',
    tag: 'bg-[#0066CC]',
    bullet: 'bg-[#0066CC]',
    cta: 'bg-[#0066CC] hover:bg-[#004499]',
    icon: 'text-[#0066CC] bg-blue-100',
  },
  red: {
    bg: 'from-red-50 to-orange-50/60',
    border: 'border-red-200',
    tag: 'bg-[#E31B23]',
    bullet: 'bg-[#E31B23]',
    cta: 'bg-[#E31B23] hover:bg-[#b91c1c]',
    icon: 'text-[#E31B23] bg-red-100',
  },
  sky: {
    bg: 'from-sky-50 to-cyan-50',
    border: 'border-sky-200',
    tag: 'bg-sky-600',
    bullet: 'bg-sky-600',
    cta: 'bg-sky-600 hover:bg-sky-700',
    icon: 'text-sky-700 bg-sky-100',
  },
  amber: {
    bg: 'from-amber-50 to-yellow-50',
    border: 'border-amber-200',
    tag: 'bg-amber-500',
    bullet: 'bg-amber-500',
    cta: 'bg-amber-500 hover:bg-amber-600',
    icon: 'text-amber-600 bg-amber-100',
  },
} as const;

export function GetInvolved({ tracks }: { tracks: Track[] }) {
  return (
    <section id="participe" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0f172a] leading-tight">
              Como <span className="text-[#0066CC]">participar</span> dessa rede
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg">
              Seja qual for o seu lugar nessa caminhada, existe um jeito de se
              conectar com a ACADIM.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tracks.map((t, i) => {
            const Icon = iconMap[t.color];
            const c = colorMap[t.color];
            return (
              <Reveal key={t.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`bg-gradient-to-br ${c.bg} rounded-3xl p-7 sm:p-9 border ${c.border} shadow-sm h-full flex flex-col`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div
                        className={`inline-flex items-center gap-2 ${c.tag} text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4`}
                      >
                        {t.tag}
                      </div>
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0f172a] leading-tight">
                        {t.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-500 mt-1">
                        {t.subtitle}
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-2xl ${c.icon} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-5">
                    {t.description}
                  </p>

                  <ul className="space-y-2 mb-7">
                    {t.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm font-medium text-slate-700"
                      >
                        <span
                          className={`w-5 h-5 rounded-full ${c.bullet} text-white flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <svg
                            className="w-3 h-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={t.cta.href}
                    className={`mt-auto inline-flex items-center justify-center gap-2 ${c.cta} text-white font-bold py-3.5 px-6 rounded-full shadow-md self-start transition-colors`}
                  >
                    {t.cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
