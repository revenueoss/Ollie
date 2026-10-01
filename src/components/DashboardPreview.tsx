import React, { useState } from 'react';
import { TrendingUp, Star, Activity, PhoneCall, Clock, CheckCircle2, MapPin, User, ShieldCheck, Sparkles, Filter, RefreshCw, ArrowUpRight } from 'lucide-react';

interface ClientProfile {
  name: string;
  trade: string;
  crm: string;
  revenueAttributed: string;
  roiMultiplier: string;
  callsAnswered: string;
  quotesResurrected: string;
  reviewsSent: string;
  reviewsGained: string;
  technicians: Array<{
    name: string;
    truck: string;
    status: 'On Site' | 'En Route' | 'Standby';
    location: string;
    eta?: string;
  }>;
  ledger: Array<{
    id: string;
    category: 'dispatch' | 'quote' | 'review' | 'reactivation';
    title: string;
    detail: string;
    amount: string;
    time: string;
    tag: string;
  }>;
}

const CLIENT_PROFILES: ClientProfile[] = [
  {
    name: 'Tri-County Heating & Cooling',
    trade: 'Commercial & Residential HVAC',
    crm: 'ServiceTitan Live Sync',
    revenueAttributed: '$38,450.00',
    roiMultiplier: '18.4x',
    callsAnswered: '142 / 142',
    quotesResurrected: '$9,200.00',
    reviewsSent: '34 Dispatched',
    reviewsGained: '+19 Google 5-Star Reviews',
    technicians: [
      { name: 'Dave Miller', truck: 'Truck 02 (ProMaster)', status: 'On Site', location: '482 Elm Ridge Terrace', eta: 'Finish 9:15 PM' },
      { name: 'Carlos Ramirez', truck: 'Truck 01 (Sprinter)', status: 'En Route', location: 'I-94 Eastbound Corridor', eta: '12 min ETA' },
      { name: 'Mike Torres', truck: 'Truck 04 (Transit)', status: 'Standby', location: 'Oakwood Depot (On-Call)', eta: 'Next in rotation' }
    ],
    ledger: [
      {
        id: 'EV-1049',
        category: 'dispatch',
        title: 'Emergency Inbound: Commercial Walk-In Compressor Failure',
        detail: 'Caller: R. Martinez · Answered in 1.4s · Dispatched to Tech Carlos R. (Truck 02) · ServiceTitan WO #8912',
        amount: '+$4,200.00 Booked',
        time: 'Tonight 9:14 PM',
        tag: 'Emergency Dispatch'
      },
      {
        id: 'EV-1048',
        category: 'quote',
        title: 'Cold Quote Recovery Touch 2: Heat Pump System Replacement',
        detail: 'Homeowner responded via SMS · 0% financing option approved · Slot locked into ServiceTitan calendar',
        amount: '+$8,750.00 Recovered',
        time: 'Yesterday 4:20 PM',
        tag: 'Dormant Quote Revived'
      },
      {
        id: 'EV-1047',
        category: 'reactivation',
        title: 'Seasonal Reactivation Protocol: Pre-Winter Furnace Inspections',
        detail: 'Outreach to 180 past customer accounts · 22 booked appointments confirmed in 48 hours without ads',
        amount: '+$4,180.00 Booked',
        time: 'Oct 14, 2026',
        tag: 'Seasonal Reactivation'
      },
      {
        id: 'EV-1046',
        category: 'review',
        title: 'Automated 5-Star Review Trigger: Ductless Mini-Split Installation',
        detail: 'Settled invoice sync triggered FTC-compliant SMS invitation · 5-Star Google rating posted with technician shoutout',
        amount: 'Verified 5-Star',
        time: 'Oct 13, 2026',
        tag: 'Google Review'
      }
    ]
  },
  {
    name: 'Apex Precision Plumbing & Drain',
    trade: 'Residential Plumbing & Hydrojetting',
    crm: 'Housecall Pro Sync',
    revenueAttributed: '$44,120.00',
    roiMultiplier: '21.2x',
    callsAnswered: '186 / 186',
    quotesResurrected: '$12,400.00',
    reviewsSent: '46 Dispatched',
    reviewsGained: '+27 Google 5-Star Reviews',
    technicians: [
      { name: 'Jason Bennett', truck: 'Truck 05 (Service Van)', status: 'On Site', location: '104 Highland Ave', eta: 'Finish 8:50 PM' },
      { name: 'Tyler Ross', truck: 'Truck 03 (Box Truck)', status: 'En Route', location: 'Route 7 West', eta: '8 min ETA' },
      { name: 'Sam Gallagher', truck: 'Truck 01 (Jetting Rig)', status: 'Standby', location: 'North District On-Call', eta: 'Ready for emergency' }
    ],
    ledger: [
      {
        id: 'EV-2091',
        category: 'dispatch',
        title: 'Sunday Evening Emergency: Water Main Rupture Under Kitchen Floor',
        detail: 'Caller: Sarah J. · Main valve shutoff instructed · Tech Jason B. dispatched in 45s with Housecall Pro slot',
        amount: '+$2,850.00 Booked',
        time: 'Sunday 8:14 PM',
        tag: 'Emergency Dispatch'
      },
      {
        id: 'EV-2090',
        category: 'quote',
        title: 'Cold Quote Recovery Touch 3: Tankless Water Heater & Recirc Line',
        detail: 'Homeowner responded to warranty clarification · $500 deposit collected online via secure link',
        amount: '+$5,400.00 Recovered',
        time: 'Oct 12, 2026',
        tag: 'Dormant Quote Revived'
      },
      {
        id: 'EV-2089',
        category: 'reactivation',
        title: 'Dormant Client Reactivation: Annual Whole-Home Plumbing Inspection',
        detail: 'Consent-verified customer list outreach · 31 tune-ups confirmed for November shoulder season',
        amount: '+$5,890.00 Booked',
        time: 'Oct 09, 2026',
        tag: 'Seasonal Reactivation'
      }
    ]
  },
  {
    name: 'VoltCraft Master Electrical',
    trade: 'Commercial & High-End Residential Electrical',
    crm: 'Jobber Scheduling',
    revenueAttributed: '$29,800.00',
    roiMultiplier: '14.3x',
    callsAnswered: '98 / 98',
    quotesResurrected: '$7,800.00',
    reviewsSent: '28 Dispatched',
    reviewsGained: '+14 Google 5-Star Reviews',
    technicians: [
      { name: 'Marcus Vance', truck: 'Truck 02 (Bucket Van)', status: 'On Site', location: 'Metro Plaza Store #4', eta: 'Finish 10:00 PM' },
      { name: 'Derek Lewis', truck: 'Truck 04 (Service Van)', status: 'Standby', location: 'Central Hub', eta: 'On-Call' }
    ],
    ledger: [
      {
        id: 'EV-3081',
        category: 'dispatch',
        title: 'Urgent Commercial Inbound: 200A Service Panel Arcing in Retail Store',
        detail: 'Voice AI captured breaker model photo · Emergency commercial rate confirmed · Jobber WO #419',
        amount: '+$3,600.00 Booked',
        time: 'Today 11:02 AM',
        tag: 'Emergency Dispatch'
      },
      {
        id: 'EV-3080',
        category: 'quote',
        title: 'Cold Quote Recovery Touch 1: Whole-House EV Charger & Service Upgrade',
        detail: 'Follow-up email + SMS answered homeowner permit timeline questions · Approved online',
        amount: '+$4,200.00 Recovered',
        time: 'Yesterday 2:15 PM',
        tag: 'Dormant Quote Revived'
      },
      {
        id: 'EV-3079',
        category: 'review',
        title: 'Automated Post-Job Review Invitation: Surge Suppression Installation',
        detail: 'Triggered upon final invoice settlement · Verified 5-star review posted to GBP',
        amount: 'Verified 5-Star',
        time: 'Oct 11, 2026',
        tag: 'Google Review'
      }
    ]
  }
];

