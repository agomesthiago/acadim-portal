# ACADIM — GUIA DE DEPLOYMENT E OPERAÇÃO EM PRODUÇÃO

**Data:** 12 de Agosto de 2026  
**Tecnologias:** Next.js 16.3 (App Router), TypeScript, Tailwind CSS v4, Node.js (v20+ / LTS)

---

## 1. REQUISITOS DE SISTEMA

- **Node.js:** Versão 20.x ou superior (LTS)
- **Gerenciador de Pacotes:** `npm` (v10+)
- **OS Support:** Linux / macOS / Windows Server

---

## 2. VARIÁVEIS DE AMBIENTE (`.env.local` / `.env.production`)

```env
# Chave de acesso administrativa obrigatória para o painel /admin
ADMIN_SECRET_KEY=SuaChaveSecretaSuperForteAqui2026!

# Configuração opcional do Airtable (caso ative sincronização em nuvem)
# AIRTABLE_TOKEN=patXXXXXXXXXXXXXX
# AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
```

---

## 3. COMANDOS DE BUILD E EXECUÇÃO LOCAL / SERVIDOR

### A. Instalação de Dependências
```bash
npm install
```

### B. Validação de Tipos
```bash
npm run typecheck
```

### C. Geração do Build de Produção (SSG / ISR)
```bash
npm run build
```

### D. Execução do Servidor de Produção Local
```bash
npm run start
```
O servidor estará acessível em `http://localhost:3000`.

---

## 4. PUBLICAÇÃO NA VERCEL / NETLIFY / NGINX

1. Conecte o repositório à plataforma de hospedagem.
2. Defina a variável de ambiente `ADMIN_SECRET_KEY` nas configurações de ambiente do projeto.
3. Configure o comando de build: `npm run build`
4. Configure o diretório de saída: `.next` (padrão do Next.js).
5. O Next.js tratará automaticamente as 57 páginas estáticas pré-renderizadas e as rotas de API.
