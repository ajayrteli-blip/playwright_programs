import {test} from "@playwright/test"

test("custom waits",async({page})=>{
    await page.goto("https://www.amazon.in/")

    await page.waitForFunction(()=>{return document.readyState==='complete'})               //example 1

    await page.fill('#twotabsearchtextbox',"oneplus mobile")
    await page.waitForFunction(()=>{let ele = document.querySelectorAll(".s-suggestion-container"); return ele.length>2})  //example 2
    const suggestions = await page.locator('//div[@class = "s-suggestion-container"]').allTextContents()
    console.log(suggestions);
})