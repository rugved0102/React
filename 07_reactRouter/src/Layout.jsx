import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// Outlet yaha pe hum issliye use karre hai ki header or footer common rakhenge page pr aur kuch hi content change karenge to vo change hone wala content outlet se change hoga
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
