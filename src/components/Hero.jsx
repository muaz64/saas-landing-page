import React from 'react'
const Hero = () => {
    return (
      <section className="relative bg-gray-300 text-white text-center py-25 px-5">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('public/images/hero bg img.png')" }}
        ></div>
  
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Revolutionize Your Workflow</h1>
          <p className="text-lg mb-6">Boost productivity with our AI-powered SaaS solution.</p>
          <a
            href="#signup"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-200"
          >
            Get Started
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  