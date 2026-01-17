
import React from 'react';
import { Sparkles, Target, Rocket, PenTool, BarChart3, Users, Zap, Database } from 'lucide-react';

const contents = [
  {
    title: "Brand Voice",
    desc: "Define a personality that resonates and sounds authentically like your highest self.",
    icon: Sparkles
  },
  {
    title: "Niche Formula",
    desc: "Find the intersection of your skills and market demand for high-value positioning.",
    icon: Target
  },
  {
    title: "Vision Blueprint",
    desc: "Long-term positioning strategies to ensure your brand stays relevant for decades.",
    icon: Rocket
  },
  {
    title: "Signature Story",
    desc: "Turn your personal journey into a magnetic narrative that builds trust instantly.",
    icon: PenTool
  },
  {
    title: "Expert Positioning",
    desc: "Advanced strategies to become the 'Go-To' expert in your field through content.",
    icon: BarChart3
  },
  {
    title: "Visual Systems",
    desc: "A guide to clean, minimal, and high-end visual design without a design degree.",
    icon: Users
  },
  {
    title: "Monetization",
    desc: "Frameworks to turn your brand equity into high-margin automated digital products.",
    icon: Zap
  },
  {
    title: "AI Prompt Vault",
    desc: "A massive library of specific AI prompts to execute months of work in minutes.",
    icon: Database
  }
];

export const WhatIsInside: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-900">Inside the Playbook</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl font-light">The complete digital operating system for modern branding.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contents.map((item, idx) => (
            <div key={idx} className="p-10 rounded-[32px] bg-[#fcfcfc] border border-gray-100 transition-all hover:bg-white hover:card-shadow hover:-translate-y-2 group">
              <div className="w-14 h-14 rounded-2xl bg-brand-start/5 flex items-center justify-center mb-8 group-hover:bg-brand-gradient group-hover:text-white transition-all duration-300">
                <item.icon className="w-7 h-7 text-brand-mid group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
