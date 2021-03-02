/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Header', () => {
  it('Should display header on top of page with logo link to home', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[type=email]').type('test@test.com')
    .get('input[type=password]').type('testing')
    .get('.form-submit-button').click()
      cy.url().should('include', '/')
    cy.get('.header').children('.logo', '.userDropdown')
      .get('.logo').children('.bi-hexagon').click()
      cy.url().should('eq', 'http://localhost:3000/')
  })
  it('Should have a dropdown to edit account info', () => {
    cy.get('.header').children('.logo', '.userDropdown')
      .get('.userDropdown').click()
      .get('.accountLink').should('have.text', 'Account').click()
      cy.url().should('include', '/account')
  })
  it('Should have a dropdown to sign out', () => {
    cy.get('.header').children('.logo', '.userDropdown')
      .get('.dropdown-divider')
      .get('.signOutLink').should('have.text', 'Sign Out').click({force: true})
      cy.url().should('include', '/login')
  })
  
})