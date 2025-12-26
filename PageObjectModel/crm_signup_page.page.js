//PAGE OBJECT MODEL

class signup{
    constructor(page){
        this.name_textfield = page.locator('#name')
        this.emailid_textfield = page.locator('#email')
        this.password_textfield = page.locator('#password')
        this.repassword_textfield = page.locator('#cpassword')
        this.contactno_textfield = page.locator('#txtpassword')
        this.mgender_radiobutton = page.locator('//input[@value="m"]')
        this.fgender_radiobutton = page.locator('//input[@value="f"]')
        this.submit_button = page.locator('//input[@name="submit"]')
    }
}

export default signup
