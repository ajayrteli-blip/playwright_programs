import {test} from "@playwright/test"

test("keyboard actions",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    
    //using type()
    // await page.locator("#name").type("USERNAME")
    // await page.locator("#name").click()
    // await page.keyboard.type("USERNAME")
    
    //using inserttext()
    await page.locator("#name").click()
    await page.keyboard.insertText("USERNAME")

    //down and up
    await page.keyboard.down("Space")
    await page.keyboard.up("Space")

    await page.keyboard.down("Z")
    await page.keyboard.up("Z")

    //using .press()
    await page.keyboard.press("Tab")
    await page.keyboard.type("EMAIL@GMAIL.COM")
    
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Control+V")
    await page.pause()
})

test("keyboard scrolling",async({page})=>{
    await page.goto("https://www.bigbasket.com/?nc=logo")
    for(let i = 0;i<50;i++)
    await page.keyboard.press("ArrowDown")
    for(let i = 0;i<50;i++)
    await page.keyboard.press("ArrowUp")
    await page.pause()
})