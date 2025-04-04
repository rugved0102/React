// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// Jo functions ko hum bina call kiye hi call karte hain unhe IIFE kehte hain
// Jo function immediately call ho
// Global scope ke pollution se problem hoti hai kai baar so vo pollution ko avoid karne ke liye IIFE use karte hain
// IIFE ko gnerally nhi bata hota hai ki kab rukna so use ;