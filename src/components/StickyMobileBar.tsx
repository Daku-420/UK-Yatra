import React from 'react';
import { Phone, Compass } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon } from './SocialIcons';

interface StickyMobileBarProps {
  onOpenBookingModal?: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-brand-dark/95 border-t border-white/10 px-3 py-2.5 backdrop-blur-xl flex items-center justify-between gap-2 shadow-2xl">
      <a
        href={`tel:${SITE_CONFIG.phone}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs active:bg-white/10"
      >
        <Phone className="w-4 h-4 text-brand-orange" />
        <span>Call</span>
      </a>

      <a
        href={getWhatsAppUrl("Hi UKYatra, I want to book/plan a trip.")}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] text-white font-semibold text-xs active:bg-emerald-600 shadow-lg shadow-emerald-900/30"
      >
        <WhatsAppIcon className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenBookingModal}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl orange-gradient-btn text-white font-semibold text-xs shadow-lg shadow-brand-orange/30"
      >
        <Compass className="w-4 h-4" />
        <span>Enquire</span>
      </button>
    </div>
  );
};
