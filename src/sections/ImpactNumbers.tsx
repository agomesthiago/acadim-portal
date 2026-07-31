import { Reveal } from '../components/Reveal';
import type { ImpactNumber } from '../lib/data';

export function ImpactNumbers({ numbers }: { numbers: ImpactNumber[] }) {
  return (
    <section id="impacto" className="py-16 bg-gradient-to-r from-[#0066CC] to-[#004499] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E31B23] rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
            Nossos <span className="text-red-300">números</span> são feitos de histórias.
          </h2>
          <p className="text-blue-100 mt-3 text-sm sm:text-base">
            Dados construídos ao longo de mais de 27 anos de caminhada com as famílias.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {numbers.map((n, i) => (
            <Reveal
              key={n.label}
              delay={i * 0.08}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <p className="font-display font-black text-4xl sm:text-5xl text-white">{n.value}</p>
              <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-snug">{n.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
