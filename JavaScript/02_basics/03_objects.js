// singleton
// Literals ke taraha declare karte to singleton nhi banta hai
// Constructor se banega to singleton banta hai
mySymbol = Symbol("mySymbol")
// object literal
const obj1 = {name: "Rugved", age: 23, isMarried: false, [mySymbol]: "mySymbol"}
console.log(obj1) // {name: "Rugved", age: 23, isMarried: false}
console.log(obj1.name) // Rugved
// console.log(obj1[name]) // error: name is not defined because it is stored as a string in the object that's why we used "name"
console.log(obj1["name"]) // Rugved
console.log(obj1[mySymbol]) // Symbol ko aise hi access kar sakte hai object me key ke through
console.log(typeof obj1[mySymbol]) // mySymbol;
console.log(typeof mySymbol) // symbol;


// Object.freeze(obj1) // freeze the object, it will not allow to modify the object
obj1.name = "Nigga" // it will not modify the object
console.log(obj1); // {name: "Rugved", age: 23, isMarried: false}

obj1.greeting = function() {
    console.log("Hello Js user");
};
// obj1.greeting(); // Hello Js user
obj1.greetingTwo = function() {
    console.log(`Hello Js user Two, ${this.name}`);
}
console.log(obj1.greetingTwo()); // Hello Js user Two, Nigga
// why we use `` instead of "" or ''?
// because we can use ${} to access the variable inside the string