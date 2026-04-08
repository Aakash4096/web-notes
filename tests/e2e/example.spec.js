import { test, expect } from '@playwright/test';

test('has correct title and navigation', async ({ page }) => {
  await page.goto('/');
  
  // Check page title
  await expect(page).toHaveTitle('');
  
  // Check Navbar exists
  const navbar = page.locator('nav');
  await expect(navbar).toBeVisible();
  
  // Check main heading
  const heading = page.locator('h1');
  await expect(heading).toContainText('Fun facts about React');
});

test('displays React facts list', async ({ page }) => {
  await page.goto('/');
  
  const facts = page.locator('main ul li');
  await expect(facts).toHaveCount(5);
  
  // Verify first fact
  await expect(facts.first()).toContainText('Was first released in 2013');
});
