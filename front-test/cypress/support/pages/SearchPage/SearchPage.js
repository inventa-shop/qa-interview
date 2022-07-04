export class SearchPage {
    getSeePriceLabel = () => cy.contains("Ver preço");
  
    verifyIfProductDoesNotExists = (product) =>
      cy.contains(product).should("have.length", 0);
  }
  