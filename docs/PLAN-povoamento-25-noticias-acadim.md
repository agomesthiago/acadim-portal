# PLAN: Povoamento Editorial do Portal ACADIM (25 Notícias Reais + Revisão das Existentes)

**Status:** Planejamento Concluído / Pronto para Execução  
**Data-base:** 11/08/2026  
**Data Editorial de Publicação no Portal:** 12/08/2026 a 13/08/2026  
**Escopo:** Inspecionar e refatorar as notícias atuais, produzir 25 matérias científicas/institucionais não repetitivas e injetá-las diretamente em `data/custom-news.json` (mantendo-as 100% editáveis no Admin).

---

## 1. Diretrizes Editoriais Mandatórias

### A. Isenção de Disponibilidade no SUS ("Regra Antiesperança")
- **Obrigatória em 100% das matérias internacionais:** Nenhuma notícia sobre avanços, aprovações no exterior (FDA, EMA) ou ensaios clínicos internacionais pode afirmar que a terapia está disponível no Brasil.
- **Cláusula Padrão:**
  > *"Aviso Institucional: Este avanço refere-se a pesquisas/aprovações no exterior. A disponibilidade no Brasil depende de registro prévio na Anvisa e avaliação de incorporação ao SUS pela CONITEC."*

### B. Distinção de Datas
- `publishedAt`: Data simulada de publicação no Portal ACADIM (12/08/2026 ou 13/08/2026).
- `originalStudyDate` / `Fonte original`: Registrada no corpo em Markdown e nos metadados preservando a data exata da descoberta original (ex: *"Fonte original: The Lancet Neurology, publicada em 14 de maio de 2024"*).

### C. Níveis de Evidência Explicitados no Texto
Toda matéria deixará claro o estágio científico da informação:
1. **Aprovado / Regulado** (medicamentos já registrados por agências);
2. **Ensaio Clínico em Andamento** (Fase 1, 2 ou 3 em humanos);
3. **Pesquisa Pré-Clínica** (modelos celulares/animais ou hipótese).

### D. Imagens e Mídia
- Uso exclusivo de assets locais (`/assets/community-bg.jpg`, `/assets/hero-bg-2.jpg`, etc.) ou imagens institucionais com licença livre/crédito atribuído.
- Fim da dependência de URLs temporárias do Airtable ou scraping não licenciado de veículos jornalísticos de terceiros.

---

## 2. Revisão das Notícias Existentes

Antes da injeção das 25 novas matérias, as 4 matérias existentes passam por refatoração de qualidade:

1. **`avancos-terapia-genica-duchenne-2026`**:
   - Conversão de corpo HTML para Markdown limpo.
   - Adição do aviso de isenção no SUS/Anvisa.
   - Preservação integral dos fatos e referências científicas.
2. **`direitos-sus-medicamentos-orteses-guia`**:
   - Conversão de corpo HTML para Markdown limpo.
   - Organização de listas e seções informativas para famílias no RJ.
3. **`simposio-carioca-distrofia-muscular-2026`**:
   - Conversão para Markdown limpo e manutenção dos destaques institucionais.
4. **`historia-superacao-autonomia-fshd`**:
   - Conversão para Markdown limpo e contextualização sobre a Distrofia Fácio-Escápulo-Umeral.

---

## 3. Matriz de Distribuição das 25 Novas Notícias

