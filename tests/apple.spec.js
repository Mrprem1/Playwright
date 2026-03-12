import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.apple.com/');
  //await page.getByRole('link', { name: 'Explore All iPad' }).click();
  //await page.getByLabel('iPad family of products', { exact: true }).getByRole('listitem').filter({ hasText: /^iPad$/ }).click();
  await page.getByRole('link', { name: 'TV and Home' }).click();
  await page.getByRole('link', { name: 'HomePod', exact: true }).click();
  await page.getByText('Private and secure.').click();
  await page.getByText('Private and secure.').click();
  await page.getByText('Private and secure.').click();
});

//apple 2

test('iphone 17 pro', async ({ page }) => {
  await page.goto('https://www.apple.com/');
  await page.getByRole('button', { name: 'Search apple.com' }).click();
  await page.getByRole('textbox', { name: 'Search apple.com' }).fill('iphone 17 pro');
  await page.getByRole('textbox', { name: 'Search apple.com' }).press('Enter');
  //await page.getByRole('link', { name: 'iPhone 17 Pro' }).nth(5).click();
  //await page.getByRole('link', { name: 'Shop Apple TV 4K' }).click();
  await page.goto('https://www.apple.com/shop/buy-tv/apple-tv-4k');
});



