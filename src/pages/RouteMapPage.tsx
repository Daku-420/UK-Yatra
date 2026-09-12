import React from 'react';
import { Navigation, MapPin, Mountain, ShieldCheck, Compass, Sparkles, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RouteCircuitMap } from '../components/RouteCircuitMap';
import { LiveWeatherWidget } from '../components/LiveWeatherWidget';
import { getWhatsAppUrl } from '../config/siteConfig';

interface RouteMapPageProps {
  onOpenBookingModal?: (packageName?: string) => void;
}

export const RouteMapPage: React.FC<RouteMapPageProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'Himalayan Route Circuits & Elevation Map' }]} />

      {/* Page Header Banner */}
      <div className="relative rounded-3xl overflow-hidden cream-banner p-8 sm:p-12 mb-12 shadow-sm text-white">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Navigation className="w-3.5 h-3.5" />
            <span>Interactive Geographic Planning Tool</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white leading-tight">
            Uttarakhand Route Circuits <span className="text-brand-orange">& Elevation Map</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
            Plan your Himalayan journey with day-wise circuit waypoints, driving distances, night halt stations, and altitude safety guides for Char Dham, Do Dham, Chopta Tungnath, and the Valley of Flowers.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#route-circuit-map"
              className="orange-gradient-btn px-6 py-3 rounded-xl font-display font-bold text-xs text-white shadow-lg flex items-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Circuits Below</span>
            </a>
            <a
              href={getWhatsAppUrl("Hi UKYatra, I would like custom route map planning and assistance for my upcoming Uttarakhand trip.")}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-display font-semibold text-xs transition-all shadow-sm flex items-center gap-2"
            >
              <span>Speak to Route Architect</span>
              <ArrowRight className="w-4 h-4 text-brand-orange" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Interactive Route Circuit Map */}
      <RouteCircuitMap />

      {/* Embedded Live Weather Hub */}
      <div className="mt-12">
        <LiveWeatherWidget />
      </div>
    </div>
  );
};
