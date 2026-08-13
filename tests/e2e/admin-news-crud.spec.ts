import { test, expect, Page } from '@playwright/test';

async function loginAsAdmin(page: Page) {
  const context = page.context();
  await context.addCookies([
    {
      name: 'acadim_admin_token',
      value: '123@abc',
      url: 'http://localhost:3000',
    },
  ]);
  await page.goto('/admin/login');
  await page.waitForLoadState('domcontentloaded');
  if (await page.locator('input[type="password"]').isVisible()) {
    await page.fill('input[type="password"]', '123@abc');
    await page.click('button[type="submit"]');
    await page.waitForURL((url) => !url.href.includes('/admin/login'), { timeout: 10000 });
  }
}

test.describe('E2E CMS - Notícias (CRUD completo, Integridade & Persistência)', () => {
  test('TESTE A - CREATE: Criar nova notícia e verificar presença imediata e persistência no site público', async ({ page }) => {
    const timestamp = Date.now();
    const uniqueTitle = `[E2E CREATE] Notícia de Teste Automatizado ${timestamp}`;
    const uniqueSummary = `Resumo de teste automatizado E2E gerado no timestamp ${timestamp}.`;
    const uniqueContent = `Este é o corpo editorial completo da notícia de teste E2E ${timestamp}.`;

    // 1. Logar no admin
    await loginAsAdmin(page);

    // 2. Abrir formulário de criação
    await page.goto('/admin/noticias/nova');
    await expect(page.locator('h1')).toContainText('Cadastrar Nova Notícia');

    // 3. Preencher formulário
    await page.fill('#news-title', uniqueTitle);
    await page.fill('#news-summary', uniqueSummary);
    await page.locator('.w-md-editor textarea, #news-content').first().fill(uniqueContent);
    await page.selectOption('#news-category', 'Avanços Científicos');

    // 4. Submeter
    await page.click('button[type="submit"]');

    // 5. Confirmar feedback de sucesso
    await expect(page.locator('text=Notícia cadastrada e salva com sucesso!')).toBeVisible({ timeout: 10000 });

    // 6. Ir para listagem pública de notícias
    await page.goto('/noticias');
    await page.waitForLoadState('networkidle');

    // 7. Verificar que a notícia aparece na listagem pública
    await expect(page.locator(`text=${uniqueTitle}`)).toBeVisible();

    // 8. Abrir a notícia individualmente
    await page.click(`a[aria-label="Ler matéria completa: ${uniqueTitle}"]`);
    await page.waitForLoadState('networkidle');

    // 9. Validar título e conteúdo na página individual
    await expect(page.locator('h1')).toContainText(uniqueTitle);
    await expect(page.locator('article').first()).toContainText(uniqueContent);

    // 10. Reload e reconferência
    await page.reload();
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h1')).toContainText(uniqueTitle);

    // 11. Teardown: Deletar a notícia criada para garantir dataset limpo
    await page.goto('/admin/noticias');
    page.on('dialog', (d) => d.accept());
    const deleteBtn = page.locator(`tr:has-text("${uniqueTitle}") button[title="Excluir Notícia"]`).first();
    if (await deleteBtn.isVisible()) {
      await deleteBtn.click();
      await expect(page.locator(`tr:has-text("${uniqueTitle}")`)).not.toBeVisible({ timeout: 10000 });
    }
  });

  test('TESTE B - UPDATE: Editar notícia existente e confirmar que o site público reflete a mudança', async ({ page }) => {
    const timestamp = Date.now();
    const originalTitle = `[E2E UPDATE ORIG] Notícia para Edição ${timestamp}`;
    const updatedTitle = `[E2E UPDATE EDITED] Notícia Editada ${timestamp}`;
    const updatedContent = `Conteúdo editado via E2E no timestamp ${timestamp}.`;

    // 1. Logar e criar notícia base
    await loginAsAdmin(page);
    await page.goto('/admin/noticias/nova');
    await page.fill('#news-title', originalTitle);
    await page.fill('#news-summary', 'Resumo inicial');
    await page.locator('.w-md-editor textarea, #news-content').first().fill('Conteúdo inicial');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Notícia cadastrada e salva com sucesso!')).toBeVisible({ timeout: 10000 });

    // 2. Abrir painel admin e localizar a notícia para editar
    await page.goto('/admin/noticias');
    await page.waitForLoadState('networkidle');
    const editLink = page.locator(`tr:has-text("${originalTitle}") a[title="Editar Notícia"]`).first();
    await editLink.click();

    // 3. Alterar título com [teste] e conteúdo
    await page.fill('#news-title', updatedTitle);
    await page.locator('.w-md-editor textarea, #news-content').first().fill(updatedContent);
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Notícia atualizada com sucesso!')).toBeVisible({ timeout: 10000 });

    // 4. Abrir listagem pública e confirmar espelhamento
    await page.goto('/noticias');
    await page.waitForLoadState('networkidle');
    await expect(page.locator(`text=${updatedTitle}`)).toBeVisible();
    await expect(page.locator(`text=${originalTitle}`)).not.toBeVisible();

    // 5. Abrir notícia individual e validar conteúdo
    await page.click(`a[aria-label="Ler matéria completa: ${updatedTitle}"]`);
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h1')).toContainText(updatedTitle);
    await expect(page.locator('article').first()).toContainText(updatedContent);

    // 6. Teardown: Deletar a notícia editada para garantir dataset limpo
    await page.goto('/admin/noticias');
    page.on('dialog', (d) => d.accept());
    const deleteBtn = page.locator(`tr:has-text("${updatedTitle}") button[title="Excluir Notícia"]`).first();
    if (await deleteBtn.isVisible()) {
      await deleteBtn.click();
      await expect(page.locator(`tr:has-text("${updatedTitle}")`)).not.toBeVisible({ timeout: 10000 });
    }
  });

  test('TESTE D - DELETE: Excluir notícia no admin e confirmar remoção definitiva no site público', async ({ page }) => {
    const timestamp = Date.now();
    const deleteTitle = `[E2E DELETE] Notícia Exclusiva para Deletar ${timestamp}`;

    // 1. Logar e criar notícia temporária
    await loginAsAdmin(page);
    await page.goto('/admin/noticias/nova');
    await page.fill('#news-title', deleteTitle);
    await page.fill('#news-summary', 'Será deletada');
    await page.locator('.w-md-editor textarea, #news-content').first().fill('Conteúdo que será deletado');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Notícia cadastrada e salva com sucesso!')).toBeVisible({ timeout: 10000 });

    // 2. Confirmar presença pública
    await page.goto('/noticias');
    await page.waitForLoadState('networkidle');
    await expect(page.locator(`text=${deleteTitle}`)).toBeVisible();

    // 3. Deletar via painel admin
    await page.goto('/admin/noticias');
    await page.waitForLoadState('networkidle');

    page.on('dialog', async (dialog) => {
      await dialog.accept();
    });

    const deleteBtn = page.locator(`tr:has-text("${deleteTitle}") button[title="Excluir Notícia"]`).first();
    await deleteBtn.click();

    // 4. Confirmar ausência no admin
    await expect(page.locator(`tr:has-text("${deleteTitle}")`)).not.toBeVisible({ timeout: 10000 });

    // 5. Confirmar ausência pública na listagem
    await page.goto('/noticias');
    await page.waitForLoadState('networkidle');
    await expect(page.locator(`text=${deleteTitle}`)).not.toBeVisible();
  });

  test('TESTE E - REGRESSÃO: Garantir presença das notícias reais no catálogo', async ({ page }) => {
    await page.goto('/noticias');
    await page.waitForLoadState('networkidle');

    // Verificar que a listagem contém matérias principais do acervo
    await expect(page.locator('text=Avanços na Terapia Gênica para Duchenne')).toBeVisible();
    await expect(page.locator('text=Guia Prático de Direitos no SUS')).toBeVisible();
  });
});
