describe('Trains', () => {
  const core = Cypress.env('core');

  beforeEach(() => {
    cy.visit('/departures/trains');
  });

  it('has the correct title', () => {
    cy.title().should('equal', `Trains | ${core.appName}`);
  });

  it('has the correct select elements', () => {
    cy.get('#train-departure-grid').as('grid');
    cy.get('@grid')
      .get(
        'div.ag-header-cell[col-id="plannedDepartureTime"] .ag-header-cell-text'
      )
      .contains('Planned Departure Time')
      .should('be.ok');

    cy.get('@grid').get('.ag-overlay-no-rows-center').as('noRows');

    cy.get('@noRows').contains('No Rows To Show').should('be.ok');

    cy.get('#land > div > label').contains('Country').should('be.ok');

    cy.get('#land > div > #land').as('landSelect');
    cy.get('@landSelect')
      .select('Netherlands')
      .then(() => {
        cy.get('#stations > div > label').contains('Stations').should('be.ok');
        cy.get('#stations > div > #stations')
          .as('stationSelect')
          .should('be.ok');
        cy.get('@stationSelect').select('Den Haag Centraal');
      })
      .then(() => {
        cy.get('@noRows').should('not.exist');

        cy.get('@grid')
          .get('div.ag-cell-value[col-id="plannedDepartureTime"]')
          .contains(new Date().getFullYear());
      });
  });
});
