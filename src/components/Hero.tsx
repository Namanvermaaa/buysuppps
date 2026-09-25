import React from 'react';
import { ArrowDown, Instagram, ArrowUpRight, ShieldCheck, Zap, Pill, PhoneCall, Dumbbell } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, WHATSAPP_URL, WHATSAPP_CONSULTATION_URL } from '../constants/assets';
import { ThreeCanvas3D } from './ThreeCanvas3D';
import { TiltCard3D } from './TiltCard3D';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroProps {
  onExploreComponents: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreComponents,
  onOpenConsultation,
}) => {
  const handleOpenWhatsApp = () => {
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-28 bg-[#050507] border-b border-red-950/30">
      
      {/* 3D Deep Red Ambient Light Blooms */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-600/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-red-900/15 blur-[140px] pointer-events-none rounded-full" />
      
      {/* Subtle 3D Perspective Grid Background */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(239, 68, 68, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(239, 68, 68, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Mission & Typography */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Founder Pill Badge & Direct WhatsApp Supplement Trigger (No number shown) */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-950/90 border border-red-500/30 shadow-lg shadow-red-950/40">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-mono font-black tracking-wider uppercase text-red-400">
                  BuySupps by Mukul Chaudhary
                </span>
              </div>

              {/* Tapping this Supplements badge opens WhatsApp directly! */}
              <button
                onClick={handleOpenWhatsApp}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/50 text-emerald-400 text-xs font-mono font-black uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-emerald-950/50 hover:scale-105"
                title="Tap to chat directly on WhatsApp"
              >
                <Pill className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
                <span>Supplements Hotline on WhatsApp</span>
              </button>
            </div>

            {/* Main Headline with Heavy Bold Styling */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white font-display tracking-tight leading-[1.03] text-balance uppercase">
                Simple Supplements.{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-rose-200">
                  Better Training.
                </span>
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg max-w-xl font-medium leading-relaxed text-pretty">
                Founded by <strong className="text-white font-black">Mukul Chaudhary</strong> on a single uncompromising rule: 
                deliver pure, unadulterated sports supplement components directly to athletes. Zero proprietary blends, zero commercial markups, and zero artificial fillers.
              </p>
            </div>

            {/* Action CTA Buttons: Free Call + WhatsApp + Catalog */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Book Free Consultation Call Primary CTA */}
              <button
                onClick={onOpenConsultation}
                className="px-6 py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-xl shadow-red-950/80 hover:shadow-red-600/40 flex items-center gap-2.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <PhoneCall className="w-4 h-4 fill-current" />
                <span>Book Your Free Consultation Call</span>
              </button>

              {/* WhatsApp Direct Action Button (No number displayed) */}
              <button
                onClick={handleOpenWhatsApp}
                className="px-5 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-mono text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-xl shadow-emerald-950/80 hover:shadow-emerald-600/40 flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </button>

              <button
                onClick={onExploreComponents}
                className="px-5 py-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-red-500/50 hover:bg-zinc-900 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>Pure Components</span>
                <ArrowDown className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* 3 Value Markers */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80">
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-black font-display text-white block">
                  100%
                </span>
                <span className="text-[11px] font-mono uppercase text-zinc-400 font-bold tracking-wide block">
                  Active Compounds
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-black font-display text-red-500 block">
                  0%
                </span>
                <span className="text-[11px] font-mono uppercase text-zinc-400 font-bold tracking-wide block">
                  Proprietary Blends
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-black font-display text-emerald-400 block">
                  1-on-1
                </span>
                <span className="text-[11px] font-mono uppercase text-zinc-400 font-bold tracking-wide block">
                  Personal Training
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Canvas with Floating 3D Cards */}
          <div className="lg:col-span-6 relative">
            
            {/* 3D Canvas Box */}
            <div className="relative aspect-square max-w-[500px] mx-auto rounded-3xl bg-gradient-to-b from-[#12080a] to-[#070507] border border-red-950/60 p-2 shadow-2xl shadow-red-950/50 overflow-hidden group">
              {/* Three.js Interactive 3D Canvas */}
              <ThreeCanvas3D className="w-full h-full" />
            </div>

            {/* Floating 3D Tilt Pill Card 1: Top Right */}
            <div className="absolute -top-4 -right-2 sm:-right-6 hidden sm:block z-30">
              <TiltCard3D maxTilt={15} className="w-48">
                <div 
                  onClick={handleOpenWhatsApp}
                  className="p-3.5 rounded-2xl bg-zinc-950/95 border border-red-500/40 shadow-xl shadow-red-950/40 space-y-1 cursor-pointer hover:border-emerald-500 transition-colors"
                >
                  <div className="flex items-center justify-between text-red-400 font-mono text-[10px] font-black uppercase">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>HPLC Verified</span>
                    </span>
                    <span className="text-[9px] text-emerald-400 font-bold">WhatsApp</span>
                  </div>
                  <div className="text-xs font-black text-white font-display uppercase tracking-wide">
                    Single-Component Purity
                  </div>
                  <div className="text-[10px] text-zinc-400 font-medium">
                    Tap to chat on WhatsApp
                  </div>
                </div>
              </TiltCard3D>
            </div>

            {/* Floating 3D Tilt Pill Card 2: Bottom Left */}
            <div className="absolute -bottom-6 -left-2 sm:-left-6 hidden sm:block z-30">
              <TiltCard3D maxTilt={15} className="w-56">
                <div 
                  onClick={onOpenConsultation}
                  className="p-3.5 rounded-2xl bg-zinc-950/95 border border-emerald-500/50 hover:border-emerald-400 shadow-xl shadow-black/80 space-y-1 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px] font-bold uppercase">
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Free Athlete Strategy Call</span>
                  </div>
                  <div className="text-xs font-black text-white font-display uppercase tracking-wide">
                    1-on-1 Personal Training
                  </div>
                  <div className="text-[10px] text-zinc-300 font-mono font-medium flex items-center gap-1">
                    <span>Reserve Session with Mukul</span>
                  </div>
                </div>
              </TiltCard3D>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
