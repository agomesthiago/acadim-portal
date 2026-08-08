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

        <div class="bg-slate-100 p-5 rounded-2xl border border-slate-200 mt-6 text-xs text-slate-600 space-y-2">
          <p class="font-bold text-slate-800">Crédito Editorial e Transparência de Fontes:</p>
          <p>Esta síntese foi elaborada pelo <strong>Núcleo Editorial ACADIM</strong> com fins exclusivamente educativos. As informações foram compiladas e adaptadas a partir das publicações científicas originais da <em>Nature Reviews Neurology</em> (DOI: 10.1038/s41582-018-0001-4) e informes da <em>Muscular Dystrophy Association (MDA)</em>. Não substitui consulta médica especializada.</p>
        </div>
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

        <div class="bg-slate-100 p-5 rounded-2xl border border-slate-200 mt-6 text-xs text-slate-600 space-y-2">
          <p class="font-bold text-slate-800">Crédito Editorial e Atribuição de Fontes:</p>
          <p>Elaborado pelo <strong>Núcleo Editorial ACADIM</strong> com base em legislações públicas vigentes, manuais operacionais da <em>Defensoria Pública do Estado do Rio de Janeiro (DPRJ)</em> e resoluções do <em>Ministério da Saúde</em>. Conteúdo de livre reprodução para fins de utilidade pública com citação da fonte original.</p>
        </div>
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

        <h3 class="text-xl font-bold text-text-primary">Destaques do Programação</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Mesa Redonda de Cuidados Respiratórios:</strong> Orientação prática sobre ventilação não invasiva (VNI) e higiene brônquica preventiva.</li>
          <li><strong>Painel de Direitos e Isenções Impostos:</strong> Esclarecimentos sobre isenção de IPVA, gratuidade no transporte público (RioCard Especial) e Benefício de Prestação Continuada (BPC/LOAS).</li>
          <li><strong>Espaço de Convivência Infantil:</strong> Atividades recreativas adaptadas com supervisão para as crianças.</li>
        </ul>

        <p>A ACADIM agradece a todos os voluntários, palestrantes e famílias que tornaram este evento um marco de apoio mútuo e cidadania.</p>
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
