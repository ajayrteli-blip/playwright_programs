import {test,expect} from "@playwright/test"

test("authentication",async({browser})=>{
    let context = await browser.newContext({httpCredentials:{username:"admin", password:"admin"}})
    let page = await context.newPage()
    
    await page.goto("https://demoapps.qspiders.com/ui/auth?sublist=0")
    const [page2] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#AuthLink")
    ])
    await expect.soft(await page2.locator("//p").textContent()).toBe("congratulations with valid credentials")
    await page.pause()

})

test("authentication 01",async({browser})=>{
    let context = await browser.newContext({httpCredentials:{username:"admin", password:"admin"}})
    let page = await context.newPage()
    let page2 = page.waitForEvent("popup")
    await page.goto("https://demoapps.qspiders.com/ui/auth?sublist=0")
    await page.click("#AuthLink")
    let temp = await page2
    await expect.soft(await temp.locator("//p").textContent()).toBe("congratulations with valid credentials")
    await page.pause()

})