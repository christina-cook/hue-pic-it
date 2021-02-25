/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('About', () => {
  it('Should display information related to the site when clicked', () => {
    cy.visit('http://localhost:3000/about')
    cy.get('.about').children('.aboutTopImage', '.aboutInfo', '.aboutBottomImage')
      .get('.aboutTopImage').should('have.attr', 'src').should('include', '/static/media/condeNextTravelerImage.7c619ece.jpg')
      .get('.aboutBottomImage').should('have.attr', 'src').should('include', '/static/media/andrewWatsonGettyImages.d005101d.jpg')
      .get('.aboutInfo').children('.aboutTitle', '.aboutSubtitle', '.infoTextOne', '.infoTextTwo', '.infoTextThree', '.infoTextFour', '.infoTextFive')
        .get('.aboutTitle').should('have.text', 'About Hue Pic It')
        .get('.aboutSubtitle').should('have.text', 'What, Why, and Who')
        .get('.infoTextOne').children('.unsplashLink')
          .get('.unsplashLink').should('have.attr', 'href').should('eq', 'https://unsplash.com/developers')
        .get('.infoTextTwo').children('.turingLink', '.firebaseLink')
          .get('.turingLink').should('have.attr', 'href').should('eq', 'https://turing.io')
          .get('.firebaseLink').should('have.attr', 'href').should('eq', 'https://firebase.google.com/')
        .get('.infoTextThree').children('.tineyeLink', '.stocksyLink')
          .get('.tineyeLink').should('have.attr', 'href').should('eq', 'https://labs.tineye.com/multicolr/')
          .get('.stocksyLink').should('have.attr', 'href').should('eq', 'https://www.stocksy.com/blog/search-by-color/')
        .get('.infoTextFour').children('.githubrepoLink')
          .get('.githubrepoLink').should('have.attr', 'href').should('eq', 'https://github.com/christina-cook/stretch-project')
        .get('.infoTextFive').should('have.text','Thank you for visiting!')
  })
})