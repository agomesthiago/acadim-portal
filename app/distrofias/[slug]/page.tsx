'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { HeaderNav } from '@/components/HeaderNav';
import { PixModal } from '@/components/PixModal';
import { getDiseaseBySlug, getAllDiseases } from '@/lib/distrofias-data';
import {
  ArrowLeft,
  Dna,
  Activity,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  FileText,
  HelpCircle,
  ExternalLink,
  AlertTriangle,
  Calendar
} from 'lucide-react';

export default function DistrofiaWikiPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [isPixOpen, setIsPixOpen] = useState(false);

  const disease = getDiseaseBySlug(slug);

  if (!disease) {
    return (
      <div className="min-h-screen bg-surface-subtle flex items-center justify-center p-4">
        <div className="bg-surface-default border border-border-subtle rounded-2xl p-8 max-w-md w-full text-center space-y-4 shadow-xl">
          <h1 className="text-2xl font-black text-text-primary">Condição não encontrada</h1>
          <p className="text-xs text-text-tertiary">A ficha médica solicitada não foi localizada no catálogo da ACADIM.</p>
          <Link
            href="/distrofias"
            className="inline-flex items-center gap-2 bg-brand-red text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-brand-red-hover transition-colors"
          >
            Voltar para Enciclopédia
          </Link>
        </div>
      </div>
    );
  }

  // Schema JSON-LD unindo MedicalCondition, MedicalWebPage, BreadcrumbList e FAQPage
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `https://acadim.org.br/distrofias/${disease.slug}`,
        name: `${disease.name} | Enciclopédia Médica ACADIM`,
        description: disease.summary,
        lastReviewed: disease.lastReviewed,
        publisher: {
          '@type': 'Organization',
          name: 'ACADIM - Associação Carioca de Distrofia Muscular',
          url: 'https://acadim.org.br',
        },
      },
      {
        '@type': 'MedicalCondition',
        name: disease.name,
        alternateName: disease.synonyms,
        associatedAnatomy: {
          '@type': 'AnatomicalStructure',
          name: 'Músculo esquelético e miocárdio',
        },
        signOrSymptom: disease.signsAndSymptoms.map((s) => ({
          '@type': 'MedicalSymptom',
          name: s,
        })),
        possibleTreatment: disease.treatmentsAndManagement.map((t) => ({
          '@type': 'MedicalTherapy',
          name: t,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Início',
            item: 'https://acadim.org.br',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Enciclopédia de Distrofias',
            item: 'https://acadim.org.br/distrofias',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: disease.name,
            item: `https://acadim.org.br/distrofias/${disease.slug}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: disease.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  const otherDiseases = getAllDiseases()
    .filter((d) => d.slug !== disease.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-surface-subtle text-text-primary flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeaderNav onOpenPixModal={() => setIsPixOpen(true)} />

      <main className="flex-grow pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb & Voltar */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/distrofias"
            className="inline-flex items-center gap-2 text-xs font-bold text-text-secondary hover:text-brand-red transition-colors min-h-[44px]"
          >
            <ArrowLeft size={16} />
            <span>Voltar para Enciclopédia de Distrofias</span>
          </Link>

          <span className="text-[10px] font-bold text-text-tertiary flex items-center gap-1">
            <Calendar size={12} />
            Última revisão editorial: {disease.lastReviewed}
          </span>
        </div>

        {/* Ficha Cabeçalho */}
        <div className="bg-surface-default border border-border-subtle rounded-3xl p-6 sm:p-10 shadow-lg mb-10 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <span className="bg-brand-blue/10 text-brand-blue font-black text-xs uppercase tracking-wider px-3 py-1 rounded-full">
              {disease.group}
            </span>
            <span className="text-xs font-extrabold text-brand-red bg-brand-red/10 px-3 py-1 rounded-full">
              {disease.inheritance}
            </span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight leading-tight">
              {disease.name}
            </h1>
            <p className="text-xs font-bold text-text-tertiary mt-1">
              Sinônimos & Nomenclatura: {disease.synonyms.join(' · ')}
            </p>
          </div>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-medium border-l-4 border-brand-red pl-4">
            {disease.summary}
          </p>

          {/* Ficha Técnica Genética */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-border-subtle text-xs">
            <div className="bg-surface-subtle p-4 rounded-xl border border-border-subtle space-y-1">
              <span className="text-text-tertiary font-medium flex items-center gap-1.5">
                <Dna size={14} className="text-brand-red" />
                Gene Associado:
              </span>
              <div className="font-extrabold text-text-primary font-mono text-sm">{disease.gene}</div>
            </div>

            <div className="bg-surface-subtle p-4 rounded-xl border border-border-subtle space-y-1">
              <span className="text-text-tertiary font-medium flex items-center gap-1.5">
                <Activity size={14} className="text-brand-blue" />
                Proteína Afetada:
              </span>
              <div className="font-bold text-text-primary text-xs">{disease.protein}</div>
            </div>

            <div className="bg-surface-subtle p-4 rounded-xl border border-border-subtle space-y-1">
              <span className="text-text-tertiary font-medium flex items-center gap-1.5">
                <HeartPulse size={14} className="text-emerald-600" />
                Idade Típica de Início:
              </span>
              <div className="font-bold text-text-primary text-xs">{disease.onsetAge}</div>
            </div>

            <div className="bg-surface-subtle p-4 rounded-xl border border-border-subtle space-y-1">
              <span className="text-text-tertiary font-medium flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-amber-600" />
                Sistemas Afetados:
              </span>
              <div className="font-bold text-text-primary text-xs">{disease.affectedSystems.join(', ')}</div>
            </div>
          </div>
        </div>

        {/* Corpo do Artigo Médico Wiki */}
        <div className="space-y-10">
          {/* Visão Geral & Fisiopatologia */}
          <section className="bg-surface-default border border-border-subtle p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-xl font-extrabold text-text-primary flex items-center gap-2">
              <FileText className="text-brand-red" size={20} />
              <span>Visão Geral & Mecanismo Molecular</span>
            </h2>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              {disease.overview}
            </p>
            <p className="text-xs font-semibold text-text-tertiary bg-surface-subtle p-3 rounded-xl">
              Classificação Médica: {disease.classification}
            </p>
          </section>

          {/* Sinais e Sintomas Clínicos */}
          <section className="bg-surface-default border border-border-subtle p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-xl font-extrabold text-text-primary flex items-center gap-2">
              <Stethoscope className="text-brand-blue" size={20} />
              <span>Sinais e Sintomas Principais</span>
            </h2>
            <ul className="grid grid-cols-1 gap-3">
              {disease.signsAndSymptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-surface-subtle p-3.5 rounded-xl border border-border-subtle text-xs sm:text-sm text-text-primary font-medium">
                  <span className="w-5 h-5 rounded-full bg-brand-red/10 text-brand-red font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Manifestações por Sistema (Cardíaco, Respiratório, Ortopédico) */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-default border border-border-subtle p-6 rounded-2xl shadow-sm space-y-2">
              <h3 className="font-extrabold text-sm text-brand-red flex items-center gap-2">
                <HeartPulse size={18} />
                <span>Manifestação Cardíaca</span>
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">{disease.cardiacManifestations}</p>
            </div>

            <div className="bg-surface-default border border-border-subtle p-6 rounded-2xl shadow-sm space-y-2">
              <h3 className="font-extrabold text-sm text-brand-blue flex items-center gap-2">
                <Activity size={18} />
                <span>Manifestação Respiratória</span>
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">{disease.respiratoryManifestations}</p>
            </div>

            <div className="bg-surface-default border border-border-subtle p-6 rounded-2xl shadow-sm space-y-2">
              <h3 className="font-extrabold text-sm text-emerald-600 flex items-center gap-2">
                <ShieldCheck size={18} />
                <span>Manifestação Ortopédica</span>
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">{disease.orthopedicManifestations}</p>
            </div>
          </section>

          {/* Diagnóstico e Exames Complementares */}
          <section className="bg-surface-default border border-border-subtle p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-xl font-extrabold text-text-primary flex items-center gap-2">
              <Dna className="text-brand-red" size={20} />
              <span>Diagnóstico & Exames Recomendados</span>
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
              {disease.diagnosisAndTests.map((test, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-brand-red font-bold">•</span>
                  <span>{test}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tratamento, Manejo e Terapias Aprovadas */}
          <section className="bg-surface-default border border-border-subtle p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-text-primary flex items-center gap-2 mb-3">
                <Stethoscope className="text-brand-blue" size={20} />
                <span>Tratamento e Suporte Multidisciplinar</span>
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                {disease.treatmentsAndManagement.map((tx, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brand-blue font-bold">✓</span>
                    <span>{tx}</span>
                  </li>
                ))}
              </ul>
            </div>

            {disease.approvedTherapies && disease.approvedTherapies.length > 0 && (
              <div className="pt-4 border-t border-border-subtle">
                <h3 className="font-extrabold text-xs text-emerald-700 uppercase tracking-wider mb-2">
                  Terapias Específicas / Aprovadas:
                </h3>
                <ul className="space-y-1 text-xs text-text-primary font-semibold">
                  {disease.approvedTherapies.map((rx, idx) => (
                    <li key={idx} className="bg-emerald-50 text-emerald-900 p-2.5 rounded-lg border border-emerald-200">
                      💊 {rx}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {disease.ongoingResearch && (
              <div className="bg-surface-subtle p-4 rounded-xl border border-border-subtle space-y-1">
                <span className="font-bold text-xs text-brand-blue uppercase tracking-wider">
                  Pesquisas & Ensaios Clínicos em Andamento:
                </span>
                <p className="text-xs text-text-secondary">{disease.ongoingResearch}</p>
              </div>
            )}
          </section>

          {/* Perguntas Frequentes (FAQ) */}
          {disease.faqs && disease.faqs.length > 0 && (
            <section className="bg-surface-default border border-border-subtle p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
              <h2 className="text-xl font-extrabold text-text-primary flex items-center gap-2">
                <HelpCircle className="text-brand-red" size={20} />
                <span>Perguntas Frequentes</span>
              </h2>
              <div className="space-y-4">
                {disease.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-surface-subtle p-4 rounded-xl border border-border-subtle space-y-1">
                    <h3 className="font-extrabold text-xs sm:text-sm text-text-primary">{faq.question}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Referências Científicas */}
          {disease.references && disease.references.length > 0 && (
            <section className="bg-surface-default border border-border-subtle p-6 rounded-2xl shadow-sm space-y-3 text-xs">
              <h3 className="font-extrabold text-text-tertiary uppercase tracking-wider">Referências & Diretrizes Consultadas</h3>
              <ul className="space-y-2">
                {disease.references.map((ref, idx) => (
                  <li key={idx} className="flex items-center justify-between gap-4">
                    <span className="text-text-secondary font-medium">{ref.title} ({ref.source})</span>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-brand-blue font-bold hover:underline shrink-0"
                    >
                      <span>Acessar</span>
                      <ExternalLink size={12} />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Isenção de Responsabilidade Médica */}
          <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl space-y-2 text-xs">
            <h3 className="font-extrabold text-amber-900 flex items-center gap-2">
              <AlertTriangle size={16} />
              <span>Isenção de Responsabilidade Médica</span>
            </h3>
            <p className="text-amber-950 leading-relaxed font-medium">
              Esta ficha enciclopédica é um recurso exclusivamente informativo e educativo mantido pela ACADIM. As informações aqui contidas não substituem a avaliação clínica médica presencial, o acompanhamento por neurologista ou a conduta multidisciplinar individualizada.
            </p>
          </div>
        </div>

        {/* Navegação para outras condições */}
        {otherDiseases.length > 0 && (
          <div className="mt-16 space-y-6">
            <h2 className="text-2xl font-black text-text-primary">Outras Condições na Enciclopédia</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherDiseases.map((other) => (
                <Link
                  key={other.slug}
                  href={`/distrofias/${other.slug}`}
                  className="bg-surface-default border border-border-subtle p-5 rounded-2xl hover:border-brand-red transition-all group"
                >
                  <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider block mb-1">
                    {other.group}
                  </span>
                  <h3 className="font-extrabold text-sm text-text-primary group-hover:text-brand-red transition-colors line-clamp-1">
                    {other.name}
                  </h3>
                  <span className="text-xs text-text-tertiary font-mono block mt-1">Gene: {other.gene}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <PixModal isOpen={isPixOpen} onClose={() => setIsPixOpen(false)} />
    </div>
  );
}
