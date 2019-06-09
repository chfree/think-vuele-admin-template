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

  it('测试跳转到用户信息', function() {
    cy.visit('/#/system/user')
  })

  it('测试搜索查询', function() {
    cy.get('input[name="username"]')
    .clear()
    .type('chfree')

    cy.get('input[name="account"]')
    .clear()
    .type('chfree')

    cy.get('input[name="mobile"]')
    .clear()
    .type('110')

    cy.get('#userSearch')
      .click()

    cy.wait(1500)

    cy.get('#resetUserSearch')
      .click()

    cy.get('#userSearch')
      .click()
  })

  it('测试新增', function() {
    cy.get('#addData')
      .click()

    cy.get('.tc-dialog-body-container .tc-select[vname="userModel_education"]')
      .click({force: true})
    
    
  })

  it('测试编辑', function() {

  })

  it('测试删除', function() {

  })
})