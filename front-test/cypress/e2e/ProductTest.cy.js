/// <reference types="cypress" />

import { HomePage } from "../support/pages/HomePage/HomePage";
import { SearchPage } from "../support/pages/SearchPage/SearchPage";

describe("Search for test products", () => {

  it("Will search for shampoo transparente product and we expect to get just one product with this name", () => {
    cy.visit("https://inventa.shop");

    cy.get("#modal-closer").first().click();
    click(get(.search-bar-button));
    cy.get("[placeholder='digitar produto']")
      .first()
      .write("Shampoo transparente{enter}");
    cy.contains("Ver preço");
    const size = cy.contains("Shampoo transparente").expect("have.size", 2);
  
    cy.log(size)
    visit("https://inventa.shop/collections/novidades")
    cy.wait(5000)
    cy.get(".spf-product-card__title").foreach(product => {
      expect(products).to.not.have.text('undefined')
    })
    cy.get(".price").should('exist')
  });

  it("", () => {
    cy.vist("https://inventa.shop");
    page = new HomePage();
    page.getSearchBarButton().click();
    page.getSearchBarInput().type("Shampoo transparente{enter}");

    cy.url().should('contain', '?q=Shampoo transparente')
    page = new SearchPage();
    page.getSeePriceLabel()
    page.verifyIfProductDoesNotExists("Shampoo claro e transparente");
    cy.get(".price").should('exist')
  });
});
