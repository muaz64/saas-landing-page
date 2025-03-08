import react from 'react';
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Signup from './components/Signup';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
    <Navbar />
    <div className="pt-16"> 
   <Hero />
   <Features />
   <Testimonials />
   <Pricing />
   <Signup />
   <Footer /> 
   </div>
    </>
  )
}

export default App
