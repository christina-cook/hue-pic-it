const baseUrl = 'http://localhost:3000/'
const apiUrl = 'https://api.unsplash.com/search/photos?query=red&client_id=TxxKnYwWjOR3kXQ-IUBvuGO3W_mryJB4xTIrlcXAH_Q'

describe('Results Display', () => {

  it('should log in to test account', () => {
    cy
      .visit(baseUrl)
      .get('input[type=email]').type('test@gmail.com')
      .get('input[type=password]').type('password')
      .get('.form-submit-button').click()
  })

  
  it('should display image cards on click of button', () => {
    cy
      .intercept('GET', apiUrl, { fixture: 'imageData' })
    cy
      .get('.Red-button').click()

  })

  it('should practice RESTful, each url should have search term in path', () => {
    cy
      .on("url:changed", newUrl => {
        expect(newUrl).to.contain('results/red')
    })
  })
})

describe('Individual Card', () => {
  it('should display an image', () => {
    cy
      .get('.card img')
  })

  it('should display more info on a picture when user clicks', () => {
    cy
      .get('.card:first').click()
  })

  it('should have a title', () => {
    cy
      .get('.card-title:first').should('have.text', 'puddle on ground')
  })

  it('should have a hue option', () => {
    cy
      .get('.card-text').eq(0).should('have.text', '#262626')
  })

  it('should display credit to photographer', () => {
    cy
      .get('.card-text').eq(1).should('have.text', 'Ed Leszczynskl')
  })

  it('should allow a user to visit a downloadlink', () => {
    cy
      .get('.card a').should('have.attr', 'href').should('eq', "https://unsplash.com/photos/Ar6eXpQaCwk/download")
  })

})

describe('Error Display', () => {
  it('Should display an error page on when on a failed fetch or whenever error is set in context', () => {
    cy
      .intercept('GET', apiUrl, { statusCode: 400 })
    
    cy.visit(baseUrl)
    
    cy
      .get('.Red-button').click()
      .get('.error').children('.errorTitle', '.errorMessage')
      .get('.errorTitle').children('.bi-emoji-dizzy-fill')
      .get('.errorMessage').children('.contact')
      .get('.contact')
  })

  it('Should allow user to signout from error display', () => {
    cy.get('.header').children('.logo', '.userDropdown')
      .get('.userDropdown').click()
      .get('.signOutLink').click()
})

})