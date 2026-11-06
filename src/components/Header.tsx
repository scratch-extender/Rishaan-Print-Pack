import React from 'react';
import type { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div 
          className="font-bold text-xl cursor-pointer text-gray-900" 
          onClick={() => onNavigate('home')}
        >
          Rishaan Print Pack
        </div>
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => onNavigate('home')} 
            className={`${currentPage === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('products')} 
            className={`${currentPage === 'products' ? 'text-blue-600 font-semibold' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
          >
            Products
          </button>
          <button 
            onClick={() => onNavigate('industries')} 
            className={`${currentPage === 'industries' ? 'text-blue-600 font-semibold' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
          >
            Industries
          </button>
          <button 
            onClick={() => onNavigate('about')} 
            className={`${currentPage === 'about' ? 'text-blue-600 font-semibold' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
          >
            About Us
          </button>
        </nav>
      </div>
    </header>
  );
}
