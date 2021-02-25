describe('Dashboard display', () => {
  const baseUrl = 'http://localhost:3000/'
  const apiUrl = 'https://api.unsplash.com/search/photos/?query=red&client_id=TxxKnYwWjOR3kXQ-IUBvuGO3W_mryJB4xTIrlcXAH_Q'

  it('should display four option cards to view certain color hues', () => {
    cy
      .visit(baseUrl)
      .get('.Red')
      .get('.card-header').eq(0).should('have.text', 'Red')
      .get('.card-header').eq(1).should('have.text', 'Green')
      .get('.card-header').eq(2).should('have.text', 'Blue')
      .get('.card-header').eq(3).should('have.text', 'B & W')
  })

  it('should click on view button and display images with that color', () => {
    cy
      .intercept('GET', apiUrl, { fixture: 'imageData' })
    cy
      .get('.Red-button').click()
  })
})