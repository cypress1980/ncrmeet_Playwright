import { test, expect } from "@playwright/test";
test("iframe Testing ", async ({ page }) => {
  await page.goto("http://the-internet.herokuapp.com/iframe");
  //Playwright is used to locate and interact with iframes (inline frames) within a web page
  const textarea = await page.frameLocator("#mce_0_ifr").locator("#tinymce");
  await textarea.fill("talent500.co/");
  await expect(textarea).toHaveText("talent500.co/");
});
