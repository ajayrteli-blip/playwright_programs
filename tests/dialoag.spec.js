import {test,expect} from "@playwright/test"

// test("dialog handling",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.getByRole("button",{name:"Confirmation Alert"}).click()
//     await expect(await page.locator("#demo")).toContainText("Cancelled")
//     await page.pause()
// })


test("dialog handling 01",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // page.on("dialog",(dialog)=>{dialog.accept("BYEBYE")})

    // await page.getByRole("button",{name:"Confirmation Alert"}).click()
    // await expect.soft(await page.locator("#demo")).toContainText("OK")
    // //for promt
    // await page.getByRole("button",{name:"Prompt Alert"}).click()
    // await expect.soft(await page.locator("#demo")).toContainText("BYE")
    // // for simple promt
    // await page.getByRole("button",{name:"Simple Alert"}).click()

    //perform specific action for diffrent type of dialog

    page.on("dialog",async(dialog)=>{
        if(dialog.type()=="alert"){await dialog.dismiss();console.log(await dialog.message())}  
        else if(dialog.type()=="prompt"){await dialog.accept("GO TO MOON");
            console.log(await dialog.message()); 
            if(dialog.defaultValue()=="Harry Potter"){
                console.log(await dialog.defaultValue())
            }else{
                console.log("FAIL");
            }
        }
        else if(dialog.type()=='confirm'){await dialog.accept();console.log(await dialog.message());}
    })
    await page.getByRole("button",{name:"Confirmation Alert"}).click()
    await expect.soft(await page.locator("#demo")).toContainText("OK")
    await page.getByRole("button",{name:"Prompt Alert"}).click()
    await expect.soft(await page.locator("#demo").textContent()).toBe("Hello GO TO MOON! How are you today?")
    await page.getByRole("button",{name:"Simple Alert"}).click()

    await page.pause()
})

test("dialog once",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole("button",{name:"Confirmation Alert"}).click()
    await page.getByRole("button",{name:"Simple Alert"}).click()
    page.once("dialog",async(dialo)=>{dialo.accept()})
    await page.getByRole("button",{name:"Prompt Alert"}).click()
    await page.reload()
    await page.getByRole("button",{name:"Prompt Alert"}).click()

    await page.pause()
})
