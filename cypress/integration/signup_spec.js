describe('Signup page', () => {
  const baseURL = 'http://localhost:3000/signup'
  beforeEach(() => {
    cy.visit(baseURL)
  })

  it('Should display a signup form on the page', () => {
    cy.get('.form-card').find('.signup-form').should('be.visible').and('contain', 'Sign Up')
  })

  it.only('Should have inputs for email, password, and password confirmation', () => {
    cy.get('input[type=email]').should('exist')
      .get('.form-label').should('have.length', '3')
      .get('input[type=password]').should('exist').and('have.length', '2')
  })

  it('Should see an error message if the passwords don\'t match', () => {

  })
})
