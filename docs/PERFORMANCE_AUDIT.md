# Performance Audit - ACADIM

## Otimização de Imagens
**Status: PASS (Após correção)**
A flag `unoptimized: true` foi removida do `next.config.ts`. Essa flag estava desativando a otimização automática de imagens do Next.js (conversão para WebP, redimensionamento on-the-fly, e lazy loading aprimorado). Como os componentes usavam a tag `<Image>` com a propriedade `fill` ou com dimensões (width/height) explícitas, era seguro remover a flag para ganhar performance no carregamento de imagens (redução de LCP).

## Análise de Client Components (`'use client'`)
**Status: MANUAL REQUIRED (Para refatoração arquitetural)**
Foi identificada uma proliferação de `'use client'` em quase todo o projeto, incluindo:
- `app/page.tsx`
- `app/distrofias/[slug]/page.tsx`
- `app/noticias/[slug]/page.tsx`
- Todos os arquivos dentro de `components/` e `app/` que foram verificados.

**Justificativa e Impacto:**
A abordagem atual utiliza Client Components globalmente porque estados como `isPixOpen` foram elevados até o topo da árvore de componentes (em `page.tsx`). Como resultado, os benefícios primários do React Server Components (RSC) — como envio de HTML estático sem bundle JavaScript e SEO aprimorado nativo de servidor — são quase anulados para a página inteira.

*Recomendação:* Refatorar os Providers/Modals. O estado do Pix Modal deve residir num componente isolado (ex: `<PixModalProvider>`) ou as páginas principais devem ser Server Components puros, importando client components interativos ("islands") apenas onde houver estado (`useState`, `useEffect`).

## Otimização de Fontes
**Status: PASS**
A fonte *Figtree* está sendo carregada via `next/font/google`, o que evita Cumulative Layout Shift (CLS) e faz o pre-load eficiente.

## LCP / CLS / INP
**Status: MANUAL REQUIRED**
Métricas de Core Web Vitals reais exigem ferramentas como Lighthouse ou PageSpeed Insights rodando em produção (ou ambiente de homologação). Foi deixada essa indicação para execução manual no final do deploy.
