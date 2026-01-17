
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center font-bold text-white text-sm">B</div>
          <span className="font-bold text-gray-900 tracking-tight">BrandMe AI</span>
        </div>
        
        <div className="flex gap-10 text-sm font-bold text-gray-400">
          <a href="#" className="hover:text-brand-mid transition-colors">Privacy</a>
          <a href="#" className="hover:text-brand-mid transition-colors">Terms</a>
          <a href="#" className="hover:text-brand-mid transition-colors">Support</a>
        </div>
        
        <p className="text-sm font-medium text-gray-400">
          © {new Date().getFullYear()} BrandMe AI. A Premium Product for the Modern Creator.
        </p>
      </div>
    </footer>
  );
};
