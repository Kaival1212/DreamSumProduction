"use client";

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
        }`}
    >
        <nav className="max-w-7xl mx-auto px-6 py-4 ">
          <div className="flex md:flex-col items-center justify-around pb-4">
            <div className="flex items-center">
              <a href="/" className="text-xl md:text-3xl font-light tracking-[0.2em] text-gray-800 hover:text-amber-700 transition-colors">
                DREAMSUM PRODUCTIONS
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 pt-4">
              <a
                href="/whoAmI"
                className="text-sm font-medium tracking-wide text-gray-600 hover:text-amber-700 transition-colors"
              >
                Who I am
              </a>
              <a
                href="/slate"
                className="text-sm font-medium tracking-wide text-gray-600 hover:text-amber-700 transition-colors"
              >
                On the slate
              </a>
              <a
                href="/contact"
                className="text-sm font-medium tracking-wide text-gray-600 hover:text-amber-700 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-600 hover:text-gray-800 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
                    }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-current top-3 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
                    }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
              ? 'max-h-64 opacity-100 mt-4'
              : 'max-h-0 opacity-0'
              }`}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 py-4">
              <div className="flex flex-col space-y-4 px-6">
                <a
                  href="/whoAmI"
                  onClick={closeMobileMenu}
                  className="text-base font-medium tracking-wide text-gray-600 hover:text-amber-700 transition-colors py-2 border-b border-gray-200 last:border-b-0"
                >
                  Who I am
                </a>
                <a
                  href="/slate"
                  onClick={closeMobileMenu}
                  className="text-base font-medium tracking-wide text-gray-600 hover:text-amber-700 transition-colors py-2 border-b border-gray-200 last:border-b-0"
                >
                  On the slate
                </a>
                <a
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="text-base font-medium tracking-wide text-gray-600 hover:text-amber-700 transition-colors py-2"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
}
