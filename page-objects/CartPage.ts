import { Page, Locator, expect } from "@playwright/test";
import BasePage from "./BasePage";

export default class CartPage extends BasePage {
  readonly page: Page;
  readonly cartItem: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.cartItem = this.page.locator("#product-1");
  }

  async assertItemIsVisibleInCart(itemName: string, itemCategory: string, itemPrice: string) {
    expect(this.cartItem).toContainText(itemName);
    expect(this.cartItem).toContainText(itemCategory);
    expect(this.cartItem).toContainText(itemPrice);
  }
}