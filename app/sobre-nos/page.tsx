import { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Heart,
  BookOpen,
  Calendar,
  Award,
  Building2,
  FileText,
  ArrowRight,
  CheckCircle2,
  Users,
  Sparkles,
  MapPin,
  Scale,
  Stethoscope,
  Info,
  HelpCircle
} from 'lucide-react';
import { safeJsonLd } from '@/lib/sanitize-html';
import { MascotsSection } from '@/components/MascotsSection';
import { ContactSection } from '@/components/ContactSection';

export const metadata: Metadata = {
  metadataBase: new URL('https://acadim.org.br'),
  title: 'Sobre a ACADIM — História, Missão e Atuação Institucional | ACADIM',
  description: 'Conheça a história da Associação Carioca de Distrofia Muscular (ACADIM), fundada em 29 de julho de 1998. Atuação em doenças neuromusculares, acolhimento e defesa de direitos no RJ.',
  alternates: {
    canonical: 'https://acadim.org.br/sobre-nos',
  },
  openGraph: {
    title: 'Sobre a ACADIM — História, Missão e Atuação Institucional',
    description: 'A história da Associação Carioca de Distrofia Muscular, sua fundação em 29 de julho de 1998, defesa de direitos no SUS e apoio às famílias.',
    url: 'https://acadim.org.br/sobre-nos',
    siteName: 'ACADIM Portal',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function SobreNosPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Sobre a ACADIM — Associação Carioca de Distrofia Muscular',
    url: 'https://acadim.org.br/sobre-nos',
    description: 'História institucional, fundação em 29 de julho de 1998 e atuação da ACADIM em apoio às famílias e pessoas com distrofias musculares.',
    mainEntity: {
      '@type': 'NGO',
      name: 'Associação Carioca de Distrofia Muscular',
      alternateName: 'ACADIM',
      foundingDate: '1998-07-29',
      taxID: '02.916.982/0001-91',
      founder: {
        '@type': 'Person',
        name: 'Maria Clara Migowski Pinto Barbosa',
        jobTitle: 'Fundadora e Presidente',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rio de Janeiro',
        addressRegion: 'RJ',
        addressCountry: 'BR',
      },
    },
  };

  const timelineEvents = [
    {
      date: '29 de julho de 1998',
      title: 'Fundação da ACADIM',
      description: 'Marco histórico de criação da Associação Carioca de Distrofia Muscular, motivada pela necessidade de união entre famílias, médicos e defensores dos direitos das pessoas com doenças neuromusculares no Estado do Rio de Janeiro.',
      source: 'Registros Institucionais da ACADIM / Acervo Histórico',
      badgeColor: 'bg-brand-blue/10 text-brand-blue',
    },
    {
      date: '01 de dezembro de 1998',
      title: 'Registro Cadastral do CNPJ',
      description: 'Formalização da inscrição cadastral da pessoa jurídica sob o CNPJ 02.916.982/0001-91, estabelecendo a estrutura administrativa para representação legal perante órgãos públicos.',
      source: 'Cadastro Nacional da Pessoa Jurídica (RFB)',
      badgeColor: 'bg-emerald-500/10 text-emerald-600',
    },
    {
      date: '2004 – 2008',
      title: 'Atuação em Políticas Públicas e Fóruns Nacionais',
      description: 'Participação da presidência da ACADIM em audiências públicas no Senado Federal e órgãos de saúde, defendendo a incorporação de terapias de suporte e protocolos de atenção integral no SUS.',
      source: 'Diário do Senado Federal / Registros Públicos',
      badgeColor: 'bg-purple-500/10 text-purple-600',
    },
    {
      date: '2014 – 2018',
      title: 'Fortalecimento da Rede de Atenção às Doenças Raras',
      description: 'Articulação comunitária com centros de referência em neuropediatria e neurologia no Rio de Janeiro para orientação sobre diagnóstico molecular e acesso a fisioterapia motora e respiratória.',
      source: 'Fórum Estadual de Doenças Raras RJ',
      badgeColor: 'bg-amber-500/10 text-amber-600',
    },
    {
      date: '2024 – 2026',
      title: 'Plataforma Digital de Informação e Acolhimento',
      description: 'Lançamento da Enciclopédia digital e acervo jornalístico estruturado para simplificação da linguagem médica e facilitação do acesso a direitos e diagnósticos precoces.',
      source: 'Portal Oficial ACADIM',
      badgeColor: 'bg-brand-red/10 text-brand-red',
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />

      {/* Header Cognitivo Institucional — Estilo Idêntico ao da Página Distrofias */}
      <div className="bg-surface-inverse text-white rounded-3xl p-8 sm:p-12 shadow-2xl mb-12 relative overflow-hidden">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/20 text-brand-red font-extrabold text-xs uppercase tracking-wider">
            <Building2 size={14} />
            <span>História e Atuação Institucional</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Sobre a ACADIM
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A história da Associação Carioca de Distrofia Muscular, sua atuação em doenças neuromusculares, defesa de direitos e apoio às pessoas e famílias no Rio de Janeiro.
          </p>

          {/* Destaques em Números Chave */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
              <span className="block text-2xl sm:text-3xl font-black text-white">28 Anos</span>
              <span className="text-xs text-slate-300 font-semibold">De história e dedicação</span>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
              <span className="block text-2xl sm:text-3xl font-black text-white">1998</span>
              <span className="text-xs text-slate-300 font-semibold">Ano de fundação no RJ</span>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
              <span className="block text-2xl sm:text-3xl font-black text-white">100%</span>
              <span className="text-xs text-slate-300 font-semibold">Acolhimento gratuito</span>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
              <span className="block text-2xl sm:text-3xl font-black text-white">SUS & LOAS</span>
              <span className="text-xs text-slate-300 font-semibold">Defesa permanente</span>
            </div>
          </div>
        </div>
      </div>

      {/* 1. SEÇÃO DE PILARES INSTITUCIONAIS */}
      <section id="pilares" className="bg-surface-default border border-border-subtle p-8 sm:p-10 rounded-3xl shadow-sm mb-12 space-y-8 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-black text-brand-red uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles size={16} />
            <span>Nossas Frentes de Ação</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight">
            Pilares de Atuação da ACADIM
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-medium">
            Trabalhamos em quatro frentes fundamentais para assegurar assistência, cidadania e orientação de qualidade para pacientes e cuidadores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-subtle p-6 rounded-2xl border border-border-subtle space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
              <Heart size={20} />
            </div>
            <h3 className="font-extrabold text-base text-text-primary">Acolhimento & Suporte Familiar</h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Atendimento humanizado e orientação contínua para cuidadores, mães e familiares de pessoas com diagnóstico recente ou em investigação.
            </p>
          </div>

          <div className="bg-surface-subtle p-6 rounded-2xl border border-border-subtle space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold">
              <BookOpen size={20} />
            </div>
            <h3 className="font-extrabold text-base text-text-primary">Divulgação Científica Acessível</h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Tradução da literatura médica sobre novas terapias, ensaios clínicos e diagnósticos moleculares para uma linguagem clara e inclusiva.
            </p>
          </div>

          <div className="bg-surface-subtle p-6 rounded-2xl border border-border-subtle space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-extrabold text-base text-text-primary">Defesa de Direitos no SUS</h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Orientação gratuita sobre acesso a medicamentos, fisioterapia motora/respiratória, BPC/LOAS e gratuidades de transporte no Estado do RJ.
            </p>
          </div>

          <div className="bg-surface-subtle p-6 rounded-2xl border border-border-subtle space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
              <Building2 size={20} />
            </div>
            <h3 className="font-extrabold text-base text-text-primary">Políticas Públicas & Redes</h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Participação ativa em fóruns de doenças raras e audiências públicas na defesa da atenção integral às enfermidades neuromusculares.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE ORIGEM E HISTÓRIA */}
      <section id="historia" className="bg-surface-default border border-border-subtle p-8 sm:p-10 rounded-3xl shadow-sm mb-12 space-y-6 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-black text-brand-blue uppercase tracking-wider flex items-center gap-1.5">
            <Calendar size={16} />
            <span>Fundação e Liderança</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight">
            Como a ACADIM começou
          </h2>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-text-secondary space-y-4 leading-relaxed text-sm sm:text-base">
          <p>
            A <strong>Associação Carioca de Distrofia Muscular (ACADIM)</strong> foi fundada no dia <strong>29 de julho de 1998</strong> no Estado do Rio de Janeiro. A iniciativa nasceu da união de famílias, profissionais de saúde e defensores dos direitos das pessoas com doenças neuromusculares, motivados pela escassez de informações qualificadas e pela necessidade de representação coletiva perante o sistema público de saúde.
          </p>

          <p>
            Documentos oficiais e registros públicos do Senado Federal identificam a senhora <strong>Maria Clara Migowski Pinto Barbosa</strong> como <em>Fundadora e Presidente da Associação Carioca de Distrofia Muscular – ACADIM</em>. Sob sua liderança histórica, a associação passou a atuar ativamente na divulgação científica acessível, no acolhimento de mães e cuidadores, e no diálogo institucional por políticas públicas direcionadas às pessoas com distrofia muscular.
          </p>

          <div className="p-5 rounded-2xl bg-surface-subtle border border-border-subtle space-y-2 text-sm text-text-primary">
            <div className="font-extrabold flex items-center gap-2 text-brand-blue">
              <Info size={18} className="shrink-0" />
              <span>Nota de Precisão Histórica e Cadastral:</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-text-secondary">
              A ACADIM considera <strong>29 de julho de 1998</strong> como sua data institucional de fundação. O registro cadastral da pessoa jurídica no CNPJ possui data própria (01/12/1998) e não deve ser confundido com o marco histórico de criação e início das atividades organizadas da associação.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE DADOS CADASTRAIS */}
      <section id="dados-institucionais" className="bg-surface-default border border-border-subtle p-8 sm:p-10 rounded-3xl shadow-sm mb-12 space-y-6 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-black text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
            <FileText size={16} />
            <span>Transparência Institucional</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight">
            Dados Cadastrais Oficiais
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div className="p-5 rounded-2xl bg-surface-subtle border border-border-subtle flex items-start gap-3">
            <Building2 size={20} className="text-brand-blue shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] text-text-tertiary uppercase tracking-wider block font-extrabold">Razão Social</span>
              <span className="font-bold text-text-primary text-xs sm:text-sm">Associação Carioca de Distrofia Muscular</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-surface-subtle border border-border-subtle flex items-start gap-3">
            <Award size={20} className="text-brand-red shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] text-text-tertiary uppercase tracking-wider block font-extrabold">Nome Fantasia</span>
              <span className="font-bold text-text-primary text-xs sm:text-sm">ACADIM</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-surface-subtle border border-border-subtle flex items-start gap-3">
            <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] text-text-tertiary uppercase tracking-wider block font-extrabold">Inscrição CNPJ</span>
              <span className="font-mono font-bold text-text-primary text-xs sm:text-sm">02.916.982/0001-91</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-surface-subtle border border-border-subtle flex items-start gap-3">
            <Scale size={20} className="text-purple-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] text-text-tertiary uppercase tracking-wider block font-extrabold">Natureza Jurídica</span>
              <span className="font-bold text-text-primary text-xs sm:text-sm">Associação Privada (Sem fins lucrativos)</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-surface-subtle border border-border-subtle flex items-start gap-3">
            <Stethoscope size={20} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] text-text-tertiary uppercase tracking-wider block font-extrabold">Atividade Principal</span>
              <span className="font-bold text-text-primary text-xs">94.30-8-00 — Defesa de direitos sociais</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-surface-subtle border border-border-subtle flex items-start gap-3">
            <MapPin size={20} className="text-rose-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] text-text-tertiary uppercase tracking-wider block font-extrabold">Município de Atuação</span>
              <span className="font-bold text-text-primary text-xs sm:text-sm">Rio de Janeiro / RJ</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DE CRONOLOGIA HISTÓRICA */}
      <section id="cronologia" className="bg-surface-default border border-border-subtle p-8 sm:p-10 rounded-3xl shadow-sm mb-12 space-y-6 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-black text-purple-600 uppercase tracking-wider flex items-center gap-1.5">
            <Award size={16} />
            <span>Linha do Tempo</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight">
            Cronologia Institucional
          </h2>
        </div>

        <div className="relative border-l-2 border-border-subtle ml-3 sm:ml-4 space-y-8 pl-6 sm:pl-8">
          {timelineEvents.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-brand-red ring-4 ring-white dark:ring-slate-900" />
              <div className="space-y-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold ${item.badgeColor}`}>
                  {item.date}
                </span>
                <h3 className="text-lg font-black text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
                <span className="inline-block text-[11px] text-text-tertiary pt-1 italic">
                  Fonte: {item.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. MASCOTES / FUNDADORES CLARA E PEDRO (LIVRES E FLUTUANTES) */}
      <div className="mb-12">
        <MascotsSection />
      </div>

      {/* 6. CONTATO E ATENDIMENTO DA ACADIM */}
      <ContactSection />
    </div>
  );
}
