class loginpage{
    constructor(page){
        this.username_textfield = page.locator("input#username")
        this.password_textfield = page.locator("input#password")
        this.submit_button = page.locator("button.btn")
    }
}

export default loginpage