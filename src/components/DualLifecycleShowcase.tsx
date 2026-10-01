import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  PhoneCall, 
  MapPin, 
  CreditCard, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Smartphone, 
  Truck, 
  DollarSign, 
  Zap,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export interface LifecycleStage {
  id: number;
  time: string;
  title: string;
  summary: string;
  providerSide: {
    headline: string;
    details: string;
    actionBadge: string;
    keyMetric: string;
    status: string;
  };
  clientSide: {
    headline: string;
    details: string;
    smsText: string;
    peaceOfMind: string;
    status: string;
  };
  revenueOutcome: string;
}

const STAGES: LifecycleStage[] = [
  {
    id: 1,
    time: '11:42 PM · Sunday',
    title: 'Emergency Inbound & Triage',
    summary: 'Midnight water leak answered in 1.4 seconds with calm guidance.',
    providerSide: {
      headline: 'Instant Lead Capture & CRM Work Order',
      details: 'Voice AI qualifies the incident as P1 Urgent, checks the on-call schedule, and auto-generates the Work Order inside ServiceTitan without human delay.',
      actionBadge: 'WO #8912 Created · P1 Urgent',
      keyMetric: '1.4s Answer Latency',
      status: 'On-Call Tech Pinged'
    },
    clientSide: {
      headline: 'Immediate Calm & Shutoff Advice',
      details: 'Homeowner Sarah is guided through turning the main shutoff valve clockwise 90 degrees while securing her emergency repair slot.',
      smsText: 'Hi Sarah, this is Ollie confirming your emergency service for 482 Elm Ridge. Tech Carlos has been dispatched.',
      peaceOfMind: 'Zero voicemail panic. Immediate help on the way.',
      status: 'Emergency Confirmed'
    },
    revenueOutcome: '$850.00 Ticket Locked'
  },
  {
    id: 2,
    time: '11:51 PM · Sunday',
    title: 'Intelligent Routing & Trust',
    summary: 'Technician rolls with turn-by-turn routing and verified parts.',
    providerSide: {
      headline: 'Route Optimization & Truck Inventory Check',
      details: 'The system maps the quickest route avoiding roadwork and verifies universal press fittings are stocked on Truck 02 before arrival.',
      actionBadge: 'Truck 02 En Route · GPS Live',
      keyMetric: '16 Min Estimated Arrival',
      status: 'Parts Pre-Verified'
    },
    clientSide: {
      headline: 'Live Moving Map & Verified Tech ID',
      details: 'Sarah receives an SMS tracking link showing Carlos’s verified photo, background credentials, and moving GPS truck location.',
      smsText: 'Carlos R. is en route in Truck 02. Verified Tech ID #TR-409 · Live ETA: 16 mins.',
      peaceOfMind: 'Knows exactly who is arriving at her home at midnight.',
      status: 'Live GPS Broadcast'
    },
    revenueOutcome: 'Zero Trip Delay'
  },
  {
    id: 3,
    time: '12:15 AM · Monday',
    title: 'Multi-Option Digital Quoting',
    summary: 'Transparent 3-tier repair packages signed on phone.',
    providerSide: {
      headline: 'Protected Gross Margin & Signed Authorization',
      details: 'The tiered pricing engine enforces minimum 62% gross profit and after-hours overtime rates. Pre-authorized signature prevents billing disputes.',
      actionBadge: 'Target Margin: 64.2% Enforced',
      keyMetric: '+$340 Average Ticket Boost',
      status: 'Scope Authorized'
    },
    clientSide: {
      headline: 'Clear Good / Better / Best Digital Menu',
      details: 'Carlos presents 3 plain-English repair options with clear warranties. Sarah selects Full Valve Replacement ($850) and taps to sign.',
      smsText: 'Review your options: 1) Emergency Patch ($450) · 2) Full Valve Replacement ($850) · 3) Whole-Home Relief ($1,650).',
      peaceOfMind: 'Zero surprise pricing or aggressive upselling.',
      status: 'Digitally Approved'
    },
    revenueOutcome: 'Zero Scope Creep'
  },
  {
    id: 4,
    time: '1:22 AM · Monday',
    title: 'Precision Work & Photo Proof',
    summary: 'Ruptured valve replaced with pressure test verified.',
    providerSide: {
      headline: 'Zero Callback Audit & Inventory Depletion',
      details: 'Checklist audit verifies all 6 diagnostic items are completed and pressure gauge confirms 65 PSI before Carlos can close the job.',
      actionBadge: 'QA Audit 6/6 Passed · 65 PSI',
      keyMetric: '< 1.1% Callback Rate',
      status: 'Quality Shield Active'
    },
    clientSide: {
      headline: 'Time-Stamped Before & After Inspection',
      details: 'Sarah receives high-resolution photos of the repaired valve, clean work area, and confirmed pressure test in her customer portal.',
      smsText: 'Work complete! 3 photos uploaded: 1) Ruptured pipe · 2) New brass valve · 3) 65 PSI test passed. Cleaned work area.',
      peaceOfMind: 'Complete proof that the work was done right.',
      status: 'Inspection Complete'
    },
    revenueOutcome: 'Liability Shielded'
  },
  {
    id: 5,
    time: '1:35 AM · Monday',
    title: 'Frictionless Tap-to-Pay',
    summary: 'Settled via Apple Pay before technician leaves driveway.',
    providerSide: {
      headline: 'Instant Cash Flow & Zero Receivables Aging',
      details: 'Payment deposits directly into the contractor’s merchant account. Work order marked paid in full in ServiceTitan. Zero invoices left unpaid for 60 days.',
      actionBadge: '$850.00 Deposited to Bank',
      keyMetric: '0 Days Sales Outstanding (DSO)',
      status: 'Paid in Full'
    },
    clientSide: {
      headline: '12-Second Apple Pay & Warranty Certificate',
      details: 'No clumsy card swiping. Sarah pays $850.00 in seconds from her smartphone, receiving an itemized PDF receipt and 1-year warranty badge.',
      smsText: 'Invoice #8912 ($850.00) settled via Apple Pay. Your 1-Year Workmanship Warranty certificate is saved in your vault.',
      peaceOfMind: 'Instant digital receipt and written warranty.',
      status: 'Payment Settled'
    },
    revenueOutcome: '100% On-Site Collection'
  },
  {
    id: 6,
    time: '8:30 AM · Monday',
    title: 'Automated 5-Star Reputation',
    summary: 'Next-morning follow-up drives Google Maps rankings.',
    providerSide: {
      headline: 'Google Maps 3-Pack Dominance & LTV Boost',
      details: 'Public 5-star review praising Carlos by name propels the contractor to #1 on Google Maps for local emergency plumbing. Sarah enrolled in VIP Maintenance Club.',
      actionBadge: 'Google Business Profile +5 Stars',
      keyMetric: '+$2,400 Projected LTV',
      status: 'VIP Customer Enrolled'
    },
    clientSide: {
      headline: 'Friendly Morning Check-In & 1-Tap Review',
      details: 'Sarah receives a warm text asking how her plumbing is holding up. One tap brings her directly to Google Reviews to leave 5 stars.',
      smsText: 'Good morning Sarah! Checking in from Tri-County: how is everything holding up? If Carlos took great care of you, tap here to rate us!',
      peaceOfMind: 'Contractor cares about long-term satisfaction.',
      status: '5-Star Review Posted'
    },
    revenueOutcome: '#1 Local Map Ranking'
  }
];

