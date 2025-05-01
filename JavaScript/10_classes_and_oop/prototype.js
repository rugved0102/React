// 🔹 Easy Explanation of JavaScript's [[Prototype]]
// Every object in JavaScript has a hidden link to another object. This link is called [[Prototype]] (or __proto__).
// When you try to use a property or method on an object, JavaScript first looks inside that object.
// If it doesn't find it there, it starts looking in the prototype — the object it's linked to.
// It keeps going up the chain of prototypes until it finds the property or reaches the end (null).

let myName = "Rugved     "

console.log(myName.length); // 11
console.log(myName.trim().length); // 6 // low IQ vala kaam

// muze ek method banani hai jis se har string pr me lagau to leading spaces na gin kr true Length return kare
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength()
"JaiShreeRam".trueLength()


let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor : "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

console.log(heroPower.thor.length);

Object.prototype.rugved = function() {
    console.log(`rugved is present in all objects`);
    
}
heroPower.rugved()
myHeros.rugved()


Array.prototype.heyRugved = function() {
    console.log(`rugved says hello`);
    
}
// 🟢 You added a custom method to all arrays in JavaScript by extending Array.prototype.

// ✅ Result: Any array (like myHeros) can now call .heyRugved() — because it inherits from Array.prototype.
myHeros.heyRugved()


// Inheritance

const User = {
    name: "rugved",
    email: "rugved@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false  
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User

// Ye upar wala purne jamane me use krte the

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)  // prototypal inheritance

