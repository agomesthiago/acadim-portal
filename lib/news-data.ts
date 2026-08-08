// lib/news-data.ts
import { NewsArticle, NewsCategory } from './news-types';

export const newsArticles: NewsArticle[] = [
  {
    slug: 'avancos-terapia-genica-duchenne-2026',
    title: 'Avanços na Terapia Gênica para Duchenne: Síntese Científica e Panorama no Brasil',
    excerpt: 'Novos dados de ensaios clínicos com salto de éxon e terapias de microdistrofina trazem esperanças renovadas. Entenda a síntese editorial da ACADIM e os critérios de elegibilidade.',
    category: 'Avanços Científicos',
    publishedAt: '2026-08-01',
    updatedAt: '2026-08-04',
    readTime: '5 min de leitura',
    featured: true,
    author: {
      name: 'Redação ACADIM',
      role: 'Núcleo Editorial de Ciência, Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'Nature Reviews Neurology & MDA Clinical Updates',
      title: 'Gene therapy and exon skipping developments in Duchenne muscular dystrophy',
      url: 'https://www.nature.com/articles/s41582-018-0001-4',
      originalPublishedAt: '2026-07-28'
    },
    coverImage: '/assets/community-bg.jpg',
    imageAlt: 'Pesquisador examinando dados médicos de distrofia em laboratório',
    tags: ['Duchenne', 'Terapia Gênica', 'Pesquisa', 'SUS'],
    relatedDiseaseSlug: 'duchenne',
    content: `
      <p class="lead">O avanço das terapias de precisão para a Distrofia Muscular de Duchenne (DMD) tem evoluído a passos largos. Em 2026, a comunidade científica global celebra a consolidação de tratamentos focados na restauração parcial da proteína distrofina.</p>
      
      <h3>1. O que é o Salto de Éxon e a Microdistrofina?</h3>
      <p>A terapia de salto de éxon (exon skipping) funciona como um "remendo molecular", permitindo que a maquinaria celular salte o trecho mutado do gene DMD e produza uma versão encurtada, porém funcional, da proteína distrofina. Já os vetores virais AAV transportam uma cópia sintética compacta (microdistrofina) diretamente para os músculos.</p>
      
      <h3>2. Como está o acesso no Brasil e no SUS?</h3>
      <p>A ACADIM, em conjunto com a Aliança Distrofia Brasil (ADB), acompanha de perto os processos de incorporação na ANVISA e na CONITEC. O grande desafio atual é garantir que o diagnóstico genético precoce por sequenciamento completo esteja disponível na rede pública de saúde, pré-requisito indispensável para elegibilidade às novas terapias.</p>
      
      <h3>3. Recomendações para as Famílias</h3>
      <ul>
        <li><strong>Mantenha o exame genético atualizado:</strong> Saber exatamente qual o éxon mutado é decisivo.</li>
        <li><strong>Manutenção da Fisioterapia:</strong> Nenhuma terapia substitui a fisioterapia motora e respiratória diária.</li>
        <li><strong>Acompanhamento Cardiológico:</strong> A função cardíaca deve ser monitorada preventivamente a cada 6 ou 12 meses.</li>
      </ul>
      
      <p>A ACADIM reafirma seu compromisso de orientar cada família com verdade, acolhimento e respaldo científico.</p>
    `,
  },
  {
    slug: 'direitos-sus-medicamentos-orteses-guia',
    title: 'Guia de Direitos no SUS: Como Solicitar Fraldas, Órteses e Suporte Multidisciplinar',
    excerpt: 'Passo a passo desenvolvido pela equipe de direitos e cidadania da ACADIM para ajudar famílias no Rio de Janeiro a garantirem suprimentos e fisioterapia na rede pública.',
    category: 'Direitos no SUS',
    publishedAt: '2026-07-20',
    readTime: '7 min de leitura',
    featured: true,
    author: {
      name: 'Redação ACADIM',
      role: 'Núcleo Editorial de Ciência, Saúde e Cidadania',
      url: '/redacao',
    },
    primarySource: {
      name: 'Defensoria Pública do Estado do Rio de Janeiro & Ministério da Saúde',
      url: 'https://www.defensoria.rj.def.br'
    },
    coverImage: '/assets/hero-bg-3.jpg',
    imageAlt: 'Famílias reunidas orientando-se sobre direitos e cidadania no Rio de Janeiro',
    tags: ['SUS', 'Direitos', 'Órteses', 'Apoio Jurídico'],
    content: `
      <p class="lead">Garantir o acesso a insumos, cadeira de rodas adequada, órteses surpodálicas e fisioterapia especializada não é um favor — é um direito constitucional garantido por lei a todas as pessoas com distrofia muscular.</p>
      
      <h3>Documentação Fundamental para Solicitação</h3>
      <p>Para dar entrada em processos administrativos nos Postos de Saúde (AP) ou na Defensoria Pública do Estado do Rio de Janeiro, reúna os seguintes documentos:</p>
      <ul>
        <li>Laudo médico detalhado com CID-10 e descrição detalhada da necessidade funcional.</li>
        <li>Laudo da Avaliação Fisioterapêutica ou Fonoaudiológica detalhada.</li>
        <li>Cópia do Exame Genético que confirma o diagnóstico de distrofia.</li>
        <li>Documentos pessoais (CPF, RG, Comprovante de Residência no RJ e Cartão SUS).</li>
      </ul>
      
      <h3>Atuação da ACADIM</h3>
      <p>Se você encontrar barreiras ou negativa por parte do município ou estado, entre em contato com nossa equipe. A ACADIM orienta o encaminhamento para a Defensoria Pública do Núcleo de Saúde e Direitos Humanos do Rio de Janeiro.</p>
    `,
  },
  {
    slug: 'simposio-carioca-distrofia-muscular-2026',
    title: 'ACADIM Realiza Encontro de Famílias e Especialistas no Rio de Janeiro',
    excerpt: 'Um dia inesquecível de acolhimento, trocas de experiências, atualização médica e celebração da vida. Confira os destaques e o resumo institucional do evento.',
    category: 'Eventos ACADIM',
    publishedAt: '2026-06-15',
    readTime: '4 min de leitura',
    featured: false,
    author: {
      name: 'Redação ACADIM',
      role: 'Núcleo Editorial de Ciência, Saúde e Cidadania',
      url: '/redacao',
    },
    coverImage: '/assets/hero-bg-4.jpg',
    imageAlt: 'Participantes do Simpósio da ACADIM sorrindo em auditório no Rio de Janeiro',
    tags: ['Evento', 'Comunidade', 'Simpósio', 'Acolhimento'],
    content: `
      <p class="lead">No último mês, a ACADIM reuniu mais de 150 pessoas, entre pacientes, familiares, médicos neuropediatras, fisioterapeutas e apoiadores da causa em nosso Encontro de Famílias.</p>
      
      <p>O evento contou com palestras sobre cuidados respiratórios, direitos no SUS, nutrição na distrofia e espaço recreativo acessível para as crianças. A energia do encontro reforçou a nossa convicção: <strong>ninguém deve caminhar sozinho.</strong></p>
      
      <p>Agradecemos a todos os voluntários e parceiros que tornaram este momento possível. Fique atento às nossas redes para a data da próxima edição!</p>
    `,
  },
  {
    slug: 'historia-superacao-autonomia-fshd',
    title: 'Viver com Autonomia: A Jornada de Ricardo com a Distrofia Fácio-Escápulo-Umeral',
    excerpt: '"O diagnóstico não diminuiu meus sonhos — apenas me ensinou a navegar por caminhos diferentes." Conheça a história inspiradora de Ricardo Almeida.',
    category: 'Histórias de Vida',
    publishedAt: '2026-05-10',
    readTime: '6 min de leitura',
    featured: false,
    author: {
      name: 'Redação ACADIM',
      role: 'Núcleo Editorial de Ciência, Saúde e Cidadania',
      url: '/redacao',
    },
    coverImage: '/assets/hero-bg-2.jpg',
    imageAlt: 'Ricardo em momento de reabilitação com sorriso confiante',
    tags: ['FSHD', 'Autonomia', 'Depoimento', 'Superação'],
    relatedDiseaseSlug: 'fshd1',
    content: `
      <p class="lead">Aos 24 anos, Ricardo notou os primeiros sinais de escápula alada e fraqueza nos braços. O diagnóstico de FSHD trouxe dúvidas, mas encontrar a rede de apoio da ACADIM transformou sua perspectiva.</p>
      
      <p>"Conhecer outras pessoas com a mesma condição me tirou do isolamento. Aprendi que adaptação não é limitação. Hoje trabalho, pratico fisioterapia adaptada e ajudo novos diagnosticados a encontrarem seu caminho com otimismo."</p>
    `,
  },
];

// Helper functions (CMS abstraction layer)
export function getAllNews(): NewsArticle[] {
  return newsArticles.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

export function getFeaturedNews(): NewsArticle[] {
  return newsArticles.filter((article) => article.featured);
}

export function getNewsByCategory(category: NewsCategory): NewsArticle[] {
  return newsArticles.filter((article) => article.category === category);
}
