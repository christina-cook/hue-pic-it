describe('Account', () => {

  it('Should be able to select Account from the dropdown menu once logged in', () => {
    cy.visit('http://localhost:3000/login')
      .get('input[type=email]').type('test@test.com')
      .get('input[type=password]').type('testing')
      .get('.form-submit-button').click().url().should('contain', '/')
      .get('.userDropdown').click()
      .get('.accountLink').click().url().should('contain', '/account')
  })

  it('Should see account information for the current user', () => {
    cy.get('.account-info').children('h2').should('contain', 'Account Information')
      .get('#display-name').should('have.text', 'Name')
  })

  it('Should be able to successfully update the name on the user\'s account', () => {
    cy.get('.update-name').type('Forrest')
      .get('.account-button').click()
      .get('.success-alert').should('contain', 'Your account has been updated!')
  })
})
