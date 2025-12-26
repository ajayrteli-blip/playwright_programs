//google map

import {test} from "@playwright/test"
test("navigate",async({page})=>{

    // await page.goto("https://www.zepto.com/")
    // // await page.locator('//span[@data-testid="searchBar"]').click()
    // await page.locator("//span[.='Search for']").click()
    // await page.locator("//input[@class='flex-1 outline-none']").fill("sahana")
    //await page.locator('//span[@data-testid="searchBar"]').fill("snacks")




    // // // await page.goto("https://www.google.com/")
    // // // await page.getByRole('combobox',{name:'Search'}).fill("google maps")
    // // // await page.keyboard.press("Enter")
    
    // // //maps
    // // await page.goto("https://www.google.com/maps")
    // // awaut

    // await page.goto("https://ksrtc.in/")
    // await page.getByText("Bus Ticket Booking").click()

    // await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    // await page.getByRole("button",{ name:"Register"} ).click()
    // await page.getByRole("button",{ name:"submit"} ).first().click()

    await page.goto("https://www.flipkart.com/search?q=phones&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
    let texts = await page.locator("//div[@class='hZ3P6w DeU9vF' and number(translate(.,'₹,',''))<32000]/ancestor::div[@class='ZFwe0M row']/descendant::div[@class='RG5Slk']|//div[@class='hZ3P6w DeU9vF' and number(translate(.,'₹,',''))<32000]").allTextContents()
    console.log(texts);

})