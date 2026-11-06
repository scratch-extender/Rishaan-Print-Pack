import React from 'react';
import { Package, CheckCircle2, Phone } from 'lucide-react';

const PRODUCTS = [
  {
    title: 'Corrugated Boxes & Cartons',
    category: 'Outer Packaging',
    desc: 'Heavy-duty single wall and multi-wall corrugated boxes manufactured with broad and narrow flutes for superior stacking strength and transit safety.',
    specs: ['Automatic & Manual Corrugation', 'Custom Flute Profiles', 'High Compression Strength'],
  },
  {
    title: 'Duplex Outer & Inner Cartons',
    category: 'Retail Packaging',
    desc: 'Premium duplex board cartons designed for cosmetics, pharmaceuticals, food items, and retail displays with immaculate print finishes.',
    specs: ['High-Resolution Printing', 'Custom Die-cutting', 'Gloss/Matte Lamination Options'],
  },
  {
    title: 'Custom Printed Packaging',
    category: 'Branded Solutions',
    desc: 'Specialized stereo printing and multi-color graphic cartons tailored to enhance brand identity and shelf impact.',
    specs: ['Up to 8-Color Printing Support', 'Precise Slotting & Pasting', 'Custom Branding'],
  },
];

const CAPABILITIES = [
  'Automatic Corrugation Machine (Broad/Narrow Flute)',
  'RS 4 Printer Machine & Stereo Printing',
  'Platten & Flat Belt Punching Machines',
  'Advanced Slotting, Pasting & Stitching Units',
];

export default function ProductsPage() {
  return (
    <div className="py-16">
      <section className="bg-gradient-to-br from-[#0a1a2f] to-[#1a2f4f] py-20 text-white text-center mb-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <span className="text-[#e8842e] font-semibold text-sm uppercase tracking-[0.2em]">Catalog & Solutions</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">Our Premium Products</h1>
          <div className="w-20 h-1 bg-[#e8842e] mx-auto rounded-full mb-4" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Built with precision machinery and tested rigorously for uncompromising structural integrity.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((prod, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#e8842e] uppercase tracking-wider bg-[#e8842e]/10 px-3 py-1 rounded-full">
                    {prod.category}
                  </span>
                  <Package className="w-6 h-6 text-[#0a1a2f]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0a1a2f] mb-3">{prod.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{prod.desc}</p>
              </div>
              <div className="border-t border-gray-100 pt-4 space-y-2">
                {prod.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#e8842e]" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0a1a2f] mb-6">Advanced Manufacturing Infrastructure</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            {CAPABILITIES.map((cap, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#e8842e] flex-shrink-0" />
                <span className="text-sm font-semibold text-gray-800">{cap}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="tel:9850508182"
              className="inline-flex items-center gap-3 bg-[#e8842e] hover:bg-[#d4651a] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              <Phone className="w-5 h-5" /> Request Custom Quote: 9850508182
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
