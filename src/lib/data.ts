/**
 * Dados padrão (fallback) do site.
 *
 * Estes dados são usados:
 *   1. Em desenvolvimento local (sem chaves do Supabase configuradas)
 *   2. Em produção, se a conexão com o CMS falhar
 *   3. Como seed inicial para o painel administrativo
 *
 * Quando o CMS estiver pronto, o painel irá popular as tabelas com conteúdo
 * equivalente a estes mesmos campos.
 */

export type NavLink = { label: string; href: string };
export const defaultNavLinks: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Nossa História', href: '#sobre' },
  { label: 'Como Ajudamos', href: '#servicos' },
  { label: 'Nossos Números', href: '#impacto' },
  { label: 'Participe', href: '#participe' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contato' },
];

export type Hero = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImage: string;
  heroAlt: string;
  floatingPills: { icon: 'heart' | 'shield' | 'users'; label: string; color: 'red' | 'blue' }[];
};

export const defaultHero: Hero = {
  badge: 'Desde 1998, 27 anos de história e acolhimento',
  title: 'Bem-vindo à',
  subtitle: 'Você não está sozinho. Nós caminhamos juntos.',
  description:
    'Oferecemos acolhimento, informação qualificada e defesa de direitos para pessoas com distrofia muscular e outras doenças neuromusculares, além de suas famílias, no Rio de Janeiro e em todo o Brasil.',
  primaryCta: { label: 'Quero doar', href: '#doar' },
  secondaryCta: { label: 'Conheça nossa história', href: '#sobre' },
  heroImage: '/images/hero-portrait.jpg',
  heroAlt: 'Criança sorrindo, representando o acolhimento da ACADIM',
  floatingPills: [
    { icon: 'heart', label: 'Acolhimento desde o diagnóstico', color: 'red' },
    { icon: 'shield', label: 'Defesa de direitos', color: 'blue' },
  ],
};

export type About = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  quote: string;
};

export const defaultAbout: About = {
  eyebrow: 'Nossa História',
  title: 'Uma história de inconformismo e acolhimento',
  paragraphs: [
    'A Associação Carioca de Distrofia Muscular (ACADIM) nasceu no dia 29 de julho de 1998, dentro de uma sala da UERJ. Um grupo de pessoas que convivem com a distrofia muscular, junto com o Dr. Fábio de Almeida Bolognani, se uniu depois de ouvir, repetidamente, um “nada posso fazer” na hora do diagnóstico.',
    'Nossa presidente, Maria Clara Migowski, também convive com distrofia muscular há mais de 30 anos e fez dessa trajetória pessoal o motor da associação. O que começou como um encontro de troca entre famílias em salas de espera se tornou uma referência em acolhimento, informação e garantia de direitos no Rio de Janeiro.',
    'Hoje, com sede na Tijuca e mais de 2,5 mil famílias atendidas ao longo de nossa trajetória, seguimos caminhando juntos: acolhendo desde a primeira notícia do diagnóstico, orientando sobre cuidados, lutando por direitos e mostrando que, com apoio, é possível viver com mais qualidade.',
  ],
  quote:
    '“A distrofia pode mudar o corpo, mas não apaga sonhos. A gente existe para que ninguém ouça de novo que não há nada a fazer.”',
};

export type Founder = {
  name: string;
  role: string;
  bio: string;
  image: string;
  accent: 'red' | 'blue';
};

export const defaultFounders: Founder[] = [
  {
    name: 'Maria Clara Migowski',
    role: 'Presidente e fundadora',
    bio: 'Professora e ativista, convive com distrofia muscular há mais de 30 anos. É a voz da ACADIM e o coração do acolhimento às famílias, conduzindo pessoalmente muitos dos atendimentos e encontros.',
    image: '/images/founder-maria-clara.jpg',
    accent: 'red',
  },
  {
    name: 'Dr. Fábio de Almeida Bolognani',
    role: 'Médico parceiro e cofundador',
    bio: 'Neurologista que foi um dos primeiros médicos a apostar na informação e na qualidade de vida como parte essencial do cuidado, participando ativamente da fundação da ACADIM em 1998.',
    image: '/images/founder-fabio.jpg',
    accent: 'blue',
  },
];

