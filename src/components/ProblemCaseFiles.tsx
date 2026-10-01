import React, { useState } from 'react';
import { PhoneCall, CalendarCheck2, History, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Navigation } from 'lucide-react';

export const ProblemCaseFiles: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'voice' | 'dispatch' | 'recovery'>('voice');

  return (
    <section id="capabilities" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 xl:px-12 w-full max-w-[1840px] mx-auto border-t border-slate-200 scroll-mt-20">
      {/* Section Header (Anti-slop: clean editorial title, zero pill badges) */}
      <div className="text-center max-w-5xl mx-auto mb-14 sm:mb-18">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-500 mb-3">
          <span>2nd Shift Capabilities</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Engineered for Plumbing, HVAC &amp; Electrical</span>
        </div>

        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4"
          style={{ textWrap: 'balance' }}
        >
          Built for how trade businesses actually win and keep jobs on the 2nd shift
        </h2>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Established trade contractors don&apos;t need another complicated software dashboard. They need a dependable 2nd shift that eliminates voicemail, books calendar slots, and handles after-hours chaos.
        </p>
      </div>

      {/* Asymmetric Bento Grid of 3 Core Capabilities */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
        {/* Bento 1: Large Featured Card (Col span 7) - 24/7 Voice AI Answering */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-slate-300 transition-all">
          <div className="p-8 sm:p-10">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold text-amber-700 tracking-wider uppercase">
                01. 2nd Shift Call Intercept
              </span>
              <span className="text-xs text-slate-500 font-medium">
                &lt; 2-second connection rate
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Every evening, night &amp; holiday call answered live in 2 rings
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              When an emergency bursts above a customer’s ceiling at 8:45 PM, 84% hire whoever answers first. Ollie’s voice agent greets the caller immediately, provides emergency shutoff guidance, diagnoses urgency, and locks the appointment for your on-call crew before they dial the next contractor.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Zero voicemail or phone tree loops</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Urgent escalation routing to owner mobile</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Automatic SMS text fallback</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Custom dispatch fee collection</span>
              </div>
            </div>
          </div>

          {/* Integrated Editorial Photo Container */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100 mt-2">
            <img 
              src="/src/assets/images/tech_ipad_dispatch_1790687683270.jpg" 
              alt="Technician reviewing work order details on iPad tablet facing worker" 
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-6 right-6 text-white text-xs font-medium flex items-center justify-between">
              <span>Technician receives work order details &amp; customer notes via SMS</span>
              <span className="text-amber-300 font-semibold">100% CRM Synced</span>
            </div>
          </div>
        </div>

        {/* Bento 2: Intelligent Dispatch & Route Balancing (Col span 5) */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-slate-300 transition-all">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold text-blue-700 tracking-wider uppercase">
                02. Autonomous Dispatch
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Live Calendar Sync
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              On-call route balancing with smart shift contingencies
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Ollie respects your real fleet capacity. It checks live on-call rotations, adds drive-time buffers between zip codes so your vans don&apos;t zig-zag across town, and automatically reroutes jobs if an on-call tech is tied up on an extended service call.
            </p>

            <div className="space-y-2.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Direct calendar sync with ServiceTitan, Jobber &amp; Housecall</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Geographic zoning ensures trucks stay in profitable territories</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Zero double bookings or over-capacity stress</span>
              </div>
            </div>
          </div>

          <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100 mt-2">
            <img 
              src="/src/assets/images/dispatcher_operations_desk_1790596113772.jpg" 
              alt="Trade company operations room showing dispatch routes" 
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-6 right-6 text-white text-xs font-medium">
              <span>Automatic drive-time buffers prevent technician exhaustion</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bento 3: Full Width Quote Recovery & Review Engine */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch group hover:border-slate-300 transition-all">
        <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold text-emerald-700 tracking-wider uppercase">
                03. Dormant Revenue &amp; Quote Recovery
              </span>
              <span className="text-xs text-slate-500 font-medium">
                +28% Quote Close Rate
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Automated 3-touch quote follow-up that revives forgotten estimates
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Contractors regularly lose $40,000+ per year because quotes sit in homeowner inboxes with zero follow-up. Ollie initiates a courteous, 3-touch SMS and email cadence that answers warranty questions, offers financing, and recovers cold proposals on autopilot.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2 border-t border-slate-100 mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Strict TCPA-compliant messaging schedules</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Automated review invitations on 100% of paid invoices</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Seasonal tune-up campaigns fill slow shoulder months</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>100% FTC compliant (no illegal review-gating)</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Recoverable revenue without paying a cent more in advertising.
            </span>
            <a 
              href="#calculator" 
              className="text-xs font-semibold text-slate-900 hover:text-amber-700 flex items-center gap-1 transition-colors"
            >
              <span>Calculate Your Recovery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-slate-100 overflow-hidden">
          <img 
            src="/src/assets/images/customer_technician_trust_1790596123701.jpg" 
            alt="Licensed technician consulting with homeowner on options" 
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-medium">
            <span className="font-semibold block mb-0.5 text-amber-300">Customer Lifetime Retention</span>
            <span>Turns one-time emergency callers into 5-star reviews and seasonal maintenance contracts.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
