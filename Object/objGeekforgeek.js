// const person = {
//     name: 'John',
//     course: 'GeeksForGeeks',
//     'age': 30,
//     address: {
//         street: '123 Main St',
//         city: 'New York',
//         state: 'NY',
//         zipCode: '10001'
//     }
// };

// console.log(person.name);
// console.log(person.course);
// console.log(person['age']);
// console.log(person.address.city);
// console.log(person['address']['zipCode']);   //accessing the properties

// const myObj = { 
//     foo: 'Hello', 
//     bar: 'World'
// }; 

// const prop = 'foo'; 
// myObj[prop] = 'GeeksForGeeks'; 
// console.log(myObj.foo);   //defined prop value to a variable and accessing that prop through obj

// const myObj = { 
//     prop1: 'Hello', 
//     prop2: 'World'
// }; 

// // Using object destructuring to access properties 
// const { prop1, prop2 } = myObj; 
// console.log(prop1); 
// console.log(prop2);

// const myObj = { 
//     prop1: 'Hello', 
//     prop2: 'World'
// }; 

// // Using object destructuring to access  
// // properties with different variable names 

// const { prop1: greeting, prop2: name } = myObj; 
// console.log(greeting);  
// console.log(name);

// class Button {
//     constructor(value) {
//         this.value = value;
//     }

//     click = () => {
//         console.log(this.value);

//     }
// }

// let button = new Button("hello");
// // setTimeout(button.click, 1000);
// console.log(button.click);
// // setTimeout(button.click(), 1000)


class CoffeeMachine {
    #waterLimit = 200;

    #fixWaterAmount(value) {
        if (value < 0) return 0;
        if (value > this.#waterLimit) return this.#waterLimit;
    }

    setWaterAmount(value) {
        this.#waterLimit = this.#fixWaterAmount(value);
    }

}

let coffeeMachine = new CoffeeMachine();

// can't access privates from outside of the class
coffeeMachine.#fixWaterAmount(123); // Error
coffeeMachine.#waterLimit = 1000; // Error