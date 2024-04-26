import { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class HomePage extends BasePage {
  readonly page: Page;
  readonly carouselSlider: Locator;
  readonly blueTopModal: Locator;
  readonly addToCartBlueTopButton: Locator;
  readonly viewCartHyperlink: Locator;
  readonly consentCookiesButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.blueTopModal = this.page.locator('.features_items > div:nth-child(3)');
    this.carouselSlider = this.page.locator('[id="slider"]');
    this.addToCartBlueTopButton = this.page.locator('.overlay-content .btn.btn-default.add-to-cart[data-product-id="1"]');
    this.viewCartHyperlink = this.page.locator("//div[@class='modal-content']//a[starts-with(@href, '/view_cart')]");
    this.consentCookiesButton = this.page.locator("//p[@class='fc-button-label' and text()='Consent']");
  }

  async addBlueTopToCart() {
    await this.blueTopModal.hover();
    await this.clickButton(this.addToCartBlueTopButton);
  }

  async clickViewCartHyperlink() {
    await this.clickButton(this.viewCartHyperlink);
  }

  async assertCarouselSliderText(text: string) {
  await this.assertText(this.carouselSlider, text);
  }
  async clickConsentCookiesButton() {
    await this.clickButton(this.consentCookiesButton);
  }
}