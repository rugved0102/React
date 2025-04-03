// const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = 1234567890;
tinderUser.name = "Rugved";
tinderUser.isLoggedIn = true;

console.log(tinderUser); // {id: 1234567890, name: "Rugved", isLoggedIn: true}


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rugved",
            lastname: "J"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname); // Rugved
console.log(regularUser.fullname.userfullname.lastname); // J
console.log(regularUser.fullname.userfullname); // {firstname: "Rugved", lastname: "J"}
console.log(regularUser.fullname.userfullname["firstname"]); // Rugved

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {1: "a", 2: "b", 3: "c"}
const obj3 = {obj1,obj2}
console.log(obj3); // {obj1: {1: "a", 2: "b", 3: "c"}, obj2: {1: "a", 2: "b", 3: "c"}}

const obj4 = Object.assign(obj1,obj2) // it will merge the two objects and return the merged object
console.log(obj4); // {1: "a", 2: "b", 3: "c"}

const obj5 = {...obj1,...obj2} // most used
console.log(obj5); // {1: "a", 2: "b", 3: "c"}
console.log(obj5 === obj4); // false  //Even though obj5 and obj4 contain the same properties, they are different objects in memory

const user = [
    {
        id: 1,
        email: "xyz@gmail.com"
    },
    {
        id: 2,
        email: "dgr@gmail.com"
    },
    {
        id: 3,
        email: "f34@gmail.com"
    }
];

// users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // [id, name, isLoggedIn] // it will return the keys of the object
console.log(Object.values(tinderUser)); // [1234567890, Rugved, true] // it will return the values of the object
console.log(Object.entries(tinderUser)); // [[id, 1234567890], [name, Rugved], [isLoggedIn, true]] // it will return the entries of the object

console.log(tinderUser.hasOwnProperty("id")); // true // it will check if the object has the property or not

