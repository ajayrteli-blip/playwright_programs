import {test} from "@playwright/test"

test("basic mouse actions",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    await page.locator('//button[@id="btn"]').click()   //left click

    await page.click('//a[text()="Right Click"]')
    await page.locator('//button[@id="btn_a"]').click({button:'right'}) //right click

    await page.click('//a[text()="Double Click"]')
    await page.locator('//button[@id="btn_a"]').dblclick()  //double click
    await page.locator('//button[@id="btn_b"]').click({clickCount:2})

    await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")     //down and up mouse
    await page.locator('//div[@id="circle"]').hover()
    await page.mouse.down()
    await page.waitForTimeout(1000)
    await page.mouse.up()

    await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4')  //disabled or hidden button
    await page.locator('//input[@id="submit"]').click({force:true})
    await page.locator('//input[@id="submit"]').dispatchEvent('click')

    await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
    await page.locator('//img[@src="/assets/message-hint-nbRmWGWf.png"]').hover()      //mouse hovering
    await page.waitForTimeout(2000)
    await page.mouse.move(100,200)

    await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical')       //scrolling mouse action
    await page.waitForTimeout(2000)
    await page.mouse.wheel(0,2000)
    await page.waitForTimeout(2000)
    await page.mouse.wheel(0,-500)
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")  //horizontal scroll
    await page.waitForTimeout(2000)
    await page.mouse.wheel(-1000,0)
    await page.waitForTimeout(2000)
    await page.mouse.wheel(100,0)
    await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical')       //scroll to perticular element
    await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()        //by default playwright it does scroll
    await page.pause()
})

//drag and drop using mouse actions
test("drag & drop",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
    await page.locator('//div[text()="Drag Me"]').hover()
    await page.mouse.down()
    await page.mouse.move(250,640)
    await page.mouse.up()


    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.locator('//div[text()="Mobile Charger"]').hover()
    await page.mouse.down()
    await page.locator('//div[text()="Mobile Accessories"]/..').hover()
    await page.mouse.up()
    
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.locator('//div[text()="Mobile Charger"]').hover()
    await page.mouse.down()
    const box = await page.locator('//div[text()="Mobile Accessories"]/..').boundingBox()
    await page.mouse.move(box.x,box.y)
    await page.mouse.up()

    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    const source = page.locator('//div[text()="Mobile Charger"]')
    const target = page.locator('//div[text()="Mobile Accessories"]/..')
    await source.dragTo(target)

    await page.pause()
})
