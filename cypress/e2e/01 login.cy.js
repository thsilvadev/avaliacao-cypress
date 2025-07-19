describe("Login no site saucedemo.com na resolução do iPhone XR", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport("iphone-xr");
  });

  it("login no iphoneXR com conta bloqueada", () => {
    cy.login("locked_out_user", "secret_sauce");
    cy.get("h3[data-test=error]")
      .contains("Epic sadface: Sorry, this user has been locked out.")
      .should("be.visible");
  });

  it("login no iphoneXR com conta problema", () => {
    cy.login("problem_user", "secret_sauce");
    cy.get("img[alt='Sauce Labs Backpack']")
      .should("be.visible")
      .should("have.attr", "src", "/static/media/sl-404.168b1cce.jpg");
  });
  it("login no iphoneXR com conta padrão", () => {
    cy.login("standard_user", "secret_sauce");
    cy.get("span[data-test=title").contains("Products").should("be.visible");
  });
});
