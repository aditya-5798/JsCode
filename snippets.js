// const arr = ['s', 3, 4];
// const [y, z] = arr;
// console.log(y, z);


//2) object merging
// let data = { a: 1, b: 3 };
// const db = { v: 223, d: 333 };
// Object.assign(data, db);
// console.log(data);
// console.log(db);
// const ob = { ...data, ...db };
// data = { data, ...db }
// console.log(data);

//3)
// console.log(Promise.resolve(5));
// console.log(Promise.reject((err) => { console.log(err) }));


//4)
// let n = "Sd";

// function getN() {
//     console.log(n);
//     let n = "as";
// }

// getN();

// const a = { aAS: 'e' };
// console.log(delete a.aAS);
// delete a;
// console.log(a);


// const d = "true";
// console.log(typeof (d));

// let c = "ad";
// let d = `ad`;
// console.log(c === d);

// console.log(b);
// var a = 5;
// var b;


// function print() {
//     console.log("gunction");
//     console.log(print.data);
// }

// print.data = 3;
// print();

// const obk = { 1: "a", 2: "d" };
// console.log(obk['1']);
// console.log(obk[1]);
// console.log(obk.1);
// function sayHi() {
//     return (() => "hi")();
// }
// console.log(sayHi());


//deep cloning
// const obj = {
//     'a': 1,
//     'b': 2
// }
// const ob1 = {};
// Object.assign(ob1, obj);
// ob1.a = "adi";
// console.log(ob1);

// const ob2 = {};
// // Object.keys(obj).reduce((acc[key] = ob2[key], acc), {})
// Object.keys(obj).map((ele) => {
//     // console.log(acc, key);
//     ob2[ele] = obj[ele];
//     // (acc[key] = ob2[key], acc), {}
// })
// console.log(ob2);
// obj.a = "ad";
// console.log(obj);
// console.log(ob2);


//1) dublicate element in array
// function dublicateElement(arr) {
//     const dublicates = arr.filter((ele, index) => arr.indexOf(ele) !== index)
//     return dublicates;
// }

// const dub = dublicateElement([23, 4, 54, 56, 67, 67]);
// console.log(dub);

// //2)second larget element from array

// const secondLarget = (arr) => {
//     return arr.reduce((acc, curr) => {
//         if (curr > acc.largest) {
//             acc.secondLargest = acc.largest;
//             acc.largest = curr;
//         } else if (curr > acc.secondLargest && curr !== acc.largest) {
//             acc.secondLargest = curr;
//         }
//         return acc;
//     }, { largest: -Infinity, secondLargest: -Infinity }).secondLargest;
// }

// const secondLar = secondLarget([23, 54, 56, 5667, 7]);
// console.log(secondLar);

//Find a peak element which is not smaller than its neighbours

// function PeakElement(arr) {
//     let peakedArray = [];
//     peakedArray = arr.filter((ele, indx) => {
//         for (let i = indx; i <= indx; i++) {
//             // console.log(arr[i - 1] < ele || arr[i - 1]);
//             if ((arr[i - 1] < ele) && (arr[i + 1] < ele)) {
//                 console.log(arr[i - 1], ele, arr[i + 1]);
//                 return ele;
//             }
//         }
//     })

//     return peakedArray;

// }


// const arr = PeakElement([10, 20, 15, 2, 23, 90, 67]);
// console.log(arr);

// const arrre = PeakElement([10, 20, 15, 2, 23, 90, 67]);
// console.log(arrre);



//Program to find the minimum (or maximum) element of an array

// function minMaximumEle(arr) {

//     // const sorted = arr.sort((a, b) => a - b);
//     // const minimun = sorted[0];
//     // const maximum = sorted[sorted.length - 1];

//     return arr.reduce((acc, curr) => {
//         if (curr < acc.smallest) {
//             acc.smallest = curr;
//         }
//         if (curr > acc.largest) {
//             acc.largest = curr;
//         }
//         return acc;
//     }, { smallest: arr[0], largest: arr[0] });

// }
// const res = minMaximumEle([10, 423, 6, 46, 34, 23, 13, 53, 4]);
// console.log(res);


//array reverse

// function reverseArray(arr) {
//     // const reverse = arr.reverse();
//     // return reverse;
//     let rev = [];
//     arr.map((ele, indx, arr) => rev.unshift(ele));
//     return rev;
// }

