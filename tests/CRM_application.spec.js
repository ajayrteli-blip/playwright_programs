import {test} from "@playwright/test"
import data from "../TEST_DATA/crm_application.json"

import landing from "../PageObjectModel/crm_landing_page.js"
import signup from "../PageObjectModel/crm_signup_page.page.js"
import login from "../PageObjectModel/crm_login_page.page.js"
import homepage from "../PageObjectModel/crm_homepage.page.js"
import createticket from "../PageObjectModel/crm_createticket_page.page.js"


test("testcase on CRM",async({page})=>{
    let url = data.url
    let name = data.name
    let email = data.email
    let password = data.password
    let contact = data.contact_number
    let subject = data.subject
    let discription = data.discription


    //dialog handeling
    page.on("dialog",async(dialog)=>{
        console.log(dialog.message());
        await dialog.accept()
    })

    let landingpage = new landing(page)
    let signuppage = new signup(page)
    let loginpage = new login(page)
    let home = new homepage(page)
    let createticketpage = new createticket(page)

    //launching url
    await page.goto(url)
    //click on signup
    await landingpage.usersignup_link.click()
    //signing up
    await signuppage.name_textfield.fill(name)
    await signuppage.emailid_textfield.fill(email)
    await signuppage.password_textfield.fill(password)
    await signuppage.repassword_textfield.fill(password)
    await signuppage.contactno_textfield.fill(contact)
    await signuppage.mgender_radiobutton.click()
    await signuppage.submit_button.click()
    //alert appears

    //login page
    await loginpage.email_textfield.fill(email)
    await loginpage.password_textfield.fill(password)
    await loginpage.login_button.click()

    //homepage
    await home.createticket_link.click()

    //create ticket
    await createticketpage.subject_textfield.fill(subject)
    await createticketpage.tasktype_dropdown.selectOption({value:"billing"})
    await createticketpage.priority_dropdown.selectOption({value:"important"})
    await createticketpage.discription_textareafield.fill(discription)
    await createticketpage.send_button.click()

    //alert is triggered

    //view ticket
    await home.viewticket_link.click()

    //take screen shot
    let time = new Date().getTime()
    await page.screenshot({path:`screen_shot/page-${time}.png`})

})