# ACADIM — Relatório de Auditoria de Acessibilidade (WCAG 2.2 AA)

> **Data:** 09 de Agosto de 2026  
> **Escopo:** Conformidade WCAG 2.2 Níveis A, AA e extensão AAA para contraste e suporte visual.

---

## 1. Matriz de Auditoria de Acessibilidade

| Critério WCAG 2.2 | Requisito | Status | Evidência de Implementação |
|---|---|---|---|
| **1.1.1 Non-text Content** | Alt text descritivo em todas as imagens institucionais | `PASS` | `HeroSection.tsx`, `NewsSection.tsx`, `MascotsSection.tsx` contêm alt text descritivo com contexto clínico e humano. |
| **1.3.1 Info and Relationships** | Hierarquia semântica e landmarks | `PASS` | Uso estrito de `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>` com aria-label único por landmark. |
| **1.4.3 Contrast (Minimum)** | Contraste de texto min. 4.5:1 | `PASS` | Cores semânticas validadas (Branco `#FFFFFF` sobre Slate-950 `#0F172A` = 19:1; Texto Slate-800 `#1E293B` sobre `#FFFFFF` = 14:1). |
| **1.4.10 Reflow** | Suporte sem scroll horizontal duplo em 320px | `PASS` | Validado via Playwright em viewports de 320px, 360px, 375px, 390px e 412px (`0px` overflow horizontal). |
| **2.1.1 Keyboard** | Operação 100% via teclado | `PASS` | Navegação completa via Tab em Header, Modais (PixModal), Accordion de FAQ (Enter/Espaço) e Footer. |
| **2.1.2 No Keyboard Trap** | Ausência de armadilhas de foco | `PASS` | `PixModal.tsx` e Header Mobile implementam Focus Trap com liberação via `Escape`. |
| **2.4.1 Bypass Blocks** | Link de salto para o conteúdo principal | `PASS` | `SkipLink.tsx` implementado apontando para `#main-content`. |
| **2.4.2 Page Titled** | Títulos de página informativos e dinâmicos | `PASS` | Metadata App Router configurada para cada rota (`/`, `/distrofias`, `/distrofias/[slug]`, `/noticias`, `/noticias/[slug]`, `/redacao`). |
| **2.4.6 Headings and Labels** | H1 único e hierarquia de títulos sem saltos | `PASS` | 1 único `<h1>` por página. Hierarquia H1 -> H2 -> H3 estritamente respeitada. |
| **2.4.7 Focus Visible** | Foco visualmente perceptível | `PASS` | `@layer base` em `globals.css` define `*:focus-visible { outline: 3px solid var(--color-border-focus) !important; outline-offset: 3px !important; }`. |
| **2.5.8 Target Size (Minimum)** | Alvos de toque com no mínimo 44x44px | `PASS` | Todos os botões e links de navegação utilizam `min-h-[44px]` e `min-w-[44px]`. |
| **3.1.1 Language of Page** | Idioma da página definido | `PASS` | `<html lang="pt-BR">` em `app/layout.tsx`. |
| **Leitores de Tela Físicos** | Teste com NVDA / VoiceOver em hardware físico | `MANUAL REQUIRED` | Requer homologação presencial em leitores de tela físicos sob condições reais de uso. |

---

## 2. Ferramenta de Acessibilidade Toolbar (`AccessibilityToolbar.tsx`)

A plataforma ACADIM oferece uma toolbar flutuante permanente (`z-50`) que permite ao usuário:
1. Alternar tamanho de fonte (Normal, Grande 112.5%, Extra Grande 125%).
2. Alternar temas de contraste (Modo Claro, Modo Escuro, Modo Alto Contraste AAA Amarelo/Preto).
3. Ativar/desativar modo de movimento reduzido (`data-reduced-motion`).
4. Ativar/desativar leitor VLibras para interpretação em LIBRAS.
