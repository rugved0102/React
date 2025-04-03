// array
const arr = [1, 2, 3, 4, 5];
const arr1 = new Array(1, 2, 3, 4, 5); // not recommended
// js arrays are not associative arrays, they are objects
// js arrays are resizable
// js array copy makes shallow copy
// what is shallow copy?
// shallow copy is a copy of the reference, not the value

const myHero = ["shaktiman", "superman", "batman"];


// Array methods
myHero.push("spiderman"); // add to end of array
myHero.pop(); // remove from end of array
myHero.unshift("ironman"); // add to beginning of array
myHero.shift(); // remove from beginning of array
myHero.includes("shaktiman"); // check if array includes value
myHero.indexOf("shaktiman"); // get index of value
myHero.reverse(); // reverse array
myHero.sort(); // sort array
// myHero.splice(1, 2); // remove 2 elements from index 1
// myHero.slice(1, 3); // get elements from index 1 to 3 (not inclusive)
// myHero.join(); // join array elements with comma
// myHero.join(" "); // join array elements with space

const newArr = myHero.join()
console.log(myHero);
console.log(newArr);

// Difference between splice and slice
// splice modifies the original array and returns the removed elements
// slice returns a new array and does not modify the original array