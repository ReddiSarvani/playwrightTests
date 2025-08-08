// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Amazon India Tests', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to Amazon India
        await page.goto('https://www.amazon.in');
    });

    test('navigate to login page', async ({ page }) => {
        // Hover over the account list to show sign-in button
        await page.hover('#nav-link-accountList');

        // Click on the sign-in button
        await page.getByRole('link', { name: 'Sign in' }).click();

        // Verify we are on the login page
        await expect(page).toHaveURL(/.*signin/);
        
        // Verify login form is visible
        await expect(page.getByLabel('Email or mobile phone number')).toBeVisible();
    });
});
