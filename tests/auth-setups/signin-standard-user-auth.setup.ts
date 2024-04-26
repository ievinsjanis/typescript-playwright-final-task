import { test as setup } from "@playwright/test";
import HomePage from "../../page-objects/HomePage";
import LoginPage from "../../page-objects/LoginPage";

const authFile = ".auth/standard-user-auth.json";

setup("Sign in as standard user", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  await homePage.navigateToPage("/login");
  await loginPage.inputLoginData("janisievins99@gmail.com", "parol3123");
  await loginPage.clickLoginButton();
  await homePage.assertPageUrl("/");
  await homePage.assertCarouselSliderText("All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.");

  await page.context().storageState({ path: authFile });
});