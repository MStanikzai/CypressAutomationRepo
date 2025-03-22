/// <reference types = "Cypress" />

describe('My Seventh Test Suite', function() {

    it('My Seventh Test case', function()  {
    
      
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('div.mouse-hover-content').invoke('show') // way1 (show then click)
        cy.contains('Top').click()
        cy.url().should('include','top')

        cy.contains('Reload').click({force: true}) // way 2 (force click)
})


    
  })