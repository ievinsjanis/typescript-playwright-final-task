import { Page, Locator, expect } from "@playwright/test";
import BasePage from "./BasePage";

export default class CartPage extends BasePage {
  readonly page: Page;
  readonly cartItem: Locator;
  readonly checkOutButton: Locator;
  readonly payAndConfirmButton: Locator;
  readonly cardNameInput: Locator;
  readonly cardNumberInput: Locator;
  readonly cardCvcCodeInput: Locator;
  readonly cardMonthInput: Locator;
  readonly cardYearInput: Locator;
  readonly orderPlacementForm: Locator;
  readonly emptyCartField: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.checkOutButton = this.page.locator(".btn.btn-default.check_out");
    this.payAndConfirmButton = this.page.locator('[data-qa="pay-button"]');
    this.cartItem = this.page.locator("#product-1");
    this.cardNumberInput = this.page.locator('input[name="card_number"]')
    this.cardNameInput = this.page.locator('input[name="name_on_card"]')
    this.cardYearInput = this.page.getByPlaceholder("YYYY")
    this.cardMonthInput = this.page.getByPlaceholder("MM")
    this.cardCvcCodeInput = this.page.getByPlaceholder("ex.")
    this.orderPlacementForm = this.page.locator("#form")
    this.emptyCartField = this.page.locator('[id="empty_cart"]')
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
    await this.cardNameInput.fill(name);
    await this.cardNumberInput.fill(card_number);
    await this.cardCvcCodeInput.fill(cvc_code);
    await this.cardMonthInput.fill(month);
    await this.cardYearInput.fill(year);
  }

  async assertOrderCompleteMessage(orderMessage: string) {
    await this.assertText(this.orderPlacementForm, orderMessage);
  }

  async assertCartEmpty() {
    await this.navigateToPage("/view_cart")
    await this.assertPageUrl("/view_cart")
    await this.assertText(this.emptyCartField, 'Cart is empty! Click here to buy products.');
  }
}