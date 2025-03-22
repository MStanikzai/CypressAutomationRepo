/// <reference types = "Cypress" />

describe('My Third Test Suite', function() {

    it('My Third Test case', function()  {
    
        //Checkboxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2','option3'])

    //Static Dropdown
    cy.get('select').select('option2').should('have.value', 'option2')

    //Dynamic Dropdowns
    cy.get('#autocomplete').type('af')

    cy.get('.ui-menu-item div').each(($el, index, $list) => {

        if($el.text()==="Afghanistan"){
            cy.wrap($el).click()
        }
    })

    //Autocomplete / Asserting value contains Afghanistan
    cy.get('#autocomplete').should('have.value', 'Afghanistan')

    //Hide Show, handling visible and invisible elements
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')


    //Radio Buttons
    cy.get('[value="radio2"]').check().should('be.checked')
    cy.get('[value="radio3"]').check().should('be.checked')
    cy.get('[value="radio2"]').should('not.be.checked')

     })
    
  })