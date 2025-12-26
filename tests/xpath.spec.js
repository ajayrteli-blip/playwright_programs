import {test} from "@playwright/test"

test("xpath",async({page})=>{

    // 1. open Amazon.in application,search for samsung phones,write a xpath to find price of the 1st samsung phone.
    await page.goto("https://www.amazon.in/")
    await page.fill('//input[@id="twotabsearchtextbox"]','samsung phones')
    await page.click("#nav-search-submit-button")
    await page.waitForTimeout(1000)
    await console.log( await page.locator('(//span[@class="a-price-whole"])[1]').allTextContents());

    // 2. open Amazon.in application,search for phones,in the left side of the page you can operating system,write a xpath to click on a checkBox for (Android 13.0)
    await page.goto("https://www.amazon.in/")
    await page.fill('//input[@id="twotabsearchtextbox"]','phones')
    await page.click("#nav-search-submit-button")
    await page.waitForTimeout(1000)
    await page.click('//span[@class="a-size-base a-color-base" and .="Android 13.0"]')

    // 3. Open cricbuzz application, click on live match,click on scoreCard, write a xpath to find Runs scored by a perticular batsman.
    await page.goto("https://www.cricbuzz.com/")
    await page.click('//div[@class="shadow rounded-md overflow-hidden"]/a[@title="England vs Australia, 2nd Test "]')
    await page.click('//a[.="Scorecard"]')
    await page.waitForTimeout(1000)
    await console.log( await page.locator('(//a[text()="Zak Crawley"]/parent::div/following-sibling::div[@class="flex justify-center items-center font-bold text-sm  wb:text-sm"])[1]').allTextContents());

    // 4. open iccCricketRankings, go to (Men's Batting Rankings)section, write a xpath to find a rating of player(David Warner).
    await page.goto("https://www.icc-cricket.com/rankings/batting/mens/test")
    await page.waitForTimeout(2000)
    await console.log( await page.locator('(//span[text()="Rishabh"]/ancestor::div[@class="si-table-row"]/descendant::span[@class="si-text"])[1]').allTextContents());

    // 5. open LensKart application, mouseOverOn StoreLocator, write a xpath to locate (Bangalore)
    await page.goto("https://www.lenskart.com/?utm_source=google&utm_medium=cpc&utm_campaign=112_in_bau_google_sale_brand_search_lkhome_troas_150119&utm_content=lenskart_exact&gad_source=1&gad_campaignid=1677912364&gbraid=0AAAAADuGjA79jC0VsxZ3_mkBrVBxV8q7B&gclid=Cj0KCQiAi9rJBhCYARIsALyPDtsbIKKQ-M0XOQuHqd2u_8OfUOb-9idU8KAgJSWSbtYvtGgi3fQ73McaAqS-EALw_wcB")
    await page.hover('//a[text()="Store Locator" and @title="Collection Link" ]')
    await page.click('//div[text()="Bangalore"]')

    // 6. open flipkart and locate CART without using visible Text().
    await page.goto("https://www.flipkart.com/")
    await page.click('//a[@title="Cart"]/./child::img')

    // // 8. search for tokyo olympics, select the 1st link, scroll till (Featured Athletes),click on All Athletes,go to Medalists,write a xpath to find Number of Gold medals won by (Emma Mckeon).
    // await page.goto("https://www.olympics.com/en/olympic-games/tokyo-2020")
    // await page.click('//a[text()="All Athletes"]')
    // console.log(await page.locator('//h3[@data-cy="athlete-name" and text()="Emma MCKEON"]/ancestor::div[@data-row-id="athlete-row-2"]/following-sibling::div/div[@title="Gold"]/span/span').allTextContents());

    // 9. open amazon.in, mouseover on Accounts & Lists and write a xpath for signInBtn.
    await page.goto("https://www.amazon.in/")
    await page.hover("//span[contains(.,'Account & Lists')]")
    await page.click("//span[contains(.,'Sign in')]")

    // 10 open clinique website and inspect bag icon
    await page.goto("https://www.clinique.in/")
    await page.click('//*[name()="svg"  and @class="ufc-cart-icon-svg"]')

    // 11 pkl names and points
    await page.goto("https://www.prokabaddi.com/")
    await page.waitForTimeout(1000)
    console.log(await page.locator('//p[@class="name"] | //div[@class="table-data points"]/p[@class="count"]').allTextContents()); 

    await page.click('//span[text()="Teams"]')
    await page.click('//p[text()="Bengaluru"]')
    console.log(await page.locator('//div[@class="stats-wrap"]/p[@class="name"] | //div[@class="stats-wrap"]/p[@class="stats-count"]').allTextContents())
    await page.waitForTimeout(1000)
    console.log(await page.locator('//p[@class="title" and text()="Overall" ]/ancestor::div[@class="card-wrapper"]/descendant::p[@class="name" and not(contains(.,"vs"))] |  //p[@class="title" and text()="Overall" ]/ancestor::div[@class="card-wrapper"]/descendant::p[@class="stats-count"] ').allTextContents());

    // 7. Go to makeMyTrip application, go to departure, write a xpath to select date, of month January 2024  (24)
    await page.goto("https://www.makemytrip.com/")
    await page.click('//span[@class="commonModal__close"]')
    await page.click('//img[@alt="minimize"]')
    await page.click('//span[text()="Departure"]')
    await page.waitForTimeout(2000)

    const month_year = "May 2026"
    const day = "8"
    await page.waitForTimeout(2000)
    const z=await page.locator(`//div[text()="${month_year}"]/../following-sibling::div[@class="DayPicker-Body"]/descendant::div[@class="dateInnerCell" ]/p[text()="${day}"]`).allTextContents()
    if(z[0]==undefined)
    {
            for(let i = 1;;i++){
            await page.locator('//span[@aria-label="Next Month"]').click()
            await page.waitForTimeout(2000)
            const y = await page.locator(`//div[text()="${month_year}"]/../following-sibling::div[@class="DayPicker-Body"]/descendant::div[@class="dateInnerCell" ]/p[text()="${day}"]`).allTextContents()
            if(y[0]!=undefined)
                {
                await page.click(`//div[text()="${month_year}"]/../following-sibling::div[@class="DayPicker-Body"]/descendant::div[@class="dateInnerCell" ]/p[text()="${day}"]`);
                break;
            }
        }
    }
    else{
         await page.click(`//div[text()="${month_year}"]/../following-sibling::div[@class="DayPicker-Body"]/descendant::div[@class="dateInnerCell" ]/p[text()="${day}"]`);
    }


    await page.pause()
})