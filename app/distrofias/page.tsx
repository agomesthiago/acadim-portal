import React from 'react';
import { Metadata } from 'next';
import { getAllDiseases, getAllMedicalGroups } from '@/lib/distrofias-data';
import { DistrofiasSearchClient } from '@/components/DistrofiasSearchClient';
import { ContactSection } from '@/components/ContactSection';
import { BookOpen, HelpCircle, HeartPulse, Dna, ShieldCheck, Stethoscope } from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://acadim.org.br'),
  title: 'Distrofias Musculares: tipos, sintomas, causas e diagnóstico | ACADIM',
  description: 'Conheça os principais tipos de distrofia muscular, suas causas genéticas, sinais, diagnóstico e características. Informação acessível para pacientes, famílias e cuidadores.',
  alternates: {
    canonical: 'https://acadim.org.br/distrofias',
  },
  openGraph: {
    title: 'Distrofias Musculares: tipos, sintomas, causas e diagnóstico | ACADIM',
    description: 'Guia enciclopédico acessível sobre tipos, causas genéticas, sintomas e diagnósticos das distrofias musculares.',
    url: 'https://acadim.org.br/distrofias',
    siteName: 'ACADIM',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Distrofias Musculares | Enciclopédia ACADIM',
    description: 'Conheça os tipos, sintomas, causas e diagnósticos das distrofias musculares em linguagem acessível.',
  },
};

export default function DistrofiasPage() {
  const diseases = getAllDiseases();
  const groups = getAllMedicalGroups();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://acadim.org.br/distrofias',
        name: 'Enciclopédia de Distrofias Musculares | ACADIM',
        description: 'Guia acessível e informativo sobre os tipos, genéticas, sintomas e diagnósticos das distrofias musculares.',
        publisher: {
          '@type': 'Organization',
          name: 'ACADIM - Associação Carioca de Distrofia Muscular',
          url: 'https://acadim.org.br',
        },
      },
      {
        '@type': 'CollectionPage',
        name: 'Tipos de Distrofia Muscular',
        description: 'Coleção informativa de condições neuromusculares.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: diseases.map((d, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'MedicalCondition',
              name: d.name,
              alternateName: d.synonyms,
              url: `https://acadim.org.br/distrofias/${d.slug}`,
            },
          })),
        },
      },
    ],
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Cognitivo da Enciclopédia */}
      <div className="bg-surface-inverse text-white rounded-3xl p-8 sm:p-12 shadow-2xl mb-12 relative overflow-hidden">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/20 text-brand-red font-extrabold text-xs uppercase tracking-wider">
            <BookOpen size={14} />
            <span>Guia Acessível para Pacientes, Famílias e Cuidadores</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Distrofias Musculares: conheça os principais tipos
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Uma enciclopédia da ACADIM para entender as principais distrofias musculares, seus sinais, causas genéticas, diagnóstico e cuidados.
          </p>
        </div>
      </div>

      {/* 1. PRINCÍPIO CENTRAL: "O QUE É UMA DISTROFIA MUSCULAR?" (Linguagem Acessível) */}
      <section id="o-que-e" className="bg-surface-default border border-border-subtle p-8 sm:p-10 rounded-3xl shadow-sm mb-12 space-y-8 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-black text-brand-red uppercase tracking-wider flex items-center gap-1.5">
            <HelpCircle size={16} />
            <span>Entenda o Assunto</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight">
            O que é uma distrofia muscular?
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-medium">
            Distrofia muscular é o nome dado a um grupo de doenças genéticas que causam enfraquecimento progressivo dos músculos do corpo. Elas acontecem porque o organismo possui uma alteração no DNA que impede a produção correta de proteínas essenciais para manter as fibras musculares fortes e protegidas.
          </p>
        </div>

        {/* 4 Perguntas Chave em Cards Claros */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-subtle p-6 rounded-2xl border border-border-subtle space-y-2">
            <h3 className="font-extrabold text-sm text-text-primary flex items-center gap-2">
              <HeartPulse size={18} className="text-brand-red shrink-0" />
              <span>O que acontece no músculo?</span>
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Sem a proteína protetora (como a distrofina ou disferlina), as células do músculo sofrem pequenas lesões durante os movimentos do dia a dia e se desgastam com mais facilidade, gerando perda gradual de força.
            </p>
          </div>

          <div className="bg-surface-subtle p-6 rounded-2xl border border-border-subtle space-y-2">
            <h3 className="font-extrabold text-sm text-text-primary flex items-center gap-2">
              <Dna size={18} className="text-brand-blue shrink-0" />
              <span>Por que existem diferentes tipos?</span>
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Porque existem diferentes genes responsáveis pela saúde muscular. Cada tipo de distrofia é provocado por uma alteração em um gene específico, afetando proteínas e grupos musculares distintos.
            </p>
          </div>

          <div className="bg-surface-subtle p-6 rounded-2xl border border-border-subtle space-y-2">
            <h3 className="font-extrabold text-sm text-text-primary flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-600 shrink-0" />
              <span>Por que o início varia com a idade?</span>
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Algumas distrofias (como Duchenne) manifestam sinais já na primeira infância, enquanto outras (como Becker, FSHD ou OPMD) surgem na adolescência ou na vida adulta, dependendo da quantidade de proteína que o corpo ainda produz.
            </p>
          </div>

          <div className="bg-surface-subtle p-6 rounded-2xl border border-border-subtle space-y-2">
            <h3 className="font-extrabold text-sm text-text-primary flex items-center gap-2">
              <Stethoscope size={18} className="text-purple-600 shrink-0" />
              <span>Por que o exame genético é vital?</span>
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              O diagnóstico genético preciso identifica exatamente qual gene foi alterado. Isso é indispensável para orientar o tratamento adequado, evitar medicamentos inapropriados e planejar o acompanhamento médico correto.
            </p>
          </div>
        </div>
      </section>

      {/* 2. BUSCA, FILTROS E GRID DE CARDS DAS DISTROFIAS */}
      <DistrofiasSearchClient diseases={diseases} groups={groups} />

      {/* 3. SEÇÃO DE CONTATO E SUPORTE DA ACADIM */}
      <div className="mt-20">
        <ContactSection />
      </div>
    </div>
  );
}
