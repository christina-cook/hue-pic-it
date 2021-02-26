describe('Signup page', () => {
  const baseURL = 'http://localhost:3000/signup'
  beforeEach(() => {
    cy.visit(baseURL)
  })

  it('Should display a signup form on the page', () => {
    cy.get('.form-card').find('.signup-form').should('contain', 'Sign Up')
  })

})
