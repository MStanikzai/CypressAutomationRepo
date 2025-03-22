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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('submitFormDetails', () => {
    cy.get('#country').type('Afghanistan')
            cy.get('.suggestions ul li a').click()
            cy.get('.suggestions ul li a').click()
            cy.wait(500)
            cy.get('.btn-success').click()
})



//IMPORTANT 
// npx cypress run --spec cypress\integration\examples\Test10Framework.js --headed --browser electron --env url="https://rahulshettyacademy.com"
// cypress record key: fddcb1b7-ecb1-4ad7-93af-3473f0d03668
// npx cypress run --record --key fddcb1b7-ecb1-4ad7-93af-3473f0d03668
// npx cypress run --record --key fddcb1b7-ecb1-4ad7-93af-3473f0d03668  --spec cypress/integration/examples/*.js --headed --browser electron   