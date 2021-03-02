describe('Dashboard display', () => {
  const baseUrl = 'http://localhost:3000/login'
  const apiUrl = 'https://api.unsplash.com/search/photos/?query=red&client_id=TxxKnYwWjOR3kXQ-IUBvuGO3W_mryJB4xTIrlcXAH_Q'

  it('should log in to test account', () => {
    cy
      .visit(baseUrl)
      .get('input[type=email]').type('test@gmail.com')
      .get('input[type=password]').type('password')
      .get('.form-submit-button').click()
  })
  
  it('should display four option cards to view certain color hues', () => {
    cy
      .get('.Red')
      .get('.card-title').eq(0).should('have.text', 'Red')
      .get('.card-title').eq(1).should('have.text', 'Orange')
      .get('.card-title').eq(2).should('have.text', 'Yellow')
      .get('.card-title').eq(3).should('have.text', 'Green')
      .get('.card-title').eq(4).should('have.text', 'Blue')
      .get('.card-title').eq(5).should('have.text', 'Violet')
      .get('.card-title').eq(6).should('have.text', 'Black & White')
  })

  it('should click on view button and display images with that color', () => {
    cy
      .intercept('GET', apiUrl, { fixture: 'imageData' })
    cy
      .get('.Red-button').click()
  })

  it('Should allow user to signout from dashboard', () => {
    cy.get('.header').children('.logo', '.userDropdown')
      .get('.userDropdown').click()
      .get('.signOutLink').click()
  })
})