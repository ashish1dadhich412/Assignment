import {Given,And,Then} from "cypress-cucumber-preprocessor/steps";

Given('open the url',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form');
})

And("Enter username and pasword",()=>{
    //first name
    cy.get("#firstName").type('Anik');
    //last name
    cy.get('#lastName').type('Baidya');

    //email
    cy.get('#email').type('anik@gmail.com');
    //number
    cy.get('#number').type('8927936036');
    //Masses
    cy.get('[rows="2"]').type('I am Cypress user')

})

Then('click on button',()=>{
    cy.get('[value="submit"]').click();
})