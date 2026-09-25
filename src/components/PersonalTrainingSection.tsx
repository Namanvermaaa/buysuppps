import React from 'react';
import { Dumbbell, PhoneCall, CheckCircle2, Flame, ArrowUpRight, Calendar, UserCheck, ShieldCheck } from 'lucide-react';
import { WHATSAPP_CONSULTATION_URL, WHATSAPP_PERSONAL_TRAINING_URL } from '../constants/assets';
import { WhatsAppIcon } from './WhatsAppIcon';
import { TiltCard3D } from './TiltCard3D';

interface PersonalTrainingSectionProps {
  onOpenBookingModal: () => void;
}

export const PersonalTrainingSection: React.FC<PersonalTrainingSectionProps> = ({
  onOpenBookingModal,
}) => {
  return (
    <section id="training" className="py-24 bg-[#050507] border-b border-red-950/30 relative overflow-hidden text-left scroll-mt-12">
      {/* Red ambient glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-red-600/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-red-900/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/50 border border-red-800/50 text-red-400 text-xs font-mono font-black uppercase tracking-wider">
            <Flame className="w-4 h-4 text-red-500 fill-red-500" />
            <span>Mukul Chaudhary Coaching & Consultations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight uppercase leading-[1.05]">
            Book Your Free Consultation Call & Personal Training
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-medium">
            Stop guessing your workout programming and supplement intake. Get structured, scientifically grounded coaching 
            and 1-on-1 guidance directly from <strong className="text-white font-black">Mukul Chaudhary</strong>.
          </p>
        </div>

        {/* 2 Flagship Offerings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Book Your Free Consultation Call */}
          <TiltCard3D maxTilt={6} className="h-full">
            <div className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#161214] via-[#0d0d12] to-[#07070a] border border-red-500/40 hover:border-red-400 shadow-2xl shadow-red-950/40 relative overflow-hidden transition-all duration-300 group">
              
              {/* Corner Flash Ribbon */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-red-600 to-red-700 text-white font-mono text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-md">
                100% Free · No Obligation
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-black uppercase text-red-400">
                    <PhoneCall className="w-4 h-4 text-red-500" />
                    <span>Free Athlete Strategy Session</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
                    Book Your Free Consultation Call
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                    A dedicated 1-on-1 strategy call with Mukul Chaudhary to review your current training regime, 
                    audit your supplement stack, and eliminate useless additives from your athletic routine.
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono font-black uppercase text-zinc-400 tracking-wider block">
                    What's Covered In Your Free Call:
                  </span>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 font-medium">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Full supplement ingredient breakdown & zero-filler audit</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Pinpointing pure component deficiencies in your current training</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Personalized daily nutrient & ergogenic timing guide</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Live Q&A on performance biology with Mukul Chaudhary</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-8 mt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={WHATSAPP_CONSULTATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-950/70 hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Book Free Call on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={onOpenBookingModal}
                  className="w-full sm:w-auto px-5 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-red-500/50 text-zinc-300 hover:text-white font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>Quick Form</span>
                </button>
              </div>

            </div>
          </TiltCard3D>

          {/* Card 2: 1-on-1 Personal Training */}
          <TiltCard3D maxTilt={6} className="h-full">
            <div className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#131714] via-[#0d100e] to-[#07070a] border border-emerald-500/40 hover:border-emerald-400 shadow-2xl shadow-emerald-950/30 relative overflow-hidden transition-all duration-300 group">
              
              {/* Corner Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-600 to-teal-700 text-white font-mono text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-md">
                Elite 1-on-1 Mentorship
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-black uppercase text-emerald-400">
                    <Dumbbell className="w-4 h-4 text-emerald-400" />
                    <span>Comprehensive Athlete Development</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
                    1-on-1 Personal Training & Nutrition
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                    Personalized, periodized strength and hypertrophy training engineered specifically for your body mechanics, 
                    paired with an unbranded, pure component sports nutrition system.
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono font-black uppercase text-zinc-400 tracking-wider block">
                    What You Receive In Personal Training:
                  </span>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 font-medium">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Custom-tailored exercise selection, progressive overload tracking & biomechanics</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Pure component supplement blueprints customized to your workout intensity</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Weekly video call progress evaluations and physique metrics reviews</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Direct 24/7 WhatsApp access to Mukul Chaudhary for daily form critiques</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-8 mt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={WHATSAPP_PERSONAL_TRAINING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-mono font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/70 hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Apply for Personal Training on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={onOpenBookingModal}
                  className="w-full sm:w-auto px-5 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-emerald-500/50 text-zinc-300 hover:text-white font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>Inquire</span>
                </button>
              </div>

            </div>
          </TiltCard3D>

        </div>

        {/* Confidence Assurance Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-900 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3 text-zinc-300 font-bold">
            <ShieldCheck className="w-5 h-5 text-red-500 shrink-0" />
            <span>Direct Guidance by Founder Mukul Chaudhary · Zero Generic Bots · Real Athletic Science</span>
          </div>

          <a
            href={WHATSAPP_CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-white font-black uppercase flex items-center gap-1.5 transition-colors"
          >
            <span>Start Your Journey on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
