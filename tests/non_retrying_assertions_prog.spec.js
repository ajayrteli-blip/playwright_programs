//non_retrying_assertions_prog

import {test,expect} from "@playwright/test"

test("non retrying assertions",async({page})=>{
    await page.goto("https://www.zepto.com/")
    const title = await page.title();
    expect(title).toBe("Welcome to Zepto, India's Fastest Online Grocery Delivery App! Get all your groceries delivered to you in minutes. | https://www.zepto.com")
    expect(title).toContain("Welcome")
    expect(title).toMatch(/[a-zA-Z]/g)
    expect.soft(title).toHaveLength(9)

    await page.goto("https://www.bigbasket.com/")
     await page.locator('(//input[@placeholder="Search for Products..."])[2]').click()
     await page.locator('(//input[@placeholder="Search for Products..."])[2]').fill("50")
    const value =  await page.locator('(//input[@placeholder="Search for Products..."])[2]').inputValue();  //to get value from imput
    let f =Number(value)
    // expect(f).toBeCloseTo(50,1)
    expect.soft(value).toBeFalsy()
    expect.soft(value).toBeTruthy()
    expect.soft(f).toBeGreaterThan(20)
    expect.soft(f).toBeGreaterThanOrEqual(20)
    expect.soft(f).toBeLessThan(100)
    expect.soft(f).toBeLessThanOrEqual(100)
    expect.soft(f).toBeNaN()
    expect.soft(f).toBeNull()
    expect.soft(f).toBeUndefined()
   
    




    
})

