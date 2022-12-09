describe('eui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=homecomponent--primary'));
  it('should render the component', () => {
    cy.get('eui-home').should('exist');
  });
});