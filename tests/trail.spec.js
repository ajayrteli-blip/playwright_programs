import {test} from "@playwright/test"

test("trail run",async({page,browser,browserName})=>{
    await page.goto("https://www.google.com/maps")
    await console.log(browserName);
    let con = await browser.newContext()
    let pg = await con.newPage()
    await pg.goto("https://www.google.com/maps")
    let con1 = await browser.newContext()
    let pg1 = await con.newPage()
    await pg1.goto("https://www.google.com/maps")

 })
