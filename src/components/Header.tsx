'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center space-x-3">
            <Image
              src='/assets/img_icon.png' 
              width={150}
              height={150}
              alt='Mochitos'
              className='h-13 w-auto object-contain'
            />
            <Image
              src='/assets/text_icon.png' 
              width={150}
              height={150}
              alt='Mochitos'
              className='h-8 w-auto object-contain'
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-moch-500 font-medium transition-colors duration-200"
            >
              About Us
            </a>
            <a 
              href="#dates" 
              className="text-gray-700 hover:text-moch-500 font-medium transition-colors duration-200"
            >
              Dates
            </a>
            <a 
              href="#gallery" 
              className="text-gray-700 hover:text-moch-500 font-medium transition-colors duration-200"
            >
              Gallery
            </a>
            <a 
              href="#more" 
              className="text-gray-700 hover:text-moch-500 font-medium transition-colors duration-200"
            >
              More
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <button className="px-6 py-2 text-moch-500 border-2 border-moch-500 rounded-lg font-nunito font-medium hover:bg-moch-50 transition-colors duration-200">
              Log in
            </button>
            <button className="px-6 py-2 bg-moch-500 text-white rounded-lg font-nunito font-bold hover:bg-moch-600 transition-colors duration-200">
              Sign up
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-moch-500 transition-colors duration-200"
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden border-t border-gray-200 transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="px-4 py-3 space-y-2">
          <a 
            href="#about" 
            className="block py-2 text-gray-700 hover:text-moch-500 font-medium transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a 
            href="#dates" 
            className="block py-2 text-gray-700 hover:text-moch-500 font-medium transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Dates
          </a>
          <a 
            href="#gallery" 
            className="block py-2 text-gray-700 hover:text-moch-500 font-medium transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </a>
          <a 
            href="#more" 
            className="block py-2 text-gray-700 hover:text-moch-500 font-medium transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            More
          </a>
          
          <div className="pt-4 border-t border-gray-100 space-y-2">
            <button 
              className="w-full py-2 text-moch-500 border-2 border-moch-500 rounded-lg font-medium hover:bg-moch-50 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log in
            </button>
            <button 
              className="w-full py-2 bg-moch-500 text-white rounded-lg font-medium hover:bg-moch-600 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;