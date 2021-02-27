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
    cy.get('input[type=email]').type('test@gmail.com')
      .get('input[type=password]').type('passwo')
      .get('.form-submit-button').click()
      .get('.error-alert').should('have.text', 'There is no user record corresponding to this identifier. The user may have been deleted.')
  })

  it('Should redirect to the dashboard once successfully logged in', () => {
    cy.get('input[type=email]').type('test@test.com')
      .get('input[type=password]').type('testing')
      .get('.form-submit-button').click()
      
    cy.on("url:changed", newUrl => {
      expect(newUrl).to.contain('/')
    })
  })

  it('Should allow user to signout after logging in', () => {
    cy.get('.header').children('.logo', '.userDropdown')
      .get('.userDropdown').click()
      .get('.signOutLink').click()

    cy.on("url:changed", newUrl => {
      expect(newUrl).to.contain('/login')
    }) 
  })

  it('Should redirect user to the singup page if they don\'t have an account', () => {
    cy.get('.form-footer').should('contain', 'Need to create an account? Sign Up')
      .get('.signup-link').click().url().should('include', '/signup')
  })
})
