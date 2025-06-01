import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'
// App to aakhir me ek function hi hai to hum bhi ek function likh sakte hai
function MyApp() {
  return(
    <div>
      <h1>Hello! This is MyApp()</h1>
    </div>

    // ye wala syntax easy hai pr js ko ye samaj nahi ata so bundelers use karke html code ko convert karta vo jaise hamne customreact.js me reactElement banaya tha waise
    // That's why this is .jsx i.e js+html
  )
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
  }

  const anotherElem = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
  )

  const anotherUser = 'Rugved Junghare'

  const reactElem = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'Click me to visit Google',
    // sab complete hone ke badd yaha variables inject honge
    anotherUser
  )
createRoot(document.getElementById('root')).render(
  
    
    // <MyApp />
     // MyApp() // ye to aakhir me func hi hai na so ye bhi work karega pr yesa nhi karna hai

    //  reactElement // this will not work becoz react me obj ya function ko dom tree me convert karte hai so ye apna custom func hai to ye nhi chalega

    //  anotherElem // ye chal jayega kyuki iska tree ban sakta hai

    reactElem
)
