import React, { useState } from 'react';
import { ArrowRight, Check, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

interface PricingAndFAQProps {
  onRequestAudit: () => void;
}

const FAQS = [
  {
    question: "How long does onboarding take?",
    answer: "Onboarding takes less than 15 minutes. You forward your after-hours line to Ollie, connect your CRM (ServiceTitan, Housecall Pro, Jobber, FieldEdge, etc.), and confirm your on-call technician rules. Your 2nd shift can go live the exact same night."
  },
  {
    question: "Do our technicians have to learn or download a new app?",
    answer: "No. Your technicians don't have to download anything. When an emergency call is qualified, Ollie notifies them via standard SMS with turn-by-turn directions, gate codes, and job details—exactly the way they are already used to."
  },
  {
    question: "What if an emergency caller needs to talk to the business owner directly?",
    answer: "Ollie has strict escalation protocols that you define. If an issue is flagged as a high-liability situation or if a VIP commercial account calls, Ollie places them on a courteous hold and instantly bridges the call to your private line with a 2-second audio summary."
  },
  {
    question: "What happens if a call is not a true emergency?",
    answer: "Non-emergency calls (such as routine maintenance inquiries or non-urgent estimates) are calmly scheduled for 8:00 AM the next business day directly in your calendar, preserving your technician's rest and preventing unnecessary overtime pay."
  },
  {
    question: "How does the 60-Day Leak-Capture Guarantee work?",
    answer: "If Ollie does not document and attribute at least 5x your monthly subscription in verified booked emergency revenue during your first 60 days, we issue a 100% unconditional refund. You take on zero financial risk."
  }
];

export const PricingAndFAQ: React.FC<PricingAndFAQProps> = ({ onRequestAudit }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100 scroll-mt-20">
      
      {/* Category Kicker */}
      <div className="text-center mb-4">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Straightforward Pricing
        </span>
      </div>

      {/* Main Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          An investment that covers itself on your first saved call.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          One emergency water leak or HVAC breakdown pays for months of Ollie. Transparent pricing with zero long-term contracts.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        
        {/* Tier 1: Small Fleet */}
        <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 shadow-xs flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Emerging Fleet
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              1–3 Trucks
            </h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-slate-900 font-mono">$497</span>
              <span className="text-xs text-slate-500 font-medium">/ month</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Perfect for owner-operators ready to step away from the late-night phone and protect their evenings.
            </p>

            <div className="space-y-3 pt-6 border-t border-slate-100 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Unlimited 2nd shift &amp; weekend call handling</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>1 on-call technician rotation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Standard CRM Work Order sync</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Automated Google Review SMS invites</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <button
              onClick={onRequestAudit}
              className="w-full py-3 px-4 rounded-xl border border-slate-300 hover:border-slate-900 text-slate-900 font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Start Free Audit
            </button>
          </div>
        </div>

        {/* Tier 2: Popular Established Fleet (Featured) */}
        <div className="p-8 rounded-2xl border-2 border-slate-900 bg-slate-900 text-white shadow-xl flex flex-col justify-between relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
            Most Popular Fleet Choice
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              Established Contractor
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              4–10 Trucks
            </h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-white font-mono">$897</span>
              <span className="text-xs text-slate-400 font-medium">/ month</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              For busy service businesses with multiple on-call crews, rotating weekends, and high-volume dispatch.
            </p>

            <div className="space-y-3 pt-6 border-t border-slate-800 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Full 24/7/365 holiday &amp; emergency coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Multi-tech rotation &amp; zone routing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>ServiceTitan, Jobber &amp; Housecall Pro deep sync</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Digital 3-tier quoting &amp; instant Apple Pay</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>60-Day 5x ROI Guarantee</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <button
              onClick={onRequestAudit}
              className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Deploy on Your 2nd Shift</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tier 3: Enterprise / Multi-Location */}
        <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 shadow-xs flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Commercial &amp; Multi-Branch
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              10+ Trucks
            </h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-slate-900 font-mono">$1,497</span>
              <span className="text-xs text-slate-500 font-medium">/ month</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              For established regional operators managing multiple dispatch hubs, commercial accounts, and heavy truck volume.
            </p>

            <div className="space-y-3 pt-6 border-t border-slate-100 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated account engineer &amp; custom SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Commercial contract escalation trees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Custom ERP &amp; telephony SIP integration</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Executive morning briefing with financial attribution</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <button
              onClick={onRequestAudit}
              className="w-full py-3 px-4 rounded-xl border border-slate-300 hover:border-slate-900 text-slate-900 font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Talk to Engineering
            </button>
          </div>
        </div>

      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-slate-900">
            Frequently Asked Questions
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Everything you need to know about setting up and running Ollie.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-slate-900 hover:text-amber-700 transition-colors"
              >
                <span>{faq.question}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
