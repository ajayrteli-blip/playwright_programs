import {test} from "@playwright/test"

// test.only("test anotation 0",async()=>{                      //.only anotation
//     console.log("TEST 0");
// })

// test.fail("test anotation 0",async({page})=>{                   //.fail anotation 
//     await console.log("TEST 0");
//     await page.goto("www.money.com")                            //making it fail intentionally to satisfy the condition 
// })

// test.fixme("test anotation 0",async()=>{                      //.fixme anotation (test will be skipped)
//     console.log("TEST 0");
// })

// test("test anotation 0",async()=>{                      //.slow anotation (time *3)
//     test.slow()
//     console.log("TEST 0");
// })

// test("test anotation 0",async()=>{                      //.setTimeout anotation (explicitly set timeout)
//     console.log("TEST 0");
//     test.setTimeout(2000)
// })

// test("test anotation 01",async()=>{
//     test.slow()
//     console.log("TEST 1");
// })

// test("test anotation 02",async({browserName})=>{
//     // test.skip(browserName==="firefox")                       //.skip anotation
//     console.log("TEST 2");
// })

// test("test anotation 03",async()=>{
//     console.log("TEST 3");
// })



test.describe("actions",async()=>{       //discribe anotation is to group test
        test("youtube",async({page})=>{
            await page.goto("https://www.youtube.com/")
        })
        test("facebook",async({page})=>{
          await page.goto("https://www.facebook.com/")
        })
    })        
