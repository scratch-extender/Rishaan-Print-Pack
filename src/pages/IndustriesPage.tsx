import React from 'react';
import type { PageId } from '../types';

interface IndustriesPageProps {
  onNavigate: (page: PageId) => void;
}

export default function IndustriesPage({ onNavigate: _onNavigate }: IndustriesPageProps) {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Industries We Serve</h1>
      <p className="text-gray-600">Tailored packaging solutions built for cosmetics, pharmaceuticals, food & beverages, and retail sectors.</p>
    </div>
  );
}
