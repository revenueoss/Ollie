import React, { useState } from 'react';
import { 
  Activity, 
  PhoneCall, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  User, 
  ShieldCheck, 
  Sparkles, 
  Filter, 
  RefreshCw, 
  ArrowUpRight, 
  Truck, 
  Layers, 
  DollarSign, 
  TrendingUp, 
  Star, 
  Sliders, 
  Calendar, 
  Wrench, 
  ChevronRight, 
  X, 
  Zap,
  ArrowLeft,
  Smartphone,
  Check,
  Search
} from 'lucide-react';
import { DualLifecycleShowcase } from './DualLifecycleShowcase';

interface LiveContractorDashboardProps {
  onBackToSite: () => void;
  onRequestAudit: () => void;
}

interface ClientFleetProfile {
  id: string;
  name: string;
  trade: string;
  crm: string;
  revenueAttributed: string;
  roiMultiplier: string;
  callsAnswered: string;
  quotesResurrected: string;
  reviewsGained: string;
  activeTechs: number;
  grossMargin: string;
  technicians: Array<{
    id: string;
    name: string;
    truck: string;
    status: 'On Site' | 'En Route' | 'Standby';
    location: string;
    eta?: string;
    currentJob?: string;
    rating: number;
  }>;
  ledger: Array<{
    id: string;
    category: 'dispatch' | 'quote' | 'review' | 'reactivation';
    title: string;
    detail: string;
    amount: string;
    time: string;
    tag: string;
    urgency: 'P1' | 'P2' | 'P3';
  }>;
}

