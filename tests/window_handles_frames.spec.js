import {test} from "@playwright/test"

test("frames",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    const f = await page.frames()
    console.log(f.length)
    for(let value of f){
        console.log(await value.title());
    }
    console.log(await page.title());


    await page.pause()
})

test("frame objects",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    //method 1
    const frame = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame.fill('//input[@name="mytext1"]',"METHOD 01")
    //method 2
    const frame1 = await page.frameLocator('//frame[@src="frame_2.html"]').locator('//input[@name="mytext2"]')
    await frame1.fill("METHOD 02")
    //method 3
    const frame2 = await page.locator('//frame[@src="frame_4.html"]').contentFrame()
    await frame2.locator('//input[@name="mytext4"]').fill("METHOD 03")

    await page.pause()
})

test("nested frames",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})

    // const frame2 = await frame1.frame({url:'https://docs.google.com/forms/d/e/1FAIpQLScP-K8zi-9ar0MCq93D3VIFhegSNPveBfdLqiMfTYR9Q1iSKQ/viewform?embedded=true'})
    // await frame2.click('//div[@class="ulDsOb" and .="I am a human"]') 
    
    // const frame2 = await frame1.frameLocator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]').locator('//div[@class="ulDsOb" and .="I am a human"]')
    // await frame2.click()

    const frame2 = await frame1.locator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]').contentFrame()
    await frame2.locator('//div[@class="ulDsOb" and .="I am a human"]').click() 

    const f = frame1.parentFrame()
    console.log(await frame1.title());
    console.log(await f.title());
    

    await page.pause()
})