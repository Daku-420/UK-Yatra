import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  CloudSun, 
  Sun, 
  Wind, 
  Mountain, 
  ExternalLink, 
  Calendar, 
  ShieldCheck,
  AlertCircle,
  Clock,
  RefreshCw,
  Droplets,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Cloud,
  Thermometer,
  type LucideIcon
} from 'lucide-react';
import { adminStorage } from '../utils/adminStorage';

interface DailyForecastItem {
  date: string;
  dayName: string;
  maxTemp: string;
  minTemp: string;
  condition: string;
  icon: LucideIcon;
}

interface WeatherStation {
  id: string;
  name: string;
  region: string;
  altitude: string;
  lat: number;
  lon: number;
  temp: string;
  apparentTemp: string;
  humidity: string;
  condition: string;
  icon: LucideIcon;
  iconColor: string;
  status: 'Open for Darshan' | 'Operational' | 'Active Season';
  statusColor: string;
  bestTime: string;
  windSpeed: string;
  advisory: string;
  forecast3Day?: DailyForecastItem[];
}

const INITIAL_STATIONS: WeatherStation[] = [
  {
    id: 'kedarnath',
    name: 'Kedarnath Dham',
    region: 'Rudraprayag District',
    altitude: '3,584 m',
    lat: 30.7346,
    lon: 79.0669,
    temp: '11°C',
    apparentTemp: '10°C',
    humidity: '62%',
    condition: 'Crisp & Clear',
    icon: CloudSun,
    iconColor: 'text-amber-400',
    status: 'Open for Darshan',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    bestTime: 'Morning 6:00 AM – 3:00 PM',
    windSpeed: '8 km/h',
    advisory: 'Night temperatures plunge near 0°C. Heavy thermal innerwear and down jackets mandatory.'
  },
  {
    id: 'badrinath',
    name: 'Badrinath Dham',
    region: 'Chamoli District',
    altitude: '3,300 m',
    lat: 30.7433,
    lon: 79.4938,
    temp: '13°C',
    apparentTemp: '12°C',
    humidity: '58%',
    condition: 'Sunny & Pleasant',
    icon: Sun,
    iconColor: 'text-amber-300',
    status: 'Open for Darshan',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    bestTime: 'Full Day Access (Tapt Kund active)',
    windSpeed: '9 km/h',
    advisory: 'Clear skies; pleasant afternoon temperatures around 14°C.'
  },
  {
    id: 'gangotri',
    name: 'Gangotri Dham',
    region: 'Uttarkashi District',
    altitude: '3,100 m',
    lat: 30.9947,
    lon: 78.9398,
    temp: '14°C',
    apparentTemp: '13°C',
    humidity: '50%',
    condition: 'Clear Blue Skies',
    icon: Sun,
    iconColor: 'text-amber-300',
    status: 'Open for Darshan',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    bestTime: 'Morning Darshan & Harsil Excursions',
    windSpeed: '7 km/h',
    advisory: 'Harsil apple orchards flourishing; roads completely clear.'
  },
  {
    id: 'yamunotri',
    name: 'Yamunotri Dham',
    region: 'Uttarkashi District',
    altitude: '3,291 m',
    lat: 31.0140,
    lon: 78.4600,
    temp: '10°C',
    apparentTemp: '9°C',
    humidity: '65%',
    condition: 'Sunny with Mountain Mist',
    icon: CloudSun,
    iconColor: 'text-amber-400',
    status: 'Open for Darshan',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    bestTime: 'Trek from Janki Chatti (6:00 AM)',
    windSpeed: '10 km/h',
    advisory: 'Surya Kund thermal spring active; pony and doli services available.'
  },
  {
    id: 'auli',
    name: 'Auli (Ski & Bugyal)',
    region: 'Chamoli District',
    altitude: '2,800 m',
    lat: 30.5282,
    lon: 79.5662,
    temp: '16°C',
    apparentTemp: '15°C',
    humidity: '55%',
    condition: 'Mountain Breeze',
    icon: Wind,
    iconColor: 'text-sky-300',
    status: 'Active Season',
    statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    bestTime: 'Ropeway 9:00 AM – 4:30 PM',
    windSpeed: '12 km/h',
    advisory: 'Joshimath-Auli chairlift operating with panoramic Nanda Devi views.'
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh (Gateway)',
    region: 'Dehradun / Tehri',
    altitude: '372 m',
    lat: 30.0869,
    lon: 78.2676,
    temp: '29°C',
    apparentTemp: '32°C',
    humidity: '68%',
    condition: 'Warm & Sunny',
    icon: Sun,
    iconColor: 'text-amber-400',
    status: 'Operational',
    statusColor: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
    bestTime: 'River Rafting & Ganga Aarti (Daily)',
    windSpeed: '6 km/h',
    advisory: 'Optimal weather for white water rafting, river camping, and evening Triveni Ghat aarti.'
  }
];

