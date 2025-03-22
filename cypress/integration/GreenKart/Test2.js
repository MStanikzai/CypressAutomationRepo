/// <reference types = "Cypress" />

describe('My Second Test Suite', function() {

    it('My Second Test case', function()  {
    
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    
    
    cy.get('.products').as('productLocator') //as() Alias
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
    
    const textVeg = $el.find('h4.product-name').text()
    if(textVeg.includes('Cashews')){
        cy.wrap($el).contains('ADD TO CART').click()
     }

         })

         cy.get('.cart-icon > img').click()
         cy.contains('PROCEED TO CHECKOUT').click()
         cy.contains('Place Order').click()
    
     })
    
  })