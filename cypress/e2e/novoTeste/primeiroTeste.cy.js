import elemento from "./elemento";

/// <reference types="cypress" />


describe('Meu primeiro projeto', () => {
  const user_1 = "jairotest@gmail.com"
  const name = "Jairo da silva"
  const psw = 123456
  const btnRegistrar = "button[class='style__ContainerButton-sc-1wsixal-0 ihdmxA button__child']"
  const btnCadastrar = "button[class='style__ContainerButton-sc-1wsixal-0 CMabB button__child']"
  const btnAcessar = "button[class='style__ContainerButton-sc-1wsixal-0 otUnI button__child']"
beforeEach(() => {
  cy.visit('/')
  });

  it('Fazendo login', () => {
    cy.get(btnRegistrar).should('contain', 'Registrar').click();

    cy.get(elemento.email).type(user_1, {force:true})

    cy.get(elemento.nome).type( name, {force: true})

    cy.get(elemento.password).type( psw, {force: true})

    cy.get(elemento.password).type( psw, {force: true})

    cy.get("#toggleAddBalance").click({force: true})

    cy.get(btnCadastrar).should('contain', 'Cadastrar').click({force: true})

    cy.get("#btnCloseModal").should('contain', 'Fechar').click({force: true})

    cy.get(elemento.email).type( user_1, {force:true})

    cy.get(elemento.password).type( psw, {force: true})

    cy.get(btnAcessar).should('contain', 'Acessar').click({force: true})

    
  });
});