// Map WMO Weather Codes to Human-Readable conditions & icons
const decodeWmoWeather = (code: number): { condition: string; icon: LucideIcon; iconColor: string } => {
  if (code === 0) return { condition: 'Clear Skies', icon: Sun, iconColor: 'text-amber-400' };
  if (code === 1 || code === 2) return { condition: 'Partly Sunny', icon: CloudSun, iconColor: 'text-amber-300' };
  if (code === 3) return { condition: 'Overcast', icon: Cloud, iconColor: 'text-slate-300' };
  if (code === 45 || code === 48) return { condition: 'Mountain Mist', icon: Cloud, iconColor: 'text-slate-300' };
  if ([51, 53, 55].includes(code)) return { condition: 'Light Drizzle', icon: CloudRain, iconColor: 'text-sky-300' };
  if ([61, 63, 65, 80, 81, 82].includes(code)) return { condition: 'Mountain Rain', icon: CloudRain, iconColor: 'text-blue-400' };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { condition: 'Snowfall', icon: CloudSnow, iconColor: 'text-cyan-200' };
  if ([95, 96, 99].includes(code)) return { condition: 'Thunderstorm', icon: CloudLightning, iconColor: 'text-yellow-400' };
  return { condition: 'Partly Cloudy', icon: CloudSun, iconColor: 'text-amber-300' };
};

const formatDayLabel = (dateStr: string, index: number): string => {
  if (index === 0) return 'Today';
  if (index === 1) return 'Tomorrow';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { weekday: 'short' });
  } catch {
    return `Day ${index + 1}`;
  }
};

const computeDynamicAdvisory = (stationName: string, tempNum: number, weatherCode: number, defaultAdvisory: string): string => {
  if ([71, 73, 75, 77, 85, 86].includes(weatherCode) || tempNum <= 0) {
    return `Sub-zero / snowfall conditions detected at ${stationName}. Heavy insulated down jackets, thermal innerwear, and microspikes required.`;
  }
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weatherCode)) {
    return `Active mountain precipitation recorded in ${stationName}. Waterproof trekking boots, rain ponchos, and slip-resistant gear advised.`;
  }
  if (tempNum <= 8) {
    return `Chilly high-altitude alpine cold (${Math.round(tempNum)}°C). Layered thermals and windcheaters mandatory for morning/evening Darshan.`;
  }
  if (tempNum <= 17) {
    return `Pleasant daytime mountain weather (${Math.round(tempNum)}°C); temperatures drop sharply by 8–10°C after sunset. Carry a fleece jacket.`;
  }
  if (stationName.includes('Rishikesh')) {
    return `Warm valley climate (${Math.round(tempNum)}°C). Optimal weather for white-water rafting, temple tours, and evening Ganga Aarti.`;
  }
  return defaultAdvisory;
};

