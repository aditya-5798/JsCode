//1) find dublicated element from array

// function dublicateElement(arr) {
//     let index = 0;
//     const dub = arr.filter((ele, index, arr) => arr.indexOf(ele) !== index)
//     return dub;
// }
// const re = dublicateElement([1, 23, 34, 45, 5, 1, 5]);
// console.log(re);


//2) min and max from given array

// function minMaxFromArray(arr) {
//     let min = arr[0];
//     let max = arr[0];
//     arr.filter((ele, indx, arr) => {
//         if (ele < min) {
//             min = ele;
//         }
//         else if (ele > max) {
//             max = ele;
//         }
//     })
//     return {
//         min, max, arr1
//     }
// }

// const re = minMaxFromArray([1111, 15, 5, 41, 4, 8545, 5, 111]);
// console.log(re);


//3) second largest value from array

function secondLargestValue(arr) {
    let secondLar;
    arr.reduce((pre, curr, currindx, arr) => {
        console.log(pre, curr);
        console.log(currindx);
        let accum = pre > curr ? pre : curr;
        console.log(accum);
        if (arr.length == currindx) {
            secondLar = accum;
        }
        return accum;

    })
    return secondLar;
}

const res = secondLargestValue([55, 6, 77, 8, 99]);
console.log(res);