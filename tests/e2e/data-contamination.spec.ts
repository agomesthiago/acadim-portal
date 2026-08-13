import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test.describe('E2E DATA CONTAMINATION & TEARDOWN INTEGRITY', () => {

  test('1. ZERO RESIDUE CHECK — Nenhum registro de teste permanece no custom-news.json', async () => {
    const dataFilePath = path.join(process.cwd(), 'data', 'custom-news.json');

    if (fs.existsSync(dataFilePath)) {
      const raw = fs.readFileSync(dataFilePath, 'utf-8');
      const records = JSON.parse(raw);

      const isTestRecord = (r: any) => {
        const title = (r.title || '').toLowerCase();
        const slug = (r.slug || '').toLowerCase();
        const summary = (r.summary || '').toLowerCase();
        const content = (r.content || '').toLowerCase();

        return (
          title.includes('[e2e') ||
          title.includes('[rc') ||
          title.includes('[consistency') ||
          title.includes('[teste') ||
          slug.includes('e2e') ||
          slug.includes('rc-') ||
          slug.includes('consistency') ||
          summary.includes('e2e') ||
          content.includes('e2e')
        );
      };

      const testRecords = records.filter(isTestRecord);
      expect(testRecords.length).toBe(0);
    }
  });

  test('2. CONTROLLED FAILURE TEARDOWN — Teardown expurga recursos mesmo após simulação de interrupção', async ({ page }) => {
    const timestamp = Date.now();
    const testTitle = `[E2E CONTROLLED TEARDOWN TEST] Notícia ${timestamp}`;

    let createdId: string | null = null;

    try {
      // 1. Injetar cookie de admin
      await page.context().addCookies([
        {
          name: 'acadim_admin_token',
          value: '123@abc',
          url: 'http://localhost:3000',
        },
      ]);

      // 2. Criar Notícia
      await page.goto('/admin/noticias/nova');
      await page.fill('#news-title', testTitle);
      await page.fill('#news-summary', 'Resumo de teste de teardown');
      await page.locator('.w-md-editor textarea, #news-content').first().fill('Conteúdo de teste de teardown');
      await page.click('button[type="submit"]');
      await expect(page.locator('text=Notícia cadastrada e salva com sucesso!')).toBeVisible({ timeout: 10000 });

      // 3. Simular interrupção (não chama o fluxo normal de exclusão via UI)
    } finally {
      // 4. Executar Teardown de Segurança Obrigatório
      const dataFilePath = path.join(process.cwd(), 'data', 'custom-news.json');
      if (fs.existsSync(dataFilePath)) {
        const raw = fs.readFileSync(dataFilePath, 'utf-8');
        const records = JSON.parse(raw);
        const cleanRecords = records.filter((r: any) => !(r.title || '').includes(testTitle));
        fs.writeFileSync(dataFilePath, JSON.stringify(cleanRecords, null, 2), 'utf-8');
      }
    }

    // 5. Verificar que o recurso foi 100% purgado do storage
    const finalDataRaw = fs.readFileSync(path.join(process.cwd(), 'data', 'custom-news.json'), 'utf-8');
    const finalRecords = JSON.parse(finalDataRaw);
    const found = finalRecords.find((r: any) => (r.title || '').includes(testTitle));
    expect(found).toBeUndefined();
  });

});
