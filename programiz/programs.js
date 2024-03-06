//1)  JavaScript Program to Check Prime Number
// const checkPrime = function (num) {
//     let isPrime = true;
//     for (let i = 2; i < num / 2; i++) {
//         if (num % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     return isPrime;
// }

// console.log(checkPrime(7)); //true
// console.log(checkPrime(8)); //false


//2) JavaScript Program to Print All Prime Numbers in an Interval (1-100)
// const primeNumberBetweenInterval = function (num1, num2) {
//     const primeArray = [];
//     for (let i = num1; i < num2; i++) {
//         let isPrime = true;
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (i > 1 && isPrime) primeArray.push(i);

//     }
//     return primeArray;
// }
// console.log(primeNumberBetweenInterval(2, 100));


//3)JavaScript Program to Find the Factorial of a Number

// const factorial = function (num) {
//     let fact = 1;
//     for (let i = num; i > 1; i--) {
//         fact = fact * num;
//     }
//     return fact;


// }

// console.log(factorial(5));

//4) fibonaci series
// const fibonaciSeries = function (num) {
//     const arr = [0, 1];

//     for (let i = 0; i < num; i++) {
//         arr.push(arr[i] + arr[i + 1]);
//     }

//     return arr;

// }

// console.log(fibonaciSeries(10));


//5)  Armstrong Number 1*1*1+5*5*5+3*3*3=153

// const armstrongNumber = function (nu) {
//     let num = nu;
//     let sum = 0;
//     while (num != 0) {
//         let rem = num % 10;
//         sum = sum + rem ** 3;
//         console.log(sum);
//         num = Math.floor(num / 10)
//     }
//     console.log(num);
//     return (sum === nu) ? true : false;
// }



// console.log(armstrongNumber(154));

//6)JavaScript Program to Check if the Numbers Have Same Last Digit

const sameLastDigit = function (...nums) {

    const res = [];
    // for (let i of nums) {
    //     res[i] = i % 10;

    // }

    const arr = nums.map((num) => {
        return num % 10;
    })
    // console.log(arr);

    const result = arr.filter((a, b) => {
        let val = a;
        return val === a;
    })
    return result;


}

console.log(sameLastDigit(54, 554, 23));