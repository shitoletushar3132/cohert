const fs = require("fs")
// class Animal {
//     constructor(name, legCount, speaks) {
//         this.name = name;
//         this.legCount = legCount;
//         this.speaks = speaks
//     }

//     static myType() {
//         console.log("animal")
//     }

//     speak() {
//         console.log("hi there " + this.speaks)
//     }
// }

// let dob = new Animal("dog", "4", "bhow bhow")

// Animal.myType()


// const currentDate = new Date()

// console.log(typeof (currentDate))
// console.log(currentDate.getDate())
// console.log(currentDate.getFullYear())


// function calc() {
//     let a = 0;
//     for (let i = 0; i < 10000000000; i++) {
//         a += i;
//     }
//     return a;
// }

// const beforeDate = new Date();
// const beforeTimeInMs = beforeDate.getTime()

// calc();

// const afterDate = new Date();
// const afterTimeInMs = afterDate.getTime()
// console.log((afterTimeInMs - beforeTimeInMs)/1000)


// const usersObj = { name: "tusahr", age: 21, gender: "male" };
// const userStr = `{"name":"tusahr","age":21,"gender":"male"}`
// console.log(JSON.stringify(usersObj))
// console.log(JSON.parse(userStr))


// console.log(eval("2+2"))

fs.readFile("style.css", "utf-8", (err, data) => {
    console.log(data)
})

console.log("hello..............")