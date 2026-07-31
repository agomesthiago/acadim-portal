import React from 'react';
import { Reveal } from './Animations';

export function AboutUs() {
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
