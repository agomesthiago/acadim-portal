# ACADIM — UI/UX Product Baseline (Gate Zero Audit)

> **Data da Auditoria Baseline:** 09 de Agosto de 2026  
> **Escopo:** Validação estrita de engenharia local, tipagem, linting, build de produção e suíte de testes de regressão (14/14 PASS & 27/27 Matriz de Viewports x Temas PASS).

---

## 1. Resumo da Auditoria Baseline

| Métrica / Gate | Status | Detalhes |
|---|---|---|
| **TypeScript Typecheck** | `PASS` | 0 erros (`tsc --noEmit`) |
| **ESLint Audit** | `PASS` | 0 erros (`eslint .`) |
| **Production Build** | `PASS` | 9/9 rotas estáticas e dinâmicas geradas com sucesso (`next build`) |
| **QA Hardened Suite** | `PASS` | 14/14 testes integrados de estrutura, âncoras, modais, FAQ e PIX |
| **Matriz Responsiva Dark** | `PASS` | 9/9 viewports em Dark Theme com 0px overflow horizontal |
| **Matriz 9x3 Completa** | `PASS` | 27/27 cenários (9 viewports x 3 temas: Light, Dark, High-Contrast) com 0px overflow |
| **GitHub Scope** | `IGNORED` | Operação 100% restrita ao ambiente local. Sem operações git remotas/gh CLI. |

---

## 2. Visão Geral das Dependências e Stack Atual

- **Framework**: Next.js `15.5.23` (App Router)
- **UI Runtime**: React `19.2.8` & React DOM `19.2.8`
- **Estilização**: Tailwind CSS `v4.3.3` + PostCSS + Autoprefixer
- **Ícones**: Lucide React `1.30.0`
- **Automação & QA**: Playwright `1.62.1`, TypeScript `5.0.0`
- **Design Tokens**: Variáveis CSS semânticas registradas no `@layer base` (`globals.css`) para Light, Dark e High Contrast (WCAG AAA).

---

## 3. Matriz de Rotas Auditadas

| Rota | Tipo | First Load JS | SEO & Meta | Schemas JSON-LD | Status |
|---|---|---|---|---|---|
| `/` | Static (○) | ~146 kB | Metadata completa, Canonical, OG | NGO, Organization | `PASS` |
| `/distrofias` | Static (○) | ~132 kB | Metadata enciclopédica | MedicalWebPage | `PASS` |
| `/distrofias/[slug]` | Dynamic (ƒ) | ~115 kB | Metadata médica dinâmica por slug | MedicalCondition | `PASS` |
| `/noticias` | Static (○) | ~134 kB | Metadata de feed editorial | NewsMediaOrganization | `PASS` |
| `/noticias/[slug]` | Dynamic (ƒ) | ~116 kB | Metadata de artigo dinâmico | NewsArticle | `PASS` |
| `/redacao` | Static (○) | ~115 kB | Política editorial & transparência | EditorialBoard | `PASS` |
| `/_not-found` | Static (○) | ~103 kB | Fallback de rota customizado | N/A | `PASS` |

---

## 4. Componentes Críticos Auditados

1. **`HeaderNav.tsx`**: Menu institucional simplificado (4 links principais: Início, Sobre, Distrofias, Notícias + Botão de Doação PIX). Posição `fixed top-0 z-50` com suporte a estados de scroll.
2. **`HeroSection.tsx`**: Seção de entrada com background institucional dinâmico, identificador ACADIM, CTAs e selos de transparência fiscal.
3. **`MascotsSection.tsx`**: Representação de inclusão infantil com os mascotes fundadores **Clara** (Nossa Heroína) e **Pedro** (Nosso Campeão).
4. **`FAQSection.tsx`**: Accordion com controle de acessibilidade `aria-expanded` e navegação via Teclado (`Enter`) e Mouse.
5. **`DonationCTA.tsx` & `PixModal.tsx`**: Mecanismos institucionais de doação direta com cópia automática de chave Pix CNPJ e fallback cross-browser.
6. **`Footer.tsx`**: Rodapé institucional de 4 colunas com navegação completa e rede social.

---

## 5. Próximos Passos (Fases A a U)

Com o **Gate Zero (Baseline Audit)** 100% homologado e documentado, o projeto avança para a **Fase A (Arquitetura Visual)** e **Fase B (Header / Navegação)** para garantir o refinamento do design system, responsividade móvel de alta precisão e transições visuais sóbrias e institucionais.
