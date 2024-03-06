let ar = [1, 2, 4, 56, 7, 89, 76, 534, 34, 34, 34];

// function filter(arr, callback) {
//     let even = [];
//     let odd = [];
//     for (let d of arr) {
//         if (callback(d)) {
//             even.push(d)
//         }
//         else {
//             odd.push(d);
//         }
//     }

//     return {
//         even, odd
//     }

// }

// let even = (num) => {
//     return num % 2 === 0;
// }

// console.log(filter(ar, even));

// function filter(numbers, callback) {
//     let results = [];
//     for (const number of numbers) {
//         if (callback(number)) {
//             results.push(number);
//         }
//     }
//     return results;
// }

// let numbers = [1, 2, 4, 7, 3, 5, 6];

// let oddNumbers = filter(numbers, function (number) {
//     return number % 2 != 0;
// });

// console.log(oddNumbers);

//2)
// function callbackss(name, callback) {
//     callback()
//     console.log(`this is ${name}`);


// }

// function showgreeting() {

// }

// callbackss("aditya", () => {
//     console.log("hello everyone");
// });

// function download(url, callback) {
//     setTimeout(() => {
//         console.log(`Downloading ${url} ...`);
//         callback(url);
//     }, 1000);
// }

// const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
// const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
// const url3 = 'https://www.javascripttutorial.net/pic3.jpg';

// download(url1, function (url) {
//     console.log(`Processing ${url}`);
//     download(url2, function (url) {
//         console.log(`Processing ${url}`);
//         download(url3, function (url) {
//             console.log(`Processing ${url}`);
//         });
//     });
// });

//4)Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
// function callbackex(callback) {
//     setTimeout((callback), 2000)
// }
// function display() {
//     console.log("delaly of 2 seconds");
// }

// callbackex(display);

//5)Write a JavaScript program that converts a callback-based function to a Promise-based function.

// function callBackFunction(a, b, callback) {
//     setTimeout(() => {
//         res = a + b
//         if (res % 2 == 0) {
//             callback(res)
//         }
//         else {
//             callback(new Error("value is not even number"))
//         }
//     }, 3000)
// }

// function promiseFunction(a, b) {

//     return new Promise((resolve, reject) => {
//         callBackFunction(a, b, (res, err) => {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(res)
//             }


//         })
//     })

// }

// let res = promiseFunction(12, 8);
// res.then((res) => {
//     console.log(res);

// }).catch(() => {
//     console.log("err");
// })

//6)
// Write a JavaScript program that implements a function
// that performs a series of asynchronous operations in sequence using Promises and 'async/await'.
// function async1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("sync1")

//         }, 3000)
//     })
// }
// function async2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("sync2")

//         }, 3000)
//     })
// }
// function async3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("sync3")

//         }, 3000)
//     })
// }

// let datA = async function runall() {
//     let d = await async1();
//     let dd = await async2();
//     let ddd = await async3();
//     console.log("all async fun run");
//     return {
//         d, dd, ddd
//     }
// }
// let { d, dd, ddd } = datA.then((res) => {
//     console.log(res);
// });
// console.log(d, dd, ddd);
// console.log(datA());

// let users = [
//     { name: "aditya", age: "25" }
// ]

// let services = [
//     { id: 1, servName: "abc", price: "204" },
//     { id: 2, servName: "cde", price: "230" },
//     { id: 3, servName: "def", price: "220" },
//     { id: 4, servName: "ghi", price: "202" }
// ]

// function getUser(name, callback) {
//     let u = users.sort((name) => {
//         users.name = name;
//     })
//     setTimeout(() => {
//         userServices(2, callback)
//     }, 2000)
//     return u;

// }

// function userServices(id, callback) {
//     let ob = {};
//     for (let obj of services) {

//         if (obj.id == id) {
//             ob = obj;
//         }

//     }
//     console.log(ob);
//     userServicesCost(ob, 3);
// }

// function userServicesCost(obj, quantity) {
//     let res = obj.price * quantity;
//     console.log(res);
//     return res;
// }

