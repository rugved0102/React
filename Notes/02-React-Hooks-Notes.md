# 🔧 React Hooks - What We Learned in This Project

## 🧠 useState()

- This is used to create and manage values that can change (state).
- Whenever the state changes, React re-renders the component with the new values.
  
```js
const [password, setPassword] = useState("")
```
- Example from our project [05_passwordGenerator](../05_passwordGenerator/):

    - We used `useState` for `length`, `numberAllowed`, `charAllowed`, and `password`.

    - These values update based on user input and help regenerate the password.

## ⚙️ useEffect()
- useEffect runs a function **after the component renders**.

- We can control **when** it runs by passing a dependency array.
```js
useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed])
```
- So in our project:

    - Whenever `length`, `numberAllowed`, or `charAllowed` changes — regenerate password.

    - This avoids calling the generator manually in every input handler.

## 💾 useCallback()
- useCallback gives us a **cached (memoized)** version of a function.

- It **only changes if the values in the dependency array change**.

- Helps avoid unnecessary re-creation of functions on every render.
```js
const passwordGenerator = useCallback(() => {
  // generate password
}, [length, numberAllowed, charAllowed])
```
- In our case:

    - We use it for `passwordGenerator` and `copyPasswordToClipboard`.

    - This improves performance and prevents unnecessary code execution.

## 🧷 useRef()
- useRef gives us direct access to DOM elements.

- It does not cause re-renders if the value changes.

- Mostly used to access input boxes, focus elements, or store mutable data.
```js
const passwordRef = useRef(null)
```
- In our case:

    - We attached it to the password input field:
```js
<input ref={passwordRef} ... />
```
- Then used it to select and copy the password:

```js
passwordRef.current?.select();
passwordRef.current?.setSelectionRange(0, 999);
navigator.clipboard.writeText(password)
```

## Summary
| Hook         | What It Does                                      | Used For                       |
|--------------|---------------------------------------------------|--------------------------------|
| `useState`   | Keeps track of values that change                 | password, length, options      |
| `useEffect`  | Runs code after render when dependencies change   | auto-generate password         |
| `useCallback`| Memoizes a function                               | avoid re-generating functions  |
| `useRef`     | Directly access DOM (input field)                 | select + copy password         |
