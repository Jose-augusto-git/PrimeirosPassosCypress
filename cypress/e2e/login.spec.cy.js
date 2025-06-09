import userData from '../fixtures/users/user-data.json'
import DashboardPage from '../pages/dashboardPage.js'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage();

describe('Login Orange HRM Tests', () => {

  it('CT01 Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()

  })
 
  
  it('CT02 Login - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
   
    dashboardPage.accessDashboard()
    dashboardPage.validationDashboard()

  })
})