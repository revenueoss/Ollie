import React, { useState } from 'react';
import { PhoneCall, Navigation, History, Star, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface EngineItem {
  id: string;
  step: string;
  name: string;
  summary: string;
  details: string;
  deliverable: string;
  safeguard: string;
}

const ENGINES: EngineItem[] = [
  {
    id: 'voice-triage',
    step: 'Phase 01',
    name: '2nd Shift Voice Answering & Triage',
    summary: 'Answers evening, weekend and holiday calls in 2 rings with natural speech and emergency triage.',
    details: 'A custom-calibrated voice agent greets every after-hours caller, diagnoses trade urgency (e.g. active water leak, no-heat condition, or commercial refrigeration trip), and collects customer address and equipment details before they hang up.',
    deliverable: '100% 2nd shift call pickup rate with zero voicemail drop-off.',
    safeguard: 'High-value commercial RFPs and customer escalations are patched immediately to your designated on-call mobile phone.'
  },
  {
    id: 'dispatch-routing',
    step: 'Phase 02',
    name: 'On-Call Crew Dispatch & Calendar Sync',
    summary: 'Schedules directly into your CRM within strict fleet capacity and drive-time buffers.',
    details: 'Ollie checks on-call technician schedules in ServiceTitan, Jobber, or Housecall Pro. It verifies geographical zones, calculates travel time so your vans do not zig-zag across town, and books the confirmed job directly to the designated on-call technician.',
    deliverable: 'Zero double-bookings with automated drive buffers between zip codes.',
    safeguard: 'Ollie respects strict capacity caps—it will never overbook your technicians beyond safety limits.'
  },
  {
    id: 'quote-recovery',
    step: 'Phase 03',
    name: '3-Touch Proposal Follow-Up Sequence',
    summary: 'Recaptures up to 35% of sent estimates that would otherwise expire from customer inertia.',
    details: 'When an estimate is sent, Ollie initiates a polite, 3-touch follow-up over 7 days via SMS and email. Touch 1 confirms receipt and answers warranty questions; Touch 2 offers financing options; Touch 3 checks if the project was postponed.',
    deliverable: '+28% closed proposal rate from previously cold or unreturned estimates.',
    safeguard: 'Strictly complies with TCPA communication rules. Courteous, professional, and never spammy.'
  },
  {
    id: 'reviews-reactivation',
    step: 'Phase 04',
    name: 'Compliant Reviews & Seasonal Reactivation',
    summary: 'Builds Google review velocity on paid invoices and fills slow shoulder months.',
    details: 'Triggers an automated review request upon final invoice payment across all completed jobs. In spring and fall, launches consent-based seasonal tune-up campaigns to past customers (A/C checkups, furnace safety flushes).',
    deliverable: '4.2x monthly increase in verified Google reviews without manual technician effort.',
    safeguard: '100% compliant with FTC endorsement rules. We never participate in illegal review-gating.'
  }
];

export const SixEnginesSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const currentEngine = ENGINES[selectedIdx];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 xl:px-12 w-full max-w-[1840px] mx-auto border-t border-slate-200 scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto mb-14 sm:mb-18">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-500 mb-3">
          <span>2nd Shift Architecture</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>How Ollie Operates Behind the Scenes</span>
        </div>

        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4"
          style={{ textWrap: 'balance' }}
        >
          An autonomous 2nd shift running quietly behind your trade fleet
        </h2>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Ollie is not software you have to manage or configure daily. Our operations team connects your calendar, trains the voice models, and runs your after-hours dispatch pipeline.
        </p>
      </div>

      {/* Interactive Phase Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {ENGINES.map((item, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedIdx(idx)}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white border-slate-900 shadow-md ring-1 ring-slate-900'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
              }`}
            >
              <div className="text-xs font-semibold text-slate-400 mb-1">
                {item.step}
              </div>
              <div className={`font-bold text-sm ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                {item.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Phase Detail Showcase Card */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider block mb-1">
                {currentEngine.step}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {currentEngine.name}
              </h3>
            </div>

            <p className="text-base sm:text-lg font-medium text-slate-800 leading-snug">
              &quot;{currentEngine.summary}&quot;
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {currentEngine.details}
            </p>

            {/* Safeguard & Boundary Note */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block mb-0.5 font-semibold">Operational Guardrail:</strong>
                {currentEngine.safeguard}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                Documented Outcome
              </span>
              <div className="p-4 bg-white rounded-xl border border-slate-200 text-sm font-semibold text-slate-900">
                ✓ {currentEngine.deliverable}
              </div>
            </div>

            <div className="text-xs text-slate-500 pt-4 border-t border-slate-200">
              Integrated directly into ServiceTitan, Housecall Pro, Jobber, and QuickBooks.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
