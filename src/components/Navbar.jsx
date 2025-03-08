import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-blue-600 fixed w-full top-0 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">SaaSify</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#features" className="hover:text-gray-300">Features</a></li>
          <li><a href="#testimonials" className="hover:text-gray-300">Testimonials</a></li>
          <li><a href="#pricing" className="hover:text-gray-300">Pricing</a></li>
          <li><a href="#signup" className="bg-gray-400 text-blue-600 px-4 py-2 rounded-md font-bold hover:bg-gray-200">Sign Up</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 text-center space-y-4 p-4">
          <li><a href="#features" className="block py-2" onClick={() => setIsOpen(false)}>Features</a></li>
          <li><a href="#testimonials" className="block py-2" onClick={() => setIsOpen(false)}>Testimonials</a></li>
          <li><a href="#pricing" className="block py-2" onClick={() => setIsOpen(false)}>Pricing</a></li>
          <li><a href="#signup" className="block py-2 bg-white text-blue-600 rounded-md font-bold" onClick={() => setIsOpen(false)}>Sign Up</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
