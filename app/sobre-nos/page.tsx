import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Heart, BookOpen, Calendar, Award, Building2, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

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
    },
    {
      date: '01 de dezembro de 1998',
      title: 'Registro Cadastral do CNPJ',
      description: 'Formalização da inscrição cadastral da pessoa jurídica sob o CNPJ 02.916.982/0001-91, estabelecendo a estrutura administrativa para representação legal perante órgãos públicos.',
      source: 'Cadastro Nacional da Pessoa Jurídica (RFB)',
    },
    {
      date: '2004 – 2008',
      title: 'Atuação em Políticas Públicas e Fóruns Nacionais',
      description: 'Participação da presidência da ACADIM em audiências públicas no Senado Federal e órgãos de saúde, defendendo a incorporação de terapias de suporte e protocolos de atenção integral no SUS.',
      source: 'Diário do Senado Federal / Registros Públicos',
    },
    {
      date: '2014 – 2018',
      title: 'Fortalecimento da Rede de Atenção às Doenças Raras',
      description: 'Articulação comunitária com centros de referência em neuropediatria e neurologia no Rio de Janeiro para orientação sobre diagnóstico molecular e acesso a fisioterapia motora e respiratória.',
      source: 'Fórum Estadual de Doenças Raras RJ',
    },
    {
      date: '2024 – 2026',
      title: 'Plataforma Digital de Informação e Acolhimento',
      description: 'Lançamento da Enciclopédia digital e acervo jornalístico estruturado para simplificação da linguagem médica e facilitação do acesso a direitos e diagnósticos precoces.',
      source: 'Portal Oficial ACADIM',
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Institucional */}
      <header className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold uppercase tracking-wider border border-blue-400/30">
            <Building2 className="w-4 h-4 text-blue-400" />
            História e Atuação Institucional
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Sobre a ACADIM
          </h1>

          <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed font-normal">
            A história da Associação Carioca de Distrofia Muscular, sua atuação em doenças neuromusculares, defesa de direitos e apoio às pessoas e famílias no Rio de Janeiro.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Seção 1: Como a ACADIM começou */}
        <section id="historia" className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
            <Calendar className="w-6 h-6" />
            <h2 className="text-2xl font-bold tracking-tight">Como a ACADIM começou</h2>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-4 leading-relaxed">
            <p>
              A <strong>Associação Carioca de Distrofia Muscular (ACADIM)</strong> foi fundada no dia <strong>29 de julho de 1998</strong> no Estado do Rio de Janeiro. A iniciativa nasceu da união de famílias, profissionais de saúde e defensores dos direitos das pessoas com doenças neuromusculares, motivados pela escassez de informações qualificadas e pela necessidade de representação coletiva perante o sistema público de saúde.
            </p>

            <p>
              Documentos oficiais e registros públicos do Senado Federal identificam a senhora <strong>Maria Clara Migowski Pinto Barbosa</strong> como <em>Fundadora e Presidente da Associação Carioca de Distrofia Muscular – ACADIM</em>. Sob sua liderança histórica, a associação passou a atuar ativamente na divulgação científica acessível, no acolhimento de mães e cuidadores, e no diálogo institucional por políticas públicas direcionadas às pessoas com distrofia muscular.
            </p>

            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-sm text-blue-900 dark:text-blue-200 space-y-2">
              <div className="font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Nota de Precisão Histórica e Cadastral:
              </div>
              <p className="text-xs leading-relaxed text-blue-800 dark:text-blue-300">
                A ACADIM considera <strong>29 de julho de 1998</strong> como sua data institucional de fundação. O registro cadastral da pessoa jurídica no CNPJ possui data própria (01/12/1998) e não deve ser confundido com o marco histórico de criação e início das atividades organizadas da associação.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 2: Dados Cadastrais e Institucionais */}
        <section id="dados-institucionais" className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
            <FileText className="w-6 h-6" />
            <h2 className="text-2xl font-bold tracking-tight">Dados Cadastrais Oficiais</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-medium mb-1">Razão Social</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Associação Carioca de Distrofia Muscular</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-medium mb-1">Nome Fantasia</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">ACADIM</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-medium mb-1">Inscrição CNPJ</span>
              <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">02.916.982/0001-91</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-medium mb-1">Natureza Jurídica</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Associação Privada (Sem fins lucrativos)</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-medium mb-1">Atividade Principal</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">94.30-8-00 — Atividades de associações de defesa de direitos sociais</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-medium mb-1">Município de Atuação</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Rio de Janeiro / RJ</span>
            </div>
          </div>
        </section>

        {/* Seção 3: Cronologia Histórica */}
        <section id="cronologia" className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400">
            <Award className="w-6 h-6" />
            <h2 className="text-2xl font-bold tracking-tight">Cronologia Institucional</h2>
          </div>

          <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 sm:ml-4 space-y-8 pl-6 sm:pl-8">
            {timelineEvents.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-slate-900" />
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    {item.date}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
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

        {/* Seção 4: Os Fundadores Clara e Pedro na Cultura Institucional */}
        <section id="fundadores-representacao" className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center gap-3 text-rose-600 dark:text-rose-400">
            <Heart className="w-6 h-6" />
            <h2 className="text-2xl font-bold tracking-tight">Representação Institucional</h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Na cultura da ACADIM, a figura dos <strong>Fundadores Clara e Pedro</strong> representa visualmente a mensagem de autonomia, acolhimento e superação de barreiras de acessibilidade. Clara é representada em sua cadeira de rodas motorizada com autonomia (~256px), enquanto Pedro é representado com órteses e sorriso confiante (~123px), expressando a diversidade do espectro das doenças neuromusculares.
          </p>

          <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link
              href="/distrofias"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-sm"
            >
              <BookOpen className="w-4 h-4" />
              Conheça a Enciclopédia de Distrofias
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
