/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Footer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should display footer on bottom of page with links to about', () => {
    cy.get('.footer').children('.aboutLink', '.christina', '.alice', '.kevin')
      .get('.aboutLink').click()
    cy.url().should('include', '/about')
  })
  
  it('Should link to Christina\'s github', () => {
    cy.visit('http://localhost:3000')
    cy.get('.footer').children('.christina')
      .get('.christina').should('have.attr', 'href').should('eq', 'https://github.com/christina-cook')
  })

  it('Should link to Alice\'s github', () => {
    cy.get('.footer').children('.alice')
      .get('.alice').should('have.attr', 'href').should('eq', 'https://github.com/srslie')
  })

  it('Should link to Kevin\'s github', () => {
    cy.get('.footer').children('.kevin')
      .get('.kevin').should('have.attr', 'href').should('eq', 'https://github.com/kevinhartmann23')
  })
})