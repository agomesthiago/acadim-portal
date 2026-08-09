# ACADIM — Auditoria do Sistema Visual (UI System Audit)

> **Data:** 09 de Agosto de 2026  
> **Diretrizes:** Sombria, Institucional, Humana, Editorial, Acessível, Confiável.  
> **Não-Objetivos:** Evitar estética SaaS/Startup, excesso de gradientes, animações invasivas ou dark patterns.

---

## 1. Tokens de Cores e Semântica

A paleta institucional está fundamentada no `@theme` do Tailwind CSS (`app/globals.css`):

- **Marca Principal**:
  - `brand-red`: `#DC2626` (Ações primárias de doação e destaques)
  - `brand-blue`: `#1E3A8A` (Identidade institucional e links)
  - `brand-blue-dark`: `#0F172A` (Fundo de contraste e cabeçalhos escuros)
- **Superfícies (Surface)**:
  - `surface-default`: `#FFFFFF`
  - `surface-subtle`: `#F8FAFC`
  - `surface-inverse`: `#0F172A`
- **Texto (Typography)**:
  - `text-primary`: `#1E293B`
  - `text-secondary`: `#475569`
  - `text-inverse`: `#FFFFFF`
- **Contraste de Acessibilidade**:
  - Light Mode: Contraste mínimo 4.5:1 para texto normal e 3:1 para texto grande (WCAG AA).
  - Dark Mode: `#0F172A` / `#F8FAFC` com bordas `#334155`.
  - High-Contrast Mode: `#000000` / `#FFFF00` (WCAG AAA 19:1 com foco de 4px).

---

## 2. Tipografia e Escala Rítmica

- **Fonte Primária**: `Figtree` (Google Fonts via `next/font`), sans-serif limpa e altamente legível.
- **Hierarquia de Headings**:
  - H1 (Página): `text-4xl sm:text-5xl lg:text-[3.25rem] font-black` (1 único H1 por rota).
  - H2 (Seções): `text-3xl sm:text-4xl font-black`
  - H3 (Subseções): `text-xl font-extrabold`
  - Body Lead: `text-lg sm:text-xl font-bold`
  - Body Standard: `text-base text-slate-700 leading-relaxed`

---

## 3. Spacing e Max-Width Sistêmico

- **Container Padrão**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Vertical Spacing entre Seções**: `py-20 lg:py-28`
- **Touch Target Mínimo**: `min-h-[44px]` e `min-w-[44px]` em todos os botões e links navegáveis.

---

## 4. Diretrizes de Inclusão e Consistência

1. Reutilização rigorosa dos tokens semânticos (`bg-surface-default`, `text-text-primary`, etc.).
2. Nenhuma cor hex aleatória em componentes isolados sem correspondente nos tokens globais.
3. Transições suaves (`transition-all duration-300`) atreladas à diretiva `@layer base` para desativação automática sob `prefers-reduced-motion`.
