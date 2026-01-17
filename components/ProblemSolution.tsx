
import React from 'react';
import { MinusCircle, PlusCircle } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-[#fdfdfd]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900 leading-tight">
                Most brands fail because they <span className="text-red-500">guess</span> instead of <span className="text-brand-mid">systematizing</span>.
              </h2>
              <p className="text-lg text-gray-500 max-w-lg font-light leading-relaxed">
                Relying on "viral hacks" is a losing game. You need a brand identity that anchors your authority.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <MinusCircle className="w-7 h-7 text-red-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Noise vs. Signal</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Generic content creates noise. Strategic branding creates a signal that your audience can't ignore.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <MinusCircle className="w-7 h-7 text-red-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">The 'Commodity' Trap</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Without unique positioning, you're just another creator. We help you build a category of one.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-10 md:p-16 rounded-[40px] bg-white border border-gray-100 card-shadow relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 brand-gradient blur-[60px] opacity-20"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-tight text-gray-900">
              The <span className="brand-text-gradient">BrandMe System</span>
            </h2>
            
            <div className="space-y-10">
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-brand-start/10 flex items-center justify-center shrink-0">
                  <PlusCircle className="w-6 h-6 text-brand-mid" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">AI Extraction</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">We use proprietary AI prompts to extract your unique insights and translate them into brand assets.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-brand-start/10 flex items-center justify-center shrink-0">
                  <PlusCircle className="w-6 h-6 text-brand-mid" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Authority Engine</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">A blueprint to position yourself so you never have to compete on price again.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
