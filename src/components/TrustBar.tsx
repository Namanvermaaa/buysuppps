import React from 'react';
import { ShieldCheck, Truck, Sparkles, MessageCircle } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_URL } from '../constants/assets';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      iconColor: 'text-red-500',
      title: '100% Raw Ingredients',
      description: 'Zero hidden proprietary blends, zero maltodextrin fillers',
    },
    {
      icon: MessageCircle,
      iconColor: 'text-emerald-400',
      title: 'Direct WhatsApp Line',
      description: 'Connect directly with Mukul Chaudhary for personalized stacks',
    },
    {
      icon: Truck,
      iconColor: 'text-red-500',
      title: 'Pan-India Express Dispatch',
      description: 'Fast, secure doorstep delivery across all states & pincodes',
    },
    {
      icon: Sparkles,
      iconColor: 'text-emerald-400',
      title: 'Free Athlete Consultation',
      description: '1-on-1 training guidance & supplement protocol audit',
    },
  ];

  return (
    <section className="bg-[#08080c] border-y border-red-950/40 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-950/60 border border-zinc-900/80 hover:border-red-950/70 transition-all text-left group"
              >
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80 group-hover:scale-105 transition-transform shrink-0">
                  <Icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <div>
                  <h4 className="text-white font-mono font-bold text-xs uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 text-xs mt-1 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
