import React from 'react';
import { Check, X, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export const TrustAndFitSection: React.FC = () => {
  return (
    <section id="trust" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 xl:px-12 w-full max-w-[1840px] mx-auto border-t border-slate-200 scroll-mt-20">
      {/* 1. What You Still Do (Clear Boundaries) */}
      <div className="mb-20">
        <div className="text-center max-w-5xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-500 mb-3">
            <span>Operational Integrity</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Uncompromising Boundaries</span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4" 
            style={{ textWrap: 'balance' }}
          >
            What you still do: the 5 things Ollie will never touch
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Any agency or software claiming to run your entire company while you sit on a beach is misleading you. Ollie manages your 2nd shift revenue machinery—answering, qualifying, scheduling, dispatching, and following up. Here is what remains strictly under your command:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
            <span className="text-xs font-semibold text-amber-700 tracking-wider uppercase block mb-1">
              01. Craftsmanship
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Doing the Actual Trade Work</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              You and your technicians diagnose, repair, replace, and warrant the trade work. We do not swing pipe wrenches, pull wire, or weld copper.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
            <span className="text-xs font-semibold text-amber-700 tracking-wider uppercase block mb-1">
              02. Capacity Control
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Setting Fleet Boundaries</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              You define how many calls each on-call technician can comfortably handle and what zip codes your vans serve. Ollie schedules strictly within your limits.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
            <span className="text-xs font-semibold text-amber-700 tracking-wider uppercase block mb-1">
              03. Field Documentation
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Job Site Photos</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Your techs snap before/after photos on job sites. Ollie transforms them into verified Google Business Profile updates and local social proof.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
            <span className="text-xs font-semibold text-amber-700 tracking-wider uppercase block mb-1">
              04. System Calibration
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Onboarding Configuration</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              You attend a 90-minute configuration interview and participate in live test call simulations before your 2nd shift goes live for customer traffic.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all md:col-span-2 lg:col-span-2">
            <span className="text-xs font-semibold text-amber-700 tracking-wider uppercase block mb-1">
              05. Rare Escalations
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Handling Bespoke Escalations</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If a multi-million-dollar commercial general contractor calls for a custom RFP, or an unresolved customer dispute arises, Ollie immediately flags and patches the call directly to your personal line with full audio transcript context.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Side-by-Side Comparison Table */}
      <div className="mb-20">
        <div className="text-center max-w-5xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-500 mb-3">
            <span>Market Comparison</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Why Traditional Alternatives Fail</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Ollie compares to common industry workarounds
          </h3>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-3xl bg-white shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs text-slate-700 font-semibold uppercase tracking-wider">
              <tr>
                <th className="p-4 sm:p-5">Capability / Operational Metric</th>
                <th className="p-4 sm:p-5 text-slate-500">Full-Time Receptionist</th>
                <th className="p-4 sm:p-5 text-slate-500">Marketing Agency</th>
                <th className="p-4 sm:p-5 text-slate-500">Software Alone (CRM)</th>
                <th className="p-4 sm:p-5 text-slate-900 font-bold bg-amber-50/70 border-l border-amber-200">Ollie Autonomous 2nd Shift</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900">24/7/365 Live Answering &amp; SMS</td>
                <td className="p-4 sm:p-5 text-red-600">No (8 AM–5 PM M-F only)</td>
                <td className="p-4 sm:p-5 text-red-600">No (Web clicks only)</td>
                <td className="p-4 sm:p-5 text-red-600">No (You must answer)</td>
                <td className="p-4 sm:p-5 font-semibold text-emerald-800 bg-amber-50/40 border-l border-amber-200">100% Yes (&lt;2s response)</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900">Automatic Tech Availability Dispatch</td>
                <td className="p-4 sm:p-5 text-amber-700">Manual phone tag</td>
                <td className="p-4 sm:p-5 text-red-600">No</td>
                <td className="p-4 sm:p-5 text-amber-700">Manual calendar entry</td>
                <td className="p-4 sm:p-5 font-semibold text-emerald-800 bg-amber-50/40 border-l border-amber-200">Automated 90s triage</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900">Cold Quote Follow-up Sequence</td>
                <td className="p-4 sm:p-5 text-amber-700">Rarely (too busy on phones)</td>
                <td className="p-4 sm:p-5 text-red-600">No</td>
                <td className="p-4 sm:p-5 text-amber-700">Requires manual templates</td>
                <td className="p-4 sm:p-5 font-semibold text-emerald-800 bg-amber-50/40 border-l border-amber-200">Systematic 3-touch cadence</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900">FTC-Compliant Review Velocity</td>
                <td className="p-4 sm:p-5 text-red-600">Forgotten during rush hours</td>
                <td className="p-4 sm:p-5 text-red-600">Often gated or risky</td>
                <td className="p-4 sm:p-5 text-amber-700">Basic post-job email</td>
                <td className="p-4 sm:p-5 font-semibold text-emerald-800 bg-amber-50/40 border-l border-amber-200">100% invoice automated</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900">All-In Monthly Investment</td>
                <td className="p-4 sm:p-5 text-slate-700 font-mono tabular-nums font-semibold">$3,800 – $4,800 / mo</td>
                <td className="p-4 sm:p-5 text-slate-700 font-mono tabular-nums font-semibold">$2,000 – $4,500 / mo</td>
                <td className="p-4 sm:p-5 text-slate-700 font-mono tabular-nums">$350 – $900 / mo</td>
                <td className="p-4 sm:p-5 font-bold text-slate-950 font-mono tabular-nums bg-amber-50/80 border-l border-amber-200 text-base">$497 / month flat</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. The 14-Day Deployment Roadmap */}
      <div className="p-8 sm:p-11 rounded-3xl border border-slate-200 bg-white shadow-xl">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-500 mb-2">
            <span>Rigorous Deployment Process</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The 14-day calibration &amp; launch sequence
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            We never flip a switch on day one without testing. Every deployment follows a rigid four-stage calibration sequence:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider block mb-1">Days 01 – 03</span>
            <h4 className="font-bold text-slate-900 text-sm mb-1.5">Intake &amp; CRM Sync</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We connect your calendar (ServiceTitan/Jobber/Housecall), input pricing rules, technician zones, and emergency dispatch tiers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider block mb-1">Days 04 – 07</span>
            <h4 className="font-bold text-slate-900 text-sm mb-1.5">Voice Model Customization</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We calibrate local geographic nuances, trade terminology, emergency guidance scripts, and custom escalation thresholds.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider block mb-1">Days 08 – 11</span>
            <h4 className="font-bold text-slate-900 text-sm mb-1.5">Live Simulation Testing</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We run 15 simulated emergency calls with you and your lead technician listening in to verify accuracy before real customer traffic.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">Days 12 – 14</span>
            <h4 className="font-bold text-slate-900 text-sm mb-1.5">Go-Live &amp; Dashboard Activation</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Live inbound call routing begins. Your private revenue attribution dashboard activates with real-time call and booking logging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
