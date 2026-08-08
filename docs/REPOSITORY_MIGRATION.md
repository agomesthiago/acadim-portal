# Documentação de Migração de Repositório GitHub — ACADIM

Este documento registra o procedimento e o estado técnico da migração do repositório da aplicação **ACADIM** para a nova conta GitHub.

---

## 1. Estado Atual da Configuração Git

| Parâmetro | Valor Configurado |
| --- | --- |
| Identidade Local (`user.name`) | `cris-ribs` |
| Identidade Local (`user.email`) | `equipethefamily03@hotmail.com` |
| Branch Principal | `master` |
| Remote de Origem Atual | `https://github.com/agomesthiago/acadim-landing.git` (Legado) |
| Repositório Alvo Previsto | `https://github.com/cris-ribs/acadim.git` |

---

## 2. Procedimento para Conclusão da Migração no GitHub

Como o ambiente CLI no momento está autenticado com a conta de transição, a troca do remote e o push para o novo repositório oficial devem ser finalizados seguindo os passos abaixo:

### Passo 1: Autenticar na Conta GitHub `cris-ribs`
No terminal, execute:
```bash
gh auth login
```
Selecione **GitHub.com**, protocolo **HTTPS**, e efetue a autenticação com a conta `cris-ribs` (`equipethefamily03@hotmail.com`).

### Passo 2: Criar o Novo Repositório na Conta `cris-ribs`
Após o login na nova conta, execute:
```bash
gh repo create cris-ribs/acadim --public --description "Portal Institucional e Enciclopédia de Distrofias Musculares — ACADIM"
```

### Passo 3: Atualizar o Remote Git Local e Fazer Push do Histórico
```bash
git remote set-url origin https://github.com/cris-ribs/acadim.git
git push -u origin master
```

---

## 3. Preservação do Histórico e Integridade

- **Nenhum commit histórico foi removido ou alterado via squash.**
- Todos os commits anteriores (`68eeafd`, `442f454`, `864e1e5`, `19f57a6`) permanecem íntegros no histórico local.
- Os novos commits são produzidos estritamente com a autoria: `cris-ribs <equipethefamily03@hotmail.com>`.
- As rotinas de CI no GitHub Actions (`.github/workflows/ci.yml`) serão acionadas automaticamente no novo repositório no primeiro push.
