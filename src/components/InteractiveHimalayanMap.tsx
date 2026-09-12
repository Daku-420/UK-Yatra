import React, { useEffect, useRef, useState, useCallback } from 'react';
import L from 'leaflet';
import { 
  Compass, 
  Layers, 
  Maximize2, 
  Minimize2, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Navigation, 
  MapPin, 
  Mountain, 
  Info, 
  ExternalLink,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';
import { getWhatsAppUrl, SITE_CONFIG } from '../config/siteConfig';

export interface MapStop {
  id: string;
  name: string;
  altitude: string;
  altitudeMeters: number;
  driveFromPrev?: string;
  stay: string;
  highlight: string;
  tip: string;
  isKeyTemple?: boolean;
  isSummit?: boolean;
  coordinates: [number, number]; // [lat, lng]
}

export interface MapCircuitData {
  id: string;
  name: string;
  shortName: string;
  duration: string;
  totalDistance: string;
  maxAltitude: string;
  difficulty: string;
  stops: MapStop[];
  highwayRoute: [number, number][];
  trekSegments?: [number, number][][];
}

interface InteractiveHimalayanMapProps {
  circuit: MapCircuitData;
  activeStopId?: string | null;
  onSelectStop?: (stopId: string) => void;
  className?: string;
}

// Tile layers definitions
const TILE_LAYERS = {
  topo: {
    name: 'Outdoor Topo',
    icon: '🏔️',
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution: '© OpenTopoMap & OSM contributors',
    maxZoom: 16,
    subdomains: 'abc'
  },
  satellite: {
    name: 'Satellite View',
    icon: '🛰️',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Source: Esri, Maxar, Earthstar Geographics',
    maxZoom: 18,
    subdomains: 'abc'
  },
  streets: {
    name: 'Road Network',
    icon: '🛣️',
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    attribution: '© OpenStreetMap & CARTO',
    maxZoom: 19,
    subdomains: 'abcd'
  }
};

export const InteractiveHimalayanMap: React.FC<InteractiveHimalayanMapProps> = ({
  circuit,
  activeStopId,
  onSelectStop,
  className = ''
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const routePolylineRef = useRef<L.Polyline | null>(null);
  const trekPolylinesRef = useRef<L.LayerGroup | null>(null);
  const markerMapRef = useRef<{ [stopId: string]: L.Marker }>({});

  const [activeTileKey, setActiveTileKey] = useState<'topo' | 'satellite' | 'streets'>('topo');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scrollZoomEnabled, setScrollZoomEnabled] = useState(false);
  const [selectedStop, setSelectedStop] = useState<MapStop | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [30.45, 78.95],
        zoom: 8,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: false
      });

      // Add custom compact attribution
      L.control.attribution({ position: 'bottomright', prefix: false }).addTo(map);

      // Initialize base tile layer
      const initialTile = TILE_LAYERS.topo;
      const tileLayer = L.tileLayer(initialTile.url, {
        attribution: initialTile.attribution,
        maxZoom: initialTile.maxZoom,
        subdomains: initialTile.subdomains
      }).addTo(map);

      tileLayerRef.current = tileLayer;

      // Layer groups
      const markersLayer = L.layerGroup().addTo(map);
      markersLayerRef.current = markersLayer;

      const trekLayer = L.layerGroup().addTo(map);
      trekPolylinesRef.current = trekLayer;

      mapRef.current = map;
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Update Tile Layer
  useEffect(() => {
    if (!mapRef.current) return;
    const tileConfig = TILE_LAYERS[activeTileKey];

    if (tileLayerRef.current) {
      mapRef.current.removeLayer(tileLayerRef.current);
    }

    const newTileLayer = L.tileLayer(tileConfig.url, {
      attribution: tileConfig.attribution,
      maxZoom: tileConfig.maxZoom,
      subdomains: tileConfig.subdomains
    }).addTo(mapRef.current);

    tileLayerRef.current = newTileLayer;
    newTileLayer.bringToBack();
  }, [activeTileKey]);

  // Fit bounds to entire circuit
  const fitCircuitBounds = useCallback(() => {
    if (!mapRef.current || !circuit.stops.length) return;

    const latLngs = circuit.stops.map(s => s.coordinates);
    if (circuit.highwayRoute && circuit.highwayRoute.length > 0) {
      latLngs.push(...circuit.highwayRoute);
    }

    const bounds = L.latLngBounds(latLngs);
    mapRef.current.fitBounds(bounds, {
      padding: [45, 45],
      maxZoom: 12,
      animate: true,
      duration: 1.2
    });
  }, [circuit]);

  // Update Route Polylines and Markers whenever circuit changes
  useEffect(() => {
    const map = mapRef.current;
    const markersLayer = markersLayerRef.current;
    const trekLayer = trekPolylinesRef.current;
    if (!map || !markersLayer || !trekLayer) return;

    // Clear old markers and polylines
    markersLayer.clearLayers();
    trekLayer.clearLayers();
    markerMapRef.current = {};

    if (routePolylineRef.current) {
      map.removeLayer(routePolylineRef.current);
      routePolylineRef.current = null;
    }

    // 1. Draw Highway Drive Route
    if (circuit.highwayRoute && circuit.highwayRoute.length > 0) {
      // Glow background line
      const glowLine = L.polyline(circuit.highwayRoute, {
        color: '#FF5A1F',
        weight: 8,
        opacity: 0.35,
        lineCap: 'round',
        lineJoin: 'round'
      }).addTo(markersLayer);

      // Main vibrant road line
      const mainLine = L.polyline(circuit.highwayRoute, {
        color: '#FF5A1F',
        weight: 4.5,
        opacity: 0.95,
        lineCap: 'round',
        lineJoin: 'round'
      }).addTo(markersLayer);

      routePolylineRef.current = mainLine;
    }

    // 2. Draw Trek Segments (Dashed Alpine Trails)
    if (circuit.trekSegments && circuit.trekSegments.length > 0) {
      circuit.trekSegments.forEach(segment => {
        L.polyline(segment, {
          color: '#F59E0B',
          weight: 4,
          dashArray: '8, 8',
          opacity: 0.95,
          lineCap: 'round',
          lineJoin: 'round'
        }).addTo(trekLayer);
      });
    }

    // 3. Render Custom HTML Markers
    circuit.stops.forEach((stop, index) => {
      const isTemple = stop.isKeyTemple;
      const isSummit = stop.isSummit;
      const badgeNumber = index + 1;

      // Dynamic Marker styling
      let markerBg = 'bg-brand-card text-white border-brand-orange';
      let iconSymbol = `${badgeNumber}`;
      let pulsingGlow = '';

      if (isTemple) {
        markerBg = 'bg-amber-500 text-slate-950 border-white shadow-amber-500/50';
        iconSymbol = '🕉️';
        pulsingGlow = '<span class="absolute -inset-1.5 rounded-full bg-amber-400 opacity-60 animate-ping"></span>';
      } else if (isSummit) {
        markerBg = 'bg-cyan-500 text-slate-950 border-white shadow-cyan-500/50';
        iconSymbol = '🏔️';
        pulsingGlow = '<span class="absolute -inset-1.5 rounded-full bg-cyan-400 opacity-60 animate-ping"></span>';
      }

      const customHtml = `
        <div class="relative group cursor-pointer flex items-center justify-center">
          ${pulsingGlow}
          <div class="relative flex items-center justify-center w-8 h-8 rounded-full shadow-xl border-2 font-bold text-xs ${markerBg} transition-transform hover:scale-125 duration-200">
            ${iconSymbol}
          </div>
          <div class="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center pointer-events-none z-50">
            <span class="bg-slate-950 text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow-lg whitespace-nowrap border border-slate-700">
              ${stop.name} (${stop.altitude})
            </span>
            <div class="w-1.5 h-1.5 bg-slate-950 rotate-45 -mt-0.5 border-r border-b border-slate-700"></div>
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: customHtml,
        className: 'custom-himalayan-marker',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -18]
      });

      const marker = L.marker(stop.coordinates, { icon: customIcon }).addTo(markersLayer);

      // Rich Styled Popup
      const whatsappInquiryUrl = getWhatsAppUrl(
        `Hi UKYatra team, I am planning the ${circuit.name} and would like information regarding the stop at ${stop.name} (${stop.altitude}).`
      );

      const popupContent = `
        <div class="font-sans text-slate-900 p-1 min-w-[260px] max-w-[320px]">
          <div class="flex items-start justify-between gap-2 border-b border-slate-200 pb-2 mb-2">
            <div>
              <span class="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                isTemple ? 'bg-amber-100 text-amber-800' : isSummit ? 'bg-cyan-100 text-cyan-800' : 'bg-slate-100 text-slate-700'
              }">
                Stop #${badgeNumber} • ${isTemple ? 'Sacred Dham' : isSummit ? 'High Summit' : 'Circuit Stop'}
              </span>
              <h4 class="text-sm font-bold text-slate-900 mt-0.5 leading-tight">${stop.name}</h4>
            </div>
            <span class="text-xs font-bold text-brand-orange bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200 whitespace-nowrap">
              ${stop.altitude}
            </span>
          </div>

          <div class="space-y-1.5 text-xs text-slate-700">
            ${stop.driveFromPrev ? `
              <div class="flex items-center gap-1.5 text-slate-500 text-[11px]">
                <span class="font-semibold text-slate-700">Distance:</span> ${stop.driveFromPrev}
              </div>
            ` : ''}
            
            <p class="text-slate-800 leading-snug">
              <strong class="text-slate-900">Highlight:</strong> ${stop.highlight}
            </p>

            <div class="bg-amber-50/80 rounded-lg p-2 border border-amber-200/70 text-[11px] text-amber-950">
              <strong>Night Stay:</strong> ${stop.stay}<br/>
              <strong>Insider Tip:</strong> ${stop.tip}
            </div>
          </div>

          <div class="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between gap-2">
            <a 
              href="${whatsappInquiryUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-semibold shadow transition-colors"
            >
              <span>Inquire Route Stop</span>
              <span>→</span>
            </a>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent, {
        maxWidth: 340,
        className: 'custom-himalayan-popup'
      });

      marker.on('click', () => {
        setSelectedStop(stop);
        if (onSelectStop) onSelectStop(stop.id);
      });

      markerMapRef.current[stop.id] = marker;
    });

    // Auto-fit circuit bounds on circuit change
    fitCircuitBounds();
  }, [circuit, onSelectStop, fitCircuitBounds]);

  // Highlight or pan when external activeStopId changes
  useEffect(() => {
    if (!activeStopId || !markerMapRef.current[activeStopId] || !mapRef.current) return;

    const targetStop = circuit.stops.find(s => s.id === activeStopId);
    if (!targetStop) return;

    setSelectedStop(targetStop);
    const marker = markerMapRef.current[activeStopId];

    mapRef.current.flyTo(targetStop.coordinates, 11, {
      animate: true,
      duration: 1.0
    });

    marker.openPopup();
  }, [activeStopId, circuit.stops]);

  // Toggle Scroll Zoom
  const toggleScrollZoom = () => {
    if (!mapRef.current) return;
    const nextState = !scrollZoomEnabled;
    setScrollZoomEnabled(nextState);
    if (nextState) {
      mapRef.current.scrollWheelZoom.enable();
    } else {
      mapRef.current.scrollWheelZoom.disable();
    }
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setTimeout(() => {
      mapRef.current?.invalidateSize();
    }, 200);
  };

  return (
    <div 
      className={`relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950 transition-all duration-300 ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none' : className
      }`}
      style={{ minHeight: isFullscreen ? '100vh' : '520px' }}
    >
      {/* Map Leaflet Canvas Container */}
      <div 
        ref={mapContainerRef} 
        className="w-full h-full absolute inset-0 z-0"
        style={{ minHeight: isFullscreen ? '100vh' : '520px' }}
      />

      {/* Top Floating Control Bar */}
      <div className="absolute top-3.5 left-3.5 right-3.5 z-10 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        {/* Left Badge: Circuit Title & Quick Stats */}
        <div className="pointer-events-auto flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700/80 shadow-lg text-white">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
          <div>
            <div className="text-xs font-bold font-display tracking-tight flex items-center gap-1.5">
              <span>{circuit.name}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/10 text-slate-300 font-mono">
                {circuit.stops.length} Stops
              </span>
            </div>
            <div className="text-[11px] text-slate-300 font-medium">
              Max: <span className="text-amber-400 font-semibold">{circuit.maxAltitude}</span> • {circuit.totalDistance}
            </div>
          </div>
        </div>

        {/* Right Controls: Layer Switcher & Tools */}
        <div className="pointer-events-auto flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-md p-1 rounded-xl border border-slate-700/80 shadow-lg">
          {/* Tile Layer Switchers */}
          {(Object.keys(TILE_LAYERS) as Array<keyof typeof TILE_LAYERS>).map(tileKey => {
            const layer = TILE_LAYERS[tileKey];
            const isSelected = activeTileKey === tileKey;
            return (
              <button
                key={tileKey}
                type="button"
                onClick={() => setActiveTileKey(tileKey)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isSelected 
                    ? 'bg-brand-orange text-white shadow-md' 
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                title={layer.name}
              >
                <span>{layer.icon}</span>
                <span className="hidden sm:inline">{layer.name}</span>
              </button>
            );
          })}

          <div className="w-px h-5 bg-slate-700 mx-0.5" />

          {/* Reset / Fit Circuit */}
          <button
            type="button"
            onClick={fitCircuitBounds}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Fit Entire Circuit Route"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Zoom In & Out */}
          <button
            type="button"
            onClick={() => mapRef.current?.zoomIn()}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => mapRef.current?.zoomOut()}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title={isFullscreen ? 'Exit Fullscreen' : 'Expand Map Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Floating Bottom Legend & Guide */}
      <div className="absolute bottom-3 left-3 z-10 pointer-events-none max-w-sm">
        <div className="pointer-events-auto bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700/80 shadow-lg text-xs text-white space-y-1.5">
          <div className="font-semibold text-slate-200 flex items-center justify-between border-b border-slate-800 pb-1">
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-brand-orange" />
              <span>Map Route Legend</span>
            </span>
            <button 
              type="button" 
              onClick={toggleScrollZoom}
              className={`text-[10px] px-1.5 py-0.5 rounded transition-colors ${
                scrollZoomEnabled 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:text-slate-200'
              }`}
            >
              {scrollZoomEnabled ? 'Wheel Zoom: ON' : 'Wheel Zoom: OFF'}
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] text-slate-300 pt-0.5">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[9px] font-bold">🕉️</span>
              <span>Sacred Dham Shrine</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center text-[9px] font-bold">🏔️</span>
              <span>High Alpine Summit</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-1 bg-brand-orange rounded-full" />
              <span>Mountain Highway</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-1 border-t-2 border-dashed border-amber-400" />
              <span>Alpine Trek Footpath</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Stop Bottom Card (Mobile or Quick Focus) */}
      {selectedStop && (
        <div className="absolute bottom-3 right-3 z-10 pointer-events-none max-w-xs sm:max-w-sm hidden sm:block">
          <div className="pointer-events-auto bg-slate-900/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 shadow-2xl text-white">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-orange">
                  Selected Stop
                </span>
                <h4 className="text-sm font-bold">{selectedStop.name}</h4>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                {selectedStop.altitude}
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1 line-clamp-2">
              {selectedStop.highlight}
            </p>
            <div className="mt-2.5 flex items-center justify-between gap-2 pt-2 border-t border-slate-800">
              <span className="text-[11px] text-slate-400 truncate">
                Stay: {selectedStop.stay}
              </span>
              <a
                href={getWhatsAppUrl(`Hi UKYatra team, I am inquiring about stop ${selectedStop.name} on the ${circuit.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-brand-orange hover:text-brand-orangeHover flex items-center gap-1 shrink-0"
              >
                <span>Inquire</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
