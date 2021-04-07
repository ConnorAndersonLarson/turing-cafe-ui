describe('API-tests', () => {
  const baseURL = 'http://localhost:3000/'

  beforeEach(() => {
    cy.visit(`${baseURL}`);
  });
  it('Should be able to submit a new reservation', () => {
    cy.get('form').get('input[name="name"]')
      .type('Connor')
      .get('form').get('input[name="date"]')
      .type('4/7')
      .get('form').get('input[name="time"]')
      .type('12:20')
      .get('form').get('input[name="number"]')
      .type('4')
      .get('.reserve').click()
    cy.get('.reservationTickets').get('.ticket').get('p')
      .contains('Connor')
  })
  it('Should be able to delet a new reservation', () => {
    cy.get('.reservationTickets').get('.ticket').get('.Connor')
      .get('#Connor').click()
    cy.get('.reservationTickets').get('.ticket').get('.Connor').should('not.exist')
  })
})
