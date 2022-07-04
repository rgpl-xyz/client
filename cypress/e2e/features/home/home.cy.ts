describe('Home', () => {
  const core = Cypress.env('core');

  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct title', () => {
    cy.title().should('equal', `Home | ${core.appName}`);
  });

  it('has the correct content', () => {
    cy.get('#card-welcome > .card-body > .card-title').contains(
      'Welcome, traveller'
    );

    cy.get('#card-help > .card-body > .card-title').contains('Need help?');

    cy.get('#card-download-app > .card-body > .card-title').contains(
      'Download our app'
    );
  });
});
