# JS - Quick Notes

## Declarations
- `const` → Cannot be reassigned.  
- `let` → Can be reassigned.  
- `var` → ❌ Avoid (scope issues).  
- Implicit declaration (`accountCity = "Pune";`) is unsafe.

## Undefined Variables
- Declaring without value → `undefined`.

## Logging
- `console.table([var1, var2, ...]);` → Displays values in table.

### Best Practices ✅  
- Use `const` & `let`, avoid `var`.  
- Always declare before using.  
- Don't modify `const`.  
## **Strict Mode**  
- `"use strict";` → Ensures modern JS behavior.  

## **Data Types**  
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

## **Type Checking**  
```js
console.log(typeof "Rugved"); // string
console.log(typeof undefined); // undefined
console.log(typeof null); // object
```
## Type Conversion  

### **To Number (`Number()`)**  
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
### **To Boolean (Boolean())**
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

## IMP Points
- JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.

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
