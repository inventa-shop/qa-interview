
describe("Test formulario", () => {

    it("Cadastrar formulario", () => {
        cy.visit('http://localhost:3000/');
        cy.get('.App').click();
        cy.get('.name-input').click();
        cy.get('.name-input').type('test');
        cy.get('div:nth-child(7) > input').click();
        cy.get('div:nth-child(7) > input').clear().type('15');
        cy.get('#terms').click();
        cy.get('#categorias').select("Doce");
        /*cy.get('#categorias').click();*/
        cy.get('button').click();
    })
})