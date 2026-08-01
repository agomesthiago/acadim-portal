import React from 'react';
import { Target, Eye, Gem } from 'lucide-react';
import { Reveal, SCALE_SPRING } from './Animations';
import { motion } from 'framer-motion';

export function MissionVisionValues() {
  return (
    <section id="missao" className="py-24 bg-[#0B132B] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-display font-black text-4xl sm:text-5xl mb-4">Nossa Essência</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">O que nos guia todos os dias em nossa jornada de apoio e acolhimento.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Missão',
              icon: Target,
              color: 'text-[#38bdf8]',
              bg: 'bg-[#38bdf8]/10',
              border: 'border-[#38bdf8]/20',
              text: 'Prestar assistência interdisciplinar às pessoas com distrofia muscular e seus familiares, visando melhoria da qualidade de vida, promoção da saúde e garantia de direitos sociais.'
            },
            {
              title: 'Visão',
              icon: Eye,
              color: 'text-[#E31B23]',
              bg: 'bg-[#E31B23]/10',
              border: 'border-[#E31B23]/20',
              text: 'Ser referência nacional na assistência integral em doenças neuromusculares, sendo reconhecida pela excelência, inovação e impacto positivo na sociedade.'
            },
            {
              title: 'Valores',
              icon: Gem,
              color: 'text-yellow-400',
              bg: 'bg-yellow-400/10',
              border: 'border-yellow-400/20',
              text: 'Ética, transparência, empatia, respeito à diversidade, compromisso social, trabalho em equipe e defesa incondicional da vida e da dignidade humana.'
            }
          ].map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={SCALE_SPRING}
                className={`h-full bg-white/5 rounded-3xl p-8 border ${item.border} hover:bg-white/10 transition-colors duration-300`}
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="font-display font-bold text-2xl mb-4">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
