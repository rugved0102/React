function MultiplyBy5(num) {
    return num * 5;
}

// function, array, string ye sab object hii hai

MultiplyBy5.power = 2;

console.log(MultiplyBy5(5));        // ✅ 25
console.log(MultiplyBy5.power);     // ✅ 2
console.log(MultiplyBy5.prototype); // ✅ {}

function createUser(username,score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++; // jo const chai aur tea hai useme kisko increment krna vo confusion hatane ke liye this keyword use kiya hai matlab jisko increment karna hai vo kr sakta
}
const chai = new createUser("chai",25)
const tea = new createUser("tea",25)

createUser.prototype.printMe = function() {
    console.log(`score is ${this.score}`);
}

chai.printMe() // abhi tk vo prototype me properties inject hui hai but creatUser se chai me apne values transfer ki tab apne bataya nhi ki additional properties aai hai. Ye batane ka kaam new keyword karta hai

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/