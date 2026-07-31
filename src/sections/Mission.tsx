import { motion } from 'framer-motion';
import { Eye, Flag, Gem, Check } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import type { MissionPillar } from '../lib/data';

const iconMap = { eye: Eye, flag: Flag, gem: Gem } as const;

const colors = [
  { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'bg-[#0066CC]', badge: 'text-[#0066CC] bg-blue-100' },
  { bg: 'bg-red-50', border: 'border-red-200', icon: 'bg-[#E31B23]', badge: 'text-[#E31B23] bg-red-100' },
  { bg: 'bg-sky-50', border: 'border-sky-200', icon: 'bg-sky-500', badge: 'text-sky-700 bg-sky-100' },
];

export function Mission({ pillars }: { pillars: MissionPillar[] }) {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal>
            <span className="text-[#0066CC] text-xs font-black uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full">
              O que nos move
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0f172a] mt-4 leading-tight">
              Missão, visão <span className="text-[#E31B23]">e valores</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = iconMap[p.icon];
            const c = colors[i % colors.length];
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`${c.bg} rounded-3xl p-8 border ${c.border} relative flex flex-col justify-between h-full group hover:shadow-lg transition-shadow`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl ${c.icon} text-white flex items-center justify-center shadow-md`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <span
                        className={`text-[11px] font-bold ${c.badge} px-3 py-1 rounded-full uppercase`}
                      >
                        {p.badge}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-[#0f172a] mb-4">
                      {p.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                      {p.content}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200 flex items-center gap-2 text-[#0066CC] text-xs font-bold">
                    <Check className="w-4 h-4 text-[#E31B23]" />
                    Compromisso permanente
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
