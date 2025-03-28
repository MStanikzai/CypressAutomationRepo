/// <reference types = "Cypress" />

describe('My First Test Suite', function() {

it('My First Test case', function()  {

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.product:visible').should('have.length', 4)

//as() Alias
cy.get('.products').as('productLocator') 

//Parent Child chaining
cy.get('@productLocator').find('.product').should('have.length', 4)
cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function() {
    console.log('sf')
})



cy.get('@productLocator').find('.product').each(($el, index, $list) => {

const textVeg = $el.find('h4.product-name').text()
if(textVeg.includes('Cashews')){
    cy.wrap($el).contains('ADD TO CART').click()
}
})

//assert if logo text is correct displayed
cy.get('.brand').should('have.text', 'GREENKART')

//this is to print in logs
cy.get('.brand').then(function(logoelement) {
cy.log(logoelement.text())

})

//inccorect --> cy.log(logo.text())



    })


})