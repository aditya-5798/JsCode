function callbackEx(a, b, callback) {
    setTimeout(() => {
        callback();
        console.log(a + b);
    }, 100)
}

console.log("Before Asynchronous Call");
function result() {
    console.log("hello");
}
callbackEx(10, 20, result);
console.log("After Asynchronous Call");

