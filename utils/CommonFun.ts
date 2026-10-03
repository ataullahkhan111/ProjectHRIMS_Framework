import { BaseClass } from "./BaseClass";

export class CommonFun extends BaseClass
{
    static async openApplication(url:string)
    {
        await this.page.goto(url)
        await this.page.waitForTimeout(3000)
        console.log("open application")
    }

    static async waitsmt()
    {
        await this.page.waitForTimeout(2000)
        console.log("waiting period")
    }

}