# ACADIM — Migração de Repositório GitHub

## 1. Estado Atual (Auditado em 2026-08-08)

| Parâmetro | Valor Real |
|---|---|
| Git identity local (`user.name`) | `cris-ribs` |
| Git identity local (`user.email`) | `equipethefamily03@hotmail.com` |
| Branch principal | `master` |
| Remote `origin` atual | `https://github.com/agomesthiago/acadim-landing.git` |
| Repositório alvo desejado | `https://github.com/cris-ribs/acadim.git` |
| Status `gh auth` | `agomesthiago` — **`cris-ribs` não autenticado** |
| `cris-ribs/acadim` existe? | **Não** (verificado via `gh repo view`) |
| Histórico | **Preservado** — sem squash, sem rebase destrutivo |
| HEAD | `cc65dc4 feat(portal): complete 22-phase transformation` |

---

## 2. Por Que É um Bloqueio Real

O comando `gh auth switch --user cris-ribs` retornou:
```
no accounts matched that criteria
```

Isso confirma que a conta `cris-ribs` **nunca foi autenticada** no `gh` local desta máquina.

O `gh auth status` confirma apenas `agomesthiago` ativo.

---

## 3. Procedimento Exato para Resolução

Execute no terminal do projeto `d:\projetos\acadim`:

### Passo 1 — Autenticar a conta `cris-ribs`

```powershell
gh auth login
```

No prompt interativo:
- **What account do you want to log into?** → `GitHub.com`
- **What is your preferred protocol?** → `HTTPS`
- **How would you like to authenticate?** → `Login with a web browser` (ou token PAT)
- Autentique com a conta `equipethefamily03@hotmail.com` no navegador

Verificar após:
```powershell
gh auth status
# Deve mostrar cris-ribs como conta autenticada
```

### Passo 2 — Ativar a conta `cris-ribs`

```powershell
gh auth switch --user cris-ribs
gh auth status
# Confirmar: Active account: true para cris-ribs
```

### Passo 3 — Criar o repositório `cris-ribs/acadim`

```powershell
gh repo create cris-ribs/acadim --public --description "Portal Institucional e Enciclopédia de Distrofias Musculares — ACADIM"
```

> **Nota:** Se o repositório já existir, este passo retorna erro — não execute novamente.

### Passo 4 — Atualizar o remote local

```powershell
git remote set-url origin https://github.com/cris-ribs/acadim.git
git remote -v
# Deve mostrar: origin  https://github.com/cris-ribs/acadim.git
```

### Passo 5 — Push do histórico completo

```powershell
git push -u origin master
```

> **Garantias:**
> - Histórico completo preservado (nenhum squash)
> - Não é force push
> - 16 commits históricos serão publicados no novo repositório

### Passo 6 — Verificação pós-migração

```powershell
git log --oneline -5
git remote -v
git branch -vv
gh repo view cris-ribs/acadim
```

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

## 6. GitHub Actions Pós-Migração

O arquivo `.github/workflows/ci.yml` será acionado automaticamente no primeiro push para `cris-ribs/acadim`.

**Pré-requisito para CI funcionar corretamente:** `wait-on` deve estar instalado como devDependency (foi adicionado nesta operação).

---

## 7. Status da Track A

| Sub-tarefa | Status |
|---|---|
| Identidade Git local | ✅ PASS — `cris-ribs / equipethefamily03@hotmail.com` |
| Histórico preservado | ✅ PASS — 16 commits sem squash |
| `gh auth login` como `cris-ribs` | ❌ BLOCKED — requer ação humana |
| Criação de `cris-ribs/acadim` | ❌ PENDING — depende do auth |
| Atualização do remote `origin` | ❌ PENDING — depende do auth |
| Push para `cris-ribs/acadim` | ❌ PENDING — depende do auth |
| GitHub Actions ativo | ❌ PENDING — depende do push |
