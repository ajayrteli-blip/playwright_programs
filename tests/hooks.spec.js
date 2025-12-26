import {test} from "@playwright/test"

test.beforeAll("",()=>{
    console.log("beforeAll");
})

test.beforeEach("",()=>{
    console.log("beforeEach");
})

test("test 01",()=>{
    console.log("test 01");
})

test("test 02",()=>{
    console.log ("test 02");
})

test.afterEach("",()=>{
    console.log("afterEach");
})

test.afterAll("",()=>{
    console.log("afterAll");
})