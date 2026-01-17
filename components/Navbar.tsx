
import React from 'react';

interface NavbarProps {
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 brand-gradient rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-brand-start/20">B</div>
          <span className="font-bold tracking-tight text-gray-900 text-lg">BrandMe AI</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-500">
          <a href="#how-it-works" className="hover:text-brand-mid transition-colors">Framework</a>
          <a href="#curriculum" className="hover:text-brand-mid transition-colors">Content</a>
          <a href="#pricing" className="hover:text-brand-mid transition-colors">Pricing</a>
        </div>
        <button 
          onClick={onCtaClick}
          className="px-6 py-2.5 brand-gradient text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-brand-mid/20 transition-all active:scale-95"
        >
          Get Playbook
        </button>
      </div>
    </nav>
  );
};
