describe('Login page', () => {
  const baseURL = 'http://localhost:3000/login'
  beforeEach(() => {
    cy.visit(baseURL)
  })

  it('Should display a login form on the page', () => {
    cy.get('.form-card').find('.login-form').should('be.visible').and('contain', 'Log In')
  })

  it('Should have inputs for email and password', () => {
    cy.get('input[type=email]').should('exist')
      .get('input[type=password]').should('exist')
      .get('.form-label').should('have.length', '2')
  })

  it('Should be able to enter an email address and password into the form', () => {
    cy.get('input[type=email]').type('test@gmail.com')
      .get('input[type=password]').type('password')
  })

  it('Should see an error message if the email and password don\'t match', () => {
    // test alert and error message
  })

  it('Should redirect to the dashboard once successfully logged in', () => {
    // test link to '/'
  })

  // test email login with intercept

  // test Google login functionality

  // test Facebook login functionality

  // test GitHub login functionality

  it.only('Should redirect user to the singup page if they don\'t have an account', () => {
    cy.get('.form-footer').should('contain', 'Need to create an account? Sign Up')
      .get('.signup-link').click().url().should('include', '/signup')
  })
})
