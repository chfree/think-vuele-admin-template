// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => { 
  cy.visit('/')
  cy.get('input[name="username"]')
    .clear()
    .type(username)

  cy.get('input[name="password"]')
    .clear()
    .type(password)

  cy.get('.loginButton')
    .click()
})

Cypress.Commands.add('openMenu', (menu1, menu2) => { 
  cy.contains(menu1)
    .parent()
    .click({force:true})
  
  cy.wait(600)
    .contains(menu2)
    .click({force:true})
})

Cypress.Commands.add('field', (container, vname, value) => { 
  cy.get(container +' [vname="'+vname+'"]')
    .then((el) => {
      if(el.hasClass('el-date-editor')){
        cy.get(el)
        .children('input')
        .type(value)
      }else if(el.hasClass('tc-select')){
        cy.get(el)
          .get('div.el-select-dropdown.el-popper ul li')
          .contains(value)
          .click({force:true})
      }else{
        cy.get(el).type(value)
      }
    })
    
    
})