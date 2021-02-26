/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Error', () => {
  it('Should display an error page on when on a failed fetch or whenever error is set in context', () => {
    // cy.stub() when this is hooked up to error context, test it routes here
    cy.visit('http://localhost:3000/error')
    cy.get('.error').children('.errorTitle', '.errorMessage')
      .get('.errorTitle').children('.bi-emoji-dizzy-fill')
      .get('.errorMessage').children('.contact')
      .get('.contact')
      //add test to check mailto
  })
})