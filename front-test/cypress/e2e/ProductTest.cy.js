/// <reference types="cypress" />

import { HomePage } from "../support/pages/HomePage/HomePage";
import { SearchPage } from "../support/pages/SearchPage/SearchPage";

describe("Search for test products", () => {

  before(() => {
    cy.vist("https://inventa.shop//promocoes-1");
  });
  after(()=>{
    cy.get(".price").should('exist')

  })
  
  it("Will search for shampoo transparente product and we expect to get just one product with this name", () => {
    cy.get("#modal-closer").first().click();
    cy.get(".search-bar-button").should("be.visible").click();
    cy.get("[placeholder='digitar produto']")
      .eq(2)
      .type("Shampoo transparente{enter}");
    cy.contains("Ver preço");
    const size = cy.contains("Shampoo transparente").should("have.length", 1);
  
    cy.log(size)
    cy.visit("https://inventa.shop/collections/novidades")
    cy.wait(5000)
    cy.get(".spf-product-card__title").foreach(product => {
      expect(product).to.not.have.text('undefined')
    })
    
  });

  it("", () => {
    
    page = new HomePage();
    page.getSearchBarButton().click();
    page.getSearchBarInput().type("Shampoo transparente{enter}");

    cy.url().should('contain', '?q=Shampoo transparente')
    page = new SearchPage();
    page.getSeePriceLabel()
    page.verifyIfProductDoesNotExists("Shampoo claro e transparente");
    
  });
});
