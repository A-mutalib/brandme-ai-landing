
import React, { useState } from 'react';
import { Check, ShieldCheck, Zap, Mail } from 'lucide-react';
import { PaystackButtonWrapper } from './PaystackButton';

interface PricingProps {
  onSuccess: (email: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (emailStr: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const plan = {
    id: "premium",
    name: "The Full Playbook System",
    price: 10000,
    description: "The complete automated system for scale, branding, and monetization.",
    features: [
      "Full Digital Playbook (PDF)",
      "Proprietary AI Prompt Vault",
      "Niche Clarity & Voice Matrix",
      "Monetization Blueprints",
      "Authority Positioning Guide",
      "Premium Visual Asset Kit",
      "Lifetime Updates & Support"
    ]
  };

  const onPaymentSuccess = () => {
    onSuccess(email);
  };

  return (
    <div className="py-40 px-6 bg-[#fdfdfd]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-900">Premium Access</h2>
          <p className="text-gray-500 text-xl font-light">Join the 1% of creators building with AI systems.</p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="relative flex flex-col p-10 md:p-14 rounded-[48px] border-2 bg-white border-brand-start shadow-2xl shadow-brand-start/10 transition-all duration-500">
            <div className="absolute top-8 right-8 text-brand-mid">
              <Zap className="w-8 h-8 fill-brand-mid" />
            </div>
            
            <div className="mb-10">
              <h3 className="text-3xl font-black mb-3 brand-text-gradient">{plan.name}</h3>
              <p className="text-gray-500 text-base leading-relaxed mb-8 font-medium">{plan.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-black text-gray-900">₦{plan.price.toLocaleString()}</span>
                <span className="text-gray-400 font-bold text-lg">once</span>
              </div>
            </div>

            {/* Email Input Section */}
            <div className="mb-10">
              <label htmlFor="email-input" className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
                Delivery Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  id="email-input"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-2 transition-all outline-none text-gray-900 font-medium ${
                    emailError ? 'border-red-200 focus:border-red-500' : 'border-gray-100 focus:border-brand-mid'
                  }`}
                />
              </div>
              <p className="mt-2 text-xs text-gray-400 font-medium italic">
                The playbook will be automatically sent to this email after payment.
              </p>
            </div>
            
            <div className="flex-grow space-y-5 mb-12">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-brand-start/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-brand-mid" />
                  </div>
                  <span className="text-gray-600 font-semibold">{feature}</span>
                </div>
              ))}
            </div>
            
            <PaystackButtonWrapper 
              amount={plan.price} 
              email={email} 
              planName={plan.name} 
              onSuccess={onPaymentSuccess}
              variant="primary"
              disabled={!validateEmail(email)}
            />
            
            {!validateEmail(email) && email.length > 0 && (
              <p className="mt-4 text-center text-red-500 text-sm font-bold">Please enter a valid email address</p>
            )}
            
            <div className="mt-8 flex items-center justify-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              SSL Secured Payment via Paystack
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
