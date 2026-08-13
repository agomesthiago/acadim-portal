/* Desenvolvido por Thiago Gomes (https://www.instagram.com/agomes.thiago83/) / Nix Society (https://www.instagram.com/nixsociety) para a ACADIM. */
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { getAllDiseases, getAllMedicalGroups } from '@/lib/distrofias-data';
import { DistrofiasSearchClient } from '@/components/DistrofiasSearchClient';
import { ContactSection } from '@/components/ContactSection';
import {
  BookOpen,
  HelpCircle,
  HeartPulse,
  Dna,
  ShieldCheck,
  Stethoscope,
  ShieldAlert,
  ArrowRight,
  ExternalLink,
  Users
} from 'lucide-react';
import { safeJsonLd } from '@/lib/sanitize-html';

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
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />

      {/* Header Cognitivo da Enciclopédia */}
      <div className="bg-surface-inverse text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
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

      {/* BANNER DE DESTAQUE: ALERTA MÉDICO DE EMERGÊNCIA */}
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-slate-950 border border-red-500/30 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-500/40 px-3 py-1 rounded-full">
            <ShieldAlert size={14} />
            <span>Recurso Vital de Emergência</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            Alerta Médico para Pronto-Socorro e Anestesia
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-medium">
            Diretrizes críticas formuladas pela <strong>Dra. Ana Lúcia Langer (CRM 43507)</strong> e mantidas pela <strong>Aliança Distrofia Brasil (ADB)</strong>. Orientações contra uso de Halotano, Succinilcolina e suplementação isolada de oxigênio sem ventilação.
          </p>
          <p className="text-[11px] text-slate-400 pt-1">
            Fonte original: <a href="https://www.distrofiabrasil.org.br/alerta-medico" target="_blank" rel="noopener noreferrer" className="underline hover:text-white inline-flex items-center gap-1">www.distrofiabrasil.org.br/alerta-medico <ExternalLink size={10} /></a>
          </p>
        </div>

        <Link
          href="/alerta-medico"
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-extrabold text-xs uppercase tracking-wider px-6 py-4 rounded-2xl shadow-lg shadow-brand-red/25 hover:shadow-brand-red/45 transition-all shrink-0 min-h-[44px]"
        >
          <span>Acessar Alerta Médico</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* 1. PRINCÍPIO CENTRAL: "O QUE É UMA DISTROFIA MUSCULAR?" (Linguagem Acessível e Conteúdo Enriquecido) */}
      <section id="o-que-e" className="bg-surface-default border border-border-subtle p-8 sm:p-10 rounded-3xl shadow-sm space-y-8 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-black text-brand-red uppercase tracking-wider flex items-center gap-1.5">
            <HelpCircle size={16} />
            <span>Entenda o Assunto</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight">
            O que é uma distrofia muscular?
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-medium">
            As distrofias musculares (DM) englobam um grupo de doenças genéticas raras caracterizadas pela degeneração e fraqueza progressiva do tecido muscular. Atualmente, a literatura médica identifica <strong>mais de 30 formas diferentes de distrofia muscular</strong>, variando de formas mais benignas a quadros mais graves, atingindo crianças e adultos de ambos os sexos. Todas elas comprometem a <strong>musculatura estriada</strong> (responsável pelos movimentos voluntários) com o envolvimento de diferentes grupos musculares conforme o tipo específico.
          </p>
        </div>

        {/* 4 Perguntas Chave em Cards Claros */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-subtle p-6 rounded-2xl border border-border-subtle space-y-2">
            <h3 className="font-extrabold text-sm text-text-primary flex items-center gap-2">
              <HeartPulse size={18} className="text-brand-red shrink-0" />
              <span>O que acontece no músculo estriado?</span>
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Sem a proteína protetora (como a distrofina ou disferlina), as células do músculo sofrem pequenas lesões durante os movimentos habituais e se desgastam com facilidade, gerando perda gradual de força e substituição do tecido muscular por fibrose e gordura.
            </p>
          </div>

          <div className="bg-surface-subtle p-6 rounded-2xl border border-border-subtle space-y-2">
            <h3 className="font-extrabold text-sm text-text-primary flex items-center gap-2">
              <Dna size={18} className="text-brand-blue shrink-0" />
              <span>Por que a progressão varia entre pessoas?</span>
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Cada pessoa apresenta uma progressão diferente da doença, <strong>mesmo entre irmãos</strong>. Isso deve-se a múltiplos fatores genéticos, mutações específicas, modificadores epigenéticos e grupos musculares acometidos.
            </p>
          </div>

          <div className="bg-surface-subtle p-6 rounded-2xl border border-border-subtle space-y-2">
            <h3 className="font-extrabold text-sm text-text-primary flex items-center gap-2">
              <Users size={18} className="text-emerald-600 shrink-0" />
              <span>Qual o impacto do tratamento multidisciplinar?</span>
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Embora ainda não haja terapia curativa definitiva, o tratamento multidisciplinar adequado (fisioterapia, suporte ventilatório, manejo cardiológico e nutrição) aliado às novas terapias gênicas tem demonstrado eficácia comprovada na <strong>melhoria substancial da qualidade e expectativa de vida</strong>.
            </p>
          </div>

          <div className="bg-surface-subtle p-6 rounded-2xl border border-border-subtle space-y-2">
            <h3 className="font-extrabold text-sm text-text-primary flex items-center gap-2">
              <Stethoscope size={18} className="text-purple-600 shrink-0" />
              <span>Por que o exame genético é vital?</span>
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              O diagnóstico genético preciso identifica exatamente qual gene foi alterado. Isso é indispensável para orientar o tratamento adequado, evitar medicamentos contraindicados no pronto-socorro e planejar o acompanhamento de saúde.
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
