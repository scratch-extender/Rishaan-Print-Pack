import React from 'react';
import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';
import type { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0a1a2f] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-[#e8842e] flex items-center justify-center text-white font-bold text-lg">
              R
            </div>
            <span className="font-extrabold text-lg tracking-tight">Rishaan Print Pack</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Professional manufacturing of outer & inner duplex and corrugated cartons with 20+ years of quality excellence.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#e8842e] font-semibold tracking-wider uppercase">
            <span>Mahavir Packaging Sister Concern</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white text-base mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-[#e8842e] rounded-full" />
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-gray-300">
            {[
              { id: 'home', label: 'Home' },
              { id: 'products', label: 'Products & Specifications' },
              { id: 'industries', label: 'Industries We Serve' },
              { id: 'about', label: 'About Us & Plants' },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => {
                    onNavigate(link.id as PageId);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#e8842e] transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#e8842e] group-hover:translate-x-1 transition-transform" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-base mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-[#e8842e] rounded-full" />
            Our Plants & Offices
          </h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#e8842e] flex-shrink-0 mt-0.5" />
              <span><strong>Nashik:</strong> Satpur MIDC (Main Plant & Lab)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#e8842e] flex-shrink-0 mt-0.5" />
              <span><strong>Vapi:</strong> Factory & Office (11,000 sq. ft.)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#e8842e] flex-shrink-0 mt-0.5" />
              <span><strong>Chakan:</strong> Godowns & Upcoming Auto Plant</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-base mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-[#e8842e] rounded-full" />
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm text-gray-300 mb-6">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#e8842e]">
                <Phone className="w-4 h-4" />
              </div>
              <a href="tel:9850508182" className="hover:text-[#e8842e] transition-colors font-semibold">
                9850508182
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#e8842e]">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-gray-300">chhajedgroup@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
        <p>© {new Date().getFullYear()} Rishaan Print Pack & Mahavir Packaging. All rights reserved.</p>
        <p className="mt-2 sm:mt-0 text-gray-400">Custom Printed Cartons & Corrugated Packaging Solutions</p>
      </div>
    </footer>
  );
}
