//iterate over object
//1st way for..in loop

const { log } = require("console");

let exampleObj = {
    book: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    genre: "Mystery"
};

// for (let prop in exampleObj) {
//     console.log(exampleObj[prop]);
// }    //--------------------------------for in loop


// Object.entries(exampleObj).map((ele, index) => {
//     let key = ele[0];
//     let val = ele[1]
//     console.log(key, val);
// })   //object.entries returns enumerable prop of objet


// Object.keys(exampleObj).forEach((prop) => {

//     console.log(prop + ": " + exampleObj[prop]);
// })   //Object.keys returns arrays of keys can access those key to get value

//creating object

//using constructor function
// function Vehicle(name, price) {
//     this.name = name;
//     this.price = price;

// }

// let honda = new Vehicle('honda', 1221);
// console.log(honda);


//using object create method
// let honds = Object.create(exampleObj)
// honds.book = "honda";
// honds.author = "aditya";
// console.log(honds);

//using class
// class Vehicle {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     show() {
//         return this.name + " " + this.price;
//     }
// }

// let a = new Vehicle("yamaha", 23000);
// console.log(a.show());


// let { book, ...arr } = exampleObj;
// console.log(arr);
// console.log(exampleObj);  //destructuring



///add array into object
// let obj = {
//     arr: []
// }
// obj.newArr = [];
// obj['newArr'].push([32, 34]);
// obj['arr'].push([1, 2, 45]);

// console.log(obj.newArr);



///how to get key in js object by its value

// let getKeysByValue(values, object){

//     for (let keys in object) {
//         if (object[keys] == values) {
//             console.log(keys);
//         }
//     }


// }



//filter array of objects
// let employees = [
//     { name: "Tony Stark", department: "IT" },
//     { name: "Peter Parker", department: "Pizza Delivery" },
//     { name: "Bruce Wayne", department: "IT" },
//     { name: "Clark Kent", department: "Editing" }

//     m1 : function M1() {
//         return "From M1";
//     }
//     this.m2 = function M2() {
//         return "From M2";
//     }
// ];

// let res = employees.filter((obj) => {
//     if (obj.department === "IT") return obj;
// })
// console.log(res[0].name);

// let resu = employees.filter(emp => emp.department == "IT");
// for (let i in resu) {
//     console.log(res[i].name);
// }



//how to get object length
// let Obj = {
//     "1_prop": "1_Val",
//     "2_prop": "2_Val",
//     "3_prop": "3_Val"
// };


// const objLength = Object.keys(Obj).length;
// console.log(objLength);

//2d array into array of objects

// let arr = [
//     ["John", 12],
//     ["Jack", 13],
//     ["Matt", 14],
//     ["Maxx", 15]
// ]

// let twoDArrayIntoObject = function (arr) {

//     let obj = {};

//     //using for...in
//     // for (let i in arr) {
//     //     obj[arr[i][0]] = arr[i][1];

//     // }
//     // return obj;


//     //using forEach
//     // arr.forEach(element => {
//     //     let key = element[0];
//     //     let val = element[1];
//     //     obj[key] = val;
//     // });


//     //using reduce
//     // return arr.reduce(
//     //     (acc, curr) => {

//     //         // Extract the key and the value
//     //         let key = curr[0];
//     //         let value = curr[1];

//     //         // Assign key and value
//     //         // to the accumulator
//     //         acc[key] = value;

//     //         // Return the accumulator
//     //         return acc;
//     //     },

//     //     // Initialize with an empty object
//     //     {}
//     // );

//     // return arr.reduce((acc, curr) => {
//     //     let key = curr[0];
//     //     let val = curr[1];

//     //     acc[key] = val;
//     //     return acc;
//     // },
//     //     {}

//     // )


// }
// let a = twoDArrayIntoObject(arr);
// console.log(a);


//how to convert 2 arrays into object
// let arr1 = ['a', 2, 3, 4];
// let arr2 = ["ram", "shyam", "sita", "gita"];

// function twoArraysIntoObject(arr1, arr2) {

//     let obj = {}
//     //1 way using map
//     // arr1.map((ele, indx) => {
//     //     obj[ele] = arr2[indx]
//     // })
//     // return obj;  //using map but this will only work with arr having number elements



//     //2 way using foreach
//     // if (arr1.length === arr2.length) {
//     //     arr1.forEach((ele, indx) => {
//     //         obj[arr1] = arr2[indx];

//     //     });
//     //     return obj;
//     // } else {
//     //     return null
//     // }

//     //3 way //using object.assign()

//     // return Object.assign(obj, ...arr1.map((value, index) => ({
//     //     [value]: arr2[index]
//     // })))
// }

// let res = twoArraysIntoObject(arr1, arr2);
// console.log(res);




//How to remove dublicate Objects from Associative Array in JavaScript ?

books = [
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "Java", author: "James" },
];

function removeDublicates(arr) {
    let deblicates = [];
    const titles = arr.map(({ title }) => title);
    let filterArry = arr.filter((book, index) => {
        if (book.title === arr[0]['title']) {
            deblicates.push(book);
        }
    })

    return deblicates;
}

let res = removeDublicates(books);
console.log(res);