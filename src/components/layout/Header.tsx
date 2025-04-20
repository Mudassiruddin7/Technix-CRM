'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Technix-CRM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              About Us
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Blog
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login" className="px-4 py-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
              Login
            </Link>
            <Link href="/contact" className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/features" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                Pricing
              </Link>
              <Link href="/#about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                About Us
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Link href="/auth/login" className="px-4 py-2 text-center text-indigo-600 border border-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition-colors">
                  Login
                </Link>
                <Link href="/contact" className="px-4 py-2 text-center bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors">
                  Book a Demo
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
