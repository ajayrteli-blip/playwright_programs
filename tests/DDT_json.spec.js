import {test} from "@playwright/test"
import fs from "fs"
import path from "path"
let jsondata = fs.readFileSync("C:/Users/ajayr/Desktop/playwright/TEST_DATA/single_set_data.json")
let data = JSON.parse(jsondata)

//above lines are needed to convert from json object to js object

test("single data",async({page})=>{
    console.log(data.name);
})

let jsondata1 = fs.readFileSync(path.join(__dirname,"../TEST_DATA/array_of_data.json"))
let data1 = JSON.parse(jsondata1)
test("array of data",async()=>{
    data1.forEach(element => {
        console.log(element.name);
    });
})

let jsondata2 = fs.readFileSync(path.join(__dirname,"../TEST_DATA/testcase1.json"))
let data2 = JSON.parse(jsondata2)
test("login using DDT json",async({page})=>{
    //for single data
    // await page.goto(jsdata2.url)
    // await page.fill('//input[@id="username"]',jsdata2.Username)
    // await page.fill('//input[@id="password"]',jsdata2.Password)
    // await page.click('//button[@id="submit"]')
    // await page.pause()

    for(let element of data2){                  //first is valid and second is invalid
            await page.goto(element.url)
            await page.fill('//input[@id="username"]',element.Username)
            await page.fill('//input[@id="password"]',element.Password)
            await page.click('//button[@id="submit"]')
            let title = await page.locator('.post-title').allTextContents()
            await console.log(title);
    }
})


import data3 from "../TEST_DATA/valid_invalid.json"
test("valid data ",async({page})=>{
    for(let value of data3.valid){
        await page.goto(value.url)
        await page.fill('//input[@id="username"]',value.Username)
        await page.fill('//input[@id="password"]',value.Password)
        await page.click('//button[@id="submit"]')
        let title = await page.locator('.post-title').allTextContents()
        if(title[0]=="Logged In Successfully")
            console.log("SUCCESSFULL LOGIN");
        else
            console.log("FAILURE TO LOGIN");
    }
})

//simillar but valid and invalid

test("valid and invalid data",async({page})=>{
    for(let key in data3){
        console.log(key);
    for(let value of data3[key]){
        await page.goto(value.url)
        await page.fill('//input[@id="username"]',value.Username)
        await page.fill('//input[@id="password"]',value.Password)
        await page.click('//button[@id="submit"]')
        let title = await page.locator('.post-title').allTextContents()
        if(title[0]=="Logged In Successfully")
            console.log("SUCCESSFULL LOGIN");
        else
            console.log("FAILURE TO LOGIN");
    }
}
})


//using discribe method
//only for single set of data
import single_set from "../TEST_DATA/discribe_data_single_set.json"

test.describe("multi test",async()=>{
    let url =single_set.url
    let usn =single_set.Username
    let pwd =single_set.Password
    test("test1",async({page})=>{
        await page.goto(url)
        await page.fill('//input[@id="username"]',usn)
        await page.fill('//input[@id="password"]',pwd)
        await page.click('//button[@id="submit"]')
        let title = await page.locator('.post-title').allTextContents()
        if(title[0]=="Logged In Successfully")
            console.log("SUCCESSFULL LOGIN");
        else
            console.log("FAILURE TO LOGIN");
    })
        test("test2",async({page})=>{
        await page.goto(url)
        await page.fill('//input[@id="username"]',usn)
        await page.fill('//input[@id="password"]',pwd)
        await page.click('//button[@id="submit"]')
        let title = await page.locator('.post-title').allTextContents()
        if(title[0]=="Logged In Successfully")
            console.log("SUCCESSFULL LOGIN");
        else
            console.log("FAILURE TO LOGIN");
    })
        test("test3",async({page})=>{
        await page.goto(url)
        await page.fill('//input[@id="username"]',usn)
        await page.fill('//input[@id="password"]',pwd)
        await page.click('//button[@id="submit"]')
        let title = await page.locator('.post-title').allTextContents()
        if(title[0]=="Logged In Successfully")
            console.log("SUCCESSFULL LOGIN");
        else
            console.log("FAILURE TO LOGIN");
    })
})
