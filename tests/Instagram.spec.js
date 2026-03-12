import { test, expect } from '@playwright/test';
[
    {email:"Pk@gmail.com", msg:"asdfghjklk"},
    {email:"Vanish@gmail.com", msg:"asdfghjklk"},
].forEach(obj => {
    test(`contact page submit with ${obj.email} and ${obj.msg}`, async ({page}) => {
        await page.goto('http://localhost:5500/contact.html');
        // await page.getByRole('textbox', { name: 'Email' }).click();
        await page.locator('#exampleFormControlInput1').click();
        await page.locator('#exampleFormControlInput1').fill(obj.email);
        // await page.getByRole('textbox', { name: 'Email' }).fill(obj.email);

        // await page.getByTestId('exampleFormControlInput1').click();
        // await page.getByTestId('exampleFormControlInput1').fill(obj.msg);
        await page.locator('#exampleFormControlTextarea1').click();
        await page.locator('#exampleFormControlTextarea1').fill(obj.msg);
        page.once('dialog', dialog => {
            console.log('dialog.message: ${dialog.message()}');
            dialog.dismiss().catch(() => {});
            });
        await page.getByRole('button', { name: 'Submit' }).click();
        });
    })