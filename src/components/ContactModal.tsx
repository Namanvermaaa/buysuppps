import React, { useState } from 'react';
import { X, Send, CheckCircle2, Instagram, ArrowUpRight, Flame } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, WHATSAPP_URL } from '../constants/assets';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'purity-coa',
    message: ''
  });

  if (!isOpen) return null;

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
              <Flame className="w-3.5 h-3.5 text-red-500" />
              <span>BuySupps by Mukul Chaudhary</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
              Direct Contact & Consultation
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-medium">
              Have questions regarding raw component assays, sports nutrition science, or direct athlete supplies? Connect via WhatsApp for immediate response.
            </p>
          </div>

          {/* Quick Direct WhatsApp Banner (No phone number displayed) */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-zinc-950 border border-emerald-500/50 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                <WhatsAppIcon className="w-4 h-4 fill-emerald-400" />
              </div>
              <div>
                <span className="text-xs font-mono font-black text-white block">WhatsApp Channel</span>
                <span className="text-[11px] font-mono text-emerald-300 font-bold">Fastest Response from Founder</span>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-wider inline-flex items-center gap-1 transition-all"
            >
              <span>Chat Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Instagram link */}
          <div className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-red-500" />
              <span className="text-xs text-zinc-300 font-mono font-bold">Instagram DM:</span>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-black text-red-400 hover:text-white inline-flex items-center gap-1 font-mono transition-colors"
            >
              <span>{INSTAGRAM_HANDLE}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/40 text-red-400 flex items-center justify-center mx-auto shadow-lg shadow-red-950/40">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-black text-white font-display uppercase">Inquiry Received</h4>
              <p className="text-xs text-zinc-300 max-w-xs mx-auto font-medium">
                Thank you, {formData.name}. Mukul Chaudhary and the team have logged your inquiry and will reply directly to {formData.email}.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono font-black uppercase rounded-xl transition-colors border border-zinc-800 cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-black text-zinc-300 mb-1 font-mono uppercase tracking-wider">
                  Athlete Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Vikram Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-red-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-zinc-300 mb-1 font-mono uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="vikram@athlete.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-red-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-zinc-300 mb-1 font-mono uppercase tracking-wider">
                  Inquiry Topic
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  aria-label="Inquiry Topic"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-red-500 cursor-pointer font-medium"
                >
                  <option value="purity-coa">Third-Party Analytical Lab Assay Report</option>
                  <option value="components">Component Science & Physiological Synergy</option>
                  <option value="gym-bulk">Gym / Athletic Facility Direct Supply</option>
                  <option value="other">General Inquiry for Mukul Chaudhary</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-zinc-300 mb-1 font-mono uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your question regarding components or training science..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-red-500 resize-none font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-red-950/60 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit to Mukul Chaudhary</span>
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
