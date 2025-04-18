const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() // ye call karna hai varna niche vala then() aur ye connect kaise hoga
    }, 1000)
})

promiseOne.then(function() {
    console.log('Promise consumed');
    
})  // ye func automatically arg receive krta hai. Jo bhi upar se kaam hua he vo yaha return hoga

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve({username: "Rugved", email: "rugved@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        // if(!error) {
        if(error) {    
            resolve({username:"Rugved", password: "1234"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

// const username = promiseFour.then((user) => {
//     console.log((user));
//     return user.username 
// }) // isko variable me store karke return nhi kar sakte

promiseFour.then((user) => {
    console.log((user));
    return user.username
}).then((username) => {
    console.log(username); 
}).catch(function(error){
    console.log(error);   
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "js", password:"123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    },1000)
});

// .then().catch se bhi kar sakte ya following format me bhi kar sakte
async function consumePromiseFive(){
    // await promiseFive // promise ek object hai to isme hum iss tarah consume nahi karte // ye ek eventual completion object hai
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // fetch() is an async function, and it returns a Promise.

        // So agar hum await nahi likhenge, toh response me milega:
        // Promise { <pending> }

        // But agar hum likhte hain:
        // const response = await fetch(...);
        // Toh JS engine ruk jaata hai, wait karta hai jab tak data server se aa nahi jaata, and fir response me actual response object milta hai (not promise).
        //         const data = response.json()
        //         console.log(data);
        
    } catch (error) {
        console.log("E: ",error);
    }
}

getAllUsers()