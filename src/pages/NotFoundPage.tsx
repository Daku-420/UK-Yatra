import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Compass, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="cream-banner rounded-3xl p-8 sm:p-12 max-w-lg mx-auto space-y-6 shadow-sm">
        <div className="w-20 h-20 rounded-3xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center mx-auto">
          <Mountain className="w-10 h-10" />
        </div>
        <h1 className="text-5xl font-extrabold font-display text-slate-900">404</h1>
        <h2 className="text-xl font-bold text-slate-800">Off the Beaten Trail!</h2>
        <p className="text-xs text-slate-600 leading-relaxed">
          The Himalayan page you are looking for seems to have drifted into the mist. Let’s get you back to the base camp.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <Link
            to="/"
            className="orange-gradient-btn px-6 py-3 rounded-xl text-xs font-bold text-white flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Basecamp (Home)</span>
          </Link>
          <Link
            to="/destinations"
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-[#DCD6CC] text-xs font-semibold flex items-center gap-2 shadow-xs"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Destinations</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
