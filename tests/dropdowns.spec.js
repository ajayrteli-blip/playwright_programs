import {test} from "@playwright/test"

test("standard dropdowns",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")

//     await page.locator("#select3").selectOption({value:"China"})
//     await page.waitForTimeout(2000)

//     await page.locator("#select3").selectOption({label:"India"})
//     await page.waitForTimeout(2000)

    await page.locator("#select3").selectOption({index:3})
    await page.waitForTimeout(2000)

//     await page.locator("#select3").selectOption("India")

    await page.pause()
})

// test("muli select dropdown",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
//     // await page.locator("#select-multiple-native").selectOption([{value:"Mens Casual Premium Slim Fit T-Shirts "},{value:"Rain Jacket Women Windbreaker Striped Climbing Raincoats"}])
//     // await page.click('//button[text()="Add"]')
//     await page.locator("#select-multiple-native").selectOption([{index:5},{index:2}])
//     await page.click('//button[text()="Add"]')
//     await page.pause()
// })

// test("custom dropdown",async({page})=>{
//     await page.goto("https://www.amazon.in/s?k=car&crid=6VKKEKEDLD7T&sprefix=ca%2Caps%2C282&ref=nb_sb_noss_2")
    // await page.locator('//select[@id="s-result-sort-select"]').click({force:true})

    // //method 1
    // await page.locator('//a[@class="a-dropdown-link"]').first().waitFor()
    // const options = await page.locator('//a[@class="a-dropdown-link"]').all(); 
    // for(let value of options){                                                                          
    //     let text = await value.textContent()
    //     if(text.includes("Price: High to Low")){
    //         await value.click()
    //     }
    // }

    //method 2
    // await page.locator('//a[.="Price: High to Low"]').click()

    //method 3
    // await page.locator('//select[@id="s-result-sort-select"]').click({force:true})
    // let value = "Price: High to Low"
    // await page.locator(`//a[@class="a-dropdown-link" and text()="${value}"]`).click()

    //method 4
//     await page.locator('//select[@id="s-result-sort-select"]').click({force:true})
//     await page.locator('//a[@class="a-dropdown-link"]').first().click()
//     await page.pause()
// })


// test("auto suggest edit box",async({page})=>{
//     await page.goto("https://www.amazon.in/ref=nav_logo")
//     await page.fill('//input[@id="twotabsearchtextbox"]',"jackets")
//     await page.waitForSelector('(//div[@class="s-suggestion s-suggestion-ellipsis-direction"])[1]')  //not auto wait , explicit waiting line
   
    // way 1
    // const all_suggestions = await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').all()
    // for(let value of all_suggestions){
    //     let text = await value.allTextContents()
    //     if(text.includes("jackets for boys")){
    //        await value.click()
    //        break
    //     }
    // }

    //way 2
//     await page.keyboard.press("ArrowDown")
//     await page.keyboard.press("ArrowDown")
//     await page.keyboard.press("Enter")
//     await page.pause()
// })