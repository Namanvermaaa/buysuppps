import React, { useState } from 'react';
import { Instagram, ArrowUpRight, Menu, X, Sparkles, Compass, Info, Mail, Pill, PhoneCall, Dumbbell } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, WHATSAPP_URL, WHATSAPP_CONSULTATION_URL } from '../constants/assets';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeaderProps {
  onOpenContact: () => void;
  onExploreComponents: () => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenContact,
  onExploreComponents,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Opens WhatsApp directly for supplements inquiries
  const handleSupplementsClick = () => {
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#050507]/95 backdrop-blur-xl border-b border-red-950/50 transition-all">
      {/* Top Banner: Founder's Mission, WhatsApp & Official Instagram */}
      <div className="bg-gradient-to-r from-[#170505] via-[#240808] to-[#170505] border-b border-red-900/40 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-2.5 text-zinc-300">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-red-400 font-extrabold">
              BuySupps by Mukul Chaudhary
            </span>
            <span className="hidden md:inline text-zinc-600">|</span>
            <span className="hidden md:inline text-zinc-400 font-medium">
              Simple Supplements. Better Training. Pure Active Components.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            {/* Direct WhatsApp Contact in Top Bar (No number shown) */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
              title="Chat directly on WhatsApp with Mukul Chaudhary"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400" />
              <span>Direct WhatsApp Line</span>
            </a>

            <span className="text-zinc-700">|</span>

            {/* Instagram Link */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-red-400 hover:text-white transition-colors group cursor-pointer font-bold"
            >
              <Instagram className="w-3.5 h-3.5 text-red-400 group-hover:scale-110 transition-transform" />
              <span>{INSTAGRAM_HANDLE}</span>
              <ArrowUpRight className="w-3 h-3 text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Founder Attribution (No BS icon, bold typography) */}
          <a href="#" className="flex flex-col group text-left">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-white font-display uppercase group-hover:text-red-400 transition-colors">
                BuySupps
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block shadow-sm shadow-red-500 animate-pulse" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-red-400 font-extrabold -mt-1">
              by Mukul Chaudhary
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold">
            
            {/* Supplements Icon Trigger: Opens WhatsApp directly as requested! */}
            <button
              onClick={handleSupplementsClick}
              className="group relative px-3 py-1.5 rounded-xl bg-red-950/40 hover:bg-red-600 border border-red-500/40 hover:border-red-400 text-white transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-red-950/40"
              title="Tap Supplements icon to chat on WhatsApp directly"
            >
              <Pill className="w-4 h-4 text-red-400 group-hover:text-white transition-colors animate-bounce" />
              <span className="font-extrabold text-white">Supplements</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-500 text-black font-black uppercase tracking-normal">
                WhatsApp
              </span>
            </button>

            <a
              href="#components"
              className="hover:text-red-400 transition-colors flex items-center gap-1.5 py-1"
            >
              <Compass className="w-3.5 h-3.5 text-red-500" />
              <span>Catalog</span>
            </a>

            <a
              href="#training"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 py-1 text-emerald-300"
            >
              <Dumbbell className="w-3.5 h-3.5 text-emerald-400" />
              <span>Personal Training</span>
            </a>

            <a
              href="#why-buysupps"
              className="hover:text-red-400 transition-colors flex items-center gap-1.5 py-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              <span>Why BuySupps</span>
            </a>

            <a
              href="#faq"
              className="hover:text-red-400 transition-colors flex items-center gap-1.5 py-1"
            >
              <Info className="w-3.5 h-3.5 text-red-500" />
              <span>FAQ</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="hover:text-red-400 transition-colors flex items-center gap-1.5 py-1 cursor-pointer font-bold text-red-400"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-500" />
              <span>Free Consultation</span>
            </button>

            <button
              onClick={onOpenContact}
              className="hover:text-red-400 transition-colors flex items-center gap-1.5 py-1 cursor-pointer font-bold"
            >
              <Mail className="w-3.5 h-3.5 text-red-500" />
              <span>Contact</span>
            </button>
          </nav>

          {/* Right Action: Free Call & Direct WhatsApp (No number displayed) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-red-500/50 hover:border-red-400 text-white font-mono text-xs font-black uppercase tracking-wider transition-all hover:bg-zinc-800 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-500" />
              <span>Book Free Call</span>
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-mono text-xs font-black uppercase tracking-wider transition-all shadow-md shadow-emerald-950/60 hover:shadow-emerald-600/30 group"
              title="Chat directly on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Direct WhatsApp Mobile Tap Icon */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-400"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-emerald-400" />
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900 border border-red-900/40 text-red-400"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-red-950/60 bg-[#07070a] px-4 py-6 space-y-4">
          <div className="text-[11px] font-mono uppercase text-red-400 font-extrabold tracking-wider px-2">
            BuySupps by Mukul Chaudhary
          </div>
          
          {/* Direct Tap for Supplements on Mobile -> Opens WhatsApp */}
          <div className="p-3 rounded-2xl bg-gradient-to-r from-red-950/60 to-emerald-950/40 border border-red-500/30">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleSupplementsClick();
              }}
              className="w-full flex items-center justify-between text-left py-2 font-display font-extrabold text-white cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Pill className="w-5 h-5 text-red-400" />
                <span className="text-base">Supplements (Inquire)</span>
              </div>
              <span className="px-2 py-1 rounded bg-emerald-500 text-black text-[10px] font-mono font-black uppercase">
                WhatsApp Direct
              </span>
            </button>
            <p className="text-[11px] text-zinc-400 font-mono mt-1">
              Tap to chat directly with Mukul Chaudhary on WhatsApp
            </p>
          </div>

          <div className="flex flex-col space-y-2 font-mono text-xs text-zinc-300 font-bold uppercase tracking-wider">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="p-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-red-400 font-black text-left flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-red-500" />
              <span>Book Your Free Consultation Call</span>
            </button>

            <a
              href="#training"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-zinc-900 hover:text-emerald-400 text-emerald-400 font-black flex items-center gap-2"
            >
              <Dumbbell className="w-4 h-4" />
              <span>1-on-1 Personal Training</span>
            </a>

            <a
              href="#components"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-zinc-900 hover:text-red-400"
            >
              Component Breakdown
            </a>

            <a
              href="#why-buysupps"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-zinc-900 hover:text-red-400"
            >
              Why BuySupps
            </a>

            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-zinc-900 hover:text-red-400"
            >
              Frequently Asked Questions (FAQ)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="p-3 rounded-xl hover:bg-zinc-900 hover:text-red-400 text-left cursor-pointer"
            >
              Direct Consultation Form
            </button>
          </div>

          {/* WhatsApp Primary Mobile Button */}
          <div className="pt-2 space-y-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-mono text-xs font-black uppercase tracking-wider shadow-lg shadow-emerald-950/60"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-mono text-xs font-bold uppercase tracking-wider"
            >
              <Instagram className="w-4 h-4 text-red-400" />
              <span>Instagram: {INSTAGRAM_HANDLE}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
