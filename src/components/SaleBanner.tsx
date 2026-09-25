import React, { useState, useEffect } from 'react';
import { Flame, Clock, Sparkles, ArrowRight, Zap, X } from 'lucide-react';
import { WHATSAPP_SALE_URL, WHATSAPP_CONSULTATION_URL } from '../constants/assets';
import { WhatsAppIcon } from './WhatsAppIcon';

interface SaleBannerProps {
  onOpenConsultation?: () => void;
}

export const SaleBanner: React.FC<SaleBannerProps> = ({ onOpenConsultation }) => {
  // 6 Hours Timer (6 * 3600 = 21600 seconds)
  const INITIAL_SECONDS = 6 * 3600;

  const [timeLeft, setTimeLeft] = useState<number>(() => {
    try {
      const stored = sessionStorage.getItem('buysupps_sale_end');
      if (stored) {
        const remaining = Math.max(0, Math.floor((parseInt(stored, 10) - Date.now()) / 1000));
        return remaining > 0 ? remaining : INITIAL_SECONDS;
      }
      const targetTime = Date.now() + INITIAL_SECONDS * 1000;
      sessionStorage.setItem('buysupps_sale_end', targetTime.toString());
      return INITIAL_SECONDS;
    } catch {
      return INITIAL_SECONDS;
    }
  });

  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');

  if (!isBannerVisible) return null;

  return (
    <aside aria-label="Flash sale announcement" className="relative z-40 bg-gradient-to-r from-[#1f0505] via-[#2f0808] to-[#1a0505] border-b border-red-500/40 text-white shadow-xl shadow-red-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          
          {/* Sale Alert & Tagline */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600 text-white text-[11px] font-mono font-black uppercase tracking-wider animate-pulse shadow-md shadow-red-900/60">
              <Flame className="w-3.5 h-3.5 fill-white" />
              <span>SALE IS LIVE</span>
            </span>

            <span className="text-xs sm:text-sm font-black font-display tracking-tight text-white uppercase">
              Exclusive Direct Athlete Pricing + Free Supplement Consultation
            </span>

            <span className="hidden xl:inline text-zinc-400 text-xs font-mono">
              // Direct from Mukul Chaudhary
            </span>
          </div>

          {/* Countdown Clock (6 Hours Left) & Fast Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Live Timer Display */}
            <div className="flex items-center gap-1.5 bg-black/70 border border-red-500/50 rounded-xl px-3 py-1 text-xs font-mono font-black">
              <Clock className="w-3.5 h-3.5 text-red-500 animate-spin" style={{ animationDuration: '6s' }} />
              <span className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider hidden sm:inline">
                Time Left:
              </span>
              <div className="flex items-center gap-1 text-white font-mono text-xs sm:text-sm">
                <span className="text-red-400">{pad(hours)}h</span>
                <span className="text-zinc-500">:</span>
                <span className="text-red-300">{pad(minutes)}m</span>
                <span className="text-zinc-500">:</span>
                <span className="text-white bg-red-950/80 px-1 rounded border border-red-800/60">{pad(seconds)}s</span>
              </div>
            </div>

            {/* Direct WhatsApp Claim CTA */}
            <a
              href={WHATSAPP_SALE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-red-950/60 hover:scale-105"
            >
              <Zap className="w-3.5 h-3.5 fill-white" />
              <span>Claim Sale on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Close Banner button */}
            <button
              onClick={() => setIsBannerVisible(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </aside>
  );
};
