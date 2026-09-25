import React from 'react';
import { Instagram, ArrowUpRight, ShieldCheck, PhoneCall, Dumbbell } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, WHATSAPP_URL, WHATSAPP_CONSULTATION_URL, WHATSAPP_PERSONAL_TRAINING_URL } from '../constants/assets';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onOpenContact: () => void;
  onOpenConsultation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenConsultation }) => {
  return (
    <footer className="bg-[#030305] text-zinc-400 border-t border-red-950/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Tier: Brand, Founder & Direct Connections */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between pb-12 border-b border-zinc-900">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4 text-left">
            <a href="#" className="flex flex-col group">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white font-display uppercase group-hover:text-red-400 transition-colors">
                  BuySupps
                </span>
                <span className="w-2 h-2 rounded-full bg-red-600 inline-block shadow-sm shadow-red-500" />
              </div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-red-400 font-black -mt-1">
                by Mukul Chaudhary
              </span>
            </a>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed font-medium">
              Simple Supplements. Better Training. Supplying single-ingredient, unadulterated sports nutrition components directly to serious lifters and athletes.
            </p>

            <div className="flex items-center gap-2 text-xs text-red-400/90 font-mono font-bold">
              <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
              <span>Zero fillers. No proprietary blends. Pure performance.</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-mono font-black text-white uppercase tracking-wider">
              Athlete Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono font-bold">
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-emerald-400 transition-colors text-emerald-400 inline-flex items-center gap-1.5">
                  <Dumbbell className="w-3.5 h-3.5" />
                  <span>1-on-1 Personal Training</span>
                </a>
              </li>
              <li>
                {onOpenConsultation ? (
                  <button onClick={onOpenConsultation} className="hover:text-red-400 transition-colors text-red-400 cursor-pointer text-left inline-flex items-center gap-1.5 font-bold">
                    <PhoneCall className="w-3.5 h-3.5 text-red-500" />
                    <span>Free Consultation Call</span>
                  </button>
                ) : (
                  <a href={WHATSAPP_CONSULTATION_URL} target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors text-red-400 inline-flex items-center gap-1.5 font-bold">
                    <PhoneCall className="w-3.5 h-3.5 text-red-500" />
                    <span>Free Consultation Call</span>
                  </a>
                )}
              </li>
              <li>
                <a href="#components" className="hover:text-red-400 transition-colors">
                  Active Components
                </a>
              </li>
              <li>
                <a href="#why-buysupps" className="hover:text-red-400 transition-colors">
                  Why BuySupps
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-red-400 transition-colors">
                  Frequently Asked Questions (FAQ)
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-red-400 transition-colors cursor-pointer text-left font-bold"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp & Instagram in Footer (No phone number shown) */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="text-xs font-mono font-black text-white uppercase tracking-wider">
              Direct Athlete Channels
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-medium">
              Connect directly with Mukul Chaudhary for component specifications, lab assay COAs, and coaching inquiries:
            </p>
            
            <div className="space-y-2 pt-1">
              {/* WhatsApp Direct Link */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-950/70 text-white transition-all group"
                title="Chat on WhatsApp"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                    <WhatsAppIcon className="w-4 h-4 fill-emerald-400" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-black block text-emerald-300">
                      Official WhatsApp Hotline
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono">
                      Fastest response for supplement inquiries
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Instagram Channel */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-red-500/60 hover:bg-zinc-800 text-white transition-all group"
                title="Visit BuySupps on Instagram"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-red-500/10 text-red-500 group-hover:scale-110 transition-transform">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-black block text-red-400 group-hover:text-red-300">
                      Instagram: {INSTAGRAM_HANDLE}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      Daily supplement science breakdowns
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-red-400 transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Dietary Advisory Notice */}
        <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-900 text-left text-[11px] text-zinc-500 leading-relaxed font-mono">
          <p>
            <strong className="text-zinc-400">Dietary Supplement Notice:</strong> Products and educational content provided by BuySupps by Mukul Chaudhary are intended to support general physical fitness, athletic recovery, and strength training. They are not intended to diagnose, treat, cure, or prevent any medical disease or clinical condition. Always consult with a qualified physician or sports healthcare provider before initiating any intensive training program or specialized supplementation protocol.
          </p>
        </div>

        {/* Bottom Tier: Disclaimer & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <p>
            © {new Date().getFullYear()} <strong className="text-zinc-300">BuySupps by Mukul Chaudhary</strong>. All rights reserved. Simple Supplements. Better Training.
          </p>

          <div className="flex items-center gap-4 text-xs font-mono font-bold">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
            >
              <WhatsAppIcon className="w-3 h-3 fill-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>
            <span className="text-zinc-700">·</span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors inline-flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
