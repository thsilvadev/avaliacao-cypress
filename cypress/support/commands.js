
// Cypress.Commands.add("test_triangle", (side_a, side_b, side_c) => {
//   cy.visit("https://vanilton.net/web-test/triangulo_v2");
//   cy.get("#sideA").type(side_a);
//   cy.get("#sideB").type(side_b);
//   cy.get("#sideC").type(side_c);
//   cy.get('button[type="submit"]').click();
//   return cy.get("#result");
// });

Cypress.Commands.add("login", (user, password) => {
  cy.get("#user-name").type(user);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
});

