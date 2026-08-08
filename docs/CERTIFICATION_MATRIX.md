# Matriz de Certificação de Produto e Engenharia ACADIM (Fase 9)

Este documento estabelece o roadmap completo de certificação do portal **ACADIM**, diferenciando explicitamente o **PASS de Pipeline/CI** do **PASS de Certificação do Produto**.

---

## 1. Visão Geral da Fase 9

```text
FASE 9 — CERTIFICAÇÃO DO PRODUTO & ARQUITETURA
│
├── 9.3 QA Estrutural / Funcional (CI) ...... PASS
├── 9.4 Mobile Visual & Interação ........... PENDING
├── 9.5 Acessibilidade (WCAG 1.4.10 / NVDA) . PENDING
├── 9.6 Editorial, SEO & Schema.org ......... PENDING
└── 9.7 Knowledge Base Médica & Taxonomia ... PENDING
```

---

## 2. Detalhamento por Fase

### Fase 9.3 — QA Estrutural & Funcional (Pipeline CI)
- [x] Workflow GitHub Actions (`.github/workflows/ci.yml`)
- [x] Resolução de dependências (`npm ci`)
- [x] Análise estática (`ESLint`) e checagem de tipos (`TypeScript`)
- [x] Compilação de produção Next.js App Router (`npm run build`)
- [x] Push sincronizado com a branch `master` no GitHub
- [x] Suíte de testes automatizados Playwright (`npm run test:qa`)
- [x] Checagem geométrica horizontal (0 overflow em viewports de teste)
- [x] Validação funcional DOM (FAQ toggle, cópia CNPJ PIX, âncoras)

### Fase 9.4 — Mobile Visual & Interaction Certification
- [ ] Matriz de 9 viewports: `320px`, `360px`, `375px`, `390px`, `412px`, `480px`, `768px`, `1024px`, `1280px`.
- [ ] Matriz de 3 temas: `Light`, `Dark`, `High Contrast`.
- [ ] Validação de Touch Targets (área de toque $\ge 44 \times 44$ CSS px).
- [ ] Auditar componentes interativos em telas pequenas: Menus mobile, Modais, Accordions e CTAs.
- [ ] Detecção de clipping de texto, overlap de elementos e truncamento involuntário.
- [ ] Captura e comparação de visual snapshots contra baselines.

### Fase 9.5 — Accessibility Certification (WCAG & Assistiva)
- [ ] Conformidade WCAG 1.4.10 (Reflow equivalente a 400% de zoom sem rolagem bidimensional).
- [ ] Rácio de contraste de cor rigoroso nos 3 temas.
- [ ] Foco visível e ordem lógica de tabulação via teclado.
- [ ] Nomes acessíveis computados (`aria-label`, `aria-labelledby`, `aria-describedby`).
- [ ] Validação assistiva real em leitores de tela (`VoiceOver`, `TalkBack`, `NVDA`).
- [ ] Navegabilidade semântica efetiva (área de toque, landmarks, headings).

### Fase 9.6 — Content Architecture & Editorial QA
- [ ] **Estrutura Editorial Institucional**: Substituir referências fictícias a profissionais de saúde por um corpo editorial institucional transparente (sem inventar médicos ou cientistas reais).
- [ ] **Ficha Técnica Editorial**: Definir autoria, revisão institucional e fonte primaria em todas as notícias.
- [ ] **Curadoria e Crédito**: Notícias baseadas em fontes reais com atribuição clara, data e link original.
- [ ] **Anti-duplicação**: Desduplicação estrita por URL, título, entidade e conteúdo.
- [ ] **Dados Estruturados (Schema.org)**: Implementar marcadores JSON-LD (`NewsArticle`, `Article`, `BreadcrumbList`, `Organization`, `WebSite`).
- [ ] **Páginas Editoriais Substanciais**: Transição de cards resumos para páginas de notícias completas com categorias e arquivos.

### Fase 9.7 — Knowledge Base Médica de Distrofias & Taxonomia
- [ ] **Arquitetura Taxonômica Rigorosa**:
  ```text
  Distrofias Musculares
  └── Tipo (ex: Distrofias Musculares Congênitas, Cinturas, etc.)
      └── Subtipo (ex: LAMA2-RD, COL6-RD, etc.)
          └── Página Individual / Wiki Médico Terminal
  ```
- [ ] **Conteúdo da Página Terminal (Wiki Médico)**:
  - Definição e Nomenclatura / Sinônimos
  - Classificação e Genética (gene, proteína, padrão de herança)
  - Mecanismo Fisiopatológico
  - Idade de Início, Manifestações Clínicas e Progressão
  - Diagnóstico, Diagnóstico Diferencial e Exames Complementares
  - Tratamento, Manejo Multidisciplinar, Terapias Aprovadas e Investigacionais
  - Prognóstico, Epidemiologia e Complicações
  - FAQ Específico, Fontes Médicas e Data de Atualização Editorial
- [ ] **Cards da Home Relevantes**: Exibir nome, classificação, herança, faixa de início e link para a página wiki correspondente.
- [ ] **Rigor Científico**: Fundamentação estrita em fontes médicas consolidadas (ex: NIH/GARD, Orphanet, OMIM, GeneReviews) sem inventar taxonomias.

---

## 3. Matriz Tecnológica de Status

| Componente / Frente | Status Automatizado (CI) | Status de Certificação de Produto |
| ------------------- | ------------------------ | --------------------------------- |
| Pipeline CI/CD      | **PASS**                 | **PASS**                          |
| Next.js App Router  | **PASS**                 | **PASS**                          |
| Layout Responsivo   | **PASS (0 Overflow)**    | **PENDING (QA 9 Viewports)**      |
| Acessibilidade DOM  | **PASS (Atributos)**     | **PENDING (NVDA / Reflow 400%)**  |
| Editorial & Notícias| **PASS (Rotas básicas)** | **PENDING (Schema / Ficha)**      |
| Base de Distrofias  | **PASS (Rotas básicas)** | **PENDING (Taxonomia Wiki)**      |
