import {test,expect} from "@playwright/test"

test("new tabs",async({browser})=>{
    let contex = await browser.newContext()
    let page = await contex.newPage()
    // await page.goto("https://www.flipkart.com/")
    // let page2 = await contex.newPage()
    // await page2.goto("https://www.amazon.in/")

    //opening new tab via user actions
    await page.goto("https://www.flipkart.com/search?q=tv&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
    await page.click('(//div[@class="RG5Slk"])[1]')
    
    
    let page1 = await contex.newPage()
    await page1.goto("https://www.redbus.in/")
    await page1.click('//a[.="Colombia"]')
    await console.log(await page.url());
    // await page1.click('//button[.="Account"]')
    await page.pause()
})


test("handling multiple tabs1",async({browser})=>{
    let contex = await browser.newContext()
    let page = await contex.newPage()
    await page.goto("https://www.flipkart.com/search?q=tv&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
    let [page2]=await Promise.all([
    page.waitForEvent("popup"),
    page.click('(//div[@class="RG5Slk"])[1]')
    ])
    console.log(await page2.url());
    await expect.soft(page2.url()).not.toBe("https://www.flipkart.com/search?q=tv&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
    await expect.soft(page2.url()===page.url()).toBeFalsy()
    await page.pause()
})


test("handling multiple tabs2",async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://ksrtc.in/")
    let [page1] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('//a[.="Guest Users Terms"]')
    ])
    await page1.click('//a[.="Book a Bus"]')
    await page1.pause()
})


test("handling multiple windows",async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0")
    const [window2] = await Promise.all([
        page.waitForEvent("popup"),
        page.click('//button[.="view more"][1]')
    ])
    await window2.click('//button[.="Add to Cart"]')
    await expect(window2.url()).not.toBe("https://demoapps.qspiders.com/ui/browser?sublist=0")
    await window2.pause()
})