// const re = reverseArray([23, 34, 545, 5, 5656, 45, 4]);
// console.log(re);


//K’th Smallest/Largest Element in Unsorted Array

// function KthLargestandSmallest(arr, k) {

//     arr.filer((ele,))

// }

// const arr = KthLargestandSmallest([7, 10, 4, 3, 20, 15], 3);


//find missing number from array

// function missingNumberFromArray(arr) {
//     const n = arr.length + 1;
//     let naturalSum = (n / 2) * (2 * Math.min(...arr) + (n - 1));
//     let sum = 0;
//     arr.forEach((ele) => sum += ele)
//     return naturalSum - sum;
// }


// const missing = missingNumberFromArray([6, 1, 2, 8, 3, 4, 7, 10, 5]);
// console.log(missing);


//find dublicates in array

// function finddublicate(arr) {
//     const dublicates = arr.filter((ele, indx) => arr.indexOf(ele) !== indx);
//     return dublicates;
// }

// const res = finddublicate([2334, 45, 54, 34, 34, 45]);
// console.log(res);

//leader element in array

// function leaderElement(arr) {
//     let leader = arr[0];
//     for (let j = 0; j < arr.length - 1; j++)
//         for (let i = j + 1; i < arr.length - 1; i++) {
//             if (arr[i] < arr[j]) {
//                 console.log(arr[i], j);
//                 break;

//             } else {
//                 console.log(arr[j]);
//                 leader = arr[j];
//             }

//         }


//     return leader

// }

// const res = leaderElement([23, 34, 54, 54, 3, 76, 3, 2]);

// console.log(res);



//Equilibrium Point

// function equalibriumPoint(arr) {
//     const n = arr.length;
//     // Calculate the total sum of the array
//     let totalSum = arr.reduce((acc, cur) => acc + cur, 0);
//     // Initialize left sum and right sum
//     let leftSum = 0;
//     let rightSum = 0;
//     // Iterate through the array to find equilibrium point
//     for (let i = 0; i < n; i++) {
//         // Update right sum by subtracting current element
//         rightSum = totalSum - leftSum - arr[i];
//         console.log(rightSum);
//         // Check if left sum is equal to right sum
//         if (leftSum === rightSum) {
//             return arr[i]; // Return the equilibrium point
//         }

//         // Update left sum by adding current element
//         leftSum += arr[i];
//         console.log(leftSum);
//     }

//     return -1; // If no equilibrium point found
// }





// let res = equalibriumPoint([1, 3, 5, 2, 2]);
// console.log(res);


//second largest element

// function secondLarget(arr) {

//     let largest = arr[0];
//     let secLar = arr[1]; // Initialize secLar with the second element
//     arr.forEach(element => {
//         if (element > largest) {
//             secLar = largest; // Update secLar to the previous largest value
//             largest = element; // Update largest to the new largest value
//         } else if (element > secLar && element !== largest) {
//             secLar = element; // Update secLar if element is greater than previous secLar and not equal to largest
//         }
//     });
//     return secLar;


//     // const largest = Math.max(...arr);
//     // const filteredArr = arr.filter(x => x !== largest);
//     // return Math.max(...filteredArr);

//     //const sortedArr = arr.sort((a, b) => b - a);
//     // return sortedArr[1];
// }

// const res = secondLarget([12, 35, 1, 10, 34, 1]);
// console.log(res);


//Count pairs with given sum

// function countSum(arr, k) {
//     let count = 0;
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             console.log(arr[i] + arr[j]);
//             if (arr[i] + arr[j] === k) {

//                 count++;
//             }
//         }
//     }
//     return count;
// }

// const res = countSum([1, 5, 7, 1], 6);
// console.log(res);


//array elements presents in all array

function elementInAllArray(arr1, arr2, arr3) {
    const resArr = [];
    arr1.forEach((ele) => {
        arr1.forEach((ele1) => {
            if (ele == ele1) resArr.push(ele);
        })
    })

    return resArr;
}

const A = [1, 5, 10, 20, 40, 80]
const B = [6, 7, 20, 80, 100]
const C = [3, 4, 15, 20, 30, 70, 80, 120]
const resArr = elementInAllArray(A, B, C);
console.log(resArr);