import { MultiPartyPage } from "../pageObjects/multi-party";

describe("Testing the Multi Party page -- using a Page Object or App Actions Object", () => {
  let baseUrl = Cypress.env("baseUrl");
  let apiUrl = Cypress.env("localApi");
  let po = new MultiPartyPage()
  beforeEach(() => {
    cy.viewport(1920, 1024);
    po.setDefaultIntercepts();
    cy.visit(
      `${baseUrl}/microsite/nfdiv/case-details/1669996761194595/trigger/update-parties`
    );
  });

  it("The header should be visible", () => {
    cy.get(".govuk-header__logotype-text").should("be.visible");
  });


  it("The case id should match the URL id using page Object", () => {
    po.getCaseId("Parties to Case ID 1669-9967-6119-4595");
  });

  it("The parties list should contain six items", () => {
    cy.wait("@parties");
    po.checkListLength(6);
  });

  it("It should carry out a case insensitive filter", () => {
    po.setSearchFilter('fred');
    po.checkListLength(3);
  });

  it("It should carry out a case sensitive filter", () => {
    po.setSearchFilter('fred');
    po.checkListLength(3);
    po.caseSensitiveToggleOn()
    po.checkListLength(1);

  });

  it ('should clear the filter', () => {
    po.setSearchFilter('fred');
    po.checkListLength(3);
    po.caseSensitiveToggleOn()
    po.checkListLength(1);
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.mat-mdc-button-touch-target').click();
    /* ==== End Cypress Studio ==== */
    cy.get("mat-selection-list >").should("have.length", 6);
  })
});
