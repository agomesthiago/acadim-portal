import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { AlertaMedicoClient } from '@/components/AlertaMedicoClient';
import { safeJsonLd } from '@/lib/sanitize-html';
import {
  ShieldAlert,
  Wind,
  Syringe,
  ExternalLink,
  ArrowLeft,
  FileCheck,
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  Stethoscope,
  HeartPulse,
  Activity
} from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://acadim.org.br'),
  title: 'Alerta Médico para Distrofia Muscular | Diretrizes de Emergência | ACADIM',
  description: 'Diretrizes médicas de emergência na distrofia muscular. Elaborado originalmente pela Dra. Ana Lúcia Langer CRM 43507, mantido pela ADB e adaptado pela ACADIM.',
  alternates: {
    canonical: 'https://acadim.org.br/alerta-medico',
  },
  openGraph: {
    title: 'Alerta Médico para Distrofia Muscular | ACADIM',
    description: 'Orientações de emergência, contraindicações anestésicas e manejo respiratório nas distrofias musculares.',
    url: 'https://acadim.org.br/alerta-medico',
    siteName: 'ACADIM',
    locale: 'pt_BR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alerta Médico | Emergência na Distrofia Muscular',
    description: 'Protocolos de atendimento emergencial, anestesia e manejo de corticoides.',
  },
};

