class homepage{
    constructor(page){
        this.createticket_link = page.getByRole("link",{name :" Create Ticket"})
        this.viewticket_link = page.getByRole("link",{name :" View Ticket"})
    }
}
export default homepage