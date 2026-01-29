let usrnum = prompt("Enter Number: ")

let arr = [];

for (let i = 1; i <= usrnum; i++) {
    arr[i] = i;
}

for (let ar of arr) {
    console.log(ar);
}

let sum = arr.reduce((prv, cur) => {
    return prv + cur;
});

console.log("Sum of All Array Element.....");
console.log(sum);


let product = arr.reduce((prv, cur) => {
    return prv * cur;
});

console.log("Product Of All Array Element....");
console.log(product);