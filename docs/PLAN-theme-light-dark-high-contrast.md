# PLAN-theme-light-dark-high-contrast: Modo Claro, Escuro, Alto Contraste & WCAG 2.2 AAA

## 🎯 Objetivo
Implementar um sistema completo de gestão de temas e acessibilidade no site da ACADIM, permitindo que o usuário alterne livremente entre:
1. **Modo Claro (Light)** — Fundo claro suave (Slate 50 / Branco) com texto escuro de alto contraste (Slate 900).
2. **Modo Escuro (Dark)** — Fundo escuro (Slate 950 / Azul ACADIM escuro) com texto super legível (Slate 100).
3. **Modo Alto Contraste (High Contrast AAA)** — Fundo preto puro (`#000000`), texto em amarelo de alta visibilidade (`#FFFF00`) e branco puro (`#FFFFFF`), bordas amarelas de 2px e anéis de foco amarelos de 3px para deficiências visuais graves.

---

## 📋 Especificações de Acessibilidade (WCAG 2.2 AAA)

| Requisito WCAG AAA | Padrão Aplicado |
|---|---|
| **SC 1.4.6 Contraste Visual** | Mínimo **7:1** para texto normal (<18pt) e **4.5:1** para texto grande (≥18pt) em todos os temas |
| **SC 1.4.11 Contraste de Não-Texto** | Bordas e ícones com contraste mínimo de **3:1** |
| **SC 2.4.7 Foco Visível** | Anel de foco com espessura mínima de **3px** e contraste ≥ 7:1 (sem ocultar com `outline-none`) |
| **SC 2.5.5 Alvo de Toque (Size)** | Área de toque mínima de **44px x 44px** em todos os elementos interativos |
| **SC 3.2.5 Mudança Mediante Solicitação** | A troca de tema ocorre sob comando do usuário, sem sobressaltos ou recarregamento forçado |

---

## 📋 Lista de Tarefas (Checklist Atômica)

### Fase 1: Arquitetura de Tokens CSS (`app/globals.css`)
- [ ] Definir variáveis CSS nativas para as 3 modalidades de tema:
  ```css
  :root[data-theme="light"] {
    --bg-main: #F8FAFC;
    --bg-card: #FFFFFF;
    --text-main: #0F172A; /* Contraste > 13:1 */
    --text-muted: #334155; /* Contraste > 7:1 */
    --brand-red: #C53030;  /* Contraste > 7:1 */
    --focus-ring: #2563EB;
  }

  :root[data-theme="dark"] {
    --bg-main: #090D16;
    --bg-card: #0F172A;
    --text-main: #F8FAFC; /* Contraste > 14:1 */
    --text-muted: #CBD5E1; /* Contraste > 7.5:1 */
    --brand-red: #EF4444;
    --focus-ring: #60A5FA;
  }

  :root[data-theme="high-contrast"] {
    --bg-main: #000000;
    --bg-card: #000000;
    --text-main: #FFFF00; /* Amarelo puro sobre preto: Contraste 19.5:1 (AAA Max) */
    --text-muted: #FFFFFF; /* Branco puro sobre preto: Contraste 21:1 */
    --brand-red: #FFFF00;
    --border-contrast: 2px solid #FFFF00;
    --focus-ring: #FFFF00;
  }
  ```

### Fase 2: Contexto de Tema sem FOUC (`context/ThemeContext.tsx`)
- [ ] Criar `ThemeContext` com opções: `'light' | 'dark' | 'high-contrast' | 'system'`
- [ ] Inserir script inline anti-FOUC no `<head>` em `app/layout.tsx` para ler `localStorage` antes da renderização
- [ ] Adicionar atalho de teclado opcional (ex: `Alt + C` para alternar Alto Contraste rapidamente)

### Fase 3: Seletor no Header (`components/HeaderNav.tsx` & `ThemeToggle.tsx`)
- [ ] Criar componente `ThemeToggle.tsx` com ícones legíveis: Sol (Claro), Lua (Escuro), Olho/Contraste (Alto Contraste)
- [ ] Garantir `aria-label` descritivo, `role="radiogroup"` ou menu de seleção acessível via teclado

### Fase 4: Adaptação dos Componentes do Site
- [ ] Atualizar `HeroSection`, `AboutSection`, `ImpactSection`, `HelpSection`, `StoriesSection`, `ContactSection` para consumir tokens CSS ou classes adaptáveis de tema.

---

## 🧪 Plano de Verificação (WCAG AAA Audit)

- [ ] **Auditoria de Contraste Automática:** Executar axe-core / Chrome DevTools Accessibility Audit para atestar zero violações de contraste.
- [ ] **Navegação 100% por Teclado:** Testar `Tab` / `Shift+Tab` / `Space` / `Enter` com anel de foco destacado em todos os 3 modos.
- [ ] **Leitores de Tela:** Testar anúncio `aria-live="polite"` avisando quando o tema for alterado (ex: "Modo Alto Contraste ativado").
