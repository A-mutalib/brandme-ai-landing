
import React from 'react';
import { Check } from 'lucide-react';

const audiences = [
  "Freelancers scaling to agencies",
  "Creators building digital empires",
  "Entrepreneurs launching startups",
  "Coaches productizing expertise",
  "Founders rebranding for exits",
  "Solopreneurs tired of plateauing"
];

export const WhoThisIsFor: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#fdfdfd]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900 tracking-tight">Designed for the 1%</h2>
          <p className="text-gray-500 font-light text-lg">Built for those who value clarity over complexity.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((aud, idx) => (
            <div key={idx} className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-gray-100 card-shadow transition-transform hover:scale-[1.02]">
              <div className="w-6 h-6 rounded-full brand-gradient flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-gray-800 font-semibold">{aud}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
