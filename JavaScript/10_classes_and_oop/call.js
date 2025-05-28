// call se reference hold kar sakte. Agar yaha pe call use nhi kiya to call stack me function ka execution context banega aur kaam hone ke badd use nikar diya jayega matlab uske andar ke sare variables bhi lost ho jayenge pr yaha hame vo conserve karna hai

function SetUserName(username) {
    this.username = username
    console.log("called");
}

function CreateUser(name, email, username) {
    SetUserName.call(this, username);
    this.email = email;
    this.name = name;
}

let chai = new CreateUser("chai", "chai@fb.com", "none")
console.log(chai);
