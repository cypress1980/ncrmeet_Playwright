import { test } from '@playwright/test';

test('Browser Context example', async ({ browser }) => {

    //First Context
    const firstContext = await browser.newContext();
    const firstPage = await firstContext.newPage();
    await firstPage.goto('https://automationexercise.com/login');
    await firstPage.locator('input[data-qa="login-email"]').click();
    await firstPage.locator('input[data-qa="login-email"]').fill('ncrmeet1@yopmail.com');
    await firstPage.locator('input[data-qa="login-email"]').press('Tab');
    await firstPage.locator('input[placeholder="Password"]').fill('Test@1234');
    await firstPage.locator('button[data-qa="login-button"]').click();

    //Open Page in New Tab
    /*const secondPage = await firstContext.newPage();
    await secondPage.goto('https://automationexercise.com/login');
    await secondPage.locator('input[data-qa="login-email"]').click();
    await secondPage.locator('input[data-qa="login-email"]').fill('ncrmeet2@yopmail.com');
    await secondPage.locator('input[data-qa="login-email"]').press('Tab');
    await secondPage.locator('input[placeholder="Password"]').fill('Test@1234');
    await secondPage.locator('button[data-qa="login-button"]').click();

    //firstPage.bringToFront()
    await secondPage.locator('//a[@href="/products"]').click()*/

//Second Context --  Open Page in New Browser 
    const secondContext = await browser.newContext();
    const secondPage = await secondContext.newPage();
    await secondPage.goto('https://automationexercise.com/login');
    await secondPage.locator('input[data-qa="login-email"]').click();
    await secondPage.locator('input[data-qa="login-email"]').fill('ncrmeet2@yopmail.com');
    await secondPage.locator('input[data-qa="login-email"]').press('Tab');
    await secondPage.locator('input[placeholder="Password"]').fill('Test@1234');
    await secondPage.locator('button[data-qa="login-button"]').click();
    firstPage.bringToFront()
    await firstPage.locator('//a[@href="/products"]').click()

    await firstPage.pause();
    await secondPage.pause();
    
   /* //Closed Page/ Context
    await firstPage.close();
    await secondPage.close();


    //Closed Context
    await firstContext.close();
    await secondContext.close();*/
});