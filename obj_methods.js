// var obj = {
//     firstName: 'aditya',
//     lastName: 'Schmedtmann',
//     birthYear: 1998,
//     job: 'developer',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,

//     calAge: function () {
//         return this.age = 2022 - this.birthYear
//     },

//     objSummery: function () {
//         console.log(`${this.firstName} has ${this.calAge()} working as a ${this.job} has ${this.hasDriversLicense ? 'a' : 'no'} licence`);
//     }

// }

// console.log(obj.calAge());
// console.log(obj.age);
// obj.objSummery();
// for (i in obj.friends) {
//     if (obj.friends.filter()) {
//         console.log("true");
//     }

// }


var mark = {
    fullName: "mark miller",
    mass: 78,
    height: 1.68,
    bmi: function () {
        return BMI = this.mass / (this.height ** 2)
    }
}

var rock = {
    fullName: "rock miller",
    mass: 87,
    height: 1.98,
    bmi: function () {
        return BMI = this.mass / (this.height ** 2)
    }
}
console.log(mark.bmi());
console.log(rock.bmi());
console.log(mark.bmi() > rock.bmi() ? `marks bmi is higher ${mark.bmi()}` : `rock  bmi is higher  ${rock.bmi()}`);
