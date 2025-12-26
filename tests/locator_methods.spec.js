// import {test} from "@playwright/test"

// test("locators",async({page})=>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     //username text field
//     await page.locator("input#username").fill("student")
//     //password text field
//     await page.locator("input#password").fill("Password123")
//     //click on submit button
//     await page.locator("[class='btn']").click() //anyone should be double quotes
//     //log out
//     await page.locator('//a[@class="wp-block-button__link has-text-color has-background has-very-dark-gray-background-color"]').click()

//     await page.waitForTimeout(1000)
// })

// import {test} from "@playwright/test"

// test("test case 0",async({page})=>{
//     await page.goto("https://www.naukri.com/")
//     await page.locator("//a[.='Register']").click()
//     await page.locator("#name").click()
//     await page.locator("#name").fill("AJAY R")
//     await page.locator("#email").click()
//     await page.locator("#email").fill("ajayrtelirrrr@gmail.com")
//     await page.locator("//input[@type='password']").click()
//     await page.locator("//input[@type='password']").fill("asecrftg@$345")
//     await page.locator("#mobile").click()
//     await page.locator("#mobile").fill("9591082969")
//     await page.locator(".chk-label").click()
//     // await page.locator(`//p[.="I am a student/ Haven't worked after graduation "]`).click()
//     await page.locator('//p[contains(.,"I am a student")]').click()
//     await page.locator("//button[.='Register now']").click()
// })

// import {test} from "@playwright/test"

// test("window",async({page})=>{

//     await page.goto("https://www.youtube.com/")
//     await page.setViewportSize({width:500,height:500})
//     console.log(await page.viewportSize());
//     console.log(await page.title())
//     console.log(await page.url())
//     let time = new Date().getTime()
//     console.log(time);
// })
