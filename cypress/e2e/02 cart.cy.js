describe("Testando funcionalidade do carrinho do site saucedemo.com na resolução do iPhone XR", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport("iphone-xr");
  });

  it("adicionar item Sauce Labs Bike Light ao carrinho no iphoneXR", () => {
    cy.login("standard_user", "secret_sauce");
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get("span[data-test=shopping-cart-badge]").contains("1").should("be.visible");
    cy.get("a[data-test=shopping-cart-link]").click();
    cy.get("div[data-test=inventory-item-name]").contains("Sauce Labs Bike Light").should("be.visible");
  });
});