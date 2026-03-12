import {test, expect} from '@playwright/test';

test('test', async ({page}) => {
    await page.goto('https://www.rolls-roycemotorcars.com/en_GB/home.html');
    await expect(page).toHaveTitle('Rolls-Royce Motor Cars: Inspiring Greatness');
});