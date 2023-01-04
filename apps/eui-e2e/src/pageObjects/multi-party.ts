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
    cy.intercept("PATCH", "/microsite/nfdiv/api/party/6", (req) => {
      req.reply({ fixture: "getPartiesPatch.json" });
    }).as("partiesPatch");
    cy.intercept("POST", "/microsite/nfdiv/api/party", (req) => {
      req.reply({ fixture: "getPartiesAddOne.json" });
    }).as("partiesAddOne");
    cy.intercept("DELETE", "/microsite/nfdiv/api/party/6", (req) => {
      req.reply({ fixture: "getPartiesDeleteOne.json" });
    }).as("partiesDelete");
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

  selectListItem(index:number) {
    cy.get(`mat-selection-list  > :nth-child(${index})`).click();
  }
  checkListItemContains(index:number, text:string) {
    cy.get(`mat-selection-list  > :nth-child(${index})`).should(
      "contain.text",
      text
    );
  }

  setSearchFilter(searchTerm: string){
    cy.get('[data-test="search-form-field"]').click();
    cy.get('[data-test="filter-input"]').clear();
    cy.get('[data-test="filter-input"]').type("fred");
  }

  clearSearchFilter(){
    cy.get('[data-test="search-form-field"]').click();
    cy.get('[data-test="filter-clear"]').click();
  }

  caseSensitiveToggleOn(){
    cy.get('[data-test="search-bar__toggle"]').click()
  }

  clickAddButton() {
    cy.get('[data-test="add-button"]').click();
  }
  clickEditButton() {
    cy.get('[data-test="edit-button"]').click();
  }

  clickDeleteButton() {
    cy.get('[data-test="delete-button"]').click();
  }
  clickAddPartySubmitButton() {
    cy.get('[data-test="add-party-submit"]').click();
  }
  clickEditPartySubmitButton() {
    cy.get('[data-test="edit-party-submit"]').click();
  }

  fillFirstNameField(text: string){
    cy.get("#first-name").clear();
    cy.get("#first-name").type(text);
  }
  fillLastNameField(text: string){
    cy.get("#last-name").clear();
    cy.get("#last-name").type(text);
  }
}