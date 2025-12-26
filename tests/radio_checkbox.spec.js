import {test,expect} from "@playwright/test"

test("radio button",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    
    // await page.locator('//input[@value="Upi"]').check()
    // await page.locator('//input[@value="Upi"]').click()
    //asertion
    await expect.soft(await page.locator('//input[@value="Upi"]')).toBeChecked()
    console.log(await page.locator('//input[@value="Upi"]').isChecked());
    await expect.soft(await page.locator('//input[@value="Upi"]').isChecked()).toBeFalsy()
    await expect.soft(await page.locator('//input[@value="Upi"]').isChecked()).toBeTruthy()
    await page.pause()
})

test("checkbox",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.click('//input[@id="domain_b"]')
    await page.waitForTimeout(2500)
    await page.click('//input[@id="domain_b"]')
    await page.pause()

    await expect.soft(await page.locator('//input[@id="domain_b"]')).toBeChecked()
    await expect.soft((await page.locator('//input[@id="domain_b"]')).isChecked()).toBeFalsy()
    await expect.soft((await page.locator('//input[@id="domain_b"]')).isChecked()).toBeTruthy()

})