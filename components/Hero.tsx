
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-28 pb-40 px-6 overflow-hidden bg-white">
      {/* Premium Background Accents */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-brand-start/5 blur-[120px] rounded-full -z-10 animate-float"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-brand-mid/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-start/5 border border-brand-start/10 text-xs font-bold text-brand-mid mb-8 uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>New Framework V2.0</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.05] text-gray-900">
          Build, Brand & Monetize a <br className="hidden md:block" />
          <span className="brand-text-gradient">Standout Brand</span> with AI
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
          The definitive guide for creators and solopreneurs to dominate their niche. 
          From zero clarity to authority-driven monetization using AI-powered systems.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={onCtaClick}
            className="group px-10 py-5 brand-gradient text-white rounded-2xl font-bold text-xl flex items-center gap-3 hover:shadow-2xl hover:shadow-brand-mid/40 transition-all hover:-translate-y-1 active:scale-95"
          >
            Get the Playbook
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="mt-20 flex flex-wrap justify-center gap-4 text-sm text-gray-400 font-medium">
          <span className="flex items-center gap-1.5">No fluff</span>
          <span className="text-gray-200">•</span>
          <span className="flex items-center gap-1.5">AI Native</span>
          <span className="text-gray-200">•</span>
          <span className="flex items-center gap-1.5">Monetization Ready</span>
        </div>
      </div>
    </section>
  );
};
