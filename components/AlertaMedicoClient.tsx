'use client';

import React, { useState } from 'react';
import {
  AlertTriangle,
  ShieldAlert,
  ShieldCheck,
  Search,
  Calculator,
  Copy,
  Printer,
  CheckCircle2,
  Stethoscope,
  Info,
  ExternalLink
} from 'lucide-react';

interface DrugInfo {
  name: string;
  category: 'contraindicated' | 'caution' | 'safe';
  riskTitle: string;
  description: string;
  recommendation: string;
}

const DRUG_DATABASE: DrugInfo[] = [
  {
    name: 'Halotano',
    category: 'contraindicated',
    riskTitle: 'CONTRAINDICADO',
    description: 'Anestésico inalatório volátil com altíssimo risco de deflagrar hipertermia maligna-like, rabdomiólise maciça e colapso cardíaco.',
    recommendation: 'Usar anestesia venosa total (TIVA) com fármacos seguros como Propofol, Etomidate ou Midazolam.'
  },
  {
    name: 'Succinilcolina (Suxametônio)',
    category: 'contraindicated',
    riskTitle: 'CONTRAINDICADO',
    description: 'Bloqueador neuromuscular despolarizante. Provoca eflúvio maciço de potássio (hipercalemia aguda), rabdomiólise e parada cardíaca.',
    recommendation: 'Evitar totalmente curarizantes despolarizantes.'
  },
  {
    name: 'Desflurano / Isoflurano / Sevoflurano / Enflurano',
    category: 'contraindicated',
    riskTitle: 'CONTRAINDICADOS',
    description: 'Agentes anestésicos inalatórios voláteis susceptíveis a desencadear crise de rabdomiólise com hipercalemia e mioglobinúria.',
    recommendation: 'Preferir anestesia intravenosa ou técnicas locorregionais.'
  },
  {
    name: 'Opioides (Morfina, Fentanil, Tramadol)',
    category: 'caution',
    riskTitle: 'USAR COM CAUTELA',
    description: 'Depressores do centro respiratório. Em pacientes com hipoventilação alveolar basal, podem precipitar parada respiratória.',
    recommendation: 'Usar em doses reduzidas com monitorização contínua de O2, CO2 e suporte de ventilação não invasiva (VNI).'
  },
  {
    name: 'Benzodiazepínicos (Diazepam, Clonazepam)',
    category: 'caution',
    riskTitle: 'USAR COM CAUTELA',
    description: 'Causam relaxamento muscular adicional e depressão respiratória noturna/aguda.',
    recommendation: 'Titular a menor dose eficaz com oximetria e capnografia contínuas.'
  },
  {
    name: 'Estatinas (Sinvastatina, Atorvastatina)',
    category: 'caution',
    riskTitle: 'USAR COM CAUTELA',
    description: 'Podem induzir miopatia, mialgia intensa e rabdomiólise iatrogênica em músculos já fragilizados por distrofia.',
    recommendation: 'Avaliar estritamente a relação risco-benefício e monitorar níveis de Creatina Quinase (CK).'
  },
  {
    name: 'Fármacos que Aumentam o Intervalo QT',
    category: 'caution',
    riskTitle: 'USAR COM CAUTELA',
    description: 'Certos antiarrítmicos, antibióticos (macrolídeos) e neurolépticos podem prolongar QT em pacientes com cardiomiopatia.',
    recommendation: 'Realizar ECG prévio e monitorar traçado eletrocardiográfico continuamente.'
  },
  {
    name: 'Drogas Psicoativas / Neurolépticos',
    category: 'caution',
    riskTitle: 'USAR COM CAUTELA',
    description: 'Risco aumentado de reações adversas graves semelhantes à síndrome neuroléptica maligna.',
    recommendation: 'Supervisão psiquiátrica e neurológica criteriosa.'
  },
  {
    name: 'Adrenalina / Epinefrina Local',
    category: 'caution',
    riskTitle: 'CAUTELA LOCAL',
    description: 'Vasoconcritor que pode precipitar ou agravar taquicardia em pacientes com envolvimento miocárdico.',
    recommendation: 'Reduzir ou omitir vasoconstritor em anestesias locais/odontológicas se houver taquicardia basal.'
  },
  {
    name: 'Óxido Nitroso',
    category: 'safe',
    riskTitle: 'SEGURO',
    description: 'Gás anestésico inalatório sem associação com indução de hipertermia maligna nas distrofinopatias.',
    recommendation: 'Pode ser empregado com segurança para sedação consciente/analgesia.'
  },
  {
    name: 'Etomidate / Midazolam',
    category: 'safe',
    riskTitle: 'SEGURO',
    description: 'Agentes indutores venosos com perfil de segurança favorável no manejo anestésico.',
    recommendation: 'Opção de escolha para indução anestésica.'
  },
  {
    name: 'Anestésicos Locais e Regionais (Lidocaína, Bupivacaína)',
    category: 'safe',
    riskTitle: 'SEGURO',
    description: 'Anestesia local, bloqueios de nervos periféricos e raquianestesia/peridural são bem tolerados.',
    recommendation: 'Técnica recomendada sempre que viável, monitorando função cardiorrespiratória.'
  }
];

