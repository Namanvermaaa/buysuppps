import React from 'react';
import { ShieldCheck, Check, X, ArrowUpRight, Flame, Sparkles } from 'lucide-react';
import { WHATSAPP_CONSULTATION_URL } from '../constants/assets';
import { TiltCard3D } from './TiltCard3D';

interface WhyBuySuppsSectionProps {
  onOpenConsultation: () => void;
}

export const WhyBuySuppsSection: React.FC<WhyBuySuppsSectionProps> = ({
  onOpenConsultation,
}) => {
  const comparisons = [
    {
      feature: 'Ingredient Transparency',
      commercial: 'Hidden "proprietary blends" hiding cheap underdosed fillers',
      buysupps: '100% single-ingredient raw bioactive compounds with zero filler',
    },
    {
      feature: 'Artificial Additives',
      commercial: 'Maltodextrin bulking agents, chemical dyes, artificial gums',
      buysupps: 'Zero unneeded thickening agents, sweeteners, or synthetic colorings',
    },
    {
      feature: 'Athlete Guidance',
      commercial: 'Generic call centers and retail sales reps on commission',
      buysupps: 'Direct WhatsApp communication & personalized advice from Mukul Chaudhary',
    },
    {
      feature: 'Training Integration',
      commercial: 'No workout context; sold as "magic pills" without lifestyle accountability',
      buysupps: 'Coupled with 1-on-1 personal training protocols and nutrition audits',
    },
    {
      feature: 'Value For Lifters',
      commercial: 'Paying 60%+ markup for bloated marketing, celebrity endorsements',
      buysupps: 'Direct-to-athlete pricing focused 100% on raw ingredient quality',
    },
  ];

  return (
    <section id="why-buysupps" className="py-24 bg-[#050507] border-b border-red-950/30 relative overflow-hidden text-left scroll-mt-12">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-red-600/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-zinc-800/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/50 border border-red-800/50 text-red-400 text-xs font-mono font-black uppercase tracking-wider">
            <Flame className="w-4 h-4 text-red-500 fill-red-500" />
            <span>Why BuySupps</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight uppercase leading-[1.05]">
            Built For Serious Lifters, Not Marketing Gimmicks
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-medium">
            The commercial supplement industry thrives on proprietary blends, hidden fillers, and exaggerated claims. 
            <strong className="text-white font-black"> BuySupps by Mukul Chaudhary</strong> simplifies everything: 
            pure raw components, unadulterated bioavailability, and real training results.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Comparison Grid */}
          <div className="lg:col-span-8 rounded-3xl bg-[#09090d] border border-zinc-800/80 p-6 sm:p-8 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-zinc-800 text-xs font-mono font-black uppercase tracking-wider">
              <div className="text-zinc-500 flex items-center gap-2">
                <X className="w-4 h-4 text-zinc-500" />
                <span>Commercial Supplement Brands</span>
              </div>
              <div className="text-red-400 flex items-center gap-2">
                <Check className="w-4 h-4 text-red-400" />
                <span>BuySupps by Mukul Chaudhary</span>
              </div>
            </div>

            <div className="divide-y divide-zinc-900">
              {comparisons.map((item, idx) => (
                <div key={idx} className="py-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Commercial drawback */}
                  <div className="flex items-start gap-2.5 text-zinc-400 text-xs sm:text-sm font-medium">
                    <span className="p-1 rounded-full bg-red-950/40 text-red-400 shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <span className="block font-mono font-bold text-zinc-300 text-xs uppercase mb-0.5">
                        {item.feature}
                      </span>
                      {item.commercial}
                    </div>
                  </div>

                  {/* BuySupps advantage */}
                  <div className="flex items-start gap-2.5 text-zinc-200 text-xs sm:text-sm font-medium">
                    <span className="p-1 rounded-full bg-emerald-950/60 text-emerald-400 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <span className="block font-mono font-bold text-emerald-400 text-xs uppercase mb-0.5">
                        BuySupps Standard
                      </span>
                      {item.buysupps}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Callout: 1-on-1 Consultation CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-b from-[#18090b] via-[#10080a] to-[#070507] border border-red-500/40 shadow-2xl relative group">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-red-950/80 border border-red-500/40 flex items-center justify-center text-red-400">
                <Sparkles className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono font-black uppercase text-red-400 tracking-wider">
                  Athlete First
                </span>
                <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight mt-1">
                  Need Help Choosing Your Stack?
                </h3>
                <p className="text-zinc-300 text-sm mt-3 leading-relaxed font-medium">
                  Don't waste money buying supplements you don't need. Book a free consultation call to review your current training routine, diet, and exact component requirements.
                </p>
              </div>

              <div className="space-y-2 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Free · 15-Minute Strategy Call</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Personalized advice from Mukul Chaudhary</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenConsultation}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-red-950 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Book Free Consultation Call</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
