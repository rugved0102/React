import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import Provider to connect Redux with React
import { Provider } from 'react-redux';
import { store } from './app/store';  // Import our configured store

ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap App in <Provider> and pass the store as a prop
  // This makes the Redux store available to all components
  <Provider store={store}>
    <App />
  </Provider>
);

// Explanation:
// Without Provider, React components can't use Redux data.
// Provider puts the store in React's context so any component can access it.
