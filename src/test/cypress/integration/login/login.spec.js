describe('My First Test', function() {
  it('Visits the bing.com', function() {
    cy.visit('http://localhost:8091/#/')
    cy.get('input[name="username"]')
      .clear()
      .type('admin-cypress')

    cy.get('input[name="password"]')
      .clear()
      .type('admin-cypress')

    cy.get('.loginButton')
      .click()

  })
})
