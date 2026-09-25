import React, { useState } from 'react';
import { WHATSAPP_URL } from '../constants/assets';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Pill, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Floating Prompt Bubble (No phone number displayed) */}
      {showTooltip && (
        <div className="relative bg-[#0d0d12] border border-emerald-500/40 rounded-2xl p-3 shadow-2xl shadow-black/80 max-w-xs text-left animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute top-2 right-2 text-zinc-500 hover:text-white p-1"
            aria-label="Close message"
          >
            <X className="w-3 h-3" />
          </button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2.5 group cursor-pointer"
          >
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
              <Pill className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="pr-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[11px] font-mono font-black uppercase text-emerald-400 tracking-wider">
                  Supplements Hotline
                </span>
              </div>
              <p className="text-xs text-white font-bold leading-snug mt-0.5">
                Chat directly with Mukul Chaudhary
              </p>
              <span className="text-[10px] font-mono text-zinc-400 font-semibold block mt-0.5">
                Tap to open WhatsApp instantly
              </span>
            </div>
          </a>
        </div>
      )}

      {/* Main WhatsApp Floating Action Button (No number displayed) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-mono font-black text-xs uppercase tracking-wider shadow-2xl shadow-emerald-950/80 hover:shadow-emerald-600/50 border border-emerald-400/40 hover:scale-105 transition-all duration-300 cursor-pointer group"
        title="Open WhatsApp chat"
      >
        <div className="relative">
          <WhatsAppIcon className="w-5 h-5 fill-white group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
        </div>
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  );
};
