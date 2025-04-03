const marvel_heros =["thor", "ironman", "hulk", "spiderman", "black widow"];
const dc_heros = ["superman","flash","batman"]
// marvel_heros.push(dc_heros); // add dc_heros to marvel_heros
// console.log(marvel_heros); // ["thor", "ironman", "hulk", "spiderman", "black widow", ["superman","flash","batman"]]
// console.log(marvel_heros[5][0]); // superman

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); // ["thor", "ironman", "hulk", "spiderman", "black widow", ["superman","flash","batman"]]

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator
console.log(all_new_heros); // ["thor", "ironman", "hulk", "spiderman", "black widow", "superman","flash","batman"]

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr); // [1,2,3,4,5,6,7,6,7,4,5]
// flat method is used to flatten the array to the specified depth


console.log(Array.isArray("Rugved"))
console.log(Array.from("Rugved")) // converts string to array
console.log(Array.from({name: "Rugved"})) // converts object to array;  //interesting fact: it will convert the object to array with the key as the index and value as the value of the key

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // converts the values to array; it will convert the values to array with the index as the index and value as the value of the key
// Array.of is used to create an array from the values passed to it




