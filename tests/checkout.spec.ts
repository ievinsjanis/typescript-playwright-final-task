import { test, expect } from "@playwright/test";
import HomePage from "../page-objects/HomePage";
import CartPage from "../page-objects/CartPage"

test.use({ storageState: ".auth/standard-user-auth.json" });

  test.beforeEach("Add item to cart and assert that the correct item with the correct price is shown in the cart", async ({ page }) => {
      const homePage = new HomePage(page);
      const cartPage = new CartPage(page);
      
      await homePage.navigateToPage("/");
      await homePage.addBlueTopToCart();
      await homePage.clickViewCartHyperlink();
      await cartPage.assertItemIsVisibleInCart("Blue Top","Women > Tops", "Rs. 500");
    });

    test('Go through the checkout flow and make a successful purchase', async ({ page }) => {
        const homePage = new HomePage(page);
        const cartPage = new CartPage(page);
        
        await homePage.navigateToPage("/view_cart");
        await cartPage.clickCheckOutButton();
        await cartPage.assertPageUrl("/checkout");
        await cartPage.assertItemIsVisibleInCart("Blue Top","Women > Tops", "Rs. 500");
        await cartPage.clickCheckOutButton();
        await cartPage.assertPageUrl("/payment");
        await cartPage.fillCreditCardInfo(
            "john lewis", "5555555555555555", "311", "05", "2025"
        );
        await cartPage.clickPayAndConfirmButton();
        await cartPage.assertOrderCompleteMessage("Congratulations! Your order has been confirmed!");
        await cartPage.assertCartEmpty();
      });
  