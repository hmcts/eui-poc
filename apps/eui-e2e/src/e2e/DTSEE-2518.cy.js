import { MultiPartyPage } from "../pageObjects/multi-party";

describe("Testing the Multi Party page -- Direct selection method", () => {
  let baseUrl = Cypress.env("baseUrl");
  let apiUrl = Cypress.env("localApi");
  beforeEach(() => {
    cy.viewport(1920, 1024);
    cy.intercept("GET", "/microsite/nfdiv/api/party*", (req) => {
      req.reply({ fixture: "getParties.json" });
    }).as("parties");
    cy.intercept("PATCH", "/microsite/nfdiv/api/party/6", (req) => {
      req.reply({ fixture: "getPartiesPatch.json" });
    }).as("partiesPatch");
    cy.intercept("POST", "/microsite/nfdiv/api/party", (req) => {
      req.reply({ fixture: "getPartiesAddOne.json" });
    }).as("partiesAddOne");
    cy.intercept("DELETE", "/microsite/nfdiv/api/party/6", (req) => {
      req.reply({ fixture: "getPartiesDeleteOne.json" });
    }).as("partiesDelete");
    cy.visit(
      `${baseUrl}/microsite/nfdiv/case-details/1669996761194595/trigger/update-parties`
    );
  });

  it("The header should be visible", () => {
    cy.get(".govuk-header__logotype-text").should("be.visible");
  });

  it("The case id should match the URL id", () => {
    cy.get(".case-id > h4").should(
      "contain.text",
      "Parties to Case ID 1669-9967-6119-4595"
    );
  });
  /**
   * There is a convention in the cypress world for data-test to be data-test,
   * since we may be using other tools that expect data-test as a convention here
   * we will use that instead its trivial
   */

  it("The case id should match the URL id using data-test", () => {
    cy.get('[data-test="case-id"]').should(
      "contain.text",
      "Parties to Case ID 1669-9967-6119-4595"
    );
  });

  it("The parties list should contain six items", () => {
    cy.wait("@parties");
    cy.get('[data-test="party-list"]>').should("have.length", 6);
  });

  it("It should carry out a case insensitive filter", () => {
    cy.get("#mat-mdc-form-field-label-0 > .ng-tns-c120-0").click();
    cy.get("#mat-input-0").clear("f");
    cy.get("#mat-input-0").type("fred");
    cy.get('[data-test="party-list"]>').should("have.length", 3);
  });

  it("It should carry out a case sensitive filter", () => {
    cy.get("#mat-mdc-form-field-label-0 > .ng-tns-c120-0").click();
    cy.get("#mat-input-0").clear("f");
    cy.get("#mat-input-0").type("fred");
    cy.get('[data-test="party-list"]>').should("have.length", 3);
    cy.get(".mdc-switch__icon--off").click();
    cy.get('[data-test="party-list"]>').should("have.length", 1);
  });

  it("should clear the filter", () => {
    cy.get("#mat-mdc-form-field-label-0 > .ng-tns-c120-0").click();
    cy.get("#mat-input-0").clear("f");
    cy.get("#mat-input-0").type("fred");
    cy.get('[data-test="party-list"]>').should("have.length", 3);
    cy.get(".mdc-switch__icon--off").click();
    cy.get('[data-test="party-list"]>').should("have.length", 1);
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".mat-mdc-button-touch-target").click();
    /* ==== End Cypress Studio ==== */
    cy.get('[data-test="party-list"]>').should("have.length", 6);
    /* ==== Generated with Cypress Studio ==== */
  });

  it("should edit a user", () => {
    cy.wait("@parties");
    cy.get('[data-test="party-list"]>').should("have.length", 6);
    cy.get("mat-selection-list  > :nth-child(6) ").click();
    cy.get('[data-test="edit-button"]').click();
    cy.get("#first-name").clear();
    cy.get("#first-name").type("Edmund");
    cy.get("#last-name").clear();
    cy.get("#last-name").type("Sigfredson");
    cy.get(".edit-form > :nth-child(2)").click();
    cy.wait("@partiesPatch");
    /* ==== End Cypress Studio ==== */
    cy.get('[data-test="party-list"]>').should("have.length", 6);
    cy.get("mat-selection-list  > :nth-child(6) ").should(
      "contain.text",
      "Sigfredson"
    );
  });
  it("should add a user", () => {
    cy.wait("@parties");
    cy.get('[data-test="party-list"]>').should("have.length", 6);
    cy.get('[data-test="add-button"]').click();
    cy.get("#first-name").clear();
    cy.get("#first-name").type("Edmund");
    cy.get("#last-name").clear();
    cy.get("#last-name").type("Amunsen");
    cy.get(".edit-form > button").click();
    cy.wait("@partiesAddOne");
    cy.get('[data-test="party-list"]>').should("have.length", 7);
  });

  it("should delete a user", () => {
    cy.wait("@parties");
    cy.get('[data-test="party-list"]>').should("have.length", 6);
    cy.get("mat-selection-list  > :nth-child(6) ").click();
    cy.get('[data-test="delete-button"]').click();
    cy.wait("@partiesDelete");
    cy.get("mat-selection-list >").should("have.length", 5);
  });
});
