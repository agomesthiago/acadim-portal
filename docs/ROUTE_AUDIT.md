# Auditoria de Rotas e Navegação

## Tabela de Rotas da Aplicação

| URL | Tipo | Status | Indexável (Robots) | Sitemap | Schema/JSON-LD |
|---|---|---|---|---|---|
| `/` | SSG | Ativo | Sim | Sim | NGO / Organization |
| `/distrofias` | SSG | Ativo | Sim | Sim | Não implementado |
| `/distrofias/[slug]` | Dynamic / SSR | Ativo | Sim | Sim | Não implementado |
| `/noticias` | SSG | Ativo | Sim | Sim | Não implementado |
| `/noticias/[slug]` | Dynamic / SSR | Ativo | Sim | Sim | Não implementado |
| `/redacao` | SSG | Ativo | Sim | Sim | AboutPage / Organization |

## Descobertas e Pendências
- **Rotas Dinâmicas (SSR vs SSG):** Arquivos como `app/distrofias/[slug]/page.tsx` e `app/noticias/[slug]/page.tsx` **não** possuem a função `generateStaticParams()` exportada. Consequentemente, o Next.js App Router renderiza essas rotas via **SSR** (Server-Side Rendering) a cada requisição ou fallback dinâmico (no caso de vercel/netlify edges), invés de gerar páginas estáticas em tempo de build (SSG). Isso pode aumentar levemente o tempo de resposta do servidor, dependendo da hospedagem, ou gerar custos computacionais não intencionais se o tráfego for imenso (embora irrisório para um site estático simples).
- **Tratamento de Erros 404:** Faltam páginas essenciais na raiz `app/` do Next.js (ver `PRODUCTION_RUNBOOK.md`). A falta de `not-found.tsx` impede tratamento estilizado nativo se um `[slug]` não for encontrado nas funções `getConditionById` ou `getDiseaseBySlug`.
