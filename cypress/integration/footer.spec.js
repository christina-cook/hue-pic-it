context('Footer', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('Should display footer on bottom of page with links to about, individual devs', () => {
    cy.get('footer').children()
  })