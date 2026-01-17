
import React, { useState, useCallback } from 'react';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ProblemSolution } from './components/ProblemSolution';
import { WhatIsInside } from './components/WhatIsInside';
import { WhoThisIsFor } from './components/WhoThisIsFor';
import { Transformation } from './components/Transformation';
import { Pricing } from './components/Pricing';
import { FinalCTA } from './components/FinalCTA';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SuccessModal } from './components/SuccessModal';

// IMPORTANT: Replace this with your actual Paystack Public Key from https://dashboard.paystack.com
export const PAYSTACK_PUBLIC_KEY = 'pk_live_96768214b619a3072d0648f836ee7d37f5674df2';

const App: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handlePaymentSuccess = useCallback((email: string) => {
    setUserEmail(email);
    setShowSuccess(true);
  }, []);

  const triggerGlobalPayment = useCallback(() => {
    const pricingSection = document.getElementById('pricing');
    
    // Always scroll to pricing first so they can enter their email
    if (pricingSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = pricingSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Focus the email input after a short delay for UX
      setTimeout(() => {
        document.getElementById('email-input')?.focus();
      }, 800);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col antialiased bg-[#fdfdfd] selection:bg-brand-mid/20 selection:text-brand-mid text-gray-900">
      <Navbar onCtaClick={triggerGlobalPayment} />
      <main className="flex-grow">
        <Hero onCtaClick={triggerGlobalPayment} />
        <SocialProof />
        <div id="how-it-works">
          <ProblemSolution />
        </div>
        <div id="curriculum">
          <WhatIsInside />
        </div>
        <WhoThisIsFor />
        <Transformation />
        <section id="pricing">
          <Pricing onSuccess={handlePaymentSuccess} />
        </section>
        <FinalCTA onCtaClick={triggerGlobalPayment} />
      </main>
      <Footer />
      
      {showSuccess && (
        <SuccessModal 
          email={userEmail} 
          onClose={() => setShowSuccess(false)} 
        />
      )}
    </div>
  );
};

export default App;
