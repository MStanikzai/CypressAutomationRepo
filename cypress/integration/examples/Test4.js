/// <reference types = "Cypress" />

describe('My Fourth Test Suite', function() {

    it('My Fourth Test case', function()  {
    
        
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //window:alert    (alert popups, automatically confirms)
        cy.on('window:alert',(str) => {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        //confirm popup   (choice to confirm or reject)
        cy.on('window:confirm',(str) => {

            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

     })
    
  })