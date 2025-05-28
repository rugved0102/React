class User {
    constructor(username) {
        this.username = username
    }

    static creatId() {
        console.log(123);
    }
}

const chai = new User("chai")
// chai.creatId()    // Not works, chai is an instance — cannot access static method.
User.creatId()       // User is the class — it can access static method.

// ## 📌 What is `static`?
// - `static` methods belong **to the class itself**, **not** to instances of the class.
// - You **can't call** a static method using an object of the class.
// - You **can only call** it using the class name.