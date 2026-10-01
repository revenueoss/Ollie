import React from 'react';
import { PhoneCall, CalendarCheck2, History, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Navigation, CreditCard, Star, Wrench, Clock } from 'lucide-react';

export const LandingFeatures: React.FC = () => {
  const FEATURES = [
    {
      icon: PhoneCall,
      number: '01',
      title: 'Emergency Voice Triage & Intake',
      highlight: 'Answered in 1.4s · Ring 1',
      description: 'When water is flooding a basement at midnight, 84% of homeowners hire whoever answers first. Ollie answers in 2 rings with human empathy, provides calm shutoff guidance, and locks the job into your calendar before they call your competitor.',
      points: [
        'Zero robotic phone trees or voicemail black holes',
        'Guides homeowners through emergency shutoffs',
        'Pre-screens callers for genuine emergency vs. next-day booking'
      ]
    },
    {
      icon: Navigation,
      number: '02',
      title: 'Autonomous On-Call Dispatch & CRM Sync',
      highlight: 'Live Telemetry & Parts Pre-Check',
      description: 'While you sleep, Ollie checks your on-call schedule, creates the Work Order directly inside ServiceTitan, Housecall Pro, or Jobber, and pings your on-call technician with address, gate code, and truck parts verification.',
      points: [
        'Direct 2-way sync with ServiceTitan, Housecall Pro & Jobber',
        'SMS turn-by-turn routing with zero new apps for techs to learn',
        'Universal parts pre-check reduces trip friction'
      ]
    },
    {
      icon: CreditCard,
      number: '03',
      title: 'Protected Margins & Digital Quoting',
      highlight: '62%+ Target Margin Enforced',
      description: 'Technicians present clear Good / Better / Best digital repair options directly to the homeowner’s smartphone. Pre-authorized digital signatures protect you from scope creep, while locked pricing menus protect your gross margin.',
      points: [
        'Transparent 3-tier repair packages on customer’s phone',
        'Enforces after-hours overtime surcharges automatically',
        'Digital signature and photo inspection on file forever'
      ]
    },
    {
      icon: Star,
      number: '04',
      title: 'Same-Night Settlement & 5-Star Reviews',
      highlight: '0-Day Accounts Receivable Aging',
      description: 'Homeowners pay via 1-tap Apple Pay or credit card before the technician drives away. The next morning at 8:30 AM, an automated polite text sends happy customers straight to your Google Business Profile for 5-star ratings.',
      points: [
        '100% on-site digital payment collection before departure',
        'Overnight direct deposit into your merchant bank account',
        'Automated review cadence driving Google Maps 3-Pack rankings'
      ]
    }
  ];

  return (
    <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100 scroll-mt-20">
      
      {/* Editorial Category Kicker */}
      <div className="text-center mb-4">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Complete Operational Suite
        </span>
      </div>

      {/* Main Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Everything your 2nd shift needs to capture revenue autonomously.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Designed specifically for how US plumbing, HVAC, and electrical contractors operate. Dependable, quiet, and engineered to capture high-margin revenue.
        </p>
      </div>

      {/* 4 Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURES.map((feat) => {
          const IconComponent = feat.icon;
          return (
            <div 
              key={feat.number}
              className="p-8 sm:p-10 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-xs">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {feat.number}
                  </span>
                </div>

                {/* Title & Micro Highlight */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  {feat.title}
                </h3>
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 inline-block mb-4">
                  {feat.highlight}
                </span>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {feat.description}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  {feat.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
