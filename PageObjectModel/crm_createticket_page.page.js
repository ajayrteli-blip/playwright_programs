class createticket{
    constructor(page){
        this.subject_textfield = page.locator('//input[@name="subject"]')
        this.tasktype_dropdown= page.locator('(//select[@class="form-control select" ])[1]')
        this.priority_dropdown = page.locator('(//select[@class="form-control select" ])[2]')
        this.discription_textareafield = page.locator("//textarea")
        this.send_button = page.locator('//input[@value="Send"]')
    }
}
export default createticket