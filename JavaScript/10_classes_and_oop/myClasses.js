// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword() {
//             return `${this.password}abc`
//         }
// }

// const chai = new User("chai","chai@google.com", 123);
// console.log(chai.encryptPassword());

function User(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

User.prototype.encryptPassword = function() {
        return `${this.password}abc`
    }

    let tea = new User("tea","tea@gmail.com",123)
    console.log(tea.encryptPassword());
    

// ## 🔹 Learning Prototypes vs Classes in JavaScript 

// ### 🔸 Two ways to define "classes" in JavaScript:
// 1. **ES6 Class Syntax** — cleaner, more readable, looks like traditional OOP.
// 2. **Function Constructor + Prototype** — older but still widely used under the hood.

// ### 🔸 Key Learnings:

// - Both approaches allow creation of **object templates**.
// - `this` inside constructor points to the newly created object.
// - **Prototype** is used to add methods that are **shared among all instances** — avoids memory duplication.
// - `User.prototype.encryptPassword = function() {...}` attaches the method to the prototype, not each object.

// ### 🔸 Why use Prototype:
// - Saves memory by defining the method **once**.
// - Keeps method definitions out of the constructor.

// ### 🔸 Takeaway:
// - Both class and function-constructor methods achieve the same goal.
// - Under the hood, **JavaScript classes use prototypes** — they're syntactic sugar.


