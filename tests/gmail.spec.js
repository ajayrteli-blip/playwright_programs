import {test} from "@playwright/test"

test("sending mail",async({page})=>{
    await page.goto("https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&dsh=S-2096840527%3A1765001896163112&ifkv=Ac2yZaVa7Ax19KJX8NVY4CDmrllAI3vbHnfZVoCBrjyQYdoxQvB1FvpXNIgW3kKB_oq_nTklfdOa9g&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin")
    await page.fill("#identifierId","sgvbgwsergwsgrvswg55@gmail.com")
    await page.getByText("Next").click()
    await page.locator('//input[@type="password"]').click()
    await page.locator('//input[@type="password"]').fill("Shashank@8")
    await page.getByText("Next").click()

    await page.getByText("Compose").click()
    await page.locator('//input[@class="agP aFw"]').click()
    await page.locator('//input[@class="agP aFw"]').fill("sahanan@gmail.com")
    await page.fill(".aoT","TRAIL MAIL 001")
    await page.locator('//div[@id=":93"]').click()
    await page.locator('//div[@id=":93"]').fill("TRAIL MAIL BODY")
   
    await page.locator('//div[@id=":7c"]').click()
})