export const DualLifecycleShowcase: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const activeStage = STAGES[activeIdx];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveIdx((prev) => (prev + 1) % STAGES.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100 scroll-mt-20">
      
      {/* Category Kicker */}
      <div className="text-center mb-4">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Synchronized Service Lifecycle
        </span>
      </div>

      {/* Main Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          How the entire call runs on both sides of the glass.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          An emergency call isn't just answering a phone. It's a continuous chain of triage, dispatch, quoting, payment, and reputation. See how Ollie coordinates both your business and your customer.
        </p>
      </div>

      {/* Clean Timeline Stepper Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
        {/* Step Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          {STAGES.map((st, i) => (
            <button
              key={st.id}
              onClick={() => {
                setActiveIdx(i);
                setIsPlaying(false);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeIdx === i
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${
                activeIdx === i ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-200 text-slate-600'
              }`}>
                0{st.id}
              </span>
              <span>{st.title}</span>
            </button>
          ))}
        </div>

        {/* Autoplay Simulator Button */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer border ${
              isPlaying
                ? 'bg-amber-50 text-amber-900 border-amber-300'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-amber-600" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current text-slate-600" />
                <span>Simulate Flow</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setActiveIdx(0);
              setIsPlaying(false);
            }}
            className="p-2 text-slate-500 hover:text-slate-900 rounded-xl hover:bg-slate-100 border border-slate-200 transition-colors"
            title="Reset to Step 1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Dual-Column Showcase Card */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
        {/* Header Bar */}
        <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
              <span>STAGE 0{activeStage.id} OF 06</span>
              <span>·</span>
              <span className="text-slate-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {activeStage.time}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {activeStage.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {activeStage.summary}
            </p>
          </div>

          <div className="self-start sm:self-auto px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-emerald-400">
            {activeStage.revenueOutcome}
          </div>
        </div>

        {/* Dual Side-by-Side Perspectives */}
        <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Side: Contractor Operations */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-md border border-amber-200 flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-amber-700" />
                  <span>Contractor Operations</span>
                </span>
                <span className="text-xs font-mono text-slate-500 font-medium">
                  {activeStage.providerSide.status}
                </span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {activeStage.providerSide.headline}
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {activeStage.providerSide.details}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Telemetry Action:</span>
              <span className="font-semibold text-slate-900 font-mono">
                {activeStage.providerSide.actionBadge}
              </span>
            </div>
          </div>

          {/* Right Side: Customer Experience */}
          <div className="p-6 sm:p-8 rounded-2xl bg-blue-50/50 border border-blue-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100/80 px-2.5 py-1 rounded-md border border-blue-200 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-blue-700" />
                  <span>Customer Smartphone</span>
                </span>
                <span className="text-xs font-mono text-blue-700 font-medium">
                  {activeStage.clientSide.status}
                </span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {activeStage.clientSide.headline}
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {activeStage.clientSide.details}
              </p>

              {/* Customer SMS Text Bubble */}
              <div className="p-3.5 rounded-xl bg-white border border-blue-200/60 shadow-xs mb-4 text-xs font-sans text-slate-800 leading-relaxed">
                <span className="font-semibold text-slate-900 block mb-1 text-[11px]">
                  Incoming Text Message:
                </span>
                "{activeStage.clientSide.smsText}"
              </div>
            </div>

            <div className="pt-4 border-t border-blue-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Customer Sentiment:</span>
              <span className="font-semibold text-blue-800">
                {activeStage.clientSide.peaceOfMind}
              </span>
            </div>
          </div>

        </div>

        {/* Stepper Navigation Footer */}
        <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            Step {activeStage.id} of {STAGES.length}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setActiveIdx((prev) => (prev > 0 ? prev - 1 : STAGES.length - 1));
                setIsPlaying(false);
              }}
              className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 font-medium text-slate-700 cursor-pointer"
            >
              Previous
            </button>
            <button
              onClick={() => {
                setActiveIdx((prev) => (prev < STAGES.length - 1 ? prev + 1 : 0));
                setIsPlaying(false);
              }}
              className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium cursor-pointer flex items-center gap-1"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};
