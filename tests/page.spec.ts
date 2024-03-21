import * as path from 'path';
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/AngularTodo/);
});

test('page title', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.header .title')).toHaveText('Liste des demandes');
});

test('screenshots project list', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.05, stylePath: path.join(__dirname, 'screenshot.css') });
});

test('screenshots new project', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'plus Ajouter' }).click();

    await expect(page.locator('.drawer h3')).toHaveText("Ajouter une demande d'autorisation");
    await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.05, stylePath: path.join(__dirname, 'screenshot.css') });
});
