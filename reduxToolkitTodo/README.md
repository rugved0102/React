# 🧠 Redux Todo App (with Add, Edit, Delete)

This project is a simple but powerful Todo App built using **React** and **Redux Toolkit**. It demonstrates core Redux principles including global state management, reducers, actions, and immutability with the `createSlice` API from Redux Toolkit.

---

## 📚 What is Redux?

Redux is a **state management library** used for managing application state **in a single global store**. It allows any component to access or update the state without prop-drilling.

Key Concepts:
- **Store**: Holds the state.
- **Actions**: Instructions describing the "what" (e.g., add a todo).
- **Reducers**: Functions that describe "how" state should change.
- **Dispatch**: Sends an action to the reducer to update the store.
- **Selector**: Extracts state from the store for a component.

---

## ⚡ What is Redux Toolkit?

Redux Toolkit (RTK) is the official, recommended way to write Redux logic. It:
- Reduces boilerplate code
- Uses `createSlice` to generate reducers and actions automatically
- Uses **Immer** internally to allow "mutating style" updates while keeping state immutable

---

## 🛠 Project Features

✅ Add Todos  
✅ Remove Todos  
✅ Edit Todos (in-place editing with live input and save feature)  
✅ Fully managed via Redux (no local component state for todos)  

---

## 📁 Project Structure

```
src/
├── app/
│   └── store.js            # Redux store configuration
├── features/
│   └── todo/
│       └── todoSlice.js    # Reducers, actions for todos
├── components/
│   ├── AddTodo.jsx         # Form to add todos
│   └── Todos.jsx           # Displays and edits/removes todos
├── App.jsx
└── main.jsx                # Entry point with Redux <Provider>
```

---

## 🔧 How Redux is Implemented in This Project

### 1. **Store Configuration**

```js
// store.js
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer
  }
})
```

---

### 2. **Creating Slice with Reducers**

```js
// todoSlice.js
const initialState = {
  todos: [
    {
      id: 1,
      text: 'Hello World',
      isEditable: false,
      liveEditText: ''
    }
  ]
}
```

We used `createSlice` from Redux Toolkit to:
- Define initial state
- Write reducers (`addTodo`, `removeTodo`, `toggleEditable`, `editLiveText`, `commitEdit`)
- Automatically generate action creators

Example reducer:
```js
editLiveText: (state, action) => {
  const { id, newText } = action.payload
  const todo = state.todos.find(todo => todo.id === id)
  if (todo) {
    todo.liveEditText = newText
  }
}
```

---

### 3. **Connecting Redux to React**

```js
// main.jsx
import { Provider } from 'react-redux'
import { store } from './app/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
```

---

### 4. **Using Redux in Components**

- **useDispatch**: to send actions
- **useSelector**: to access state

```js
const todos = useSelector(state => state.todo.todos)
const dispatch = useDispatch()
```

---

## ✏️ Editing Functionality (How It Works)

We added 3 extra fields and reducers to enable smooth editing:

- `isEditable`: toggles edit mode
- `liveEditText`: temporarily holds edited text before saving
- `toggleEditable()`: toggles input field visibility
- `editLiveText()`: updates live text as user types
- `commitEdit()`: saves changes to the main `text` and exits edit mode

---

## 💡 What We Learned

- How to create and configure Redux store
- Managing global state using Redux Toolkit
- Writing reducers with `createSlice`
- Immutability handled by **Immer** behind the scenes
- Building modular and scalable React components using Redux
- Implementing clean, controlled editing functionality in a Todo app

---

## 🚀 Run the App

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

---

## 📌 Final Thoughts

This app is a great starting point to learn Redux with real-world logic (like editing state). With Redux Toolkit and Immer, managing global state becomes both powerful and beginner-friendly.

---

