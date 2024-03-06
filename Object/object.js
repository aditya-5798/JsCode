//1) Write a JavaScript program to list the properties of a JavaScript object.
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };


// for (let prop in student) {
//     console.log(prop);
// }

// console.log(Object.entries(student)); //gives key value pair for each prop and value as array as whole array
// // [ [ 'name', 'David Rayy' ], [ 'sclass', 'VI' ], [ 'rollno', 12 ] ]
// console.log(Object.getOwnPropertyNames(student)); //gives array property names
// // [ 'name', 'sclass', 'rollno' ]
// console.log(Object.keys(student));//gives array property names
// // [ 'name', 'sclass', 'rollno' ]

//2) Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };


// console.log(Object.entries(student));
// delete student.rollno;   //to delete object propoperty
// console.log(Object.entries(student));

// console.log(student);//{ name: 'David Rayy', sclass: 'VI' }

//3)Write a JavaScript program to get the length of a JavaScript object.
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };

// console.log(Object.keys(student).length);//gives count of prop of object


//4)Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }];

// //looping over array of object in 4 ways using for-in, for-of,forEach,normal for loop
// for (let prop in library) {
//     console.log(library[prop].author, " ", library[prop].title, " ", library[prop].readingStatus);
// }

// for (let i = 0; i < library.length; i++) {
//     console.log(library[i]?.author);
// }


// library.forEach((i, n) => {
//     console.log(i.author, " ", i.title, " ", i.readingStatus);
// })

// console.log('0----------------------------------');
// for (let prop of library) {
//     console.log(prop.author);
// }


//5)Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

// class Cyliner {

//     height;
//     radius;
//     constructor(radius, height) {
//         this.radius = radius;
//         this.height = height;

//     }

//     volume() {
//         return 3.14 * this.radius * this.height;
//     }

// }

// let c1 = new Cyliner(23, 34);
// console.log(c1.volume());


//6)Write a JavaScript program to sort an array of JavaScript objects.

// var library = [
//     {
//         title: 'The Road Ahead',
//         author: 'Bill Gates',
//         libraryID: 1254
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         libraryID: 4264
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3245
//     }];

// let sortedLiberary = [];

// // for (let prop = 0; prop < library.length; prop++) {
// //     let count = library[prop].libraryID;
// //     for (let i = prop + 1; i < library.length; i++) {
// //         if (count < library[i].libraryID) {
// //             i++;
// //         }
// //         else if (count > library[i].libraryID) {
// //             count = library[i].libraryID;
// //         }
// //     }
// //     console.log(count);
// //     if (library[prop].libraryID == count) {
// //         sortedLiberary.push(library[prop]);
// //     }



// // }

// library.sort((a, b) => {
//     return a.libraryID - b.libraryID;
// })

// library.forEach((i, n) => {
//     sortedLiberary.push(i);
// })

// console.log(sortedLiberary);


//7) Write a JavaScript function to print all the methods in a JavaScript object.

// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

// function findAllMethods(obj) {
//     return Object.getOwnPropertyNames(obj).filter(function (property) {
//         return typeof obj[property] == "function";
//     });
// }



// console.log(findAllMethods(Array));

//8)Write a JavaScript function to retrieve all the values of an object's properties.
// var library =
// {
//     title: 'The Road Ahead',
//     author: 'Bill Gates',
//     libraryID: 1254
// }
//     ;


// console.log(Object.values(library)); //gives prooperty values
// console.log(Object.toString(library)); //toString returns string representation of a object

// console.log(Object.entries(library)); //key value pair of object and properties


//9) Get a copy of the object where the keys have become the values and the values the keys

// var library =
// {
//     title: 'The Road Ahead',
//     author: 'Bill Gates',
//     libraryID: 1254
// };

// let libcopy = {};

// let lib = Object.entries(library);

// for (let i in lib) {
//     libcopy.
// }


//10) Write a JavaScript function to check whether an object contains a given property.
// let library =
// {
//     title: 'The Road Ahead',
//     author: 'Bill Gates',
//     libraryID: 1254
// };

// console.log(Object.getOwnPropertyNames(library));
// console.log(hasOwnProperty.call(library));

