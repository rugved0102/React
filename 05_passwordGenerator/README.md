# 🔐 React Password Generator 

## 🧩 React Concepts Used

### 1. useState
- Manages local state in the component.
- Used for:
  - `length`: length of the password.
  - `numberAllowed`: toggle for including numbers.
  - `charAllowed`: toggle for including special characters.
  - `password`: the generated password.

### 2. useEffect
- Runs side effects when dependencies change.
- Automatically calls `passwordGenerator()` whenever `length`, `numberAllowed`, or `charAllowed` change.

### 3. useCallback
- Returns a memoized version of a function.
- Prevents unnecessary re-creation of `passwordGenerator` and `copyPasswordToClipboard` on every render.
- Improves performance by limiting re-renders of functions unless dependencies actually change.

### 4. useRef
- Used to reference the password input DOM element.
- Enables selecting the input field and copying its contents to clipboard programmatically.
- Does **not** cause re-renders.

```js
const passwordRef = useRef(null)
passwordRef.current.select()
navigator.clipboard.writeText(password)
```