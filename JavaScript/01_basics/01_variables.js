const accountId = 144553 
let accountEmail = "Rugved@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState
// accountId = 2 // not allowed
console.log(accountId);

accountEmail = "nigga@gmail.com"
accountPassword = "akjdf"
accountCity = "Pune"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
becoz of issue in block scope and functional scope

const and let use karna hai, var nahi
var use kiya aur agar code me accountId 10 barr use kiya to vo 10 bar change hoga

Js safe lang hai without declaration bhi hum memory space me var ki memory reserve kr sakte hai
ex : accountCity = "Pune"  btw ye suggested nhi hai


*/