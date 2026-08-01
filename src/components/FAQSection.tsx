import React from 'react';
import { Reveal } from './Animations';

export function FAQSection() {
  const faqs = [
    {
      q: "Como posso ser atendido pela ACADIM?",
      a: "O primeiro passo é entrar em contato através dos nossos canais oficiais de atendimento (telefone ou email) para agendar uma triagem com nossa equipe de serviço social."
    },
    {
      q: "A associação fornece cadeiras de rodas?",
      a: "Sim, através de campanhas, parcerias e doações, buscamos fornecer ou auxiliar na aquisição de equipamentos de mobilidade adequados para nossos cadastrados."
    },
    {
      q: "Como posso ser voluntário?",
      a: "Sempre precisamos de mãos dispostas a ajudar! Temos vagas para profissionais de saúde voluntários e também para apoio em eventos e ações do bazar. Entre em contato conosco."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0B132B] mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-slate-600">
              Respostas rápidas para as principais perguntas sobre a ACADIM.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <details className="group bg-white rounded-2xl shadow-sm border border-slate-200 open:ring-2 open:ring-[#0066CC]/20 transition-all">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#0B132B]">
                  {faq.q}
                  <span className="transition group-open:rotate-180 text-[#0066CC]">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
