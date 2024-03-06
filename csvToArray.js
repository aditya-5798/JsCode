const csvToArray = function (data) {
    data.split(',').push(data)
    let arr = [];
    for (const i in arr) {
        arr[i] = data.split(',').push(data)
    }
    return arr;

}

console.log(csvToArray('a, b, c, d'));
