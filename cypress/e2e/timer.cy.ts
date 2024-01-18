/// <reference types="cypress"/>

describe("Timer", () => {
  it("shows 10 seconds", () => {
    cy.visit("/");
    for (let j = 1; j < 10; j++) {
      cy.contains(".status__time", `00:0${j}`);
    }
  });

  it.skip("shows minutes and seconds since the game started", () => {
    cy.clock();
    cy.visit("/");
    cy.contains(".status__time", "00:00");
    cy.tick(30_000);
    cy.contains(".status__time", "00:30");
    cy.tick(30_000);
    cy.contains(".status__time", "01:00");
    cy.tick(640_000);
    cy.contains(".status__time", "11:40");
  });
});
