import React from 'react';
import { Instagram, ArrowUpRight, ShieldCheck, Dumbbell } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, WHATSAPP_CONSULTATION_URL } from '../constants/assets';
import { TiltCard3D } from './TiltCard3D';
import { WhatsAppIcon } from './WhatsAppIcon';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#050507] border-b border-red-950/30 relative overflow-hidden text-left">
      
      {/* Red ambient light pool */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-red-600/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Direct Follow CTA and WhatsApp Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono font-black text-red-400 uppercase tracking-wider">
              <Instagram className="w-4 h-4 text-red-500" />
              <span>Official Community Channel</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase">
              Follow BuySupps by Mukul Chaudhary on Instagram
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-medium">
              Connect directly with Mukul Chaudhary on{' '}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 font-black underline underline-offset-4"
              >
                {INSTAGRAM_HANDLE}
              </a>{' '}
              for daily athlete guidance, training insights, and direct coaching communication.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={WHATSAPP_CONSULTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-600 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 hover:text-white font-mono font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono font-black text-xs uppercase tracking-wider transition-all duration-300 group shadow-lg shadow-red-950/80 hover:shadow-red-600/40 cursor-pointer"
            >
              <Instagram className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>Follow {INSTAGRAM_HANDLE}</span>
              <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* 3D Visual Community Connect Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TiltCard3D maxTilt={6} className="h-full">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-2xl bg-gradient-to-b from-[#111116] to-[#08080a] border border-red-950/80 hover:border-red-500/60 transition-all duration-300 group h-full cursor-pointer shadow-xl shadow-red-950/30"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-950/80 border border-red-500/50 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-black text-lg uppercase tracking-wide group-hover:text-red-400 transition-colors">
                      {INSTAGRAM_HANDLE}
                    </div>
                    <div className="text-xs font-mono text-zinc-400 font-bold">
                      Official Athlete Portal
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-red-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              
              <p className="text-sm text-zinc-300 leading-relaxed font-medium mb-6">
                Stay updated with Mukul Chaudhary's athlete journey, supplement component analyses, and direct client transformations on Instagram.
              </p>

              <div className="pt-4 border-t border-zinc-900 flex items-center gap-2 text-xs font-mono text-red-400 font-bold">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>Verified Direct Channel</span>
              </div>
            </a>
          </TiltCard3D>

          <TiltCard3D maxTilt={6} className="h-full">
            <a
              href={WHATSAPP_CONSULTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-2xl bg-gradient-to-b from-[#0c1310] to-[#070b09] border border-emerald-950/80 hover:border-emerald-500/60 transition-all duration-300 group h-full cursor-pointer shadow-xl shadow-emerald-950/30"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <WhatsAppIcon className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <div className="text-white font-black text-lg uppercase tracking-wide group-hover:text-emerald-400 transition-colors">
                      Direct WhatsApp Support
                    </div>
                    <div className="text-xs font-mono text-emerald-400 font-bold">
                      Instant Athlete Communication
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              
              <p className="text-sm text-zinc-300 leading-relaxed font-medium mb-6">
                Have questions regarding pure components, customized protocols, or 1-on-1 personal training? Get immediate responses directly on WhatsApp.
              </p>

              <div className="pt-4 border-t border-zinc-900 flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold">
                <Dumbbell className="w-4 h-4 text-emerald-500" />
                <span>1-on-1 Consultation & Training</span>
              </div>
            </a>
          </TiltCard3D>
        </div>

      </div>
    </section>
  );
};
