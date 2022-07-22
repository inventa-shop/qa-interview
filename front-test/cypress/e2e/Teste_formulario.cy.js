/// <reference types="cypress" />

import { HomePage } from "../support/pages/HomePage/HomePage";
import { SearchPage } from "../support/pages/SearchPage/SearchPage";

describe("Search for test products", () => {

  it("Will search for shampoo transparente product and we expect to get just one product with this name", () => {
    cy.visit("https://qa-interview-inventa.netlify.app/");
    cy.get(".name-input").click().type("Produto 1")
    cy.get("[placeholder='Digite o valor do produto']").type("5")
    cy.get("[type='checkbox']").click()
    cy.get('#categorias').select('Unha')
    cy.get('button').click()
    cy.get('#toggle').should('have.text','Produto cadastrado com sucesso!')
  });
});
