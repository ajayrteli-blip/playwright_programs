import {test} from "@playwright/test"
import loginpage from "../PageObjectModel/loginpage.page.js"
// import data from "../TEST_DATA/discribe_data_single_set.json"
//or
import fs from "fs"
let jsondata = fs.readFileSync("C:/Users/ajayr/Desktop/playwright/TEST_DATA/discribe_data_single_set.json")
let data = JSON.parse(jsondata)
test("POM LOGIN",async({page})=>{
    await page.goto(data.url)
    let lp = new loginpage(page)
    await lp.username_textfield.fill(data.Username)
    await lp.password_textfield.fill(data.Password)
    await lp.submit_button.click()
    

    await page.pause()
})