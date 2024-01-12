import { test, expect } from "@playwright/test";

test("new tab accessing", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://automationpanda.com/bdd/");

  const [newtab] = await Promise.all([
    //context.waitForEvent("page") signifies a pause in execution, 
    //waiting for a specific event (likely a new page being opened) before proceeding
    context.waitForEvent("page"),
    //// This action triggers the new tab
    page.locator('a[href="https://cucumber.io/"]').click(),
  ]);
  // title of new tab page
  console.log(await newtab.title());
  // title of existing page
  console.log(await page.title()); //parent tab
  await context.close();
});
