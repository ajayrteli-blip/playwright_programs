import {test} from "@playwright/test"

test("stale element",async({page})=>{
    await page.goto("https://www.facebook.com/")
    let loc = await page.locator('//button[.="Log in"]')
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await loc.click()
})