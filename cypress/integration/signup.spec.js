describe('Signup page', () => {
  const baseURL = 'http://localhost:3000/login'

  it('Should redirect user to the singup page if they don\'t have an account', () => {
    cy.visit(baseURL)
      .get('.form-footer').should('contain', 'Need to create an account? Sign Up')
      .get('.signup-link').click().url().should('include', '/signup')
  })

  it('Should display a signup form on the page', () => {
    cy.get('.form-card').find('.signup-form').should('be.visible').and('contain', 'Sign Up')
  })

  it('Should have inputs for email, password, and password confirmation', () => {
    cy.get('input[type=email]').should('exist')
      .get('.form-label').should('have.length', '3')
      .get('input[type=password]').should('exist').and('have.length', '2')
  })

  it('Should see an error message if the passwords don\'t match', () => {
    cy.get('input[type=email]').type('test@gmail.com')
      .get('input[type=password]').eq(0).type('passwo')
      .get('input[type=password]').eq(1).type('password')
      .get('.form-submit-button').click()
      .get('.error-alert').should('have.text', 'Passwords do not match')
  })

  it('Should redirect user to the login page if they already have an account', () => {
    cy.get('.form-footer').should('contain', 'Already have an account? Log In')
      .get('.login-link').click().url().should('include', '/login')
  })
})
