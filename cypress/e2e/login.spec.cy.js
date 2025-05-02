import userData from '../fixtures/users/user-data.json'

describe('template spec', () => {

  //Criando um unico seletor para utilizar em varias partes do codigo
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-title',
    dashbordGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: "[role='alert']"
  }

  it('CT01 Login - Sucess', () => {
    cy.visit('/auth/login')

    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();

    cy.location('pathname').should('equal','/web/index.php/dashboard/index')

    cy.get(selectorsList.dashbordGrid)
  })


  it('CT02 Login - Fail', () => {
    cy.visit('/auth/login')

    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();

    cy.get(selectorsList.wrongCredentialAlert);

  })
})