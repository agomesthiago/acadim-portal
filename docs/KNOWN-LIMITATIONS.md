# ACADIM — LIMITAÇÕES CONHECIDAS E DELEGAÇÃO OPERACIONAL

**Data:** 12 de Agosto de 2026  
**Escopo:** Limitações técnicas declaradas e premissas operacionais para entrega à ONG ACADIM.

---

## 1. AMBIENTE LOCAL-FIRST E HOSPEDAGEM ESTÁTICA

- **Persistência Local (`data/custom-news.json`):** Em ambiente local de desenvolvimento, os registros criados e editados no Painel Admin são salvos diretamente em `data/custom-news.json`. Em ambientes Serverless onde o sistema de arquivos local é somente leitura (ex: Vercel), o repositório opera em modo de leitura estática/cache ISR, exigindo sincronização via repositório Git ou provedor de armazenamento externo (Airtable / S3 / KV) caso a edição online seja necessária na nuvem.
- **Airtable Opcional:** A integração com Airtable é opcional e só é ativada quando as variáveis de ambiente `AIRTABLE_TOKEN` e `AIRTABLE_BASE_ID` estão explicitamente configuradas.

---

## 2. AUTENTICAÇÃO ADMINISTRATIVA

- **Chave Única (`ADMIN_SECRET_KEY`):** A autenticação do Painel Admin (`/admin/login`) utiliza autenticação por segredo compartilhado (chave de acesso administrativa única). Não há múltiplos perfis de usuário ou controle de acesso baseado em papéis (RBAC).
- **Rotação de Segredo:** Para alterar a senha de acesso ao painel admin em produção, basta atualizar o valor da variável de ambiente `ADMIN_SECRET_KEY` no painel da hospedagem.

---

## 3. CONTEÚDO EDITORIAL E FONTES MÉDICAS

- **Isenção de Responsabilidade Médica:** As fichas de doenças e notícias possuem caráter exclusivamente informativo, pedagógico e de orientação em saúde pública e cidadania. Não substituem consulta, diagnóstico ou tratamento médico especializado.
- **Princípio Antiesperança Institucional:** Conquistas científicas e tratamentos internacionais em fase experimental ou aprovados no exterior (ex: FDA/EMA) são apresentados com clareza sobre sua disponibilidade real no Brasil (Anvisa / SUS / CONITEC).
