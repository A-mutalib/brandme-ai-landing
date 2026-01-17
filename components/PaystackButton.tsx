
import React, { useState } from 'react';
import { PAYSTACK_PUBLIC_KEY } from '../App';

interface PaystackButtonWrapperProps {
  amount: number;
  email: string;
  planName: string;
  onSuccess: () => void;
  variant: 'primary' | 'secondary';
  label?: string;
  className?: string;
  disabled?: boolean;
}

export const PaystackButtonWrapper: React.FC<PaystackButtonWrapperProps> = ({ 
  amount, 
  email, 
  planName, 
  onSuccess,
  variant,
  label = "Claim Access Now",
  className = "",
  disabled = false
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = () => {
    if (isLoading || disabled) return;
    
    if (!window.PaystackPop) {
      alert("Payment system is still loading. Please check your connection and try again.");
      return;
    }

    if (PAYSTACK_PUBLIC_KEY.includes('xxxx')) {
      alert("Error: Paystack Public Key is not configured. Please add a valid key in App.tsx.");
      return;
    }

    setIsLoading(true);

    try {
      const handler = window.PaystackPop.setup({
        key: PAYSTACK_PUBLIC_KEY,
        email: email,
        amount: Math.floor(amount * 100), // Amount in kobo
        currency: 'NGN',
        metadata: {
          custom_fields: [
            {
              display_name: "Plan Name",
              variable_name: "plan_name",
              value: planName
            },
            {
              display_name: "Customer Email",
              variable_name: "customer_email",
              value: email
            }
          ]
        },
        callback: (response: any) => {
          setIsLoading(false);
          onSuccess();
        },
        onClose: () => {
          setIsLoading(false);
        },
      });
      handler.openIframe();
    } catch (error) {
      console.error("Paystack error:", error);
      setIsLoading(false);
      alert("Could not initialize transaction. Ensure your Paystack Public Key is correct.");
    }
  };

  const baseStyles = "w-full py-6 rounded-2xl font-black text-xl transition-all active:scale-95 text-center cursor-pointer shadow-xl disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "brand-gradient text-white hover:shadow-brand-mid/40 hover:-translate-y-1",
    secondary: "bg-gray-900 text-white hover:bg-black"
  };

  return (
    <button 
      onClick={handlePayment} 
      disabled={isLoading || disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {isLoading ? "Preparing Checkout..." : label}
    </button>
  );
};