// // userServices(2, userServicesCost);
// // console.log(getUser("aditya", userServices(2, userServicesCost)));

// function promiseEx(name) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             let user = users.sort((name) => {
//                 users.name = name;
//                 resolve(user);

//             }, 2000)


//         })

//     })

// }

// function proService(user) {

//     return new Promise((resolve, rejected) => {
//         let ob = {};
//         setTimeout(() => {
//             for (let obj of services) {

//                 if (obj.id == id) {
//                     ob = obj;
//                 }

//             }
//             if (obj.length != 0) {
//                 resolve(obj)
//             }

//         }, 3000)

//     })


// }

// function servideCostPromise(quantity) {

//     return new Promise((resolve, reject) => {

//         let res = obj.price * quantity;
//         console.log(res);
//         resolve(res);


//     })

// }

// promiseEx("aditya").then(proService).then(console.log);

// let objArray = [

// ];
// let arrToObject = function (arr) {

//     let obj = {};
//     let demo = {};
//     for (let ar in arr) {

//         obj['name'] = ar;

//     }

//     return obj;

// }

// let objPush = function (obj) {
//     console.log(obj);
//     objArray.push(obj);


// }
// let res = arrToObject(['a', 'b'])
// objArray.map
// // console.log(res);
// console.log(objArray);
// // console.log(objArray);

// // obj.name = arr[ar];
// // console.log(obj);
// // demo = obj;
// // objPush(demo);

//1
// let objArray = [];

// let arrToObject = function (arr) {


//     for (let index of arr) {
//         let obj = {};
//         obj['name'] = index;
//         objArray.push(obj);
//     }

//     return objArray;
// }

// let resultArray = arrToObject(['a', 'b,', 'c']);
// console.log(resultArray);

// console.log(a);
// const a = "adi";
// //2

// let arr = ['a', 'b', 'c', 'd', 'e'];

// let returnObject = {};

// function convertObjToArray(arr) {
//     // let obj = {}
//     for (let i in arr) {
//         let prop = arr[i];
//         returnObject[prop] = i;


//     }

//     return returnObject;

// }

// console.log(convertObjToArray(arr));


// //3
// let arr = ["dog", "cat", "mouse", "sky", "eleven"]

// let voweLFunction = function (arr) {

//     let res = []
//     for (let ani of arr) {
//         let count = 0;
//         for (let i in ani) {
//             // console.log(i);
//             if (ani[i].includes('a' || 'e' || 'i' || 'o' || 'u')) {
//                 count++
//             }

//         }
//         if (count >= 2) {
//             res.push(ani);
//         }

//     }
//     return res;

// }

// let res = voweLFunction(arr);
// console.log(res);

// let arr = ["dog", "cat", "mouse", "sky", "eleven"];

// let vowelFunction = function (arr) {
//     let res = [];

//     for (let ani of arr) {
//         let count = 0;
//         for (let i in ani) {
//             if (['a', 'e', 'i', 'o', 'u'].includes(ani[i])) {
//                 count++;
//             }
//         }
//         if (count > 2) {
//             res.push(ani);
//         }
//     }

//     return res;
// }

// let res = vowelFunction(arr);
// console.log(res);

// let obj1 = {
//     name: "John",
//     age: 23,
//     degree: "CS"
// }

// Define the Second object
// let obj2 = {
//     age: 23,
//     degree: "CS"
// }

// function compareObj(ob, ob2) {

//     //compare using for in
//     // if (Object.keys(ob).length == Object.keys(ob2).length) {
//     //     for (i in ob2) {
//     //         if (ob[i] == ob2[i]) {
//     //             return true;
//     //         }
//     //         else {
//     //             return false;
//     //         }
//     //     }

//     // }
//     // else {
//     //     return false;
//     // }

//     //2nd way to comapre uning keys and every method
//     // return Object.keys(ob).every((val) => {
//     //     ob2.hasOwnProperty(val)  && ob[val] === ob2[val]

//     // })
// }

// let res = compareObj(obj1, obj2);
// console.log(res);

