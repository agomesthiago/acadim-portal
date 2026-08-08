// lib/distrofias-data.ts
import { DiseaseDetail, MedicalGroup } from './distrofias-types';

export const diseasesRepository: DiseaseDetail[] = [
  {
    slug: 'duchenne',
    name: 'Distrofia Muscular de Duchenne',
    shortName: 'DMD',
    synonyms: ['DMD', 'Distrofinopatia grave', 'Distrofia de Duchenne'],
    group: 'Distrofinopatias',
    gene: 'DMD (Xp21.2)',
    protein: 'Distrofina (ausência total ou grave)',
    inheritance: 'Ligada ao X Recessiva',
    onsetAge: 'Infância precoce (2 a 5 anos)',
    affectedSystems: ['Musculoesquelético', 'Cardíaco', 'Respiratório', 'Cognitivo (em 30% dos casos)'],
    summary: 'A forma mais comum e grave de distrofinopatia, caracterizada pela ausência de distrofina e evolução progressiva da fraqueza muscular proximal.',
    overview: 'A Distrofia Muscular de Duchenne (DMD) é uma condição genética recessiva ligada ao cromossomo X causada por mutações no gene DMD, que impede a produção da proteína distrofina. A distrofina funciona como um amortecedor molecular protegendo as fibras musculares durante a contração. Sem ela, o tecido muscular sofre degeneração contínua, fibrose e substituição por tecido adiposo.',
    classification: 'Pertence ao grupo das Distrofinopatias (CID-10 G71.0).',
    signsAndSymptoms: [
      'Atraso na marcha independente e quedas frequentes.',
      'Sinal de Gowers positivo (necessidade de apoiar as mãos nas pernas para se levantar).',
      'Hipertrofia das panturrilhas (pseudohipertrofia por substituição fibrogordurosa).',
      'Marcha anserina ou "de pato" com marcha na ponta dos pés.',
      'Perda da capacidade de deambulação independente geralmente entre 10 e 14 anos sem intervenção.'
    ],
    cardiacManifestations: 'Desenvolvimento gradual de cardiomiopatia dilatada em 100% dos pacientes após os 18 anos. Requer monitoramento eletrocardiográfico e ecocardiográfico anual a partir dos 6 anos de idade.',
    respiratoryManifestations: 'Declínio progressivo da capacidade vital forçada (CVF) devido à fraqueza do diafragma e músculos intercostais. Necessita de suporte de ventilação não invasiva (VNI) com Bilevel na adolescência.',
    orthopedicManifestations: 'Desenvolvimento de contraturas musculares (tendão de Aquiles, flexores do quadril e joelho) e escoliose progressiva pós-perda da marcha.',
    diagnosisAndTests: [
      'Dosagem de Creatinoquinase (CK sérica): valores extremamente elevados (10 a 100 vezes acima do normal).',
      'Teste Genético Molecular: MLPA (Multiplicidade de Sondas) ou Sequenciamento Completo do Gene DMD (identifica deleções em 65-70%, duplicações em 10% ou mutações pontuais).',
      'Biópsia Muscular com Imunohistoquímica: mostra ausência virtual completa (<1%) de distrofina (usada em casos sem mutação detectada no DNA).'
    ],
    treatmentsAndManagement: [
      'Corticoterapia contínua (Deflazacort ou Prednisona): padrão-ouro para desacelerar a perda de força e proteger a função respiratória/cardíaca.',
      'Fisioterapia motora e alongamentos diários preventivos.',
      'Suporte ventilatório não invasivo (VNI) e auxílio mecânico à tossidura (CoughAssist).',
      'Inibidores da ECA ou Bloqueadores dos Receptores de Angiotensina para proteção cardíaca precoce.'
    ],
    approvedTherapies: [
      'Terapias de Salto de Éxon (Exon Skipping: Eteplirsen para éxon 51, Golodirsen/Viltolarsen para éxon 53, Casimersen para éxon 45).',
      'Terapias de Microdistrofina via Vetores Virais AAV (aprovadas condicionalmente em agências regulatórias internacionais como a FDA).'
    ],
    ongoingResearch: 'Ensaios clínicos de fase III investigando corretores de gene CRISPR/Cas9, novos anti-inflamatórios não esteroidais (Vamorolona) e vetores AAV de segunda geração.',
    faqs: [
      {
        question: 'Duchenne afeta apenas meninos?',
        answer: 'Como é uma herança ligada ao cromossomo X, afeta predominantemente indivíduos do sexo masculino (1 a cada 3.500-5.000 nascimentos masculinos). Mulheres portadoras da mutação raramente apresentam sintomas graves, mas podem apresentar miocardiopatia ou fraqueza leve e devem ser acompanhadas.'
      },
      {
        question: 'Por que o exame genético é indispensável?',
        answer: 'O exame genético preciso é indispensável não apenas para o diagnóstico definitivo sem necessidade de biópsia, mas porque as novas terapias genéticas de precisão (como salto de éxon) dependem da localização exata da mutação no DNA.'
      }
    ],
    references: [
      {
        title: 'Diagnosis and management of Duchenne muscular dystrophy, part 1 & 2',
        source: 'Lancet Neurology (Birnkrant et al., 2018)',
        url: 'https://www.nature.com/articles/s41582-018-0001-4'
      },
      {
        title: 'MDA Disease Information: Duchenne Muscular Dystrophy',
        source: 'Muscular Dystrophy Association (MDA)',
        url: 'https://www.mda.org/disease/duchenne-muscular-dystrophy'
      }
    ],
    lastReviewed: '2026-08-05'
  },
  {
    slug: 'becker',
    name: 'Distrofia Muscular de Becker',
    shortName: 'BMD',
    synonyms: ['BMD', 'Distrofinopatia moderada/benigna'],
    group: 'Distrofinopatias',
    gene: 'DMD (Xp21.2)',
    protein: 'Distrofina (produção de forma encurtada ou parcialmente funcional)',
    inheritance: 'Ligada ao X Recessiva',
    onsetAge: 'Segunda infância, adolescência ou vida adulta (5 a 15+ anos)',
    affectedSystems: ['Musculoesquelético', 'Cardíaco'],
    summary: 'Forma com progressão mais lenta de distrofinopatia, na qual a proteína distrofina é produzida em formato encurtado porém parcialmente funcional.',
    overview: 'A Distrofia Muscular de Becker (BMD) é causada por mutações no mesmo gene DMD responsável por Duchenne, porém que mantêm a matriz de leitura genética (in-frame deletions). Isso permite que a célula muscular produza uma proteína distrofina parcial, resultando em sintomas mais leves e progressão consideravelmente mais lenta.',
    classification: 'Pertence ao grupo das Distrofinopatias (CID-10 G71.0).',
    signsAndSymptoms: [
      'Cãibras musculares induzidas por exercício e fadiga precoce.',
      'Fraqueza muscular nas cinturas pélvica e escapular que se inicia mais tarde.',
      'Manutenção da marcha independente além dos 16 a 20 anos de idade.',
      'Hipertrofia de panturrilhas presente na infância/adolescência.'
    ],
    cardiacManifestations: 'A cardiomiopatia dilatada pode ser o sintoma primário ou desproporcional à fraqueza muscular, surgindo às vezes antes dos sintomas motores. Requer ECG/Ecocardiograma anual.',
    respiratoryManifestations: 'Comprometimento respiratório mais tardio e menos frequente que em Duchenne, exigindo monitoramento periódico na vida adulta.',
    orthopedicManifestations: 'Contraturas de tendão de Aquiles e contraturas articulares leves.',
    diagnosisAndTests: [
      'CK sérica elevada (5 a 50 vezes o valor de referência).',
      'Painel genético do gene DMD com detecção de mutações in-frame.',
      'Biópsia muscular mostrando redução quantitativa ou alteração no tamanho da distrofina por Western Blot.'
    ],
    treatmentsAndManagement: [
      'Acompanhamento cardiológico rigoroso com introdução precoce de IECA/BRA.',
      'Fisioterapia motora de manutenção sem exercícios anaeróbicos exaustivos.',
      'Uso criterioso de corticosteroides em casos de declínio motor mais rápido.'
    ],
    approvedTherapies: [
      'Manejo sintomático multidisplicinar e cardioproteção orientada.'
    ],
    ongoingResearch: 'Estudos com moduladores metabólicos, utrofina e inibidores de miostatina.',
    faqs: [
      {
        question: 'Qual a principal diferença entre Duchenne e Becker?',
        answer: 'A diferença principal reside na quantidade e funcionalidade da distrofina. Em Duchenne há ausência quase total da proteína, enquanto em Becker ela existe em menor quantidade ou tamanho reduzido, permitindo maior preservação da força muscular.'
      }
    ],
    references: [
      {
        title: 'Becker Muscular Dystrophy Overview',
        source: 'NINDS / NIH',
        url: 'https://www.ninds.nih.gov/health-information/disorders/becker-muscular-dystrophy'
      }
    ],
    lastReviewed: '2026-08-05'
  },
  {
    slug: 'lgmd-r1',
    name: 'Distrofia Muscular das Cinturas R1 (Calpaína-3)',
    shortName: 'LGMD R1 / LGMDR1',
    synonyms: ['LGMD2A', 'Calpainopatia', 'LGMD R1 Calpain3-related'],
    group: 'Distrofias Musculares das Cinturas (LGMD)',
    gene: 'CAPN3 (15q15.1)',
    protein: 'Calpaína-3 (protease não lisossomal dependente de cálcio)',
    inheritance: 'Autossômica Recessiva',
    onsetAge: 'Adolescência ou início da idade adulta (8 a 15 anos)',
    affectedSystems: ['Musculoesquelético (Cintura Pélvica e Escapular)'],
    summary: 'Subtipo mais frequente de LGMD recessiva no Brasil e no mundo, caracterizado por atrofia e fraqueza progressiva das cinturas com escore cardíaco geralmente preservado.',
    overview: 'A LGMD R1 (anteriormente classificada como LGMD2A ou Calpainopatia) é uma condição autossômica recessiva causada por defeitos no gene CAPN3. A enzima calpaína-3 atua na remodelação dos sarcômeros musculares. Deficiência dessa protease leva à desorganização estrutural e degradação progressiva do tecido muscular proximal.',
    classification: 'Subtipo de Distrofia Muscular das Cinturas Autossômica Recessiva (CID-10 G71.0).',
    signsAndSymptoms: [
      'Fraqueza muscular simétrica e progressiva na cintura pélvica (dificuldade para subir escadas e correr).',
      'Escápulas aladas proeminentes e fraqueza nos adutores da coxa.',
      'Preservação relativa dos músculos deltoides e musculatura facial.',
      'Tendência a contraturas precoces dos tendões de Aquiles.'
    ],
    cardiacManifestations: 'O envolvimento cardíaco é extremamente raro na LGMD R1, diferenciando-a de outros subtipos de LGMD.',
    respiratoryManifestations: 'Comprometimento respiratório tardio nas fases em que o paciente necessita de cadeira de rodas.',
    orthopedicManifestations: 'Contraturas musculares articulares precoces no tornozelo e hipermobilidade compensatória.',
    diagnosisAndTests: [
      'CK sérica moderada a acentuadamente elevada (5 a 30 vezes o normal).',
      'Painel NGS de Sequenciamento de Nova Geração para genes de LGMD (gene CAPN3).',
      'Análise de Western Blot para calpaína-3 em biópsia muscular quando a genética é indeterminada.'
    ],
    treatmentsAndManagement: [
      'Programa de fisioterapia direcionada para prevenção de contraturas de Aquiles.',
      'Atividades aeróbicas de baixo impacto (hidroterapia em água morna).',
      'Adaptações ergonômicas funcionais e suporte ortótico.'
    ],
    approvedTherapies: ['Tratamento de suporte conservador multidisciplinar.'],
    ongoingResearch: 'Estudos de terapia de substituição gênica com vetores AAV contendo a sequência humana do CAPN3 em ensaios de fase I/II.',
    faqs: [
      {
        question: 'O que significa a nova nomenclatura LGMD R1?',
        answer: 'Em 2018, a diretiva internacional de classificação redefiniu as LGMDs. O "R" indica herança Recessiva e o número "1" designa a primeira forma descoberta nessa categoria (antiga LGMD2A).'
      }
    ],
    references: [
      {
        title: '229th ENMC International Workshop: Limb girdle muscular dystrophies nomenclature',
        source: 'Neuromuscular Disorders (Straub et al., 2018)',
        url: 'https://www.nmd-journal.com/article/S0960-8966(18)30504-2/fulltext'
      }
    ],
    lastReviewed: '2026-08-05'
  },
  {
    slug: 'lgmd-r2',
    name: 'Distrofia Muscular das Cinturas R2 (Disferlina)',
    shortName: 'LGMD R2 / LGMDR2',
    synonyms: ['LGMD2B', 'Disferlinopatia', 'Miopatia de Miyoshi'],
    group: 'Distrofias Musculares das Cinturas (LGMD)',
    gene: 'DYSF (2p13.2)',
    protein: 'Disferlina (proteína de reparo de membrana sarcolemal)',
    inheritance: 'Autossômica Recessiva',
    onsetAge: 'Final da adolescência ou início da vida adulta (15 a 25 anos)',
    affectedSystems: ['Musculoesquelético (Membros inferiores e cintura pélvica)'],
    summary: 'Disferlinopatia caracterizada por falha no reparo da membrana sarcolemal das fibras musculares, podendo se manifestar como LGMD ou Miopatia Distal de Miyoshi.',
    overview: 'A LGMD R2 é causada por defeitos no gene DYSF, que codifica a proteína disferlina. A disferlina é essencial para a fusão de vesículas que reparam microlesões na membrana muscular durante a contração. Sem ela, microlesões diárias se acumulam, desencadeando resposta inflamatória severa.',
    classification: 'Subtipo de Distrofia Muscular das Cinturas Autossômica Recessiva (CID-10 G71.0).',
    signsAndSymptoms: [
      'Dificuldade inicial para andar na ponta dos pés (na forma Miyoshi) ou subir escadas (na forma LGMD).',
      'Incapacidade repentina de se manter na ponta dos pés em jovens atletas.',
      'Inflamação muscular marcante frequentemente confundida com polimiosite idiopática.',
      'CK sérica extremamente elevada (muitas vezes > 50 a 100 vezes o limite).'
    ],
    cardiacManifestations: 'Envolvimento cardíaco raro, mas acompanhamento periódico é recomendado.',
    respiratoryManifestations: 'Preservação respiratória prolongada.',
    orthopedicManifestations: 'Atrofia dos músculos gastrocnêmios e sóleo nas fases iniciais.',
    diagnosisAndTests: [
      'CK sérica maciçamente elevada (> 5.000 a 20.000 U/L).',
      'Sequenciamento genético NGS do gene DYSF.',
      'Exame de Imunohistoquímica e Western Blot para disferlina em tecido muscular.'
    ],
    treatmentsAndManagement: [
      'Atenção crucial: Corticoides NÃO são eficazes na disferlinopatia e podem acelerar a perda muscular.',
      'Fisioterapia motora suave e exercícios não fatigantes.',
      'Evitar esportes de alto impacto e sobrecarga anaeróbica.'
    ],
    approvedTherapies: ['Tratamento de suporte e reabilitação funcional.'],
    ongoingResearch: 'Pesquisas de terapia gênica com sistemas de vetor duplo (dual-AAV) devido ao grande tamanho do gene DYSF.',
    faqs: [
      {
        question: 'Por que o uso de corticoides deve ser evitado na Disferlinopatia?',
        answer: 'Estudos clínicos internacionais demonstraram que, diferentemente de Duchenne, o uso prolongado de corticoides em pacientes com deficiência de disferlina resulta em prejuízo motor sem benefício clínico.'
      }
    ],
    references: [
      {
        title: 'Jain Foundation Dysferlinopathy Registry & Clinical Guidelines',
        source: 'Jain Foundation',
        url: 'https://www.jain-foundation.org'
      }
    ],
    lastReviewed: '2026-08-05'
  },
  {
    slug: 'cmd-ullrich',
    name: 'Distrofia Muscular Congênita de Ullrich',
    shortName: 'UCMD',
    synonyms: ['UCMD', 'Distrofia Congênita por Colágeno VI'],
    group: 'Distrofias Musculares Congênitas (CMD)',
    gene: 'COL6A1, COL6A2, COL6A3',
    protein: 'Colágeno Tipo VI',
    inheritance: 'Autossômica Dominante ou Recessiva',
    onsetAge: 'Nascimento ou primeiros meses de vida',
    affectedSystems: ['Musculoesquelético', 'Articular (Hipermobilidade e Contraturas)', 'Respiratório'],
    summary: 'Forma grave de distrofia congênita caracterizada por hipotonia ao nascimento, combinação de contraturas proximais com hipermobilidade distal, e insuficiência respiratória precoce.',
    overview: 'A Distrofia Muscular Congênita de Ullrich (UCMD) é causada por mutações nos genes que codificam as cadeias alfas do Colágeno VI, componente chave da matriz extracelular. A ausência ou defeito no colágeno VI rompe a ancoragem da fibra muscular ao tecido conjuntivo circundante.',
    classification: 'Distrofia Muscular Congênita por Colágenopatia VI (CID-10 G71.2).',
    signsAndSymptoms: [
      'Hipotonia congênita ("bebê mole") e fraqueza muscular grave desde o nascimento.',
      'Combinação marcante de contraturas articulares proximais (cotovelos e quadris) com hipermobilidade distal (dedos e tornozelos).',
      'Hiperqueratose folicular na pele e tendência a cicatrizes queloides.',
      'Evolução para insuficiência respiratória diurna na primeira década de vida.'
    ],
    cardiacManifestations: 'Função cardíaca primária geralmente preservada.',
    respiratoryManifestations: 'Atingimento respiratório precoce por fraqueza diafragmática. A monitoramento da CVF e o início de VNI noturna são frequentemente necessários entre os 6 e 12 anos.',
    orthopedicManifestations: 'Desenvolvimento precoce e rígido de escoliose e rigidez de coluna vertebral.',
    diagnosisAndTests: [
      'Sequenciamento NGS para os genes COL6A1, COL6A2 e COL6A3.',
      'Imunofluorescência de colágeno VI em biópsia de pele ou músculo.',
      'Dosagem de CK sérica (normal a discretamente elevada).'
    ],
    treatmentsAndManagement: [
      'Suporte ventilatório noturno precoce (VNI).',
      'Fisioterapia motora e respiratória intensiva.',
      'Acompanhamento ortopédico para coluna e mobilização articular.'
    ],
    approvedTherapies: ['Manejo de suporte multidisciplinar preventivo.'],
    ongoingResearch: 'Estudos com cicloporina A e análogos para inibição da porosidade mitocondrial e terapias oligonucleotídicas.',
    faqs: [
      {
        question: 'Qual o papel da fisioterapia respiratória em Ullrich?',
        answer: 'Como a fraqueza do diafragma se desenvolve cedo, a fisioterapia respiratória e o acompanhamento de polissonografia são vitais para introdução preventiva de suporte de ventilação noturna.'
      }
    ],
    references: [
      {
        title: 'Congenital Muscular Dystrophy Types & Genetics',
        source: 'Muscular Dystrophy Association (MDA)',
        url: 'https://www.mda.org/disease/congenital-muscular-dystrophy'
      }
    ],
    lastReviewed: '2026-08-05'
  },
  {
    slug: 'cmd-bethlem',
    name: 'Distrofia Muscular Congênita de Bethlem',
    shortName: 'Miopatia de Bethlem',
    synonyms: ['Bethlem Myopathy', 'Colágenopatia VI moderada'],
    group: 'Distrofias Musculares Congênitas (CMD)',
    gene: 'COL6A1, COL6A2, COL6A3',
    protein: 'Colágeno Tipo VI',
    inheritance: 'Autossômica Dominante (mais comum) ou Recessiva',
    onsetAge: 'Infância ou início da idade adulta',
    affectedSystems: ['Musculoesquelético', 'Articulações (Flexores dos dedos)'],
    summary: 'Forma mais leve do espectro de miopatias por Colágeno VI, caracterizada por progressão lenta e contraturas típicas dos dedos das mãos.',
    overview: 'A Miopatia de Bethlem situa-se no extremo mais moderado do espectro de deficiências de Colágeno VI. Os indivíduos afetados costumam manter a capacidade de andar durante a vida adulta, apresentando contraturas articulares características.',
    classification: 'Distrofia/Miopatia Congênita (CID-10 G71.2).',
    signsAndSymptoms: [
      'Fraqueza muscular leve a moderada de início na infância ou vida adulta.',
      'Contraturas típicas dos dedos (incapacidade de estender totalmente os dedos quando os punhos estão estendidos).',
      'Contraturas nos tendões de Aquiles e cotovelos.',
      'Hiperqueratose folicular na superfície extensora dos membros.'
    ],
    cardiacManifestations: 'Preservado.',
    respiratoryManifestations: 'Monitoramento respiratório recomendado na idade adulta madura.',
    orthopedicManifestations: 'Contraturas musculares progressivas nas mãos e tornozelos.',
    diagnosisAndTests: [
      'Sequenciamento genético NGS para COL6A1/2/3.',
      'Imunocoloração de colágeno VI em biópsia cutânea.'
    ],
    treatmentsAndManagement: [
      'Fisioterapia motora focada em manter a amplitude articular das mãos e pés.',
      'Uso de órteses noturnas para os punhos e pés.'
    ],
    approvedTherapies: ['Manejo conservador multidisciplinar.'],
    ongoingResearch: 'Pesquisas de moléculas de estabilização sarcoplasmática.',
    faqs: [
      {
        question: 'Bethlem e Ullrich são a mesma doença?',
        answer: 'São manifestações de severidade diferente causadas por defeitos no mesmo grupo de genes (COL6A1/2/3). Ullrich é a forma grave congênita e Bethlem é a forma moderada com evolução prolongada.'
      }
    ],
    references: [
      {
        title: 'Collagen VI-related Dystrophies Clinical Guidelines',
        source: 'GARD / NIH',
        url: 'https://rarediseases.info.nih.gov'
      }
    ],
    lastReviewed: '2026-08-05'
  },
  {
    slug: 'fshd1',
    name: 'Distrofia Muscular Facioscapuloumeral Tipo 1',
    shortName: 'FSHD1 / FSHD',
    synonyms: ['FSHD1', 'Distrofia de Landouzy-Dejerine'],
    group: 'Facioscapuloumeral (FSHD)',
    gene: 'D4Z4 / DUX4 (4q35)',
    protein: 'DUX4 (expressão tóxica aberrante em músculo maduro)',
    inheritance: 'Autossômica Dominante',
    onsetAge: 'Adolescência ou segunda década de vida (10 a 20 anos)',
    affectedSystems: ['Musculoesquelético (Face, Ombro, Braço e Abdômen)', 'Auditivo (Retinopatia/Hipoacusia ocasional)'],
    summary: 'Caracterizada por assimetria muscular marcante afetando inicialmente a musculatura facial, os fixadores da escápula e a porção anterior dos braços.',
    overview: 'A FSHD1 é a terceira distrofia muscular mais prevalente em adultos. É causada pela contração do número de repetições D4Z4 no cromossomo 4q35 associada a um alelo permissivo. Isso resulta no desrelaxamento epigenético e expressão ectópica tóxica do fator de transcrição DUX4 nas fibras musculares adultas.',
    classification: 'Distrofia Facioscapuloumeral (CID-10 G71.0).',
    signsAndSymptoms: [
      'Fraqueza facial assimétrica (dificuldade para assobiar, inflar as bochechas ou fechar os olhos completamente durante o sono).',
      'Escápula alada proeminente e inclinação dos ombros para frente.',
      'Dificuldade para elevar os braços acima da linha dos ombros.',
      'Fraqueza da musculatura abdominal (sinal de Beevor positivo) e hiperlordose.',
      'Comprometimento assimétrico dos dorsiflexores do pé (pé caído).'
    ],
    cardiacManifestations: 'Arritmias supraventriculares ocasionais. Monitoramento anual com ECG.',
    respiratoryManifestations: 'Insuficiência respiratória rara, limitada a cerca de 10% dos pacientes com doença avançada.',
    orthopedicManifestations: 'Subluxação de ombro e dor decorrente da instabilidade escapular.',
    diagnosisAndTests: [
      'Teste Genético Específico para FSHD: Análise por Southern Blot ou Bionano Genomics para contagem de repetições D4Z4 (1 a 10 repetições confirmam FSHD1).',
      'CK sérica normal ou discretamente elevada (2 a 5 vezes).'
    ],
    treatmentsAndManagement: [
      'Fisioterapia motora focada em estabilização funcional da cintura escapular.',
      'Cirurgia de fixação escapulotorácica em casos selecionados para recuperar a abdução do armo.',
      'Uso de órteses AFO para pé caído.'
    ],
    approvedTherapies: ['Tratamento sintomático e fisioterápico.'],
    ongoingResearch: 'Ensaios clínicos avançados de fase III investigando inibidores direcionados da expressão da proteína tóxica DUX4 (como o Losmapimod) e terapias de RNA antissentido.',
    faqs: [
      {
        question: 'Por que a FSHD frequentemente apresenta sintomas assimétricos?',
        answer: 'A expressão do gene tóxico DUX4 ocorre de forma estocástica e pontual nas fibras musculares, fazendo com que um lado do corpo (ex: ombro direito) possa ser consideravelmente mais afetado que o outro.'
      }
    ],
    references: [
      {
        title: 'FSHD Society Clinical Guidelines',
        source: 'FSHD Society',
        url: 'https://www.fshdsociety.org'
      }
    ],
    lastReviewed: '2026-08-05'
  },
  {
    slug: 'dm1-steinert',
    name: 'Distrofia Miotônica Tipo 1 (Steinert)',
    shortName: 'DM1 / Steinert',
    synonyms: ['Doença de Steinert', 'DM1', 'Myotonic Dystrophy Type 1'],
    group: 'Miotônica (DM)',
    gene: 'DMPK (19q13.32)',
    protein: 'Miotonina Proteína Quinase (expansão CTG)',
    inheritance: 'Autossômica Dominante',
    onsetAge: 'Variável (Congênita, Infantil, Adulto [20-40 anos] ou Tardia)',
    affectedSystems: ['Musculoesquelético', 'Miotonia', 'Cardíaco (Condução)', 'Endócrino', 'SNC', 'Catarata'],
    summary: 'Doença multissistêmica caracterizada por miotonia (dificuldade de relaxamento muscular), fraqueza distal e alterações cardíacas e endócrinas.',
    overview: 'A Distrofia Miotônica Tipo 1 (DM1) é a distrofia muscular mais comum em adultos de origem europeia. É uma doença de expansão de repetições de nucleotídeos CTG no gene DMPK. O RNA mutado expandido acumula-se no núcleo celular, sequestrando proteínas de splicing como a MBNL1 e causando alteração no processamento de múltiplos pré-mRNAs no organismo.',
    classification: 'Distrofia Miotônica (CID-10 G71.1).',
    signsAndSymptoms: [
      'Miotonia de preensão (dificuldade para soltar a mão após um aperto firme ou segurar uma ferramenta).',
      'Fraqueza muscular distal (mãos, pés) e facial (ptose palpebral, frouxidão da mandíbula).',
      'Catarata precoce (antes dos 50 anos).',
      'Sonolência excessiva diurna, fadiga e alterações do sono.',
      'Calvície frontal precoce em homens e alterações endócrinas (diabetes, hipotireoidismo).'
    ],
    cardiacManifestations: 'Alto risco de bloqueios de condução atrioventricular e arritmias ventriculares graves. Holter e ECG anuais indispensáveis; necessidade frequente de implante de marcapasso ou CDI preventivo.',
    respiratoryManifestations: 'Apneia obstrutiva do sono e fraqueza dos músculos respiratórios. Indicação frequente de BiPAP.',
    orthopedicManifestations: 'Deformidade de pé caído e contraturas distais nas mãos.',
    diagnosisAndTests: [
      'Teste Genético de PCR / Southern Blot para expansão da repetição CTG no gene DMPK (> 50 repetições confirma o diagnóstico).',
      'Eletromiografia (EMG): presença de descargas miotônicas ("som de avião mergulhador").'
    ],
    treatmentsAndManagement: [
      'Monitoramento cardiológico profilático rigoroso (principal causa de mortalidade precoce).',
      'Uso de Mexiletina para alívio sintomático da miotonia muscular incapacitante.',
      'Modafinila ou Solriamfetol para tratamento da sonolência excessiva diurna.',
      'Cirurgia de catarata e suporte endócrino.'
    ],
    approvedTherapies: ['Tratamento de suporte multissistêmico orientado.'],
    ongoingResearch: 'Terapias de oligonucleotídeos antissentido (ASO) para degradação seletiva do RNA mutado tóxico do gene DMPK.',
    faqs: [
      {
        question: 'O que é o fenômeno da antecipação genética na DM1?',
        answer: 'A repetição CTG tende a se expandir ao ser transmitida para as gerações seguintes, especialmente por via materna. Isso significa que filhos de mães afetadas podem apresentar a doença em idade mais jovem e com sintomas mais severos (forma congênita).'
      }
    ],
    references: [
      {
        title: 'Consensus-based care recommendations for adults with myotonic dystrophy type 1',
        source: 'Neurology (MDF / Ashizawa et al.)',
        url: 'https://www.myotonic.org'
      }
    ],
    lastReviewed: '2026-08-05'
  },
  {
    slug: 'dm2',
    name: 'Distrofia Miotônica Tipo 2',
    shortName: 'DM2 / PROMM',
    synonyms: ['PROMM', 'Miopatia Miotônica Proximal'],
    group: 'Miotônica (DM)',
    gene: 'CNBP / ZNF9 (3q21.3)',
    protein: 'Proteína de ligação a ácido nucleico celular (expansão CCTG)',
    inheritance: 'Autossômica Dominante',
    onsetAge: 'Vida adulta (30 a 50+ anos)',
    affectedSystems: ['Musculoesquelético (Proximal)', 'Miotonia', 'Cardíaco', 'Catarata'],
    summary: 'Forma multissistêmica moderada caracterizada por fraqueza predominantemente PROXIMAL (coxas e quadris), miotonia e dor muscular prolongada.',
    overview: 'A DM2 é causada por uma expansão do tetra-nucleotídeo CCTG no intron 1 do gene CNBP. Embora compartilhe o mecanismo de toxicidade do RNA com a DM1, a DM2 apresenta curso clínico mais brando, sem forma congênita identificada e com acometimento preferencialmente proximal.',
    classification: 'Distrofia Miotônica Tipo 2 (CID-10 G71.1).',
    signsAndSymptoms: [
      'Dores musculares difusas (mialgias) frequentes e persistentes.',
      'Fraqueza proximal em quadríceps e flexores do quadril.',
      'Miotonia de preensão mais leve que na DM1.',
      'Catarata subcapsular posterior precoce.'
    ],
    cardiacManifestations: 'Distúrbios de condução cardíaca menos frequentes e mais moderados que na DM1, exigindo ECG bienal.',
    respiratoryManifestations: 'Raramente afetada.',
    orthopedicManifestations: 'Hipertrofia ou atrofia discreta de musculatura proximal.',
    diagnosisAndTests: [
      'Teste de PCR com amplificação por primer repetido para o gene CNBP (expansão CCTG).',
      'Eletromiografia demonstrando miotonia subclínica.'
    ],
    treatmentsAndManagement: [
      'Manejo da dor neuropática e muscular com analgésicos e moduladores.',
      'Exercícios aeróbicos de impacto moderado e acompanhamento cardiológico.'
    ],
    approvedTherapies: ['Tratamento de suporte multissistêmico.'],
    ongoingResearch: 'Estudos de alvos terapêuticos de splicing idênticos aos da DM1.',
    faqs: [
      {
        question: 'Existe forma congênita na DM2?',
        answer: 'Não. Diferente da DM1, a DM2 não se manifesta ao nascimento nem apresenta o fenômeno de antecipação grave por via materna.'
      }
    ],
    references: [
      {
        title: 'Myotonic Dystrophy Type 2 Clinical Resources',
        source: 'Myotonic Dystrophy Foundation (MDF)',
        url: 'https://www.myotonic.org/about-dm/myotonic-dystrophy-type-2'
      }
    ],
    lastReviewed: '2026-08-05'
  },
  {
    slug: 'edmd1',
    name: 'Distrofia Muscular de Emery-Dreifuss Tipo 1',
    shortName: 'EDMD1',
    synonyms: ['EDMD1', 'Emery-Dreifuss ligada ao X', 'Emerinopatia'],
    group: 'Emery-Dreifuss (EDMD)',
    gene: 'EMD (Xq28)',
    protein: 'Emerina (proteína do envelope nuclear)',
    inheritance: 'Ligada ao X Recessiva',
    onsetAge: 'Primeira infância ou adolescência (5 a 15 anos)',
    affectedSystems: ['Musculoesquelético', 'Articular (Contraturas precoces)', 'Cardíaco (Nó Sinusal e Condução)'],
    summary: 'Caracterizada pela tríade clássica: contraturas articulares precoces, fraqueza umeroperoneal progressiva e cardiopatia grave com distúrbios de condução.',
    overview: 'A EDMD1 é uma envelopatia nuclear decorrente de mutações no gene EMD, levando à perda da proteína emerina da membrana nuclear interna. A falta de emerina causa instabilidade mecânica nas células submetidas a estresse contrátil, especialmente miócitos cardíacos e esqueléticos.',
    classification: 'Distrofia Muscular de Emery-Dreifuss (CID-10 G71.0).',
    signsAndSymptoms: [
      'Contraturas precoces do tendão de Aquiles, cotovelos e coluna cervical (rigidez de nuca) ANTES de fraqueza muscular significativa.',
      'Fraqueza muscular de distribuição umeroperoneal (bíceps/tríceps nos braços e peroneais nas pernas).',
      'Marcha nas pontas dos pés por limitação da dorsiflexão do tornozelo.',
      'Rigidez acentuada da coluna vertebral.'
    ],
    cardiacManifestations: 'Comprometimento cardíaco prático inevitável na vida adulta: paralisia atrial, bloqueio AV total e risco de morte súbita. O implante profilático de marcapasso ou CDI é frequentemente vital.',
    respiratoryManifestations: 'Hipoventilação restritiva em decorrência da deforma da caixa torácica e rigidez da coluna.',
    orthopedicManifestations: 'Contraturas musculares articulares graves e precoces.',
    diagnosisAndTests: [
      'Sequenciamento genético NGS para o gene EMD.',
      'Ausência de imunomarcação para emerina em biópsia de pele ou leucócitos sanguíneos.'
    ],
    treatmentsAndManagement: [
      'Instalação profilática de marcapasso/CDI orientada por eletrofisiologia.',
      'Fisioterapia motora diária focada na preservação da mobilidade articular.',
      'Procedimentos cirúrgicos de liberação de tendões em casos selecionados.'
    ],
    approvedTherapies: ['Manejo cirúrgico, cardiológico e reabilitador conservador.'],
    ongoingResearch: 'Estudos sobre estabilização da lâmina A/C e rotas de sinalização MAPK.',
    faqs: [
      {
        question: 'Por que o acompanhamento cardíaco na EDMD é de extrema urgência?',
        answer: 'Na EDMD, bloqueios cardíacos graves e arritmias podem surgir repentinamente mesmo em indivíduos com fraqueza muscular leve. O monitoramento contínuo evita mortes súbitas cardíacas.'
      }
    ],
    references: [
      {
        title: 'Emery-Dreifuss Muscular Dystrophy Overview',
        source: 'NINDS / NIH',
        url: 'https://www.ninds.nih.gov'
      }
    ],
    lastReviewed: '2026-08-05'
  },
  {
    slug: 'opmd',
    name: 'Distrofia Muscular Oculofaríngea',
    shortName: 'OPMD',
    synonyms: ['OPMD', 'Distrofia Oculofaríngea'],
    group: 'Oculofaríngea (OPMD)',
    gene: 'PABPN1 (14q11.2)',
    protein: 'Poly(A) Binding Protein Nuclear 1 (expansão GCN)',
    inheritance: 'Autossômica Dominante',
    onsetAge: 'Quinta ou sexta década de vida (40 a 60+ anos)',
    affectedSystems: ['Ocular (Ptose palpebral)', 'Digestivo/Bulbar (Disfagia)', 'Musculoesquelético (Proximal leve)'],
    summary: 'Distrofia de início tardio caracterizada por ptose palpebral bilateral progressiva, dificuldade para engolir (disfagia) e fraqueza proximal leve.',
    overview: 'A OPMD é uma doença genética dominante causada por uma pequena expansão de repetições de trinucleotídeos (GCN) no gene PABPN1. O acúmulo da proteína mutada forma agregados filamentosos nucleares insolúveis nas células musculares adultas.',
    classification: 'Distrofia Muscular Oculofaríngea (CID-10 G71.0).',
    signsAndSymptoms: [
      'Ptose palpebral bilateral progressiva (pálpebras caídas que cobrem a pupila, levando à postura compensatória de inclinar a cabeça para trás).',
      'Disfagia progressiva para alimentos sólidos e posteriormente líquidos.',
      'Engasgos frequentes e voz anasalada.',
      'Fraqueza proximal leve nos quadris e ombros na evolução tardia.'
    ],
    cardiacManifestations: 'Preservado.',
    respiratoryManifestations: 'Risco de pneumonia por aspiração secundária à disfagia grave.',
    orthopedicManifestations: 'Inclinamento compensatório de coluna cervical.',
    diagnosisAndTests: [
      'Teste Genético Específico por PCR/Sequenciamento do gene PABPN1.',
      'Videodeglutograma e avaliação fonoaudiológica instrumental.'
    ],
    treatmentsAndManagement: [
      'Acompanhamento fonoaudiológico intensivo para reabilitação da deglutição.',
      'Cirurgia de correção de ptose palpebral (blefaroplastia/suspensão ao frontal).',
      'Dilatação cricofaríngea ou miotomia para disfagia severa.',
      'Adaptação de consistência alimentar.'
    ],
    approvedTherapies: ['Manejo fonoaudiológico, cirúrgico e nutricional de suporte.'],
    ongoingResearch: 'Estudos com terapias de silencing e substituição gênica (AAV-shRNA-PABPN1).',
    faqs: [
      {
        question: 'Qual a principal complicação da OPMD e como preveni-la?',
        answer: 'A principal complicação é a pneumonia por aspiração devido à disfagia. Ela é prevenida com exercícios fonoaudiológicos, adequação da consistência dos alimentos e intervenções cirúrgicas quando indicadas.'
      }
    ],
    references: [
      {
        title: 'Oculopharyngeal Muscular Dystrophy Guidelines',
        source: 'MDA / GARD',
        url: 'https://www.mda.org/disease/oculopharyngeal-muscular-dystrophy'
      }
    ],
    lastReviewed: '2026-08-05'
  }
];

// Repositório Helpers
export function getAllDiseases(): DiseaseDetail[] {
  return diseasesRepository;
}

export function getDiseaseBySlug(slug: string): DiseaseDetail | undefined {
  return diseasesRepository.find((d) => d.slug === slug);
}

export function getDiseasesByGroup(group: MedicalGroup): DiseaseDetail[] {
  return diseasesRepository.filter((d) => d.group === group);
}

export function getAllMedicalGroups(): MedicalGroup[] {
  return [
    'Distrofinopatias',
    'Distrofias Musculares das Cinturas (LGMD)',
    'Distrofias Musculares Congênitas (CMD)',
    'Facioscapuloumeral (FSHD)',
    'Miotônica (DM)',
    'Emery-Dreifuss (EDMD)',
    'Oculofaríngea (OPMD)'
  ];
}