export type MissionPillar = {
  title: 'Visão' | 'Missão' | 'Valores';
  icon: 'eye' | 'flag' | 'gem';
  badge: string;
  content: string;
};

export const defaultMission: MissionPillar[] = [
  {
    title: 'Visão',
    icon: 'eye',
    badge: 'Referência em cuidado',
    content:
      'Ser reconhecida como referência na defesa de direitos, na promoção do cuidado integral e na melhoria da qualidade de vida das pessoas com distrofia muscular e outras doenças neuromusculares.',
  },
  {
    title: 'Missão',
    icon: 'flag',
    badge: 'Acolher e informar',
    content:
      'Promover informação qualificada, combater o capacitismo, acolher pessoas e famílias desde o diagnóstico e lutar pela garantia de direitos e pelo acesso a cuidados adequados, para que cada pessoa desenvolva seu potencial e participe plenamente da sociedade.',
  },
  {
    title: 'Valores',
    icon: 'gem',
    badge: 'O que nos guia',
    content:
      'Acolhimento, qualidade de vida, inclusão social, equidade, cidadania, transparência, ética e colaboração.',
  },
];

export type Service = {
  icon:
    | 'heart'
    | 'stethoscope'
    | 'scale'
    | 'users'
    | 'graduation-cap'
    | 'shield';
  title: string;
  desc: string;
};

export const defaultServices: Service[] = [
  {
    icon: 'heart',
    title: 'Acolhimento na primeira notícia',
    desc:
      'Escuta humanizada para quem acaba de receber o diagnóstico, com espaço para angústias, dúvidas e orientações iniciais — feito por quem entende a jornada na pele.',
  },
  {
    icon: 'stethoscope',
    title: 'Orientação em saúde',
    desc:
      'Informação qualificada com equipe técnica e rede de médicos e terapeutas parceiros especializados em doenças neuromusculares.',
  },
  {
    icon: 'scale',
    title: 'Garantia de direitos',
    desc:
      'Orientação jurídica para BPC/LOAS, isenções, acesso a medicamentos, órteses, equipamentos e outros direitos assegurados por lei.',
  },
  {
    icon: 'users',
    title: 'Grupos de apoio',
    desc:
      'Encontros periódicos entre pessoas atendidas e familiares para troca de experiência, fortalecimento mútuo e novas amizades.',
  },
  {
    icon: 'graduation-cap',
    title: 'Capacitação de cuidadores',
    desc:
      'Palestras e oficinas práticas para cuidadores e familiares sobre cuidados diários, acesso a serviços e qualidade de vida.',
  },
  {
    icon: 'shield',
    title: 'Conscientização e advocacy',
    desc:
      'Campanhas como o Dia Mundial de Conscientização das Distrofias Musculares (7 de setembro), falas em escolas e empresas e articulação por políticas públicas.',
  },
];

export type ImpactNumber = { value: string; label: string };

export const defaultImpactNumbers: ImpactNumber[] = [
  { value: '27+', label: 'anos de caminhada desde 1998' },
  { value: '2.500+', label: 'famílias acolhidas ao longo da história' },
  { value: '100%', label: 'atendimento gratuito' },
  { value: '01', label: 'sede na Tijuca, atendimento para todo o Brasil' },
];

export type Track = {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  cta: { label: string; href: string };
  color: 'blue' | 'red' | 'sky' | 'amber';
  tag: string;
};

