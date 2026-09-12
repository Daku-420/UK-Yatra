import React, { useState } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 md:bottom-8 left-4 md:left-8 z-40 flex flex-col items-start">
      {/* Floating Popup Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white border border-[#DCD6CC] rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD5]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                UK
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">UKYatra Trip Desk</h4>
                <p className="text-[10px] text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Online | Typically replies in 5 mins
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 my-3 leading-relaxed">
            Namaste! 🙏 Need help planning your Uttarakhand tour, trek, or Char Dham Yatra? Chat directly with our local travel experts.
          </p>

          <a
            href={getWhatsAppUrl("Hi UKYatra team, I'd like to plan an unforgettable trip to Uttarakhand. Please guide me!")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-xl font-semibold text-xs transition-all shadow-md"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Start WhatsApp Chat</span>
          </a>
        </div>
      )}

      {/* Floating Button */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <div className="hidden sm:flex items-center bg-white text-slate-800 border border-[#DCD6CC] py-1.5 px-3.5 rounded-full text-xs shadow-md">
            <span>Planning a trip? <strong className="text-emerald-600 font-bold">Chat with us</strong></span>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-orange border-2 border-brand-dark animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-orange border-2 border-brand-dark"></span>
          <WhatsAppIcon className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};
