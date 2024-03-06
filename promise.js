// let p = new Promise((resolve, reject) => {
//     let x = 1;
//     let y = 2;
//     if (x === y) {
//         resolve();
//     }
//     else {
//         reject()
//     }
// }).then((value) => {
//     console.log("promise resolve");
// }).catch((Error) => {
//     console.log("Error");
// })



//2)
// let p = new Promise((resolve, reject) => {
//     let x = 1;
//     let y = 2;
//     if (x === y) {
//         resolve();
//     }
//     else {
//         reject()
//     }
// }).then((value) => {
//     console.log("promise resolve");
// }, (Error) => {
//     console.log("error occured");
// }).catch((Error) => {
//     console.log("Error");
// })

//3)
// function getUsers() {
//     return new Promise((resolve, reject) => {
//         let users = [
//             { username: 'john', email: 'john@test.com' },
//             { username: 'jane', email: 'jane@test.com' },
//         ]

//         if (!users) {
//             setTimeout(() => {
//                 resolve(users)
//             }, 3000)

//         } else {
//             reject("not available")
//         }


//     })
// }

// let p = getUsers();
// p.then((res) => {
//     console.log(res);
// }).catch(() => {
//     console.log("error occured");
// });

//3)
// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
// });
// console.log('end');


//4
// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
// })
// promise1.then(res => {
//     console.log(res)
// })
// console.log('end'); //asynchronous code will execute after synchronous code


//5
// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
// })
// promise1.then(res => {
//     console.log(2)
// })
// console.log('end');
//The resolve method has never been called, so promise1 is always in the pending state.
//So promise1.then(…) has never been executed. 2 is not printed out in the console.

//6
// console.log('start')
// const fn = () => (new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
// }))
// console.log('middle')
// fn().then(res => {
//    console.log(res)
// })

// console.log('end')

//7
// console.log('start')
// setTimeout(() => {
//     console.log('setTimeout')
// })
// Promise.resolve().then(() => {
//     console.log('resolve')
// })
// console.log('end');
//settimeOut will execute after promise because it is low priority task

//8)
// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//       console.log("timerStart");
//       resolve("success");
//       console.log("timerEnd");
//     }, 0);
//     console.log(2);
//   });
//   promise.then((res) => {
//      console.log(res);
//   });
//   console.log(4);

//9

// let promise = new Promise(function (resolve, reject) {
//     resolve(1);

//     setTimeout(() => resolve(2), 1000); //only one resolve
// });

// promise.then((val) => {
//     console.log(val);
// });

//10
// function getUsers() {
//     return new Promise((resolve, reject) => {

//         resolve([
//             { username: 'john', email: 'john@test.com' },
//             { username: 'jane', email: 'jane@test.com' },
//         ]);

//     });
// }

// function onFulfilled(users) {
//     console.log(users);
// }

// const promise = getUsers();
// promise.then(onFulfilled);


