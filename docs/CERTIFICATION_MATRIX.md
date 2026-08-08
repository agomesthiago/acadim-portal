# Matriz de Certificação de Produto e Engenharia ACADIM (Fase 9)

Este documento estabelece a matriz oficial de Engenharia e Produto do portal **ACADIM**, refletindo com precisão a distinção entre a automação de CI (pipeline), a runtime responsiva (Mobile Runtime) e a certificação editorial, acessível e médica do produto.

---

## 1. Visão Geral do Roadmap da Fase 9

```text
FASE 9 — ROADMAP DE ENGENHARIA E PRODUTO ACADIM
│
├── 9.3 QA Estrutural / Funcional (CI Pipeline) ..... PASS
├── 9.4 Mobile Runtime Certification ................ PASS
│   ├── Light × 9 Viewports ......................... PASS
│   ├── High Contrast × 9 Viewports ................. PASS
│   └── Dark × 9 Viewports .......................... PASS
├── 9.5 Accessibility & Reflow Certification ........ PENDING
├── 9.6 Editorial, News & Structured Data ........... PENDING
└── 9.7 Medical Knowledge Base & Taxonomy ........... PENDING
```

---

## 2. Status Detalhado por Gate de Engenharia

| Gate / Critério | Descrição | Estado | Observação |
| --- | --- | --- | --- |
| **Gate 1 — CI Pipeline** | `.github/workflows/ci.yml` | **PASS** | `npm ci`, lint, build, Playwright em runner Ubuntu |
| **Gate 2 — Next.js Build** | Compilação das 7 rotas App Router | **PASS** | 0 erros de compilação ou rotas dinâmicas |
| **Gate 3 — TypeScript** | Checagem estática de tipos | **PASS** | 0 erros de compilação TS |
| **Gate 4 — ESLint** | Análise estática de código | **PASS** | 0 warnings ou erros impeditivos |
| **Gate 5 — Overflow Mensurável** | `scrollWidth === clientWidth` | **PASS** | Validados 320, 360, 375, 390, 412, 480, 768, 1024, 1280px |
| **Gate 6 — Regressão Visual** | Comparação automatizada contra baseline | **PENDING** | Requer suíte `toHaveScreenshot()` com baselines |
| **Gate 7 — Mobile Touch** | Touch targets $\ge 44 \times 44$ CSS px | **PASS** | Auditado no escopo dos componentes testados |
| **Gate 8 — Composição Responsiva** | Disposição vertical e sem clipping | **PASS** | Auditado no escopo dos 9 viewports |
| **Gate 9 — Reflow WCAG 1.4.10** | Ausência de perda de info em 320 CSS px | **PENDING** | Exige auditoria visual de reflow sem rolagens bidimensionais |
| **Gate 10 — Hardware Físico** | Teste em dispositivos reais iOS/Android | **PENDING** | Aguarda validação em telefones físicos |
| **Gate 11a — Light × 9 Viewports** | Matriz Light em 9 larguras | **PASS** | Executado e auditado (0 overflow) |
| **Gate 11b — High Contrast × 9 Viewports** | Matriz High Contrast em 9 larguras | **PASS** | Executado e auditado (0 overflow) |
| **Gate 11c — Dark × 9 Viewports** | Matriz Dark em 9 larguras | **PASS** | Executado e auditado (0 overflow + screenshots) |
| **Gate 12 — Interatividade Mobile** | Menus, modais, FAQ toggle, PIX | **PASS** | Auditado com sucesso nos testes interativos DOM |

---

## 3. Escopo das Próximas Fases de Produto

### Fase 9.6 — Editorial, News & Structured Data Certification
- **Governança Editorial Transparente**: Uso exclusivo do **"Núcleo Editorial ACADIM"** como entidade institucional responsável por curadoria e tradução (sem apresentar pessoas fictícias como médicos/pesquisadores).
- **Ficha Editorial por Notícia**: Título, linha fina, imagem, data de publicação, data de modificação, núcleo editorial, fonte original, autor original, link externo original, resumo, contexto, implicações e fontes complementares.
- **Dados Estruturados Schema.org (JSON-LD)**: Implementação em Next.js App Router para `NewsArticle` (`headline`, `description`, `image`, `datePublished`, `dateModified`, `author`, `publisher`, `citation`, `sourceOrganization`, `isAccessibleForFree`), `Organization`, `WebSite` e `BreadcrumbList`.

### Fase 9.7 — Medical Knowledge Base & Taxonomy Certification
- **Taxonomia Médica Fundamentada**: Eliminação de afirmações sem fonte (ex: "10 principais formas em ordem de frequência"). Construção de taxonomia oficial respaldada em bases médicas consolidadas (NIH/GARD, Orphanet, OMIM, GeneReviews).
- **Hierarquia de Conhecimento**:
  ```text
  Distrofias Musculares → Tipo → Subtipo → Wiki Médico Individual
  ```
- **Estrutura da Página Wiki Médica Terminal**:
  - Definição, Nomenclatura & Sinônimos
  - Classificação, Genética (gene, proteína) e Padrão de Herança
  - Mecanismo Fisiopatológico
  - Idade de Início, Manifestações Clínicas e Progressão
  - Diagnóstico, Diagnóstico Diferencial e Exames Complementares
  - Tratamento, Manejo Multidisciplinar, Terapias Aprovadas e Investigacionais
  - Pesquisas Clínicas, Prognóstico, Epidemiologia e Complicações
  - FAQ Específico, Fontes Médicas e Data de Revisão Editorial
- **Cards da Página Principal**: Índice informativo e claro (nome, grupo/classificação, característica distintiva, herança, faixa de início e link para a página wiki).

### Fase 9.5 — Accessibility & Reflow Certification
- Conformidade WCAG 1.4.10 (Reflow em 320 CSS px / 400% zoom).
- Checagem de contraste de cor (mínimo 4.5:1 para texto normal, 3:1 para grande).
- Navegação por teclado, indicadores visuais de foco e nomes acessíveis computados.
- Testes com leitores de tela assistivos reais (VoiceOver / TalkBack / NVDA).
