import userData from '../fixtures/users/user-data.json'

describe('template spec', () => {

  //Criando um unico seletor para utilizar em varias partes do codigo
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-title',
    dashbordGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: '.oxd-input--active',
    gereircDateField: "[placeholder='yyyy-dd-mm']",
    dateClosedButton: '.--close',
    submitButton: "[type='submit']"
  }

  it.only('CT01 User info update - Sucess', () => {
    cy.visit('/auth/login')

    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();

    cy.location('pathname').should('equal','/web/index.php/dashboard/index')

    cy.get(selectorsList.dashbordGrid)
    cy.get(selectorsList.myInfoButton).click();
    cy.get(selectorsList.firstNameField).clear().type('firstNameField')
    cy.get(selectorsList.lastNameField).clear().type('lastNameField')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployId')
    cy.get(selectorsList.genericField).eq(4).clear().type('Other Id')
    cy.get(selectorsList.genericField).eq(5).clear().type('Drivers License Number')
    cy.get(selectorsList.gereircDateField).eq(1).clear().type('2025-05-05')
    cy.get(selectorsList.dateClosedButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()


    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close').click();



  })


  it('CT02 Login - Fail', () => {
    cy.visit('/auth/login')

    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();

    cy.get(selectorsList.wrongCredentialAlert);

  })
})