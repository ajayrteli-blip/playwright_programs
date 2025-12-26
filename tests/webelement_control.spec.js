import {test} from "@playwright/test"

test("shoping",async({page})=>{
    // await page.goto("https://www.facebook.com/")
    // await page.getByRole('textbox',{name:"email"}).fill("AJAY")
    // await page.locator("#email").fill("AJAY@gmail.com")

    // await page.locator("#pass").type("Password@123")

    // console.log(await page.locator('//button[@name="login"]').innerText()); 
    // console.log(await page.locator('//button[@name="login"]').textContent()); 

    // console.log(await page.locator("#reg_pages_msg").innerText()); 

    // console.log(await page.locator("#pass").inputValue())   //retruns test from input field

    // console.log(await page.locator("//a").allTextContents());   //returns text from multiple matching web elements
    // console.log(await page.locator("//a").allInnerTexts());

    // console.log(await page.locator('//button[@name="login"]').getAttribute("name"));    //returs attributes corresponding value

    // console.log(await page.locator("//a").all());  //returns array of element handles
    // console.log(await page.locator("//a").nth(1)); //can perform any action on this
    // console.log(await page.locator('//button[@name="login"]').all());   //if we use unique address with .all()


    // console.log(await page.locator('//button[@name=""]').all());    //not matching any elements

    // await page.pause(3000)

    // await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    // await page.locator("#name").fill('hi')          
    // console.log(await page.locator("#name").isVisible());   //needs explicit waiting
    // await page.locator("#name").waitFor()
    // console.log(await page.locator("#name").isVisible());   //needs explicit waiting

    // await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    // await page.locator("#name").waitFor()
    // console.log(await page.locator("#name").isEnabled());
    // console.log(await page.locator("#name").isDisabled());
    // console.log(await page.locator("(//button)[2]").isEditable());      //should not use for buttons or radio web elements
    // console.log(await page.locator("#name").isEditable());

    // await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    // await page.locator("#domain_a").click()
    // console.log(await page.locator("#domain_a").isChecked());
    // await page.locator("#domain_a").click()
    // console.log(await page.locator("#domain_a").isChecked());

    await page.goto("https://www.amazon.in/")
    await page.getByText("Today's Deals",{exact:"true"}).waitFor({state:"visible"},{timeout:3000})

//     await page.getByText("Today's Deals").waitFor({state:"hidden"})    
//     await page.getByText("Today's Deals").waitFor({timeout:3000})
})
