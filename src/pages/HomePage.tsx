import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Award, CheckCircle2, Factory, Package } from 'lucide-react';
import type { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#0a1a2f] via-[#11243f] to-[#1a2f4f] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Crect%20width%3D%2260%22%20height%3D%2260%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#e8842e]/20 border border-[#e8842e]/30 px-4 py-2 rounded-full text-[#e8842e] text-xs font-semibold tracking-wider uppercase">
              <Award className="w-4 h-4" /> 20+ Years of Manufacturing Excellence
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Precision Corrugated & <span className="text-[#e8842e]">Duplex Packaging</span> Solutions
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Supplying robust outer and inner cartons with uncompromising quality control, in-house lab testing, and direct cost benefits from paper trading.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onNavigate('products')}
                className="w-full sm:w-auto bg-[#e8842e] hover:bg-[#d4651a] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-base"
              >
                Explore Products <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 border border-white/20 text-base"
              >
                Our Manufacturing Plants
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4 flex items-center gap-3">
                <Factory className="w-6 h-6 text-[#e8842e]" /> Why Choose Rishaan?
              </h3>
              <ul className="space-y-4 text-sm text-gray-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#e8842e] flex-shrink-0 mt-0.5" />
                  <span><strong>Cash-Based Procurement:</strong> Raw materials purchased on cash for direct cost savings passed to you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#e8842e] flex-shrink-0 mt-0.5" />
                  <span><strong>In-House Testing Lab:</strong> GSM, BF, Cob, and compression testers for flawless quality assurance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#e8842e] flex-shrink-0 mt-0.5" />
                  <span><strong>Strategic Plants:</strong> Active manufacturing units across Nashik and Vapi, with godowns in Chakan.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#e8842e] font-semibold text-sm uppercase tracking-[0.2em]">Core Advantages</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1a2f] mt-3 mb-4">
              Engineered for Strength & Precision
            </h2>
            <div className="w-20 h-1 bg-[#e8842e] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: 'Outer & Inner Cartons',
                desc: 'Custom manufactured duplex and corrugated boxes tailored precisely to your product dimensions and branding.',
              },
              {
                icon: ShieldCheck,
                title: 'Rigid Quality Control',
                desc: 'Every batch undergoes rigorous testing for bursting strength, GSM standards, and compression resistance in our lab.',
              },
              {
                icon: Zap,
                title: 'Reliable & Timely Supply',
                desc: 'Three robust operational hubs ensure uninterrupted supply chains and safe transit directly to your facility.',
              },
            ].map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-[#0a1a2f] text-[#e8842e] flex items-center justify-center mb-6 group-hover:bg-[#e8842e] group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1a2f] mb-3">{feat.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
