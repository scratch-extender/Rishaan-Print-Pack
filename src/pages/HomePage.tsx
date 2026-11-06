import React from 'react';
import type { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center py-20 bg-blue-50 rounded-2xl mb-12 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Precision Printing & Packaging Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Delivering world-class customized packaging, cartons, and boxes for growing brands.
        </p>
        <button 
          onClick={() => onNavigate('products')} 
          className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Explore Products
        </button>
      </div>
    </div>
  );
}
