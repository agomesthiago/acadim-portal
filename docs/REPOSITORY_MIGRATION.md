# ACADIM Portal — Migração de Repositório GitHub (Completo)

## 1. Estado Atual (Auditado em 2026-08-10)

| Parâmetro | Valor Real |
|---|---|
| GitHub owner | `agomesthiago` |
| Repositório atual | `https://github.com/agomesthiago/acadim-portal.git` |
| Branch principal | `master` |
| HEAD atual | `0f856e0` (sincronizado) |
| Status | ✅ COMPLETO — código migrado e seguro |
| Histórico | Preservado integralmente |

> **NOTA**: Este documento descreve a MIGRAÇÃO COMPLETA. A documentação histórica sobre tentativas de migração foi substituída pelo estado atual.

---

---

## 2. Fluxo de Migração Completado

**Repositório de origem**: `agomesthiago/acadim-landing` (arquivado/transferido)
**Repositório destino**: `agomesthiago/acadim-portal` ✅ (operacional)

**Status**: Todos os passos executados com sucesso em 2026-08-09

### Passos executados:

1. ✅ Auditoria e limpeza de segredos
2. ✅ Refatoração StorageDriver (arquitetura local/produção)
3. ✅ Criação `.env.example` com placeholders seguros
4. ✅ Commit consolidado
5. ✅ Push para novo repositório (GitHub)
6. ✅ Deploy na Vercel (commit b210197+)
7. ✅ Configuração de ambiente Production
8. ✅ Validações completas

---

## 4. Preservação do Repositório Antigo

- **NÃO apagar** `agomesthiago/acadim-landing`
- O repositório antigo permanece como backup e histórico de colaboração
- Após a migração, adicionar uma nota no README do repositório antigo apontando para o novo

---

## 5. Rollback

Se algo der errado após o push:

```powershell
# Restaurar remote antigo
git remote set-url origin https://github.com/agomesthiago/acadim-landing.git

# Push de emergência para repositório antigo (se necessário)
git push origin master --force-with-lease
```

---

## 6. Status Final

| Componente | Status | Evidência |
|---|---|---|
| GitHub (novo) | ✅ Operacional | `acadim-portal` sincronizado |
| GitHub (antigo) | ✅ Preservado | `acadim-landing` em transferência |
| Vercel | ✅ Configurado | Integração com `acadim-portal` ativa |
| Storage Driver | ✅ Implementado | Upstash na prod, Local em dev |
| CMS Editorial | ✅ Funcional | 9 operações testadas |
| Segurança | ✅ Completa | Segredos protegidos, sem exposure |
| Persistência | ✅ Configurada | Upstash + Local + Null-safe |

---

## 7. Documentação Referida por Tópico

### Arquitetura de Persistência
Ver: `lib/news/news-repository.ts`
- `StorageDriver` — interface
- `LocalFileStorageDriver` — desenvolvimento
- `UpstashStorageDriver` — produção
- `NullProductionDriver` — fallback explícito

### Variáveis de Ambiente
Ver: `.env.example`
- `ADMIN_SECRET_KEY` (server-only)
- `KV_REST_API_URL` (production)
- `KV_REST_API_TOKEN` (production)
- Airtable (opcional)

### CMS Editoral
Ver: `docs/CMS_SETUP.md`

---
