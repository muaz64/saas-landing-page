import react from 'react';
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Testimonials from './components/Testimonials';

function App() {
  
  return (
    <>
    <Navbar />
    <div className="pt-16"> {/* Offset for fixed Navbar */}
   <Hero />
  <Features />
  <Testimonials />

   </div>
    </>
  )
}

export default App
