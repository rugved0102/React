const newArray = [1,2,3,4,5,6,7,8]
const NewNums = newArray.filter((num) => {
    return num > 4
})
console.log(NewNums);

// const mapUse = newArray.map((num) => {
//     return num
// })
const mapUse = newArray.map( (num) => num)
console.log(mapUse);

const forEachUse = newArray.forEach((num) => num)
console.log(newArray.forEach((num) => num));
console.log(forEachUse);


// We can use both
const nums = [1,2,3,4,5,6]

const ans = nums.filter((num) => num % 2 == 0).map((num) => num*2)
console.log(ans);

// reduce
const arr = [1,2,3]
const totalSum = arr.reduce( (previousValue, currentValue) => {
    console.log(`previousValue: ${previousValue}, currentValue: ${currentValue}`);
    return previousValue + currentValue
}, 0) // 0 previousValue di hai
console.log(totalSum);

