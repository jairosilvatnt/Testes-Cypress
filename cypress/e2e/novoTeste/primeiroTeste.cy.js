/// <reference types="cypress" />


describe('Meu primeiro projeto', () => {
beforeEach(() => {
  cy.visit('/')
  });

  it('Fazendo login', () => {
    cy.get("button[class='style__ContainerButton-sc-1wsixal-0 ihdmxA button__child']").should('contain', 'Registrar').click();

    cy.get("form[class='styles__ContainerFormRegister-sc-7fhc7g-0 keVbpY'] input[placeholder='Informe seu e-mail']").type('jairotest@gmail.com', {force:true})

    cy.get("input[placeholder='Informe seu Nome']").type('jairo silva', {force: true})

    cy.get("form[class='styles__ContainerFormRegister-sc-7fhc7g-0 keVbpY'] input[placeholder='Informe sua senha']").type('123456', {force: true})

    cy.get("input[placeholder='Informe a confirmação da senha']").type('123456', {force: true})

    cy.get("#toggleAddBalance").click({force: true})

    cy.get("button[class='style__ContainerButton-sc-1wsixal-0 CMabB button__child']").should('contain', 'Cadastrar').click({force: true})

    cy.get("#btnCloseModal").should('contain', 'Fechar').click({force: true})

    cy.get("form[class='style__ContainerFormLogin-sc-1wbjw6k-0 eTrcYr'] input[placeholder='Informe seu e-mail']").type('jairotest@gmail.com', {force:true})

    cy.get("form[class='style__ContainerFormLogin-sc-1wbjw6k-0 eTrcYr'] input[placeholder='Informe sua senha']").type('123456', {force: true})

    cy.get("button[class='style__ContainerButton-sc-1wsixal-0 otUnI button__child']").should('contain', 'Acessar').click({force: true})

    
  });

  // it('Realizar transferencia', () => {
    
    
  // });
});

