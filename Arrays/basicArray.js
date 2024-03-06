//1)Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(Array.isArray([1, 2, 4, 0])); //Array.isArray(obj) checks if provided argument is array or not

// console.log(Array.isArray('w3resource'));

//2) Write a JavaScript function to get the first element of an array.
//Passing the parameter 'n' will return the first 'n' elements of the array.

// let firstNElements = (arr, n) => {
//     let count = 0;
//     let newArr = [];
//     for (let i of arr) {

//         if (count < n) {
//             newArr.push(i);
//         }
//     }
//     return newArr;

// }

// console.log(firstNElements([7, 9, 0, -2]));
// console.log(firstNElements([], 3));
// console.log(firstNElements([7, 9, 0, -2], 3));
// console.log(firstNElements([7, 9, 0, -2], 6));
// console.log(firstNElements([7, 9, 0, -2], -3));

//3)Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]


// let array_Clone = function (a) {
//     let ar = [];
//     ar = a.slice(0); //slice method=takes 2 argument start and end index and copies that portion of array and saves it in var
//     return ar;

// }

// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));


//4)Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]


// let lastElementNcount = function (arr, n) {

//     let newArray = [];
//     let count = 0;
//     if (n > 0) {
//         for (let i = arr.length - 1; i >= 0; i--) {
//             // console.log(i);
//             if (count < n) {
//                 newArray.push(arr[i]);
//                 count++;

//             }

//         }

//         return newArray;
//     }
//     else {
//         return [];
//     }

// }
// let lastElementRemoveFromFront = function (arr, n) {
//     if (n == 0) {
//         return [];
//     }
//     else {


//         return arr.slice(arr.length - n, arr.length);
//     }

// }


// console.log(lastElementNcount([7, 9, 0, -2]));
// console.log(lastElementNcount([7, 9, 0, -2], 3));
// console.log(lastElementNcount([7, 9, 0, -2], 6));
// console.log("-----------------------------------------");
// console.log(lastElementRemoveFromFront([7, 9, 0, -2]));
// console.log(lastElementRemoveFromFront([7, 9, 0, -2], 3));
// console.log(lastElementRemoveFromFront([7, 9, 0, -2], 6));


//5)Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
// let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join(", "));
// console.log(myColor.join("+ ")); //join method takes all array element converts into string and add delimeter between them

//Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.
// For example if you accept 025468 the output should be 0-254-6-8.
// let numberToArray = function (num) {
//     let newAr = [];
//     while (num != 0) {
//         let n = (num % 10);  //gets remainder , perfect number
//         // console.log(n);
//         if (n % 2 == 0) {
//             // console.log(n);
//             newAr.unshift(n + '-'); //unshift adds at first
//             // console.log(newAr);
//         }
//         else {
//             // console.log(n);
//             newAr.unshift(n);
//         }

//         num = Math.floor(num / 10);  //math.floor round of value with closest lowest integer
//         //   console.log(num);
//         // Math.round(x)	Returns x rounded to its nearest integer
//         // Math.ceil(x)	Returns x rounded up to its nearest integer
//         // Math.floor(x)	Returns x rounded down to its nearest integer
//     }
//     return newAr.join(""); //converts array to string

// }

// console.log(numberToArray(10151468));



//6) Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
// Click me to see the solution

// let arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// let sortedArray = [];

// sortedArray = arr.sort((a, b) => {
//     console.log(a, b);
//     console.log(a - b);
//     return a - b;
// });
// console.log(sortedArray);

//7)Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 'a', 2, 4, 9, 3];



// let ele;
// let fcount = 0;
// for (let i = 0; i < arr1.length; i++) {
//     let count = 0;
//     let elCount = 0;
//     for (let j = i + 1; j < arr1.length; j++) {
//         if (arr1[i] == arr1.at(j)) {
//             count++;
//             ele = arr1[i];
//         }
//     }
//     if (count > elCount) {

//         ele = arr1[i];
//     }
// }
// console.log(ele, " ", fcount);


//8)Write a JavaScript program that accepts a string as input and swaps the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// let changeCase = (str) => {

//     let newStr = '';
//     const arr = str.split('');

//     arr.map((x) => {
//         if (x == x.toUpperCase()) {
//             // console.log(x);
//             newStr = newStr + (x.toLowerCase());
//         }
//         else if (x == x.toLowerCase()) {
//             newStr = newStr + (x.toUpperCase());
//         }
//     })
//     return newStr;

// }

// console.log(changeCase('The Quick Brown Fox'));

//9)Write a JavaScript program that prints the elements of the following array.

// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1";

// const nestedArray = (arr) => {
//     let newArr = [];

//     for (let i in arr) {
//         for (let j in arr[i]) {
//             console.log(arr[i][j]);
//         }
//     }

// }

// (nestedArray(([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]])));


//10) Write a JavaScript program to find the sum of squares of a numerical vector

// function sumOFSquares(arr) {
//     let sum = 0;
//     for (let i in arr) {

//         sum = sum + (i * i);
//     }
//     return sum;

// }

// console.log(sumOFSquares([0, 1, 2, 3, 4]));

// 11)Write a JavaScript program to compute the sum and product of an array of integers.
// let sumAndProduct = function (arr) {
//     let sum = 0;
//     let product = 0;
//     for (let i in arr) {
//         sum = sum + i;
//         product *= i;

//     }
//     return sum; return product;
// }


// console.log(sumAndProduct([1, 2, 3, 4, 5]));


//12) Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// let dublicateElement = (arr) => {

//     for (let i = 0; i < arr.length; i++) {
//         // let count = 0;
//         // let position = [];
//         // for (let j = i + 1; j < arr.length; j++) {
//         //     if (arr[i] == arr[j].toLowerCase()) {
//         //         count++;
//         //         position[i] = j;

//         //     }

//         // }
//         // if (count > 1) {
//         //     arr.shift(i);
//         // }

//         arr.filter((ele) => {
//             if (i == ele) {

//             }
//         })

//     }
//     return arr;

// }

// console.log(dublicateElement([1, 23, s, ss, S, s, 1]));



//replace item from array
