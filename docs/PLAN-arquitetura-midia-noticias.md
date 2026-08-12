# PLAN: Arquitetura Híbrida de Mídia, Armazenamento Desacoplado & Diretrizes Editoriais (25 Notícias)

**Status:** Planejado / Aguardando Aprovação  
**Data:** 11/08/2026  
**Escopo:** Definição arquitetural de armazenamento de mídia, abstração de drivers (Local vs Produção), política de direitos autorais de imagem e plano de carga editorial de 25 notícias para o Portal ACADIM.

---

## 1. Visão Geral da Arquitetura Híbrida

A arquitetura do portal ACADIM adota uma separação clara entre **Gestão Editorial**, **Armazenamento de Mídia** e **Camada de Apresentação**.

```
┌─────────────────────────────────────────────────────────────┐
│                      ADMIN ACADIM                           │
│        (Única interface de uso do editor/usuário)           │
└──────────────┬──────────────────────────────┬───────────────┘
               │                              │
     Upload de Imagem               Dados da Notícia / Hero
               │                              │
               ▼                              ▼
┌──────────────────────────────┐┌──────────────────────────────┐
│     STORAGE DE IMAGEM        ││       BANCO EDITORIAL        │
│                              ││                              │
│ Local: public/uploads/       ││ Local: data/custom-news.json │
│ Prod:  Vercel Blob (CDN)     ││ Prod:  Airtable Database     │
└──────────────┬───────────────┘└──────────────┬───────────────┘
               │                              │
               │ URL Permanente / Imutável     │ Metadados
               └──────────────┬───────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                       NEXT.JS PORTAL                        │
│            (Apresentação / SEO / GEO / Fallbacks)           │
└─────────────────────────────────────────────────────────────┘
```

### Princípios Fundamentais:
1. **Airtable = Banco Editorial (Metadata Only):** O Airtable atua estritamente como cadastro de títulos, resumos, conteúdos Markdown, categorias, tags, fontes e referências de imagens. **Nenhum anexo público direto do Airtable será utilizado como URL final de exibição**, prevenindo erros de expiração de links (expiração de tokens de anexo do Airtable).
2. **Vercel Blob / Storage Local = Mídia Permanente:** Em produção na Vercel, o **Vercel Blob** é o destino imutável das imagens enviadas. Em desenvolvimento local, utiliza-se a pasta `public/uploads/`.
3. **Painel Admin Unificado:** O editor opera exclusivamente pela interface do portal ACADIM (`/admin/noticias`, `/admin/hero`). O sistema gerencia o upload para o storage e o salvamento dos dados no repositório de forma transparente.

---

## 2. Abstração por Drivers (Local-First vs Produção)

Para garantir que o desenvolvimento continue **100% funcional offline e local-first** sem acoplamento rígido a serviços externos, a aplicação utiliza o padrão de Drivers/Repositórios:

### A. Armazenamento de Imagens (`ImageStorageDriver`)
- **`LocalImageStorageDriver` (Dev/Local):**
  - Armazena arquivos fisicamente no diretório `public/uploads/`.
  - Retorna caminhos relativos estáticos: `/uploads/news-1786500.jpg`.
- **`VercelBlobImageStorageDriver` (Produção Vercel):**
  - Envia o buffer do arquivo via SDK `@vercel/blob` com acesso público (`access: 'public'`).
  - Retorna URLs CDN imutáveis: `https://...blob.vercel-storage.com/news-1786500.jpg`.

### B. Repositório de Notícias (`NewsRepository`)
- **`LocalNewsRepository` (Dev/Local):**
  - Persiste em `data/custom-news.json` e consome matérias de `lib/news/static-news.ts`.
- **`AirtableNewsRepository` (Produção):**
  - Realiza consultas e escritas via API REST do Airtable.

---

## 3. Modelo de Dados de Imagens & Notícias

Cada registro de notícia possui estrutura para rastrear a origem da imagem e a URL final de CDN:

```typescript
export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string; // Formato Markdown
  contentFormat?: 'markdown' | 'html';
  category: NewsCategory;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string; // Data ISO (ex: "2026-08-12")
  originalStudyDate?: string; // Data original do estudo científico (ex: "15/03/2024")
  
  // Gestão de Mídia & Direitos
  imageUrl: string; // URL pública final (Blob ou /uploads/...)
  sourceImageUrl?: string; // URL de referência da fonte (opcional)
  imageCredit?: string; // Crédito / Licença (ex: "Foto: NIH / Wikimedia Commons CC-BY")
  
  // Fontes & Referências
  sourceName?: string; // Ex: "The Lancet Neurology"
  sourceUrl?: string; // Link direto para a publicação / DOI
  
  featured: boolean;
  status: 'draft' | 'published';
}
```

---

## 4. Política Editorial & Direitos Autorais de Imagens

Para evitar republicação não autorizada ou quebra de links de portais jornalísticos de terceiros, adota-se as seguintes regras de captação de imagem:

