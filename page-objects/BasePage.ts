import { Page, Locator, expect } from "@playwright/test";

export default class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToPage(url: string) {
    await this.page.goto(url);
  }

  async assertPageUrl(url: string) {
    await expect(this.page).toHaveURL(url);
  }

  async assertText(selector: Locator, text: string) {
    await expect(selector).toContainText(text);
  }

  async clickButton(selector: Locator) {
    await selector.click();
  }
}