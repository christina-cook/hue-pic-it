describe('Account', () => {

  it('Should be able to select Account from the dropdown menu once logged in', () => {
    cy.visit('http://localhost:3000/login')
      .get('input[type=email]').type('test@test.com')
      .get('input[type=password]').type('testing')
      .get('.form-submit-button').click().url().should('contain', '/')
      .get('.userDropdown').click()
      .get('.accountLink').click().url().should('contain', '/account')
  })
})
