import {Given, When, Then} from "badeball/cypress-cucumber-preprocessor"
import HomePage from "../../../../support/pageObjects/HomePage"
const homePage = new HomePage()


Given('I am on Ecommerce Page', ()=> {   
    this.homePage.goTo(Cypress.env('url') + "/loginpagePractise/#");

})

When('I login to the application', () => {

    const productPage = this.homePage.login(this.data.username, this.data.password)

    productPage.pageValidation()
    productPage.getCardCount().should('have.length', 4)

})