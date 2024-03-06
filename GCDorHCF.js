const gcdorHcf = function (n1, n2) {
    let n1arr = [];
    let n2arr = [];

    for (let i = 1; i < n1 / 2; i++) {
        if (n1 % i == 0) {
            n1arr.push(i);
        }
    }

    for (let i = 1; i < n2 / 2; i++) {
        if (n2 % i == 0) {
            n2arr.push(i);
        }
    }

    for (let i = n1arr.length - 1; i > 0; i--) {
        for (let j = n2arr.length - 1; j > 0; j--) {
            if (n1arr[i] == n2arr[j]) {
                console.log(`gcd is ${n1arr[i]}`);
                break;
            }
        }
    }
    console.log("hello");


}

gcdorHcf(24, 24);