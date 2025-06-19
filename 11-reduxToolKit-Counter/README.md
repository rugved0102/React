# 🧠 Redux Toolkit Counter App (Built with Vite + React)

This project is a **simple counter app** built using **React**, **Redux Toolkit**, and **Vite**. It’s made for beginners who want to learn how Redux Toolkit works — with everything explained in simple language.

---

## 📦 What is Redux Toolkit?

Redux Toolkit is a **helper library** that makes using Redux much easier and less confusing.

### ✅ Redux Toolkit gives you:
- A place to store your app's data (called "state")
- Built-in functions to create actions and reducers
- Easy-to-use setup with less code

---

## 🧱 Project Structure

```
11-reduxToolKit-Counter/
├── src/
│   ├── app/
│   │   └── store.js               # Main brain of the app
│   ├── features/
│   │   └── counter/
│   │       └── counterSlice.js    # Counter logic lives here
│   ├── App.jsx                    # UI and button handling
│   └── main.jsx                   # Entry point, sets up Provider
```

---

## 📁 1. `store.js` – The Global Store (Brain)

```js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// The "store" is like your app's memory where all data lives
export const store = configureStore({
  reducer: {
    counter: counterReducer, // The counter slice will manage 'counter' data
  },
});
```

🧠 **Explanation:**
- This is the main Redux store (the global brain).
- We added `counter` as one part of the memory.
- Each “part” is called a **slice**.
- `reducer` is a function that updates the state based on action

---

## 📁 2. `counterSlice.js` – A Slice of State

```js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0, // Starting count
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // Add 1 to value
    },
    decrement: (state) => {
      state.value -= 1; // Subtract 1 from value
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // Add custom number
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

🧠 **Explanation:**
- A **slice** is a small part of the app’s data and the tools to change it.
- This `counterSlice` manages a number (`value`), and lets us change it using:
  - `increment()` → adds 1
  - `decrement()` → subtracts 1
  - `incrementByAmount(5)` → adds any number (like 5)

---

## 📁 3. `main.jsx` – Setting Up the Store for React

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

🧠 **Explanation:**
- We wrap our app with `<Provider>` so that **every React component can use Redux**.
- Without Provider, components cannot read or update Redux state.

---

## 📁 4. `App.jsx` – Connecting React with Redux

```jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value); // Read value from Redux
  const dispatch = useDispatch(); // Used to send actions

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Redux Toolkit Counter</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>➕ Add 5</button>
    </div>
  );
}

export default App;
```

🧠 **Explanation:**
- `useSelector()` → reads the value from the Redux store.
- `useDispatch()` → sends an action to update the value.
- `increment()` and `decrement()` are the buttons/actions we created in our slice.

---

## 🚀 How to Run the Project

```bash
npm install       # Install dependencies
npm run dev       # Start the app in development mode
```

Visit 👉 http://localhost:5173 to see the counter working.

---

## 🤓 Quick Summary Table

| Term              | Easy Explanation                             |
|-------------------|-----------------------------------------------|
| Slice             | A piece of the app's data + logic             |
| Store             | Big brain that stores all slices              |
| Reducer           | Function that changes the value               |
| Action            | Button that tells reducer to do something     |
| useSelector       | Read data from the store                      |
| useDispatch       | Send action to update the store               |
| Provider          | Gives all components access to Redux store    |

---

## 📘 What You Learned

✅ How to set up Redux Toolkit with React  
✅ What a slice is and how to use it  
✅ How to read and update Redux state from React  
✅ Simple and clean project structure

---

## 🧠 Next Steps (Optional Ideas)

- Build a 📝 To-Do App using Redux Toolkit
- Add async API calls with `createAsyncThunk`
- Learn about middleware like logger or thunk
- Add multiple slices like `userSlice`, `todoSlice`, etc.

---

Made with ❤️ for beginners!
