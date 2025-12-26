//Auto Retrying Assertions

import {test,expect} from "@playwright/test"        //import expect

test("Assertions",async({page})=>{
    await page.goto("https://store.google.com/?hl=en-IN&pli=1")
    await expect(page).toHaveTitle("Google Store for Google Made Devices & Accessories")
    await expect(page).toHaveURL("https://store.google.com/?hl=en-IN&pli=1")
    // await page.getByText("Browse phones").click()

    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator("#domain_a").click()
    await expect(page.locator("#domain_a")).toBeChecked()

    const b = await page.getByRole("button",{name:"Practice Session"})
    await expect(b).toHaveText("Practice Session")
    await expect(await page.locator("(//span)[ position()>1 and position()<4]")).toHaveText(["Email","WhatsApp"])

    await expect(b).toHaveAttribute("class","w-30 h-7   flex items-center  p-3.5  navbar-options _navbar-options_17hpi_1")
    await expect(b).toHaveAttribute("class")

    await expect(b).toHaveClass("w-30 h-7   flex items-center  p-3.5  navbar-options _navbar-options_17hpi_1")

    await expect(await page.locator("#options")).toHaveId("options")
    await expect(await page.locator("#options")).toHaveClass("w-full flex items-center rounded text-center border-2 border-orange-300 outline-none")

    await expect(b).toHaveCSS("display", "flex")
    await expect(b).toHaveCSS("font-weight","60")


    
    
})