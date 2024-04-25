import { test, expect } from "@playwright/test";
import CartPage from "../page-objects/CartPage";

// Create test case:  Change sorting option to Name (Z to A)
// Steps:
// -Sign in
// -Change sorting option
// -Make sure elemets are sorted accordingly

test.use({ storageState: { cookies: [], origins: [] } });

test.beforeEach(async ({ page }) => {
  const cartPage = new CartPage(page);

  await cartPage.navigateToPage("/cart");
});

