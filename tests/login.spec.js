// @ts-check
import { test, expect } from '@playwright/test';

test.describe('HUL Indus Vision Login Tests', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to the login page before each test
        await page.goto('https://hul.indusvision.ai');
    });

    test('successful login with valid credentials', async ({ page }) => {
        // Fill in login credentials
        await page.getByRole('textbox', { name: 'Email' }).fill('vision@aivolved.in');
        await page.getByRole('textbox', { name: 'Password' }).fill('Vision@123');

        // Click the login button
        await page.getByRole('button', { name: 'Login' }).click();

        // Wait for plant page to load after login
        await page.waitForURL('**/plant');
        
        // Verify successful login by checking URL and page content
        await expect(page).toHaveURL(/.*plant/);
        // You might want to verify some element that confirms successful login
        // For example: await expect(page.getByRole('heading', { name: 'Plant Dashboard' })).toBeVisible();
    });
});
