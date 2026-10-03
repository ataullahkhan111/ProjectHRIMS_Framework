import { test } from '@playwright/test'
import { BaseClass } from '../utils/BaseClass'
import { CommonFun } from '../utils/CommonFun'
import { LoginPage } from '../pages/Login'
import { Verifytitle } from '../pages/Verifytitle'

test('Performing Operations', async ({ page }) => {
    BaseClass.page = page
    await CommonFun.openApplication('https://sureshitacademy.in/hrms/login.php')
    await CommonFun.waitsmt()
    await LoginPage.loginPage('sureshit', 'sureshit')
    await CommonFun.waitsmt()
    await Verifytitle.VerifyTitle('SureshIT')
})