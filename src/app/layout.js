"use client"

import "./globals.css";
import React, { useState, useEffect } from 'react';

export default function RootLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen justify-center bg-gray-100 text-gray-800">
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

        {/* Add padding to account for fixed header */}
        <div className="pt-24 flex-grow">
          {children}
        </div>

        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-light tracking-[0.1em] mb-4">DREAMSUM PRODUCTIONS</h3>
                <p className="text-gray-300 font-light mb-4">
                  Creating meaningful cinema and podcasts that inspire, inform and entertain
                </p>
                <p className="text-gray-400 text-sm font-light">Based in London, United Kingdom</p>
              </div>

              <div>
                <h4 className="text-lg font-light mb-4">Explore</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-300 hover:text-white transition-colors font-light">Home</a></li>
                  <li><a href="/whoAmI" className="text-gray-300 hover:text-white transition-colors font-light">Who I am</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors font-light">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-light mb-4">Stay Updated</h4>
                <p className="text-gray-300 mb-4 text-sm font-light">Sign up with your email address to receive news and updates.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-amber-500 focus:outline-none font-light text-sm"
                  />
                  <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors font-light text-sm">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-400 text-sm font-light">© 2025 Dreamsum Productions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}