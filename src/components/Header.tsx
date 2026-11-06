import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import type { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'industries', label: 'Industries' },
    { id: 'about', label: 'About Us' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 rounded-xl bg-[#0a1a2f] flex items-center justify-center text-white font-bold text-xl group-hover:bg-[#e8842e] transition-colors">
            R
          </div>
          <div>
            <span className="font-extrabold text-xl text-[#0a1a2f] block leading-tight">Rishaan Print Pack</span>
            <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">Packaging & Cartons</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                currentPage === item.id
                  ? 'bg-[#0a1a2f] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#0a1a2f] hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Phone */}
        <div className="hidden lg:flex items-center gap-3 bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl">
          <div className="w-8 h-8 rounded-lg bg-[#e8842e]/10 flex items-center justify-center text-[#e8842e]">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] uppercase text-gray-400 font-semibold block">Inquiries</span>
            <a href="tel:9850508182" className="text-sm font-bold text-[#0a1a2f] hover:text-[#e8842e] transition-colors">
              9850508182
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                currentPage === item.id
                  ? 'bg-[#0a1a2f] text-white'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-[#0a1a2f]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between px-2">
            <span className="text-sm text-gray-500">Call Us</span>
            <a href="tel:9850508182" className="font-bold text-[#e8842e]">9850508182</a>
          </div>
        </div>
      )}
    </header>
  );
}
