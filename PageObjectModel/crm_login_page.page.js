//PAGE OBJECT MODEL

class login{
    constructor(page){
        this.email_textfield = page.locator('#txtusername')
        this.password_textfield = page.locator('#txtpassword')
        this.login_button = page.locator("//button[text()='Login']")
    }
}
export default login