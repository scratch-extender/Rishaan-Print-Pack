import React from 'react';
import type { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Rishaan Print Pack</h3>
          <p className="text-gray-400 text-sm">Professional packaging and custom printing solutions for modern industries.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gray-200">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button></li>
            <li><button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">Products</button></li>
            <li><button onClick={() => onNavigate('industries')} className="hover:text-white transition-colors">Industries</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">About Us</button></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