1. **Proibição de Scraping Direto de Imprensa:** Não copiar fotografias de veículos jornalísticos privados sem licença explícita.
2. **Fontes de Mídia Autorizadas:**
   - Acervo e acervo fotográfico institucional próprio da **ACADIM**;
   - Material de imprensa oficial divulgado por universidades, centros de pesquisa e órgãos públicos (NIH, Anvisa, FDA, OMS);
   - Bancos de mídia aberta com licença compatível (Wikimedia Commons, Unsplash Editorial, ilustrações de domínio público);
   - Gráficos conceituais / ilustrações institucionais desenvolvidos internamente;
   - Fallback visual padrão (`/assets/community-bg.jpg`).
3. **Mecanismo de Cópias Autorizadas:** Quando uma fonte oficial disponibilizar imagem de divulgação pública, o upload será feito via Admin para o Storage permanente (Vercel Blob / Local), garantindo independência da fonte original.

---

## 5. Diretrizes Editoriais para Carga Inicial de 25 Notícias (Expansível a 50)

### Regras de Qualidade e Conteúdo:
1. **Zero Invenção / Veracidade Total:** Todas as matérias tratam de descobertas, ensaios clínicos, direitos e novidades regulatórias reais com fontes citadas.
2. **Proporção Geográfica:**
   - **Internacional (Maioria):** Avanços em terapia gênica, edição genética (CRISPR), oligonucleotídeos antisense (AONs), pequenas moléculas e diretrizes globais (FDA, EMA, Lancet, NEJM).
   - **Nacional (Minoria):** Incorporações no SUS, decisões da CONITEC, regulação Anvisa e iniciativas no Estado do Rio de Janeiro.
3. **Datas Duplas:** 
   - `publishedAt` no Portal ACADIM: Distribuídas entre 12/08/2026 e 13/08/2026.
   - `originalStudyDate` no corpo/metadados: Preserva a data em que o estudo ou aprovação foi publicado na literatura científica original.
4. **Obrigatoriedade de Fonte Primária:** Toda notícia científica conterá link direto (`sourceUrl`) para o artigo de origem, registro do ensaio (`clinicaltrials.gov`) ou comunicado oficial.
5. **Regra Antiesperança / Isenção Clínica em Doenças Raras (MANDATÓRIA):**
   - **Proibição:** Nenhuma matéria deve afirmar ou sugerir que um tratamento está disponível no Brasil ou no SUS apenas por ter sido aprovado ou pesquisado no exterior.
   - **Cláusula Padrão:** Matérias sobre medicamentos/pesquisas internacionais devem obrigatoriamente incluir a ressalva:  
     > *"Aviso Institucional: Este avanço refere-se a pesquisas/aprovações no exterior. A disponibilidade no Brasil depende de registro prévio na Anvisa e avaliação de incorporação ao SUS pela CONITEC."*

6. **Formatação & SEO/GEO/AIO:**
   - Conteúdo redigido em **Markdown** limpo.
   - Estruturação focada em legibilidade mobile (parágrafos curtos, tópicos em bullet-points, destaques).
   - Metadados SEO (JSON-LD `NewsArticle` e `MedicalWebPage`) integrados para indexação por motores de busca e modelos de IA (ChatGPT, Claude, Perplexity).

---

## 6. Plano de Ação para a Fase Editorial

```
 ┌─────────────────────────────────────────────────────────────┐
 │ FASE 1: Preparação do Driver de Mídia & Schema              │
 │ - Ajuste do schema de notícias para suportar dados de mídia │
 │ - Implementação do abstrator de storage (Local vs Blob)     │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ FASE 2: Redação e Curadoria do Lote 1 (25 Notícias)         │
 │ - Mapeamento dos 25 estudos/temas reais com links diretos   │
 │ - Redação em Markdown com cláusulas de isenção no SUS       │
 │ - Seleção de imagens licenciadas / institucionais           │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ FASE 3: Ingestão Local via Painel Admin                     │
 │ - Cadastro das 25 matérias no painel `/admin/noticias/nova` │
 │ - Confirmação de upload local e renderização estática       │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ FASE 4: Validação Visual, Filtros & Performance             │
 │ - Inspeção das 25 matérias em `/noticias` e `/[slug]`       │
 │ - Validação de busca por termo e filtro por categorias      │
 └─────────────────────────────────────────────────────────────┘
```

---

## 7. Verificação e Critérios de Conclusão

- [ ] Schema estendido suportando `sourceName`, `sourceUrl`, `originalStudyDate` e `imageCredit`.
- [ ] 25 notícias cadastradas em Markdown sem texto fictício (lorem ipsum).
- [ ] Todas as matérias internacionais contendo a ressalva de isenção de disponibilidade no SUS.
- [ ] 100% das notícias com links de fonte primária funcionais.
- [ ] Imagens armazenadas localmente em `public/uploads/` sem depender de URLs expiráveis do Airtable ou scraping de portais privados.
- [ ] Renderização visual sem quebras em mobile (360px a 1440px).
