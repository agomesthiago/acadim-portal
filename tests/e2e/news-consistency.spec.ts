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

test.describe('NEWS_PUBLICATION_CONSISTENCY - Teste de Consistência e Persistência Pós-Operações', () => {
  test('FLUXO COMPLETO: Create -> List -> Detail -> Hard Reload -> New Context -> Update -> Delete', async ({ browser }) => {
    // Contexto A: Administrador
    const adminContext = await browser.newContext();
    const adminPage = await adminContext.newPage();
    await loginAsAdmin(adminPage);

    const timestamp = Date.now();
    const testTitle = `[CONSISTENCY TEST] Matéria em Rede ${timestamp}`;
    const testSummary = `Resumo de integridade de consistência ${timestamp}.`;
    const testContent = `Corpo completo de validação de persistência cruzada ${timestamp}.`;

    // 1. CREATE no Admin
    await adminPage.goto('/admin/noticias/nova');
    await adminPage.fill('#news-title', testTitle);
    await adminPage.fill('#news-summary', testSummary);
    await adminPage.locator('.w-md-editor textarea, #news-content').first().fill(testContent);
    await adminPage.click('button[type="submit"]');
    await expect(adminPage.locator('text=Notícia cadastrada e salva com sucesso!')).toBeVisible({ timeout: 10000 });

    // 2. Contexto B: Leitor Público (Nova sessão limpa sem cookies)
    const publicContext = await browser.newContext();
    const publicPage = await publicContext.newPage();

    // 3. PUBLIC LISTING
    await publicPage.goto('/noticias');
    await publicPage.waitForLoadState('networkidle');
    await expect(publicPage.locator(`text=${testTitle}`)).toBeVisible();

    // 4. PUBLIC DETAIL
    await publicPage.click(`a[aria-label="Ler matéria completa: ${testTitle}"]`);
    await publicPage.waitForLoadState('networkidle');
    await expect(publicPage.locator('h1')).toContainText(testTitle);
    await expect(publicPage.locator('article').first()).toContainText(testContent);

    // 5. HARD RELOAD
    await publicPage.reload({ waitUntil: 'networkidle' });
    await expect(publicPage.locator('h1')).toContainText(testTitle);

    // 6. UPDATE no Admin
    const updatedTitle = `[CONSISTENCY EDITED] Matéria Editada ${timestamp}`;
    const updatedContent = `[EDITADO] ${testContent}`;

    await adminPage.goto('/admin/noticias');
    await adminPage.waitForLoadState('networkidle');
    const editBtn = adminPage.locator(`tr:has-text("${testTitle}") a[title="Editar Notícia"]`).first();
    await editBtn.click();

    await adminPage.fill('#news-title', updatedTitle);
    await adminPage.locator('.w-md-editor textarea, #news-content').first().fill(updatedContent);
    await adminPage.click('button[type="submit"]');
    await expect(adminPage.locator('text=Notícia atualizada com sucesso!')).toBeVisible({ timeout: 10000 });

    // 7. PUBLIC DETAIL (Recarregar a página pública no Contexto B)
    await publicPage.goto('/noticias');
    await publicPage.waitForLoadState('networkidle');
    await expect(publicPage.locator(`text=${updatedTitle}`)).toBeVisible();

    await publicPage.click(`a[aria-label="Ler matéria completa: ${updatedTitle}"]`);
    await publicPage.waitForLoadState('networkidle');
    await expect(publicPage.locator('h1')).toContainText(updatedTitle);
    await expect(publicPage.locator('article').first()).toContainText(updatedContent);

    // 8. DELETE no Admin
    await adminPage.goto('/admin/noticias');
    await adminPage.waitForLoadState('networkidle');

    adminPage.on('dialog', async (dialog) => {
      await dialog.accept();
    });

    const deleteBtn = adminPage.locator(`tr:has-text("${updatedTitle}") button[title="Excluir Notícia"]`).first();
    await deleteBtn.click();

    // 9. PUBLIC VERIFICATION (Garantir que no Contexto B a matéria sumiu)
    await publicPage.goto('/noticias');
    await publicPage.waitForLoadState('networkidle');
    await expect(publicPage.locator(`text=${updatedTitle}`)).not.toBeVisible();

    await adminContext.close();
    await publicContext.close();
  });
});
