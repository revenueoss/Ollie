import React, { useState } from 'react';
import { ArrowRight, Check, PhoneCall, Shield, Sparkles, Clock, Truck, ChevronRight } from 'lucide-react';

interface ForemanHeroProps {
  onRequestAudit: () => void;
}

export const ForemanHero: React.FC<ForemanHeroProps> = ({ onRequestAudit }) => {
  const [activeTab, setActiveTab] = useState<'emergency' | 'weekend' | 'quote'>('emergency');

  return (
    <section className="relative pt-12 sm:pt-20 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-amber-500/[0.04] blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Hero Category Kicker */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-100/80 px-3.5 py-1.5 rounded-full border border-slate-200/60">
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          <span>The Autonomous 2nd Shift for US Trade Fleets</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-500 font-normal">Plumbing, HVAC &amp; Electrical</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="text-center max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
          When your office closes at 5 PM,{' '}
          <span className="text-amber-600">Ollie clocks in.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
          Never lose an after-hours emergency or field a midnight pipe burst from the dinner table again. Ollie answers in 2 rings, dispatches your on-call crew, and collects payment before morning.
        </p>

        {/* Primary Call to Action Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8">
          <button
            onClick={onRequestAudit}
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Audit Your After-Hours Revenue</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>

          <a
            href="#where-we-start"
            className="w-full sm:w-auto px-6 py-3.5 border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <span>See Where We Start</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* Key Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-slate-500 mt-7">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Answers 100% of calls in &lt; 2 rings</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Zero apps for technicians to learn</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>60-Day Leak-Capture Guarantee</span>
          </span>
        </div>
      </div>

      {/* Hero Visual: Interactive 2nd Shift Simulation Preview */}
      <div className="mt-14 max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
        {/* Scenario Switcher Header */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-slate-800">Live 2nd Shift Simulation:</span>
          </div>

          <div className="flex items-center gap-1 bg-slate-200/70 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('emergency')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'emergency' 
                  ? 'bg-white text-slate-900 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              11:42 PM Burst Pipe
            </button>
            <button
              onClick={() => setActiveTab('weekend')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'weekend' 
                  ? 'bg-white text-slate-900 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Saturday AC Outage
            </button>
            <button
              onClick={() => setActiveTab('quote')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'quote' 
                  ? 'bg-white text-slate-900 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cold Quote Revival
            </button>
          </div>
        </div>

        {/* Dynamic Scenario Preview Body */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white">
          {/* Left Side: The Inbound Customer Call */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3">
              <span className="font-semibold text-slate-900">Inbound Customer Experience</span>
              <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                Answered in 1.4s · Ring 1
              </span>
            </div>

            {activeTab === 'emergency' && (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <div className="font-semibold text-slate-900">Sarah J. (Elm Ridge Terrace)</div>
                  <p className="text-slate-600 italic">
                    "My basement pipe just burst and water is spraying everywhere! Can someone please help?!"
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs space-y-2">
                  <div className="font-semibold text-amber-900 flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                    <span>Ollie Voice Response</span>
                  </div>
                  <p className="text-amber-950">
                    "Sarah, take a deep breath. We have technician Carlos 14 minutes away. First, let's shut off the main valve right next to your water heater. Turn the yellow handle 90 degrees."
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'weekend' && (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <div className="font-semibold text-slate-900">Marcus V. (Bistro 94 Manager)</div>
                  <p className="text-slate-600 italic">
                    "Our walk-in commercial freezer temperature is rising past 48°. We have $12,000 of meat inside."
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs space-y-2">
                  <div className="font-semibold text-amber-900 flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                    <span>Ollie Voice Response</span>
                  </div>
                  <p className="text-amber-950">
                    "Marcus, I have this flagged as P1 Urgent. On-call refrigeration lead Dave Miller has been notified and is rolling in Truck 04 with universal capacitors."
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'quote' && (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <div className="font-semibold text-slate-900">Unanswered $6,400 Furnace Estimate</div>
                  <p className="text-slate-600 italic">
                    Quote sent 5 days ago. Customer went silent; competitor estimate was pending.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs space-y-2">
                  <div className="font-semibold text-amber-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Ollie Automated Follow-Up</span>
                  </div>
                  <p className="text-amber-950">
                    Friendly 6:15 PM SMS answered homeowner's warranty question and offered 0% 12-month financing. Customer approved quote directly from phone.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Side: Contractor Command & Financial Resolution */}
          <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-3">
              <span className="font-semibold text-slate-300">Contractor Outcome</span>
              <span className="text-amber-400 font-mono text-[11px]">Synced to CRM</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                <span className="text-slate-400">Work Order Created:</span>
                <span className="text-white font-mono font-semibold">ServiceTitan #8912</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                <span className="text-slate-400">On-Call Tech Notified:</span>
                <span className="text-emerald-400 font-semibold">Carlos R. (14m ETA)</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                <span className="text-slate-400">Job Value Captured:</span>
                <span className="text-amber-400 font-mono font-bold">$850.00 Settled</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-slate-400">Business Owner Woken Up:</span>
                <span className="text-emerald-400 font-semibold">0 Times (Slept through)</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-800/70 text-slate-300 text-[11px] leading-relaxed">
              💡 While you slept, Ollie turned a panicked emergency into a paid invoice, satisfied customer, and morning Google 5-Star review.
            </div>
          </div>
        </div>

        {/* Integration Badges Footer */}
        <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <span className="font-medium">Direct live sync with your existing dispatch stack:</span>
          <div className="flex items-center gap-6 font-semibold text-slate-700">
            <span>ServiceTitan</span>
            <span>Housecall Pro</span>
            <span>Jobber</span>
            <span>FieldEdge</span>
          </div>
        </div>
      </div>
    </section>
  );
};
