"use strict";
// function a(x) {
//     return function (y) {
//         return function (z) {
//             return x + y + z;

//         }
//     }
// }

// console.log(a(5)(5)(7));

// function evaluate(operation) {

//     return function (a) {
//         return function (b) {

//             switch (operation) {
//                 case "addition": {
//                     return a + b;

//                 }
//                 case "multi": return a * b;
//                 case "divide": return a / b;
//                 case "substract": return a - b;
//                 default: return "invalid oprator";
//             }
//         }
//     }

// }
// console.log(evaluate("divide")(15)(7));


//infinite arguments function

// function add(a) {
//     return function (b) {
//         if (b) return add(a + b);
//         return a;
//     };
// }

// console.log(add(5)(2));

setTimeout(() => {
    console.log("settimeout example");
}, 3000);

let res = setInterval(() => {
    console.log("set interval");
}, 3000)

clearInterval(res);

let x = 50;
console.log(x);