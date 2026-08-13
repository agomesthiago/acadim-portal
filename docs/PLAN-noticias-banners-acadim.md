# PLANO DE REESTRUTURAÇÃO DAS IMAGENS E BANNERS DAS NOTÍCIAS ACADIM

**Data:** 12 de Agosto de 2026  
**Escopo:** Reestruturação visual das imagens de capa (banners) de todas as 29 notícias jornalísticas do Portal ACADIM.

---

## 1. OBJETIVO

Garantir que **cada uma das 29 notícias** possua uma imagem de capa (banner horizontal) única, contextual e profissional, eliminando a repetição genérica de imagens e estabelecendo um **Banner Institucional Padronizado** para matérias oficiais da ACADIM.

---

## 2. REGRAS DE CATEGORIZAÇÃO E DESIGN DOS BANNERS

### A. Notícias Oficiais ACADIM (Eventos, Direitos, Notícias da Associação)
- **Critério:** Categorias `Eventos ACADIM`, `Direitos no SUS`, `Histórias de Vida`, `Comunicados`, `Avisos` ou autoria direta da ACADIM.
- **Padrão Visual:** Banner horizontal institucional de alta definição incorporando:
  - Logo oficial da ACADIM (`/public/logo-nome.png` ou `/public/logo.svg`);
  - Fundadores Clara e Pedro (`/public/mascotes.png` em escala proporcional);
  - Identidade visual azul institucional da ACADIM com badge da categoria.
- **Artefatos:** Banners armazenados em `/public/assets/banners/`:
  - `banner-acadim-eventos.webp`
  - `banner-acadim-direitos-sus.webp`
  - `banner-acadim-historias-vida.webp`
  - `banner-acadim-institucional.webp`

### B. Notícias Científicas e Internacionais (FDA, EMA, Terapia Gênica, Pesquisa)
- **Critério:** Categorias `Avanços Científicos`, `Pesquisa & Ensaios Clínicos`, `Aprovações Terapêuticas`, `Diretrizes Clínicas & Manejo`.
- **Padrão Visual:** Imagens fotográficas de alta resolução e precisão biomédica/científica específicas para o tema de cada matéria:
  - Terapia Gênica / Microdistrofina (Laboratório & DNA);
  - Aprovação FDA / EMA (Regulação e Ciência);
  - Diagnóstico Precoce / Teste do Pezinho (Pediatria & Neonatologia);
  - Ensaios Clínicos & Edição Gênica CRISPR (Biotecnologia);
  - Reabilitação & Fisioterapia Respiratória (Cuidado Multidisciplinar).

---

## 3. COMPONENTES E ESTRUTURA AFETADA

1. **`data/custom-news.json` & `lib/news/static-news.ts`:**
   - Atualização do campo `coverImage`, `imageAlt` e `imageCredit` para cada um dos 29 artigos.
2. **`components/NewsImage.tsx`:**
   - Suporte estendido para renderização responsiva em aspect-ratio 16:9 / horizontal de alta definição com fallback gracioso.
3. **`components/AcadimBanner.tsx` (Novo Componente Opcional):**
   - Gerador visual dinâmico em SVG/Canvas/React para banners institucionais com logo e mascotes fundadores.

---

## 4. PLANO DE EXECUÇÃO EM FASES

- **Fase 1:** Geração/Criação dos banners padronizados institucionais com a logo da ACADIM e os mascotes fundadores Clara e Pedro.
- **Fase 2:** Seleção e mapeamento de imagens científicas exclusivas para as matérias de pesquisa internacional.
- **Fase 3:** Atualização dos datasets (`custom-news.json` e `static-news.ts`) atribuindo `coverImage` único a 29/29 matérias.
- **Fase 4:** Validação via `npm run typecheck`, `npm run build` e suíte Playwright.
- **Fase 5:** Commit e deploy na Vercel em `https://acadim-portal.vercel.app`.
