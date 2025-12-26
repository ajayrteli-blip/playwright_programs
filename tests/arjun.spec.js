import {test} from "@playwright/test"
test("arjun",async({page})=>{
    await page.goto("https://www.bigbasket.com/")
    await page.click('(//span[text()="Shop by"])[2]')
    const a = await page.locator('(//div[@role="menu"])[2]/nav[@class="jsx-1259984711 flex text-medium"]/ul[@class="jsx-1259984711 w-56 px-2.5 bg-darkOnyx-800 text-silverSurfer-100 rounded-l-xs max-h-120 overflow-y-auto scroll-smooth"]/li/a').allTextContents()
    for(let value of a){
        await page.locator(`(//div[@role="menu"])[2]/nav[@class="jsx-1259984711 flex text-medium"]/ul[@class="jsx-1259984711 w-56 px-2.5 bg-darkOnyx-800 text-silverSurfer-100 rounded-l-xs max-h-120 overflow-y-auto scroll-smooth"]/li/a[text()="${value}"]`).hover()
        let b = await page.locator('(//div[@role="menu"])[2]/nav[@class="jsx-1259984711 flex text-medium"]/ul[@class="jsx-1259984711 w-56 px-2.5 bg-darkOnyx-800 text-silverSurfer-100 rounded-l-xs max-h-120 overflow-y-auto scroll-smooth"]/li/a/../../following-sibling::ul/li').allTextContents()
        for(let val of b){
            await page.locator(`(//div[@role="menu"])[2]/nav[@class="jsx-1259984711 flex text-medium"]/ul[@class="jsx-1259984711 w-56 px-2.5 bg-darkOnyx-800 text-silverSurfer-100 rounded-l-xs max-h-120 overflow-y-auto scroll-smooth"]/li/a/../../following-sibling::ul/li/a[text()="${val}"]`).hover()
            await console.log(await page.locator(`(//div[@role="menu"])[2]/nav[@class="jsx-1259984711 flex text-medium"]/ul[@class="jsx-1259984711 w-56 px-2.5 bg-darkOnyx-800 text-silverSurfer-100 rounded-l-xs max-h-120 overflow-y-auto scroll-smooth"]/li/a/../../following-sibling::ul/li`).allInnerTexts());
        }
    }
})



test("arjun 01",async({page})=>{
    await page.goto("https://www.worldometers.info/geography/countries-of-the-world/")
    await page.getByRole("button",{name:"  More "}).click()
    await page.locator('//a[@role="menuitem" and text()=" Food & Agriculture "]').click()
    await page.locator('//h2/../ul/li/a[text()="India"]').click()
    await console.log(await page.locator('//div[text()=" How many are undernourished? "]/following-sibling::div/child::div/child::div[text() = " people"]').allTextContents())
    await page.locator('//*[name()="svg"  and @aria-label="Number of Undernourished in India"]/*[name()="g"]/following-sibling::*[name()="g"  and @class="highcharts-series-group"]/child::*[name()="g" and @class="highcharts-markers highcharts-series-0 highcharts-spline-series highcharts-tracker"]/*[name()="path"]').first().scrollIntoViewIfNeeded() 
    const path = await page.locator('//*[name()="svg"  and @aria-label="Number of Undernourished in India"]/*[name()="g"]/following-sibling::*[name()="g"  and @class="highcharts-series-group"]/child::*[name()="g" and @class="highcharts-markers highcharts-series-0 highcharts-spline-series highcharts-tracker"]/*[name()="path"]').all() 
    await page.locator('//*[name()="svg"  and @aria-label="Number of Undernourished in India"]/*[name()="g"]/following-sibling::*[name()="g"  and @class="highcharts-series-group"]/child::*[name()="g" and @class="highcharts-markers highcharts-series-0 highcharts-spline-series highcharts-tracker"]/*[name()="path"]').first().hover()
    for(let i = 1;i<path.length;i++){
        await page.waitForTimeout(2000)
        await page.locator('//*[name()="svg"  and @aria-label="Number of Undernourished in India"]/*[name()="g"]/following-sibling::*[name()="g"  and @class="highcharts-series-group"]/child::*[name()="g" and @class="highcharts-markers highcharts-series-0 highcharts-spline-series highcharts-tracker"]/*[name()="path"]').nth(i).hover()
        await console.log(await page.locator('//*[name()="g" and @class="highcharts-label highcharts-tooltip highcharts-color-undefined"]/*[name()="text"]').allTextContents());
    }
    await page.pause()
})

