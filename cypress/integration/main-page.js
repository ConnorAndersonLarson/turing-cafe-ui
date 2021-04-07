describe('Main-Page Testing', () => {
  const baseURL = 'http://localhost:3000/'

  beforeEach(() => {
    cy.fixture('reservation-data.json')
      .then(reservations => {
        cy.intercept('http://localhost:3001/api/v1/reservations', {
          body: reservations
        })
      });
    cy.visit(`${baseURL}`);
  });
  it('Should display site name', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
  })
  it('Should display reservations', () => {
    cy.get('.reservationTickets')
      .get('.ticket').should('have.length', 9)
  })
  it('Should show reservation info on each ticket', () => {
    cy.get('.reservationTickets').get('.ticket').get('#1').get('p')
      .contains('Christie')
    cy.get('.reservationTickets').get('.ticket').get('#2').get('p')
      .contains('4/5')
    cy.get('.reservationTickets').get('.ticket').get('#3').get('p')
      .contains('6:00 pm')
    cy.get('.reservationTickets').get('.ticket').get('#4').get('p')
      .contains('Number of Guests: 7')
  })
  it('Should have inputs to make a reservation', () => {
    cy.get('form').get('input').should('have.length', 4)
    cy.get('form').get('button').should('have.length', 1)
  })
  it('Should be able to add values to inputs', () => {
    cy.get('form').get('input[name="name"]')
      .type('Connor')
      .should('have.value', 'Connor')
      .get('form').get('input[name="date"]')
      .type('4/7')
      .should('have.value', '4/7')
      .get('form').get('input[name="time"]')
      .type('12:20')
      .should('have.value', '12:20')
      .get('form').get('input[name="number"]')
      .type('4')
      .should('have.value', '4')
  })
})
