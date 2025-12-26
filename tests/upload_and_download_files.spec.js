import {test} from "@playwright/test"
import path from "path";
import fs from "fs"

// test("upload",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")     //to upload single file
//     // await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/ajayr/Desktop/playwright/uploding_file_tester/match_score.txt")
//     // await page.getByRole("button",{name:"Upload Single File"}).click()

//     // console.log(__dirname);
//     await page.locator('//input[@id="singleFileInput"]').setInputFiles(path.join(__dirname,"uploding_file_tester/match_score.txt"))
//     await page.getByRole("button",{name:"Upload Single File"}).click()

//     //to upload file from other location
//     // await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/ajayr/Desktop/upload_from_desktop.docx")
//     // await page.getByRole("button",{name:"Upload Single File"}).click()
   
//     //to upload multiple files
//     await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(["C:/Users/ajayr/Desktop/playwright/tests/uploding_file_tester/match_score.txt","C:/Users/ajayr/Desktop/playwright/tests/uploding_file_tester/results.txt"])
//     await page.getByRole("button",{name:"Upload Multiple Files"}).click()

//      //remove files
//     await page.locator('//input[@id="singleFileInput"]').setInputFiles([])//this will remove the files already attached
//     await page.getByRole("button",{name:"Upload Single File"}).click()

//     await page.pause()
// })


test("download",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here").fill("MY NAME IS WORLDS")
    await page.locator('//input[@placeholder="Filename"]').click()
    await page.locator('//input[@placeholder="Filename"]').fill("first.txt")
    let [downloadfile]= await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button",{name:"Download"}).click()
    ])

    // let downloadfolder ='C:/Users/ajayr/Desktop/playwright/download_file_tester' //file directory is changes
    let filename = downloadfile.suggestedFilename()
    
    //to give name from the web application
    // await downloadfile.saveAs(path.join(downloadfolder,filename)) //same as below
    // await downloadfile.saveAs(path.join(__dirname,"../download_file_tester",filename))

    //to store in loacl system

    let downloadfolder = "C:/Users/ajayr/Desktop/dwonload_playwright"
    await downloadfile.saveAs(path.join(downloadfolder,filename))
    let fullpath = path.join(downloadfolder,filename)//this is the comlete path

    // co7nsole.log(await downloadfile.path());

    //to varify if file is saved
    if(fs.existsSync(fullpath)){
        console.log(`FILE IS PRESENT AND LOCATION IS ${fullpath}`);
    }else{
        console.log("NO SUCH FILE");
    }



    await page.pause()
})


// test("download without promise",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")

//     await page.getByPlaceholder("Enter text here").fill("MY NAME IS WORLDS")
//     await page.locator('//input[@placeholder="Filename"]').click()
//     await page.locator('//input[@placeholder="Filename"]').fill("second.txt")

//     let downloadfile0= page.waitForEvent("download")
//     await page.getByRole("button",{name:"Download"}).click()    //this is the event
//     let downloadfile = await downloadfile0                  //to make it fully loaded
    
//     await page.getByRole("button",{name:"Download"}).click()

//     let filename = downloadfile.suggestedFilename()

//     let downloadfolder = "C:/Users/ajayr/Desktop/dwonload_playwright"
//     await downloadfile.saveAs(path.join(downloadfolder,filename))
    
//     console.log(await downloadfile.path());
//     await page.pause()
// })

