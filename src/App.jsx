import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <>
    <Navbar />
    <div className="pt-16"> {/* Offset for fixed Navbar */}
   <Hero />


   </div>
    </>
  )
}

export default App
