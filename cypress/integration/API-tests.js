describe('API-tests', () => {
  const baseURL = 'http://localhost:3000/'
//I know this isn't best practice for API tests, but didn't have time to
//learn fixtures/intercepts with post/delete.
//In order to make this work I wound up adding a lot of extra class names/ids
  beforeEach(() => {
    cy.visit(`${baseURL}`);
  });
  it('Should be able to submit a new reservation', () => {
    cy.get('form').get('input[name="name"]')
      .type('TestTestTest')
      .get('form').get('input[name="date"]')
      .type('4/7')
      .get('form').get('input[name="time"]')
      .type('12:20')
      .get('form').get('input[name="number"]')
      .type('4')
      .get('.reserve').click()
    cy.get('.reservationTickets').get('.ticket').get('p')
      .contains('TestTestTest')
  })
  it('Should be able to delet a new reservation', () => {
    cy.get('.reservationTickets').get('.ticket').get('.TestTestTest')
      .get('#TestTestTest').click()
    cy.get('.reservationTickets').get('.ticket').get('.TestTestTest').should('not.exist')
  })
})
