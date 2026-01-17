
import React from 'react';
import { MoveRight } from 'lucide-react';

export const Transformation: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-24 tracking-tight text-center text-gray-900">The Ultimate Shift</h2>
        
        <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-12 items-center">
          <div className="p-10 rounded-[40px] border border-gray-100 bg-gray-50/50 grayscale opacity-60">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Current State</h4>
            <ul className="space-y-6 text-gray-500 font-medium">
              <li className="flex gap-3"><span>✕</span> <span>Confused, generic identity</span></li>
              <li className="flex gap-3"><span>✕</span> <span>Low-leverage networking</span></li>
              <li className="flex gap-3"><span>✕</span> <span>Inconsistent visual presence</span></li>
              <li className="flex gap-3"><span>✕</span> <span>Struggling to charge premium</span></li>
              <li className="flex gap-3"><span>✕</span> <span>Manual manual everything</span></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full brand-gradient flex items-center justify-center text-white shadow-xl shadow-brand-mid/30 animate-pulse">
              <MoveRight className="w-8 h-8" />
            </div>
          </div>
          
          <div className="p-12 rounded-[40px] border-2 border-brand-start/10 bg-white card-shadow relative">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand-gradient text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">Authority Unlocked</div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-mid mb-8">BrandMe AI State</h4>
            <ul className="space-y-6 text-gray-900 font-bold">
              <li className="flex gap-3"><span className="text-brand-mid">✓</span> <span>Crystal clear authority positioning</span></li>
              <li className="flex gap-3"><span className="text-brand-mid">✓</span> <span>Inbound opportunities by default</span></li>
              <li className="flex gap-3"><span className="text-brand-mid">✓</span> <span>World-class visual systems</span></li>
              <li className="flex gap-3"><span className="text-brand-mid">✓</span> <span>Command 3-10x higher rates</span></li>
              <li className="flex gap-3"><span className="text-brand-mid">✓</span> <span>AI-automated brand workflows</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
