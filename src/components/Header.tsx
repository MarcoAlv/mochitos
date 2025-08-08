'use client'
import ThemeToggle from '@/components/ThemeToggle';
import ThemeToggleButton from '@/components/ThemeToggleButton';
import { PROJECT_URL } from '@/config/app.config';
import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 w-full bg-white dark:bg-navy-blue-900 shadow-sm dark:shadow-navy-blue-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center space-x-3">
            <Image
              src={`${PROJECT_URL}/assets/img_icon.png`}
              width={150}
              height={150}
              alt='Mochitos'
              className='h-13 w-auto object-contain'
            />
            <Image
              src={`${PROJECT_URL}/assets/text_icon.png`}
              width={100}
              height={28}
              alt='Mochitos'
              className='w-auto object-contain'
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="text-gray-700 dark:text-navy-blue-100 hover:text-moch-500 dark:hover:text-moch-400 font-medium transition-colors duration-200"
            >
              About Us
            </a>
            <a 
              href="#dates" 
              className="text-gray-700 dark:text-navy-blue-100 hover:text-moch-500 dark:hover:text-moch-400 font-medium transition-colors duration-200"
            >
              Dates
            </a>
            <a 
              href="#gallery" 
              className="text-gray-700 dark:text-navy-blue-100 hover:text-moch-500 dark:hover:text-moch-400 font-medium transition-colors duration-200"
            >
              Gallery
            </a>
            <a 
              href="#more" 
              className="text-gray-700 dark:text-navy-blue-100 hover:text-moch-500 dark:hover:text-moch-400 font-medium transition-colors duration-200"
            >
              More
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <p className='pr-1.5'><ThemeToggleButton /></p>
              
            <button className="px-4 py-2 text-moch-500 dark:text-moch-400 border-2 border-moch-500 dark:border-moch-400 rounded-lg font-nunito font-medium hover:bg-moch-50 dark:hover:bg-moch-900/20 transition-colors duration-200">
              Log in
            </button>
            <button className="px-4 py-2 bg-moch-500 dark:bg-moch-600 text-white rounded-lg font-nunito font-bold hover:bg-moch-600 dark:hover:bg-moch-500 transition-colors duration-200">
              Sign up
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-navy-blue-100 hover:text-moch-500 dark:hover:text-moch-400 transition-colors duration-500"
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-400 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`} 
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

      <div className={`md:hidden border-t border-navy-blue-200 dark:border-navy-blue-700 bg-white dark:bg-navy-blue-900 transition-all duration-500 ease-in-out ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="px-4 py-3 space-y-2">
          <a 
            href="#about" 
            className="block py-2 text-gray-700 dark:text-navy-blue-100 hover:text-moch-500 dark:hover:text-moch-400 font-medium transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a 
            href="#dates" 
            className="block py-2 text-gray-700 dark:text-navy-blue-100 hover:text-moch-500 dark:hover:text-moch-400 font-medium transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Dates
          </a>
          <a 
            href="#gallery" 
            className="block py-2 text-gray-700 dark:text-navy-blue-100 hover:text-moch-500 dark:hover:text-moch-400 font-medium transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </a>
          <a 
            href="#more" 
            className="block py-2 text-gray-700 dark:text-navy-blue-100 hover:text-moch-500 dark:hover:text-moch-400 font-medium transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            More
          </a>


        <ThemeToggle />
          
          <div className="pt-4 border-t border-navy-blue-100 dark:border-navy-blue-700 space-y-2">
            <button 
              className="w-full py-2 text-moch-500 dark:text-moch-400 border-2 border-moch-500 dark:border-moch-400 rounded-lg font-medium hover:bg-moch-50 dark:hover:bg-moch-900/20 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log in
            </button>
            <button 
              className="w-full py-2 bg-moch-500 dark:bg-moch-600 text-white rounded-lg font-medium hover:bg-moch-600 dark:hover:bg-moch-500 transition-colors duration-200"
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