export const defaultTracks: Track[] = [
  {
    tag: 'Para você e sua família',
    title: 'Precisa de acolhimento ou orientação?',
    subtitle: 'Famílias e pessoas com distrofia muscular',
    description:
      'Se você ou alguém da sua família convive com distrofia muscular ou outra doença neuromuscular, estamos aqui. O atendimento é gratuito.',
    bullets: [
      'Acolhimento humanizado, desde o diagnóstico',
      'Orientações de saúde e fisioterapia',
      'Apoio jurídico para seus direitos',
      'Rede de apoio com outras famílias',
    ],
    cta: { label: 'Quero entrar em contato', href: '#contato' },
    color: 'blue',
  },
  {
    tag: 'Para pessoas doadoras',
    title: 'Quer fazer a diferença doando?',
    subtitle: 'Pessoas físicas',
    description:
      'Qualquer valor ajuda a manter o atendimento gratuito, nossos projetos e o acolhimento para centenas de famílias.',
    bullets: [
      'Doação por PIX (instantânea)',
      'Transferência bancária',
      'Nota Fiscal Carioca',
      'Prestação de contas transparente',
    ],
    cta: { label: 'Quero doar agora', href: '#doar' },
    color: 'red',
  },
  {
    tag: 'Para empresas',
    title: 'Quer ser uma empresa parceira?',
    subtitle: 'Selo Empresa Parceira ACADIM',
    description:
      'Sua empresa pode patrocinar projetos, apoiar campanhas e ter visibilidade como marca comprometida com inclusão e direitos.',
    bullets: [
      'Selo oficial de parceiro',
      'Relatórios de impacto',
      'Possibilidade de projetos incentivados',
      'Palestras de inclusão para colaboradores',
    ],
    cta: { label: 'Falar com a ACADIM', href: '#contato' },
    color: 'sky',
  },
  {
    tag: 'Para voluntários',
    title: 'Quer doar seu tempo e talento?',
    subtitle: 'Voluntariado',
    description:
      'Recebemos voluntários de diversas áreas: direito, saúde, comunicação, fotografia, vídeo, eventos e administrativo.',
    bullets: [
      'Voluntariado presencial na sede',
      'Voluntariado remoto',
      'Ações pontuais em eventos',
      'Capacitação oferecida pela equipe',
    ],
    cta: { label: 'Quero ser voluntário', href: '#contato' },
    color: 'amber',
  },
];

export type BazarCategory = { icon: 'shirt' | 'home' | 'footprints'; title: string; cta: string; href: string };

export const defaultBazar: BazarCategory[] = [
  { icon: 'shirt', title: 'Roupas femininas, masculinas e infantis', cta: 'Ver novidades', href: '#' },
  { icon: 'home', title: 'Utilidades para o lar e objetos', cta: 'Ver novidades', href: '#' },
  { icon: 'footprints', title: 'Calçados e acessórios', cta: 'Ver novidades', href: '#' },
];

export type Testimonial = { name: string; role: string; text: string; initials: string; color: 'red' | 'blue' };

export const defaultTestimonials: Testimonial[] = [
  {
    name: 'Mãe de atendido',
    role: 'Rio de Janeiro',
    text:
      'Quando recebemos o diagnóstico, saí do consultório sem saber para onde ir. A ACADIM foi o primeiro lugar onde falaram com a gente de igual para igual e me deram caminhos concretos. Hoje participo do grupo de mães todo mês.',
    initials: 'RS',
    color: 'red',
  },
  {
    name: 'Pessoa com distrofia muscular',
    role: 'Atendido pela ACADIM',
    text:
      'A ACADIM não só me ajudou com o BPC e com informações sobre fisioterapia, mas me apresentou outras pessoas que vivem o mesmo que eu. Isso muda a vida da gente.',
    initials: 'JS',
    color: 'blue',
  },
  {
    name: 'Cuidadora',
    role: 'Baixada Fluminense',
    text:
      'O acolhimento é de verdade. Quando eu mais precisei, a Maria Clara me atendeu pessoalmente e me orientou. Sou muito grata por existir um lugar que entende o que a família passa.',
    initials: 'AP',
    color: 'red',
  },
];

export type Partner = { name: string; logo?: string };

export const defaultPartners: Partner[] = [
  { name: 'UERJ' },
  { name: 'Atados' },
  { name: 'Hospital São Francisco' },
  { name: 'Secretaria de Saúde RJ' },
  { name: 'Comitê Paralímpico' },
  { name: 'Conselho da Pessoa com Deficiência' },
];

export type BlogPost = { title: string; tag: string; date: string; href: string };

export const defaultPosts: BlogPost[] = [
  {
    title: 'Entendendo a Distrofia Muscular de Duchenne e Becker',
    tag: 'Saúde',
    date: 'Março de 2025',
    href: '#',
  },
  {
    title: 'Guia de direitos das pessoas com deficiência no Rio de Janeiro',
    tag: 'Direitos',
    date: 'Fevereiro de 2025',
    href: '#',
  },
  {
    title: 'A importância da fisioterapia respiratória precoce',
    tag: 'Qualidade de vida',
    date: 'Janeiro de 2025',
    href: '#',
  },
];

