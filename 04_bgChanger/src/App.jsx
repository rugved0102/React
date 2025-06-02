import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Btn from './component/Btn'
function App() {
  const [bgColor, setColor] = useState('white')

  const handleColorChange = (color) => {
    setColor(color)
  }
  return (
    <>
      <div style={{backgroundColor: bgColor, height: '100vh'}}>
      <Btn color = "red" handleColor={handleColorChange}/>
      <Btn color="blue" handleColor={handleColorChange} />
      <Btn color="green" handleColor={handleColorChange} />
      <Btn handleColor={handleColorChange}/>
      </div>
    </>
  )
}

export default App
