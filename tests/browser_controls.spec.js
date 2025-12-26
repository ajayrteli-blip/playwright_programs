    //    import {test} from "@playwright/test"
       
    //    test("browser control1",async({page})=>{
    //         await page.goto("https://www.zepto.com/")
    //         console.log(await page.viewportSize())
    //         await page.setViewportSize({width:500,height:500})
    //         let s = await page.viewportSize()
    //         console.log(s)
    //         console.log(await page.title())
    //         console.log(await page.url())
    //         await page.goto("https://www.flipkart.com/")
    //         console.log(await page.title())
    //         console.log(await page.url())    
    //     })

    // import {chromium,test} from "@playwright/test"

    //    test.only("browser control2",async({browserName})=>{
    //     let browser = await chromium.launch()
    //     let context = await  browser.newContext()
    //     let page = await context.newPage()
    //     // console.log(await context.cookies()) //empty array []
    //     await page.goto("https://www.zepto.com/")
    //     // console.log(await context.cookies())
    //     console.log( await browserName) //name is from config.js
    //    })

        // import {test} from "@playwright/test"

        // test("screenshot",async({page})=>{
        //     await page.goto("https://www.zepto.com/")
        //     let time = new Date().getTime()
        //     await page.screenshot({path:`screen_shot/page-${time}.png`})
            
        // })

        import {test} from "@playwright/test"
       
       test("browser close",async({browser})=>{
        let context = await  browser.newContext()
        let page = await context.newPage()
        await page.goto("https://www.zepto.com/")
        let page1 = await context.newPage()
        await page1.goto("https://www.flipkart.com/")
        let page2 = await context.newPage()
        await page2.goto("https://www.google.com/")
        
        await browser.close() //close browser instance
        })