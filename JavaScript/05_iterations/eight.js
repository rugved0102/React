const fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.forEach((fruit,index) => {
    console.log(`${index+1}: ${fruit}`);
});
// Output:
// 1: apple
// 2: banana
// 3: cherry
// 4: date
// The forEach method executes a provided function once for each array element.
// It takes a callback function as an argument, which is executed for each element in the array.
// The callback function can take three arguments: the current element, the index of the current element, and the array itself.
// In this example, we use the forEach method to log each fruit in the array along with its index.
// The index is incremented by 1 to make it more user-friendly (starting from 1 instead of 0).

const nums = [1,2,3,4];
const squares = nums.map(num => num*num);
console.log(squares); // [1, 4, 9, 16]
// The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
// In this example, we use the map method to create a new array of squares of the numbers in the nums array.

const books = [
    { title: "Book A", genre: "History" },
    { title: "Book B", genre: "Fiction" },
    { title: "Book C", genre: "History" }
  ];
  
  const historyBooks = books.filter(book => book.genre === "History");
  console.log(historyBooks);
  // [
  //   { title: "Book A", genre: "History" },
  //   { title: "Book C", genre: "History" }
  // ]
// The filter method creates a new array with all elements that pass the test implemented by the provided function.
// In this example, we use the filter method to create a new array of books that have the genre "History".  