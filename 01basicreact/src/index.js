import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// React khud ka ek virtual DOM banata hai aur browser ke DOM ke saath compare karta hai 
root.render(
  // <React.StrictMode>
    <App />
    // ye koi tag nahi hai. React aapko power deta hai ki aaap HTML ke elements ko render kr sakte ho through js
  // </React.StrictMode>
);


