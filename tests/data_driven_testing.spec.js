import {test} from "@playwright/test"
import excel from 'exceljs'
import path from "path"

test("read data from excel",async({page})=>{
    let book = await new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../TEST_DATA/excel_data.xlsx"))
    let sheet = await book.getWorksheet("Sheet1")
    // let data = await sheet.getRow(1).getCell(1)
    // let data = await sheet.getRow(1).getCell(1).value   //value is not method, it is just object key
    let data = await sheet.getRow(1).getCell(1).toString()
    console.log(data)
})

test("read multiple data from excel",async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../TEST_DATA/excel_data.xlsx"))
    let sheet = await book.getWorksheet("Sheet2")
    for(let row=1;row<=sheet.actualRowCount;row++){
        for(let column=1;column<=sheet.actualColumnCount;column++){
            console.log(await sheet.getRow(row).getCell(column).toString());
        }
    }
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    for(let column=1;column<=sheet.actualColumnCount;column++){
        for(let row=1;row<=sheet.actualRowCount;row++){
            console.log(await sheet.getRow(row).getCell(column).toString());
        }
    }
})


test("test case data from excel",async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../TEST_DATA/excel_data.xlsx"))
    let sheet = await book.getWorksheet("Sheet3")
    let all_data =[]                        //to store array of objects
    for(let r=1; r<=sheet.actualRowCount;r++){
        let row = await sheet.getRow(r)
        let url = await row.getCell(1).toString()
        let usn = await row.getCell(2).toString()
        let pwd = await row.getCell(3).toString()
        all_data.push({url:url,usn:usn,pwd:pwd})
    }
    
    for(let value of all_data){
        await page.goto(value.url)
        let temp = page.waitForEvent("popup")
        await page.getByRole("link",{name:"Small CRM"}).click()
        let page2 = await temp
        await page2.getByRole("link",{name:"Admin"}).click()
        await page2.fill("#txtusername",value.usn)
        await page2.fill("#txtpassword",value.pwd)
        await page2.getByRole("button",{name:"Login"}).click()
        await page2.waitForTimeout(2000)
        await page2.close()
    }
    
})


test("wrtie data into excel",async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../TEST_DATA/excel_data.xlsx"))
    let sheet = await book.getWorksheet("Sheet5")
    if(!sheet){
        sheet = await book.addWorksheet("Sheet5")
    }
    sheet.getRow(1).getCell(2).value="Assigned Hello 1111"
    await book.xlsx.writeFile(path.join(__dirname,"../TEST_DATA/excel_data.xlsx"))

})


test("amazon get suggestions",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.fill('//input[@id="twotabsearchtextbox"]',"school bags")
    await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]/..').first().waitFor()
    let arr = await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]/..').allTextContents();
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../TEST_DATA/excel_data.xlsx"))
    let sheet = book.getWorksheet("Sheet_Amazon")
    for(let value of arr){
        let i = arr.indexOf(value)
        sheet.getRow(i+1).getCell(1).value=value
    }
    await book.xlsx.writeFile(path.join(__dirname,"../TEST_DATA/excel_data.xlsx"))
})


test("read and write from excel",async({page})=>{
    await page.goto("https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2")
    // await page.locator('//div[@class="sc-aXZVg brETgz"]').first().waitFor()
        await page.keyboard.down("ArrowDown")
        await page.waitForTimeout(10000)
        await page.keyboard.up("ArrowDown")
        let arr = await page.locator('//div[@class="sc-aXZVg brETgz"]').allTextContents()
        await console.log(arr);
})