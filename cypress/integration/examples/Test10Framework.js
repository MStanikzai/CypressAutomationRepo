import HomePage from "../../support/pageObjects/HomePage"

describe('End to End ecommerce Test', function () {

    before(function() {
        //runs once before all tests in this describe block
        cy.fixture('example').then(function(data){
            this.data = data

           this.homePage = new HomePage()
        })
    })


    it('Submit Order', function () {
// Cypress.config('defaultCommandTimeout', 6000)

    this.homePage.goTo(Cypress.env('url') + "/loginpagePractise/#");
        const productName = this.data.productName

       cy.log(this.data.username)
       cy.log(this.data.password)
        const productPage = this.homePage.login(this.data.username, this.data.password)

        productPage.pageValidation()
      //  cy.pause()
        productPage.getCardCount().should('have.length', 4)
        productPage.selectProduct(productName)
        productPage.selectFirstProduct()
        const cartPage = productPage.goToCart()
        cartPage.sumOfProducts().then(function(sum)
    {
        expect(sum).to.be.lessThan(200000);
    })
        const confirmationPage = cartPage.checkoutItems()
        confirmationPage.submitFormDetails()
        confirmationPage.getAlertMessage().should('contain','Success')
    })

})
