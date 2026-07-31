import { motion } from 'framer-motion';
import {
  Heart,
  Stethoscope,
  Scale,
  Users,
  GraduationCap,
  Shield,
} from 'lucide-react';
import { Reveal } from '../components/Reveal';
import type { Service } from '../lib/data';

const iconMap = {
  heart: Heart,
  stethoscope: Stethoscope,
  scale: Scale,
  users: Users,
  'graduation-cap': GraduationCap,
  shield: Shield,
} as const;

export function Services({ services }: { services: Service[] }) {
  return (
    <section
      id="servicos"
      className="py-20 lg:py-28 bg-slate-50 relative"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal>
            <span className="text-[#0066CC] text-xs font-black uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full">
              Como ajudamos
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0f172a] mt-4 leading-tight">
              Como a <span className="text-[#0066CC]">ACADIM</span> caminha com você
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg">
              Oferecemos uma rede de apoio integrada, para que ninguém precise
              enfrentar a distrofia muscular de forma isolada.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all group h-full"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066CC] flex items-center justify-center mb-5 group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0f172a] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
