//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)
console.log(addTwo(5));

const addTwo = function(num){
    return num + 2
}

// ## Scope Difference: Browser vs Node.js

// - In the **Browser Console**:
//   - `var` variables become part of the global `window` object.
//   - Code runs directly in global scope.

// - In **Node.js**:
//   - Each file is wrapped in a function scope by default.
//   - `var`, `let`, `const` don't attach to the `global` object.
//   - This prevents polluting the global environment.

// ✅ Use `let`/`const` for predictable scoping in both environments.
