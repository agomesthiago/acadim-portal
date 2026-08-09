# ACADIM Architecture Audit

## Real Stack
- **Framework:** Next.js 15.1.0 (App Router)
- **Library:** React 19.2.8
- **Language:** TypeScript 5.0.0
- **Styling:** Tailwind CSS v4.3.3 + PostCSS
- **Icons:** Lucide React
- **Fonts:** Figtree (Google Fonts variable font)
- **Testing:** Playwright (Visual Regression & E2E)

## Route Structure (App Router)
- `/` — Home (SSG)
- `/distrofias` — Índice de doenças (SSG)
- `/distrofias/[slug]` — Condição individual (Dynamic, SSR - no generateStaticParams found)
- `/noticias` — Índice de notícias (SSG)
- `/noticias/[slug]` — Notícia individual (Dynamic, SSR - no generateStaticParams found)
- `/redacao` — Política editorial e núcleo de ciências (SSG)
- `/sitemap.xml` — Gerado por `app/sitemap.ts` via dynamic mapping.
- `/robots.txt` — Gerado por `app/robots.ts` estaticamente.

## Components & Responsibilities
- `HeaderNav.tsx` / `Footer.tsx` / `SecondaryNav.tsx`: Navegação principal, rodapé e menus secundários.
- `AccessibilityToolbar.tsx` / `SkipLink.tsx`: Ferramentas flutuantes e atalhos de acessibilidade global.
- `VLibras.tsx`: Widget de interpretação para LIBRAS.
- `HeroSection.tsx` / `AboutSection.tsx` / `ServicesSection.tsx` / `ImpactSection.tsx` / `BazarSection.tsx` / `NewsSection.tsx`: Seções da landing page principal.
- `ConditionSection.tsx`: Renderiza os subtipos e informações específicas das condições médicas listadas em `conditions-data.ts`.
- `ContactSection.tsx` / `DonationCTA.tsx` / `PixModal.tsx` / `HelpSection.tsx`: Componentes focados em doações e suporte à ONG.

## Data Patterns
Existem dois arquivos principais de dados médicos, o que causa uma leve sobreposição estrutural:
1. `lib/distrofias-data.ts`: Contém o modelo `DiseaseDetail` com informações aprofundadas (herança, gene, fisiopatologia, fontes) e dita a estrutura da rota `/distrofias/[slug]`.
2. `lib/conditions-data.ts`: Define a interface `Subtype` e `Condition`. Parecem dados criados para agrupamento na UI (ex: `<ConditionSection />`) destacando gravidade e sintomas pontuais.
3. `lib/news-data.ts`: Contém a lista de publicações, artigos e autores do "Redação ACADIM".

## Context
- `AccessibilityContext.tsx`: Gerencia os temas (light, dark, high-contrast), tamanho de fonte e navegação com foco reduzido (reduced motion). Há mapeamento global de atalhos de teclado (Alt+C, Alt++, etc).

## CI/CD
- GitHub Actions via `.github/workflows/ci.yml`. Instala dependências, roda lint, roda build e executa a suíte de testes E2E do Playwright (`test:qa`, `test:qa-dark`, `test:qa-regression`).

## External Dependencies
- **Figtree:** Otimizada pelo `next/font/google`.
- **VLibras:** Integrado via componente e provavelmente via script externo.
