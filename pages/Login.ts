import { BaseClass } from "../utils/BaseClass";


export class LoginPage extends BaseClass
{
      // Test objects/Elements
      static username_textbox = "//input[@name='txtUserName']"
      static password_textbox = "//input[@name='txtPassword']"
      static login_btn = "//input[@type='Submit']"

      // Methods

      static async loginPage(username: string, password: string)
      {
        await this.page.locator(this.username_textbox).fill(username);
        await this.page.locator(this.password_textbox).fill(password);
        await this.page.locator(this.login_btn).click();
        console.log("Login Page successfull")
      }

}