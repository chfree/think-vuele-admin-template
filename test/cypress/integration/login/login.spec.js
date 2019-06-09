describe('登陆测试', function() {
  it('测试登陆输入正确是否成功跳转', function() {
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
