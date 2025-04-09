const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

let newArray = ['rugved', 'ajay', 'sachin', 'ankush', 'siddharth']
// newArray.forEach(function(val) {
//     console.log(val);
    
// })
let newArrayelem = newArray.forEach(item => {
    console.log(item);
})
console.log(newArrayelem); // undefined, because forEach does not return anything

const values = newArray.forEach((item) => {
    return item
})
console.log(values); // undefined
