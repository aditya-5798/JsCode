// let one = function (setp2) {
//     console.log("step 1 called first");
//     setp2();
// }

const { log } = require("async");


// let two = function () {
//     console.log("step 2");
// }
// //callbacks

// one(two);

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocklet", "penuts"]
}


// let order = function (fruit, prod) {
//     setTimeout(() => {
//         console.log(`customer has selected  ${stocks.fruits[fruit]} start prodcution`);
//         prod();
//     }, 2000);

// }

// let production = function () {
//     setTimeout(() => {
//         console.log("prepared the order of icecream")
//         setTimeout(() => {
//             console.log("fruits has been chopped");
//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//                 setTimeout(() => {
//                     console.log("machine started");
//                     setTimeout(() => {
//                         console.log(`${stocks.holder[0]} selected`);
//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} selected`);
//                             setTimeout(() => {
//                                 console.log(`serve the icecream`);
//                             },1000)
//                         }, 1000)
//                     }, 2000)
//                 }, 1000)
//             }, 1000)
//         }, 2000)
//     }, 1000)

// }
// //callback hell 
// order(0, production);

let is_shop_open = false;

let order = (time, work) => {

    return new Promise((resolve, reject) => {

        if (is_shop_open) {
            setTimeout(() => {
                resolve(work())
            }, time)

        }
        else {
            reject(console.log("shop is closed"))
        }

    })

}

order(3000, () => console.log(`${stocks.fruits[2]} was selected`))
    .then(() => {
        return order(1000, () => { console.log("production has started"); })
    })
    .then(() => {
        return order(1000, () => console.log(`fruits was chopped`))
    })
    .then(() => {
        return order(1000, () => console.log(`holder selecetd ${stocks.holder[1]}`))
    })

    .then(() => {
        return order(1000, () => console.log(`topping ${stocks.toppings[1]}`))
    })

    .then(() => {
        return order(1000, () => console.log(`serve ice-cream`))
    })
    .catch(() => {
        console.log("customer left");
    })
    // .finally(() => {
    //     console.log("day end shop is closed");
    // })

