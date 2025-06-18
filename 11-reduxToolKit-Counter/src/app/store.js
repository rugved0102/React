// Import the function that helps us create a Redux store
import { configureStore } from '@reduxjs/toolkit';

// Import the reducer (slice) we will create to manage counter state
import counterReducer from '../features/counter/counterSlice';

// Create and export the Redux store
export const store = configureStore({
  // Here we define all reducers our app will use.
  // Reducer is a function that updates the state based on action
  // We can have multiple slices like 'counter', 'auth', 'todo', etc.

  // Let’s say you’re building a counter app that increases or decreases a number.
    // You need:
        // A place to store the number (e.g., value = 0)
        // Two buttons to change it → one for “+1”, one for “-1”
        // A slice is just:
            // The number (state)
            // The buttons (functions to change it)
  reducer: {
    counter: counterReducer  // 'counter' key will store data managed by counterSlice
  }
});

// Explanation:
// Redux store is the "central brain" of the app where all state lives.
// 'configureStore' simplifies the setup and adds useful dev tools automatically.
