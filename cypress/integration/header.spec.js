/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Header', () => {
  it('Should display header on top of page with logo link to home, user drop down with links', () => {
    cy.visit('http://localhost:3000')
    cy.get('.header').children('.logo', '.userDropdown')
      .get('.userDropdown').click()
      .get('.accountLink').should('have.text', 'Account')
      .get('.favLink').should('have.text', 'Favorites')
      .get('.dropdown-divider')
      .get('.signOutLink').should('have.text', 'Sign Out')
      .get('.logo').children('.bi-hexagon').click()
      cy.url().should('eq', 'http://localhost:3000/')
  })
})