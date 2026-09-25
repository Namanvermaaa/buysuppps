import React from 'react';
import { X, ShieldCheck, CheckCircle2, Instagram, ArrowUpRight, Activity } from 'lucide-react';
import { SupplementComponent } from '../types/supplement';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, getWhatsAppUrlForComponent } from '../constants/assets';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ComponentModalProps {
  component: SupplementComponent | null;
  onClose: () => void;
}

export const ComponentModal: React.FC<ComponentModalProps> = ({ component, onClose }) => {
  if (!component) return null;

  const handleOpenWhatsApp = () => {
    window.open(getWhatsAppUrlForComponent(component.name), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-[#0b0b0f] border border-red-950 shadow-2xl shadow-red-950/50 overflow-hidden my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Laser Accent */}
        <div className="h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-red-900 w-full" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-white rounded-xl bg-zinc-900/80 hover:bg-zinc-800 transition-colors cursor-pointer border border-zinc-800"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-black uppercase tracking-wider text-red-400">
                {component.categoryLabel}
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-[11px] font-mono font-bold text-zinc-400">
                BuySupps by Mukul Chaudhary
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-white font-display uppercase tracking-tight">
              {component.name}
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 font-mono font-bold">
              {component.subtitle}
            </p>
          </div>

          {/* Direct WhatsApp Callout Banner (No number shown) */}
          <div 
            onClick={handleOpenWhatsApp}
            className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-950/60 flex items-center justify-between cursor-pointer transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-500 text-black font-black">
                <WhatsAppIcon className="w-4 h-4 fill-black" />
              </div>
              <div>
                <span className="text-xs font-mono font-black text-emerald-300 block uppercase">
                  Order / Inquire via Direct WhatsApp
                </span>
                <span className="text-[11px] text-zinc-400 font-medium">
                  Direct connection with founder Mukul Chaudhary
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
          </div>

          {/* Primary Physiological Role */}
          <div className="p-4 rounded-2xl bg-zinc-950 border border-red-950/60 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono font-black text-red-400 uppercase">
              <Activity className="w-3.5 h-3.5 text-red-500" />
              <span>Primary Athletic Mechanism</span>
            </div>
            <p className="text-sm font-bold text-white">
              {component.role}
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed pt-1 font-medium">
              {component.mechanism}
            </p>
          </div>

          {/* Training Benefit */}
          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-900 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono font-black text-zinc-300 uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
              <span>Performance Output in Training</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-medium">
              {component.trainingBenefit}
            </p>
          </div>

          {/* Active Molecular Compounds */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-zinc-400 font-black tracking-wider block">
              Active Chemical Components
            </span>
            <div className="flex flex-wrap gap-2">
              {component.keyCompounds.map((comp, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono font-bold text-zinc-200 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                  <span>{comp}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Scientific Validation & Purity */}
          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-2 text-xs font-mono">
            <div className="flex justify-between items-center text-zinc-400">
              <span className="font-bold">Analytical Standard:</span>
              <span className="text-white font-black">{component.purityGrade}</span>
            </div>
            <div className="pt-2 border-t border-zinc-800 text-zinc-400 leading-relaxed">
              <span className="text-red-400 font-black">Consensus: </span>
              {component.scientificValidation}
            </div>
          </div>

          {/* Primary Action Buttons: WhatsApp Direct + Instagram + Close (No number shown) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleOpenWhatsApp}
              className="w-full sm:flex-1 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-mono text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Inquire on WhatsApp</span>
            </button>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-red-500/50 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4 text-red-400" />
              <span>{INSTAGRAM_HANDLE}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-zinc-800"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
