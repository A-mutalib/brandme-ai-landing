
import React from 'react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">
          Architecting brands for the world's top creators
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale saturate-0 contrast-150">
          <span className="text-2xl font-black tracking-tighter">CREATOR OS</span>
          <span className="text-2xl font-black tracking-tighter">FOUNDRY</span>
          <span className="text-2xl font-black tracking-tighter">SOLO STACK</span>
          <span className="text-2xl font-black tracking-tighter">NICHED</span>
          <span className="text-2xl font-black tracking-tighter">AUTHORITY LABS</span>
        </div>
      </div>
    </section>
  );
};
