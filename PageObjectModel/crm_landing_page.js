//PAGE OBJECT MODEL

class landing{
    constructor(page){
        this.usersignup_link =  page.locator('//a[text()="User Signup"]')
    }
}

export default landing