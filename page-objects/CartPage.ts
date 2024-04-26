import { Page, Locator, expect } from "@playwright/test";
import BasePage from "./BasePage";

export default class CartPage extends BasePage {
  readonly page: Page;
  readonly cartItem: Locator;
  readonly checkOutButton: Locator;
  readonly payAndConfirmButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.checkOutButton = this.page.locator(".btn.btn-default.check_out");
    this.payAndConfirmButton = this.page.locator('[data-qa="pay-button"]');
    this.cartItem = this.page.locator("#product-1");
  }

  async assertItemIsVisibleInCart(itemName: string, itemCategory: string, itemPrice: string) {
    expect(this.cartItem).toContainText(itemName);
    expect(this.cartItem).toContainText(itemCategory);
    expect(this.cartItem).toContainText(itemPrice);
  }

  async clickCheckOutButton() {
    await this.clickButton(this.checkOutButton)
  }

  async clickPayAndConfirmButton() {
    await this.clickButton(this.payAndConfirmButton)
  }
  
  async fillCreditCardInfo(name: string, card_number: string, cvc_code: string, month: string, year: string) {
    await this.nameInput.fill(name);
    await this.cardNumberInput.fill(card_number);
    await this.cvcCodeInput.fill(cvc_code);
    await this.monthInput.fill(month);
    await this.yearInput.fill(year);
  }

  async assertOrderComplete() {
    await this.clickButton(this.payAndConfirmButton)
  }

  async assertCartEmpty() {
    await this.clickButton(this.payAndConfirmButton)
  }
}
