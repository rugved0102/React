import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  let [count, setCount] = useState(0)

  const add = () => {
    setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)

    // upar wala code uncomment kar ke dekho counter +4 nhi +1 hi hoga kyuki react ise ek batch ke tarah process karta hai

    // agar +4 vala karna hi hai to yese kro
    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)
  }

  const remove = () => {
    if(count > 0) {
      setCount(count-1)
    }
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button
      onClick={add}>+</button>
      <br />
      <button
      onClick={remove}>-</button>
    </>
  )
}

export default App

/*
  📌 What we did:
  - We built a simple counter app using React.
  - The app shows a number and two buttons: one to increase and one to decrease the number.
  - We used React's `useState` Hook to manage the number (state).

  🔍 Why we used useState (React Hooks):
  - In plain JavaScript, if we change a variable (like count++), it doesn’t update the webpage automatically.
  - React needs a way to know when something changes so it can re-render the UI (the screen).
  - useState gives us this ability — when we call setCount(), React updates the screen with the new value.

  🧠 Problem in old JavaScript (without React or Hooks):
  - If we just used a variable like `let count = 0`, and did count++, the HTML would NOT update.
  - We'd have to manually use `document.querySelector` or something to update the DOM (which is messy and repetitive).

  ✅ How React and Hooks fix this:
  - With `useState`, React takes care of re-rendering the UI.
  - When we update the state using `setCount()`, React automatically refreshes the part of the screen that uses `count`.
  - This makes our code much cleaner and easier to manage.

  ✨ In short:
  - useState = easy way to make variables that update the UI automatically when they change.
*/
