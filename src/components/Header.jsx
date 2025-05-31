import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-dark-bg shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">TechLearn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/learn" className="text-gray-700 dark:text-gray-200 hover:text-primary">Learn</Link>
            <Link to="/projects" className="text-gray-700 dark:text-gray-200 hover:text-primary">Projects</Link>
            <Link to="/community" className="text-gray-700 dark:text-gray-200 hover:text-primary">Community</Link>
            <Link to="/profile" className="text-gray-700 dark:text-gray-200 hover:text-primary">My Profile</Link>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
              Join for Free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/learn" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary">Learn</Link>
              <Link to="/projects" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary">Projects</Link>
              <Link to="/community" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary">Community</Link>
              <Link to="/profile" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary">My Profile</Link>
              <button className="w-full text-center bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
                Join for Free
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}