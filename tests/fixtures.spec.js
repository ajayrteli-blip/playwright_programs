import {test} from "@playwright/test"

// test("fixtures",async({page})=>{
//   await page.goto("https://www.amazon.in/")                //page is fixture
//   await console.log("OPENED THE PAGE");
// })

// test("fixtures",async({browser,browserName})=>{
//   let context = await browser.newContext()              //browser will identify the browser and it is a fixture
//   let page0 = await context.newPage()                   //conext is fixture
//   await page0.goto("https://www.amazon.in/")
//   let page1 = await context.newPage() 
//   await page1.goto("https://www.flipkart.com/")
//   console.log(browserName);                           //browserName is fixture
// })

// test("fixtures",async({
// ,browserName,page})=>{
//   let context = await browser.newContext()              //browser will identify the browser and it is a fixture
//   let page0 = await context.newPage()                   //conext is fixture
//   await page0.goto("https://www.amazon.in/")
//   let page1 = await context.newPage() 
//   await page1.goto("https://www.flipkart.com/")
//   console.log(browserName);                           //browserName is fixture
//    await page.goto("https://www.amazon.in/")          //page fixture
// })

test("open zepto",async({browser})=>{
    let context  = await browser.newContext()
    let p = await context.newPage()
    await p.goto("https://www.zepto.com/")
    
    let context1  = await browser.newContext()
    let p1 = await context1.newPage()
    await p.goto("https://www.flipkart.com/")

})