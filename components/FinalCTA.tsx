
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onCtaClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto rounded-[64px] brand-gradient p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-mid/30">
        {/* Decorative circle */}
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] bg-black/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-10 leading-tight">
            The world is waiting for <br className="hidden md:block" /> your standout brand.
          </h2>
          <p className="text-white/80 text-xl md:text-2xl mb-14 max-w-2xl mx-auto font-medium">
            Join the inner circle of creators who have stopped guessing and started building with AI systems.
          </p>
          <button 
            onClick={onCtaClick}
            className="inline-flex items-center gap-3 px-14 py-6 bg-white text-gray-900 rounded-2xl font-black text-2xl hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 shadow-2xl"
          >
            Get Started Now
            <ArrowRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};
