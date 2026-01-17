
import React, { useState, useEffect } from 'react';
import { CheckCircle, Download, X, ExternalLink, Mail, Loader2 } from 'lucide-react';

interface SuccessModalProps {
  onClose: () => void;
  email: string;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ onClose, email }) => {
  const [isSending, setIsSending] = useState(true);

  useEffect(() => {
    // Simulate automated email delivery delay
    const timer = setTimeout(() => {
      setIsSending(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-gray-900/80 backdrop-blur-xl">
      <div className="bg-white w-full max-w-lg rounded-[48px] p-10 md:p-16 relative shadow-2xl border border-gray-100 overflow-hidden">
        {/* Animated Background Pulse */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2 brand-gradient"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-2 text-gray-300 hover:text-gray-900 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center relative z-10">
          <div className="w-24 h-24 brand-gradient rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-brand-mid/20 relative">
             {isSending ? (
                <Loader2 className="w-12 h-12 text-white animate-spin" />
             ) : (
                <CheckCircle className="w-12 h-12 text-white" />
             )}
          </div>
          
          <h2 className="text-4xl font-black mb-6 text-gray-900">
            {isSending ? "Processing..." : "You're In!"}
          </h2>

          <div className={`transition-all duration-700 ${isSending ? 'opacity-50 blur-sm' : 'opacity-100 blur-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-widest mb-6">
              <Mail className="w-3.5 h-3.5" />
              Email Sent to {email}
            </div>

            <p className="text-gray-500 font-medium mb-12 leading-relaxed">
              Success! We've automatically sent the <strong>BrandMe AI Playbook</strong> to <strong>{email}</strong>. 
              Please check your inbox (and spam folder just in case).
            </p>
            
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center gap-3 py-5 brand-gradient text-white font-black rounded-2xl hover:shadow-lg hover:shadow-brand-mid/30 transition-all active:scale-95">
                <Download className="w-6 h-6" />
                Download PDF Now
              </button>
              <button className="w-full flex items-center justify-center gap-3 py-5 bg-white text-gray-900 font-bold rounded-2xl border-2 border-gray-100 hover:bg-gray-50 transition-all active:scale-95">
                <ExternalLink className="w-5 h-5" />
                Access Notion Dashboard
              </button>
            </div>

            <p className="mt-8 text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
              Start building your authority today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
