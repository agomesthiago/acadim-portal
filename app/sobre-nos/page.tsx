import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
  HeartPulse,
  Info
} from 'lucide-react';
import { safeJsonLd } from '@/lib/sanitize-html';

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

  const pilarList = [
    {
      title: 'Acolhimento & Suporte Familiar',
      desc: 'Atendimento humanizado e orientação para cuidadores, mães e familiares de pessoas diagnosticadas com distrofias musculares.',
      icon: Heart,
      color: 'bg-rose-500',
      lightBg: 'bg-rose-50 dark:bg-rose-950/30',
      borderColor: 'border-rose-200 dark:border-rose-800',
      textColor: 'text-rose-700 dark:text-rose-300',
    },
    {
      title: 'Divulgação Científica Acessível',
      desc: 'Tradução da literatura médica sobre novas terapias, ensaios clínicos e diagnósticos moleculares para uma linguagem clara e inclusiva.',
      icon: BookOpen,
      color: 'bg-blue-600',
      lightBg: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      textColor: 'text-blue-700 dark:text-blue-300',
    },
    {
      title: 'Defesa de Direitos no SUS',
      desc: 'Orientação gratuita sobre acesso a medicamentos, fisioterapia motora/respiratória, BPC/LOAS e gratuidades de transporte no Estado do RJ.',
      icon: ShieldCheck,
      color: 'bg-emerald-600',
      lightBg: 'bg-emerald-50 dark:bg-emerald-950/30',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      textColor: 'text-emerald-700 dark:text-emerald-300',
    },
    {
      title: 'Políticas Públicas & Redes',
      desc: 'Participação ativa em fóruns de doenças raras e audiências públicas na defesa da atenção integral às enfermidades neuromusculares.',
      icon: Building2,
      color: 'bg-purple-600',
      lightBg: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      textColor: 'text-purple-700 dark:text-purple-300',
    },
  ];

  const timelineEvents = [
    {
      date: '29 de julho de 1998',
      title: 'Fundação da ACADIM',
      description: 'Marco histórico de criação da Associação Carioca de Distrofia Muscular, motivada pela necessidade de união entre famílias, médicos e defensores dos direitos das pessoas com doenças neuromusculares no Estado do Rio de Janeiro.',
      source: 'Registros Institucionais da ACADIM / Acervo Histórico',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
    },
    {
      date: '01 de dezembro de 1998',
      title: 'Registro Cadastral do CNPJ',
      description: 'Formalização da inscrição cadastral da pessoa jurídica sob o CNPJ 02.916.982/0001-91, estabelecendo a estrutura administrativa para representação legal perante órgãos públicos.',
      source: 'Cadastro Nacional da Pessoa Jurídica (RFB)',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300',
    },
    {
      date: '2004 – 2008',
      title: 'Atuação em Políticas Públicas e Fóruns Nacionais',
      description: 'Participação da presidência da ACADIM em audiências públicas no Senado Federal e órgãos de saúde, defendendo a incorporação de terapias de suporte e protocolos de atenção integral no SUS.',
      source: 'Diário do Senado Federal / Registros Públicos',
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300',
    },
    {
      date: '2014 – 2018',
      title: 'Fortalecimento da Rede de Atenção às Doenças Raras',
      description: 'Articulação comunitária com centros de referência em neuropediatria e neurologia no Rio de Janeiro para orientação sobre diagnóstico molecular e acesso a fisioterapia motora e respiratória.',
      source: 'Fórum Estadual de Doenças Raras RJ',
      badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300',
    },
    {
      date: '2024 – 2026',
      title: 'Plataforma Digital de Informação e Acolhimento',
      description: 'Lançamento da Enciclopédia digital e acervo jornalístico estruturado para simplificação da linguagem médica e facilitação do acesso a direitos e diagnósticos precoces.',
      source: 'Portal Oficial ACADIM',
      badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300',
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />

      {/* Hero Institucional Visualmente Enriquecido */}
      <header className="bg-gradient-to-br from-blue-600 via-brand-blue to-indigo-900 text-white pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider border border-white/20">
            <Building2 className="w-4 h-4 text-brand-red animate-pulse" />
            Associação Carioca de Distrofia Muscular
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Sobre a <span className="text-blue-200">ACADIM</span>
          </h1>

          <p className="text-base sm:text-xl text-blue-100 leading-relaxed font-medium max-w-3xl">
            Uma trajetória dedicada ao acolhimento de famílias, defesa de direitos no SUS e difusão de conhecimento científico sobre doenças neuromusculares no Rio de Janeiro.
          </p>

          {/* Destaques em Números Chave */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <span className="block text-2xl sm:text-3xl font-black text-white">28 Anos</span>
              <span className="text-xs text-blue-200 font-semibold">De história e dedicação</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <span className="block text-2xl sm:text-3xl font-black text-white">1998</span>
              <span className="text-xs text-blue-200 font-semibold">Ano de fundação no RJ</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <span className="block text-2xl sm:text-3xl font-black text-white">100%</span>
              <span className="text-xs text-blue-200 font-semibold">Acolhimento gratuito</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <span className="block text-2xl sm:text-3xl font-black text-white">SUS & LOAS</span>
              <span className="text-xs text-blue-200 font-semibold">Defesa permanente</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* Seção 1: Pilares de Atuação Institucional */}
        <section id="pilares" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-extrabold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Pilares Fundamentais
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              Nossas Áreas de Atuação
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Trabalhamos em quatro frentes essenciais para transformar a qualidade de vida e a autonomia dos pacientes e cuidadores.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pilarList.map((pilar, idx) => {
              const IconComp = pilar.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-8 rounded-3xl border ${pilar.borderColor} ${pilar.lightBg} shadow-sm space-y-4 transition-all hover:shadow-md`}
                >
                  <div className={`w-12 h-12 rounded-2xl ${pilar.color} text-white flex items-center justify-center shadow-md`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-black ${pilar.textColor}`}>
                    {pilar.title}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {pilar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Seção 2: Como a ACADIM começou */}
        <section id="historia" className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">Origem e Fundação</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">Como a ACADIM começou</h2>
            </div>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              A <strong>Associação Carioca de Distrofia Muscular (ACADIM)</strong> foi fundada no dia <strong>29 de julho de 1998</strong> no Estado do Rio de Janeiro. A iniciativa nasceu da união de famílias, profissionais de saúde e defensores dos direitos das pessoas com doenças neuromusculares, motivados pela escassez de informações qualificadas e pela necessidade de representação coletiva perante o sistema público de saúde.
            </p>

            <p>
              Documentos oficiais e registros públicos do Senado Federal identificam a senhora <strong>Maria Clara Migowski Pinto Barbosa</strong> como <em>Fundadora e Presidente da Associação Carioca de Distrofia Muscular – ACADIM</em>. Sob sua liderança histórica, a associação passou a atuar ativamente na divulgação científica acessível, no acolhimento de mães e cuidadores, e no diálogo institucional por políticas públicas direcionadas às pessoas com distrofia muscular.
            </p>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border border-blue-200 dark:border-blue-800 text-sm text-blue-900 dark:text-blue-200 space-y-2">
              <div className="font-bold flex items-center gap-2 text-blue-800 dark:text-blue-300">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Nota de Precisão Histórica e Cadastral:</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-blue-800 dark:text-blue-300">
                A ACADIM considera <strong>29 de julho de 1998</strong> como sua data institucional de fundação. O registro cadastral da pessoa jurídica no CNPJ possui data própria (01/12/1998) e não deve ser confundido com o marco histórico de criação e início das atividades organizadas da associação.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 3: Dados Cadastrais e Institucionais Coloridos */}
        <section id="dados-institucionais" className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">Transparência</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">Dados Cadastrais Oficiais</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="p-5 rounded-2xl bg-blue-50/50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700 flex items-start gap-3">
              <Building2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] text-blue-600 dark:text-blue-400 uppercase tracking-wider block font-bold">Razão Social</span>
                <span className="font-bold text-slate-900 dark:text-slate-100 text-xs sm:text-sm">Associação Carioca de Distrofia Muscular</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-slate-800/60 border border-indigo-200 dark:border-slate-700 flex items-start gap-3">
              <Award className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block font-bold">Nome Fantasia</span>
                <span className="font-bold text-slate-900 dark:text-slate-100 text-xs sm:text-sm">ACADIM</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-slate-800/60 border border-emerald-200 dark:border-slate-700 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block font-bold">Inscrição CNPJ</span>
                <span className="font-mono font-bold text-slate-900 dark:text-slate-100 text-xs sm:text-sm">02.916.982/0001-91</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-purple-50/50 dark:bg-slate-800/60 border border-purple-200 dark:border-slate-700 flex items-start gap-3">
              <Scale className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] text-purple-600 dark:text-purple-400 uppercase tracking-wider block font-bold">Natureza Jurídica</span>
                <span className="font-bold text-slate-900 dark:text-slate-100 text-xs sm:text-sm">Associação Privada (Sem fins lucrativos)</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/50 dark:bg-slate-800/60 border border-amber-200 dark:border-slate-700 flex items-start gap-3">
              <Stethoscope className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] text-amber-600 dark:text-amber-400 uppercase tracking-wider block font-bold">Atividade Principal</span>
                <span className="font-bold text-slate-900 dark:text-slate-100 text-xs">94.30-8-00 — Atividades de defesa de direitos sociais</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-slate-800/60 border border-rose-200 dark:border-slate-700 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] text-rose-600 dark:text-rose-400 uppercase tracking-wider block font-bold">Município de Atuação</span>
                <span className="font-bold text-slate-900 dark:text-slate-100 text-xs sm:text-sm">Rio de Janeiro / RJ</span>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 4: Cronologia Histórica */}
        <section id="cronologia" className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">Linha do Tempo</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">Cronologia Institucional</h2>
            </div>
          </div>

          <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 sm:ml-4 space-y-8 pl-6 sm:pl-8">
            {timelineEvents.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-brand-blue dark:bg-blue-400 ring-4 ring-white dark:ring-slate-900" />
                <div className="space-y-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${item.badgeColor}`}>
                    {item.date}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                  <span className="inline-block text-[11px] text-slate-400 dark:text-slate-500 pt-1 italic">
                    Fonte: {item.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção 5: Representação dos Fundadores Clara e Pedro */}
        <section id="fundadores-representacao" className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
          <div className="flex items-center gap-3 text-rose-400">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-rose-300 block">Identidade Institucional</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">Representação dos Fundadores</h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Na cultura da ACADIM, a figura dos <strong>Fundadores Clara e Pedro</strong> representa visualmente a mensagem de autonomia, acolhimento e superação de barreiras de acessibilidade. Clara é representada em sua cadeira de rodas motorizada com autonomia, enquanto Pedro é representado com órteses e sorriso confiante, expressando a diversidade do espectro das doenças neuromusculares.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            <Link
              href="/distrofias"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-red hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md min-h-[44px]"
            >
              <BookOpen className="w-4 h-4" />
              <span>Conheça a Enciclopédia de Distrofias</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs sm:text-sm transition-all min-h-[44px]"
            >
              <Users className="w-4 h-4 text-blue-300" />
              <span>Fale com a Nossa Equipe</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
