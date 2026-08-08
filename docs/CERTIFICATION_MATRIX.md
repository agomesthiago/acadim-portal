# Matriz de Status Técnico e Certificação ACADIM

Este documento registra a distinção formal entre a **Automação de CI** (integração contínua e compilação) e a **Certificação do Produto** (aprovação definitiva de interface responsiva, acessível e funcional).

---

## 1. Tabela de Status Atual

| Área / Teste                        | Escopo                              | Estado        |
| ----------------------------------- | ----------------------------------- | ------------- |
| GitHub Actions CI Pipeline          | Compilação & Automação CI           | **PASS**      |
| `npm ci`                            | Instalação de Dependências          | **PASS**      |
| TypeScript                          | Validação de Tipagem                | **PASS**      |
| ESLint                              | Análise Estática de Código          | **PASS**      |
| Next.js Production Build            | Compilação das 7 Rotas App Router  | **PASS**      |
| Push `master → origin`              | Sincronização de Código             | **PASS**      |
| Runtime Estrutural DOM              | Ordem Posicional & Âncoras do Menu  | **PASS**      |
| Runtime Funcional (Interatividade)  | FAQ Toggle & Cópia de PIX           | **PASS**      |
| Playwright Viewport Overflow (CI)   | 0 Overflow em 320, 375, 390, 1280px | **PASS (CI)** |
| Regressão Visual Comparativa        | Snapshots visuais contra baseline   | **PENDING**   |
| Mobile Visual (Design System)       | Fidelidade de Tipografia e Layout   | **PENDING**   |
| Mobile Touch (Físico/Emulado)       | Gestos, Tap Targets & Alvos de Toque| **PENDING**   |
| Light/Dark/High Contrast × Mobile   | Combinação de Modos com Telas       | **PENDING**   |
| Acessibilidade WCAG 1.4.10 / 400%   | Zoom Responsivo & Reflow            | **PENDING**   |
| Teste em Hardware Físico            | Dispositivos Reais Android e iOS    | **PENDING**   |
| Leitores de Tela (TalkBack/NVDA)    | Acessibilidade Assistiva            | **PENDING**   |
| Core Web Vitals (LCP/FID/CLS)       | Performance em Rede 3G/4G Móvel     | **PENDING**   |

---

## 2. Distinção Crucial: CI vs. Certificação

- **CI (Integração Contínua)**: Garante que o código compila, passa no linter, nos tipos e nos testes automatizados Playwright de geometria/DOM.
- **Certificação (Visual & UX)**: Garante que a interface foi auditada e aprovada em dispositivos reais, com contraste rigoroso, leitores de tela e validação de design.

> [!NOTE]
> Nenhum teste automatizado de geometria horizontal (0 overflow) deve ser interpretado como certificação visual definitiva de interface.

---

## 3. Arquitetura da Pipeline CI

```text
PUSH / PULL REQUEST
        │
        ▼
   npm ci
        │
        ▼
     LINT
        │
        ▼
   TYPECHECK
        │
        ▼
  NEXT BUILD
        │
        ▼
 START PRODUCTION SERVER
        │
        ▼
 PLAYWRIGHT RUNTIME (DOM, FAQ, PIX, Overflow)
        │
        ▼
 MOBILE VIEWPORT SCREENSHOTS (320px, 375px, 390px, 1280px)
        │
        ▼
 ARTIFACTS UPLOAD (Screenshots retidos no GitHub Actions)
```
