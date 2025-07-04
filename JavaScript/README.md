# JS - Quick Notes

## 📚 Table of Contents
- [JavaScript Datatypes](#javascript-datatypes)
- [JavaScript Operators](#javascript-operators)
- [JavaScript Array](#javascript-array-notes)
- [JavaScript Objects](#javascript-objects)
- [JavaScript Functions](#javascript-functions)
- [JavaScript Scope & Hoisting](#javascript-scope--hoisting)
- [JavaScript this & Arrow Functions](#javascript-this--arrow-functions)
- [Immediately Invoked Function Expressions (IIFE)](#immediately-invoked-function-expressions-iife)
- [JavaScript Execution Context & Call Stack](#javascript-execution-context--call-stack)
- [Falsy/Truthy, Nullish, Ternary](#falsytruthy-nullish-ternary)
- [JavaScript Loops & Iteration](#javascript-loops--iteration)
- [DOM (Document Object Model)](#dom-document-object-model)
- [DOM Events](#dom-events)
- [Asynchronous JavaScript](#asynchronous-javascript)
- [JavaScript Promises](#javascript-promises)
- [Prototypal Behavior, Inheritance & `this`/`now`](#prototypal-behavior-inheritance--thisnow)
- [Understanding `call()` in JavaScript](#understanding-call-in-javascript)
- [JavaScript `bind()`](#javascript-bind)
- [Understanding Property Descriptors in JavaScript](#understanding-property-descriptors-in-javascript)
- [Getters and Setters in JavaScript](#getters-and-setters-in-javascript)
- [Lexical Scoping and Closures in JavaScript](#lexical-scoping-and-closures-in-javascript)
- [Extra](#extra)


## JavaScript Datatypes

### Declarations
- `const` → Cannot be reassigned.  
- `let` → Can be reassigned.  
- `var` → ❌ Avoid (scope issues), function-scoped (not block-scoped). Variables declared with `var` inside `if`, `for`, etc. are accessible outside that block.  
- Implicit declaration (`accountCity = "Pune";`) is unsafe.

### Undefined Variables
- Declaring without value → `undefined`.

### Logging
- `console.table([var1, var2, ...]);` → Displays values in table.

#### Best Practices ✅  
- Use `const` & `let`, avoid `var`.  
- Always declare before using.  
- Don't modify `const`.  
### **Strict Mode**  
- `"use strict";` → Ensures modern JS behavior.  

### **Data Types**  
1. **Primitive Types**  
   (call by value)
   - `number` → Up to **2⁵³**  
   - `bigint` → Large integers  
   - `string` → `"text"`  
   - `boolean` → `true / false`  
   - `null` → Standalone value  
   - `undefined` → Variable declared but not assigned  
   - `symbol` → Unique identifier  

2. **Non-Primitive Type**  
   (call by reference)
   - `object` → Collection of key-value pairs  

### **Type Checking**  
```js
console.log(typeof "Rugved"); // string
console.log(typeof undefined); // undefined
console.log(typeof null); // object
```
### Type Conversion  

#### **To Number (`Number()`)**  
| Input Value  | Converted Number |
|-------------|----------------|
| `"33"`      | `33`           |
| `"33abc"`   | `NaN`          |
| `null`      | `0`            |
| `undefined` | `NaN`          |
| `true`      | `1`            |
| `"rugved"`  | `NaN`          |

```js
let score = "rugved";
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN
```
#### **To Boolean (Boolean())**
| Input Value       | Converted Boolean |
|-------------------|-------------------|
| `1`               | `true`            |
| `"rugved"`        | `true`            |
| `""` (empty)      | `false`           |
| `null`            | `false`           |

```js
let isLoggedIn = null;
let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn); // false
```

### **To String (String())**
```js
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // string
```

## JavaScript Operators  

### **1. Unary Operators**  
- `-value` → Negates the value.  
- `+value` → Converts to a number.  

```js
let value = 3;
let negValue = -value;
console.log(negValue); // -3

console.log(+true);  // 1
console.log(+"");    // 0
```
### **2. String Concatenation (`+`)**  
- When adding a **string** and a **number**, the result is **a string**.  
- Order affects the result.  
```js
let str1 = "hello";
let str2 = " Rugved";
let str3 = str1 + str2; 
console.log(str3); // "hello Rugved"

console.log("1" + 2);      // "12"
console.log(1 + "2");      // "12"
console.log(1 + "2" + 2);  // "122"
console.log(1 + 2 + "2");  // "32"
```

### **3. Increment Operators (`++`)**  
- `++var` (Pre-increment) → Increments first, then returns the value.  
- `var++` (Post-increment) → Returns the value first, then increments.  

## JavaScript Comparison Operators 

### **1. Equality (`==`) vs. Strict Equality (`===`)**  
- `==` allows type conversion.  
- `===` checks both **value & type**. 
```js 
console.log("2" == 2);  // true
console.log("2" === 2); // false
```
### **2. Relational Comparison (`>`, `<`, `>=`, `<=`)**  
- Converts values **to numbers** before comparing.  
```js
console.log("2" > 1);  // true
console.log("02" > 1); // true
```
### **3. `null` & `undefined` Comparisons**  
- `null == 0` → `false` (no conversion).  
- `null >= 0` → `true` (`null` converts to `0`).  
- `undefined` **only equals `null`** in `==`, otherwise, behaves as `NaN` in comparisons.  
- **Any comparison with `undefined` returns `false`**.  
```js
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == null); // true
console.log(undefined == 0);    // false
console.log(undefined > 0);     // false
console.log(undefined < 0);     // false
console.log(undefined >= 0);    // false
console.log(undefined <= 0);    // false
```

## JavaScript Array Notes

- **Creating Arrays:**
  - **Literal:** `const arr = [1, 2, 3, 4, 5];`
  - **Constructor (Not recommended):** `const arr1 = new Array(1, 2, 3, 4, 5);`
  - Arrays are objects, resizable, and copying an array creates a shallow copy (copies reference, not deep values).

- **Common Array Methods:**
  - **Adding/Removing:**
    - `push("value")` – Add to the end.
    - `pop()` – Remove from the end.
    - `unshift("value")` – Add to the beginning.
    - `shift()` – Remove from the beginning.
  - **Searching/Indexing:**
    - `includes("value")` – Check existence.
    - `indexOf("value")` – Get index.
  - **Transforming:**
    - `reverse()` – Reverse array.
    - `sort()` – Sort array.
    - `splice(start, count)` – Remove elements (modifies original).
    - `slice(start, end)` – Get a sub-array (does not modify original).
    - `join(separator)` – Convert array to string with given separator.
    
- **Array Merging:**
  - Using `concat`:  
    ```js
    const allHeros = marvel_heros.concat(dc_heros);
    ```
  - Using Spread Operator:
    ```js
    const all_new_heros = [...marvel_heros, ...dc_heros];
    ```

- **Flattening Arrays:**
  - `flat(depth)` – Flattens nested arrays to specified depth:
    ```js
    const flatArray = another_arr.flat(Infinity);
    ```

- **Utility Methods:**
  - `Array.isArray(value)` – Checks if a value is an array.
  - `Array.from(iterable)` – Converts an iterable (e.g., string) to an array.
  - `Array.of(...values)` – Creates an array from a set of values.


## JavaScript Objects 

### Singleton vs Object Literal
- **Singleton:** Created using a **constructor function**.
- **Object Literal:** `{}` does not create a singleton.

### Symbols in Objects
```javascript
const mySymbol = Symbol("mySymbol");
const obj1 = { 
  name: "Rugved", 
  age: 23, 
  isMarried: false, 
  [mySymbol]: "mySymbol" 
};
console.log(obj1[mySymbol]); // Accessing symbol property
console.log(typeof mySymbol); // "symbol"
```
## Object Freezing
```javascript
Object.freeze(obj1); // prevents modifications
```

## Object Methods
```javascript
obj1.greeting = function() {
    console.log("Hello JS user");
};
obj1.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`); // Template Literals (``) instead of "" or ''. Allows variable interpolation: ${this.name}.
};
```

## Creating Objects
### Using Object Literal
```javascript
const tinderUser = { 
  id: 1234567890, 
  name: "Rugved", 
  isLoggedIn: true 
};
```
### Nested Object Access
```javascript
const regularUser = {
    email: "some@gmail.com",
    fullname: { 
      userfullname: { 
        firstname: "Rugved", 
        lastname: "J" 
      } 
    }
};
console.log(regularUser.fullname.userfullname.firstname); // "Rugved"
```

### Merging Objects
```javascript
const obj4 = Object.assign(obj1, obj2); // Modifies obj1
const obj5 = { ...obj1, ...obj2 }; // Creates a new object
console.log(obj5 === obj4); // false (different memory references)
```

### Object Methods
```javascript
console.log(Object.keys(tinderUser)); // ["id", "name", "isLoggedIn"]
console.log(Object.values(tinderUser)); // [1234567890, "Rugved", true]
console.log(Object.entries(tinderUser)); // [["id", 1234567890], ["name", "Rugved"], ["isLoggedIn", true]]
console.log(tinderUser.hasOwnProperty("id")); // true
```

### Array of Objects
```javascript
const users = [
    { id: 1, email: "xyz@gmail.com" },
    { id: 2, email: "dgr@gmail.com" },
    { id: 3, email: "f34@gmail.com" }
];
console.log(users[1].email); // "dgr@gmail.com"
```
### Destructuring
```javascript
const course = {
    courseName: "Javascript",
    coursePrice: 999,
    courseInstructor: "Rugved",
}

// course.courseInstructor
const {courseInstructor: ci} = course // destructuring means to extract the value of the key and assign it to the variable name
// courseInstructor is the key and ci is the variable name
console.log(ci); // Rugved
```

### Key Takeaways
   - Objects are reference types.

   - Spread `(...)` creates a new object; `Object.assign()` modifies existing objects.

   - Objects can have functions as properties.

   - Use `Object.keys()`, `Object.values()`, and `Object.entries()` to extract object data.

   - Use `Object.freeze()` to prevent modifications.


## JavaScript Functions 

### Function Basics
- **Function declaration**
```js
function sayMyName() {
    console.log("H");
    console.log("I");
}
```

- **Function Invocation** 
```js
sayMyName();
```

### Returning Values
```js
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
const result = addTwoNumbers(3, 5);
```

### Default Parameters
```js
function loginUserMessage(username = "sam") {
    return `${username} just logged in`;
}
```

### Rest Parameters
```js
function calculateCartPrice(val1, val2, ...prices) {
    return prices;
}
```
### Passing Objects to Functions
```js
function handleObject(obj) {
    console.log(`Username is ${obj.username} and price is ${obj.price}`);
}
```

### Passing Arrays to Functions
```js
function returnSecondValue(arr) {
    return arr[1];
}
```
### Key Takeaways
  - Use default parameters to handle missing values.

  - Rest parameters `(...)` allow handling multiple arguments.

  - Pass objects and arrays to functions for structured data manipulation.


## JavaScript Scope & Hoisting 

### 🔹 Block Scope with `let` and `const`
```js
let a = 300;
if (true) {
  let a = 10; // Block-scoped
  const b = 20;
}
console.log(a); // 300 (outer 'a')
// b is not accessible outside the block
```
### 🔹 Function Scope & Closure
```js
function one() {
  const username = "rugved";
  function two() {
    const website = "youtube";
    console.log(username); // Closure: inner can access outer
  }
  two();
}
```
### 🔹Nested If Scope
```js
if (true) {
  const username = "rugved";
  if (username === "rugved") {
    const website = "youtube";
    console.log(username + website);
  }
  // website not accessible here
}
```
### Hoisting 
  - Hoisting is JavaScript's behavior of moving declarations to the top of their scope.
  #### ✅ Function Declaration – Hoisted
  ```js
    console.log(addone(5));
    function addone(num) {
    return num + 1;
  }
  ```
  #### ❌ Function Expression – Not Hoisted
  ```js
    console.log(addTwo(5)); // ❌ Error
    const addTwo = function(num) {
    return num + 2;
  };
  ```

## Scope Difference: Browser vs Node.js

- In the **Browser Console**:
  - `var` variables become part of the global `window` object.
  - Code runs directly in global scope.

- In **Node.js**:
  - Each file is wrapped in a function scope by default.
  - `var`, `let`, `const` don't attach to the `global` object.
  - This prevents polluting the global environment.

✅ Use `let`/`const` for predictable scoping in both environments.

## JavaScript `this` & Arrow Functions
### 🏠 Object & `this`  
```js
const user = {
    username: "rugved",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
};
console.log(user);
```
  - `this` inside an object method refers to the current object.

  - `user.welcomeMessage()` → `this` points to `user`.

### 🌍 `this` in Global Scope
  ```js
  console.log(this);
  ```
  - In Browser → `this` refers to `window`.

  - In Node.js → `this` is `{}` (empty object in module scope).

### ❌ this inside a Regular Function
```js
function chai() {
    let username = "rugved";
    console.log(this.username); // ❌ undefined
}
chai();
```
- `this` inside a regular function does NOT refer to the outer scope.

- Instead, it refers to global object (`window` in browsers, `global` in Node.js), but primitive variables are NOT attached.

### 🏹 this in Arrow Functions
```js
const chai = () => {
    let username = "rugved";
    console.log(this);
};
chai();
```
- Arrow functions do not bind `this`.

- `this` inside an arrow function refers to the parent scope (lexical `this`).

### 🎯 Arrow Function Short Syntax
```js
const addTwo = (num1, num2) => num1 + num2;
const addTwo2 = (num1, num2) => (num1 + num2);
const addTwo3 = (num1, num2) => ({ username: "rugved" });

console.log(addTwo(3, 4)); // 7
console.log(addTwo3()); // { username: "rugved" }
```
- ✅ No `return` needed if using implicit return (`() => expression`).

- ✅ To return an object, wrap it inside `()` → `({})`.

<!-- ## 🚀 Immediately Invoked Function Expressions (IIFE) -->
## Immediately Invoked Function Expressions (IIFE)
### 🔹 What is IIFE?  
- A function that **executes immediately** after its definition.  
- Helps **avoid global scope pollution**.
- ⚠️ Important: Always end an IIFE with a `;` to avoid issues with multiple IIFEs.

### 🔹 Syntax & Example  
```js
// Named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
})();

// Arrow Function IIFE with Parameter
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('rugved');
```

## JavaScript Execution Context & Call Stack

### Overview
- JavaScript is **single-threaded**.
- When a JS file starts executing, the **Global Execution Context (GEC)** is created.
- The `this` keyword refers to the global context.
- There are three types of execution contexts:
  1. **Global Execution Context**
  2. **Function Execution Context** – created when a function is called.
  3. **Eval Execution Context** – rarely used, created by `eval()` function.

### Two Phases of JS Execution

#### 1. **Creation Phase (Memory Allocation Phase)**
- All **variables and functions are allocated memory**.
- This phase is also called the **first cycle**.
- Only references are stored, not actual values.

#### 2. **Execution Phase**
- Actual **code is executed**.
- When a function is called, a **new execution context** is created.
- Each function execution context has:
  - **Variable Environment**
  - **Execution Thread**
- Function execution context also goes through:
  - **Memory phase**
  - **Execution phase**
- Once done, the context is **destroyed**.

### Call Stack

- The **Call Stack** manages execution contexts.
- It starts with the **Global Execution Context**.
- When a function is invoked:
  - Its execution context is **pushed** onto the stack.
- When the function finishes:
  - The context is **popped** from the stack.

### Summary

- JS runs in a **single thread** using a **call stack**.
- Execution contexts are created for each function call.
- Each context goes through **creation and execution phases**.
- The stack ensures the correct **order of execution**.


![alt text](04_control_flow/image.png)

## Falsy/Truthy, Nullish, Ternary

### Falsy Values
Values treated as `false` in boolean context:
- `false`
- `0`, `-0`
- `BigInt(0n)`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

### Truthy Values
Anything not falsy, e.g.:
- `"0"`, `" "` (non-empty strings)
- `'false'`
- `[]` (empty array)
- `{}` (empty object)
- `function() {}`

### Nullish Coalescing Operator (`??`)
Returns the right-hand value only if the left-hand value is `null` or `undefined`.
```js
val1 = null ?? 10       // → 10
val1 = undefined ?? 15  // → 15
val1 = 0 ?? 20          // → 0 (0 is not null/undefined)
```

### Ternary Operator
```js
condition ? doIfTrue : doIfFalse;
```

## JavaScript Loops & Iteration

### `for` Loop
- Basic iteration with index.
- Can be nested (`outer` & `inner` loops).
```js
for (let i = 0; i <= 10; i++) {}
```
### `break` & `continue`
  - `break`: exits the loop.

  - `continue`: skips current iteration.

### `while` Loop
- Runs while condition is true.
```js
while (condition) {}
```

### `do...while` Loop
- Executes at least once.
```js
do {} while (condition);
```

### `for...of`
- Iterates over arrays, strings, maps.
```js
for (const item of iterable) {}
```

### `for...in`
- Iterates over keys of objects/arrays.
```js
for (const key in object) {}
```

### Map Iteration
- Use `for...of` with destructuring.
```js
for (const [key, value] of map) {}
```

### forEach
- Used to **iterate** over items.
- Does **not return a new array**.
- Commonly used for side effects like `console.log()` or `push()`.
```js
arr.forEach((item, index, array) => {})
```
#### Example: Array of Objects
```js
myCoding.forEach(item => {
  console.log(item.languageName);
});
```
  - ⚠️ for...in doesn't work on Map, use for...of instead.

### filter()
- Returns a new array with elements that pass a condition.

- Always returns elements for which the callback returns `true`.
```js
const nums = [1, 2, 3, 4, 5];
const result = nums.filter(num => num > 3); // [4, 5]
```

### map()
- Returns a new array with transformed values.

- Each item is mapped to a new value using the callback function.
```js
const nums = [1, 2, 3];
const plusTen = nums.map(num => num + 10); // [11, 12, 13]
```
### reduce()
- Reduces the array to a single value.

- Commonly used for totals, averages, etc.
```js
const nums = [1, 2, 3];
const sum = nums.reduce((acc, curr) => acc + curr, 0); // 6
```

### Summary Table
| Method    | Purpose          | Returns            | Use Case                          |
|-----------|------------------|---------------------|-----------------------------------|
| `forEach` | Iterate only     | `undefined`         | Running side effects (logs, etc.) |
| `map`     | Transform items  | New array           | Modify elements in array          |
| `filter`  | Select items     | New filtered array  | Extract matching items            |

## DOM (Document Object Model)

### 📘 What is the DOM?
- The **DOM** is a programming interface for web documents.
- It represents the structure of an HTML document as a **tree** of objects.
- Allows JavaScript to interact with and manipulate HTML & CSS.

---

### 🧱 DOM Structure
- Everything in HTML becomes a **node** in the DOM.
  - Document → Root node
  - Elements → Element nodes
  - Text → Text nodes
  - Comments → Comment nodes

---

### 🔍 Selecting Elements

| Method | Description |
|--------|-------------|
| `getElementById(id)` | Selects an element by its ID |
| `getElementsByClassName(class)` | Selects elements by class name (HTMLCollection) |
| `getElementsByTagName(tag)` | Selects elements by tag name (HTMLCollection) |
| `querySelector(selector)` | Selects the **first** element matching a CSS selector |
| `querySelectorAll(selector)` | Selects **all** matching elements (NodeList) |

---

### ✏️ Modifying Elements

```js
element.textContent = 'Hello';    // Change text
element.innerHTML = '<b>Hi</b>';  // Change inner HTML
element.style.color = 'red';      // Change style
element.setAttribute('id', 'newId'); // Set attributes
```

---

### 🛠️ Creating & Inserting Elements

```js
let div = document.createElement('div');
div.textContent = 'New Element';
document.body.appendChild(div); // Adds at end of body
```

---

### 🗑️ Removing Elements

```js
element.remove(); // Modern way
parent.removeChild(child); // Old way
```

### 📚 Useful Terms
  - Node: A single point in the DOM tree

  - Element: HTML tag (like `<div>`, `<p>`)

  - Attribute: HTML attributes like `id`, `class`

  - Event: User actions like click, keypress, etc.

## DOM Events

### ✅ Event Handling Methods
- `element.onclick = function() {}`  
  ➤ Basic way to attach events (limited features).
- `element.addEventListener('event', function, useCapture)`  
  ➤ Preferred method. Supports event propagation (bubbling/capturing) and multiple listeners.

---

### 🌀 Event Propagation
Event propagation determines the **order** in which elements receive the event.

#### 1. **Event Bubbling** (default)
- Event flows from **target → parent → up to root**.
- Use `e.stopPropagation()` to stop the bubble.
```js
element.addEventListener('click', handler, false) // false = bubbling
```

#### 2. **Event Capturing**
- Event flows from **root → down to target**.
- Enable with third parameter: `addEventListener('click', handler, true)`
```js
element.addEventListener('click', handler, true) // true = capturing
```

---

### 📌 Event Object (`e`)
Common useful properties:
- `e.target` → Actual element clicked
- `e.currentTarget` → Element where handler is attached
- `e.preventDefault()` → Prevents default behavior (e.g., stopping a link)
- `e.stopPropagation()` → Stops event from bubbling/capturing further
- Mouse coordinates: `e.clientX`, `e.clientY`, `e.screenX`, `e.screenY`
- Modifier keys: `e.ctrlKey`, `e.shiftKey`, `e.altKey`

---

### 🧹 Remove Element Dynamically
```js
document.querySelector('#images').addEventListener('click', function(e){
    if (e.target.tagName === 'IMG') {
        e.target.parentNode.remove()
    }
})
```
- Checks if an `<img>` was clicked and removes its `<li>` wrapper using `parentNode.remove()`.

---

### 🚫 Prevent Default
```js
document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault()       // Stops link from navigating
    e.stopPropagation()      // Stops bubbling
})
```

---




## Asynchronous JavaScript 

![alt text](08_events/image.png)
<!-- akela js ka engine hota hi nhi hai mostly vo runtime env me milega -->
<!-- blocking code vs non - blocking code  -->

### ✅ What is Asynchronous JS?
- Allows code to run **without blocking** the main thread.
- Lets time-consuming tasks (e.g., API calls, timers) happen **in the background**.
- Enables smooth, non-blocking user experience.

---
![alt text](08_events/How_JS_engine_works.png)
[JavaScript Engine Deep Dive](How_JS_Engine_Works.md)

### 🧱 Components

#### 1. **Call Stack**
- Executes synchronous code line-by-line.

#### 2. **Web APIs (Browser APIs)**
- Handles async tasks: `setTimeout`, `DOM Events`, `fetch`, etc.

#### 3. **Callback Queue / Task Queue**
- Holds completed async callbacks waiting to be pushed to the call stack.

#### 4. **Event Loop**
- Constantly checks if the call stack is empty.
- If empty, pushes a task from the queue to the call stack.

---

### ⏱ Examples

#### `setTimeout`
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 2000);

console.log("End");
```

```javascript
Start
End
Async Task
```
---


## JavaScript Promises 

### 🔹 What is a Promise?
- An object representing the eventual completion or failure of an async operation.
- States: `pending` → `fulfilled` / `rejected`


### 🔹 Creating a Promise
```js
const p = new Promise((resolve, reject) => {
  // async work
});
```
### 🔹 Consuming a Promise
- `.then()` → handles resolved value

- `.catch()` → handles errors

- `.finally()` → runs regardless of outcome

### 🔹 Chaining Promises
```js
promise
  .then((res) => { /* next step */ })
  .catch((err) => { /* handle error */ })
  .finally(() => { /* cleanup */ });
```

### 🔹 Async/Await (Modern Way)
```js
async function fn() {
  try {
    const res = await promise;
  } catch (err) {
    // error
  }
}
```

### 🔹 Real-life Usage: fetch()
```js
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### 🔹 Notes
- Promises are microtasks (run before setTimeout)

- Always return or await `.json()` when using `fetch()`

- Avoid callback hell by chaining `.then()` or using `async/await`

- A promise can resolve with any value (object, string, etc.)

- You cannot return a value from `.then()` into outer scope — use chaining or `async/await` instead

---

## 🌐 fetch() API – Promise Workflow Diagram

### 🔹 Overview
- `fetch()` is used to make HTTP requests in JavaScript.
- It **returns a Promise**, which goes through `pending → fulfilled / rejected`.

---

### 🔹 Diagram Flow

![alt text](09_advance_one/fetch.png)

1. **Call**  
   `fetch('url')` → returns a Promise (e.g., stored in `response`)

2. **Promise States**
   - ✅ `onFulfilled`: Request successful → response returned
   - ❌ `onRejection`: Request failed → error thrown

3. **Environment**
   - Works in **Web Browsers** and **Node.js** (via `node-fetch`)

4. **Network Layer**
   - Behind the scenes: performs **asynchronous HTTP request**

5. **Global Memory**
   - The returned Promise (e.g., `response`) is stored in memory  
   - Later used with `.then()`, `.catch()`, `await`, etc.

---

### 🔹 Key Concepts
- `onFulfilled` and `onRejection` are part of the **Promise lifecycle**
- Use `.then()` to handle fulfilled response
- Use `.catch()` for rejections (errors)
- `finally()` runs after fulfillment/rejection

---

### 🔹 Quick Example
```js
fetch('https://api.example.com/data')
  .then(res => res.json())     // onFulfilled
  .then(data => console.log(data))
  .catch(err => console.error(err))  // onRejection
  .finally(() => console.log("Done"));
```

---

## Prototypal Behavior, Inheritance & `this`/`now`

### 🔹 What is `[[Prototype]]`?

- Every object in JavaScript has a hidden internal property called `[[Prototype]]` (visible as `__proto__`).
- JavaScript looks for properties/methods on the object.
- If not found, it searches in the prototype chain.
- If still not found, it returns `undefined`.  
```js
const user = {
    username : "Rugved",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function() {
        console.log("Got user details from database");
        console.log(`${this.username}`);
    }
}
console.log(user.getUserDetails());
```

### 🔹 Custom Methods via Prototypes

- We can add methods to built-in objects like String or Array.
- Example: Add a `trueLength()` method to String.
- This helps enhance built-in functionality.  
```js
let myName = "Rugved     ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength();
"JaiShreeRam".trueLength();
```

### 🔹 The `this` Keyword

- Inside a method, `this` refers to the object calling the method.
- Inside a function, `this` depends on **how** it's called, not where it’s written.
- When used in objects, `this` is very powerful for dynamic reference.  


### 🔹 Extending All Objects and Arrays

- Use `Object.prototype` to extend all objects.
- Use `Array.prototype` to extend all arrays.
- Be careful: extending global prototypes can affect existing behavior.  
```js
let myHeros = ["thor", "spiderman"];

Object.prototype.rugved = function() {
    console.log(`rugved is present in all objects`);
}

Array.prototype.heyRugved = function() {
    console.log(`rugved says hello`);
}

myHeros.rugved();
myHeros.heyRugved();
```

### 🔹 Prototypal Inheritance Between Objects

- Old way: `obj.__proto__ = baseObj`
- Modern way: `Object.setPrototypeOf(childObj, parentObj)`
- Helps share properties/methods across object hierarchies.  
```js
const User = {
    name: "rugved",
    email: "rugved@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false  
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User;
Object.setPrototypeOf(TeachingSupport, Teacher);
```

### 🔹 Functions Are Objects Too

- Functions can have their own properties.
- They also have a `.prototype` which is used during construction.
- Example: Add a static property to a function.  
```js
function MultiplyBy5(num) {
    return num * 5;
}

MultiplyBy5.power = 2;

console.log(MultiplyBy5(5));         // 25
console.log(MultiplyBy5.power);      // 2
console.log(MultiplyBy5.prototype);  // {}
```

### 🔹 Constructor Functions + `new` Keyword

When you use `new`:

1. A new empty object is created.
2. That object is linked to the constructor’s `.prototype`.
3. `this` inside the constructor points to the new object.
4. The new object is returned.

This pattern is how custom objects and inheritance are implemented.  
```js
function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printMe = function() {
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 25);

chai.printMe();
```

---

## Understanding `call()` in JavaScript 

### 🔸 Problem:
- When a function is called normally (like `SetUserName(username)`), it creates a **temporary execution context**.
- After execution, the context is **destroyed**, and any variable or property (like `this.username`) set inside is **lost** from the calling context.

### 🔸 Real-World Need:
- You want to reuse logic from one function (`SetUserName`) **inside another constructor function** (`CreateUser`) without losing the internal data.

### 🔸 Solution: Use `.call(this, ...)`
- `SetUserName.call(this, username)` binds the `this` of `SetUserName` to the current object being built in `CreateUser`.
- This way, the data set inside `SetUserName` is **retained** in the final object.

### 🔸 Result:
- The `username` becomes a part of the final object created using `new CreateUser(...)`.

```js
function SetUserName(username) {
    this.username = username;
    console.log("called");
}

function CreateUser(name, email, username) {
    SetUserName.call(this, username); // bind SetUserName's `this` to CreateUser's `this`
    this.email = email;
    this.name = name;
}

let chai = new CreateUser("chai", "chai@fb.com", "none");
console.log(chai);
```

## JavaScript `bind()` 

### 🔹 What is `bind()`?

`bind()` is a method used to **lock the value of `this`** inside a function.  
When we pass a function (like a class method) somewhere (e.g., as an event handler), JavaScript **may forget what `this` was**.  
Using `bind()` fixes this problem.

---

### 🔹 Why do we need `bind()`?

- In JavaScript, `this` is **dynamic** — it depends on **how a function is called**, not where it's defined.
- If you pass a method like `this.handleClick` as a callback (e.g., in `addEventListener()`), it **loses context** — `this` no longer refers to your class object.

---

### 🔹 Real-Life Analogy

Think of `this` like a **person** you're talking to. If you copy their words (function), and use them elsewhere (event), they might **forget who they are** — unless you lock their identity with `bind()`.

---

### 🔹 Syntax


```js
functionName.bind(context)
```
Here, `context` is the object you want `this` to point to.

### 🔹 Example 1: Without bind() ❌
```js
class User {
  constructor(name) {
    this.name = name;
    document.querySelector('button').addEventListener('click', this.sayHi);
  }
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
```

🧨 When the button is clicked, `this.name` is undefined — because `this` refers to the button, not the class.

### 🔹 Example 2: With bind() ✅
```js
class User {
  constructor(name) {
    this.name = name;
    document.querySelector('button').addEventListener('click', this.sayHi.bind(this));
  }
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
```

✅ Now this inside `sayHi()` always points to the class instance, not the button.

---

### 🔹 When to use `bind()`?

| Situation                            | Use `bind()`? | Why?                                 |
|-------------------------------------|---------------|--------------------------------------|
| Passing a method as an event handler | ✅ Yes         | Preserves `this` context             |
| Calling a method directly            | ❌ No          | No context is lost                   |
| Inside `setTimeout` or `setInterval` | ✅ Yes         | `this` changes to `window` or `undefined` |

---

### 🔹 Key Point

> JavaScript doesn’t remember `this` when you **pass** a function.  
> `bind(this)` makes sure `this` always points to your class or object.

---

### 🔹 Summary

- `bind()` **does not run** the function — it just returns a new function with `this` fixed.
- You must call the result manually or pass it somewhere like in `addEventListener`.

--- 

## Understanding Property Descriptors in JavaScript

### 🧠 What are Property Descriptors?
JavaScript internally uses **property descriptors** to manage the behavior of object properties. These include:

- **writable**: Can the property be changed?
- **enumerable**: Will the property show up in loops like `for...in` or `Object.entries()`?
- **configurable**: Can we redefine or delete the property?

---

## 🔬 Built-in Object Properties: `Math.PI`

- `Math.PI` is a built-in constant.
- Using `Object.getOwnPropertyDescriptor()`, we can see its descriptor.
- `writable: false` → can't change its value.
- Attempting to overwrite `Math.PI` silently fails (in non-strict mode).

```js
// Checking Math.PI descriptor and trying to change it
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

console.log(Math.PI);
Math.PI = 5; // Fails silently
console.log(Math.PI);
```

---

### 🧪 Custom Object Descriptors: `Object.defineProperty()`

- We can change property behavior using `Object.defineProperty()`.
- Example: Making a property **non-enumerable** (`enumerable: false`) hides it from `for...in` or `Object.entries()`.

```js
// Making a property non-enumerable and inspecting its effect
const chai = {
    name: 'ginger chai',
    price: 30,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bani");
    }
}

Object.defineProperty(chai, 'name', {
    enumerable: false
});

for(let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
}
```


Use `Object.getOwnPropertyDescriptor()` to inspect, and `Object.defineProperty()` to modify behavior.

---
## Getters and Setters in JavaScript

### 🔹 What Are Getters and Setters?

Getters and Setters are special methods that allow you to control access to object properties. They are part of **encapsulation** in object-oriented programming.

---

### 🔑 Why Use Them?

- Control how a property is accessed or modified.
- Perform validation, transformation, or logging when getting or setting a value.
- Prevent direct access to sensitive data (like passwords).
- Improve maintainability and abstraction in your code.

---

### 🧱 Syntax in a JavaScript Class

```js
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password; // invokes the setter
  }

  get password() {
    return `${this._password}rugved`; // returns transformed password
  }

  set password(value) {
    this._password = value; // stores internally
  }
}

const user = new User("test@example.com", "abc");
console.log(user.password); // Output: abcrugved
```

---

## Lexical Scoping and Closures in JavaScript

---

### 🔹 What is Lexical Scoping?

**Lexical Scope** (also called **static scope**) means:

> A variable defined in an outer scope is accessible in its inner scope based on the code’s structure.

#### 🧠 Key Rule:
> **Scope is determined by where variables and functions are written in code, not where they are called.**

#### 🔧 Example:

```js
function outer() {
  let name = "JavaScript";

  function inner() {
    console.log(name); // ✅ Accessible due to lexical scoping
  }

  inner();
}

outer(); // JavaScript
```

---

### 🔹 What is a Closure?
> A **closure** is created when a function **remembers** the variables from its **lexical environment**, even after the outer function has finished executing.
#### 🔧 Example:
```js
function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

const fn = outer(); // outer() has run, but inner still remembers 'counter'
fn(); // 1
fn(); // 2
```

---

## Extra

### IMP Points
- JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.

---

### 💡 Is `console.log` a part of JavaScript?

- Technically, `console.log()` is **not** a part of the **core JavaScript language** (ECMAScript specification).
- Core JavaScript includes:
  - Primitive data types
  - Operators
  - Control structures (like `if`, `for`, `while`)
  - Function execution and scope handling

---

#### 🔍 Then what is `console.log()`?

- It is a **debugging tool** provided by the **runtime environment** (like a web browser or Node.js).
- In the **browser**, `console.log` is part of the **Web APIs** provided by the **JavaScript runtime** (like Chrome's V8 engine via DevTools).
- In **Node.js**, it’s exposed via the global `console` object, implemented in C++ under the hood.

---

#### 🧠 So What’s Really Happening?

- JavaScript is often said to be a "wrapper over C++" in runtime environments.
- The `console` object and methods like `.log()` are made available by the **runtime**, not by the language spec itself.
- That's why you can't use `console.log()` in environments without a console (like pure embedded JS engines).

---

#### ✅ Conclusion:

`console.log()` ≠ Pure JavaScript  
`console.log()` ∈ Runtime Features

It’s like saying:  
🛠️ **JavaScript = Brain**  
🌍 **Runtime = World it lives in (with tools)**  

---