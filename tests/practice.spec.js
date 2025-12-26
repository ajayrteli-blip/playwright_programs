import {test,expect} from "@playwright/test"
import { count } from "console"

test("execution program",async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").click()
    await page.keyboard.insertText("shoes")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000)
    await page.locator('select#s-result-sort-select').selectOption({index:2})
    await page.pause()
    
})
