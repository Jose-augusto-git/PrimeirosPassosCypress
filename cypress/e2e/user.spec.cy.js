import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe('template spec', () => {

  it.only('CT01 User info update - Sucess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.accessDashboard()
    dashboardPage.validationDashboard()

    menuPage.accessMyInfo()

    myInfoPage.myInfoName()
    myInfoPage.myInfoId()
    myInfoPage.myInfoDate()
    myInfoPage.myInfoButton()
    myInfoPage.myInfoTextSuccess()
    myInfoPage.myInfoSelect()
 

  })


  it('CT02 Login - Fail', () => {
    cy.visit('/auth/login')

    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();

    cy.get(selectorsList.wrongCredentialAlert);

  })
})