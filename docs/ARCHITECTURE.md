# ACADIM PORTAL — ARQUITETURA DO SISTEMA (VERSÃO FINAL 1.0.0)

**Data:** 12 de Agosto de 2026  
**Framework:** Next.js 16.3 (App Router - Turbopack)  
**Linguagem:** TypeScript 5+ (Strict Mode)  
**Estilização:** Tailwind CSS v4  
**Modelo de Dados:** Local-First (JSON atômico) + Fallback Estático + Opcional Airtable  

---

## 1. ESTRUTURA DE CAMADAS E DESTRUTURAÇÃO DE COMPONENTES

```
┌─────────────────────────────────────────────────────────┐
│                    PAGES / APP ROUTER                   │
│ app/ (page.tsx, /sobre-nos, /distrofias, /noticias, /admin)
└────────────────────────────┬────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────┐
│                    UI COMPONENTS                        │
│ components/                                             │
│   ├── distrofias/ (DistrofiaCard.tsx, DistrofiasGroupFilter.tsx)
│   ├── AboutSection.tsx, MascotsSection.tsx, Footer.tsx   │
│   └── MarkdownViewer.tsx, NewsImage.tsx                 │
└────────────────────────────┬────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────┐
│                  DOMAIN SERVICES & TYPES                │
│ lib/                                                    │
│   ├── distrofias-types.ts, distrofias-data.ts           │
│   ├── news/ (news-service.ts, news-repository.ts,       │
│   │          local-store.ts, static-news.ts)            │
│   └── admin-auth.ts, sanitize-html.ts                   │
└────────────────────────────┬────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────┐
│                    DATA PERSISTENCE                     │
│ data/custom-news.json (Escrita Atômica .tmp -> rename)  │
└─────────────────────────────────────────────────────────┘
```

---

## 2. REGRAS DE RENDERIZAÇÃO (SERVER VS CLIENT COMPONENTS)

- **Server Components (Default):** Todas as páginas (`app/page.tsx`, `app/sobre-nos/page.tsx`, `app/noticias/page.tsx`, `app/distrofias/page.tsx`, `app/distrofias/[slug]/page.tsx`, `app/noticias/[slug]/page.tsx`) são Server Components puramente pré-renderizados via SSG/ISR para máxima velocidade e SEO.
- **Client Components (`'use client'`):** Estritamente restritos a componentes de interatividade no navegador (busca e filtros em `DistrofiasSearchClient.tsx`, reprodutor do `VLibras.tsx`, botões de compartilhamento `ShareButton.tsx` e formulários administrativos em `app/admin/`).

---

## 3. SEGURANÇA E HIGIENE DA ARQUITETURA

1. **Sanitização de HTML e Markdown:** O Markdown das notícias é processado via `rehypeSanitize` em [`components/MarkdownViewer.tsx`](file:///d:/projetos/acadim/components/MarkdownViewer.tsx).
2. **Local-First & Resiliência:** Caso tokens de API externa não estejam configurados, o portal utiliza instantaneamente o acervo estático e o repositório local JSON.
3. **Equal Scale nos Fundadores:** Os containers visuais de Clara e Pedro em [`components/MascotsSection.tsx`](file:///d:/projetos/acadim/components/MascotsSection.tsx) são mantidos rigorosamente em **236px × 236px**.
