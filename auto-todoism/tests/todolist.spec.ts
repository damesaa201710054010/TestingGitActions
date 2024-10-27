import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login.ts';
import { TodoListPage } from '../pages/PagesTodo.ts';

test.describe("Suite de pruebas", () => {
    
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.LoginWithNewUser();
      });

    test('Add task', async ({ page }) => {
        const todo = new TodoListPage(page);
        await todo.AddNewTask();
    });

    test('Complete Task', async ({ page }) => {
        await page.getByPlaceholder('What needs to be done?').click();
        await page.getByPlaceholder('What needs to be done?').fill('hacer');
        await page.getByPlaceholder('What needs to be done?').press('Enter');
        await expect(page.getByText('hacer')).toBeVisible();
        await page.locator('span').filter({ hasText: 'check_box_outline_blank Witness something truly majestic' }).locator('i').click();
    });

    test('Clear Task', async ({ page }) => {
        await page.getByPlaceholder('What needs to be done?').click();
        await page.getByPlaceholder('What needs to be done?').fill('hacer');
        await page.getByPlaceholder('What needs to be done?').press('Enter');
        await expect(page.getByText('hacer')).toBeVisible();
        await page.locator('span').filter({ hasText: 'check_box_outline_blank Witness something truly majestic' }).locator('i').click();
        await page.getByText('clear_allClear').click();
    });

})