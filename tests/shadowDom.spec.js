import { test } from "@playwright/test";
test("Shadow DOM Testing ", async ({ page }) => {
  await page.goto("http://autopract.com/selenium/shadowdom1/");
  // Get the text of Element in Shadow DOM 1
  console.log(await page.getByText("Shadow Element 1-1").textContent());
  // Get the text of Element in Shadow DOM 2
  console.log(await page.getByText("Shadow Element 1-2").textContent());
  // Get the text of Element in Shadow DOM 3
  console.log(await page.getByText("Shadow Element 2-1").textContent());
  // Get the text of Element in Shadow DOM 4
  console.log(await page.getByText("Shadow Element 2-2").textContent());
});
