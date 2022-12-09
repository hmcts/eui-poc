describe('empty spec', () => {
  it('open and sets the viewport', () => {
    cy.viewport(1920,1024);
    cy.visit('/microsite/nfdiv/case-details/1669996761194595/trigger/update-appointment')
  })
  it('the header should be visible', () => {
    cy.get('.govuk-header__logotype-text').should('be.visible');
  })
  it('the case id should be visible', () => {
    cy.get('.govuk-grid-column-two-thirds > :nth-child(1) > span').should('contain.text','1669-9967-61-4595');
  })
  it('the continue button should be disabled', () => {
    cy.get('[data-module="govuk-button"]').should('be.disabled');
  })
})