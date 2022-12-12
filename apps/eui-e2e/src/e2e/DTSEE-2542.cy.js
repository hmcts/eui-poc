describe('empty spec', () => {
  beforeEach( ()=> {
    cy.viewport(1920,1024);
    cy.visit('http://localhost:4200/microsite/nfdiv/case-details/1669996761194595/trigger/update-appointment')

  })
  it('the header should be visible', () => {
    cy.get('.govuk-header__logotype-text').should('be.visible');
  })
  it('the case id should be visible', () => {
    cy.get('.govuk-grid-column-two-thirds > :nth-child(1) > span').should('contain.text','Your Case Number is 1669-9967-6119-4595');
  })
  it('the continue button should be disabled', () => {
    cy.get('[data-module="govuk-button"]').should('be.disabled');
  })
  it('should allow the user to select todays date', () => {
    cy.get('.mat-calendar-body-today').should('be.visible');
    cy.get('.mat-calendar-body-today').click()
    cy.get('.mat-calendar-body-selected').should('be.visible');
  })
})