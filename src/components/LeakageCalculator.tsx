import React, { useState } from 'react';
import { ArrowRight, Calculator, CheckCircle2, TrendingUp } from 'lucide-react';

interface LeakageCalculatorProps {
  onAuditWithNumbers: (calculatedLeak: number) => void;
}

interface TradePreset {
  name: string;
  opportunities: number;
  ticket: number;
  leak: number;
  margin: number;
}

const PRESETS: TradePreset[] = [
  { name: 'Plumbing & Drain', opportunities: 80, ticket: 1450, leak: 26, margin: 55 },
  { name: 'HVAC & Refrigeration', opportunities: 75, ticket: 3200, leak: 30, margin: 48 },
  { name: 'Electrical Fleet', opportunities: 85, ticket: 1850, leak: 24, margin: 58 },
  { name: 'Roofing & Restoration', opportunities: 45, ticket: 7500, leak: 32, margin: 42 }
];

export const LeakageCalculator: React.FC<LeakageCalculatorProps> = ({ onAuditWithNumbers }) => {
  const [monthlyOpportunities, setMonthlyOpportunities] = useState<number>(80);
  const [avgJobValue, setAvgJobValue] = useState<number>(2200);
  const [leakageRate, setLeakageRate] = useState<number>(28);
  const [grossMargin, setGrossMargin] = useState<number>(52);
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const applyPreset = (preset: TradePreset) => {
    setMonthlyOpportunities(preset.opportunities);
    setAvgJobValue(preset.ticket);
    setLeakageRate(preset.leak);
    setGrossMargin(preset.margin);
    setActivePreset(preset.name);
  };

  // Financial Math
  const totalMonthlyPipeline = monthlyOpportunities * avgJobValue;
  const monthlyLeakedRevenue = Math.round(totalMonthlyPipeline * (leakageRate / 100));
  const annualLeakedRevenue = monthlyLeakedRevenue * 12;
  const estimatedRecoverable = Math.round(annualLeakedRevenue * 0.72); // Conservative 72% recapture

  return (
    <section id="calculator" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100 scroll-mt-20">
      
      {/* Category Kicker */}
      <div className="text-center mb-4">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Financial Impact Model
        </span>
      </div>

      {/* Main Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Calculate your after-hours revenue leakage.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Adjust the sliders below to mirror your fleet size and ticket price. See how much money slips through to voicemail every month.
        </p>

        {/* Trade Presets */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          <span className="text-xs font-medium text-slate-500 mr-1">Quick Select:</span>
          <div className="inline-flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
            {PRESETS.map((preset) => (
              <button
                key={preset.name}
                onClick={() => applyPreset(preset)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                  activePreset === preset.name
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Sliders Input Panel (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-7">
          
          {/* Slider 1: Opportunities */}
          <div>
            <div className="flex justify-between items-center mb-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Monthly Inbound Calls &amp; Requests
              </label>
              <span className="text-sm font-bold text-slate-900 font-mono bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                {monthlyOpportunities} calls / mo
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="250"
              step="5"
              value={monthlyOpportunities}
              onChange={(e) => {
                setMonthlyOpportunities(Number(e.target.value));
                setActivePreset(null);
              }}
              className="w-full cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>20 (Solo shop)</span>
              <span>80 (3–5 trucks)</span>
              <span>250+ (Large fleet)</span>
            </div>
          </div>

          {/* Slider 2: Average Ticket */}
          <div>
            <div className="flex justify-between items-center mb-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Average Job Value / Ticket
              </label>
              <span className="text-sm font-bold text-slate-900 font-mono bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                ${avgJobValue.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="400"
              max="8000"
              step="100"
              value={avgJobValue}
              onChange={(e) => {
                setAvgJobValue(Number(e.target.value));
                setActivePreset(null);
              }}
              className="w-full cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>$400 (Quick repair)</span>
              <span>$2,200 (Avg replacement)</span>
              <span>$8,000+ (Major install)</span>
            </div>
          </div>

          {/* Slider 3: Leakage Rate */}
          <div>
            <div className="flex justify-between items-center mb-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                After-Hours Missed Rate
              </label>
              <span className="text-sm font-bold text-rose-700 font-mono bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">
                {leakageRate}%
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="1"
              value={leakageRate}
              onChange={(e) => {
                setLeakageRate(Number(e.target.value));
                setActivePreset(null);
              }}
              className="w-full cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>10% (Low)</span>
              <span>28% (US Industry Average)</span>
              <span>50% (Voicemail only)</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 leading-relaxed">
            💡 <strong>Did you know?</strong> 84% of after-hours emergency callers who reach a voicemail hang up and call the next contractor on Google Maps.
          </div>
        </div>

        {/* Results Output Panel (5 Cols) */}
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 block mb-2">
              Annual Financial Recovery
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mb-1">
              ${estimatedRecoverable.toLocaleString()}
            </div>
            <span className="text-xs text-emerald-400 font-medium block mb-6">
              Estimated annual revenue recaptured by Ollie
            </span>

            <div className="space-y-3.5 pt-4 border-t border-slate-800 text-xs">
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Monthly Leaked Revenue:</span>
                <span className="text-rose-400 font-mono font-semibold">-${monthlyLeakedRevenue.toLocaleString()} / mo</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Annual Leaked Revenue:</span>
                <span className="text-rose-400 font-mono font-semibold">-${annualLeakedRevenue.toLocaleString()} / yr</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Ollie Recapture Rate:</span>
                <span className="text-emerald-400 font-mono font-semibold">72% Verified</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <button
              onClick={() => onAuditWithNumbers(estimatedRecoverable)}
              className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Recapture This ${estimatedRecoverable.toLocaleString()}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-[11px] text-slate-400 text-center block mt-2">
              100% confidential. No spam. 15-minute call.
            </span>
          </div>
        </div>

      </div>

    </section>
  );
};
