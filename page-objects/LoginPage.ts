import { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.emailInput = this.page.locator('[data-qa="login-email"]');
    this.passwordInput = this.page.locator('[data-qa="login-password"]');
    this.loginButton = this.page.locator('[data-qa="login-button"]');
  }

  async inputLoginData(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.clickButton(this.loginButton);
  }
}