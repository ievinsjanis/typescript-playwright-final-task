// import { test, expect } from "@playwright/test";
// import HomePage from "../page-objects/HomePage";
// import ProductsPage from "../page-objects/ProductsPage";

// // Create test case:  Change sorting option to Name (Z to A)
// // Steps:
// // -Sign in
// // -Navigate to products page
// // -Make sure elemets are sorted accordingly

// test.use({ storageState: { cookies: [], origins: [] } });

// test.beforeEach(async ({ page }) => {
//   const productsPage = new ProductsPage(page);
//   await productsPage.navigateToPage("/products");
// });

// test("Change sorting option to Name (Z to A)", async ({ page }) => {
//   const productsPage = new ProductsPage(page);

//   await productsPage.selectSortingOption("Name (Z to A)");
//   await productsPage.verifyItemsSortedDesc();
// });