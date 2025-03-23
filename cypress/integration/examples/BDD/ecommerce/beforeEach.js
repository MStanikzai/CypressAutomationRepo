beforeEach(function() {
    //runs once before all tests in this describe block
    cy.fixture('example').then(function(data){
        this.data = data

    })
})