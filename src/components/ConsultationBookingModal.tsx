import React, { useState } from 'react';
import { X, Calendar, PhoneCall, CheckCircle2, Flame, ArrowUpRight, Dumbbell } from 'lucide-react';
import { WHATSAPP_CONSULTATION_URL, WHATSAPP_PERSONAL_TRAINING_URL } from '../constants/assets';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ConsultationBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationBookingModal: React.FC<ConsultationBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [goal, setGoal] = useState<'consultation' | 'personal-training'>('consultation');
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('Intermediate (1-3 years)');
  const [focusArea, setFocusArea] = useState('Supplement Stack & Diet Optimization');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Mukul Chaudhary! I want to ${
        goal === 'consultation' ? 'book a Free Consultation Call' : 'apply for 1-on-1 Personal Training'
      }.\n\nName: ${name || 'Athlete'}\nExperience: ${experience}\nFocus Area: ${focusArea}`
    );
    window.open(`https://wa.me/918130748666?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#0b0b0f] border border-red-950 shadow-2xl shadow-red-950/60 overflow-hidden my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent */}
        <div className="h-1.5 bg-gradient-to-r from-red-600 via-emerald-500 to-red-600 w-full" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-white rounded-xl bg-zinc-900 border border-zinc-800 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-mono font-black text-red-400 uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              <span>BuySupps by Mukul Chaudhary</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
              Book Your Free Call or Coaching
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-medium">
              Direct guidance with Mukul Chaudhary. Choose your path below and reserve your session.
            </p>
          </div>

          {/* Goal Selector Tabs */}
          <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-zinc-950 border border-zinc-900">
            <button
              type="button"
              onClick={() => setGoal('consultation')}
              className={`py-2.5 px-3 rounded-xl text-xs font-mono font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                goal === 'consultation'
                  ? 'bg-red-600 text-white shadow-md shadow-red-950'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Free Consultation</span>
            </button>

            <button
              type="button"
              onClick={() => setGoal('personal-training')}
              className={`py-2.5 px-3 rounded-xl text-xs font-mono font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                goal === 'personal-training'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Dumbbell className="w-3.5 h-3.5" />
              <span>Personal Training</span>
            </button>
          </div>

          {/* Quick Direct WhatsApp Fast-Track */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-zinc-950 border border-emerald-500/50 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-500 text-black font-black">
                <WhatsAppIcon className="w-4 h-4 fill-black" />
              </div>
              <div>
                <span className="text-xs font-mono font-black text-emerald-300 block uppercase">
                  Fastest Booking on WhatsApp
                </span>
                <span className="text-[11px] text-zinc-400 font-medium">
                  Instant scheduling with Mukul Chaudhary
                </span>
              </div>
            </div>

            <button
              onClick={handleWhatsAppDirect}
              className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-wider inline-flex items-center gap-1 transition-all cursor-pointer shadow-md"
            >
              <span>Book Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/40">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-black text-white font-display uppercase">Booking Request Received</h4>
              <p className="text-xs text-zinc-300 max-w-xs mx-auto font-medium">
                Thank you, {name || 'Athlete'}. Mukul Chaudhary will connect with you via WhatsApp to coordinate your calendar slot.
              </p>
              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-mono font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Open WhatsApp to Confirm Immediately</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-black text-zinc-300 mb-1 font-mono uppercase tracking-wider">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Vikram Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-red-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-zinc-300 mb-1 font-mono uppercase tracking-wider">
                  Training Experience
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  aria-label="Training Experience"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-red-500 cursor-pointer font-medium"
                >
                  <option value="Beginner (< 1 year)">Beginner (&lt; 1 year in gym)</option>
                  <option value="Intermediate (1-3 years)">Intermediate (1-3 years of consistent lifting)</option>
                  <option value="Advanced (3+ years)">Advanced (3+ years of intense training)</option>
                  <option value="Competitive Athlete">Competitive Athlete / Powerlifter / Bodybuilder</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-zinc-300 mb-1 font-mono uppercase tracking-wider">
                  Primary Athletic Focus
                </label>
                <select
                  value={focusArea}
                  onChange={(e) => setFocusArea(e.target.value)}
                  aria-label="Primary Athletic Focus"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-red-500 cursor-pointer font-medium"
                >
                  <option value="Supplement Stack & Diet Optimization">Supplement Stack Audit & Zero-Filler Protocol</option>
                  <option value="Lean Muscle Hypertrophy">Lean Muscle Hypertrophy & Strength Progression</option>
                  <option value="Fat Loss & Conditioning">Rapid Fat Loss & Athletic Conditioning</option>
                  <option value="Full Personal Training Overhaul">Full 1-on-1 Personal Training Transformation</option>
                </select>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-red-950/60 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Session with Mukul Chaudhary</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-emerald-950/60 border border-zinc-800 hover:border-emerald-500/50 text-emerald-400 font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400" />
                  <span>Or Schedule Directly on WhatsApp</span>
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
