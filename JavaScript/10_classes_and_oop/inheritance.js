class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
         console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email,password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addSubject() {
        console.log("New subject added");  
    }
}

let rugved = new Teacher("rugved","rugved@gmail.com",123);
rugved.addSubject();

let atharv = new User("athx","athx@google.com",243)
atharv.logMe()

console.log(rugved instanceof Teacher);
