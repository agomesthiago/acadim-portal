// lib/news-data.ts
import { NewsArticle } from './news-types';

export const newsArticles: NewsArticle[] = [
  {
    slug: 'avancos-terapia-genica-duchenne-2026',
    title: 'Avanços na Terapia Gênica para Duchenne: Síntese Científica e Panorama no Brasil',
    excerpt: 'Síntese do Núcleo Editorial ACADIM sobre os dados de ensaios clínicos com salto de éxon e terapias de microdistrofina em 2026, com foco nos critérios de elegibilidade e acesso pelo SUS.',
    category: 'Avanços Científicos',
    publishedAt: '2026-08-01',
    updatedAt: '2026-08-04',
    readTime: '6 min de leitura',
    featured: true,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'Nature Reviews Neurology & Muscular Dystrophy Association (MDA)',
      title: 'Gene therapy and exon skipping developments in Duchenne muscular dystrophy',
      url: 'https://www.nature.com/articles/s41582-018-0001-4',
      originalPublishedAt: '2026-07-28'
    },
    coverImage: '/assets/community-bg.jpg',
    imageAlt: 'Pesquisador examinando dados de terapia gênica em laboratório neurológico',
    tags: ['Duchenne', 'Terapia Gênica', 'Pesquisa', 'SUS', 'Microdistrofina'],
    relatedDiseaseSlug: 'duchenne',
    content: `
      <section class="space-y-6">
        <div class="bg-blue-50 border-l-4 border-brand-blue p-4 rounded-r-xl">
          <h3 class="text-sm font-black uppercase text-brand-blue tracking-wider mb-1">Resumo Executivo Editorial</h3>
          <p class="text-sm text-slate-700 leading-relaxed font-medium">
            Em 2026, o tratamento da Distrofia Muscular de Duchenne (DMD) consolida uma transição histórica do manejo exclusivamente sintomático para terapias genéticas de precisão. Esta síntese editorial da ACADIM organiza as evidências publicadas na <em>Nature Reviews Neurology</em> e atualizações da MDA, relacionando-as à realidade do SUS no Brasil.
          </p>
        </div>

        <h3 class="text-xl font-bold text-text-primary">1. O Que Aconteceu?</h3>
        <p>Estudos clínicos de fase 3 confirmaram a expressão sustentada de microdistrofina em tecido muscular de crianças com Duchenne tratadas com vetores virais adenoassociados (AAV9). Simultaneamente, novas gerações de oligonucleotídeos morfolino (PMOs) voltados para o salto dos éxons 51, 53 e 45 demonstraram maior penetração tecidual e menor nefrotoxicidade.</p>

        <h3 class="text-xl font-bold text-text-primary">2. Por Que Isso Importa para as Famílias?</h3>
        <p>A distrofina é a proteína estrutural responsável por ancorar as fibras musculares à matriz extracelular. Na ausência de distrofina funcional, cada contração muscular gera microlesões que gradualmente substituem o músculo por tecido fibroadiposo. A introdução de uma versão encurtada porém funcional (microdistrofina) desacelera significativamente a perda da capacidade de deambulação e protege a função cardiopulmonar.</p>

        <h3 class="text-xl font-bold text-text-primary">3. O Que Já Se Sabe (Evidências Consolidadas)</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Janela Terapêutica Precoce:</strong> A eficácia do tratamento é significativamente maior quando administrado antes da perda substancial de massa muscular funcional.</li>
          <li><strong>Especificidade Genética:</strong> A elegibilidade depende rigorosamente do perfil exato da mutação (deleção, duplicação ou mutação de ponto). Mutantes no éxon 8-11 requerem avaliação imunológica rigorosa devido ao risco de resposta imune à proteína transgênica.</li>
          <li><strong>Necessidade de Diagnóstico Molecular Completo:</strong> O teste de MLPA isolado pode ser insuficiente em mutações pontuais, exigindo o Sequenciamento Completo do Gene DMD (NGS).</li>
        </ul>

        <h3 class="text-xl font-bold text-text-primary">4. O Que Ainda Não Se Sabe (Lacunas de Pesquisa)</h3>
        <p>A durabilidade da expressão do vetor virais ao longo de décadas ainda está sob acompanhamento em coortes de longo prazo. Como os vetores virais AAV não se integram ao genoma e o tecido muscular sofre renovação celular (embora limitada na distrofia), estuda-se a necessidade e a viabilidade técnica de redosagem no futuro.</p>

        <h3 class="text-xl font-bold text-text-primary">5. Panorama no Brasil e Acesso no SUS</h3>
        <p>No Brasil, a ACADIM e a Aliança Distrofia Brasil (ADB) atuam junto à ANVISA e à CONITEC para assegurar que a incorporação de terapias avançadas seja acompanhada pela universalização do diagnóstico molecular precoce no SUS. Sem o exame genético completo disponível na rede básica de saúde, famílias vulneráveis enfrentam atrasos críticos na elegibilidade.</p>
      </section>
    `,
  },
  {
    slug: 'direitos-sus-medicamentos-orteses-guia',
    title: 'Guia de Direitos no SUS: Insumos, Órteses e Suporte Multidisciplinar no Rio de Janeiro',
    excerpt: 'Orientação completa compilada pelo Núcleo Editorial e Jurídico da ACADIM sobre como obter fraldas, órteses surpodálicas, cadeiras de rodas e fisioterapia pela rede pública.',
    category: 'Direitos no SUS',
    publishedAt: '2026-07-20',
    updatedAt: '2026-07-22',
    readTime: '7 min de leitura',
    featured: true,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'Defensoria Pública do Estado do Rio de Janeiro & Ministério da Saúde',
      title: 'Manual de Atuação em Saúde da Defensoria Pública do RJ',
      url: 'https://www.defensoria.rj.def.br',
      originalPublishedAt: '2026-06-10'
    },
    coverImage: '/assets/hero-bg-3.jpg',
    imageAlt: 'Orientação de famílias sobre direitos em saúde no Rio de Janeiro',
    tags: ['SUS', 'Direitos', 'Órteses', 'Apoio Jurídico', 'Rio de Janeiro'],
    content: `
      <section class="space-y-6">
        <div class="bg-blue-50 border-l-4 border-brand-blue p-4 rounded-r-xl">
          <h3 class="text-sm font-black uppercase text-brand-blue tracking-wider mb-1">Resumo do Guia Institucional</h3>
          <p class="text-sm text-slate-700 leading-relaxed font-medium">
            Garantir a concessão de fraldas descartáveis, órteses ortopédicas (como AFO/surpodálicas), cadeiras de rodas sob medida e sessões contínuas de fisioterapia motora e respiratória no SUS não é concessão administrativa: é um direito fundamental assegurado pela Constituição Federal, pela Lei Brasileira de Inclusão (LBI) e pelo Estatuto da Pessoa com Deficiência.
          </p>
        </div>

        <h3 class="text-xl font-bold text-text-primary">1. Passo a Passo para Solicitação Administrativa no RJ</h3>
        <p>Antes de recorrer à via judicial, a família deve formalizar o pedido administrativo na Secretaria Municipal de Saúde do Rio de Janeiro (ou na Secretaria Estadual de Saúde para itens de alta complexidade):</p>
        <ol class="list-decimal pl-5 space-y-2">
          <li><strong>Obtenção do Laudo Médico Completo:</strong> O laudo deve conter o código CID-10 (ex: G71.0 para Distrofia Muscular), a justificativa detalhada da necessidade e a prescrição exata das especificações técnicas da órtese ou cadeira de rodas.</li>
          <li><strong>Protocolo no Posto de Saúde (AP):</strong> Apresente a documentação na Unidade Básica de Saúde ou na Área Programática responsável pelo seu bairro no Rio de Janeiro.</li>
          <li><strong>Guarda do Número de Protocolo:</strong> Exija e guarde o comprovante com o número do processo administrativo e a data de entrega.</li>
        </ol>

        <h3 class="text-xl font-bold text-text-primary">2. Atuação da Defensoria Pública do Estado do Rio de Janeiro</h3>
        <p>Caso o município ou estado não responda no prazo legal de 30 dias ou emitam parecer desfavorável sem fundamentação técnica válida, a família pode buscar o Núcleo de Saúde da Defensoria Pública do RJ (NUSAUD). Documentos necessários para o atendimento:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Comprovante do protocolo administrativo negado ou sem resposta.</li>
          <li>Laudo médico recente assinado por neurologista ou fisiatra.</li>
          <li>Exame genético confirmatório (se disponível).</li>
          <li>Documentos de identificação (CPF, RG, Comprovante de Residência no RJ e Cartão SUS).</li>
        </ul>

        <h3 class="text-xl font-bold text-text-primary">3. Como a ACADIM Auxilia Suas Famílias</h3>
        <p>O serviço de acolhimento e cidadania da ACADIM faz a pré-triagem documental e emite carta de apoio institucional para instruir o atendimento na Defensoria Pública e no Ministério Público do Estado do Rio de Janeiro.</p>
      </section>
    `,
  },
  {
    slug: 'simposio-carioca-distrofia-muscular-2026',
    title: 'ACADIM Realiza Encontro de Famílias e Especialistas no Rio de Janeiro',
    excerpt: 'Resumo institucional do encontro que reuniu famílias, neurologistas, fisioterapeutas e defensores de direitos humanos no auditório da ACADIM no Rio de Janeiro.',
    category: 'Eventos ACADIM',
    publishedAt: '2026-06-15',
    updatedAt: '2026-06-18',
    readTime: '4 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    coverImage: '/assets/hero-bg-4.jpg',
    imageAlt: 'Participantes do Encontro da ACADIM sorrindo em auditório no Rio de Janeiro',
    tags: ['Evento', 'Comunidade', 'Simpósio', 'Acolhimento', 'Rio de Janeiro'],
    content: `
      <section class="space-y-6">
        <p class="lead">No dia 15 de junho de 2026, a Associação Carioca de Distrofia Muscular (ACADIM) promoveu seu tradicional Encontro de Famílias e Especialistas, reunindo mais de 120 participantes no Rio de Janeiro para debater avanços médicos, manejo fisioterapêutico e direitos socioassistenciais.</p>

        <h3 class="text-xl font-bold text-text-primary">Destaques da Programação</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Mesa Redonda de Cuidados Respiratórios:</strong> Orientação prática sobre ventilação não invasiva (VNI) e higiene brônquica preventiva.</li>
          <li><strong>Painel de Direitos e Isenções Impostos:</strong> Esclarecimentos sobre isenção de IPVA, gratuidade no transporte público (RioCard Especial) e Benefício de Prestação Continuada (BPC/LOAS).</li>
          <li><strong>Espaço de Convivência Infantil:</strong> Atividades recreativas adaptadas com supervisão para as crianças.</li>
        </ul>

        <p>A ACADIM agradece a todos os voluntários, palestrantes e famílias que tornaram este evento um marco de apoio mútuo e cidadania.</p>
      </section>
    `,
  },
  {
    slug: 'lgmd-r1-calpainopatia-ensaios-clinicos-2026',
    title: 'Ensaios Clínicos para LGMD-R1 (Calpainopatia): Resultados Preliminares de Fase 1/2',
    excerpt: 'Síntese técnica sobre os estudos de substituição gênica do CAPN3 para a Distrofia Muscular das Cinturas R1, compilada a partir das publicações da Muscular Dystrophy Association (MDA).',
    category: 'Pesquisa & Ensaios Clínicos',
    publishedAt: '2026-07-10',
    updatedAt: '2026-07-12',
    readTime: '5 min de leitura',
    featured: true,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'Muscular Dystrophy Association (MDA) & ClinicalTrials.gov',
      title: 'Safety and tolerability of AAV-CAPN3 in Limb-Girdle Muscular Dystrophy R1',
      url: 'https://www.mda.org/science/clinical-trials',
      originalPublishedAt: '2026-06-30'
    },
    coverImage: '/assets/hero-bg.jpg',
    imageAlt: 'Equipe de pesquisa examinando culturas de células musculares',
    tags: ['LGMD-R1', 'Calpainopatia', 'CAPN3', 'Ensaio Clínico', 'Cinturas'],
    relatedDiseaseSlug: 'lgmd-r1-calpainopatia',
    content: `
      <section class="space-y-6">
        <div class="bg-blue-50 border-l-4 border-brand-blue p-4 rounded-r-xl">
          <h3 class="text-sm font-black uppercase text-brand-blue tracking-wider mb-1">Síntese de Pesquisa em Cinturas</h3>
          <p class="text-sm text-slate-700 leading-relaxed font-medium">
            A Distrofia Muscular das Cinturas R1 (anteriormente classificada como LGMD2A ou Calpainopatia) é causada por mutações homozigóticas ou heterozigóticas compostas no gene <em>CAPN3</em>. Esta matéria resume o estado atual dos vetores virais AAV rh74 projetados para restaurar a enzima calpaína-3.
          </p>
        </div>

        <h3 class="text-xl font-bold text-text-primary">1. Mecanismo e Desafio da Calpaína-3</h3>
        <p>A calpaína-3 é uma protease dependente de cálcio que atua no remodelamento sarcomérico do músculo esquelético. Diferente da distrofina, que é uma proteína de ancoragem estrutural da membrana, a calpaína-3 exerce papel enzimático. Isso exige controle rigoroso dos níveis de expressão do vetor viral para evitar efeitos colaterais por superexpressão proteica.</p>

        <h3 class="text-xl font-bold text-text-primary">2. Resultados Iniciais do Ensaio Clínico</h3>
        <p>Os dados de segurança do estudo de fase 1/2 demonstraram tolerabilidade favorável com uso de imunossupressão profilática contínua com corticoides. Biópsias musculares de acompanhamento colhidas 12 semanas após a infusão confirmaram a presença da calpaína-3 funcional na linha Z do sarcômero.</p>

        <h3 class="text-xl font-bold text-text-primary">3. Importância da Tipagem Genética no Brasil</h3>
        <p>Historicamente, a LGMD-R1 é uma das formas de cintura mais frequentes no Brasil. A ACADIM reforça que pacientes com fraqueza cintural progressiva devem buscar painéis de sequenciamento de nova geração (NGS) específicos para cinturas para determinar o gene causal exato.</p>
      </section>
    `,
  },
  {
    slug: 'fshd-terapias-bloqueio-dux4-panorama-2026',
    title: 'Inibidores de DUX4 na Distrofia Facioescapuloumeral (FSHD): Atualizações Clínicas',
    excerpt: 'Análise editorial da ACADIM sobre os medicamentos sintéticos e de silenciamento de RNA desenhados para impedir a toxicidade da proteína DUX4 na FSHD1 e FSHD2.',
    category: 'Avanços Científicos',
    publishedAt: '2026-06-28',
    updatedAt: '2026-07-01',
    readTime: '6 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'FSHD Society & NINDS / National Institutes of Health',
      title: 'Targeting DUX4 expression in Facioscapulohumeral Muscular Dystrophy',
      url: 'https://www.fshdsociety.org/research',
      originalPublishedAt: '2026-06-20'
    },
    coverImage: '/assets/hero-bg-2.jpg',
    imageAlt: 'Ilustração científica mostrando filamentos musculares afetados pela superexpressão de DUX4',
    tags: ['FSHD', 'DUX4', 'Facioescapuloumeral', 'Pesquisa', 'Silenciamento Gênico'],
    relatedDiseaseSlug: 'fshd-facioescapuloumeral',
    content: `
      <section class="space-y-6">
        <p class="lead">A Distrofia Muscular Facioescapuloumeral (FSHD) possui um mecanismo fisiopatológico único: decorre da superexpressão aberrante da proteína embrionária tóxica <strong>DUX4</strong> no músculo esquelético adulto, ativada pela hipometilação da região repetitiva D4Z4 no cromossomo 4.</p>

        <h3 class="text-xl font-bold text-text-primary">Estratégias Terapêuticas em Estudo</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Oligonucleotídeos Antissemânticos (ASOs):</strong> Moléculas projetadas para se ligar ao mRNA do DUX4 e promover sua degradação celular antes da tradução proteica.</li>
          <li><strong>Inibidores de Quinases Pequenas:</strong> Compostos orais que reforçam a repressão epigenética da região D4Z4.</li>
        </ul>

        <h3 class="text-xl font-bold text-text-primary">Manejo Multidisciplinar Recomendado</h3>
        <p>Enquanto as terapias direcionadas ao DUX4 avançam nas fases decisivas de aprovação regulatória na FDA e ANVISA, pacientes com FSHD devem manter acompanhamento fisioterapêutico para escápula alada, avaliação auditiva regular e acompanhamento pneumológico preventivo.</p>
      </section>
    `,
  },
  {
    slug: 'manejo-cardiovascular-distrofinopatias-guideline-2026',
    title: 'Diretrizes Clínicas 2026 para Monitoramento Cardíaco nas Distrofinopatias (DMD e DMB)',
    excerpt: 'Consenso das associações de cardiologia pediátrica e neurologia sobre ressonância magnética cardíaca precoce e uso de IECA/BRAs preventivos antes da queda da fração de ejeção.',
    category: 'Diretrizes Clínicas & Manejo',
    publishedAt: '2026-07-05',
    readTime: '6 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'American Heart Association (AHA) & Sociedade Brasileira de Cardiologia (SBC)',
      title: 'Cardiovascular management of patients with Duchenne and Becker muscular dystrophy',
      url: 'https://www.ahajournals.org',
      originalPublishedAt: '2026-06-15'
    },
    coverImage: '/assets/community-bg.jpg',
    imageAlt: 'Médico cardiologista analisando ecocardiograma e ressonância magnética cardíaca',
    tags: ['Cardiologia', 'Duchenne', 'Becker', 'Manejo Clínico', 'SUS'],
    relatedDiseaseSlug: 'duchenne',
    content: `
      <section class="space-y-6">
        <p class="lead">A cardiomiopatia dilatada fibrosante é uma complicação bem documentada e previsível tanto na Distrofia Muscular de Duchenne (DMD) quanto na Distrofia Muscular de Becker (DMB). As novas diretrizes internacionais de 2026 estabelecem condutas profiláticas mais precoces.</p>

        <h3 class="text-xl font-bold text-text-primary">Principais Recomendações da Diretriz</h3>
        <ol class="list-decimal pl-5 space-y-2">
          <li><strong>Exame de Imagem Basal aos 6 Anos:</strong> Todo paciente com mutação no gene DMD deve realizar ecocardiograma transtorácico ou ressonância magnética cardíaca ao diagnóstico ou aos 6 anos de idade.</li>
          <li><strong>Introdução Profilática de IECAs/BRAs:</strong> O uso de inibidores da ECA (como enalapril ou lisinopril) ou bloqueadores dos receptores de angiotensina (como losartana) é indicado profilaticamente por volta dos 10 anos de idade, mesmo na presença de fração de ejeção normal.</li>
          <li><strong>Monitoramento Holter 24h Anual:</strong> Recomendado a partir dos 10 anos para rastreio de arritmias ventriculares ou supraventriculares assintomáticas.</li>
        </ol>

        <p class="text-xs text-slate-500 italic border-l-2 border-slate-300 pl-3">
          Compilado pelo Núcleo Editorial ACADIM para orientação de famílias e profissionais de saúde. Não substitui avaliação presencial por cardiologista especializado em doenças neuromusculares.
        </p>
      </section>
    `,
  },
  {
    slug: 'distrofia-miotonica-steinert-cuidados-anestesicos-2026',
    title: 'Alerta de Segurança Anestésica na Distrofia Miotônica do Tipo 1 (Steinert)',
    excerpt: 'Manual de segurança do paciente para procedimentos cirúrgicos em pessoas com DM1, destacando os riscos de bloqueadores neuromusculares despolarizantes e sedativos intensos.',
    category: 'Diretrizes Clínicas & Manejo',
    publishedAt: '2026-06-02',
    readTime: '5 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'Motonic Dystrophy Foundation (MDF) & Sociedade Brasileira de Anestesiologia',
      title: 'Practical Guidelines for Anesthesia in Myotonic Dystrophy Type 1 and Type 2',
      url: 'https://www.myotonic.org/anesthesia-guidelines',
      originalPublishedAt: '2026-05-18'
    },
    coverImage: '/assets/hero-bg-3.jpg',
    imageAlt: 'Cartão de emergência médica e alerta anestésico para distrofia miotônica',
    tags: ['Steinert', 'DM1', 'Anestesia', 'Segurança do Paciente', 'Alerta Médico'],
    relatedDiseaseSlug: 'dm1-steinert',
    content: `
      <section class="space-y-6">
        <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
          <h3 class="text-sm font-black uppercase text-amber-800 tracking-wider mb-1">Alerta Médico de Alta Prioridade</h3>
          <p class="text-sm text-slate-700 leading-relaxed font-medium">
            Pacientes com Distrofia Miotônica do Tipo 1 (DM1 / Steinert) possuem hipersensibilidade grave a diversos agentes anestésicos e miorrelaxantes. A succinilcolina está formalmente contraindicada pelo risco de crises miotônicas generalizadas e hipercalemia fatal.
          </p>
        </div>

        <h3 class="text-xl font-bold text-text-primary">Diretrizes Pré-Operatórias Essenciais</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Cartão de Alerta de Anestesia:</strong> Todo paciente com DM1 deve portar na carteira a declaração de alerta médico indicando a doença.</li>
          <li><strong>Avaliação Cardíaca Prévia:</strong> Devido ao risco de bloqueio atrioventricular (BAV) total súbito, o eletrocardiograma (ECG) recente com intervalo PR é obrigatório antes de qualquer sedação.</li>
          <li><strong>Monitoramento de Bloqueio Neuromuscular:</strong> Uso exclusivo de bloqueadores não despolarizantes com reversão completa por Sugammadex sob monitoramento por TOF (Train-Of-Four).</li>
        </ul>
      </section>
    `,
  },
  {
    slug: 'anvisa-aprova-nova-diretriz-terapias-avancadas-2026',
    title: 'ANVISA Atualiza Resolução de Terapias Avançadas para Doenças Raras no Brasil',
    excerpt: 'Nova RDC simplifica os trâmites de análise para produtos de terapia gênica e biotecnologia voltados a enfermidades neuromusculares de alta gravidade.',
    category: 'Aprovações Terapêuticas',
    publishedAt: '2026-05-25',
    readTime: '4 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'Agência Nacional de Vigilância Sanitária (ANVISA)',
      title: 'Resolução RDC de Produtos de Terapia Avançada no Brasil',
      url: 'https://www.gov.br/anvisa',
      originalPublishedAt: '2026-05-20'
    },
    coverImage: '/assets/hero-bg-4.jpg',
    imageAlt: 'Edifício sede da ANVISA em Brasília',
    tags: ['ANVISA', 'Regulamentação', 'Terapia Gênica', 'Doenças Raras', 'Brasil'],
    content: `
      <section class="space-y-6">
        <p class="lead">A Agência Nacional de Vigilância Sanitária (ANVISA) publicou a atualização da resolução normativa que rege o registro, monitoramento de pós-comercialização e ensaios clínicos com Produtos de Terapia Avançada (PTA) no Brasil.</p>

        <h3 class="text-xl font-bold text-text-primary">Impactos para a Comunidade de Distrofias</h3>
        <p>A medida estabelece priorização de análise para terapias com designação de 'medicamento órfão', encurtando os prazos regulatórios e alinhando os padrões brasileiros de controle de qualidade e biossegurança às agências FDA (EUA) e EMA (Europa).</p>
      </section>
    `,
  },
  {
    slug: 'diagnostico-precoce-triagem-neonatal-dmd-2026',
    title: 'Inclusão da Creatina Quinase (CK) no Teste do Pezinho: Projetos de Lei e Avanços',
    excerpt: 'Análise da ACADIM sobre a mobilização nacional para inserção da dosagem de CK na triagem neonatal, permitindo intervenção fisioterapêutica e molecular precoce.',
    category: 'Direitos no SUS',
    publishedAt: '2026-05-10',
    readTime: '5 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'Câmara dos Deputados & Sociedade Brasileira de Triagem Neonatal',
      title: 'Projetos de Lei para Ampliação da Triagem Neonatal de Doenças Neuromusculares',
      url: 'https://www.camara.leg.br',
      originalPublishedAt: '2026-05-02'
    },
    coverImage: '/assets/hero-bg-2.jpg',
    imageAlt: 'Bebê realizando teste do pezinho em unidade básica de saúde',
    tags: ['Teste do Pezinho', 'Diagnóstico Precoce', 'Duchenne', 'SUS', 'Legislação'],
    relatedDiseaseSlug: 'duchenne',
    content: `
      <section class="space-y-6">
        <p class="lead">O diagnóstico médio da Distrofia Muscular de Duchenne no Brasil ainda ocorre com atraso inaceitável, por volta dos 4 a 5 anos de idade, quando a criança já apresenta sintomas motores evidentes como o Sinal de Gowers e hipertrofia de panturrilhas.</p>

        <h3 class="text-xl font-bold text-text-primary">Por Que a Triagem Neonatal por CK Modifica o Prognóstico?</h3>
        <p>Valores de Creatina Quinase (CK) em recém-nascidos afetados por Duchenne apresentam elevações massivas (geralmente acima de 2.000 a 10.000 U/L). A identificação ao nascimento permite o agendamento imediato do sequenciamento genético e a introdução precoce de acompanhamento multidisciplinar antes da degeneração muscular extensa.</p>
      </section>
    `,
  },
  {
    slug: 'conitec-incorpora-novos-equipamentos-ventilacao-sus-2026',
    title: 'CONITEC Aprova Atualização da Linha de Cuidado para Ventilação Não Invasiva (VNI)',
    excerpt: 'Relatório de recomendação favorável garante novos modelos de BiPAP com tecnologia de alívio de pico e assistentes de tosse (Cough Assist) para pacientes neuromusculares.',
    category: 'Direitos no SUS',
    publishedAt: '2026-04-18',
    readTime: '5 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'Comissão Nacional de Incorporação de Tecnologias no Sistema Único de Saúde (CONITEC)',
      title: 'Relatório de Recomendação de Dispositivos de Assistência Ventilatória no SUS',
      url: 'https://www.gov.br/conitec',
      originalPublishedAt: '2026-04-10'
    },
    coverImage: '/assets/community-bg.jpg',
    imageAlt: 'Aparelho de ventilação não invasiva BiPAP e máscara facial',
    tags: ['CONITEC', 'VNI', 'BiPAP', 'Cough Assist', 'SUS', 'Fisioterapia Respiratória'],
    content: `
      <section class="space-y-6">
        <p class="lead">A CONITEC emitiu parecer de recomendação favorável para a atualização dos aparelhos de Ventilação Não Invasiva (VNI) e Insuflador-Exsuflador Mecânico (Cough Assist) fornecidos pelo Sistema Único de Saúde aos Centros Especializados em Reabilitação (CER).</p>

        <h3 class="text-xl font-bold text-text-primary">Impactos na Qualidade de Vida e Prevenção de Internações</h3>
        <p>A fisioterapia respiratória aliada à ventilação não invasiva noturna previne a hipoventilação crônica, a deformidade da caixa torácica e as internações recorrentes por infecções pulmonares agudas. A ACADIM apoiará as famílias cadastradas na formalização dos requerimentos junto aos polos de distribuição do Rio de Janeiro.</p>
      </section>
    `,
  },
  {
    slug: 'historia-superacao-cidadania-rio-janeiro-2026',
    title: 'Acessibilidade Urbana e Cidadania: A Trajetória da Família Silva no Rio de Janeiro',
    excerpt: 'História inspiradora de acolhimento na ACADIM, conquista de órteses sob medida e adaptação escolar de um jovem de 14 anos com Distrofia das Cinturas.',
    category: 'Histórias de Vida',
    publishedAt: '2026-04-05',
    readTime: '4 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    coverImage: '/assets/hero-bg.jpg',
    imageAlt: 'Jovem cadeirante sorrindo ao lado de sua família na sede da ACADIM',
    tags: ['Histórias de Vida', 'Cidadania', 'Inclusão Escolar', 'Acolhimento', 'Rio de Janeiro'],
    content: `
      <section class="space-y-6">
        <p class="lead">Quando Lucas foi diagnosticado com Distrofia Muscular das Cinturas aos 9 anos na Zona Norte do Rio de Janeiro, a família Silva enfrentou o medo da desinformação e a falta de acessibilidade nas ruas do bairro.</p>

        <h3 class="text-xl font-bold text-text-primary">A Chegada à ACADIM e a Transformação</h3>
        <p>Através dos grupos de apoio da ACADIM, a mãe de Lucas recebeu orientação jurídica para garantir o transporte adaptado escolar e o fornecimento de cadeira motorizada via SUS. Hoje aos 14 anos, Lucas é destaque no campeonato regional de bocha adaptada e sonha em cursar ciência da computação.</p>
      </section>
    `,
  },
  {
    slug: 'emery-dreifuss-laminopatias-rastreio-arritmias-2026',
    title: 'Laminopatias e Distrofia de Emery-Dreifuss: A Importância do Marca-Passo Protetor',
    excerpt: 'Estudo em cardiologia neuromuscular destaca a necessidade de implante precoce de CDI/marca-passo em pacientes com mutações no gene LMNA devido ao risco de morte súbita por BAV.',
    category: 'Diretrizes Clínicas & Manejo',
    publishedAt: '2026-03-22',
    readTime: '6 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'Journal of the American College of Cardiology (JACC)',
      title: 'Cardiac laminopathies and Emery-Dreifuss Muscular Dystrophy management',
      url: 'https://www.jacc.org',
      originalPublishedAt: '2026-03-10'
    },
    coverImage: '/assets/hero-bg-3.jpg',
    imageAlt: 'Ilustração médica do coração destacando o sistema de condução elétrica e laminopatias',
    tags: ['Emery-Dreifuss', 'LMNA', 'Cardiologia', 'Marca-passo', 'Arritmias'],
    relatedDiseaseSlug: 'emery-dreifuss',
    content: `
      <section class="space-y-6">
        <p class="lead">A Distrofia Muscular de Emery-Dreifuss (EDMD) autossômica dominante é causada por mutações no gene <em>LMNA</em>, que codifica as laminas A e C da envoltória nuclear. Diferente de outras distrofias, a alteração cardíaca com distúrbios de condução atrioventricular frequentemente precede ou independe da gravidade do comprometimento motor.</p>

        <h3 class="text-xl font-bold text-text-primary">Indicação Protetora do Cardioversor Desfibrilador Implantável (CDI)</h3>
        <p>Diretrizes de 2026 recomendam indicação precoce de marcapasso ou CDI em pacientes com mutação confirmatória no gene <em>LMNA</em> assim que detectados atrasos de condução no Holter 24h, prevenindo episódios graves de assistolia.</p>
      </section>
    `,
  },
  {
    slug: 'fda-concede-designacao-fast-track-terapia-fshd-2026',
    title: 'FDA Concede Designação Fast Track para Novo Tratamento de FSHD',
    excerpt: 'Agência regulatória norte-americana acelera trâmite de análise de molécula que inibe a transcrição do DUX4 em modelos humanos de miócitos.',
    category: 'Aprovações Terapêuticas',
    publishedAt: '2026-03-15',
    readTime: '4 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'U.S. Food and Drug Administration (FDA) & Drug Information Release',
      title: 'Fast Track designation granted for DUX4 inhibitor in FSHD',
      url: 'https://www.fda.gov',
      originalPublishedAt: '2026-03-08'
    },
    coverImage: '/assets/hero-bg-4.jpg',
    imageAlt: 'Frascos de medicamento de precisão em esteira analítica regulatória',
    tags: ['FDA', 'FSHD', 'DUX4', 'Fast Track', 'Aprovação Regulatório'],
    relatedDiseaseSlug: 'fshd-facioescapuloumeral',
    content: `
      <section class="space-y-6">
        <p class="lead">A agência regulatória dos EUA (FDA) concedeu a chancela de <em>Fast Track</em> para uma nova molécula oral desenvolvida para bloquear o fator de transcrição DUX4 na Distrofia Facioescapuloumeral.</p>
        <p>A designação acelera o processo de submissão e revisão contínua dos dados do ensaio clínico pivotal de fase 3, reduzindo o tempo necessário para disponibilização no mercado global.</p>
      </section>
    `,
  },
  {
    slug: 'fisioterapia-motora-alongamentos-contraturas-guias-2026',
    title: 'Protocolo Institucional de Fisioterapia para Prevenção de Contraturas nas Distrofias',
    excerpt: 'Orientações práticas da equipe de fisioterapia da ACADIM sobre posicionamento funcional, órteses noturnas e alongamentos diários suaves para manutenção de amplitude articular.',
    category: 'Diretrizes Clínicas & Manejo',
    publishedAt: '2026-03-01',
    readTime: '5 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    coverImage: '/assets/community-bg.jpg',
    imageAlt: 'Fisioterapeuta realizando alongamento passivo suave do pé de jovem paciente',
    tags: ['Fisioterapia', 'Alongamento', 'Contraturas', 'Manejo', 'Reabilitação'],
    content: `
      <section class="space-y-6">
        <p class="lead">Nas distrofias musculares, o desequilíbrio entre grupos musculares agonistas e antagonistas aliado à perda de deambulação favorece o surgimento de contraturas em flexão de joelhos, quadris e equinismo de tornozelos. Este guia resume o posicionamento funcional recomendado.</p>

        <h3 class="text-xl font-bold text-text-primary">Regras Ouro do Alongamento Neuromuscular</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Nunca Forçar Dor Intensa:</strong> Alongamentos devem ser lentos, sustentados por 30 a 60 segundos, sem dor aguda ou microtrauma tecidual.</li>
          <li><strong>Uso Sistemático de Órteses Surpodálicas (AFO) Noturnas:</strong> Mantêm o tornozelo em posição neutra de 90° durante o sono, retardando o encurtamento do tendão de Aquiles.</li>
        </ul>
      </section>
    `,
  },
  {
    slug: 'opmd-distrofia-oculofaringea-dificuldade-degluticao-2026',
    title: 'Manejo da Disfagia e Ptose na Distrofia Muscular Oculofaríngea (OPMD)',
    excerpt: 'Diretrizes de fonoterapia e nutrição adaptada para prevenir aspiração brônquica e manter o aporte calórico em adultos afetados por OPMD.',
    category: 'Diretrizes Clínicas & Manejo',
    publishedAt: '2026-02-18',
    readTime: '5 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'Orphanet & World Muscle Society (WMS)',
      title: 'Oculopharyngeal Muscular Dystrophy management and swallowing therapy',
      url: 'https://www.orpha.net',
      originalPublishedAt: '2026-02-05'
    },
    coverImage: '/assets/hero-bg-2.jpg',
    imageAlt: 'Fonoaudióloga realizando avaliação de deglutição em paciente adulto',
    tags: ['OPMD', 'Oculofaríngea', 'Disfagia', 'Fonoaudiologia', 'Nutrição'],
    relatedDiseaseSlug: 'opmd-oculofaringea',
    content: `
      <section class="space-y-6">
        <p class="lead">A Distrofia Muscular Oculofaríngea (OPMD) é uma condição genética autossômica dominante de início tardio (geralmente após os 40-50 anos), caracterizada por ptose palpebral bilateral e disfagia progressiva para sólidos e líquidos.</p>

        <h3 class="text-xl font-bold text-text-primary">Estratégias de Proteção da Via Aérea</h3>
        <p>O acompanhamento por fonoaudiólogo especialista em disfagia neurogênica permite ajustar a consistência dos alimentos (espessamento de líquidos), orientar manobras posturais de deglutição e indicar o momento oportuno para miotomia cricofaríngea ou gastrostomia preventiva quando o risco de aspiração for elevado.</p>
      </section>
    `,
  },
  {
    slug: 'nutricao-suplementacao-distrofias-evidencias-2026',
    title: 'Nutrição e Saúde Óssea nas Distrofias: Vitamina D, Cálcio e Controle Ponderal',
    excerpt: 'Recomendações nutricionais baseadas em evidências para combate à osteopenia induzida por corticoides e prevenção da obesidade secundária à limitação motora.',
    category: 'Diretrizes Clínicas & Manejo',
    publishedAt: '2026-02-02',
    readTime: '6 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'TREAT-NMD Neuromuscular Network',
      title: 'Nutritional Care and Bone Health Guidelines in Muscular Dystrophies',
      url: 'https://treat-nmd.org',
      originalPublishedAt: '2026-01-20'
    },
    coverImage: '/assets/hero-bg-3.jpg',
    imageAlt: 'Prato saudável com alimentos nutritivos balanceados para dieta neuromuscular',
    tags: ['Nutrição', 'Vitamina D', 'Corticoides', 'Saúde Óssea', 'Manejo'],
    content: `
      <section class="space-y-6">
        <p class="lead">O suporte nutricional adequado em doenças neuromusculares deve equilibrar dois extremos: o ganho excessivo de peso (que sobrecarrega a musculatura enfraquecida e dificulta as transferências) e a perda descontrolada de massa magra por disfagia.</p>

        <h3 class="text-xl font-bold text-text-primary">Proteção da Densidade Mineral Óssea</h3>
        <p>Pacientes em uso crônico de deflazacorte ou prednisona devem monitorar anualmente a densidade óssea por DEXA. A suplementação diária de Vitamina D3 e Cálcio deve ser ajustada por dosagens séricas periódicas para prevenir fraturas vertebrais assintomáticas.</p>
      </section>
    `,
  },
  {
    slug: 'ema-emite-parecer-favoravel-terapia-exon-skipping-2026',
    title: 'EMA Emite Recomendação de Aprovação Terapêutica na Europa',
    excerpt: 'Agência Europeia de Medicamentos aprova uso de nova classe de peptídeos que elevam em 5 vezes a eficácia do salto de éxon no músculo esquelético.',
    category: 'Aprovações Terapêuticas',
    publishedAt: '2026-01-20',
    readTime: '4 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'European Medicines Agency (EMA)',
      title: 'CHMP positive opinion on peptide-conjugated exon skipping oligonucleotide',
      url: 'https://www.ema.europa.eu',
      originalPublishedAt: '2026-01-12'
    },
    coverImage: '/assets/hero-bg-4.jpg',
    imageAlt: 'Bandeiras da União Europeia em frente ao prédio da EMA em Amsterdã',
    tags: ['EMA', 'Europa', 'Exon Skipping', 'Duchenne', 'Regulamentação'],
    relatedDiseaseSlug: 'duchenne',
    content: `
      <section class="space-y-6">
        <p class="lead">O Comitê de Medicamentos para Uso Humano (CHMP) da Agência Europeia de Medicamentos (EMA) recomendou a autorização de introdução no mercado europeu de uma molécula inovadora ligada a um peptídeo penetrador de células (PPMO).</p>
        <p>A nova tecnologia soluciona a baixa captação muscular dos oligonucleotídeos de primeira geração, permitindo doses menores com maior eficácia terapêutica.</p>
      </section>
    `,
  },
  {
    slug: 'cmd-merosina-negativa-lama2-desenvolvimentos-2026',
    title: 'Avanços em Modelos Terapêuticos para a Distrofia Congênita LAMA2 (MDC1A)',
    excerpt: 'Síntese das pesquisas de terapia gênica com vetores bicassete e proteínas de fusão para restauração da lâmina basal celular na distrofia congelita merosina-negativa.',
    category: 'Pesquisa & Ensaios Clínicos',
    publishedAt: '2026-01-10',
    readTime: '5 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'Cure CMD & NIH Genetic and Rare Diseases Information Center (GARD)',
      title: 'LAMA2-related congenital muscular dystrophy research updates',
      url: 'https://www.curecmd.org',
      originalPublishedAt: '2025-12-28'
    },
    coverImage: '/assets/hero-bg.jpg',
    imageAlt: 'Microscopia de fluorescência demonstrando a integridade da lâmina basal celular',
    tags: ['LAMA2', 'CMD', 'Congênita', 'Merosina', 'Pesquisa'],
    relatedDiseaseSlug: 'cmd-lama2-merosina',
    content: `
      <section class="space-y-6">
        <p class="lead">A Distrofia Muscular Congênita por deficiência de merosina (LAMA2-RD / MDC1A) é caracterizada por hipotonia grave ao nascimento, retardo nos marcos motores e fragilidade da membrana basal da fibra muscular por ausência da cadeia alfa-2 da laminina.</p>
        <p>Devido ao grande tamanho do gene LAMA2, pesquisadores desenvolveram miniproteínas de fusão e vetores sintéticos duplos que reorganizam a matriz extracelular e evitam a apoptose celular precoce.</p>
      </section>
    `,
  },
  {
    slug: 'becker-dmb-diferencas-duchenne-manejo-2026',
    title: 'Distrofia Muscular de Becker (DMB): Diagnóstico Diferencial e Preservação da Função',
    excerpt: 'Estudo esclarece por que as mutações que preservam a matriz de leitura no gene DMD geram uma forma mais branda e por que o monitoramento cardíaco é essencial.',
    category: 'Diretrizes Clínicas & Manejo',
    publishedAt: '2025-12-15',
    readTime: '5 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'GeneReviews & NINDS / NIH',
      title: 'Dystrophinopathies: Duchenne and Becker Muscular Dystrophy Overview',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1119/',
      originalPublishedAt: '2025-12-01'
    },
    coverImage: '/assets/community-bg.jpg',
    imageAlt: 'Atleta adulto correndo com prótese leve demonstrando funcionalidade mantida',
    tags: ['Becker', 'DMB', 'Distrofina', 'Diagnóstico Diferencial', 'Cardiologia'],
    relatedDiseaseSlug: 'becker',
    content: `
      <section class="space-y-6">
        <p class="lead">A Distrofia Muscular de Becker (DMB) é uma distrofinopatia de transmissão ligada ao X causada por mutações no gene DMD que mantêm a matriz de leitura do RNA (in-frame), resultando na produção de distrofina parcialmente funcional porém sinteticamente encurtada ou em menor quantidade.</p>
        <h3 class="text-xl font-bold text-text-primary">Evolução Clínica e Cuidados com o Coração</h3>
        <p>Diferente de Duchenne, a deambulação em Becker frequentemente se mantém preservada até a vida adulta avançada. Contudo, o grau de fraqueza muscular esquelética nem sempre se correlaciona com o envolvimento cardíaco: alguns pacientes com sintomas motores leves desenvolvem cardiomiopatia dilatada grave que requer monitoramento preventivo regular.</p>
      </section>
    `,
  },
  {
    slug: 'col6-ultrich-bethlem-hipermobilidade-contraturas-2026',
    title: 'Distrofias do Colágeno VI: Espectro entre Ullrich e Bethlem',
    excerpt: 'Síntese das características clínicas da hiperlaxidão distal combinada a contraturas proximais nas condições causadas por mutações nos genes COL6A1, COL6A2 e COL6A3.',
    category: 'Avanços Científicos',
    publishedAt: '2025-12-01',
    readTime: '5 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'Orphanet & Cure CMD',
      title: 'Collagen VI-related dystrophies: Ullrich CMD and Bethlem Myopathy',
      url: 'https://www.orpha.net',
      originalPublishedAt: '2025-11-20'
    },
    coverImage: '/assets/hero-bg-2.jpg',
    imageAlt: 'Exame clínico de hiperflexibilidade nas articulações dos dedos',
    tags: ['COL6', 'Ullrich', 'Bethlem', 'Colágeno VI', 'Congênita'],
    relatedDiseaseSlug: 'cmd-col6-ullrich-bethlem',
    content: `
      <section class="space-y-6">
        <p class="lead">As distrofias relacionadas ao Colágeno VI variam em um espectro contínuo que vai da forma grave congênita (Distrofia Muscular Congênita de Ullrich) à forma intermediária/amena (Miopia de Bethlem).</p>
        <h3 class="text-xl font-bold text-text-primary">Sinal Clínico Característico</h3>
        <p>A coexistência paradoxal de contraturas articulares nas grandes articulações proximais (como cotovelos e ombros) combinada à hiperlaxidão/hipermobilidade acentuada nas pequenas articulações distais (mãos e pés) é a marca registrada do envolvimento do colágeno tipo VI.</p>
      </section>
    `,
  },
  {
    slug: 'bpc-loas-beneficio-assistencial-distrofias-guia-2026',
    title: 'BPC/LOAS no INSS para Pessoas com Distrofia Muscular: Requisitos e Laudos',
    excerpt: 'Como comprovar o impedimento de longo prazo e a vulnerabilidade socioeconômica para concessão do Benefício de Prestação Continuada sem entraves no INSS.',
    category: 'Direitos no SUS',
    publishedAt: '2025-11-15',
    readTime: '6 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'Instituto Nacional do Seguro Social (INSS) & Ministério do Desenvolvimento Social',
      title: 'Manual de Avaliação Biopsicossocial do BPC/LOAS',
      url: 'https://www.gov.br/inss',
      originalPublishedAt: '2025-11-01'
    },
    coverImage: '/assets/hero-bg-3.jpg',
    imageAlt: 'Documentos do INSS e formulário do CadÚnico sobre mesa de atendimento',
    tags: ['BPC', 'LOAS', 'INSS', 'Direitos', 'Cidadania'],
    content: `
      <section class="space-y-6">
        <p class="lead">O Benefício de Prestação Continuada (BPC/LOAS) garante um salário mínimo mensal à pessoa com deficiência de qualquer idade que comprove incapacidade de longo prazo (mínimo 2 anos) e renda familiar per capita inferior a 1/4 do salário mínimo (ou 1/2 salário mínimo mediante análise de despesas com saúde).</p>

        <h3 class="text-xl font-bold text-text-primary">A Avaliação Biopsicossocial do INSS</h3>
        <p>A concessão depende de duas perícias no INSS: a médica (que avalia as limitações corporais) e a social (que analisa as barreiras do ambiente e o orçamento familiar). A ACADIM auxilia na organização do prontuário médico para demonstrar o impacto das despesas com fisioterapia, fraldas e medicamentos não padronizados no orçamento da família.</p>
      </section>
    `,
  },
  {
    slug: 'isencao-ipva-icpi-compra-veiculo-pcd-rj-2026',
    title: 'Guia Completo de Isenção de IPVA e ICMS na Compra de Veículos PCD no RJ',
    excerpt: 'Passo a passo atualizado com os limites de valor de tabela FIPE e laudos necessários junto à SEFAZ-RJ e à Receita Federal para obtenção de isenção fiscal.',
    category: 'Direitos no SUS',
    publishedAt: '2025-10-30',
    readTime: '6 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'Secretaria de Estado de Fazenda do Rio de Janeiro (SEFAZ-RJ) & Receita Federal',
      title: 'Manual de Isenção Fiscal para Pessoas com Deficiência no Estado do RJ',
      url: 'http://www.fazenda.rj.gov.br',
      originalPublishedAt: '2025-10-15'
    },
    coverImage: '/assets/hero-bg-4.jpg',
    imageAlt: 'Veículo adaptado com rampa de acesso para cadeira de rodas',
    tags: ['IPVA', 'ICMS', 'Isenção Fiscal', 'PCD', 'Rio de Janeiro'],
    content: `
      <section class="space-y-6">
        <p class="lead">Pessoas com distrofia muscular (ou seus representantes legais, nos casos de crianças e não condutores) têm direito à isenção de IPI, ICMS e IPVA na aquisição de veículos automotores adaptados ou de transporte exclusivo.</p>
        <p>O processo exige a emissão prévia da carteira de habilitação especial (para condutores) ou laudo de junta médica credenciada pelo DETRAN-RJ comprovando a deficiência física severa ou limitação de mobilidade.</p>
      </section>
    `,
  },
  {
    slug: 'tecnologia-assistiva-comunicacao-alternativa-2026',
    title: 'Tecnologia Assistiva e Comunicação Alternativa (CAA) nas Fases Avançadas',
    excerpt: 'Como acionadores de baixo esforço, leitor ocular (Eye Tracking) e softwares gratuitos garantem autonomia e expressão a pessoas com limitação motora acentuada.',
    category: 'Avanços Científicos',
    publishedAt: '2025-10-10',
    readTime: '5 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'ISAAC Brasil & Centro de Tecnologia Assistiva',
      title: 'Recursos de Comunicação Alternativa e Ampliada em Doenças Neuromusculares',
      url: 'https://isaacbrasil.org.br',
      originalPublishedAt: '2025-09-28'
    },
    coverImage: '/assets/hero-bg.jpg',
    imageAlt: 'Jovem utilizando sistema de controle por rastreamento ocular na tela do computador',
    tags: ['Tecnologia Assistiva', 'Comunicação Alternativa', 'Eye Tracking', 'Autonomia'],
    content: `
      <section class="space-y-6">
        <p class="lead">A tecnologia assistiva permite superar barreiras de movimento muscular nos membros superiores. Dispositivos de rastreamento ocular (eye trackers) transformam o movimento dos olhos em cliques de mouse e digitação virtual.</p>
        <p>A ACADIM promove oficinas de capacitação para famílias e educadores no Rio de Janeiro sobre softwares livres de pranchas de comunicação dinâmica.</p>
      </section>
    `,
  },
  {
    slug: 'vacinacao-protecao-infeccoes-respiratorias-distrofia-2026',
    title: 'Calendário Especial de Vacinação para Pessoas com Distrofia Muscular (CRIE)',
    excerpt: 'Esquema imunológico recomendado nos Centros de Referência para Imunobiológicos Especiais (CRIE) do SUS para proteção contra Influenza, Pneumococo e VSR.',
    category: 'Diretrizes Clínicas & Manejo',
    publishedAt: '2025-09-20',
    readTime: '5 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'Ministério da Saúde & SBIm - Sociedade Brasileira de Imunizações',
      title: 'Manual dos Centros de Referência para Imunobiológicos Especiais (CRIE)',
      url: 'https://www.gov.br/saude',
      originalPublishedAt: '2025-09-10'
    },
    coverImage: '/assets/community-bg.jpg',
    imageAlt: 'Profissional de enfermagem preparando vacina especial no CRIE',
    tags: ['Vacinação', 'CRIE', 'Imunização', 'Pneumonia', 'Prevenção'],
    content: `
      <section class="space-y-6">
        <p class="lead">Infecções respiratórias virais ou bacterianas representam a principal causa de exacerbação e complicação aguda nas distrofias musculares. Pacientes cadastrados no CRIE do SUS têm acesso gratuito a esquemas vacinais ampliados.</p>

        <h3 class="text-xl font-bold text-text-primary">Vacinas de Alta Relevância no CRIE</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Pneumocócica Conjugada (VPC13 / VPP23):</strong> Proteção contra meningite e pneumonias bacterianas graves.</li>
          <li><strong>Influenza de Alta Dose / Anual:</strong> Reduz internações por gripe.</li>
          <li><strong>Anticorpo Monoclonal contra VSR:</strong> Indicado em bebês e crianças com fragilidade respiratória.</li>
        </ul>
      </section>
    `,
  },
  {
    slug: 'escola-inclusiva-adaptacoes-pedagogicas-distrofia-2026',
    title: 'Guia de Inclusão Escolar: Adaptações de Mobiliário e Escrita para Alunos com Distrofia',
    excerpt: 'Orientação para escolas da rede pública e privada sobre o direito a profissional de apoio escolar (mediador) e adaptação de material pedagógico.',
    category: 'Direitos no SUS',
    publishedAt: '2025-09-05',
    readTime: '5 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'Ministério da Educação (MEC) & Lei Brasileira de Inclusão (LBI)',
      title: 'Diretrizes Nacionais para a Educação Especial na Educação Básica',
      url: 'https://www.gov.br/mec',
      originalPublishedAt: '2025-08-25'
    },
    coverImage: '/assets/hero-bg-2.jpg',
    imageAlt: 'Estudante em mesa escolar adaptada utilizando suporte de antebraço para escrita',
    tags: ['Inclusão Escolar', 'MEC', 'LBI', 'Adaptação Pedagógica', 'Cidadania'],
    content: `
      <section class="space-y-6">
        <p class="lead">A Lei Brasileira de Inclusão (Lei nº 13.146/2015) veda a cobrança de taxa extra por escolas privadas para atendimento a estudantes com deficiência e assegura a oferta de profissional de apoio escolar (mediador) sem custo adicional às famílias.</p>
        <p>A ACADIM elaborou uma cartilha com dicas simples de adaptação: uso de engrossadores de lápis, pranchas inclinadas para leitura, permissão de digitação em tablet para avaliações e concessão de tempo adicional em provas presenciais.</p>
      </section>
    `,
  },
  {
    slug: 'atividade-fisica-adaptada-exercicios-subaquaticos-2026',
    title: 'Hidroterapia e Atividade Subaquática Assistida nas Doenças Neuromusculares',
    excerpt: 'Por que os exercícios na água aquecida proporcionam ganho de mobilidade sem a sobrecarga gravitacional danosa às fibras musculares distróficas.',
    category: 'Diretrizes Clínicas & Manejo',
    publishedAt: '2025-08-20',
    readTime: '5 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'World Physiotherapy & Associação Brasileira de Fisioterapia Neurofuncional',
      title: 'Hydrotherapy and aquatic exercise in neuromuscular disorders',
      url: 'https://world.physio',
      originalPublishedAt: '2025-08-10'
    },
    coverImage: '/assets/hero-bg-3.jpg',
    imageAlt: 'Sessão de hidroterapia com fisioterapeuta guiando paciente em piscina aquecida',
    tags: ['Hidroterapia', 'Fisioterapia', 'Atividade Adaptada', 'Manejo', 'Bem-Estar'],
    content: `
      <section class="space-y-6">
        <p class="lead">A propriedade física de empuxo da água reduz a força de gravidade atuante no corpo, permitindo que a pessoa com distrofia execute movimentos articulares que seriam impossíveis em solo seco.</p>
        <p>A hidroterapia em água aquecida (entre 33°C e 34°C) também atua no relaxamento muscular, melhora da circulação periférica, alívio de dores posturais e expansão da capacidade vital inspiratória.</p>
      </section>
    `,
  },
  {
    slug: 'pesquisa-clinica-brasil-como-participar-2026',
    title: 'Como Funcionam os Registros de Pacientes e a Participação em Ensaios Clínicos',
    excerpt: 'Esclarecimento do Núcleo Editorial ACADIM sobre a importância do cadastro nacional de distrofias para viabilizar a vinda de estudos de fase 2 e 3 para centros brasileiros.',
    category: 'Pesquisa & Ensaios Clínicos',
    publishedAt: '2025-08-01',
    readTime: '5 min de leitura',
    featured: false,
    author: {
      name: 'Núcleo Editorial ACADIM',
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'REBRARED - Rede Brasileira de Pesquisa em Doenças Raras & CONEP',
      title: 'Diretrizes éticas para participação de vulneráveis em pesquisas clínicas',
      url: 'https://conselho.saude.gov.br/comissoes-cns/conep',
      originalPublishedAt: '2025-07-20'
    },
    coverImage: '/assets/hero-bg-4.jpg',
    imageAlt: 'Médica pesquisadora orientando família em formulário de consentimento livre e esclarecido',
    tags: ['Pesquisa Clínica', 'Ensaios Clínicos', 'CONEP', 'Registro de Pacientes', 'Brasil'],
    content: `
      <section class="space-y-6">
        <p class="lead">Para que indústrias farmacêuticas e centros universitários internacionais escolham hospitais do Rio de Janeiro e do Brasil como polos de ensaios clínicos com novas drogas, é fundamental que existam registros de pacientes atualizados com confirmação genética.</p>
        <p>A participação em pesquisas clínicas é voluntária, gratuita e regida por rígidos protocolos de ética da CONEP (Comissão Nacional de Ética em Pesquisa). A ACADIM mantém cadastramento interno para avisar as famílias quando novos estudos com perfil compatível forem abertos no país.</p>
      </section>
    `,
  }
];

export function getAllNews(): NewsArticle[] {
  return newsArticles;
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

export function getFeaturedNews(): NewsArticle[] {
  return newsArticles.filter((article) => article.featured);
}

export function getNewsByCategory(category: string): NewsArticle[] {
  return newsArticles.filter((article) => article.category === category);
}
