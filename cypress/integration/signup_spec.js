describe('Signup page', () => {
  const baseURL = 'http://localhost:3000/signup'
  beforeEach(() => {
    cy.visit(baseURL)
  })

  it('Should display a signup form on the page', () => {
    cy.get('.form-card').find('.signup-form').should('be.visible').and('contain', 'Sign Up')
  })

  it('Should have inputs for email, password, and password confirmation', () => {
    cy.get('input[type=email]').should('exist')
      .get('.form-label').should('have.length', '3')
      .get('input[type=password]').should('exist').and('have.length', '2')
  })

  it('Should be able to enter an email address and password into the form', () => {
    cy.get('input[type=email]').type('test@gmail.com')
      .get('input[type=password]:first').type('password')
      .get('input[type=password]:last').type('password')
  })

  it('Should see an error message if the passwords don\'t match', () => {
    // test alert and error message 'Passwords do not match'
  })

  it('Should see an error message if the passwords aren\'t at least 6 characters long', () => {
    // test alert and error message
  })

  it('Should see an error message if the an account already exists for the email entered', () => {
    // test alert and error message
  })

  it('Should redirect to the dashboard once successfully signed up', () => {
    // test link to '/'
  })

  // test email login with intercept

  // test Google signup functionality

  // test Facebook signup functionality

  // test GitHub signup functionality

  it('Should redirect user to the login page if they already have an account', () => {
    cy.get('.form-footer').should('contain', 'Already have an account? Log In')
      .get('.login-link').click().url().should('include', '/login')
  })
})
