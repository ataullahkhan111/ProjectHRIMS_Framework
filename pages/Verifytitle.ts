import { expect } from "@playwright/test";
import { BaseClass } from "../utils/BaseClass";


export class Verifytitle extends BaseClass
{
static async VerifyTitle(Title: string)
{
    await expect(this.page).toHaveTitle(Title);
    console.log("Title verified." + Title)
    
}

}




