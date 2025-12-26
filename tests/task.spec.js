import {test,expect} from "@playwright/test"
import path from "path"
import fs from "fs"


test("task 1",async({page})=>{
    await page.goto("https://www.bigbasket.com/")
    await page.click('(//span[text()="Shop by"])[2]')
    const temp_loc = '//div[@role="menu"])[2]/nav[@class="jsx-1259984711 flex text-medium"]/ul[@class="jsx-1259984711 w-56 px-2.5 bg-darkOnyx-800 text-silverSurfer-100 rounded-l-xs max-h-120 overflow-y-auto scroll-smooth"]/li/a'
    const a = await page.locator(`${temp_loc}`).allTextContents()
    console.log(a)
    // for(let value of a){
    //     await page.locator(`(//div[@role="menu"])[2]/nav[@class="jsx-1259984711 flex text-medium"]/ul[@class="jsx-1259984711 w-56 px-2.5 bg-darkOnyx-800 text-silverSurfer-100 rounded-l-xs max-h-120 overflow-y-auto scroll-smooth"]/li/a[text()="${value}"]`).hover()
    //     let b = await page.locator('(//div[@role="menu"])[2]/nav[@class="jsx-1259984711 flex text-medium"]/ul[@class="jsx-1259984711 w-56 px-2.5 bg-darkOnyx-800 text-silverSurfer-100 rounded-l-xs max-h-120 overflow-y-auto scroll-smooth"]/li/a/../../following-sibling::ul/li').allTextContents()
    //     for(let val of b){
    //         await page.locator(`(//div[@role="menu"])[2]/nav[@class="jsx-1259984711 flex text-medium"]/ul[@class="jsx-1259984711 w-56 px-2.5 bg-darkOnyx-800 text-silverSurfer-100 rounded-l-xs max-h-120 overflow-y-auto scroll-smooth"]/li/a/../../following-sibling::ul/li/a[text()="${val}"]`).hover()
    //         await console.log(await page.locator(`(//div[@role="menu"])[2]/nav[@class="jsx-1259984711 flex text-medium"]/ul[@class="jsx-1259984711 w-56 px-2.5 bg-darkOnyx-800 text-silverSurfer-100 rounded-l-xs max-h-120 overflow-y-auto scroll-smooth"]/li/a/../../following-sibling::ul/li`).allInnerTexts());
    //     }
    // }
})



test("task 2", async({browser})=>{
    let context  = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open")
    console.log(page.title());
    let iframe = await page.locator('//iframe[@id="iframeResult"]').contentFrame()
    let temp=page.waitForEvent("popup")
    await iframe.getByRole("button",{name:"Try it"}).click() 
    let page2 = await temp
    console.log(await page.title());
    console.log(await page2.title());
    await page2.close()
    await page.goBack()
})


test("task 3",async({page})=>{
    await page.goto("https://www.instagram.com/accounts/login/?hl=en")
    const textfield = await page.getByRole("textbox",{name:"username"})
    console.log(await textfield.isEditable());
    console.log(await textfield.isVisible());
    console.log(await textfield.isEnabled());
    const button = await page.locator('//button[@type="submit"]')
    console.log(await button.isEnabled());
    console.log(await button.isVisible());
    // console.log(await button.isEditable());   //can not do for button
    // console.log(await button.isChecked());    //can not do for button
    await expect(await textfield).toHaveCSS("font-family",'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif')
    await page.pause()
})


test("task 4",async({page})=>{
    await page.goto("https://testpages.eviltester.com/styled/alerts/alert-test.html")
    await page.on("dialog",async(dialog)=>{ 
        if(dialog.type()=="prompt"){await dialog.accept("ABCDEFGHIJK")}
            else{ await dialog.dismiss()}})
    await page.getByRole("button",{name:"Show alert box"}).click()
    await page.getByRole("button",{name:"Show confirm box"}).click()
    await page.getByRole("button",{name:"Show prompt box"}).click()

    await page.pause()
})

test("task 5",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/")
    await page.locator('//a[text()="File Download"]').click({force:true})
    let [downlaod] = await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("link",{name:"text.txt"}).click()
    ])
    console.log(await downlaod.path());
    await downlaod.saveAs(path.join(__dirname,"../download_file_tester",downlaod.suggestedFilename()))
    await page.goBack()
    await page.locator('//a[text()="File Upload"]').click({force:true})
    await page.locator('//input[@id="file-upload"]').setInputFiles(path.join(__dirname,"../download_file_tester/first.txt"))
    await page.locator('//input[@id="file-submit"]').click()
    let fullpath = await path.join(__dirname,"../download_file_tester/first.txt")
    if(fs.existsSync(fullpath)){
        console.log("EXISTS");
        fs.writeFileSync(fullpath,"HI ENTERED")      //to value into file
        console.log(fs.readFileSync(fullpath,"utf-8"));    //to read from file //utf-8 is used for tranforming from bite code to hunam readable format
        }


    await page.pause()
})

test("task 6",async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.amazon.in/")
    await page.fill('//input[@id="twotabsearchtextbox"]',"flowers")
    await page.click('//input[@id="nav-search-submit-button"]')
    await page.locator(`(//span[.="FlowerAura Fresh Live Flower Bouquet of 12 Silky Pink Roses Flowers For Birthday Gift, Anniversary Gift, Wedding Gift, Mother's Day Gift, Love & Romance Gift, Father's Day Gift (Same Day Delivery)"])[1]`).scrollIntoViewIfNeeded()
    await page.click('(//button[@name="submit.addToCart"])[1]')
    await page.fill('//input[@id="twotabsearchtextbox"]',"towel")
    await page.click('//input[@id="nav-search-submit-button"]')
    await page.click('(//button[@name="submit.addToCart"])[1]')
    await page.click('//span[@class="nav-cart-icon nav-sprite"]')
    await page.click('//input[@name="proceedToRetailCheckout"]')
    
    await page.pause()



    let context1 = await browser.newContext()
    let page1 = await context1.newPage()
    await page1.goto("https://www.flipkart.com/")

})
