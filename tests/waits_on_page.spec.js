import {test} from "@playwright/test"

test("wait for page",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    Promise.all([
    page.waitForNavigation(),                 //we want parallel execution // hence we dont use await //navigation should know the action  
    page.click("//a[.='Cart']")
    ])
    await page.getByAltText("Flipkart").click()
    // await page.waitForLoadState()          //by default laod state
    await page.waitForLoadState("networkidle")
})

test("wait for events",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.fill("#writeArea",'my name is what')
    let [downloaded_file] = await Promise.all([
    page.waitForEvent("download"),
    page.click("#downloadButton")
])
    console.log(await downloaded_file.path());                  //will log the path of the file

})