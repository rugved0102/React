const score = 400
const balance = new Number(100)
// console.log(balance);
console.log(balance.toString().length);
const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

// +++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

console.log(Math.random());
console.log(Math.random() * 10); // 0-10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // 10-20