/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Loading', () => {
  it('Should display loading screen while waiting for a fetch to resolve', () => {
    //make sure this works when loading page is a conditionally rendered
    cy.visit('http://localhost:3000/loading')
    cy.get('.loading').children('.dotRed', '.dotGreen', '.dotBlue', '.dotBlack')
  })
})