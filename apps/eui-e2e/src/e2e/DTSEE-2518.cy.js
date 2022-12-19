describe('Testing the Multi Party page', () => {
  let baseUrl = Cypress.env('baseUrl');
  let apiUrl = Cypress.env('localApi');
  beforeEach( ()=> {
    cy.viewport(1920,1024);
    cy.visit(`${baseUrl}/microsite/nfdiv/case-details/1669996761194595/trigger/update-parties`)
    // cy.intercept(`${apiURL}/party`)
    cy.intercept('GET', `http://localhost:3333/party`, {fixture: 'getParties.json'}).as('parties')
  })
  it('The header should be visible', () => {
    cy.get('.govuk-header__logotype-text').should('be.visible');
  })
  it('The case id should match the URL id', () => {
    cy.get('.case-id > h4').should('contain.text','Parties to Case ID 1669-9967-6119-4595');
  })
  // it('the continue button should be disabled', () => {
  //   cy.get('[data-module="govuk-button"]').should('be.disabled');
  // })
  // it('should allow the user to select todays date', () => {
  //   cy.get('.mat-calendar-body-today').should('be.visible');
  //   cy.get('.mat-calendar-body-today').click()
  //   cy.get('.mat-calendar-body-selected').should('be.visible');
  // })
})