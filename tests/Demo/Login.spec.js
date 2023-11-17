import { test, expect } from '@playwright/test'
import {LoginPage} from '../../pages/login'

test('Login', async({page}) => {

 //it is the instance of the class login.js where we have put all the functions and variables that have to be called again and again.
const Login = new LoginPage(page)
await Login.gotoLoginPage()
await Login.login('tomsmith', 'SuperSecretPassword!')



// await page.goto('https://the-internet.herokuapp.com/login')
// await page.getByLabel('Username').fill('tomsmith');
// await page.getByLabel('Password').click();
// await page.getByLabel('Password').fill('SuperSecretPassword');
// await page.getByRole('button', { name: ' Login' }).click();
});
