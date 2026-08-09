// lib/distrofias-data.ts
import { DiseaseDetail, MedicalGroup } from './distrofias-types';

export const diseasesData: DiseaseDetail[] = [
  {
    slug: 'duchenne',
    cid: 'G71.0',
    name: 'Distrofia Muscular de Duchenne',
    shortName: 'DMD',
    synonyms: ['Distrofinopatia grave', 'Dystrophinopathy - Duchenne type', 'DMD'],
    group: 'Distrofinopatias',
    subType: 'Ausência total de distrofina (Out-of-frame mutations)',
    gene: 'DMD (Xp21.2)',
    protein: 'Distrofina (ausente ou <1% dos níveis normais)',
    inheritance: 'Ligada ao X Recessiva',
    onsetAge: 'Infância precoce (2 a 5 anos)',
    affectedSystems: ['Músculo esquelético', 'Miocárdio', 'Diafragma/Músculos respiratórios', 'Sistema Nervoso Central (cognição em ~30% dos casos)'],
    summary: 'A forma mais comum e grave de distrofinopatia. Causada por mutações que alteram a matriz de leitura no gene DMD, resultando na ausência virtual da proteína distrofina.',
    overview: 'A Distrofia Muscular de Duchenne (DMD) afeta predominantemente indivíduos do sexo masculino. Caracteriza-se por fraqueza muscular progressiva simétrica com início na musculatura cinto-membro proximal (quadril e coxas), evoluindo com pseudohipertrofia de panturrilhas, marcha anserina e Sinal de Gowers positivo.',
    classification: 'Distrofinopatia primária ligada ao cromossomo X (OMIM #310200). Mutações de deleção (65%), duplicação (10%) ou pontuais/nonsense (25%) que quebram a matriz de leitura (out-of-frame).',
    pathophysiology: 'A distrofina forma o complexo glicoproteico associado à distrofina (DAGC), ancorando o citoesqueleto de f-actina à matriz extracelular (laminina-211). Sua ausência resulta em instabilidade no sarcolema durante a contração muscular, influxo maciço de cálcio extracelular, ativação de proteases (calpaínas), degeneração necrosante e substituição progressiva de fibras por tecido fibroadiposo.',
    signsAndSymptoms: [
      'Atraso na aquisição da marcha independente (frequentemente >18 meses)',
      'Sinal de Gowers positivo (necessidade de apoiar as mãos nas pernas para se levantar do solo)',
      'Pseudohipertrofia verdadeira de panturrilhas (substituição por gordura/fibrose)',
      'Quedas frequentes e dificuldade para subir degraus ou correr',
      'Marcha nas pontas dos pés por contratura inicial dos tendões de Aquiles',
      'Lordose lombar compensatória acentuada'
    ],
    cardiacManifestations: 'Cardiomiopatia dilatada assintomática inicial evoluindo para fibrose do miocárdio (parede póstero-lateral do ventrículo esquerdo) e arritmias. Afeta >90% dos indivíduos após os 18 anos.',
    respiratoryManifestations: 'Insuficiência respiratória restritiva progressiva por fraqueza do diafragma e músculos intercostais, com redução da Capacidade Vital Forçada (CVF) e hipoventilação noturna a partir da segunda década.',
    orthopedicManifestations: 'Contraturas em flexão de joelhos e quadris, deformidade em equinovaro nos tornozelos e escoliose rapidamente progressiva após a perda da deambulação.',
    diagnosisAndTests: [
      'Dosagem de Creatina Quinase (CK) sérica: Elevação massiva (50 a 100 vezes os valores de referência normais, frequentemente >10.000 U/L)',
      'Exame Genético Molecular por MLPA (Multiplex Ligation-dependent Probe Amplification): Detecta deleções e duplicações de éxons',
      'Sequenciamento Completo do Gene DMD por NGS (Next Generation Sequencing): Indicado se MLPA for negativo para rastreio de mutações de ponto ou microinserções',
      'Biópsia Muscular (imunohistoquímica/Western Blot): Reservada para casos de variante genética incerta; demonstra ausência total de distrofina (<1%)',
      'Ecocardiograma e Ressonância Magnética Cardíaca anuais a partir dos 6 anos'
    ],
    differentialDiagnosis: ['Distrofia Muscular de Becker (DMB)', 'Distrofias Musculares das Cinturas (LGMD)', 'Atrofia Muscular Espinhal (AME tipo 3)', 'Miopatias Inflamatórias/Polimiosite Pediátrica'],
    treatmentsAndManagement: [
      'Corticoterapia contínua (Deflazacorte ou Prednisona): Padrão-ouro para retardo da perda de deambulação em 2 a 5 anos e preservação da função respiratória e cardíaca',
      'Fisioterapia Motora e Respiratória regular com alongamentos passivos diários para prevenção de contraturas',
      'Suporte Ventilatório Não Invasivo (VNI / BiPAP) e assistente de tosse (Cough Assist) guiados por espirometria',
      'Manejo Cardiológico preventivo com Inibidores da ECA (Enalapril/Lisinopril) ou BRAs a partir dos 6-10 anos'
    ],
    approvedTherapies: [
      'Corticoides (Deflazacorte / Prednisona) - Aprovados ANVISA/FDA/EMA',
      'Terapia de Salto de Éxon (Eteplirsen para éxon 51, Golodirsen/Viltolarsen para éxon 53, Casimersen para éxon 45) - Aprovados FDA em mutações específicas',
      'Terapia Gênica por Vetor Viral AAV (Delandistrogene moxeparvovec) - Aprovada FDA sob condições específicas'
    ],
    ongoingResearch: 'Novas gerações de oligonucleotídeos peptídicos (PPMOs), moduladores de utrofina, inibidores de miostatina, terapia de edição genômica (CRISPR/Cas9) e novos agentes anti-inflamatórios não esteroidais (Vamorolone).',
    faqs: [
      {
        question: 'Duchenne afeta apenas meninos?',
        answer: 'Devido à herança ligada ao cromossomo X, afeta predominantemente meninos. Mulheres portadoras da mutação em um dos cromossomos X geralmente são assintomáticas, mas cerca de 2% a 5% podem apresentar sintomas leves de fraqueza muscular ou cardiomiopatia isolada (portadoras sintomáticas).'
      },
      {
        question: 'A fisioterapia com carga forte de peso é recomendada?',
        answer: 'Não. Exercícios excêntricos de alta resistência com peso são estritamente contraindicados, pois a ausência de distrofina faz com que a sobrecarga mecânica destrua as fibras musculares. Recomenda-se fisioterapia de alongamento, posicionamento e hidroterapia em água aquecida.'
      }
    ],
    references: [
      { title: 'Duchenne Muscular Dystrophy - GeneReviews', source: 'NIH / NCBI', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1119/' },
      { title: 'Orphanet: Duchenne muscular dystrophy', source: 'Orphanet', url: 'https://www.orpha.net/consor/cgi-bin/OC_Exp.php?Lng=GB&Expert=98896' },
      { title: 'OMIM #310200 - MUSCULAR DYSTROPHY, DUCHENNE TYPE', source: 'OMIM', url: 'https://omim.org/entry/310200' }
    ],
    lastReviewed: '2026-08-05'
  },
  {
    slug: 'becker',
    cid: 'G71.0',
    name: 'Distrofia Muscular de Becker',
    shortName: 'DMB',
    synonyms: ['Distrofinopatia moderada', 'Dystrophinopathy - Becker type', 'DMB'],
    group: 'Distrofinopatias',
    subType: 'Produção de distrofina alterada ou reduzida (In-frame mutations)',
    gene: 'DMD (Xp21.2)',
    protein: 'Distrofina (presente em tamanho alterado ou quantidade reduzida: 10% a 60%)',
    inheritance: 'Ligada ao X Recessiva',
    onsetAge: 'Segunda infância, adolescência ou início da vida adulta (5 a 20+ anos)',
    affectedSystems: ['Músculo esquelético', 'Miocárdio'],
    summary: 'Forma mais branda e de progressão mais lenta de distrofinopatia. Resulta de mutações no gene DMD que preservam a matriz de leitura (in-frame), gerando distrofina parcialmente funcional.',
    overview: 'A Distrofia Muscular de Becker (DMB) compartilha a mesma base genética da Duchenne, porém apresenta curso clínico mais heterogêneo. A deambulação independente é mantida após os 16 anos de idade, podendo se estender por toda a vida adulta.',
    classification: 'Distrofinopatia ligada ao X (OMIM #300376). Mutações in-frame mantêm a extremidade C-terminal e N-terminal conectadas.',
    pathophysiology: 'A presença de distrofina parcial minimiza o estresse de estiramento do sarcolema em comparação com Duchenne. Contudo, a redução quantitativa ou estrutural ainda induz necrose muscular crônica e fibrose progressiva.',
    signsAndSymptoms: [
      'Cãibras musculares induzidas pelo exercício na adolescência',
      'Mialgia e fraqueza de membros inferiores durante atividades físicas intensas',
      'Pseudohipertrofia de panturrilhas frequente',
      'Perda tardia da capacidade de subir escadas',
      'Elevação de CK episódica ou persistente'
    ],
    cardiacManifestations: 'Cardiomiopatia dilatada grave pode ser a manifestação inicial ou desproporcional à fraqueza esquelética, exigindo rastreio cardiológico precoce.',
    respiratoryManifestations: 'Preservada na maioria dos pacientes até fases avançadas, com hipoventilação restritiva de início tardio.',
    orthopedicManifestations: 'Encurtamento leve de tendões de Aquiles e contraturas articulares moderadas.',
    diagnosisAndTests: [
      'CK sérica elevada (10 a 50 vezes o valor normal)',
      'MLPA do gene DMD identificando deleções/duplicações in-frame',
      'Ressonância Magnética Cardíaca e Holter 24h',
      'Biópsia Muscular com Western Blot mostrando distrofina em massa molecular reduzida ou quantidade diminuída'
    ],
    differentialDiagnosis: ['Distrofias Musculares das Cinturas (LGMD)', 'Miopatia Miotônica', 'Polimiosite'],
    treatmentsAndManagement: [
      'Acompanhamento cardiológico rigoroso com uso profilático de IECAs/BRAs',
      'Fisioterapia para preservação de ADM (amplitude de movimento)',
      'Corticoterapia em casos de progressão motora acentuada (avaliado individualmente)'
    ],
    approvedTherapies: ['Manejo sintomático cardiológico e reabilitação física.'],
    ongoingResearch: 'Estudos com moduladores de reparo de membrana, vasodilatadores musculares e vetores sintéticos.',
    faqs: [
      {
        question: 'Qual a diferença entre Duchenne e Becker?',
        answer: 'Em Duchenne a proteína distrofina está ausente por completo, provocando fraqueza motora na infância precoce. Em Becker a distrofina é produzida em menor quantidade ou tamanho menor, resultando em sintomas mais leves e início mais tardio.'
      }
    ],
    references: [
      { title: 'Becker Muscular Dystrophy - GeneReviews', source: 'NIH / NCBI', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1119/' },
      { title: 'OMIM #300376 - MUSCULAR DYSTROPHY, BECKER TYPE', source: 'OMIM', url: 'https://omim.org/entry/300376' }
    ],
    lastReviewed: '2026-08-05'
  },
  {
    slug: 'lgmd-r1-calpainopatia',
    cid: 'G71.0',
    name: 'Distrofia Muscular das Cinturas R1 (Calpainopatia)',
    shortName: 'LGMD-R1 / LGMD2A',
    synonyms: ['LGMD2A', 'Calpainopatia', 'Limb-Girdle Muscular Dystrophy R1', 'LGMD-CAPN3'],
    group: 'Distrofias Musculares das Cinturas (LGMD)',
    subType: 'Deficiência da Protease Calpaína-3',
    gene: 'CAPN3 (15q15.1)',
    protein: 'Calpaína-3 (Protease não estrutural do sarcômero)',
    inheritance: 'Autossômica Recessiva',
    onsetAge: 'Adolescência ou início da idade adulta (8 a 15 anos)',
    affectedSystems: ['Músculo esquelético da cintura pélvica e escapular', 'Musculatura paravertebral'],
    summary: 'A forma recessiva mais frequente de Distrofia Muscular das Cinturas. Causada por mutações no gene CAPN3, levando à deficiência da enzima calpaína-3.',
    overview: 'A LGMD-R1 afeta ambos os sexos igualmente. Apresenta-se com fraqueza simétrica da cintura pélvica e escapular, escápulas aladas proeminentes e marcha anserina. O envolvimento cardíaco e intelectual é notavelmente ausente.',
    classification: 'Distrofia Muscular das Cinturas do tipo Recessivo 1 (OMIM #253600).',
    pathophysiology: 'A calpaína-3 é uma protease não estrutural ligada à titina que regula a renovação e remodelação do sarcômero. Sua deficiência induz estresse do retículo endoplasmático e apoptose celular muscular.',
    signsAndSymptoms: [
      'Dificuldade para correr e subir escadas na segunda infância ou adolescência',
      'Escápula alada bilateral evidente',
      'Atrofia acentuada da musculatura posterior de coxas e adutores',
      'Marcha anserina (gingada)',
      'Preservação da musculatura facial e cardíaca'
    ],
    cardiacManifestations: 'Comprometimento cardíaco é extremamente raro na LGMD-R1, servindo como importante marcador de diagnóstico diferencial.',
    respiratoryManifestations: 'Insuficiência respiratória restritiva moderada em fases avançadas pós-perda da deambulação.',
    orthopedicManifestations: 'Contraturas precoces em flexão plantar dos tornozelos e escoliose secundária.',
    diagnosisAndTests: [
      'CK sérica elevada (5 a 30 vezes o valor normal)',
      'Painel Genético por NGS para genes de LGMD (identificando mutações bi-alólicas no CAPN3)',
      'Western Blot muscular para proteína calpaína-3'
    ],
    differentialDiagnosis: ['LGMD-R2 (Dysferlinopatia)', 'FSHD', 'Miopatias metabólicas'],
    treatmentsAndManagement: [
      'Fisioterapia motora de manutenção de amplitude articular',
      'Suporte ortopédico para tornozelos',
      'Monitoramento de capacidade vital respiratória esporádica'
    ],
    approvedTherapies: ['Manejo de suporte multidisciplinar.'],
    ongoingResearch: 'Estudos de substituição gênica com AAV-rh74-CAPN3 em fase clínica 1/2.',
    faqs: [
      {
        question: 'O coração é afetado na Calpainopatia?',
        answer: 'Raramente. Diferente das distrofinopatias, a LGMD-R1 preserva o músculo cardíaco na grande maioria dos pacientes.'
      }
    ],
    references: [
      { title: 'Limb-Girdle Muscular Dystrophy R1 - GeneReviews', source: 'NIH', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1313/' },
      { title: 'Orphanet: LGMD R1', source: 'Orphanet', url: 'https://www.orpha.net' }
    ],
    lastReviewed: '2026-08-04'
  },
  {
    slug: 'lgmd-r2-dysferlinopatia',
    cid: 'G71.0',
    name: 'Distrofia Muscular das Cinturas R2 (Disferlinopatia / Miopatia de Miyoshi)',
    shortName: 'LGMD-R2 / LGMD2B',
    synonyms: ['LGMD2B', 'Disferlinopatia', 'Miopatia de Miyoshi', 'Miopatia Distal de Miyoshi'],
    group: 'Distrofias Musculares das Cinturas (LGMD)',
    subType: 'Deficiência do Reparo de Membrana por Disferlina',
    gene: 'DYSF (2p13.2)',
    protein: 'Disferlina (Proteina transmembrana de reparo de sarcolema)',
    inheritance: 'Autossômica Recessiva',
    onsetAge: 'Início da vida adulta (15 a 25 anos)',
    affectedSystems: ['Músculo esquelético distal (gastrocnêmios) e pélvico'],
    summary: 'Causada por mutações no gene DYSF, podendo se manifestar como LGMD-R2 (fraqueza proximal das cinturas) ou como Miopatia de Miyoshi (fraqueza distal inicial de panturrilhas).',
    overview: 'A disferlinopatia é caracterizada por elevação extrema de CK em adultos jovens, muitas vezes antes do surgimento da fraqueza motora. Pacientes frequentemente eram atletas antes do início dos sintomas.',
    classification: 'Distrofia Muscular das Cinturas Recessiva tipo 2 (OMIM #253601).',
    pathophysiology: 'A disferlina medeia a fusão vesicular dependente de cálcio necessária para o reparo rápido de rupturas na membrana muscular. Sem disferlina, lesões de exercício não são reparadas, levando à necrose e ativação do sistema complemento.',
    signsAndSymptoms: [
      'Incapacidade repentina de ficar na ponta dos pés (Miopatia de Miyoshi)',
      'Dificuldade para subir escadas e se levantar de cadeiras baixas (Fenótipo LGMD)',
      'Atrofia marcada dos músculos gastrocnêmios e sóleo',
      'Histórico prévio de excelente aptidão física/esportiva na infância'
    ],
    cardiacManifestations: 'Comprometimento cardíaco é incomum.',
    respiratoryManifestations: 'Raramente comprometida gravemente.',
    orthopedicManifestations: 'Contraturas articulares menos frequentes que em outras formas de cinturas.',
    diagnosisAndTests: [
      'CK sérica extremamente elevada (>20 a 100 vezes o normal, frequentemente >15.000 U/L em assintomáticos)',
      'Sequenciamento Genético NGS do gene DYSF',
      'Imunohistoquímica de biópsia muscular mostrando ausência de disferlina na membrana'
    ],
    differentialDiagnosis: ['Polimiosite / Miopatia inflamatória (frequentemente causa erro diagnóstico inicial)', 'Calpainopatia'],
    treatmentsAndManagement: [
      'Atenção: Corticoides são contraindicados ou ineficazes na disferlinopatia (diferente da polimiosite)',
      'Fisioterapia leve de conservação de energia'
    ],
    approvedTherapies: ['Manejo de suporte multidisciplinar.'],
    ongoingResearch: 'Terapias com vetores AAV dual e moduladores de membrana celular.',
    faqs: [
      {
        question: 'Por que o uso de corticoide é evitado na Disferlinopatia?',
        answer: 'Estudos mostraram que os corticoides não melhoram a força muscular na LGMD-R2 e podem acelerar a perda funcional, diferente de sua indicação em Duchenne.'
      }
    ],
    references: [
      { title: 'Dysferlinopathy - GeneReviews', source: 'NIH', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1321/' }
    ],
    lastReviewed: '2026-08-04'
  },
  {
    slug: 'cmd-lama2-merosina',
    cid: 'G71.2',
    name: 'Distrofia Muscular Congênita Deficiente de Merosina (LAMA2)',
    shortName: 'CMD-LAMA2 / MDC1A',
    synonyms: ['Distrofia Muscular Congênita do Tipo 1A', 'MDC1A', 'Merosin-deficient CMD'],
    group: 'Distrofias Musculares Congênitas (CMD)',
    subType: 'Deficiência da Cadeia Alfa-2 da Laminina (Merosina)',
    gene: 'LAMA2 (6q22.31)',
    protein: 'Laminina alfa-2 (Merosina / componente de matriz extracelular)',
    inheritance: 'Autossômica Recessiva',
    onsetAge: 'Neonatal ou primeiros 6 meses de vida',
    affectedSystems: ['Músculo esquelético global', 'Substância branca cerebral (leucoencefalopatia assintomática)', 'Nervos periféricos'],
    summary: 'A forma mais comum de Distrofia Muscular Congênita grave. Caracteriza-se por hipotonia ao nascimento ("floppy infant"), contraturas articulares e leucoencefalopatia característica na ressonância.',
    overview: 'Bebês afetados apresentam hipotonia acentuada, choro fraco e dificuldades de sucção ao nascimento. A maioria dos pacientes não adquire marcha independente, necessitando de suporte postural e respiratório.',
    classification: 'Distrofia Muscular Congênita tipo 1A (OMIM #607855).',
    pathophysiology: 'A laminina alfa-2 liga a integrina e a distroglicana à matriz extracelular. A deficiência rompe a ancoragem muscular e a mielinização dos nervos periféricos e sistema nervoso central.',
    signsAndSymptoms: [
      'Hipotonia congênita grave ("síndrome do bebê hipotônico")',
      'Atraso acentuado dos marcos de desenvolvimento motor',
      'Contraturas congênitas de cotovelos, joelhos e quadris',
      'Infecções respiratórias recorrentes na primeira infância'
    ],
    cardiacManifestations: 'Função cardíaca geralmente preservada.',
    respiratoryManifestations: 'Insuficiência respiratória precoce por fraqueza intercostal, exigindo ventilação não invasiva noturna.',
    orthopedicManifestations: 'Escoliose precoce e rígida, necessitando de colete ortopédico e cirurgia de fusão espinhal.',
    diagnosisAndTests: [
      'CK sérica elevada (>1.000 a 5.000 U/L)',
      'Ressonância Magnética de Crânio: Mostra hiperintensidade difusa e simétrica da substância branca em T2 (leucoencefalopatia sem retardo mental obrigatoriamente associado)',
      'Sequenciamento NGS do gene LAMA2'
    ],
    differentialDiagnosis: ['Atrofia Muscular Espinhal tipo 1 (AME1)', 'CMD COL6-relacionada', 'Miopatias congênitas'],
    treatmentsAndManagement: [
      'Acompanhamento pneumológico pediátrico intensivo',
      'Suporte nutricional por gastrostomia se houver disfagia',
      'Fisioterapia motora e controle postural'
    ],
    approvedTherapies: ['Manejo de suporte multidisciplinar.'],
    ongoingResearch: 'Vetores virais bicassetes e proteínas de fusão sintéticas (LAMA1/linker).',
    faqs: [
      {
        question: 'A alteração na substância branca do cérebro afeta a inteligência?',
        answer: 'Na maioria das crianças com LAMA2, a alteração da substância branca na ressonância reflete desmielinização sutil e a inteligência permanece preservada.'
      }
    ],
    references: [
      { title: 'LAMA2-Related Dystrophy - GeneReviews', source: 'NIH', url: 'https://www.ncbi.nlm.nih.gov/books/NBK343584/' }
    ],
    lastReviewed: '2026-08-04'
  },
  {
    slug: 'cmd-col6-ullrich-bethlem',
    cid: 'G71.2',
    name: 'Miopatias Relacionadas ao Colágeno VI (Ullrich/Bethlem)',
    shortName: 'CMD-COL6',
    synonyms: ['Distrofia Muscular Congênita de Ullrich (UCMD)', 'Miopatia de Bethlem', 'COL6-RD'],
    group: 'Distrofias Musculares Congênitas (CMD)',
    subType: 'Espectro do Colágeno VI (Ullrich grave / Bethlem amena)',
    gene: 'COL6A1, COL6A2, COL6A3 (21q22.3 e 2q37.3)',
    protein: 'Colágeno tipo VI (Cadeias alfa-1, alfa-2 e alfa-3)',
    inheritance: 'Autossômica Dominante ou Recessiva',
    onsetAge: 'Congênito (Ullrich) a infância/adolescência (Bethlem)',
    affectedSystems: ['Músculo esquelético', 'Tecido conjuntivo', 'Pele (cicatrizes queloides)', 'Função respiratória'],
    summary: 'Espectro contínuo de condições causadas por deficiência de Colágeno VI na matriz extracelular, caracterizado pelo contraste entre contraturas proximais e hiperlaxidão distal.',
    overview: 'Na forma grave de Ullrich, crianças apresentam hipotonia congênita, contraturas de cotovelos/quadris e hipermobilidade de dedos. Na Miopatia de Bethlem, a progressão é mais lenta.',
    classification: 'Espectro COL6-RD (OMIM #254090 / #158810).',
    pathophysiology: 'O colágeno VI forma microfibrilas na matriz extracelular muscular. Sua ausência desestabiliza a ancoragem celular e induz disfunção mitocondrial com apoptose muscular inapropriada.',
    signsAndSymptoms: [
      'Coexistência de contraturas proximais (cotovelos) e hipermobilidade distal (dedos das mãos)',
      'Hiperqueratose pilar e cicatrização queloidiana na pele',
      'Protrusão de calcâneo',
      'Insuficiência respiratória desproporcional à perda da marcha'
    ],
    cardiacManifestations: 'Preservado.',
    respiratoryManifestations: 'Comprometimento respiratório precoce por rigidez da caixa torácica e fraqueza do diafragma.',
    orthopedicManifestations: 'Contraturas graves e escoliose.',
    diagnosisAndTests: [
      'CK normal ou levemente elevada',
      'Sequenciamento NGS dos genes COL6A1, COL6A2, COL6A3',
      'Biópsia de pele/músculo com imunofluorescência para Colágeno VI'
    ],
    differentialDiagnosis: ['CMD LAMA2', 'Síndrome de Ehlers-Danlos', 'Miopatia de Emery-Dreifuss'],
    treatmentsAndManagement: [
      'Monitoramento de ventilação noturna desde a infância',
      'Fisioterapia de amplitude articular',
      'Cuidados dermatológicos'
    ],
    approvedTherapies: ['Manejo de suporte multidisciplinar.'],
    ongoingResearch: 'Moduladores da função mitocondrial (Ciclosporina A/Omigapil) e terapia gênica com ASOs.',
    faqs: [
      {
        question: 'Qual a característica marcante ao exame físico na distrofia do Colágeno VI?',
        answer: 'A combinação de articulações duras/enrijecidas no cotovelo e ombro com dedos das mãos extremamente flexíveis e dobráveis.'
      }
    ],
    references: [
      { title: 'Collagen VI-Related Dystrophies - GeneReviews', source: 'NIH', url: 'https://www.ncbi.nlm.nih.gov/books/NBK2002/' }
    ],
    lastReviewed: '2026-08-04'
  },
  {
    slug: 'fshd-facioescapuloumeral',
    cid: 'G71.0',
    name: 'Distrofia Muscular Facioescapuloumeral',
    shortName: 'FSHD',
    synonyms: ['FSHD1', 'FSHD2', 'Landouzy-Dejerine', 'Facioscapulohumeral dystrophy'],
    group: 'Facioscapuloumeral (FSHD)',
    subType: 'FSHD1 (Contração D4Z4 4q35) / FSHD2 (Mutações SMCHD1/DNMT3B)',
    gene: 'DUX4 (4q35) / SMCHD1 (18p11.32)',
    protein: 'DUX4 (Fator de transcrição embrionário tóxico)',
    inheritance: 'Autossômica Dominante',
    onsetAge: 'Segunda década de vida (15 a 30 anos)',
    affectedSystems: ['Músculos da face', 'Cintura escapular', 'Fixadores da escápula', 'Dorsiflexores do pé'],
    summary: 'Terceira forma mais comum de distrofia muscular. Caracteriza-se por fraqueza assimétrica da musculatura facial, ombros e braços, com proeminência de escápula alada.',
    overview: 'A FSHD afeta a musculatura imitando assimetria muscular. Inicialmente compromete a capacidade de assobiar, fechar completamente os olhos durante o sono e elevar os braços acima da cabeça.',
    classification: 'FSHD1 (95% dos casos, desrepressão epigenética por contração de repetições D4Z4 no 4q35) e FSHD2 (5%, mutações no gene SMCHD1).',
    pathophysiology: 'A hipometilação da região D4Z4 permite a expressão inadequada do gene embrionário DUX4 nos miócitos adultos, desencadeando cascatas apoptóticas e resposta imune inflamatória destrutiva.',
    signsAndSymptoms: [
      'Fraqueza facial assimétrica (dificuldade para sorrir, assobiar ou inflar bochechas)',
      'Escápula alada assimétrica ("scapular winging")',
      'Dificuldade para erguer os braços acima da linha dos ombros',
      'Queda de pé ("foot drop") por fraqueza do tibial anterior',
      'Assimetria peitoral visual'
    ],
    cardiacManifestations: 'Arritmias supraventriculares leves em uma minoria de casos.',
    respiratoryManifestations: 'Insuficiência respiratória em cerca de 10% dos casos graves.',
    orthopedicManifestations: 'Hiperlordose e instabilidade articular escapulotorácica.',
    diagnosisAndTests: [
      'CK normal a moderadamente elevada (2 a 5 vezes o normal)',
      'Exame Genético de Bloting / Southern Blotting ou Bionano optical mapping para contagem de repetições D4Z4',
      'Sequenciamento de SMCHD1 em suspeita de FSHD2'
    ],
    differentialDiagnosis: ['Miopatia de Cinturas LGMD-R1', 'Síndrome de Poland', 'Miopatia mitocondrial'],
    treatmentsAndManagement: [
      'Cirurgia de fixação da escápula (escapulopexia) em casos selecionados para recuperar elevação do braço',
      'Fisioterapia para fortalecimento e controle de dor miofascial',
      'Acompanhamento auditivo (telangiectasias retinianas / Doença de Coats associada)'
    ],
    approvedTherapies: ['Manejo sintomático e reabilitação.'],
    ongoingResearch: 'Inibidores de DUX4 por p38 MAPK quinases, oligonucleotídeos antissemânticos (ASOs) e anticorpos monoclonais.',
    faqs: [
      {
        question: 'A FSHD afeta ambos os lados do corpo da mesma maneira?',
        answer: 'Não. Uma das marcas registradas da FSHD é a assimetria: um lado da face ou um ombro pode ser significativamente mais fraco que o outro.'
      }
    ],
    references: [
      { title: 'Facioscapulohumeral Muscular Dystrophy - GeneReviews', source: 'NIH', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1443/' }
    ],
    lastReviewed: '2026-08-04'
  },
  {
    slug: 'dm1-steinert',
    cid: 'G71.1',
    name: 'Distrofia Miotônica tipo 1 (Doença de Steinert)',
    shortName: 'DM1',
    synonyms: ['Doença de Steinert', 'Myotonic Dystrophy Type 1', 'DM1'],
    group: 'Miotônica (DM)',
    subType: 'Expansão de Repetições CTG no gene DMPK',
    gene: 'DMPK (19q13.32)',
    protein: 'Miotonina proteico-quinase (DMPK)',
    inheritance: 'Autossômica Dominante',
    onsetAge: 'Adulta (20-40 anos) ou Congênita (em recém-nascidos de mães afetadas)',
    affectedSystems: ['Músculo esquelético', 'Miócardio/Sistema de Condução', 'Olhos (catarata precoce)', 'Sistema Endócrino', 'SNC'],
    summary: 'A distrofia muscular mais comum em adultos. Caracteriza-se por miotonia (dificuldade de relaxamento muscular pós-contração), fraqueza distal e comprometimento multissistêmico.',
    overview: 'A DM1 é uma doença multissistêmica por expansão instável de nucleotídeos. Além da miotonia (ex: incapacidade de soltar a mão após um aperto de mão), apresenta catarata em idade precoce, calvície frontal em homens e bloqueio de condução cardíaca.',
    classification: 'Doença de expansão trinucleotídica CTG (OMIM #160900). Forma congênita ocorre com repetições >1.000 CTG.',
    pathophysiology: 'O transcrito de RNA mutado contendo repetições CUG expandidas acumula-se em focos nucleares celulares, sequestrando fatores de splicing alternativo (MBNL1), alterando múltiplos canais iônicos (CLCN1 e SCN5A).',
    signsAndSymptoms: [
      'Miotonia de ação e de percussão (dificuldade de relaxar a musculatura da mão)',
      'Ptose palpebral bilateral e dolicofacia (fácie miotópica alongada)',
      'Fraqueza distal de flexores dos dedos e dorsiflexores do pé',
      'Sonolência diurna excessiva e fadiga central',
      'Catarata iridescente precoce (<40 anos)'
    ],
    cardiacManifestations: 'Bloqueio atrioventricular (BAV de 1º a 3º grau), arritmias ventriculares e morte súbita. Eletrocardiograma anual obrigatório.',
    respiratoryManifestations: 'Hipoventilação alveolar central e fraqueza diafragmática com apneia do sono.',
    orthopedicManifestations: 'Pé caído por fraqueza distal.',
    diagnosisAndTests: [
      'CK normal a levemente elevada',
      'Teste Genético de PCR para expansão de repetições CTG no gene DMPK',
      'Eletromiografia (EMG): Demonstra descargas miotônicas características ("som de bombardeiro mergulhador")',
      'ECG e Holter 24h anuais'
    ],
    differentialDiagnosis: ['Distrofia Miotônica Tipo 2 (DM2/PROMM)', 'Miotonia Congênita de Thomsen/Becker'],
    treatmentsAndManagement: [
      'Monitoramento cardiológico rigoroso com indicação de marca-passo se PR >240ms ou BAV',
      'Alerta médico anestésico (contraindicação estrita de succinilcolina)',
      'Mexiletina para controle de miotonia sintomática grave'
    ],
    approvedTherapies: ['Mexiletina para miotonia (aprovada EMA/FDA). Manejo multidisciplinar.'],
    ongoingResearch: 'Oligonucleotídeos antissemânticos para degradação do RNA CUG tóxico acumulado no núcleo.',
    faqs: [
      {
        question: 'O que é o fenômeno da miotonia no dia a dia?',
        answer: 'É a incapacidade temporária do músculo de relaxar após uma contração voluntária. Por exemplo, ao segurar uma maçaneta ou cumprimentar alguém com aperto de mão, o paciente leva vários segundos para conseguir abrir os dedos.'
      }
    ],
    references: [
      { title: 'Myotonic Dystrophy Type 1 - GeneReviews', source: 'NIH', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1165/' }
    ],
    lastReviewed: '2026-08-04'
  },
  {
    slug: 'emery-dreifuss',
    cid: 'G71.0',
    name: 'Distrofia Muscular de Emery-Dreifuss',
    shortName: 'EDMD',
    synonyms: ['EDMD1', 'EDMD2', 'Laminopatia cardíaca com contraturas'],
    group: 'Emery-Dreifuss (EDMD)',
    subType: 'EDMD1 (Ligada ao X / EMD) ou EDMD2 (Autossômica / LMNA)',
    gene: 'EMD (Xq28) ou LMNA (1q22)',
    protein: 'Emerina (EMD) ou Laminas A/C (LMNA)',
    inheritance: 'Ligada ao X Recessiva',
    onsetAge: 'Infância a adolescência (5 a 15 anos)',
    affectedSystems: ['Músculo esquelético', 'Sistema de condução cardíaco', 'Articulações (cotovelos e tendão de Aquiles)'],
    summary: 'Caracterizada pela tríade de contraturas articulares precoces (cotovelos e tornozelos), fraqueza humeroperoneal e cardiopatia com risco de bloqueio atrioventricular total.',
    overview: 'A EDMD exige vigilância cardiológica extrema. A limitação articular nos cotovelos e coluna cervical frequentemente surge antes de qualquer fraqueza muscular perceptível.',
    classification: 'EDMD1 (OMIM #310300) e EDMD2 (OMIM #181350).',
    pathophysiology: 'Emerina e laminas A/C formam o andaime de sustentação nuclear celular. Sua ausência desestabiliza o núcleo mecânico em tecidos expostos a estresse (músculo e condução cardíaca).',
    signsAndSymptoms: [
      'Contraturas precoces em flexão de cotovelos (incapacidade de estender completamente o braço)',
      'Rigidez de coluna cervical e dorso',
      'Fraqueza de distribuição humeroperoneal (bíceps/tríceps e perônios)',
      'Palpitações e síncopes por bloqueio cardíaco'
    ],
    cardiacManifestations: 'Fibrilação atrial, paralisia atrial e bloqueio AV completo. Alta incidência de morte súbita sem marcapasso.',
    respiratoryManifestations: 'Preservada na maioria até fases avançadas.',
    orthopedicManifestations: 'Rigidez acentuada de cotovelos e coluna posterior.',
    diagnosisAndTests: [
      'CK moderadamente elevada',
      'Sequenciamento NGS dos genes EMD e LMNA',
      'ECG e Holter 24h'
    ],
    differentialDiagnosis: ['CMD COL6', 'FSHD', 'LGMD-R1'],
    treatmentsAndManagement: [
      'Implante preventivo de Marca-passo / CDI ao primeiro sinal de alteração no ECG',
      'Fisioterapia motora de amplitude para cotovelos'
    ],
    approvedTherapies: ['Implante de dispositivos cardíacos e reabilitação.'],
    ongoingResearch: 'Inibidores de quinases e vetores AAV para LMNA.',
    faqs: [
      {
        question: 'Qual a complicação mais séria da Distrofia de Emery-Dreifuss?',
        answer: 'Os bloqueios da condução elétrica do coração. O acompanhamento com cardiologista e o uso de marca-passo salvam vidas nessa condição.'
      }
    ],
    references: [
      { title: 'Emery-Dreifuss Muscular Dystrophy - GeneReviews', source: 'NIH', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1436/' }
    ],
    lastReviewed: '2026-08-04'
  },
  {
    slug: 'opmd-oculofaringea',
    cid: 'G71.0',
    name: 'Distrofia Muscular Oculofaríngea',
    shortName: 'OPMD',
    synonyms: ['Oculopharyngeal Muscular Dystrophy', 'OPMD'],
    group: 'Oculofaríngea (OPMD)',
    subType: 'Expansão de repetição GCN no gene PABPN1',
    gene: 'PABPN1 (14q11.2)',
    protein: 'Poly(A) Binding Protein Nuclear 1 (PABPN1)',
    inheritance: 'Autossômica Dominante',
    onsetAge: 'Idade adulta avançada (40 a 60 anos)',
    affectedSystems: ['Músculos elevadores das pálpebras', 'Músculos faríngeos de deglutição', 'Cintura pélvica tardia'],
    summary: 'Distrofia de início tardio caracterizada por ptose palpebral bilateral e disfagia progressiva para alimentos sólidos e líquidos.',
    overview: 'A OPMD manifesta-se tipicamente após os 50 anos. Pacientes inclinam a cabeça para trás para enxergar devido à queda das pálpebras (ptose) e relatam engasgos frequentes.',
    classification: 'Doença de expansão trinucleotídica GCN no PABPN1 (OMIM #164300).',
    pathophysiology: 'O acúmulo de proteína PABPN1 mutada forma agregados intranucleares filamentares em miócitos faríngeos e oculares, induzindo apoptose.',
    signsAndSymptoms: [
      'Ptose palpebral bilateral progressiva',
      'Disfagia para sólidos e posteriormente para líquidos',
      'Voz anasalada',
      'Fraqueza proximal de membros inferiores em fases tardias'
    ],
    cardiacManifestations: 'Ausente.',
    respiratoryManifestations: 'Risco de pneumonia por aspiração secundária à disfagia.',
    orthopedicManifestations: 'Inexistentes.',
    diagnosisAndTests: [
      'CK normal a levemente elevada',
      'Teste Genético para expansão GCN no gene PABPN1',
      'Videodeglutograma para avaliação de disfagia'
    ],
    differentialDiagnosis: ['Miastenia Gravis', 'Miopatia mitocondrial (CPEO)', 'Esclerose Lateral Amiotrófica (ELA)'],
    treatmentsAndManagement: [
      'Cirurgia de correção de ptose palpebral (blefaroplastia/suspensão frontal)',
      'Fonoterapia de adaptação da deglutição e espessamento de líquidos',
      'Miotomia cricofaríngea ou gastrostomia em disfagia severa'
    ],
    approvedTherapies: ['Cirurgia palpebral, fonoterapia e intervenções nutricionais.'],
    ongoingResearch: 'Terapia gênica com vetores AAV para silenciamento e substituição do PABPN1.',
    faqs: [
      {
        question: 'A OPMD afeta a expectativa de vida?',
        answer: 'A expectativa de vida é próxima da normal quando a disfagia é adequadamente manejada para prevenir pneumonias por aspiração brônquica.'
      }
    ],
    references: [
      { title: 'Oculopharyngeal Muscular Dystrophy - GeneReviews', source: 'NIH', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1126/' }
    ],
    lastReviewed: '2026-08-04'
  }
];

export function getAllDiseases(): DiseaseDetail[] {
  return diseasesData;
}

export function getDiseaseBySlug(slug: string): DiseaseDetail | undefined {
  return diseasesData.find((d) => d.slug === slug);
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

export function getDiseasesByGroup(group: MedicalGroup): DiseaseDetail[] {
  return diseasesData.filter((d) => d.group === group);
}
