import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-bg shadow-sm mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-600 dark:text-gray-300 hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-primary">Blog</Link></li>
              <li><Link to="/guides" className="text-gray-600 dark:text-gray-300 hover:text-primary">Guides</Link></li>
              <li><Link to="/help" className="text-gray-600 dark:text-gray-300 hover:text-primary">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-primary">Terms of Service</Link></li>
              <li><Link to="/guidelines" className="text-gray-600 dark:text-gray-300 hover:text-primary">Community Guidelines</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Stay updated with our latest features and news</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-r-full hover:bg-opacity-90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}