import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

let myObj = {
  name : "rugved",
  college: "vit"
}

let myArr = [1,2,3,4]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl' >Tailwind Test</h1>
      <br />
      <Card day={3} someObj = {myObj} Arr = {myArr} />
    </>
  )
}

export default App
