describe('Results Display', () => {
  const baseUrl = 'http://localhost:3000/'
  const apiUrl = 'https://api.unsplash.com/search/photos/?query=red&client_id=TxxKnYwWjOR3kXQ-IUBvuGO3W_mryJB4xTIrlcXAH_Q'

  it('should display image cards on click of button', () => {
    cy
      .intercept('GET', apiUrl, { fixture: 'imageData' })
      
    cy
      .visit(baseUrl)
      .get('.Red-button').click()

  })

  it('should practice RESTful, each url should have search term in path', () => {
    cy
      .on("url:changed", newUrl => {
        expect(newUrl).to.contain('movies/694919')
    })
  })
})

describe('Individual Card', () => {
  it('should display an image', () => {
    cy
      .get('.card img')
  })

  it('should have a title', () => {
    cy
      .get('.card-title').should('have.text', 'puddle on ground')
  })

  it('should have a hue option', () => {
    cy
      .get('.card-text').eq(1).should('have.text', 'Hex: #262626')
  })

  it('should allow a user to visit a downloadlink', () => {
    cy
      .get('.card a').should('have.attr', 'href').should('eq', "https://unsplash.com/photos/Ar6eXpQaCwk/download")
  })

})