export type FAQItem = { q: string; a: string };

export const defaultFAQ: FAQItem[] = [
  {
    q: 'O que é a ACADIM?',
    a:
      'A Associação Carioca de Distrofia Muscular é uma organização sem fins lucrativos, fundada em 1998, que oferece acolhimento, informação e defesa de direitos para pessoas com distrofia muscular e doenças neuromusculares, além de suas famílias.',
  },
  {
    q: 'Como posso receber atendimento?',
    a:
      'Você pode entrar em contato pelo WhatsApp, telefone, e-mail ou formulário nesta página. Nossa equipe agendará um primeiro acolhimento, que pode ser presencial na sede ou online.',
  },
  {
    q: 'A ACADIM cobra mensalidade?',
    a:
      'Não. Todo o acolhimento e orientação oferecidos pela ACADIM são totalmente gratuitos para pessoas com distrofia muscular e suas famílias.',
  },
  {
    q: 'Como posso doar?',
    a:
      'Você pode doar via PIX (CNPJ), transferência bancária, Nota Fiscal Carioca ou doando objetos em bom estado para o nosso bazar solidário. Veja os dados na seção "Quero doar".',
  },
  {
    q: 'Onde fica a ACADIM?',
    a:
      'Nossa sede fica na Rua Santo Afonso, 215 – Bloco 02, Sala 911, Tijuca, Rio de Janeiro – RJ, CEP 20511-170. Também atendemos de forma remota famílias de outros municípios e estados.',
  },
];

export type DonateInfo = {
  eyebrow: string;
  title: string;
  description: string;
  pixKey: string;
  pixLabel: string;
  bank: string;
  methods: { label: string; desc: string }[];
};

export const defaultDonate: DonateInfo = {
  eyebrow: 'Sua doação mantém nosso trabalho vivo',
  title: 'Sua ajuda transforma vidas reais.',
  description:
    'Há mais de 27 anos, a ACADIM caminha ao lado de centenas de famílias. Toda doação é revertida diretamente para o atendimento gratuito.',
  pixKey: '02.916.982/0001-91',
  pixLabel: 'Chave PIX (CNPJ)',
  bank: 'Banco Itaú · Associação Carioca de Distrofia Muscular · CNPJ 02.916.982/0001-91',
  methods: [
    { label: 'PIX', desc: 'Doação instantânea pelo CNPJ da ACADIM' },
    { label: 'Transferência bancária', desc: 'Dados da conta para depósito ou TED' },
    { label: 'Nota Fiscal Carioca', desc: 'Doe sem gastar nada: cadastre-se e indique a ACADIM' },
    { label: 'Objetos para o bazar', desc: 'Roupas, calçados e utilidades em bom estado' },
  ],
};

export type ContactInfo = {
  phone: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: string;
  addressShort: string;
  instagram: string;
  facebook: string;
  youtube: string;
};

export const defaultContact: ContactInfo = {
  phone: '(21) 2502-5766',
  whatsapp: '5521999999999', // TODO: confirmar número real de WhatsApp com Maria Clara
  whatsappDisplay: '(21) 99999-9999',
  email: 'acadim@acadim.com.br',
  address: 'Rua Santo Afonso, 215 – Bloco 02, Sala 911 – Tijuca, Rio de Janeiro – RJ, CEP 20511-170',
  addressShort: 'Tijuca – Rio de Janeiro/RJ',
  instagram: 'https://www.instagram.com/acadimrj/',
  facebook: '#', // TODO: confirmar link real
  youtube: '#', // TODO: confirmar link real
};

export type TransparencyInfo = {
  title: string;
  items: { label: string; href: string }[];
  cnpj: string;
  public_utility: string;
};

export const defaultTransparency: TransparencyInfo = {
  title: 'Transparência',
  items: [
    { label: 'Estatuto social', href: '#' },
    { label: 'Diretoria', href: '#' },
    { label: 'Relatório anual de atividades', href: '#' },
    { label: 'Política de Privacidade (LGPD)', href: '#' },
  ],
  cnpj: '02.916.982/0001-91',
  public_utility: 'Utilidade Pública Municipal – Lei nº 3.815, de 28 de julho de 2004',
};