| ID | Subtipo / Tema | Título Resumido | Categoria Editorial | Fonte Primária |
|---|---|---|---|---|
| **01** | Duchenne (DMD) | FDA aprova expansão de terapia de microdistrofina (Elevidys) | Aprovações Terapêuticas | FDA / NEJM |
| **02** | Duchenne (DMD) | Avanços em Oligonucleotídeos PMO e Salto de Éxons (51, 53, 45) | Avanços Científicos | Nature Reviews Neurology |
| **03** | Duchenne (DMD) | Vamorolona (Agamree): Corticosteroide dissociativo de nova geração | Aprovações Terapêuticas | EMA / Lancet Neurology |
| **04** | Duchenne (DMD) | Proteção Cardíaca e Biomarcadores de Cardiomiopatia na DMD | Diretrizes Clínicas & Manejo | Journal of ACC / MDA |
| **05** | Becker (BMD) | Givinostat e Inibição de HDAC em Pacientes com Becker | Pesquisa & Ensaios Clínicos | NEJM / PPMD |
| **06** | Duchenne (DMD) | Edição Genética via CRISPR-Cas9 para Correção de Leitura no Gene DMD | Avanços Científicos | Science Translational Medicine |
| **07** | Duchenne (Brasil) | Diretrizes do SUS e Diagnóstico Molecular por NGS | Direitos no SUS | Anvisa / CONITEC / Ministério da Saúde |
| **08** | LGMD R1 | Terapia Gênica por AAV para Calpainopatia (CAPN3) | Avanços Científicos | Molecular Therapy / LGMD2A Foundation |
| **09** | LGMD R2 | Reparo da Membrana Sarcolemal e Proteína Disferlina | Pesquisa & Ensaios Clínicos | Jain Foundation / NIH |
| **10** | LGMD R3-R6 | Vetores AAV em Sarcoglicanopatias: Resultados de Fase I/II | Pesquisa & Ensaios Clínicos | PubMed / ClinicalTrials.gov |
| **11** | LGMD (Brasil) | Mapeamento Genético de Mutações de Cinturas na População Brasileira | Avanços Científicos | Arquivos de Neuro-Psiquiatria |
| **12** | FSHD1 | Inibição do Gene DUX4 (Losmapimod / Ensaio REACH) | Pesquisa & Ensaios Clínicos | FSHD Society / Lancet |
| **13** | FSHD2 | Marcadores Epigenéticos e Hipometilação no Locus D4Z4 | Avanços Científicos | Human Molecular Genetics |
| **14** | FSHD | Criação do Registro Internacional de História Natural de FSHD | Outros | FSHD Society / NIH |
| **15** | CMD (MDC1A) | Substituição Bioquímica de Laminina alfa-2 para Estabilização Muscular | Avanços Científicos | Nature Medicine / Cure CMD |
| **16** | CMD (Ullrich) | Proteção Mitocondrial e Autofagia em Deficiência de Colágeno VI | Pesquisa & Ensaios Clínicos | Brain Journal |
| **17** | DM1 | RNA Antisentido (ASO / AOC 1001) para Silenciamento do Gene DMPK | Pesquisa & Ensaios Clínicos | Avidity Biosciences / MDA |
| **18** | DM1 / DM2 | Diretrizes Internacionais de Manejo Cardíaco na Distrofia Miotônica | Diretrizes Clínicas & Manejo | Circulation / Myotonic Dystrophy Org |
| **19** | OPMD | Terapia "Silence and Replace" para Mutação do Gene PABPN1 | Avanços Científicos | Nature Biotechnology |
| **20** | EDMD | Mutações no Gene LMNA e Monitoramento de Contraturas e Condução | Diretrizes Clínicas & Manejo | Neuromuscular Disorders |
| **21** | Genética / Diagnóstico | Triagem Neonatal com Dosagem de CK no Teste do Pezinho Expandido | Direitos no SUS | Ministério da Saúde / Sociedade de Pediatria |
| **22** | Direitos (Brasil) | Como Acessar Medicamentos e Insumos no Estado do Rio de Janeiro | Direitos no SUS | Defensoria Pública do RJ |
| **23** | Reabilitação | Guia de Fisioterapia Respiratória e Ventilação Não Invasiva (VNI) | Diretrizes Clínicas & Manejo | Associação Brasileira de Fisioterapia |
| **24** | Ciência Transversal | Inteligência Artificial e Mapeamento de Células Satélites Musculares | Avanços Científicos | Nature Biotechnology |
| **25** | Registros | A Importância da Adesão aos Registros Nacionais de Doenças Raras | Outros | Aliança Distrofia Brasil / REBRAR |

---

## 4. Mecanismo de Injeção no CMS

As 25 matérias e as 4 matérias revisadas serão salvas diretamente no repositório de dados local (`data/custom-news.json`).

### Garantias Técnicas:
- **Totalmente Editáveis:** Podem ser alteradas, salvas ou excluídas pelo painel administrativo (`/admin/noticias`).
- **Resistentes a Re-renders:** Não dependem de scripts estáticos paralelos.
- **Formato Markdown Canônico:** O editor Markdown visual exibe o conteúdo com suporte completo a pré-visualização.
- **Compatibilidade com SEO/AIO:** Todas as matérias incluem metadados JSON-LD de `NewsArticle` e `MedicalWebPage`.

---

## 5. Próximos Passos de Execução

1. Executar a injeção do arquivo `data/custom-news.json` contendo a lista completa das 29 matérias (4 revisadas + 25 novas).
2. Carregar o servidor dev e verificar a renderização em `/noticias` e em páginas individuais `/[slug]`.
3. Confirmar que o painel `/admin/noticias` lista todas as 29 matérias e permite edições normais.
