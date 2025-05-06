import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();

describe('template spec', () => {

  //Criando um unico seletor para utilizar em varias partes do codigo
  const selectorsList = {

   
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: '.oxd-input--active',
    gereircDateField: "[placeholder='yyyy-dd-mm']",
    dateClosedButton: '.--close',
    submitButton: "[type='submit']",
    selectButton: '.oxd-select-text--after',
    selectNationality: ':nth-child(27)',
    selectMaritalStatus: '.oxd-select-dropdown > :nth-child(4)',
    selectBloodType: '.oxd-select-dropdown > :nth-child(8)'
   

  }

  it.only('CT01 User info update - Sucess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.accessDashboard()
    dashboardPage.validationDashboard()

    menuPage.accessMyInfo();



    // cy.get(selectorsList.myInfoButton).click();
    // cy.get(selectorsList.firstNameField).clear().type('firstNameField')
    // cy.get(selectorsList.lastNameField).clear().type('lastNameField')
    // cy.get(selectorsList.genericField).eq(3).clear().type('EmployId')
    // cy.get(selectorsList.genericField).eq(4).clear().type('Other Id')
    // cy.get(selectorsList.genericField).eq(5).clear().type('Drivers License Number')
    // cy.get(selectorsList.gereircDateField).eq(1).clear().type('2025-05-05')
    // cy.get(selectorsList.dateClosedButton).click()
    // cy.get(selectorsList.submitButton).eq(0).click()


    // cy.get('body').should('contain', 'Successfully Updated')
    // cy.get('.oxd-toast-close').click();

    // cy.get(selectorsList.selectButton).eq(0).click()
    // cy.get(selectorsList.selectNationality).click()

    // cy.get(selectorsList.selectButton).eq(1).click()
    // cy.get(selectorsList.selectMaritalStatus).click()

    // cy.get(selectorsList.selectButton).eq(2).click()
    // cy.get(selectorsList.selectBloodType).click()


  })


  it('CT02 Login - Fail', () => {
    cy.visit('/auth/login')

    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();

    cy.get(selectorsList.wrongCredentialAlert);

  })
})