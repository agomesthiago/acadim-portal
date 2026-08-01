import React from 'react';
import { Users, Stethoscope, Scale, HeartHandshake, Dumbbell, BrainCircuit } from 'lucide-react';
import { Reveal, SCALE_SPRING } from './Animations';
import { motion } from 'framer-motion';

export function ServicesSection() {
  return (
    <section id="atuacao" className="py-24 bg-slate-50 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <div className="inline-block bg-[#0066CC]/10 text-[#0066CC] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Nossa Atuação
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0B132B] mb-6">
              Como ajudamos
            </h2>
            <p className="text-slate-600 text-lg">
              Oferecemos atendimento multidisciplinar e suporte contínuo para garantir a melhor qualidade de vida possível.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Stethoscope,
              title: "Atendimento Médico",
              desc: "Orientação especializada e encaminhamento para a rede de saúde adequada."
            },
            {
              icon: BrainCircuit,
              title: "Apoio Psicológico",
              desc: "Acolhimento emocional para pacientes e familiares enfrentarem os desafios."
            },
            {
              icon: Users,
              title: "Assistência Social",
              desc: "Garantia de direitos, auxílio na obtenção de benefícios e medicamentos."
            },
            {
              icon: Scale,
              title: "Assessoria Jurídica",
              desc: "Apoio legal para assegurar o acesso aos direitos fundamentais."
            },
            {
              icon: Dumbbell,
              title: "Fisioterapia",
              desc: "Orientações sobre reabilitação motora e respiratória, essenciais na D.M."
            },
            {
              icon: HeartHandshake,
              title: "Grupos de Apoio",
              desc: "Rodas de conversa e encontros para troca de experiências e fortalecimento mútuo."
            }
          ].map((service, index) => (
            <Reveal key={index} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={SCALE_SPRING}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-all group"
              >
                <div className="w-12 h-12 bg-slate-50 group-hover:bg-[#0066CC]/10 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <service.icon className="w-6 h-6 text-[#0066CC]" />
                </div>
                <h3 className="font-bold text-lg text-[#0B132B] mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
