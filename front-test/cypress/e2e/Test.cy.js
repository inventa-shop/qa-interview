describe('validar formulario', () => {

    before(() => {
        cy.visit('/')
        cy.title().should('eq', 'React App')
        cy.contains('Informe o nome do produto')
        cy.contains('Informe o valor do produto')
        cy.contains('Produto segue os termos de uso')
        cy.contains('Escolha uma categoria')
    });
    
    it('preencher campos e submeter formulario', () => {
        cy.get(".name-input").should("be.visible").type('Play station5')
        cy.get('[type="number"]').should("be.visible").clear().type('15.00')
        cy.get("#terms").should("be.visible").check()
        cy.get("#categorias").select("Cabelo")
        cy.contains("Cadastrar Produto").click()
       cy.get('#toggle').should('have.text', 'Produto cadastrado com sucesso!')
    });
});