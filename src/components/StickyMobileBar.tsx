import React from 'react';
import { Phone, Compass } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon } from './SocialIcons';

interface StickyMobileBarProps {
  onOpenBookingModal?: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-brand-dark/95 border-t border-white/10 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] backdrop-blur-xl flex items-center justify-between gap-2 shadow-[0_-8px_30px_rgba(0,0,0,0.5)]">
      <a
        href={`tel:${SITE_CONFIG.phone}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 border border-white/10 text-white font-medium text-xs active:bg-white/20 active:scale-[0.98] transition-all"
      >
        <Phone className="w-4 h-4 text-brand-orange" />
        <span>Call</span>
      </a>

      <a
        href={getWhatsAppUrl("Hi UKYatra, I want to book/plan a trip.")}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] text-white font-semibold text-xs active:bg-emerald-600 active:scale-[0.98] shadow-lg shadow-emerald-900/30 transition-all"
      >
        <WhatsAppIcon className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenBookingModal}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl orange-gradient-btn text-white font-semibold text-xs shadow-lg shadow-brand-orange/30 active:scale-[0.98] transition-all cursor-pointer"
      >
        <Compass className="w-4 h-4" />
        <span>Enquire</span>
      </button>
    </div>
  );
};
