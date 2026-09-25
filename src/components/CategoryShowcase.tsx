import React, { useState } from 'react';
import { Layers, ShieldCheck, ChevronRight, Pill } from 'lucide-react';
import { SUPPLEMENT_COMPONENTS, CATEGORY_FILTERS } from '../data/supplements';
import { SupplementComponent } from '../types/supplement';
import { TiltCard3D } from './TiltCard3D';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrlForComponent, WHATSAPP_URL } from '../constants/assets';

interface CategoryShowcaseProps {
  onInspectComponent: (component: SupplementComponent) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  onInspectComponent,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredComponents = SUPPLEMENT_COMPONENTS.filter((comp) => {
    if (activeFilter === 'all') return true;
    return comp.category === activeFilter;
  });

  const handleOpenWhatsApp = (e: React.MouseEvent, componentName: string) => {
    e.stopPropagation();
    window.open(getWhatsAppUrlForComponent(componentName), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="components" className="py-24 bg-[#07070a] border-b border-red-950/30 relative overflow-hidden scroll-mt-12">
      
      {/* Red Ambient Glow in Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-12 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-red-500" />
              <span>BuySupps by Mukul Chaudhary — Pure Components</span>
            </div>

            {/* Direct WhatsApp Callout Pill (No number displayed) */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/50 hover:bg-emerald-900/70 border border-emerald-500/50 text-emerald-400 text-xs font-mono font-black uppercase tracking-wider transition-all"
            >
              <WhatsAppIcon className="w-3 h-3 fill-emerald-400" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight text-balance leading-[1.08] uppercase">
            Essential Supplement Components for Peak Human Performance
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed text-pretty font-medium">
            We isolate and supply the core biological building blocks proven in human athletic physiology.
            No proprietary formulas. No synthetic fillers. Pure, unbranded active performance nutrition.
          </p>

          <div className="p-3.5 rounded-xl bg-zinc-950 border border-emerald-500/30 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <WhatsAppIcon className="w-4 h-4 fill-emerald-400 shrink-0" />
              <span>Tap any supplement icon or button to open WhatsApp directly</span>
            </div>
            <span className="hidden sm:inline text-zinc-500 uppercase font-black text-[10px]">
              Instant Direct Access
            </span>
          </div>
        </div>

        {/* Filter Navigation Chips */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORY_FILTERS.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white shadow-lg shadow-red-950/80 border border-red-500'
                    : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800/80 hover:border-zinc-700 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3D Animated Component Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredComponents.map((component) => (
            <TiltCard3D
              key={component.id}
              maxTilt={10}
              className="h-full cursor-pointer group"
              onClick={() => onInspectComponent(component)}
            >
              <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#111116] via-[#0c0c10] to-[#07070a] border border-zinc-800/90 group-hover:border-red-500/60 group-hover:shadow-2xl group-hover:shadow-red-950/40 transition-all duration-300 relative overflow-hidden text-left">
                
                {/* 3D Depth Layer 1: Background Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 group-hover:bg-red-600/10 blur-2xl transition-all pointer-events-none rounded-full" />
                
                {/* Top Bar: Category & Tappable Supplements Icon / WhatsApp Trigger */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-red-400 font-black uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      {component.categoryLabel}
                    </span>

                    {/* Tapping this Supplements Icon directly opens WhatsApp as requested! */}
                    <button
                      onClick={(e) => handleOpenWhatsApp(e, component.name)}
                      className="px-2.5 py-1 rounded-lg bg-emerald-950/80 hover:bg-emerald-600 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-sm group/btn"
                      title={`Tap supplement icon to chat about ${component.name} on WhatsApp`}
                    >
                      <Pill className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:text-white transition-colors" />
                      <span className="text-[10px] font-black uppercase tracking-wide">
                        WhatsApp
                      </span>
                    </button>
                  </div>

                  {/* Component Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl font-black text-white font-display tracking-tight uppercase group-hover:text-red-400 transition-colors">
                      {component.name}
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono font-bold mt-1">
                      {component.subtitle}
                    </p>
                  </div>

                  {/* Physiological Role */}
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-900/80 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-zinc-500 font-black tracking-wider block">
                      Primary Biological Function
                    </span>
                    <p className="text-xs font-bold text-zinc-200 leading-snug">
                      {component.role}
                    </p>
                  </div>

                  {/* Scientific Mechanism */}
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 font-medium">
                    {component.mechanism}
                  </p>

                  {/* Active Key Compounds List */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-mono uppercase text-zinc-500 font-bold tracking-wider block">
                      Key Bioactive Compounds
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {component.keyCompounds.map((comp, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-zinc-900/90 border border-zinc-800 text-[11px] text-zinc-300 font-mono font-medium"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer with Direct WhatsApp Button (No number shown) */}
                <div className="pt-5 mt-5 border-t border-zinc-900 flex items-center justify-between gap-2 text-xs">
                  <button
                    onClick={(e) => handleOpenWhatsApp(e, component.name)}
                    className="py-2 px-3 rounded-xl bg-zinc-900 hover:bg-emerald-600 border border-zinc-800 hover:border-emerald-400 text-zinc-300 hover:text-white font-mono text-[11px] font-black uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                    title="Open WhatsApp for this supplement"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    <span>Inquire on WhatsApp</span>
                  </button>

                  <div className="flex items-center gap-1 text-zinc-500 group-hover:text-red-400 transition-colors font-mono font-bold text-[11px]">
                    <span>Assay</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            </TiltCard3D>
          ))}
        </div>

      </div>
    </section>
  );
};
