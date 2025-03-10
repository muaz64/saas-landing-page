import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col items-center md:flex-row md:justify-between">
        
        {/* Logo & About - Left Aligned */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">SaaSify.co</h2>
          <p className="text-gray-400 text-sm mt-2">Empowering your business with AI solutions.</p>
        </div>

        {/* Quick Links - Centered */}
        <div className="flex gap-8 md:gap-10 justify-center mb-6 md:mb-0">
          <a href="#" className="text-gray-400 hover:text-white transition">Home</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Features</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Pricing</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
        </div>

        {/* Social Icons - Right Aligned */}
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110">
            <FaInstagram size={24} />
          </a>
        </div>

      </div>

      {/* Copyright Section - Centered */}
      <div className="text-right text-gray-500 text-sm mt-6 p-2">
        &copy; {new Date().getFullYear()} SaaSify.co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
