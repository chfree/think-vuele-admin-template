describe('登陆测试', function() {
  it('测试登陆输入正确是否成功跳转', function() {
    cy.visit('/')
    cy.get('input[name="username"]')
      .clear()
      .type('admin-cypress')

    cy.get('input[name="password"]')
      .clear()
      .type('admin-cypress')

    cy.get('.loginButton')
      .click()

  })

  it('测试个人信息是否可以正常点击', function(){
    cy.get('.avatar-wrapper')
      .click()
      .wait(1500)
      .click()
  })
})
