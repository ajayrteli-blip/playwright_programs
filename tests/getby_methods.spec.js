import {test} from "@playwright/test"

// test("getby methods",async({page})=>{
//     await page.goto("https://demo.nopcommerce.com/login")
//     // await page.getByLabel("Email:").fill("adfrd@gmail.com")  //should be partial match atlest
//     // await page.getByLabel("Email:",{exact: true}).fill("adfrd@gmail.com") //should be exact match
//     await page.getByLabel("Emai",{exact: false}).fill("adfrd@gmail.com")  //should be partial match atlest
    
//     // await page.getByPlaceholder("Search store").fill("SAMSUNG") //should be partial match atlest
//     await page.getByPlaceholder("Search s",{exact: false}).fill("SAMSUNG")  //should be partial match atlest

//     await page.getByText("Electronics").click() //should be partial match atlest
//     // await page.getByText("Search",{exact: true}).first().click() //if there are multiple matches use first()
    
//     // await page.getByAltText("nopCommerce demo store").click()//should be partial match atlest
//     // await page.getByAltText("nopCommerce demo store",{exact: true}).click()

//     await page.getByTitle("Show products in category Camera & photo").first().click()

//     await page.getByRole("link",{name:'Apple iCam'}).first().click()



    
// })

test("getby methods",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId("username").fill("NNN")
})