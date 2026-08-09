'use client';

import React from 'react';
import { Heart, Stethoscope, Scale, Users, GraduationCap, Shield } from 'lucide-react';
import { SectionBadge } from './SectionBadge';

export const ServicesSection: React.FC = () => {
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
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div>
            <SectionBadge icon={Heart} text="Como Ajudamos" variant="blue" className="mb-4" />
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0B132B]">
              Pilares de Atuação da <span className="text-[#0066CC]">ACADIM</span>
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg">
              Oferecemos uma estrutura integrada para que ninguém precise enfrentar a distrofia isoladamente.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066CC] flex items-center justify-center mb-6 group-hover:bg-[#0066CC] group-hover:text-white transition-colors" aria-hidden="true">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#0B132B] mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
