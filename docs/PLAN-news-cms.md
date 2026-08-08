# PLAN-news-cms: Área de Notícias (Preparada para Futuro CMS)

## 🎯 Objetivo
Criar uma seção de **Notícias & Artigos** no site da ACADIM para publicar informações sobre ensaios clínicos, conquistas no SUS, eventos e orientações médicas. A arquitetura deve ser desacoplada em camada de dados (`NewsRepository`), permitindo que inicialmente funcione com arquivos estáticos/Markdown e futuramente seja conectada a um CMS (Sanity, Decap CMS, Payload ou Strapi) sem alterar os componentes do React.

---

## 📋 Lista de Tarefas (Checklist Atômica)

### Fase 1: Arquitetura de Dados & Camada de Abstração (CMS-Ready)
- [ ] Criar interface e tipos `NewsArticle` e `NewsRepository` em `lib/news-types.ts`
- [ ] Criar provedor inicial local `lib/news-data.ts` (JSON/TS local com 4 notícias iniciais da ACADIM)
- [ ] Garantir suporte a categorias (ex: `Avanços Científicos`, `Direitos no SUS`, `Eventos ACADIM`, `Histórias`)

### Fase 2: Componentes da Seção de Notícias
- [ ] Criar `components/NewsSection.tsx` para exibição dos 3 artigos mais recentes na Homepage
- [ ] Criar cards de notícia responsivos com imagem, tag de categoria, data de publicação, tempo de leitura e resumo
- [ ] Integrar `NewsSection` na página principal (`app/page.tsx`) entre `ImpactSection` e `HelpSection`

### Fase 3: Páginas Dedicadas de Notícias
- [ ] Criar rota principal `/noticias` (`app/noticias/page.tsx`) com busca por palavra-chave e filtro por categoria
- [ ] Criar rota dinâmica `/noticias/[slug]` (`app/noticias/[slug]/page.tsx`) para leitura do artigo completo
- [ ] Adicionar suporte a SEO dinâmico (`generateMetadata`), OpenGraph e dados estruturados JSON-LD (`NewsArticle`)

### Fase 4: Preparação para Integração com CMS Futuro
- [ ] Documentar o contrato de API/CMS em `docs/CMS-INTEGRATION-GUIDE.md`
- [ ] Estruturar a pasta `content/posts/` (caso se opte por Markdown / Decap CMS) ou adaptador Sanity/Strapi

---

## 🧪 Plano de Verificação

### Automated & Build Verification
- `npm run build` — Garantir compilação estática das rotas `/noticias` e `/noticias/[slug]`.

### Manual & SEO Verification
- Navegação fluida: Home → Seção Notícias → `/noticias` → Artigo Individual `/noticias/exemplo-slug`.
- Validação de Rich Snippets no Google Rich Results Test para o schema `NewsArticle`.
- Acessibilidade e contraste em conformidade com WCAG AA/AAA.
