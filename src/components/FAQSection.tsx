import React, { useState } from 'react';
import { HelpCircle, ChevronDown, PhoneCall, Sparkles } from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_CONSULTATION_URL } from '../constants/assets';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'How do I place an order for BuySupps components?',
    answer:
      'Orders are handled directly via WhatsApp for personalized service. Click any "Inquire on WhatsApp" or "Supplements" button to open a direct chat with Mukul Chaudhary. You can specify the exact components and quantities you need, ask any questions, and receive direct payment and dispatch tracking details.',
  },
  {
    question: 'What makes BuySupps pure components different from commercial store brands?',
    answer:
      'Most mass-market commercial brands dilute active ingredients with maltodextrin, artificial sweeteners, thickeners, and hidden "proprietary blends". BuySupps delivers 100% active, single-ingredient raw bioactive compounds (such as 200-mesh micronized creatine, cold-microfiltered whey isolate, and free-form fermented BCAAs) with zero hidden fillers.',
  },
  {
    question: 'What is included in the Free Consultation Call?',
    answer:
      'The Free Consultation Call is a 15–20 minute 1-on-1 strategy call with Mukul Chaudhary. Together, you will review your current workout split, daily caloric and protein targets, physique goals, and analyze whether your current supplement stack is actually working for you or wasting money.',
  },
  {
    question: 'How does the 1-on-1 Personal Training program work?',
    answer:
      'Personal training includes custom workout split design (Push/Pull/Legs, Upper/Lower, or Powerbuilding), precise caloric and macro breakdowns tailored to your metabolism, weekly video form-check reviews, and continuous accountability directly with Mukul Chaudhary via WhatsApp.',
  },
  {
    question: 'Do you deliver across India?',
    answer:
      'Yes, we ship across all states and union territories in India using insured express courier partners. Once your order is confirmed on WhatsApp, tracking credentials are provided immediately upon dispatch.',
  },
  {
    question: 'Can Mukul Chaudhary help me assemble a custom supplement stack?',
    answer:
      'Absolutely. You can tap any WhatsApp button or book a free consultation call to discuss your sport, recovery demands, and physique target. Mukul will recommend only the essential components your body actually needs without unnecessary products.',
  },
];

interface FAQSectionProps {
  onOpenConsultation: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#07070a] border-b border-red-950/30 relative overflow-hidden text-left scroll-mt-12">
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-red-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/50 border border-red-800/50 text-red-400 text-xs font-mono font-black uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-red-500" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase">
            Everything You Need To Know
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-medium">
            Clear, transparent answers about our pure components, 1-on-1 personal training, and direct WhatsApp consultations.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-zinc-950/70 border border-zinc-900 hover:border-red-950/80 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="font-mono font-bold text-sm sm:text-base text-zinc-100 group-hover:text-red-400 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-red-400 border-red-500/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-zinc-300 text-sm leading-relaxed border-t border-zinc-900/60 font-medium">
                    <div className="pt-4">{faq.answer}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA within FAQ */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-red-950/30 via-zinc-950 to-zinc-950 border border-red-950/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-white font-mono font-bold text-sm uppercase">
              Still have a specific question?
            </h4>
            <p className="text-zinc-400 text-xs font-medium">
              Talk directly with Mukul Chaudhary on WhatsApp or schedule your free call.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-red-500/40 hover:border-red-400 text-white font-mono text-xs font-bold uppercase transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-400" />
              <span>Book Free Call</span>
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold uppercase transition-all flex items-center gap-1.5 shadow-md shadow-emerald-950"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