export const AlertaMedicoClient: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'contraindicated' | 'caution' | 'safe'>('all');
  const [copied, setCopied] = useState(false);

  // Calculadora de Corticoides
  const [baseDrug, setBaseDrug] = useState<'prednisona' | 'deflazacorte' | 'hidrocortisona' | 'metilprednisolona'>('prednisona');
  const [baseDose, setBaseDose] = useState<number>(5);
  const [hasInfection, setHasInfection] = useState<boolean>(false);

  // Filtro de Fármacos
  const filteredDrugs = DRUG_DATABASE.filter(drug => {
    const matchesSearch = drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          drug.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = categoryFilter === 'all' || drug.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  // Cálculo de Conversão de Corticoides
  const getFactorInPrednisone = (drug: typeof baseDrug): number => {
    switch (drug) {
      case 'prednisona': return 1;
      case 'deflazacorte': return 5 / 6;
      case 'hidrocortisona': return 5 / 20;
      case 'metilprednisolona': return 5 / 4;
    }
  };

  const predEquivalent = baseDose * getFactorInPrednisone(baseDrug);
  const multiplier = hasInfection ? 1.5 : 1.0;

  const resultPrednisona = (predEquivalent * multiplier).toFixed(1);
  const resultDeflazacorte = ((predEquivalent * (6 / 5)) * multiplier).toFixed(1);
  const resultHidrocortisona = ((predEquivalent * (20 / 5)) * multiplier).toFixed(1);
  const resultMetilprednisolona = ((predEquivalent * (4 / 5)) * multiplier).toFixed(1);

  // Copiar protocolo de emergência
  const handleCopySummary = () => {
    const text = `🚨 ALERTA MÉDICO - DISTROFIA MUSCULAR (DM)
Originalmente elaborado por Dra. Ana Lúcia Langer (CRM 43507) | Mantido por Aliança Distrofia Brasil (distrofiabrasil.org.br/alerta-medico) | Adaptado por ACADIM (acadim.org.br)

DIRETRIZES CLÍNICAS DE EMERGÊNCIA:
1. FALÊNCIA VENTILATÓRIA: NÃO aplicar O2 por cateter ou máscara. O paciente deve ser VENTILADO (VNI/BiPAP). A suplementação isolada de O2 suprime o centro respiratório e piora a hipercapnia.
2. ANESTESIA CONTRAINDICADA: HALOTANO e SUCCINILCOLINA estritamente contraindicados (risco de parada por hipercalemia/rabdomiólise e hipertermia maligna-like). Anestésicos voláteis contraindicados.
3. DROGAS COM CAUTELA: Opiáceos, benzodiazepínicos, estatinas e drogas que aumentam o intervalo QT.
4. DROGAS PSICOATIVAS: Risco de síndrome neuroléptica maligna.
5. TRATAMENTO ODONTOLÓGICO: Com anestesia geral, exige centro cirúrgico com monitorização e anestesista.
6. VACINAS DE VÍRUS VIVO: Não aplicar em uso de corticoides (tríplice viral, varicela, febre amarela, sabin).
7. MANEJO DE CORTICOIDES: NUNCA suspender corticoterapia em infecções. Aumentar a dose em 50%. Se houver vômitos, usar via parenteral. Equivalência: Prednisona 5 = Deflazacorte 6 = Hidrocortisona 20 = Metilprednisolona 4.
8. FRATURAS: Fixação cirúrgica preferível para retorno rápido da marcha. Imobilização máxima: 1 semana para pacientes que deambulam.
9. MEDICAÇÕES CARDIOLÓGICAS: Não suspender nas internações. Reintroduzir o mais rápido possível. Monitoramento ecográfico.
10. EMBOLIA GORDUROSA: Pensar em embolia gordurosa se houver deterioração neurológica ou dispneia após fratura.
11. TRANSAMINASES (ALT/AST): São enzimas musculares e estarão elevadas. NÃO confundir com doença hepática.

Versão original mantida pela ADB: https://www.distrofiabrasil.org.br/alerta-medico
Adaptada para pronta orientação pela ACADIM: https://acadim.org.br/alerta-medico`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-10">

      {/* ESTILO DE IMPRESSÃO ESTREITO DE 1 PÁGINA (A4 PORTRAIT EXACTLY 1 PAGE) */}
      <style jsx global>{`
        @media print {
          /* Esconder tudo no body */
          body * {
            visibility: hidden !important;
          }
          /* Mostrar apenas o container do cartão de impressão */
          #print-card-single, #print-card-single * {
            visibility: visible !important;
          }
          #print-card-single {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            color: black !important;
            font-size: 10px !important;
            line-height: 1.2 !important;
          }
          @page {
            size: A4 portrait;
            margin: 8mm;
          }
        }
      `}</style>
      
      {/* BANNER DE AÇÃO RÁPIDA */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 no-print border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0">
            <Stethoscope size={20} />
          </div>
          <div>
            <h2 className="font-extrabold text-sm text-white">Ferramentas de Orientação Clínica</h2>
            <p className="text-xs text-slate-300">Consulte fármacos, calcule equivalência de corticoides ou imprima o Cartão de Alerta.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handleCopySummary}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-4 py-3 rounded-xl transition-all cursor-pointer min-h-[44px]"
          >
            {copied ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Copy size={16} />}
            <span>{copied ? 'Copiado para Transferência!' : 'Copiar Orientações'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-xs px-4 py-3 rounded-xl transition-all cursor-pointer min-h-[44px]"
          >
            <Printer size={16} />
            <span>Imprimir Cartão (1 Pág)</span>
          </button>
        </div>
      </div>

      {/* SEÇÃO 1: CONSULTA DE SEGURANÇA DE FÁRMACOS (DESIGN CLEAN) */}
      <section className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6 scroll-mt-28 no-print" id="busca-farmacos">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Guia Farmacológico</span>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Consulta de Medicamentos & Risco Anestésico</h2>
          </div>

          {/* Filtros de Categoria */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer min-h-[36px] ${
                categoryFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Todos ({DRUG_DATABASE.length})
            </button>
            <button
              onClick={() => setCategoryFilter('contraindicated')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer min-h-[36px] ${
                categoryFilter === 'contraindicated' ? 'bg-red-700 text-white' : 'bg-red-50 text-red-800 hover:bg-red-100'
              }`}
            >
              Contraindicados
            </button>
            <button
              onClick={() => setCategoryFilter('caution')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer min-h-[36px] ${
                categoryFilter === 'caution' ? 'bg-amber-700 text-white' : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
              }`}
            >
              Cautela
            </button>
            <button
              onClick={() => setCategoryFilter('safe')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer min-h-[36px] ${
                categoryFilter === 'safe' ? 'bg-emerald-700 text-white' : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
              }`}
            >
              Seguros
            </button>
          </div>
        </div>

        {/* Input de Pesquisa */}
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar medicamento (ex: Halotano, Prednisona, Propofol, Morfina)..."
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:outline-none focus:border-slate-600 transition-colors"
          />
        </div>

        {/* Lista Clean de Fármacos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDrugs.map((drug, index) => {
            const isContraindicated = drug.category === 'contraindicated';
            const isCaution = drug.category === 'caution';

            return (
              <div
                key={index}
                className={`p-4 rounded-xl border space-y-2 ${
                  isContraindicated
                    ? 'bg-red-50/40 border-red-200 border-l-4 border-l-red-600'
                    : isCaution
                    ? 'bg-amber-50/40 border-amber-200 border-l-4 border-l-amber-600'
                    : 'bg-slate-50 border-slate-200 border-l-4 border-l-emerald-600'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-sm text-slate-900">{drug.name}</h3>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isContraindicated
                        ? 'bg-red-100 text-red-800'
                        : isCaution
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-emerald-100 text-emerald-900'
                    }`}
                  >
                    {drug.riskTitle}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {drug.description}
                </p>

                <div className="pt-1 text-[11px] text-slate-700 font-medium">
                  <strong>Conduta:</strong> {drug.recommendation}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SEÇÃO 2: CALCULADORA DE CORTICOIDES */}
      <section className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6 scroll-mt-28 no-print" id="calculadora-corticoides">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
            <Calculator size={18} />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Calculadora Clínica</span>
            <h2 className="text-lg font-bold text-slate-900">Conversor de Corticoides & Dose de Estresse</h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
          Em episódios infecciosos, a corticoterapia <strong>NUNCA deve ser suspensa</strong> (aumentar a dose em 50%). Caso haja vômitos, utilizar a via parenteral.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
          
          {/* Inputs */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Corticoide Atual do Paciente:
              </label>
              <select
                value={baseDrug}
                onChange={(e) => setBaseDrug(e.target.value as any)}
                className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-900 focus:outline-none focus:border-slate-600"
              >
                <option value="prednisona">Prednisona / Prednisolona (5 mg)</option>
                <option value="deflazacorte">Deflazacorte (6 mg)</option>
                <option value="hidrocortisona">Hidrocortisona (20 mg)</option>
                <option value="metilprednisolona">Metilprednisolona (4 mg)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Dose Atual (mg/dia):
              </label>
              <input
                type="number"
                min="0.5"
                step="0.5"
                value={baseDose}
                onChange={(e) => setBaseDose(parseFloat(e.target.value) || 0)}
                className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-600"
              />
            </div>

            <div className="pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer bg-white p-3 rounded-lg border border-slate-300">
                <input
                  type="checkbox"
                  checked={hasInfection}
                  onChange={(e) => setHasInfection(e.target.checked)}
                  className="w-4 h-4 text-slate-900 rounded"
                />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Quadro Infeccioso / Estresse Agudo</span>
                  <span className="text-[10px] text-slate-500">Aplica o aumento recomendado de +50%</span>
                </div>
              </label>
            </div>
          </div>

          {/* Resultados */}
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Doses Equivalentes Calculadas:</span>
            
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-0.5">
                <span className="text-slate-500 font-medium block">Prednisona / Prednisolona:</span>
                <span className="text-base font-black text-slate-900">{resultPrednisona} mg</span>
                <span className="text-[10px] text-slate-400 block">Via Oral</span>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-0.5">
                <span className="text-slate-500 font-medium block">Deflazacorte:</span>
                <span className="text-base font-black text-slate-900">{resultDeflazacorte} mg</span>
                <span className="text-[10px] text-slate-400 block">Via Oral</span>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-0.5">
                <span className="text-slate-500 font-medium block">Hidrocortisona:</span>
                <span className="text-base font-black text-slate-900">{resultHidrocortisona} mg</span>
                <span className="text-[10px] text-slate-400 block">Parenteral / EV</span>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-0.5">
                <span className="text-slate-500 font-medium block">Metilprednisolona:</span>
                <span className="text-base font-black text-slate-900">{resultMetilprednisolona} mg</span>
                <span className="text-[10px] text-slate-400 block">Parenteral / EV</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CHECKLIST PARA O PRONTO-SOCORRO */}
      <section className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3 no-print">
        <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
          <CheckCircle2 size={16} className="text-slate-700" />
          <span>O que levar ao procurar o Pronto-Socorro?</span>
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
          <li className="bg-slate-50 p-3 rounded-lg border border-slate-200">
            <strong>1. Aparelho VNI:</strong> Leve o BiPAP configurado com fonte de alimentação.
          </li>
          <li className="bg-slate-50 p-3 rounded-lg border border-slate-200">
            <strong>2. Cough Assist:</strong> Leve o assistente de tosse, se o paciente possuir.
          </li>
          <li className="bg-slate-50 p-3 rounded-lg border border-slate-200">
            <strong>3. Documento Médico:</strong> Apresente a cópia deste Alerta à equipe plantonista.
          </li>
        </ul>
      </section>

      {/* CONTAINER EXCLUSIVO DE IMPRESSÃO DE 1 PÁGINA A4 */}
      <div id="print-card-single" className="hidden print:block text-black bg-white">
        <div style={{ border: '3px solid #b91c1c', padding: '12px', fontFamily: 'Arial, sans-serif' }}>
          
          <div style={{ borderBottom: '2px solid #b91c1c', paddingBottom: '6px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 style={{ fontSize: '15px', fontWeight: 'bold', color: '#b91c1c', margin: 0 }}>ALERTA MÉDICO — DISTROFIA MUSCULAR (DM)</h1>
              <p style={{ fontSize: '10px', fontWeight: 'bold', margin: '2px 0 0 0', color: '#111827' }}>
                Elaborado originalmente por Dra. Ana Lúcia Langer (CRM 43507) | Adaptado por ACADIM
              </p>
            </div>
            <div style={{ textAlign: 'right', fontSize: '8px', color: '#374151' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>Mantido por: Aliança Distrofia Brasil (ADB)</p>
              <p style={{ margin: 0 }}>www.distrofiabrasil.org.br/alerta-medico</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '9px', lineHeight: '1.2' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div>
                <strong style={{ color: '#b91c1c', display: 'block', fontSize: '9.5px' }}>1. FALÊNCIA VENTILATÓRIA (CRÍTICO):</strong>
                <span>Na falência ventilatória, NÃO aplicar O2 por cateter ou máscara. O paciente deve ser VENTILADO (VNI/BiPAP). Suplementação de O2 isolada suprime o centro respiratório e agrava a hipercapnia.</span>
              </div>

              <div>
                <strong style={{ color: '#b91c1c', display: 'block', fontSize: '9.5px' }}>2. ANESTESIA CONTRAINDICADA:</strong>
                <span>HALOTANO e SUCCINILCOLINA estritamente contraindicados. Risco fatal de hipertermia maligna-like, rabdomiólise, hipercalemia e parada cardíaca. Anestésicos inalatórios voláteis contraindicados.</span>
              </div>

              <div>
                <strong style={{ color: '#92400e', display: 'block' }}>3. USAR COM CAUTELA:</strong>
                <span>Opiáceos, benzodiazepínicos, estatinas e medicações que aumentem o intervalo QT.</span>
              </div>

              <div>
                <strong style={{ color: '#92400e', display: 'block' }}>4. DROGAS PSICOATIVAS:</strong>
                <span>Risco de síndrome neuroléptica maligna.</span>
              </div>

              <div>
                <strong style={{ color: '#15803d', display: 'block' }}>5. ODONTOLOGIA:</strong>
                <span>Tratamento sob anestesia geral exige centro cirúrgico com monitorização e anestesista.</span>
              </div>

              <div>
                <strong style={{ color: '#92400e', display: 'block' }}>6. VACINAS DE VÍRUS VIVO:</strong>
                <span>Em uso de corticoides, não aplicar vacinas de vírus vivo (tríplice viral, varicela, febre amarela, sabin).</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div>
                <strong style={{ color: '#15803d', display: 'block', fontSize: '9.5px' }}>7. MANEJO DE CORTICOIDES EM INFECÇÃO:</strong>
                <span>NUNCA suspender corticoterapia em episódios infecciosos. Aumentar a dose em 50%. Se houver vômitos, usar via parenteral. Equivalência: Prednisona 5mg = Deflazacorte 6mg = Hidrocortisona 20mg = Metilprednisolona 4mg.</span>
              </div>

              <div>
                <strong style={{ color: '#6b21a8', display: 'block' }}>8. FRATURAS E IMOBILIZAÇÃO:</strong>
                <span>Preferir fixação cirúrgica para retorno precoce da marcha. O paciente que deambula NÃO deve ficar imobilizado por mais de 1 semana.</span>
              </div>

              <div>
                <strong style={{ color: '#1e40af', display: 'block' }}>9. MEDICAÇÕES CARDIOLÓGICAS:</strong>
                <span>Não suspender nas internações. Reintroduzir rápido. O paciente é adaptado a baixas pressões. Monitoramento ecográfico.</span>
              </div>

              <div>
                <strong style={{ color: '#b91c1c', display: 'block' }}>10. EMBOLIA GORDUROSA:</strong>
                <span>Se houver deterioração neurológica ou dispneia após fratura, suspeitar de embolia gordurosa.</span>
              </div>

              <div>
                <strong style={{ color: '#15803d', display: 'block' }}>11. TRANSAMINASES (ALT/AST):</strong>
                <span>ALT e AST são enzimas de origem muscular e estarão elevadas. NÃO confundir com doença hepática.</span>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '8px', paddingTop: '4px', borderTop: '1px solid #d1d5db', textAlign: 'center', fontSize: '8px', color: '#4b5563' }}>
            Alerta Médico de Emergência mantido para orientação clínica | Versão original completa mantida pela ADB em www.distrofiabrasil.org.br/alerta-medico
          </div>

        </div>
      </div>

    </div>
  );
};
