/**
 * This is a class designed to abstract away the implementation of the page or user actions from the abject under test
 * Its purpose is to demonstrate one approach to functional testing reducing test brittleness
 * Compare the 2 end-to-end tests DTSSE-2518 (the original feature test using direct selectors with DTSEE-2596
 * which uses this page object to carry out the same function walk through.
 * In Cypress parlance this is called an app actions class, in other testing methodologies its called a page object
 *
 * Its main benefit is it's a single point of change which isolate the implementation from the test
 */
export class MultiPartyPage {
  /**
   * Sets up the default Cypress intercepts which capture the API calls and return static JSON for testing
   * this alleviates the need for API or databases to be running
   */
  setDefaultIntercepts(){
    cy.intercept("GET", "/microsite/nfdiv/api/party*", (req) => {
      req.reply({ fixture: "getParties.json" });
    }).as("parties");
  }

  getCaseId(testValue: string) {
    cy.get('[data-test="case-id"]').should(
      "contain.text",
      testValue
    );
  }

  checkListLength(listItems: number) {
    cy.get('[data-test="party-list"]>').should("have.length", listItems);
  }

  setSearchFilter(searchTerm: string){
    cy.get("#mat-mdc-form-field-label-0 > .ng-tns-c120-0").click();
    cy.get("#mat-input-0").clear();
    cy.get("#mat-input-0").type("fred");
  }

  caseSensitiveToggleOn(){
    cy.get('[data-test="search-bar__toggle"]').click()
  }
}