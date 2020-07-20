describe('Testing my Pizaa form', function () {
        it('Form all functions', function() {
    //visit our form and name test
    cy.visit("./pizza")
       cy.get('[data-cy="name"]')
       .type("bob")
       .should("have.value", "bob");
       
     //Test for instructions
     
       cy.get('[data-cy="instructions"]')
       .type("these are instructions")
       .should("have.value", "these are instructions")
    

        //Test for toppings
        cy.get('[data-cy="Pepperoni"]')
       .click()
       .should("be.checked");

        cy.get('[data-cy="Sausage"]')
        .click()
        .should("be.checked");

        cy.get('[data-cy="BellPepper"]')
        .click()
       .should("be.checked");

        cy.get('[data-cy="Mushrooms"]')
        .click()
        .should("be.checked");
    // test for submit button
        cy.get('[data-cy="submit"]')
        .should("not.disabled");
        
    })
    })