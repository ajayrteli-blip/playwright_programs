//eplicit waits

import {test} from "@playwright/test"
test("all waits",async({page})=>{
    await page.goto("https://www.myntra.com/")
    await page.locator(".desktop-searchBar").type("shoes")
    await page.click('//li[@class="desktop-suggestion null" and @data-index="1" ]')
})


test("auto suggestion",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.locator(".Pke_EE").fill("watches")
    // await page.waitForFunction(()=>{let ele = document.querySelectorAll('[class="YGcVZO _2VHNef"]'); return ele.length>5})
    await page.waitForTimeout(2000)
    const value = await page.locator('//div[@class="YGcVZO _2VHNef"]').allTextContents()
    console.log(value);

})