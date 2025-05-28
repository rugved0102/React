class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        return `USERNAME is ${this.username}`;
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