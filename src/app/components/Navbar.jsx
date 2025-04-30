'use client'
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-blue-600 bg-clip-text text-transparent">TALENT<span className='text-gray-800'>ARCHITECT</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition font-medium">Services</a>
            <a href="#why-choose-us" className="text-gray-700 hover:text-blue-600 transition font-medium">Why Us</a>
            <a href="#contact" className="btn btn-primary btn-sm text-white">Contact Us</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col mt-4 space-y-4 pb-3">
              <a href="#home" className="text-gray-800 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" className="text-gray-800 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>About</a>
              <a href="#services" className="text-gray-800 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#why-choose-us" className="text-gray-800 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Why Us</a>
              <a href="#contact" className="text-gray-800 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;