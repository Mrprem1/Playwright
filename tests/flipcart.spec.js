import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').fill('pk@gmail.com');
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').press('Enter');
  await page.getByRole('button', { name: 'Request OTP' }).click();
  await page.getByRole('button', { name: '✕' }).click();
  //await page.getByRole('link', { name: 'Electronics' }).click();
  //await page.locator('._3n8fna1co._3n8fna10j._3n8fnaod._3n8fna1._3n8fnac7._1i2djtb9._1i2djtk9._1i2djtir').first().click();
  //const page1Promise = page.waitForEvent('popup');
  //await page.getByRole('link', { name: 'Bestseller ASUS ExpertBook P1' }).click();
  //const page1 = await page1Promise;
});
