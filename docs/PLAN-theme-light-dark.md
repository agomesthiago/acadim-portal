# Plano de Implementação: Modo Claro & Escuro (Light / Dark Mode)

## Contexto e Objetivos

O site da ACADIM atualmente utiliza uma alternância visual por seções. Para oferecer acessibilidade máxima (WCAG 2.2 AAA), conforto visual e flexibilidade, planejamos a arquitetura de **Alternância de Tema (Light / Dark / System Preference)** com persistência.

---

## Fases da Implementação

### Fase 1: Arquitetura de Tokens CSS no `globals.css`
- Mapear variáveis CSS nativas com suporte a `prefers-color-scheme`:
  - `--bg-primary` (Branco / Slate 950)
  - `--bg-secondary` (Slate 50 / Slate 900)
  - `--text-primary` (Slate 900 / Slate 50)
  - `--text-secondary` (Slate 600 / Slate 300)
  - `--brand-blue` (#0F172A / #1E293B)

### Fase 2: Contexto e Hook `useTheme`
- Criar `context/ThemeContext.tsx`:
  - Estados: `'light' | 'dark' | 'system'`
  - Detecção automática da preferência do SO
  - Persistência sem FOUC (Flash of Unstyled Content) via `localStorage`.

### Fase 3: Componente Seletor no `HeaderNav.tsx`
- Adicionar botão alternador (Sol / Lua) acessível:
  - Botão com `aria-label="Alternar para modo escuro"` e `min-h-[44px]`

### Fase 4: Adaptação das Seções
- Atualizar classes Tailwind para usar seletores `dark:` nativos.

---

## Verificação e Qualidade (WCAG AAA)
1. **Contraste mínimo 7:1** em ambos os temas.
2. **Sem FOUC** na inicialização.
3. **Persistência de preferência** salva no navegador.
