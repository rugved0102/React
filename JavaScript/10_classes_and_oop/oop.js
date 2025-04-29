const user = {
    username : "Rugved",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function() {
        console.log("Got user details from database");
        console.log(`${this.username}`);
        console.log(this);
        
        
    }
}

// console.log(user.username);
console.log(user.getUserDetails());

console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username // this.username is the variable and username is the value that we will pass
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this // ye kiya na kiya return hota hii hai by default
}

// const userOne = User("Amit",2,true)
// const userTwo = User("Raj",11,false) // userOne ke values override kr dega ye
// console.log(userOne);

const userOne = new User("Amit",2,true)
const userTwo = new User("Raj",11,false) // constructor func hamesha hame ek naya instance deta hai
// new keyword se constructor func call hota hai
// new keyword use kiya to ek naya empty object create hota hai jise instance kehete hai

console.log(userOne);
console.log(userTwo);
console.log();