const FLEET_PROFILES: ClientFleetProfile[] = [
  {
    id: 'tri-county',
    name: 'Tri-County Heating & Cooling',
    trade: 'Commercial & Residential HVAC',
    crm: 'ServiceTitan Live Sync',
    revenueAttributed: '$38,450.00',
    roiMultiplier: '18.4x',
    callsAnswered: '142 / 142',
    quotesResurrected: '$9,200.00',
    reviewsGained: '+19 Google 5-Stars',
    activeTechs: 3,
    grossMargin: '58.4%',
    technicians: [
      { id: 't1', name: 'Dave Miller', truck: 'Truck 02 (ProMaster)', status: 'On Site', location: '482 Elm Ridge Terrace', eta: 'Finish 1:15 AM', currentJob: 'Commercial Walk-in Compressor', rating: 4.9 },
      { id: 't2', name: 'Carlos Ramirez', truck: 'Truck 01 (Sprinter)', status: 'En Route', location: 'I-94 Eastbound Corridor', eta: '11 min ETA', currentJob: 'Emergency Furnace Ignition', rating: 5.0 },
      { id: 't3', name: 'Mike Torres', truck: 'Truck 04 (Transit)', status: 'Standby', location: 'Oakwood Depot (On-Call)', eta: 'Next in rotation', currentJob: 'Awaiting dispatch', rating: 4.8 }
    ],
    ledger: [
      {
        id: 'EV-1049',
        category: 'dispatch',
        title: 'Emergency Inbound: Commercial Walk-In Compressor Failure',
        detail: 'Caller: R. Martinez · Answered in 1.4s · Dispatched to Tech Carlos R. (Truck 02) · ServiceTitan WO #8912',
        amount: '+$4,200.00 Booked',
        time: 'Tonight 11:14 PM',
        tag: 'Emergency Dispatch',
        urgency: 'P1'
      },
      {
        id: 'EV-1048',
        category: 'quote',
        title: 'Cold Quote Recovery Touch 2: Heat Pump System Replacement',
        detail: 'Homeowner responded via SMS · 0% financing option approved · Slot locked into ServiceTitan calendar',
        amount: '+$8,750.00 Recovered',
        time: 'Today 4:20 PM',
        tag: 'Dormant Quote Revived',
        urgency: 'P2'
      },
      {
        id: 'EV-1047',
        category: 'reactivation',
        title: 'Seasonal Reactivation Protocol: Pre-Winter Furnace Inspections',
        detail: 'Outreach to 180 past customer accounts · 22 booked appointments confirmed in 48 hours without ads',
        amount: '+$4,180.00 Booked',
        time: 'Oct 14, 2026',
        tag: 'Seasonal Reactivation',
        urgency: 'P3'
      },
      {
        id: 'EV-1046',
        category: 'review',
        title: 'Automated 5-Star Review Trigger: Ductless Mini-Split Installation',
        detail: 'Settled invoice sync triggered FTC-compliant SMS invitation · 5-Star Google rating posted with technician shoutout',
        amount: 'Verified 5-Star',
        time: 'Oct 13, 2026',
        tag: 'Google Review',
        urgency: 'P3'
      }
    ]
  },
  {
    id: 'apex-plumbing',
    name: 'Apex Precision Plumbing & Drain',
    trade: 'Residential Plumbing & Hydrojetting',
    crm: 'Housecall Pro Sync',
    revenueAttributed: '$44,120.00',
    roiMultiplier: '21.2x',
    callsAnswered: '186 / 186',
    quotesResurrected: '$12,400.00',
    reviewsGained: '+27 Google 5-Stars',
    activeTechs: 3,
    grossMargin: '61.2%',
    technicians: [
      { id: 't4', name: 'Jason Bennett', truck: 'Truck 05 (Service Van)', status: 'On Site', location: '104 Highland Ave', eta: 'Finish 12:45 AM', currentJob: 'Kitchen Main Line Hydrojetting', rating: 4.9 },
      { id: 't5', name: 'Tyler Ross', truck: 'Truck 03 (Box Truck)', status: 'En Route', location: 'Route 7 West', eta: '8 min ETA', currentJob: 'Sump Pump Overflow', rating: 4.9 },
      { id: 't6', name: 'Sam Gallagher', truck: 'Truck 01 (Jetting Rig)', status: 'Standby', location: 'North District On-Call', eta: 'Ready for emergency', currentJob: 'Awaiting dispatch', rating: 5.0 }
    ],
    ledger: [
      {
        id: 'EV-2091',
        category: 'dispatch',
        title: 'Sunday Evening Emergency: Water Main Rupture Under Kitchen Floor',
        detail: 'Caller: Sarah J. · Main valve shutoff instructed · Tech Jason B. dispatched in 45s with Housecall Pro slot',
        amount: '+$2,850.00 Booked',
        time: 'Sunday 10:14 PM',
        tag: 'Emergency Dispatch',
        urgency: 'P1'
      },
      {
        id: 'EV-2090',
        category: 'quote',
        title: 'Cold Quote Recovery Touch 3: Tankless Water Heater & Recirc Line',
        detail: 'Homeowner responded to warranty clarification · $500 deposit collected online via secure link',
        amount: '+$5,400.00 Recovered',
        time: 'Oct 12, 2026',
        tag: 'Dormant Quote Revived',
        urgency: 'P2'
      }
    ]
  },
  {
    id: 'voltcraft',
    name: 'VoltCraft Master Electrical',
    trade: 'Commercial & High-End Residential Electrical',
    crm: 'Jobber Scheduling',
    revenueAttributed: '$29,800.00',
    roiMultiplier: '14.3x',
    callsAnswered: '98 / 98',
    quotesResurrected: '$7,800.00',
    reviewsGained: '+14 Google 5-Stars',
    activeTechs: 2,
    grossMargin: '56.0%',
    technicians: [
      { id: 't7', name: 'Marcus Vance', truck: 'Truck 02 (Bucket Van)', status: 'On Site', location: 'Metro Plaza Store #4', eta: 'Finish 1:00 AM', currentJob: '200A Arcing Breaker Panel', rating: 4.9 },
      { id: 't8', name: 'Derek Lewis', truck: 'Truck 04 (Service Van)', status: 'Standby', location: 'Central Hub', eta: 'On-Call', currentJob: 'Awaiting dispatch', rating: 4.8 }
    ],
    ledger: [
      {
        id: 'EV-3081',
        category: 'dispatch',
        title: 'Urgent Commercial Inbound: 200A Service Panel Arcing in Retail Store',
        detail: 'Voice AI captured breaker model photo · Emergency commercial rate confirmed · Jobber WO #419',
        amount: '+$3,600.00 Booked',
        time: 'Tonight 11:02 PM',
        tag: 'Emergency Dispatch',
        urgency: 'P1'
      }
    ]
  }
];

