# FINAL CMS FORENSIC AUDIT & ARCHITECTURE MAP
**Projeto**: Portal ACADIM - Associação Carioca de Distrofia Muscular
**Data da Auditoria Forense**: 13 de Agosto de 2026

---

## 1. Arquitetura Identificada (Fonte de Verdade)

### 1.1 Sistema de Notícias & Armazenamento
- **Fonte Principal (Storage Driver)**:
  - Desenvolvimento Local: `LocalFileStorageDriver` gravando de forma atômica no arquivo `data/custom-news.json`.
  - Produção (Serverless): `UpstashStorageDriver` (Redis REST API) usando a chave `acadim_custom_news`.
  - Fallback Estático: `STATIC_BASE_NEWS` definido em `lib/news/static-news.ts` (acervo de matérias estáticas preexistentes).
- **Serviço de Leitura (`getAllNewsAsync`)**:
  - `lib/news/news-service.ts` consulta `newsRepository.getPublishedArticles()` e mescla com `STATIC_BASE_NEWS`.
- **Rotas e Revalidação**:
  - API Admin `/api/admin/noticias/[id]`: Trata `PUT` (edição) e `DELETE` (exclusão).
  - Chamadas de revalidação de cache: `revalidatePath('/', 'layout')`, `revalidatePath('/noticias')`, `revalidatePath('/sitemap.xml')`, `revalidatePath('/api/noticias')`.

### 1.2 Acessibilidade & VLibras
- **Widget Oficial VLibras**: `components/VLibras.tsx` injetando o script `https://vlibras.gov.br/app/vlibras-plugin.js` com os atributos da div oficial (`vw`, `vw-access-button`, `vw-plugin-wrapper`).
- **Política de Segurança (CSP)**: `next.config.ts` definindo os cabeçalhos de segurança HTTP.

---

## 2. Hipóteses & Bugs em Investigação

1. **Edição no Painel Admin (`[teste]`) Não Espelhada**:
   - *Causa investigada*: `updateRecord` ou `getAllNewsAsync` falhava em sobrepor as notícias do acervo estático base quando alteradas, ou o slug gerado (`teste-...`) diferia do slug estático original, fazendo o fallback re-inserir o item antigo.
2. **Notícia Antiga de Teste Reaparecendo**:
   - *Causa investigada*: Item `"id": "news_1786587967401_x2v1s"` ("Esta é uma notícia teste") estava gravado em `lib/news/static-news.ts`.
3. **Bloqueio de Script do VLibras**:
   - *Causa investigada*: `frame-src 'none'` e falta de autorização de origens secundárias como `cdn.jsdelivr.net` na Content-Security-Policy do `next.config.ts`.
4. **Erros/Warnings de Console no Navegador**:
   - 404 em `/favicon.ico`.
   - Warning do `next/image` (`fill` sem a propriedade `sizes`).
   - Preloads de fontes/imagens não consumidos imediatamente.

---

## 3. Registro de Ações, Correções e Evidências Executáveis

*(Esta seção será atualizada a cada fase da auditoria forense com testes executáveis em produção).*
