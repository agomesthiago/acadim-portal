# Guia Prático do CMS Editorial Airtable — Redação ACADIM

Este manual orienta a equipe editorial da **Associação Carioca de Distrofia Muscular (ACADIM)** a cadastrar, revisar, publicar e gerenciar notícias no site institucional através da plataforma **Airtable**, sem necessitar de edições no código-fonte.

---

## 🚀 Visão Geral da Arquitetura

- **Editor de Conteúdo:** Tabela `NOTICIAS` na base oficial do Airtable da ACADIM.
- **Exibição Pública:** Portal institucional hospedado na Vercel.
- **Automação:** As notícias marcadas como `Publicado` são capturadas e publicadas automaticamente.
- **Segurança:** Nenhum token ou dado sensível fica exposto ao visitante do site.

---

## 📋 Estrutura da Tabela no Airtable (`NOTICIAS`)

A tabela principal no Airtable deve possuir exatamente os seguintes campos:

| Nome do Campo | Tipo no Airtable | Descrição / Instrução de Preenchimento |
| :--- | :--- | :--- |
| **Título** | Single line text | Título principal da notícia (ex: *Estudo Brasileiro Mapeia Avanços em Duchenne*). |
| **Subtítulo / Resumo** | Long text | Resumo executivo (2 a 3 frases) exibido nos cards da home e no topo do artigo. |
| **Conteúdo** | Long text / Rich text | Texto completo da notícia. Aceita formatação de parágrafos, listas e títulos. |
| **Data de publicação** | Date (YYYY-MM-DD) | Data oficial de veiculação da matéria. |
| **Categoria** | Single select | Opções permitidas: `Avanços Científicos`, `Direitos no SUS`, `Eventos ACADIM`, `Histórias de Vida`, `Pesquisa & Ensaios Clínicos`, `Aprovações Terapêuticas`, `Diretrizes Clínicas & Manejo`. |
| **Status** | Single select | `Rascunho`, `Em revisão`, `Publicado`, `Arquivado`. |
| **Destaque** | Checkbox | Se marcado, a notícia poderá ser exibida no carrossel da Home ou topo da listagem. |
| **Imagem de capa** | Attachment / URL | Arquivo de imagem da matéria ou URL da imagem de capa. |
| **Descrição da imagem** | Single line text | Texto alternativo para acessibilidade (Alt Text). |
| **Fonte** | Single line text | Nome do veículo ou órgão originário (ex: *Anvisa*, *Nature*, *Senado Federal*). |
| **URL da fonte** | URL / Single line text | Link de referência primária utilizado pela redação. |
| **Tags** | Multiple select / Text | Palavras-chave separadas por vírgula (ex: `Duchenne`, `SUS`, `Terapia Gênica`). |
| **Slug** | Single line text *(Opcional)* | Se deixado em branco, o sistema gerará o slug automaticamente a partir do Título. |

---

## ⚙️ Como Funciona o Slug Automático

O **slug** é a parte da URL que identifica o artigo (exemplo: `/noticias/terapias-candidatas-duchenne-2026`).

1. **Preenchimento Opcional:** A Redação não precisa preencher a coluna `Slug`.
2. **Geração Autônoma:** O sistema converte o Título para letras minúsculas, remove acentos e caracteres especiais e insere hífens.
3. **Proteção contra Duplicidade:** Caso duas matérias possuam títulos iguais, o sistema gera automaticamente variantes determinísticas (ex: `noticia-duchenne` e `noticia-duchenne-2`).

---

## ✍️ Passo a Passo para Publicar uma Nova Matéria

1. **Acessar a Base da ACADIM no Airtable.**
2. **Criar um novo registro na tabela `NOTICIAS`.**
3. **Preencher os dados da matéria:**
   - Inserir o **Título** e o **Resumo**.
   - Colar o **Conteúdo** revisado.
   - Definir a **Categoria** correta.
   - Selecionar a **Data de publicação**.
   - Adicionar a **Imagem de capa** e o **Texto alternativo**.
   - Preencher a **Fonte** de referência.
4. **Fase de Preparação:** Manter o **Status** em `Rascunho` ou `Em revisão`.
5. **Revisão Editorial e Médica:**
   - Verificar se o texto atende ao protocolo editorial (ver seção de regras abaixo).
6. **Publicação:** Alterar o **Status** para `Publicado`.
   - O site atualizará e exibirá a nova matéria no portal!

---

## 🛡️ Regras Fundamentais de Redação e Saúde

1. **Autor Institucional Único:**
   - Todas as matérias são atribuídas à **Redação ACADIM**. Não cadastrar autores individuais ou fictícios.
2. **Distinção Pré-Clínica:**
   - Em matérias sobre estudos em camundongos ou culturas celulares, **DEVE-SE** explicitar no resumo/início que se trata de estudo pré-clínico de laboratório e **não de um tratamento comprovado em humanos**.
3. **Linguagem Científica Responsável:**
   - Evitar termos sensacionalistas como *"cura definitiva"*, *"tratamento revolucionário"* ou *"solução imediata"*.
4. **Isenção de Diagnóstico:**
   - Nenhuma matéria substitui a avaliação por neurologista, neuropediatra ou equipe multidisciplinar.
5. **Atribuição Discreta:**
   - Indicar a fonte jornalística/institucional no campo apropriado de forma ética e sóbria.

---

## 🔑 Variáveis de Ambiente no Servidor (Vercel)

Para conectar o site ao Airtable em ambiente de produção, cadastre as seguintes variáveis na plataforma Vercel (*Project Settings -> Environment Variables*):

- `AIRTABLE_TOKEN`: Seu Personal Access Token do Airtable.
- `AIRTABLE_BASE_ID`: O ID da Base da ACADIM (ex: `appXXXXXXXXXXXXXX`).
- `AIRTABLE_TABLE_NAME`: `NOTICIAS`

*Nota: Nunca adicione `NEXT_PUBLIC_` a essas variáveis para garantir que suas chaves fiquem 100% protegidas no servidor.*