export default function AlertaMedicoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://acadim.org.br/alerta-medico',
        name: 'Alerta Médico para Distrofias Musculares | ACADIM',
        description: 'Diretrizes clínicas essenciais para atendimento de emergência, centro cirúrgico e urgências respiratórias nas distrofias musculares.',
        author: {
          '@type': 'Person',
          name: 'Dra. Ana Lúcia Langer',
          description: 'Médica Pediatra e Geneticista (CRM 43507)'
        },
        publisher: {
          '@type': 'Organization',
          name: 'ACADIM - Associação Carioca de Distrofia Muscular',
          url: 'https://acadim.org.br',
        },
        isBasedOn: 'https://www.distrofiabrasil.org.br/alerta-medico'
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
            name: 'Alerta Médico',
            item: 'https://acadim.org.br/alerta-medico',
          },
        ],
      },
    ],
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />

      {/* Navegação Voltar */}
      <div className="flex items-center justify-between no-print">
        <Link
          href="/distrofias"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-brand-red transition-colors min-h-[44px]"
        >
          <ArrowLeft size={16} />
          <span>Voltar para Enciclopédia de Distrofias</span>
        </Link>
        <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full flex items-center gap-1">
          <ShieldAlert size={12} />
          <span>Orientações de Pronta Resposta</span>
        </span>
      </div>

      {/* HERO INSTITUCIONAL COM IDENTIDADE CLÍNICA VIVA */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-4 border-l-8 border-l-red-600 border-y border-r border-red-900/40 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/30 text-red-300 font-extrabold text-xs uppercase tracking-wider border border-red-500/40">
            <ShieldAlert size={14} className="text-red-400" />
            <span>Documento de Alerta para Pronto-Socorro & Anestesia</span>
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Alerta Médico: Distrofia Muscular (DM)
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
            Orientações vitais para <strong>médicos plantonistas, intensivistas, anestesistas e equipes de emergência</strong>.
          </p>

          {/* Autoria e Fonte com phrasings oficiais */}
          <div className="pt-4 border-t border-white/15 text-xs text-slate-300 space-y-2">
            <p className="flex items-center gap-2 font-semibold text-amber-300">
              <UserCheck size={18} className="text-amber-400 shrink-0" />
              <span>Originalmente elaborado pela <strong>Dra. Ana Lúcia Langer (CRM 43507)</strong> e mantido pela <strong>Aliança Distrofia Brasil (ADB)</strong>.</span>
            </p>
            <p className="text-slate-300">
              Esta página apresenta a versão adaptada pela <strong>ACADIM</strong> para pronta orientação. A versão original oficial mantida pela ADB pode ser consultada diretamente em{' '}
              <a
                href="https://www.distrofiabrasil.org.br/alerta-medico"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline font-bold hover:text-red-300 inline-flex items-center gap-1"
              >
                distrofiabrasil.org.br/alerta-medico <ExternalLink size={12} />
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* 2 ALERTAS CRÍTICOS INICIAIS (COM DESTAQUES E PALAVRAS-CHAVE EM NEGRITO) */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-md">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
            <ShieldAlert size={22} />
          </div>
          <div>
            <span className="text-xs font-black text-red-700 uppercase tracking-wider block">Atenção Médica Imediata</span>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">2 Regras de Ouro no Atendimento Emergencial</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm text-slate-800">
          
          {/* Alerta 1 */}
          <div className="bg-red-50/60 border border-red-200 border-l-4 border-l-red-600 p-5 rounded-2xl space-y-2">
            <h3 className="font-extrabold text-red-950 flex items-center gap-2 text-base">
              <Wind size={20} className="text-red-700 shrink-0" />
              <span>1. Suplementação de Oxigênio (O2)</span>
            </h3>
            <p className="leading-relaxed font-medium text-slate-800">
              <strong className="text-red-800 uppercase font-black">NÃO aplicar O2 por cateter ou máscara isoladamente</strong> na falência ventilatória. O paciente deve ser <strong className="text-slate-900 font-extrabold">VENTILADO (VNI / BiPAP)</strong> e <strong>nunca apenas oxigenado</strong>. A suplementação isolada de O2 suprime o estímulo do centro respiratório por hipóxia e agrava criticamente a <strong className="text-slate-900">retenção de CO2 (hipercapnia)</strong>.
            </p>
          </div>

          {/* Alerta 2 */}
          <div className="bg-red-50/60 border border-red-200 border-l-4 border-l-red-600 p-5 rounded-2xl space-y-2">
            <h3 className="font-extrabold text-red-950 flex items-center gap-2 text-base">
              <Syringe size={20} className="text-red-700 shrink-0" />
              <span>2. Anestesia Contraindicada</span>
            </h3>
            <p className="leading-relaxed font-medium text-slate-800">
              Fármacos como <strong className="text-red-800 font-black">HALOTANO</strong> e <strong className="text-red-800 font-black">SUCCINILCOLINA (Suxametônio)</strong> são <strong className="text-red-800 uppercase font-black">ESTRITAMENTE CONTRAINDICADOS</strong>. Há risco fatal de deflagrar <strong className="text-slate-900">hipertermia maligna-like</strong>, <strong className="text-slate-900">rabdomiólise maciça</strong>, <strong className="text-slate-900">hipercalemia severa</strong> e <strong className="text-red-800 font-black">parada cardíaca</strong>.
            </p>
          </div>

        </div>
      </div>

      {/* LISTA REVISADA DAS 11 RECOMENDAÇÕES DA DRA. ANA LÚCIA LANGER (COM PALAVRAS-CHAVE DESTACADAS) */}
      <section className="space-y-4">
        <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
          <div>
            <span className="text-xs font-black text-red-700 uppercase tracking-wider block">Diretrizes Clínicas Vitais</span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              11 Recomendações de Pronta Resposta
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-500 hidden sm:block">Dra. Ana Lúcia Langer (CRM 43507)</span>
        </div>

        <div className="space-y-3">
          
          {/* Rec 1 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-red-600 shadow-sm flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-red-700 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
            <div className="space-y-1">
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Falência Ventilatória</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Na falência ventilatória, <strong className="text-red-700">NÃO aplicar O2 por cateter ou máscara</strong>. O paciente deve ser <strong className="text-slate-900 font-extrabold">VENTILADO (VNI/BiPAP)</strong> e nunca apenas oxigenado.
              </p>
            </div>
          </div>

          {/* Rec 2 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-amber-500 shadow-sm flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-amber-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
            <div className="space-y-1">
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Usar com Cautela Extrema</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Usar com cautela: <strong className="text-slate-900">opiáceos, relaxantes musculares, benzodiazepínicos, estatinas</strong>, drogas e associações que <strong className="text-slate-900">aumentem o intervalo QT</strong> no ECG.
              </p>
            </div>
          </div>

          {/* Rec 3 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-red-600 shadow-sm flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-red-700 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
            <div className="space-y-1">
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Drogas Anestésicas Contraindicadas</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Drogas contraindicadas: <strong className="text-red-700 font-black">HALOTANO</strong> e <strong className="text-red-700 font-black">SUCCINILCOLINA (Suxametônio)</strong> são <strong className="text-red-700 font-extrabold">estritamente proibidos</strong>.
              </p>
            </div>
          </div>

          {/* Rec 4 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-amber-500 shadow-sm flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-amber-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
            <div className="space-y-1">
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Drogas Psicoativas / Neurolépticos</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Atenção para drogas psicoativas devido ao risco de desencadear <strong className="text-slate-900 font-bold">síndrome neuroléptica maligna</strong>.
              </p>
            </div>
          </div>

          {/* Rec 5 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-slate-400 shadow-sm flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-slate-800 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
            <div className="space-y-1">
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Tratamento Odontológico em Centro Cirúrgico</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Pacientes com disfunção pulmonar devem fazer tratamento odontológico sob anestesia geral em <strong className="text-slate-900 font-bold">centro cirúrgico com monitorização, anestesista e equipamentos para emergências</strong>.
              </p>
            </div>
          </div>

          {/* Rec 6 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-amber-500 shadow-sm flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-amber-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
            <div className="space-y-1">
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Vacinas de Vírus Vivo</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Em pacientes em uso de corticoides, <strong className="text-amber-800 font-bold">NÃO usar vacinas de vírus vivo</strong> (<strong className="text-slate-900">tríplice viral, varicela, febre amarela, sabin</strong>).
              </p>
            </div>
          </div>

          {/* Rec 7 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-emerald-600 shadow-sm flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-emerald-700 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">7</span>
            <div className="space-y-1">
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Manejo de Corticoides em Infecções (Dose de Estresse)</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                <strong className="text-emerald-800 font-extrabold">NÃO suspender corticoterapia</strong> nos episódios infecciosos. Ao contrário, <strong className="text-slate-900 font-extrabold">AUMENTAR a dose em 50%</strong>. Caso haja vômitos, utilizar a <strong className="text-slate-900">via parenteral (EV)</strong>. <br />
                <span className="text-xs text-slate-600 font-semibold mt-1 block bg-slate-50 p-2 rounded-lg border border-slate-200">
                  <strong>Equivalência de Corticoides:</strong> Prednisona/Prednisolona 5 mg = Deflazacorte 6 mg = Hidrocortisona 20 mg = Metilprednisolona 4 mg.
                </span>
              </p>
            </div>
          </div>

          {/* Rec 8 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-slate-400 shadow-sm flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-slate-800 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">8</span>
            <div className="space-y-1">
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Fraturas & Tempo Limite de Imobilização</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Em fraturas nos pacientes que deambulam, é preferível a <strong className="text-slate-900 font-bold">fixação cirúrgica</strong> para o paciente voltar a deambular o mais precocemente possível (vale para cirurgia de alongamento do tendão de Aquiles com transposição do m. tibial posterior). O paciente que deambula <strong className="text-red-700 font-black">NÃO DEVE FICAR IMOBILIZADO POR MAIS QUE 1 SEMANA</strong>.
              </p>
            </div>
          </div>

          {/* Rec 9 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-slate-400 shadow-sm flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-slate-800 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">9</span>
            <div className="space-y-1">
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Medicações Cardiológicas</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Evitar suspender medicações cardiológicas nas internações e, se isso for feito, reintroduzir o mais rápido possível. O paciente é <strong className="text-slate-900 font-bold">adaptado às baixas pressões</strong>. Fazer <strong className="text-slate-900">acompanhamento ecográfico</strong>.
              </p>
            </div>
          </div>

          {/* Rec 10 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-red-600 shadow-sm flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-red-700 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">10</span>
            <div className="space-y-1">
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Suspeita de Embolia Gordurosa Pós-Fratura</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Em distrofias, se houver deterioração neurológica ou sintomas como falta de ar após uma fratura, pensar imediatamente em <strong className="text-red-700 font-black">EMBOLIA GORDUROSA</strong>.
              </p>
            </div>
          </div>

          {/* Rec 11 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-emerald-600 shadow-sm flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-emerald-700 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">11</span>
            <div className="space-y-1">
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Transaminases (ALT e AST) de Origem Muscular</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                As transaminases <strong className="text-slate-900 font-bold">ALT e AST são enzimas musculares</strong> e poderão estar muito aumentadas nas distrofias. <strong className="text-emerald-800 font-bold">NÃO confundir com doença hepática!</strong>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* COMPONENTE CLIENTE (BUSCA DE FÁRMACOS, CALCULADORA E IMPRESSÃO DE 1 PÁGINA) */}
      <AlertaMedicoClient />

      {/* SEÇÕES DE DETALHAMENTO TÉCNICO FISIOPATOLÓGICO */}
      <div className="space-y-6 border-t border-slate-200 pt-8 text-xs sm:text-sm text-slate-700">
        
        {/* FALÊNCIA VENTILATÓRIA FISIOPATOLOGIA */}
        <section className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm">
          <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <Wind size={18} className="text-slate-800" />
            <span>Informações Vitais: Mecanismo da Falência Ventilatória</span>
          </h2>
          <p className="leading-relaxed text-xs text-slate-700 font-medium">
            O paciente em falência ventilatória deverá ser <strong className="text-slate-900 font-bold">VENTILADO e nunca apenas OXIGENADO</strong>. O acometimento da musculatura respiratória acarreta hipoventilação alveolar com <strong className="text-slate-900">hipercapnia e hipóxia</strong>. A suplementação de O2 agrava a hipoventilação por suprimir o estímulo do centro respiratório (hipóxia) e piora os gases sanguíneos por intensificar a desigualdade da relação ventilação-perfusão (vasodilatação pulmonar pelo O2 e ventilação diminuída). O O2 só deve ser usado nas doenças pulmonares intercorrentes, com <strong className="text-slate-900 font-bold">suporte ventilatório e monitorização do CO2</strong>.
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1.5">
            <strong className="text-slate-900 block font-bold">Parâmetros Indicados para Aparelho BiPAP:</strong>
            <p className="text-slate-700 font-medium">
              Modos ventilatórios diversos com <strong>S, S/T e T</strong>; dois níveis pressóricos; frequência respiratória; tempo elevado; tempo inspiratório; alarmes. O aparelho deve possibilitar a leitura dos dados (volume, vazamentos, frequência, pressões e ventilação/minuto) e a função de <strong>volume assegurado (controle de funções inspiratórias máximas e mínimas)</strong>. Nos episódios secretivos, utilizar antibióticos e introduzir manobras de auxílio à tosse.
            </p>
          </div>
        </section>

        {/* MANEJO ANESTÉSICO */}
        <section className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm">
          <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <Syringe size={18} className="text-red-700" />
            <span>Leia com Cuidado: Suscetibilidade Anestésica</span>
          </h2>
          <p className="leading-relaxed text-xs text-slate-700 font-medium">
            Nas DMs há suscetibilidade a agentes anestésicos inalatórios: <strong className="text-red-700 font-bold">HALOTANO, DESFLURANO, ISOFLURANO, METOXIFLURANO, ENFLURANO, SEVOFLURANO, TRICLOROETILENO, XENON</strong> e curarizantes como a <strong className="text-red-700 font-bold">SUCCINILCOLINA</strong>. Óxido nitroso é seguro. Pode ocorrer <strong className="text-slate-900 font-bold">hipertermia maligna-like com rabdomiólise</strong> e consequente liberação de potássio, CK e mioglobina. A parada cardíaca ocorre por excesso de potássio e a lesão renal por excesso de CK e mioglobina. <strong className="text-emerald-800 font-bold">Tratamento: alcalinização, solução polarizante e dantrolene EV.</strong>
          </p>
          <p className="leading-relaxed text-xs text-slate-700 font-medium">
            Os anestésicos intravenosos são mais seguros, mas pode haver alterações cardíacas pelo efeito depressor dos barbitúricos e do propofol. <strong className="text-slate-900 font-bold">Etomidate e midazolam são seguros.</strong> Anestesias regionais e locais podem ser usadas (diminuir ou evitar adrenalina local se houver taquicardia).
          </p>
        </section>

        {/* DUAS INFORMAÇÕES IMPORTANTÍSSIMAS */}
        <section className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm">
          <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <CheckCircle2 size={18} className="text-slate-800" />
            <span>Duas Informações Importantíssimas</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 block font-bold text-sm">a) Descompensação em Agravos:</strong>
              <p className="text-slate-700 font-medium">
                Durante agravos (quadros infecciosos, pós-operatório), há um decréscimo de força de toda musculatura e o paciente poderá ter descompensação cardíaca ou falência ventilatória. Avaliar função miocárdica e respiratória com possível instalação de <strong>drogas vasoativas (dobutamina)</strong> e <strong>VNI (BiPAP)</strong>.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 block font-bold text-sm">b) Extubação Segura:</strong>
              <p className="text-slate-700 font-medium">
                Pacientes que necessitam ser extubados após infecções ou cirurgias podem não conseguir ficar em ar ambiente pela fadiga muscular. Nessa situação, <strong className="text-slate-900 font-bold">instalar VNI imediata com garantia de volume de 10 ml/kg</strong> e <strong className="text-red-700 font-bold">NÃO fazer transições que existem nos desmames clássicos para o ar ambiente</strong>.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* RODAPÉ DE CRÉDITOS E FONTE */}
      <div className="bg-slate-100 border border-slate-200 p-6 rounded-2xl text-xs text-slate-600 space-y-2">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
          <FileCheck size={16} />
          <span>Informações de Autoria & Fonte Oficial</span>
        </div>

        <p>
          Este documento de <strong>Alerta Médico</strong> foi originalmente idealizado e formulado pela <strong>Dra. Ana Lúcia Langer (CRM 43507)</strong> e é mantido institucionalmente pela <strong>Aliança Distrofia Brasil (ADB)</strong> no endereço <a href="https://www.distrofiabrasil.org.br/alerta-medico" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-bold underline">distrofiabrasil.org.br/alerta-medico</a>.
        </p>

        <p className="text-slate-500">
          Esta página disponibiliza a versão adaptada pela <strong>ACADIM</strong> para pronta orientação de pacientes, cuidadores e profissionais de saúde no Rio de Janeiro.
        </p>
      </div>

    </div>
  );
}
