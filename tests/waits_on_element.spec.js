//auto wait
// import {test} from "@playwright/test"
// test.use({actionTimeout:5000}) //this is used to set default time out for all test blocks in this spec files

// test("auto waits",async({page})=>{
//     page.setDefaultTimeout(3000)    //this is used to set default time out for auto-wait
//     await page.goto("https://en.wikipedia.org/wiki/Main_Page")
//     await page.locator("#skin-client-pref-skin-theme-value-night").click()   //click has auto wait
//     await page.getByPlaceholder("Search Wikipedia").first().fill("time zones")
//     await page.getByRole("button",{name:"Search"}).click()
//     await page.locator('//a[@class="mw-file-description" and @href="/wiki/File:World_Time_Zones_Map.sv"]').click({timeout:5000}) //thisis used to set deault time out for auto wait for this method
// })

//hardcode wait
// import {test} from "@playwright/test"
// test("hardcode wait",async({page})=>{
//     await page.goto("https://en.wikipedia.org/wiki/Main_Page")
//     await page.locator("#skin-client-pref-skin-theme-value-night").click()
//     await page.waitForTimeout(3000) //waits regardless of element is loaded or action is performed
//     await page.getByPlaceholder("Search Wikipedia").first().fill("time zones")
//     await page.waitForTimeout(3000) //waits regardless of element is loaded or action is performed
//     await page.getByRole("button",{name:"Search"}).click()

// })

// test("parallel execution",async({page})=>{
//     await page.goto("https://www.flipkart.com/")
//     await page.locator('//input[@title="Search for Products, Brands and More"]').click()
//     await page.locator('//input[@title="Search for Products, Brands and More"]').fill("pants")
//     await page.waitForTimeout(5000)                     //flaky test can be avoided by harcoding waits
//     const m = await page.locator('//div[@class="_3idirA"]').allTextContents()
//     console.log(m);

//     const n = await page.locator('//div[@class="YGcVZO _2VHNef"]').allTextContents()
//     console.log(n);
// })


//explicit waits
import {test} from "@playwright/test"
test("wait for",async({page})=>{
    // await page.goto("https://www.flipkart.com/")
    // await page.locator('//input[@title="Search for Products, Brands and More"]').click()
    // await page.locator('//input[@title="Search for Products, Brands and More"]').fill("pants")
    // await page.locator('//div[@class="YGcVZO _2VHNef"]' ,{hasText:"pants for men formal"}).waitFor({timeout:1000}) //wait for text
    // const n = await page.locator('//div[@class="YGcVZO _2VHNef"]').allTextContents()
    // console.log(n);


    // await page.goto("https://www.flipkart.com/")
    // await page.locator('//input[@title="Search for Products, Brands and More"]').waitFor({timeout:3000})  //wait for timeout
    // await page.locator('//input[@title="Search for Products, Brands and More"]').click()
    // await page.locator('//input[@title="Search for Products, Brands and More"]').fill("pants")

    // await page.goto("https://www.flipkart.com/")
    // await page.locator('//input[@title="Search for Products, Brands and More"]').waitFor({state:"hidden"})  //wait for state of element
    // // await page.locator('//input[@title="Search for Products, Brands and More"]').waitFor({timeout:2000,state:"hidden"})  
    // await page.locator('//input[@title="Search for Products, Brands and More"]').click()
    // await page.locator('//input[@title="Search for Products, Brands and More"]').fill("pants")

    // await page.goto("https://www.flipkart.com/")
    // await page.waitForSelector('//input[@title="Search for Products, Brands and More"]') //wait until element matching selector appers
    // // await page.waitForSelector('//input[@title="Search for Products, Brands and More"]',{state:"visible"})
    // // await page.locator('//input[@title="Search for Products, Brands and More"]').click()
    // await page.locator('//input[@title="Search for Products, Brands and More"]').fill("pants")
})

