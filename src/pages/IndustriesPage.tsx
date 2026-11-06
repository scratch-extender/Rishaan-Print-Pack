import React from 'react';
import { Factory, CheckCircle2, ArrowRight } from 'lucide-react';
import type { PageId } from '../types';

interface IndustriesPageProps {
  onNavigate: (page: PageId) => void;
}

const INDUSTRIES = [
  {
    title: 'Pharmaceuticals & Healthcare',
    desc: 'Secure, tamper-evident duplex cartons and inner boxes designed to meet strict regulatory and safety standards for medicines and medical devices.',
    features: ['Tamper-evident sealing', 'Precise sizing for blister packs', 'High-contrast pharma printing'],
  },
  {
    title: 'Cosmetics & Personal Care',
    desc: 'Luxurious finish duplex cartons that enhance shelf appeal and protect delicate skincare, hair care, and beauty bottles during distribution.',
    features: ['Premium gloss & matte lamination', 'Custom die-cut windows', 'Vibrant multi-color branding'],
  },
  {
    title: 'Food & Beverages',
    desc: 'Food-grade corrugated boxes and duplex cartons engineered to preserve freshness, withstand cold-chain transit, and comply with hygiene requirements.',
    features: ['Food-safe material sourcing', 'High stacking compression strength', 'Custom ventilation options'],
  },
  {
    title: 'Retail & E-Commerce Consumer Goods',
    desc: 'Durable outer shipping cartons and retail-ready packaging designed to withstand rigorous shipping cycles while showcasing brand elegance.',
    features: ['Drop-test verified durability', 'Custom branding options', 'Eco-friendly recyclable materials'],
  },
];

export default function IndustriesPage({ onNavigate }: IndustriesPageProps) {
  return (
    <div className="py-16">
      <section className="bg-gradient-to-br from-[#0a1a2f] to-[#1a2f4f] py-20 text-white text-center mb-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <span className="text-[#e8842e] font-semibold text-sm uppercase tracking-[0.2em]">Sectors We Serve</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">Industries & Applications</h1>
          <div className="w-20 h-1 bg-[#e8842e] mx-auto rounded-full mb-4" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tailored packaging solutions engineered for specialized sector requirements.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES.map((ind, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0a1a2f] text-[#e8842e] flex items-center justify-center mb-6">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0a1a2f] mb-3">{ind.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{ind.desc}</p>
              </div>
              <div className="border-t border-gray-100 pt-4 space-y-2">
                {ind.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#e8842e]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-gray-50 py-16 border-t border-gray-100 text-center">
        <div className="max-w-3xl mx-auto px-5 md:px-8 space-y-6">
          <h2 className="text-3xl font-bold text-[#0a1a2f]">Need Industry-Specific Custom Packaging?</h2>
          <p className="text-gray-600">Our engineering team can design custom box dimensions tailored to your exact industry standards.</p>
          <button
            onClick={() => {
              onNavigate('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#0a1a2f] hover:bg-[#1a2f4f] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
          >
            Learn About Our Facilities <ArrowRight className="w-5 h-5 text-[#e8842e]" />
          </button>
        </div>
      </section>
    </div>
  );
}
