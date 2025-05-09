import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

// Gerador de dados randomicos
const Chance = require('chance')
const chance = new Chance()

describe('Orange HRM Tests', () => {

  it('CT01 User info update - Sucess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.accessDashboard()
    dashboardPage.validationDashboard()

    menuPage.accessMyInfo()

    myInfoPage.myInfoName(chance.first(),chance.last())
    myInfoPage.myInfoId()
    myInfoPage.myInfoDate()
    myInfoPage.myInfoButton()
    myInfoPage.myInfoTextSuccess()
    myInfoPage.myInfoSelect()
 

  })

})