var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

let getLengthOfObject = function (obj) {
    let count = 0;
    if (typeof obj === 'object') {
        for (let prop in obj) {
            count++;
        }
        return count
    }
}

let aa=getLengthOfObject(student);
console.log(aa);