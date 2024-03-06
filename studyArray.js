let arr = ["1", "3", 3, 5];

//Add and remove from last Push() and Pop()
// arr.push("12");  //adding element
// console.log(arr);

// arr.pop();
// console.log(arr);


//Add at first and remove at first   Unshift() shift()
// arr.unshift("a"); //add at first 
// console.log(arr);

// arr.shift(); //remove at first
// console.log(arr);


//looping an Array
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


//inbuilt looping function   map() filter()

let num = [1, 2, 3, 5, 6, 7];

let newARR = num.map((ele) => {
    return ele;  // it returns every element and assign it  to newArr
    // console.log(ele);
})

console.log(newARR);