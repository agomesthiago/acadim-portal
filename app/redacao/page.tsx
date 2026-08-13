/* Desenvolvido por Thiago Gomes (https://www.instagram.com/agomes.thiago83/) / Nix Society (https://www.instagram.com/nixsociety) para a ACADIM. */
import React from 'react';
import Link from 'next/link';
import { ShieldCheck, BookOpen, CheckCircle2, FileText, ArrowLeft } from 'lucide-react';
import { safeJsonLd } from '@/lib/sanitize-html';

export default function RedacaoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Redação ACADIM — Equipe Editorial de Ciência, Saúde e Cidadania',
    description: 'Missão editorial, políticas de checagem e atribuição de fontes científicas sobre doenças neuromusculares.',
    publisher: {
      '@type': 'Organization',
      name: 'ACADIM - Associação Carioca de Distrofia Muscular',
      url: 'https://acadim.org.br',
    },
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      {/* Script JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />

      {/* Breadcrumb & Botão Voltar */}
      <div className="mb-6">
        <Link
          href="/noticias"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:underline min-h-[44px]"
        >
          <ArrowLeft size={16} />
          <span>Voltar para Notícias</span>
        </Link>
      </div>

      {/* Hero da Redação ACADIM */}
      <div className="bg-surface-default border border-border-subtle rounded-3xl p-8 sm:p-12 shadow-xl mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -z-10" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 text-brand-red font-bold text-xs uppercase tracking-wider mb-4">
          <BookOpen size={14} />
          <span>Transparência & Ética Editorial</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight leading-tight mb-4">
          Redação ACADIM
        </h1>
        <p className="text-lg sm:text-xl text-text-secondary font-medium max-w-3xl leading-relaxed">
          Equipe Editorial de Ciência, Saúde e Cidadania da Associação Carioca de Distrofia Muscular.
        </p>
      </div>

      {/* Conteúdo Principal */}
      <div className="space-y-12 text-text-primary">
        {/* Seção 1: Nossa Missão */}
        <section className="bg-surface-default border border-border-subtle p-8 rounded-2xl shadow-sm space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-brand-blue">
            <ShieldCheck className="text-brand-red" size={24} />
            <span>1. Nossa Missão Editorial</span>
          </h2>
          <p className="text-text-secondary leading-relaxed">
            A **Redação ACADIM** é o órgão de comunicação institucional encarregado de traduzir a complexidade dos avanços científicos, ensaios clínicos, terapias genéticas e direitos no SUS para uma linguagem clara, acessível, responsável e rigorosamente fundamentada.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Não publicamos conteúdo sensacionalista nem prometemos &quot;curas milagrosas&quot;. Nosso objetivo é capacitar pacientes, cuidadores e profissionais de saúde no Rio de Janeiro e em todo o Brasil com informações confiáveis para tomadas de decisão conscientes.
          </p>
        </section>

        {/* Seção 2: Política de Fontes e Atribuição */}
        <section className="bg-surface-default border border-border-subtle p-8 rounded-2xl shadow-sm space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-brand-blue">
            <FileText className="text-brand-red" size={24} />
            <span>2. Curadoria, Atribuição & Fontes Primárias</span>
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Toda informação de cunho médico ou científico veiculada pela ACADIM passa por um protocolo de curadoria. Quando adaptamos estudos ou reportagens de periódicos internacionais ou veículos de comunicação médica, identificamos explicitamente a fonte primária original com link direto e data de publicação original.
          </p>
          <div className="bg-surface-subtle p-5 rounded-xl border border-border-subtle space-y-3">
            <h3 className="font-bold text-sm uppercase tracking-wider text-text-primary">Principais Fontes Consultadas:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-text-secondary">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Muscular Dystrophy Association (MDA)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>NINDS / National Institutes of Health (NIH)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>The Lancet Neurology & Nature Reviews</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Ministério da Saúde & CONITEC</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Aliança Distrofia Brasil (ADB)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Defensoria Pública do Estado do RJ</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Seção 3: Isenção de Responsabilidade Médica */}
        <section className="bg-amber-500/10 border border-amber-500/30 p-8 rounded-2xl space-y-4">
          <h2 className="text-xl font-extrabold text-amber-900 dark:text-amber-300 flex items-center gap-2">
            <span>⚠️ Isenção de Responsabilidade Médica (Medical Disclaimer)</span>
          </h2>
          <p className="text-sm text-amber-950 dark:text-amber-200 leading-relaxed font-medium">
            As matérias, artigos e conteúdos publicados pela Redação ACADIM possuem caráter exclusivamente informativo, educativo e de conscientização social. **Nenhum conteúdo publicado nesta plataforma substitui a consulta médica, o diagnóstico presencial, o acompanhamento por neurologista/neuropediatra ou a prescrição por equipe multidisciplinar qualificada.**
          </p>
        </section>
      </div>
    </div>
  );
}
