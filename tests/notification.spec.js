import {test} from "@playwright/test"

test("notification",async({browser})=>{
    let context= await browser.newContext({permissions:["notifications","microphone","geolocation",]})      //to grant permission
    let page = await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.click('//button[@id="browNotButton"]')
    const x = await page.evaluate(()=>{return Notification.requestPermission()})    //validation of permision status
    console.log(`permission: ${x}`);    //loging permision status

    //revoke all permission
    await context.clearPermissions()
    await page.click('//button[@id="browNotButton"]')
     const y = await page.evaluate(()=>{return Notification.requestPermission()})    //validation of permision status
    console.log(`permission: ${y}`);    //loging permision status


    await page.pause()
})