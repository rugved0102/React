// let score = 33           // 33
// let score = "33abc"      // NaN
// let score = null         // 0
// let score = undefined    // NaN
// let score = true         // 1
let score = "rugved"     // NaN
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// let isLoggedIn = 1           // true
// let isLoggedIn = "rugved"    // true
// let isLoggedIn = ""          // false
let isLoggedIn = null           // false
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));

// *********************** Operations ********************************************

let value = 3
let negValue = -value
console.log(negValue);
let str1 = "hello"
let str2 = " Rugved"

let str3 = str1+ str2
console.log("1" + 2);           //12
console.log(1 + "2");           //12
console.log(1 + "2");           //12
console.log(1 + "2" + 2);       //122
console.log(1 + 2 + "2");       //32

console.log(true);              // true
console.log(+true);             // 1
console.log(+"");               // 0

let gameCounter = 100
++gameCounter;
gameCounter++;
console.log(gameCounter);

// To study -> https://tc39.es/ecma262/multipage/abstract-operations.html

