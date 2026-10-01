import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, PhoneForwarded, Settings, ShieldCheck, Sparkles, Star, Truck, UserCheck, Wrench, Zap } from 'lucide-react';

interface WhereWeStartAndNextProps {
  onRequestAudit: () => void;
}

export const WhereWeStartAndNext: React.FC<WhereWeStartAndNextProps> = ({ onRequestAudit }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const PHASES = [
    {
      number: '01',
      badge: 'Step 1: Where We Start',
      title: '15-Minute Plug & Play Setup',
      subtitle: 'No new software for your techs. No operational disruption.',
      details: [
        {
          title: 'Forward Your After-Hours Line',
          description: 'Simply forward your existing main business phone number to Ollie whenever your office closes (5 PM, weekends, or holidays).'
        },
        {
          title: 'Connect Your Existing CRM',
          description: 'One-click integration with ServiceTitan, Housecall Pro, Jobber, FieldEdge, or custom dispatch spreadsheets.'
        },
        {
          title: 'Define Your On-Call Rules',
          description: 'Set your emergency dispatch criteria, on-call technician rotations, and after-hours pricing menus.'
        }
      ],
      deliverable: 'Your 2nd shift goes live the exact same evening.',
      tag: 'Day 1: Setup'
    },
    {
      number: '02',
      badge: 'Step 2: How The Night Operates',
      title: 'Autonomous Midnight Execution',
      subtitle: 'Every call answered in 2 rings. Panicked callers calmed & locked.',
      details: [
        {
          title: 'Instant Triage in 1.4 Seconds',
          description: 'Ollie answers with warmth and guides panicked homeowners through safety shutoffs while securing their emergency booking.'
        },
        {
          title: 'On-Call Tech SMS Dispatch',
          description: 'Auto-generates the Work Order in your CRM and pings your on-call technician with address, parts list, and gate code.'
        },
        {
          title: 'Transparent Digital Quoting',
          description: 'Technician presents 3-tiered Good/Better/Best options authorized by customer signature on phone with locked margins.'
        }
      ],
      deliverable: 'Owner sleeps through the night. Zero missed jobs.',
      tag: 'Night 1: Live Call'
    },
    {
      number: '03',
      badge: 'Step 3: Where To Next',
      title: 'Morning Cash, Reviews & Growth',
      subtitle: 'Zero accounts receivable. Automated Google 5-star reputation.',
      details: [
        {
          title: 'Instant Overnight Payment',
          description: 'Homeowner pays via Apple Pay or card on-site before tech leaves. Cash deposits directly into your merchant account.'
        },
        {
          title: '8:30 AM Google Review Invites',
          description: 'Automated polite follow-up deep-links satisfied homeowners directly to your Google Business Profile for 5-star ratings.'
        },
        {
          title: 'Morning Executive Briefing',
          description: 'Receive a concise 7:00 AM email summarizing revenue captured, technician hours, and auto-scheduled tune-ups.'
        }
      ],
      deliverable: 'Compounds into #1 Google Maps local ranking & zero overdue AR.',
      tag: 'Day 2+: Results'
    }
  ];

  return (
    <section id="where-we-start" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100 scroll-mt-20">
      
      {/* Category Kicker */}
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <Settings className="w-3.5 h-3.5 text-amber-600" />
          <span>Clear Operational Roadmap</span>
        </div>
      </div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Where we start — and where we go next.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          You don’t need to overhaul your business or force your crew to download complicated apps. Here is the straightforward 3-stage journey.
        </p>
      </div>

      {/* 3-Stage Horizontal Cards (Unbusy & Airy) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {PHASES.map((phase, idx) => (
          <div 
            key={phase.number}
            className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header Index */}
              <div className="flex items-center justify-between mb-6">
                <span className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 font-mono font-bold text-sm flex items-center justify-center">
                  {phase.number}
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  {phase.tag}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {phase.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                {phase.subtitle}
              </p>

              {/* Details List */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                {phase.details.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-5">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Deliverable Note */}
            <div className="mt-8 pt-4 border-t border-slate-100">
              <div className="text-xs font-semibold text-amber-900 bg-amber-50/80 p-3 rounded-xl border border-amber-200/60">
                <span className="font-bold">Key Outcome:</span> {phase.deliverable}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Onboarding Pathway Timeline Bar */}
      <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 block mb-1">
              Zero Risk Onboarding
            </span>
            <h3 className="text-2xl font-bold text-white">
              Ready to see where your after-hours revenue leaks?
            </h3>
          </div>
          <button
            onClick={onRequestAudit}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap self-start md:self-auto"
          >
            <span>Start With A Free 15-Min Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Step Timeline Walkthrough */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="space-y-2">
            <span className="text-amber-400 font-mono font-bold text-sm block">01 · Free Audit Call</span>
            <p className="text-slate-300 leading-relaxed">
              We analyze your recent call logs and identify exactly how much after-hours emergency revenue was missed.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-amber-400 font-mono font-bold text-sm block">02 · Custom Rules Setup</span>
            <p className="text-slate-300 leading-relaxed">
              We configure your on-call dispatch protocols, pricing tiers, and technician notification schedules in 15 minutes.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-amber-400 font-mono font-bold text-sm block">03 · 60-Day Guaranteed Pilot</span>
            <p className="text-slate-300 leading-relaxed">
              Ollie takes over your 2nd shift. If we don’t capture at least 5x your investment in verified booked work, you pay nothing.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};
