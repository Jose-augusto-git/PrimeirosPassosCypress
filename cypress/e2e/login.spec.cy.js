describe('template spec', () => {

  //Criando um unico seletor para utilizar em varias partes do codigo
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-title',
    wrongCredentialAlert: "[role='alert']"
  }


  it('CT01 Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get(selectorsList.usernameField).type('Admin');
    cy.get(selectorsList.passwordField).type('admin123');
    cy.get(selectorsList.loginButton).click();

    cy.location('pathname').should('equal','/web/index.php/dashboard/index')

    cy.get(selectorsList.sectionTitleTopBar).should('have.text','Dashboard');
  })


  it('CT02 Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get(selectorsList.usernameField).type('Admin');
    cy.get(selectorsList.passwordField).type('123');
    cy.get(selectorsList.loginButton).click();

    cy.get(selectorsList.wrongCredentialAlert);

  })
})