describe('Login page', () => {
  const baseURL = 'http://localhost:3000/login'

  it('Should display a login form on the page', () => {
    cy.visit(baseURL)
    .get('.form-card').find('.login-form').should('be.visible').and('contain', 'Log In')
  })

  it('Should have inputs for email and password', () => {
    cy.get('input[type=email]').should('exist')
      .get('input[type=password]').should('exist')
      .get('.form-label').should('have.length', '2')
  })

  it('Should be able to enter an email address and password into the form', () => {
    cy.get('input[type=email]').type('test@test.com')
      .get('input[type=password]').type('test')
  })

  it('Should see an error message if the email and password don\'t match', () => {
    cy.get('.form-submit-button').click()
      .get('.error-alert').should('have.text', 'The password is invalid or the user does not have a password.')
  })

  it('Should redirect to the dashboard once successfully logged in', () => {
    cy.get('input[type=password]').type('ing')
      .get('.form-submit-button').click().url().should('contain', '/')
  })

  it('Should allow user to signout after logging in', () => {
    cy.get('.header').children('.logo', '.userDropdown')
      .get('.userDropdown').click()
      .get('.signOutLink').click().url().should('contain', '/login')
  })

  it('Should redirect user to the singup page if they don\'t have an account', () => {
    cy.get('.form-footer').should('contain', 'Need to create an account? Sign Up')
      .get('.signup-link').click().url().should('include', '/signup')
  })
})
