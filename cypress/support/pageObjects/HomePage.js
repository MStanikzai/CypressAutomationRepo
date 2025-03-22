import ProductPage from "./ProductPage"

class HomePage{

    goTo(url) {
        cy.visit(url)
    }

    login(username, password) {

        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('[value="admin"]').should('be.checked')
        cy.get('[data-style="btn-info"]').select('Student').should('have.value', 'stud')
        cy.get('#terms').check().should('be.checked')
        cy.contains('Sign In').click()

        return new ProductPage()
    
    }

}

export default HomePage;