import React, { useState } from 'react';
import { 
  CloudSun, 
  Sun, 
  Thermometer, 
  Wind, 
  Mountain, 
  CheckCircle2, 
  ExternalLink, 
  Calendar, 
  Compass, 
  ShieldCheck,
  AlertCircle,
  Clock
} from 'lucide-react';

interface WeatherStation {
  id: string;
  name: string;
  region: string;
  altitude: string;
  temp: string;
  condition: string;
  icon: 'sun' | 'cloud-sun' | 'wind' | 'cold';
  status: 'Open for Darshan' | 'Operational' | 'Active Season';
  statusColor: string;
  bestTime: string;
  windSpeed: string;
  advisory: string;
}

const WEATHER_STATIONS: WeatherStation[] = [
  {
    id: 'kedarnath',
    name: 'Kedarnath Dham',
    region: 'Rudraprayag District',
    altitude: '3,584 m',
    temp: '7°C',
    condition: 'Crisp & Clear',
    icon: 'cloud-sun',
    status: 'Open for Darshan',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    bestTime: 'Morning 6:00 AM – 3:00 PM',
    windSpeed: '12 km/h',
    advisory: 'Heavy thermal innerwear and down jackets mandatory at night.'
  },
  {
    id: 'badrinath',
    name: 'Badrinath Dham',
    region: 'Chamoli District',
    altitude: '3,300 m',
    temp: '11°C',
    condition: 'Sunny & Pleasant',
    icon: 'sun',
    status: 'Open for Darshan',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    bestTime: 'Full Day Access (Tapt Kund active)',
    windSpeed: '9 km/h',
    advisory: 'Clear skies; pleasant afternoon temperatures around 14°C.'
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh (Gateway)',
    region: 'Dehradun / Tehri',
    altitude: '372 m',
    temp: '26°C',
    condition: 'Warm & Sunny',
    icon: 'sun',
    status: 'Operational',
    statusColor: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
    bestTime: 'River Rafting & Ganga Aarti (Daily)',
    windSpeed: '6 km/h',
    advisory: 'Optimal weather for white water rafting, river camping, and Ganga aarti.'
  },
  {
    id: 'auli',
    name: 'Auli (Ski & Bugyal)',
    region: 'Chamoli District',
    altitude: '2,800 m',
    temp: '13°C',
    condition: 'Mountain Breeze',
    icon: 'wind',
    status: 'Active Season',
    statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    bestTime: 'Ropeway 9:00 AM – 4:30 PM',
    windSpeed: '14 km/h',
    advisory: 'Joshimath-Auli chairlift operating with panoramic Nanda Devi views.'
  },
  {
    id: 'gangotri',
    name: 'Gangotri Dham',
    region: 'Uttarkashi District',
    altitude: '3,100 m',
    temp: '9°C',
    condition: 'Clear Blue Skies',
    icon: 'sun',
    status: 'Open for Darshan',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    bestTime: 'Morning Darshan & Harsil Excursions',
    windSpeed: '10 km/h',
    advisory: 'Harsil apple orchards flourishing; roads completely clear.'
  },
  {
    id: 'yamunotri',
    name: 'Yamunotri Dham',
    region: 'Uttarkashi District',
    altitude: '3,291 m',
    temp: '8°C',
    condition: 'Sunny with Mountain Mist',
    icon: 'cloud-sun',
    status: 'Open for Darshan',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    bestTime: 'Trek from Janki Chatti (6:00 AM)',
    windSpeed: '11 km/h',
    advisory: 'Surya Kund thermal spring active; pony and doli services available.'
  }
];

export const LiveWeatherWidget: React.FC = () => {
  const [selectedStationId, setSelectedStationId] = useState('kedarnath');
  const selectedStation = WEATHER_STATIONS.find((s) => s.id === selectedStationId) || WEATHER_STATIONS[0];

  return (
    <section id="live-weather" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
      {/* Live Status Bar Container */}
      <div className="bg-brand-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Himalayan Weather & Portal Status</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Uttarakhand Weather Hub <span className="text-brand-orange">& Pilgrimage Advisory</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Live temperature updates, altitude profiles, and official biometric portal guidance for Char Dham and high-altitude trekking stations.
            </p>
          </div>

          {/* Official Govt Portal Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="https://registrationandtouristcare.uk.gov.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-all shadow-sm group"
            >
              <ShieldCheck className="w-4 h-4 text-yellow-300" />
              <span>Official Govt Yatra Portal</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Station Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
          {WEATHER_STATIONS.map((station) => {
            const isSelected = station.id === selectedStationId;
            return (
              <button
                key={station.id}
                onClick={() => setSelectedStationId(station.id)}
                className={`p-3 rounded-2xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-brand-orange text-white border-brand-orange shadow-lg shadow-brand-orange/30 scale-[1.02]'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-white/10 hover:border-brand-orange/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                    {station.altitude}
                  </span>
                  <span className="text-sm font-black">{station.temp}</span>
                </div>
                <div className="font-bold text-xs sm:text-sm mt-1 line-clamp-1">{station.name}</div>
                <div className={`text-[11px] mt-0.5 ${isSelected ? 'text-white/90' : 'text-slate-400'}`}>
                  {station.condition}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Hub Details Card */}
        <div className="bg-slate-900/90 rounded-2xl p-5 sm:p-6 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Main Station Info */}
            <div className="md:border-r md:border-white/10 md:pr-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black text-white">{selectedStation.temp}</span>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <CloudSun className="w-4 h-4 text-amber-400" />
                    <span>{selectedStation.condition}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">{selectedStation.region}</div>
                </div>
              </div>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase border">
                <span className={`px-2 py-0.5 rounded-full ${selectedStation.statusColor}`}>
                  {selectedStation.status}
                </span>
              </div>
            </div>

            {/* Altitude & Wind */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <Mountain className="w-3.5 h-3.5 text-brand-orange" />
                <span>Elevation</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">{selectedStation.altitude}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Wind: {selectedStation.windSpeed}</div>
            </div>

            {/* Timings / Best Hours */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Visiting Hours</span>
              </div>
              <div className="text-xs font-bold text-white mt-1 leading-snug">{selectedStation.bestTime}</div>
            </div>

            {/* Live Mountaineer Advisory */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>On-Ground Advisory</span>
              </div>
              <p className="text-[11px] text-slate-200 mt-1 leading-relaxed">
                {selectedStation.advisory}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