interface DashboardPreviewProps {
  onLaunchFullDashboard?: () => void;
}

export const DashboardPreview: React.FC<DashboardPreviewProps> = ({ onLaunchFullDashboard }) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<'all' | 'dispatch' | 'quote' | 'review'>('all');
  const [simulatedEvents, setSimulatedEvents] = useState<number>(0);

  const activeProfile = CLIENT_PROFILES[selectedIdx];

  const filteredLedger = activeProfile.ledger.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleSimulateCall = () => {
    setSimulatedEvents(prev => prev + 1);
  };

  return (
    <section id="dashboard" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 xl:px-12 w-full max-w-[1840px] mx-auto border-t border-slate-200 scroll-mt-20">
      {/* Anchor compatibility for #case-studies as well */}
      <span id="case-studies" className="sr-only">Case Studies &amp; Operations Dashboard</span>

      {/* Section Header */}
      <div className="text-center w-full max-w-5xl mx-auto mb-12 sm:mb-16">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-500 mb-3">
          <Activity className="w-3.5 h-3.5 text-emerald-600" />
          <span>Live Operations Console · Verified Field Telemetry</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Zero Vanity Metrics</span>
        </div>

        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4" 
          style={{ textWrap: 'balance' }}
        >
          The contractor command dashboard running your 2nd shift
        </h2>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-6">
          Most marketing agencies send vague PDF reports at the end of the month. Ollie provides an interactive, live-updating 2nd shift operations console where every answered call, emergency route dispatch, resurrected estimate, and attributed dollar is documented in real time.
        </p>

        {onLaunchFullDashboard && (
          <div className="flex justify-center">
            <button
              onClick={onLaunchFullDashboard}
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Launch Full-Screen Interactive Command Center</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        )}
      </div>

      {/* Profile Switcher & Real-Time Status Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
            Active Fleet:
          </span>
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            {CLIENT_PROFILES.map((p, idx) => (
              <button
                key={p.name}
                onClick={() => {
                  setSelectedIdx(idx);
                  setActiveCategory('all');
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedIdx === idx
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Live System Status Badges */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs">
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-lg font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>2nd Shift ACTIVE (5 PM – 8 AM)</span>
          </span>

          <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1.5 rounded-lg font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            <span>{activeProfile.crm}</span>
          </span>
        </div>
      </div>

      {/* Main Full-Width Dashboard Container */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden w-full">
        {/* Top Console Command Bar */}
        <div className="bg-slate-900 text-white px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-sm">
              O
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-tight text-white">{activeProfile.name}</span>
                <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                  {activeProfile.trade}
                </span>
              </div>
              <span className="text-xs text-slate-400">Live 2nd Shift Dispatch &amp; Revenue Attribution Console</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSimulateCall}
              className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3 h-3 text-amber-400" />
              <span>Simulate Call Inbound</span>
            </button>
            <div className="text-right hidden sm:block">
              <span className="text-[11px] text-slate-400 block">Current Status</span>
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                0 Voicemails · 100% Pick-Up
              </span>
            </div>
          </div>
        </div>

        {/* 4 Primary Metric Cards */}
        <div className="p-6 sm:p-8 bg-slate-50/50 border-b border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                Attributed Revenue (30d)
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                {activeProfile.roiMultiplier} ROI
              </span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
              {activeProfile.revenueAttributed}
            </div>
            <span className="text-xs text-slate-500 block mt-1.5">
              Verified against CRM settled work orders
            </span>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                Calls Answered Live
              </span>
              <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                1.4s Speed
              </span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
              {activeProfile.callsAnswered}
            </div>
            <span className="text-xs text-emerald-700 font-medium block mt-1.5 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              100% response (0 calls lost to voicemail)
            </span>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                Cold Quotes Resurrected
              </span>
              <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                3-Touch Cadence
              </span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
              {activeProfile.quotesResurrected}
            </div>
            <span className="text-xs text-slate-500 block mt-1.5">
              Recovered without additional ad spend
            </span>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                Google 5-Star Reviews
              </span>
              <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                FTC Compliant
              </span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
              {activeProfile.reviewsGained.split(' ')[0]}
            </div>
            <span className="text-xs text-emerald-700 font-semibold block mt-1.5 flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              {activeProfile.reviewsSent}
            </span>
          </div>
        </div>

        {/* 2-Column Split: Main Operational Activity Stream & On-Call Fleet Radar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          {/* Left Column (8 cols): Real-Time Operational Activity Ledger */}
          <div className="lg:col-span-8 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span>Operational Activity Ledger</span>
                  <span className="text-xs font-normal text-slate-400">· Real-Time Audit Trail</span>
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Chronological log of after-hours dispatches, quote follow-ups, and customer feedback.
                </p>
              </div>

              {/* Activity Filters */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs self-start sm:self-auto">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-2.5 py-1 rounded-md font-medium transition cursor-pointer ${
                    activeCategory === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All ({activeProfile.ledger.length + (simulatedEvents > 0 ? 1 : 0)})
                </button>
                <button
                  onClick={() => setActiveCategory('dispatch')}
                  className={`px-2.5 py-1 rounded-md font-medium transition cursor-pointer ${
                    activeCategory === 'dispatch' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Dispatches
                </button>
                <button
                  onClick={() => setActiveCategory('quote')}
                  className={`px-2.5 py-1 rounded-md font-medium transition cursor-pointer ${
                    activeCategory === 'quote' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Quotes
                </button>
              </div>
            </div>

            {/* Simulated Live Event (if triggered) */}
            {simulatedEvents > 0 && (
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-300 text-xs animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-slate-900 text-sm">Live After-Hours Inbound: Emergency Main Shutoff</span>
                        <span className="bg-amber-200 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded">JUST NOW</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        Caller: Marcus K. · Voice AI diagnosed leaking shutoff in utility room · Dispatched to Tech Dave Miller · Work order synced into CRM
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-emerald-700 font-bold font-mono text-sm block">+$1,450.00 Booked</span>
                    <span className="text-[11px] text-slate-500">Pick-up 1.3s</span>
                  </div>
                </div>
              </div>
            )}

            {/* Filtered Ledger Feed */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100 bg-white">
              {filteredLedger.map((item) => (
                <div key={item.id} className="p-5 hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">{item.title}</span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        item.category === 'dispatch' 
                          ? 'bg-amber-100 text-amber-800' 
                          : item.category === 'quote'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.detail}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-1">
                      <span className="font-mono">{item.id}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </span>
                    </div>
                  </div>

                  <div className="text-left sm:text-right font-mono tabular-nums shrink-0">
                    <span className="text-emerald-700 font-bold text-sm block">{item.amount}</span>
                    <span className="text-[11px] text-slate-400 font-sans">Verified in CRM</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (4 cols): Active 2nd Shift Fleet & CRM Radar */}
          <div className="lg:col-span-4 p-6 sm:p-8 bg-slate-50/60 flex flex-col justify-between space-y-6">
            <div>
              {/* On-Call Fleet Status */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    On-Call Technician Fleet
                  </span>
                  <span className="text-xs font-medium text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {activeProfile.technicians.length} Vans Active
                  </span>
                </div>

                <div className="space-y-3">
                  {activeProfile.technicians.map((tech) => (
                    <div key={tech.name} className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-slate-500" />
                          <strong className="text-slate-900">{tech.name}</strong>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          tech.status === 'On Site' 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : tech.status === 'En Route'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {tech.status}
                        </span>
                      </div>

                      <div className="text-slate-500 text-[11px] flex items-center justify-between">
                        <span>{tech.truck}</span>
                        {tech.eta && <span className="font-mono text-slate-700 font-medium">{tech.eta}</span>}
                      </div>

                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="truncate">{tech.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Rules Enforced */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs space-y-2.5 mb-6">
                <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1">
                  Active Guardrail Thresholds
                </span>
                <div className="flex items-center justify-between text-slate-600 text-xs">
                  <span>Drive-time buffer:</span>
                  <span className="font-semibold text-slate-900">15 min minimum</span>
                </div>
                <div className="flex items-center justify-between text-slate-600 text-xs">
                  <span>Max tech shift capacity:</span>
                  <span className="font-semibold text-slate-900">3 emergency calls</span>
                </div>
                <div className="flex items-center justify-between text-slate-600 text-xs">
                  <span>Diagnostic fee collection:</span>
                  <span className="font-semibold text-emerald-700">$149 Pre-authorized</span>
                </div>
                <div className="flex items-center justify-between text-slate-600 text-xs">
                  <span>Major RFP Escalation:</span>
                  <span className="font-semibold text-slate-900">Owner mobile route</span>
                </div>
              </div>
            </div>

            {/* Confidential Audit Action */}
            <div className="pt-4 border-t border-slate-200">
              <a
                href="#pricing"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2 group text-center"
              >
                <span>Deploy This Dashboard For Your Fleet</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="text-[11px] text-slate-400 text-center block mt-2">
                All client numbers calibrated during 90-minute onboarding.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
