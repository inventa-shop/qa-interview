/// <reference types="cypress" />


describe('', () => {

  before(() => {
    cy.visit('http://localhost:3000/')
  });

  it('', () => {
    cy.get('.name-input').type('Escova');
    cy.get("[placeholder='Digite o valor do produto']");

    cy.get('#terms').check();

    cy.get('#categorias').select('Cabelo');

    cy.get('button').contains('Cadastrar Produto').click();

    cy.get('.feedback').contains('Produto cadastrado com sucesso!');
  });
});