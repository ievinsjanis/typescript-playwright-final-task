import { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class HomePage extends BasePage {
  readonly page: Page;
  readonly carouselSlider: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.carouselSlider = this.page.locator('[id="slider"]');
  }

}