export const LiveWeatherWidget: React.FC = () => {
  const [stations, setStations] = useState<WeatherStation[]>(INITIAL_STATIONS);
  const [selectedStationId, setSelectedStationId] = useState('kedarnath');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const lastFetchTimeRef = useRef<number>(0);

  // Fetch real-time meteorological metrics from Open-Meteo API
  const fetchLiveWeather = useCallback(async (manual = false) => {
    try {
      if (manual) setIsRefreshing(true);

      const latList = INITIAL_STATIONS.map((s) => s.lat).join(',');
      const lonList = INITIAL_STATIONS.map((s) => s.lon).join(',');
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latList}&longitude=${lonList}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=3&timezone=Asia%2FKolkata`;

      const res = await fetch(url);
      if (!res.ok) throw new Error(`Weather API returned ${res.status}`);
      const data = await res.json();

      // Open-Meteo returns array of station results when querying multiple coordinates
      const apiResults = Array.isArray(data) ? data : [data];

      // Admin custom overrides if any
      const adminWeatherList = adminStorage.getWeather();

      setStations((prev) =>
        prev.map((station, idx) => {
          const apiData = apiResults[idx];
          if (!apiData || !apiData.current) return station;

          const cur = apiData.current;
          const tempVal = Math.round(cur.temperature_2m);
          const appTempVal = Math.round(cur.apparent_temperature);
          const humidityVal = Math.round(cur.relative_humidity_2m);
          const windVal = Math.round(cur.wind_speed_10m);
          const weatherCode = cur.weather_code ?? 0;

          const meta = decodeWmoWeather(weatherCode);

          // 3-Day Forecast parse
          let forecast3Day: DailyForecastItem[] | undefined = undefined;
          if (apiData.daily && Array.isArray(apiData.daily.time)) {
            forecast3Day = apiData.daily.time.slice(0, 3).map((dateStr: string, dayIdx: number) => {
              const maxT = Math.round(apiData.daily.temperature_2m_max[dayIdx] ?? tempVal);
              const minT = Math.round(apiData.daily.temperature_2m_min[dayIdx] ?? tempVal - 5);
              const dCode = apiData.daily.weather_code?.[dayIdx] ?? weatherCode;
              const dMeta = decodeWmoWeather(dCode);
              return {
                date: dateStr,
                dayName: formatDayLabel(dateStr, dayIdx),
                maxTemp: `${maxT}°C`,
                minTemp: `${minT}°C`,
                condition: dMeta.condition,
                icon: dMeta.icon
              };
            });
          }

          // Check if admin set a manual override advisory for this hub
          const adminItem = adminWeatherList.find(
            (a) => a.hub.toLowerCase().includes(station.id) || station.name.toLowerCase().includes(a.hub.toLowerCase())
          );

          const liveAdvisory = adminItem?.nightAdvisory || computeDynamicAdvisory(station.name, tempVal, weatherCode, station.advisory);

          return {
            ...station,
            temp: `${tempVal}°C`,
            apparentTemp: `${appTempVal}°C`,
            humidity: `${humidityVal}%`,
            windSpeed: `${windVal} km/h`,
            condition: meta.condition,
            icon: meta.icon,
            iconColor: meta.iconColor,
            advisory: liveAdvisory,
            forecast3Day
          };
        })
      );

      const now = new Date();
      setLastUpdated(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      lastFetchTimeRef.current = Date.now();
    } catch (err) {
      console.warn('Real-time weather sync failed, retained cached data:', err);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  // Mount & Real-time automatic polling every 2 minutes
  useEffect(() => {
    fetchLiveWeather();

    // Auto-update every 2 minutes (120,000ms)
    const AUTO_REFRESH_INTERVAL = 2 * 60 * 1000;
    const interval = setInterval(() => {
      fetchLiveWeather();
    }, AUTO_REFRESH_INTERVAL);

    // Refresh if user refocuses window after being away for over 2 minutes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && Date.now() - lastFetchTimeRef.current > AUTO_REFRESH_INTERVAL) {
        fetchLiveWeather();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [fetchLiveWeather]);

  const selectedStation = stations.find((s) => s.id === selectedStationId) || stations[0];
  const MainIcon = selectedStation.icon;

  return (
    <section id="live-weather" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
      {/* Live Status Bar Container */}
      <div className="bg-brand-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Live Satellite Meteorological Feed</span>
              </div>

              {lastUpdated && (
                <span className="text-[11px] text-slate-300 flex items-center gap-1.5 font-medium">
                  <span>Updated {lastUpdated}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-emerald-400 font-semibold">Auto-refreshing every 2m</span>
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Himalayan Live Weather Hub <span className="text-brand-orange">& Pilgrimage Advisory</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Real-time temperature telemetry, elevation wind speeds, 3-day alpine forecasts, and official biometric Darshan guidelines.
            </p>
          </div>

          {/* Action CTAs: Force Refresh + Govt Portal */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => fetchLiveWeather(true)}
              disabled={isRefreshing}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-all shadow-sm cursor-pointer disabled:opacity-50"
              title="Click to manually refresh meteorological satellites"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-brand-orange' : 'text-slate-300'}`} />
              <span>{isRefreshing ? 'Syncing...' : 'Refresh Now'}</span>
            </button>

            <a
              href="https://registrationandtouristcare.uk.gov.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF5A1F] to-[#E64A12] hover:brightness-105 text-white text-xs font-semibold border border-brand-orange/40 transition-all shadow-md shadow-brand-orange/20 group"
            >
              <ShieldCheck className="w-4 h-4 text-yellow-200" />
              <span>Official Govt Yatra Portal</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Station Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
          {stations.map((station) => {
            const isSelected = station.id === selectedStationId;
            const IconComp = station.icon;
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
                  <span className="text-sm font-black flex items-center gap-1">
                    <IconComp className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : station.iconColor}`} />
                    {station.temp}
                  </span>
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
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-white">{selectedStation.temp}</span>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <MainIcon className={`w-4 h-4 ${selectedStation.iconColor}`} />
                    <span>{selectedStation.condition}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Feels like {selectedStation.apparentTemp} • {selectedStation.region}
                  </div>
                </div>
              </div>
              <div className="mt-2.5 inline-flex items-center gap-1.5">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase border ${selectedStation.statusColor}`}>
                  {selectedStation.status}
                </span>
              </div>
            </div>

            {/* Altitude & Wind & Humidity */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Mountain className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Elevation</span>
                </span>
                <span className="text-xs font-bold text-white">{selectedStation.altitude}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-300 mt-2">
                <span className="flex items-center gap-1.5">
                  <Wind className="w-3.5 h-3.5 text-sky-400" />
                  <span>Wind</span>
                </span>
                <span className="text-xs font-semibold text-white">{selectedStation.windSpeed}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-300 mt-2">
                <span className="flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Humidity</span>
                </span>
                <span className="text-xs font-semibold text-white">{selectedStation.humidity}</span>
              </div>
            </div>

            {/* Timings / Visiting Hours */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Visiting Hours & Slots</span>
              </div>
              <div className="text-xs font-bold text-white mt-1.5 leading-snug">{selectedStation.bestTime}</div>
              <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                <Thermometer className="w-3 h-3 text-brand-orange" />
                <span>Real-time thermal reading</span>
              </div>
            </div>

            {/* Live Mountaineer Advisory */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Live Travel & Gear Advisory</span>
              </div>
              <p className="text-[11px] text-slate-200 mt-1 leading-relaxed">
                {selectedStation.advisory}
              </p>
            </div>
          </div>

          {/* 3-Day Alpine Forecast Strip */}
          {selectedStation.forecast3Day && selectedStation.forecast3Day.length > 0 && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                  <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                  <span>3-Day Meteorological Forecast ({selectedStation.name})</span>
                </div>
                <span className="text-[10px] text-slate-400">Open-Meteo Satellite Feed</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {selectedStation.forecast3Day.map((day, idx) => {
                  const DayIcon = day.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                          <DayIcon className="w-4 h-4 text-amber-400" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{day.dayName}</div>
                          <div className="text-[11px] text-slate-400">{day.condition}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-black text-white">{day.maxTemp}</span>
                        <span className="text-[11px] text-sky-300 font-semibold block">{day.minTemp}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
