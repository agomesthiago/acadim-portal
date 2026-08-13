import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDiseaseBySlug, getAllDiseases } from '@/lib/distrofias-data';
import { safeJsonLd } from '@/lib/sanitize-html';
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

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const diseases = getAllDiseases();
  return diseases.map((disease) => ({
    slug: disease.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const disease = getDiseaseBySlug(slug);

  if (!disease) {
    return {
      title: 'Condição não encontrada | ACADIM',
    };
  }

  return {
    metadataBase: new URL('https://acadim.org.br'),
    title: `${disease.name} (${disease.shortName}) | Enciclopédia Médica ACADIM`,
    description: disease.summary,
    alternates: {
      canonical: `https://acadim.org.br/distrofias/${disease.slug}`,
    },
    openGraph: {
      title: `${disease.name} (${disease.shortName}) — Sintomas, Causas e Cuidados`,
      description: disease.summary,
      url: `https://acadim.org.br/distrofias/${disease.slug}`,
      siteName: 'ACADIM Portal',
      locale: 'pt_BR',
      type: 'article',
    },
  };
}

export default async function DistrofiaWikiPage({ params }: PageProps) {
  const { slug } = await params;
  const disease = getDiseaseBySlug(slug);

  if (!disease) {
    notFound();
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

  const sections = [
    { id: 'visao-geral', label: 'Visão Geral', icon: FileText },
    { id: 'sintomas', label: 'Sintomas', icon: Stethoscope },
    { id: 'diagnostico', label: 'Diagnóstico', icon: Dna },
    { id: 'tratamento', label: 'Tratamento', icon: Activity },
    ...(disease.faqs && disease.faqs.length > 0 ? [{ id: 'faq', label: 'FAQ', icon: HelpCircle }] : []),
    ...(disease.references && disease.references.length > 0 ? [{ id: 'referencias', label: 'Referências', icon: FileText }] : [])
  ];

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />

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
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-brand-blue/10 text-brand-blue font-black text-xs uppercase tracking-wider px-3 py-1 rounded-full">
              {disease.group}
            </span>
            {disease.cid && (
              <span className="bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-slate-200" title="Código CID de Referência Cadastral">
                CID-10: {disease.cid}
              </span>
            )}
          </div>
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

      {/* Índice / Navegação Interna */}
      <div className="bg-surface-subtle border border-border-subtle rounded-2xl p-4 sm:p-6 mb-10 overflow-x-auto scrollbar-none sticky top-24 z-30 shadow-sm">
        <span className="text-xs font-black text-text-primary uppercase tracking-wider block mb-3">Nesta Página:</span>
        <nav className="flex items-center gap-2" aria-label="Índice da página">
          {sections.map((sec) => {
            const Icon = sec.icon;
            return (
              <a 
                key={sec.id} 
                href={`#${sec.id}`}
                className="flex items-center gap-1.5 bg-white border border-border-default px-4 py-2.5 rounded-xl text-xs font-bold text-text-secondary hover:text-brand-red hover:border-brand-red transition-colors shrink-0 min-h-[44px]"
              >
                <Icon size={14} aria-hidden="true" />
                <span>{sec.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Corpo do Artigo Médico Wiki */}
      <div className="space-y-10">
        {/* Visão Geral & Fisiopatologia */}
        <section id="visao-geral" className="bg-surface-default border border-border-subtle p-6 sm:p-8 rounded-2xl shadow-sm space-y-4 scroll-mt-48">
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
        <section id="sintomas" className="bg-surface-default border border-border-subtle p-6 sm:p-8 rounded-2xl shadow-sm space-y-4 scroll-mt-48">
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
        <section id="diagnostico" className="bg-surface-default border border-border-subtle p-6 sm:p-8 rounded-2xl shadow-sm space-y-4 scroll-mt-48">
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
        <section id="tratamento" className="bg-surface-default border border-border-subtle p-6 sm:p-8 rounded-2xl shadow-sm space-y-6 scroll-mt-48">
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
          <section id="faq" className="bg-surface-default border border-border-subtle p-6 sm:p-8 rounded-2xl shadow-sm space-y-4 scroll-mt-48">
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
          <section id="referencias" className="bg-surface-default border border-border-subtle p-6 rounded-2xl shadow-sm space-y-3 text-xs scroll-mt-48">
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
            <span>Isenção de Responsabilidade Médica & Código CID</span>
          </h3>
          <p className="text-amber-950 leading-relaxed font-medium">
            Esta ficha enciclopédica é um recurso exclusivamente informativo e educativo mantido pela ACADIM. As classificações CID-10 apresentadas são fornecidas para referência cadastral e devem ser obrigatoriamente confirmadas por laudo médico individualizado fornecido por neurologista ou geneticista clínico.
          </p>
        </div>

        {/* CTA Institucional */}
        <div className="bg-surface-inverse text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 mt-12 shadow-lg">
          <div className="space-y-3">
            <h3 className="text-xl font-black">Junte-se à nossa Rede de Apoio</h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
              A ACADIM oferece acolhimento, orientação e luta pela garantia de direitos de pessoas com distrofias musculares no RJ. Conheça nossos projetos ou faça parte desta causa.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/#contato"
              className="flex justify-center items-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Fale Conosco
            </Link>
            <Link
              href="/#hero"
              className="flex justify-center items-center bg-brand-red hover:bg-brand-red-hover text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Como Apoiar
            </Link>
          </div>
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
    </div>
  );
}