export const LiveContractorDashboard: React.FC<LiveContractorDashboardProps> = ({ 
  onBackToSite, 
  onRequestAudit 
}) => {
  const [selectedFleetIdx, setSelectedFleetIdx] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'lifecycle' | 'dispatch' | 'ledger' | 'quotes'>('lifecycle');
  const [activeLedgerCategory, setActiveLedgerCategory] = useState<'all' | 'dispatch' | 'quote' | 'review'>('all');
  const [simulatedEvents, setSimulatedEvents] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentFleet = FLEET_PROFILES[selectedFleetIdx];

  const handleSimulateInbound = () => {
    setSimulatedEvents(prev => prev + 1);
  };

  const filteredLedger = currentFleet.ledger.filter(item => {
    if (activeLedgerCategory !== 'all' && item.category !== activeLedgerCategory) return false;
    if (searchQuery.trim() === '') return true;
    return item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           item.detail.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-slate-900 pb-20">
      {/* Top Application Command Bar */}
      <header className="sticky top-0 z-40 bg-slate-900 text-white border-b border-slate-800 shadow-md">
        <div className="w-full max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          
          {/* Left: Brand & Mode Switcher */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToSite}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
              title="Return to Site Overview"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Overview</span>
            </button>

            <div className="h-6 w-px bg-slate-800 hidden sm:block"></div>

            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-extrabold text-sm shadow-xs">
                O
              </span>
              <div>
                <span className="text-base font-bold tracking-tight text-white block leading-tight">
                  Ollie Command Console
                </span>
                <span className="text-[11px] text-amber-400 flex items-center gap-1 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  2nd Shift LIVE (5 PM – 8 AM)
                </span>
              </div>
            </div>
          </div>

          {/* Center: Fleet Selector Switcher */}
          <div className="hidden md:flex items-center gap-2 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
            <span className="text-[11px] font-semibold text-slate-400 px-2 uppercase tracking-wider">
              Fleet:
            </span>
            {FLEET_PROFILES.map((fleet, idx) => (
              <button
                key={fleet.id}
                onClick={() => setSelectedFleetIdx(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedFleetIdx === idx
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                {fleet.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleSimulateInbound}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Simulate Call Inbound</span>
            </button>

            <button
              onClick={onRequestAudit}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
            >
              <span>Audit Your Fleet</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard Canvas Container */}
      <main className="w-full max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        
        {/* Fleet Meta Banner */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {currentFleet.name}
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium border border-slate-200">
                  {currentFleet.trade}
                </span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium border border-blue-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {currentFleet.crm}
                </span>
              </div>
              <p className="text-sm text-slate-500">
                Operating automated 2nd shift dispatcher, pricebook margin enforcement, and technician on-call routing.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-right">
                <span className="text-[11px] text-slate-500 block uppercase tracking-wider">Active On-Call Crew</span>
                <span className="text-lg font-bold text-slate-900">{currentFleet.activeTechs} Vans in Rotation</span>
              </div>
              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-right">
                <span className="text-[11px] text-emerald-700 block uppercase tracking-wider">Gross Margin Floor</span>
                <span className="text-lg font-bold text-emerald-800 font-mono">{currentFleet.grossMargin}</span>
              </div>
            </div>
          </div>

          {/* 5 Enterprise KPI Telemetry Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 pt-6">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span>Attributed Revenue</span>
                <span className="text-emerald-700 font-bold bg-emerald-100/70 px-1.5 py-0.5 rounded text-[10px]">
                  {currentFleet.roiMultiplier}
                </span>
              </div>
              <div className="text-2xl font-black font-mono text-slate-900">
                {currentFleet.revenueAttributed}
              </div>
              <span className="text-[11px] text-slate-400 mt-1 block">Verified against CRM WOs</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span>Calls Answered Live</span>
                <span className="text-blue-700 font-semibold text-[10px]">1.4s Speed</span>
              </div>
              <div className="text-2xl font-black font-mono text-slate-900">
                {currentFleet.callsAnswered}
              </div>
              <span className="text-[11px] text-emerald-600 font-medium mt-1 block flex items-center gap-1">
                <Check className="w-3 h-3" /> 0 Voicemails
              </span>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span>Cold Quotes Revived</span>
                <span className="text-amber-700 font-semibold text-[10px]">Cadence</span>
              </div>
              <div className="text-2xl font-black font-mono text-slate-900">
                {currentFleet.quotesResurrected}
              </div>
              <span className="text-[11px] text-slate-400 mt-1 block">Zero ad spend needed</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span>Google 5-Stars</span>
                <span className="text-amber-600 font-semibold text-[10px]">GBP SEO</span>
              </div>
              <div className="text-2xl font-black font-mono text-slate-900">
                {currentFleet.reviewsGained}
              </div>
              <span className="text-[11px] text-amber-700 font-medium mt-1 block">FTC Compliant</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 col-span-2 md:col-span-1">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span>Dispatch Speed</span>
                <span className="text-emerald-700 font-semibold text-[10px]">Avg Latency</span>
              </div>
              <div className="text-2xl font-black font-mono text-slate-900">
                42 Seconds
              </div>
              <span className="text-[11px] text-slate-400 mt-1 block">Phone to on-call tech ping</span>
            </div>
          </div>
        </div>

        {/* Dashboard Workspace Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('lifecycle')}
            className={`px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'lifecycle'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Dual Lifecycle (Service Provider &amp; Client)</span>
          </button>

          <button
            onClick={() => setActiveTab('dispatch')}
            className={`px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'dispatch'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Truck className="w-4 h-4 text-amber-400" />
            <span>On-Call Fleet Radar &amp; Telemetry ({currentFleet.technicians.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('ledger')}
            className={`px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'ledger'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Activity className="w-4 h-4 text-amber-400" />
            <span>Operational Ledger &amp; Work Orders</span>
          </button>
        </div>

        {/* Tab 1 Content: Full Twin Lifecycle Showcase */}
        {activeTab === 'lifecycle' && (
          <div className="space-y-6">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 flex items-center justify-between">
              <div className="flex items-center gap-2 font-medium">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  Interactive Twin Lifecycle Explorer: Scrub between all 6 stages to view synchronized actions across the contractor terminal and the client smartphone.
                </span>
              </div>
              <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider hidden sm:inline">
                Live Simulation
              </span>
            </div>

            <DualLifecycleShowcase />
          </div>
        )}

        {/* Tab 2 Content: Fleet Dispatch & Telemetry Radar */}
        {activeTab === 'dispatch' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tech Fleet Cards */}
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Truck className="w-5 h-5 text-amber-600" />
                <span>Active 2nd Shift Fleet Telemetry</span>
                <span className="text-xs font-normal text-slate-500">· Real-Time GPS Tracking</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentFleet.technicians.map((tech) => (
                  <div key={tech.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-sm">
                          {tech.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">{tech.name}</h4>
                          <span className="text-xs text-slate-500">{tech.truck}</span>
                        </div>
                      </div>

                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        tech.status === 'On Site'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : tech.status === 'En Route'
                          ? 'bg-blue-100 text-blue-800 border border-blue-200'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}>
                        {tech.status}
                      </span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-2xl text-xs space-y-2">
                      <div className="flex items-center justify-between text-slate-600">
                        <span>Current Dispatch:</span>
                        <strong className="text-slate-900">{tech.currentJob}</strong>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span>Location / Zone:</span>
                        <span className="text-slate-900 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {tech.location}
                        </span>
                      </div>
                      {tech.eta && (
                        <div className="flex items-center justify-between text-slate-600">
                          <span>Timeline / ETA:</span>
                          <span className="font-mono font-bold text-amber-700">{tech.eta}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
                      <span className="flex items-center gap-1 text-amber-600 font-semibold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        {tech.rating} Verified Rating
                      </span>
                      <button className="text-xs font-semibold text-slate-900 hover:text-amber-700 transition-colors">
                        Reassign Route →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shift Rules & Dispatch Rules Sidebar */}
            <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Autonomous Guardrails</span>
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Max Call Cap Per Tech</span>
                  <p className="text-slate-600">Cap of 3 emergency runs per technician per overnight shift to safeguard rest and next-day safety.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Emergency Deposit Collection</span>
                  <p className="text-slate-600">Mandatory $149 dispatch authorization captured prior to roll-out, eliminating non-payment risk.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Escalation Boundary</span>
                  <p className="text-slate-600">Jobs exceeding $10,000 or commercial shutdowns automatically route a quiet priority SMS to company owner.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3 Content: Operational Activity Ledger */}
        {activeTab === 'ledger' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Live Attributed Work Order Ledger</h3>
                <p className="text-xs text-slate-500">Every dollar and dispatch captured on the 2nd shift.</p>
              </div>

              {/* Filters */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search ledger..."
                    className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-slate-900 w-48"
                  />
                </div>

                <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs">
                  {(['all', 'dispatch', 'quote', 'review'] as const).map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveLedgerCategory(cat)}
                      className={`px-3 py-1 rounded-lg font-semibold uppercase text-[10px] cursor-pointer transition-all ${
                        activeLedgerCategory === cat
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated Live Alert if triggered */}
            {simulatedEvents > 0 && (
              <div className="p-4 mb-4 rounded-2xl bg-amber-50 border border-amber-300 text-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"></span>
                  <span className="font-bold text-amber-950">
                    Simulated Inbound Captured: Emergency Water Valve Replacement · $1,450.00 Booked
                  </span>
                </div>
                <span className="text-[11px] font-mono text-amber-800">Just Now</span>
              </div>
            )}

            {/* Table / List */}
            <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
              {filteredLedger.map((row) => (
                <div key={row.id} className="p-5 hover:bg-slate-50/80 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        row.urgency === 'P1'
                          ? 'bg-rose-100 text-rose-800 border border-rose-200'
                          : row.urgency === 'P2'
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : 'bg-blue-100 text-blue-800 border border-blue-200'
                      }`}>
                        {row.urgency}
                      </span>
                      <span className="text-xs font-bold text-slate-900">{row.title}</span>
                      <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {row.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">{row.detail}</p>
                    <div className="text-[11px] text-slate-400 font-mono">
                      <span>{row.id}</span> · <span>{row.time}</span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-base font-extrabold font-mono text-emerald-700">
                      {row.amount}
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">Attributed in CRM</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
};
