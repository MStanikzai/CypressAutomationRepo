/// <reference types = "Cypress" />

describe('My Fifth Test Suite', function() {

    it('My Fifth Test case', function()  {
    
      
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //opening tabs without taking you to a new page
    //cy.get('#opentab').click()
    cy.get('#opentab').invoke('removeAttr', 'target').click()

    cy.origin("https://www.qaclickacademy.com", () => {
        cy.get('#navbarSupportedContent a[href*="about"]').click()
        cy.wait(1000)
        cy.get('.mt-50 h2').should('contain', 'QAClick Academy')
    })
    
   

        

     })
    
  })