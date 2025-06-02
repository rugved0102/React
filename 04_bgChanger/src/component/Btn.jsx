import React from 'react'
function bgColor(color) {
    
}
function Btn({color="white", handleColor}) {
  return (
    <>
    <button onClick={()=>handleColor(color)}>{color}</button>
    </>
  )
}

export default Btn
