/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  Navigation, 
  CreditCard, 
  Star, 
  Check, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Clock, 
  Sparkles,
  Smartphone,
  Truck,
  Wrench,
  CheckCircle2,
  Umbrella,
  AlertTriangle,
  PhoneForwarded,
  BarChart3,
  Activity,
  Layers,
  TrendingUp,
  CheckCircle,
  Database
} from 'lucide-react';
import { AuditApplicationModal } from './components/AuditApplicationModal';

// Direct ES image imports so Vite bundles and hashes them for production deployments
import heroFleetImg from './assets/images/hero_contractor_fleet_1790858335837.jpg';
import scenarioUnderSinkImg from './assets/images/scenario_under_sink_1790858349368.jpg';
import scenarioRoofWorkerImg from './assets/images/scenario_roof_worker_1790858360425.jpg';
import scenarioVacationFreedomImg from './assets/images/scenario_vacation_freedom_1790858369722.jpg';

interface HourlyCallData {
  hour: string;
  label: string;
  totalCalls: number;
  missedWithoutOllie: number;
  capturedWithOllie: number;
  scenario: string;
  value: string;
  details: string;
}

const HOURLY_GRAPH_DATA: HourlyCallData[] = [
  { hour: "12 AM", label: "Midnight Shift", totalCalls: 4, missedWithoutOllie: 4, capturedWithOllie: 4, scenario: "Late Night Burst Pipe & Gas Triage", value: "$3,600", details: "Homeowner routed through main shutoff; on-call tech rolled in 16 mins." },
  { hour: "3 AM", label: "Early Hours", totalCalls: 2, missedWithoutOllie: 2, capturedWithOllie: 2, scenario: "Commercial Walk-In Cooler Failure", value: "$2,400", details: "Restaurant refrigeration emergency triaged directly to master HVAC tech." },
  { hour: "6 AM", label: "Morning Cold Calls", totalCalls: 6, missedWithoutOllie: 5, capturedWithOllie: 6, scenario: "Water Heater Ruptures & No Heat", value: "$5,100", details: "Pre-office opening calls captured and scheduled before 8 AM front desk opens." },
  { hour: "9 AM", label: "Daytime Phone Surge", totalCalls: 18, missedWithoutOllie: 7, capturedWithOllie: 18, scenario: "Office Phone Line Busy Overflow", value: "$7,800", details: "Front desk on another line; Ollie absorbed 7 concurrent calls simultaneously." },
  { hour: "12 PM", label: "Midday Field Work", totalCalls: 15, missedWithoutOllie: 9, capturedWithOllie: 15, scenario: "Techs Under Sinks & Driving Vans", value: "$9,200", details: "Plumbers hands-full with pipe wrenches; Ollie booked customers directly into CRM." },
  { hour: "3 PM", label: "Afternoon Jobs", totalCalls: 16, missedWithoutOllie: 10, capturedWithOllie: 16, scenario: "Techs On Steep Roofs With Harnesses", value: "$10,500", details: "HVAC tech replacing rooftop compressor; Ollie collected leak photos via SMS." },
  { hour: "6 PM", label: "Evening Shift", totalCalls: 13, missedWithoutOllie: 12, capturedWithOllie: 13, scenario: "Office Closed & Family Dinner", value: "$8,400", details: "Business owner at dinner; Ollie triaged urgent jobs and routed on-call crew." },
  { hour: "9 PM", label: "Night Emergencies", totalCalls: 8, missedWithoutOllie: 8, capturedWithOllie: 8, scenario: "Weekend Electrical & Sewer Backups", value: "$6,100", details: "High-dollar after-hours dispatch executed with pre-authorized digital quoting." }
];

interface LifecycleStageData {
  meta: string;
  title: string;
  desc: string;
  customerTitle: string;
  customerText: string;
  customerTelemetry: string;
  opsTitle: string;
  opsText: string;
  opsTelemetry: string;
}

const LIFECYCLE_STAGES: LifecycleStageData[] = [
  {
    meta: "STAGE 01 OF 06 · 11:42 PM · SUNDAY",
    title: "Emergency Inbound & Triage",
    desc: "Midnight burst pipe answered in 1.4 seconds with human warmth and safety triage.",
    customerTitle: "Immediate Calm & Shutoff Advice",
    customerText: "Homeowner Sarah is guided through turning the main shutoff valve 90 degrees while securing her emergency dispatch slot.",
    customerTelemetry: "Incoming text: “Your emergency service request #8912 is confirmed. Tech Carlos dispatched.”",
    opsTitle: "Instant Lead Capture & CRM Work Order",
    opsText: "Voice AI qualifies incident as P1 Emergency, checks the on-call schedule, and auto-generates the Work Order inside ServiceTitan.",
    opsTelemetry: "Telemetry: WO #8912 Created · P1 Urgent · 0-Second Delay"
  },
  {
    meta: "STAGE 02 OF 06 · 11:51 PM",
    title: "Intelligent Routing & Tech Context",
    desc: "Technician dispatched with gate code, turn-by-turn routing, and verified truck parts.",
    customerTitle: "Live Moving Map & Verified Tech ID",
    customerText: "Sarah receives an SMS tracking link showing Carlos’s photo, verified master license, and live truck GPS location.",
    customerTelemetry: "Customer message: “Carlos R. is en route in Truck 02. Verified Tech ID #TR-409 · Live ETA: 16 mins.”",
    opsTitle: "On-Call Route & Inventory Check",
    opsText: "System maps the quickest route avoiding roadwork and verifies press fittings are stocked on Truck 02 before arrival.",
    opsTelemetry: "Telemetry: Route = ON-CALL · Zone = A · Stock = VERIFIED"
  },
  {
    meta: "STAGE 03 OF 06 · 12:15 AM",
    title: "Multi-Option Digital Quoting",
    desc: "Transparent Good / Better / Best repair packages approved directly on customer's phone.",
    customerTitle: "Transparent 3-Option Repair Menu",
    customerText: "Sarah reviews clear Good / Better / Best packages with warranties on her phone and taps to approve with digital signature.",
    customerTelemetry: "Authorization status: SIGNED & APPROVED ($850.00)",
    opsTitle: "Protected Margin Enforcement",
    opsText: "Pricing engine enforces 62%+ gross profit target and overtime surcharges. Pre-authorized signature prevents billing disputes.",
    opsTelemetry: "Telemetry: Margin = 64.2% ENFORCED · Menu = AFTER-HOURS"
  },
  {
    meta: "STAGE 04 OF 06 · 1:22 AM",
    title: "Precision Work & Photo Proof",
    desc: "Ruptured valve replaced, pressure tested at 65 PSI, and work area photographed.",
    customerTitle: "Time-Stamped Before & After Inspection",
    customerText: "Sarah receives high-resolution photos of the new brass valve and confirmed pressure gauge test in her portal.",
    customerTelemetry: "Customer portal: 3 Inspection Photos Verified · Work Complete",
    opsTitle: "Zero Callback Quality Audit",
    opsText: "Technician completes 6-point digital inspection checklist and logs depleted fittings directly into inventory ledger.",
    opsTelemetry: "Telemetry: QA Audit = 6/6 PASSED · PSI = 65 · Callback Risk = LOW"
  },
  {
    meta: "STAGE 05 OF 06 · 1:35 AM",
    title: "Same-Night Tap-to-Pay Settlement",
    desc: "Paid in full via Apple Pay before technician drives away from the driveway.",
    customerTitle: "12-Second Apple Pay & Warranty Certificate",
    customerText: "Sarah settles the $850.00 invoice from her phone and receives an itemized PDF receipt and written 1-year warranty badge.",
    customerTelemetry: "Payment status: $850.00 SETTLED via Apple Pay",
    opsTitle: "Instant Direct Deposit & Zero Receivables",
    opsText: "Payment deposits directly into contractor merchant bank account. Work order marked paid in ServiceTitan. Zero 60-day aging invoices.",
    opsTelemetry: "Telemetry: PAYMENT = CAPTURED · DSO = 0 DAYS"
  },
  {
    meta: "STAGE 06 OF 06 · 7:00–8:30 AM",
    title: "5-Star Review & Morning Briefing",
    desc: "Overnight revenue banked into CRM, 5-star Google review posted, and morning summary ready.",
    customerTitle: "Friendly Morning Check-In & 1-Tap Review",
    customerText: "Sarah receives a polite morning text asking how the plumbing is holding up, with a direct 1-tap link to leave a 5-star review.",
    customerTelemetry: "Google Review: ★★★★★ 'Carlos saved our home at midnight!'",
    opsTitle: "7:00 AM Executive Morning Briefing",
    opsText: "Business owner wakes up to a clean email briefing: $850 captured, 1 tech dispatched, 0 owner interruptions, and money in the bank.",
    opsTelemetry: "Telemetry: BRIEFING = SENT · REVENUE = +$850 · OWNER WOKEN = 0"
  }
];

interface ReplayLine {
  time: string;
  speaker: 'Caller' | 'Ollie Voice' | 'Autonomous Dispatch';
  text: string;
}

const REPLAY_LINES: ReplayLine[] = [
  {
    time: "8:14:02 PM",
    speaker: "Caller",
    text: "“Hi... please tell me someone is working tonight! A pipe just burst upstairs and water is coming through the ceiling!”"
  },
  {
    time: "8:14:04 PM",
    speaker: "Ollie Voice",
    text: "“I'm right here with you. Take a breath. I’m dispatching our on-call technician right now. First, do you know where the main water shutoff is?”"
  },
  {
    time: "8:14:15 PM",
    speaker: "Caller",
    text: "“Yes — behind the water heater. I turned the valve perpendicular. The roaring stopped!”"
  },
  {
    time: "8:14:19 PM",
    speaker: "Ollie Voice",
    text: "“Great work. Water is off. I have Dave Miller 14 minutes away in Truck 04. I've locked him in for your emergency inspection.”"
  },
  {
    time: "8:14:36 PM",
    speaker: "Autonomous Dispatch",
    text: "Work order created in ServiceTitan. Dispatched via SMS to Dave Miller with customer notes, shutoff confirmation, and gate code #4192."
  }
];

export default function App() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [initialLeakAmount, setInitialLeakAmount] = useState<number | undefined>(undefined);

  // Lifecycle stage state
  const [currentStageIdx, setCurrentStageIdx] = useState<number>(0);
  const activeStage = LIFECYCLE_STAGES[currentStageIdx];

  // Calculator state
  const [selectedTrade, setSelectedTrade] = useState<string>("Plumbing & Drain");
  const [calls, setCalls] = useState<number>(80);
  const [ticket, setTicket] = useState<number>(2200);
  const [missRate, setMissRate] = useState<number>(28);
  const [recapRate, setRecapRate] = useState<number>(72);

  // Calculations
  const missDecimal = missRate / 100;
  const recapDecimal = recapRate / 100;
  const missedCallsMonth = calls * missDecimal;
  const monthlyLeaked = missedCallsMonth * ticket;
  const annualLeaked = monthlyLeaked * 12;
  const annualRecovered = annualLeaked * recapDecimal;
  const recoveredCallsMonth = missedCallsMonth * recapDecimal;
  const planCostMonth = 597;
  const opportunityMultiple = (annualRecovered / (planCostMonth * 12)).toFixed(1);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Replay Simulator state
  const [isPlayingReplay, setIsPlayingReplay] = useState<boolean>(false);
  const [replayIdx, setReplayIdx] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlayingReplay) {
      timer = setTimeout(() => {
        if (replayIdx < REPLAY_LINES.length - 1) {
          setReplayIdx(prev => prev + 1);
        } else {
          setIsPlayingReplay(false);
        }
      }, 1600);
    }
    return () => clearTimeout(timer);
  }, [isPlayingReplay, replayIdx]);

  const handleTogglePlay = () => {
    if (isPlayingReplay) {
      setIsPlayingReplay(false);
    } else {
      if (replayIdx >= REPLAY_LINES.length - 1) {
        setReplayIdx(0);
      }
      setIsPlayingReplay(true);
    }
  };

  // Interactive Graph State & Smooth Curve Geometry
  const [selectedGraphIdx, setSelectedGraphIdx] = useState<number>(4);

  // Theme State: 'dark' (Deep Dark Obsidian with Bright Accents), 'slate' (Medium Slate), 'light' (Soft Daylight)
  const [currentTheme, setCurrentTheme] = useState<'dark' | 'slate' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const graphPoints = HOURLY_GRAPH_DATA.map((item, idx) => {
    const x = 70 + idx * 100;
    const yCaptured = Math.round(205 - (item.totalCalls / 20) * 165);
    const yMissed = Math.round(205 - (item.missedWithoutOllie / 20) * 165);
    return { ...item, x, yCaptured, yMissed };
  });

  const generateCurvedPath = (pts: { x: number; y: number }[]) => {
    return pts.reduce((acc, pt, i, arr) => {
      if (i === 0) return `M ${pt.x},${pt.y}`;
      const prev = arr[i - 1];
      const cp1x = prev.x + (pt.x - prev.x) / 2;
      const cp1y = prev.y;
      const cp2x = prev.x + (pt.x - prev.x) / 2;
      const cp2y = pt.y;
      return `${acc} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${pt.x},${pt.y}`;
    }, '');
  };

  const capturedCurvePath = generateCurvedPath(graphPoints.map(p => ({ x: p.x, y: p.yCaptured })));
  const capturedAreaPath = `${capturedCurvePath} L ${graphPoints[graphPoints.length - 1].x},205 L ${graphPoints[0].x},205 Z`;

  const missedCurvePath = generateCurvedPath(graphPoints.map(p => ({ x: p.x, y: p.yMissed })));
  const missedAreaPath = `${missedCurvePath} L ${graphPoints[graphPoints.length - 1].x},205 L ${graphPoints[0].x},205 Z`;

  const activePoint = graphPoints[selectedGraphIdx];

  const handleOpenAuditModal = (customAmount?: number) => {
    if (customAmount) {
      setInitialLeakAmount(customAmount);
    } else {
      setInitialLeakAmount(Math.round(annualRecovered));
    }
    setAuditModalOpen(true);
  };

  return (
    <>
      {/* Header */}
      <header>
        <div className="wrap nav">
          <a className="brand" href="#">
            ollie<span className="brand-dot">.</span>
          </a>
          <nav className="navlinks">
            <a href="#scenarios">When Hands Are Tied</a>
            <a href="#start">Where We Start</a>
            <a href="#lifecycle">How It Works</a>
            <a href="#features">Capabilities</a>
            <a href="#calculator">ROI Calculator</a>
            <a href="#pricing">Pricing</a>
          </nav>

          {/* Color Palette Switcher */}
          <div className="themeSelector" role="group" aria-label="Theme Color Switcher">
            <button 
              type="button"
              className={`themeToggleBtn ${currentTheme === 'dark' ? 'active' : ''}`}
              onClick={() => setCurrentTheme('dark')}
              title="Deep Dark Obsidian Theme"
            >
              <span className="themeDot" style={{ background: '#fbbf24' }}></span>
              <span>Dark</span>
            </button>
            <button 
              type="button"
              className={`themeToggleBtn ${currentTheme === 'slate' ? 'active' : ''}`}
              onClick={() => setCurrentTheme('slate')}
              title="Medium Slate Theme"
            >
              <span className="themeDot" style={{ background: '#64748b' }}></span>
              <span>Slate</span>
            </button>
            <button 
              type="button"
              className={`themeToggleBtn ${currentTheme === 'light' ? 'active' : ''}`}
              onClick={() => setCurrentTheme('light')}
              title="Soft Daylight Theme"
            >
              <span className="themeDot" style={{ background: '#f8fafc', border: '1px solid #94a3b8' }}></span>
              <span>Light</span>
            </button>
          </div>

          <button 
            type="button"
            className="navbtn"
            onClick={() => handleOpenAuditModal()}
          >
            Free Revenue Audit ↗
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="wrap">
          <div className="heroGrid">
            <div>
              <div className="eyebrow">
              <span className="dot"></span> 24/7 Autonomous Call Capture &amp; Fleet Dispatch
            </div>
            <h1>
              Never miss a high-paying job<br />
              <span>when your hands are full.</span>
            </h1>
            <p className="heroLead">
              Whether your technician is 30 feet up on a steep roof, shoulder-deep under a sink, or you're finally away on family vacation — Ollie answers every call in 2 rings, books the work order into your CRM, and keeps your trucks rolling 24/7.
            </p>
            <div className="buttons">
              <button 
                type="button"
                className="btn primary" 
                onClick={() => handleOpenAuditModal()}
              >
                Audit My Lost Call Revenue →
              </button>
              <a className="btn" href="#replay">
                Watch Live Call Capture
              </a>
            </div>
            <div className="micro">
              Under sinks · On steep roofs · Driving vans · Busy office lines · Vacations · After-hours &amp; weekends
            </div>
            <div className="proof">
              <span><b>01</b> 100% Inbound Capture</span>
              <span><b>02</b> Hands-Free Dispatch</span>
              <span><b>03</b> Direct Banked Revenue</span>
            </div>
          </div>

          <div className="console">
            <div className="consoleTop">
              <div>
                <div className="consoleTitle">OLLIE / 24/7 AUTONOMOUS FLEET BACKUP</div>
                <div className="micro">Live operational concept · daytime field &amp; after-hours telemetry</div>
              </div>
              <div className="live">● 24/7 SYSTEM ACTIVE</div>
            </div>

            <div className="kpis">
              <div className="kpi">
                <span>INBOUND</span>
                <strong>24</strong>
                <small>Today</small>
              </div>
              <div className="kpi">
                <span>QUALIFIED</span>
                <strong>11</strong>
                <small>Leads</small>
              </div>
              <div className="kpi">
                <span>DISPATCHED</span>
                <strong>06</strong>
                <small>Jobs</small>
              </div>
              <div className="kpi">
                <span>CAPTURED</span>
                <strong>$7.4k</strong>
                <small>Booked</small>
              </div>
            </div>

            <div className="consoleGrid">
              <div className="box">
                <div className="boxTitle">Live dispatch feed</div>
                <div className="event">
                  <div className="icon">↗</div>
                  <div>
                    <b>Water line emergency</b>
                    <span>1:14 PM · Tech under sink · Elm Ridge</span>
                  </div>
                  <em className="badge">DISPATCHED TO BACKUP</em>
                </div>
                <div className="event">
                  <div className="icon">◷</div>
                  <div>
                    <b>AC condenser outage</b>
                    <span>11:28 AM · Tech on 2-story roof</span>
                  </div>
                  <em className="badge">AUTO-BOOKED</em>
                </div>
                <div className="event">
                  <div className="icon">＋</div>
                  <div>
                    <b>After-hours burst pipe</b>
                    <span>11:42 PM · Owner on family dinner</span>
                  </div>
                  <em className="badge amber">EMERGENCY TRIAGED</em>
                </div>
                <div className="feed">
                  13:14:02 <em>FIELD</em> tech=BUSY intent=URGENT<br />
                  13:14:05 <em>CRM</em> WO#9041 created in ServiceTitan<br />
                  13:14:08 <em>SMS</em> homeowner confirmed appointment
                </div>
              </div>

              <div className="box">
                <div className="boxTitle">Fleet availability telemetry</div>
                <div className="metric">
                  <div className="metricHead">
                    <span>Field &amp; After-Hours Pickup (&lt; 2 rings)</span>
                    <b>99.4%</b>
                  </div>
                  <div className="track"><i style={{ width: '99.4%' }}></i></div>
                </div>
                <div className="metric">
                  <div className="metricHead">
                    <span>Under-Sink &amp; Roof Overflow Capture</span>
                    <b>100%</b>
                  </div>
                  <div className="track"><i style={{ width: '100%' }}></i></div>
                </div>
                <div className="metric">
                  <div className="metricHead">
                    <span>Jobs Synced to CRM</span>
                    <b>100%</b>
                  </div>
                  <div className="track"><i style={{ width: '100%' }}></i></div>
                </div>
                <div className="metric">
                  <div className="metricHead">
                    <span>Morning Executive Debrief</span>
                    <b>07:00 AM</b>
                  </div>
                  <div className="track"><i style={{ width: '100%' }}></i></div>
                </div>
                <p className="micro">Live operational data synced to ServiceTitan &amp; Housecall Pro.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Fleet Visual Showcase Banner */}
        <div className="heroFleetBanner">
            <img 
              src={heroFleetImg} 
              alt="Professional contractor service vehicles ready for 24/7 autonomous dispatch" 
              referrerPolicy="no-referrer"
            />
            <div className="heroFleetOverlay">
              <div>
                <div style={{ color: 'var(--yellow)', fontSize: '11px', fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  ● Autonomous Fleet Telemetry
                </div>
                <div style={{ fontSize: '20px', fontWeight: 900, color: '#f7f7f9' }}>
                  Active Coverage for Service Trucks 01 through 16
                </div>
                <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--silver)' }}>
                  Continuous dispatch backup across day-shift job site overflow, vacations, and overnight emergencies.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <div style={{ background: 'rgba(23, 24, 28, 0.88)', border: '1px solid var(--line)', padding: '8px 14px', borderRadius: '10px', fontSize: '11px', fontWeight: 800, color: '#f7f7f9', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: 'var(--yellow)', fontSize: '13px' }}>⚡ 1.4s</span> Pickup Speed
                </div>
                <div style={{ background: 'rgba(23, 24, 28, 0.88)', border: '1px solid var(--line)', padding: '8px 14px', borderRadius: '10px', fontSize: '11px', fontWeight: 800, color: '#f7f7f9', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: 'var(--yellow)', fontSize: '13px' }}>✓ 100%</span> CRM Sync
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <div className="trust">
        <div className="wrap trustrow">
          <span>PLUMBING &amp; DRAIN</span>
          <span>HVAC &amp; REFRIGERATION</span>
          <span>ELECTRICAL FLEETS</span>
          <span>ROOFING &amp; RESTORATION</span>
          <span>COMMERCIAL SERVICE</span>
        </div>
      </div>

      {/* Real-World Field & Vacation Scenarios */}
      <section id="scenarios">
        <div className="wrap">
          <div className="head">
            <div className="eyebrow">
              <span className="dot"></span> Built For The Reality Of Trade Life
            </div>
            <h2>Never Lose A Customer When Your Hands Are Tied.</h2>
            <p>
              Trade pros don’t sit in front of computer screens all day. Whether your technician is shoulder-deep under a cast-iron sink, balancing on a 2-story roof, or you're finally taking your family on vacation — Ollie ensures zero calls slip through the cracks.
            </p>
          </div>

          <div className="scenariosGrid">
            {/* Scenario 1: Under a sink */}
            <div className="scenarioCard">
              <div>
                <img 
                  src={scenarioUnderSinkImg} 
                  alt="Plumbing technician with pipe wrench working under kitchen sink" 
                  className="scenarioCardImg" 
                  referrerPolicy="no-referrer"
                />
                <div className="scenarioIcon">
                  <Wrench style={{ width: '22px', height: '22px' }} />
                </div>
                <span className="scenarioBadge">Under A Sink · Hands Full</span>
                <h3>Shoulder-Deep With A Pipe Wrench</h3>
                <p className="scenarioProblem">
                  Hands are covered in pipe dope and dirty water. If you stop to dig out a ringing phone, the repair slips. If you ignore it, an $1,800 water heater replacement hangs up and hires the next contractor on Google.
                </p>
              </div>

              <div className="scenarioFix">
                <b>✓ The Ollie Fix:</b>
                Rings twice, rolls to Ollie. The homeowner is warmly greeted with your custom company greeting, triaged for emergency vs routine, and booked into your CRM while you finish the job.
              </div>
            </div>

            {/* Scenario 2: On a roof */}
            <div className="scenarioCard">
              <div>
                <img 
                  src={scenarioRoofWorkerImg} 
                  alt="HVAC technician on steep roof with safety harness" 
                  className="scenarioCardImg" 
                  referrerPolicy="no-referrer"
                />
                <div className="scenarioIcon">
                  <AlertTriangle style={{ width: '22px', height: '22px' }} />
                </div>
                <span className="scenarioBadge">Up On A Roof · Safety Priority</span>
                <h3>30 Feet Up On A Steep Pitch With Tools</h3>
                <p className="scenarioProblem">
                  Strapped into a safety harness replacing shingles or troubleshooting a rooftop compressor in 95-degree heat. Reaching for a smartphone on a roof is dangerous, unprofessional, and breaks OSHA safety rules.
                </p>
              </div>

              <div className="scenarioFix">
                <b>✓ The Ollie Fix:</b>
                Ollie answers in 1.4 seconds, collects storm or leak details, requests homeowner photos via SMS, and places the work order on your dispatch board ready for inspection.
              </div>
            </div>

            {/* Scenario 3: On vacation */}
            <div className="scenarioCard">
              <div>
                <img 
                  src={scenarioVacationFreedomImg} 
                  alt="Craftsman relaxing on vacation with family" 
                  className="scenarioCardImg" 
                  referrerPolicy="no-referrer"
                />
                <div className="scenarioIcon">
                  <Umbrella style={{ width: '22px', height: '22px' }} />
                </div>
                <span className="scenarioBadge">Away On Vacation · Total Freedom</span>
                <h3>At The Beach Or Coaching Little League</h3>
                <p className="scenarioProblem">
                  Every trade business owner dreads taking time off. Fielding emergency calls from the dinner table or letting thousands in weekend revenue rot in voicemail while you're trying to unwind with family.
                </p>
              </div>

              <div className="scenarioFix">
                <b>✓ The Ollie Fix:</b>
                Full autonomous dispatch autopilot. Ollie screens out spam, routes real emergency calls to your on-call crew, and lets you enjoy your family in complete peace.
              </div>
            </div>

            {/* Scenario 4: Busy lines & after 5 PM */}
            <div className="scenarioCard">
              <div>
                <div style={{ background: 'var(--bg2)', border: '1px solid var(--line)', borderRadius: '12px', padding: '12px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '10px', color: '#9da0aa', fontWeight: 800, textTransform: 'uppercase' }}>Line Switchboard</span>
                    <span style={{ fontSize: '9px', color: 'var(--yellow)', fontWeight: 800, background: 'rgba(254, 218, 106, 0.12)', padding: '2px 6px', borderRadius: '99px' }}>● 100% CAPTURE</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px' }}>
                    <div style={{ background: 'rgba(255, 136, 126, 0.1)', border: '1px solid rgba(255, 136, 126, 0.3)', borderRadius: '6px', padding: '6px 8px', fontSize: '10px', color: '#ff887e', fontWeight: 700 }}>
                      Line 1: Front Desk BUSY
                    </div>
                    <div style={{ background: 'rgba(254, 218, 106, 0.1)', border: '1px solid rgba(254, 218, 106, 0.3)', borderRadius: '6px', padding: '6px 8px', fontSize: '10px', color: 'var(--yellow)', fontWeight: 700 }}>
                      Line 2: Ollie BOOKED
                    </div>
                    <div style={{ background: 'rgba(254, 218, 106, 0.1)', border: '1px solid rgba(254, 218, 106, 0.3)', borderRadius: '6px', padding: '6px 8px', fontSize: '10px', color: 'var(--yellow)', fontWeight: 700 }}>
                      Line 3: Ollie TRIAGED
                    </div>
                    <div style={{ background: 'rgba(254, 218, 106, 0.1)', border: '1px solid rgba(254, 218, 106, 0.3)', borderRadius: '6px', padding: '6px 8px', fontSize: '10px', color: 'var(--yellow)', fontWeight: 700 }}>
                      Line 4: Ollie EN ROUTE
                    </div>
                  </div>
                </div>

                <div className="scenarioIcon">
                  <PhoneForwarded style={{ width: '22px', height: '22px' }} />
                </div>
                <span className="scenarioBadge">Peak Surges &amp; After-Hours</span>
                <h3>Front Desk On Another Line Or Closed</h3>
                <p className="scenarioProblem">
                  A weather freeze hits or 3 calls ring simultaneously. Your front desk can only handle one. Callers 2 and 3 get a busy signal and leave. At 5:01 PM, all lines go completely dark.
                </p>
              </div>

              <div className="scenarioFix">
                <b>✓ The Ollie Fix:</b>
                Unlimited simultaneous call capacity. Ollie absorbs daytime surges and operates your entire after-hours emergency shift 24/7/365 with zero per-minute fees.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Start Section */}
      <section id="start">
        <div className="wrap">
          <div className="head">
            <div className="eyebrow">
              <span className="dot"></span> Clear Operational Roadmap
            </div>
            <h2>Where We Start — And Where We Go Next.</h2>
            <p>
              You don’t have to overhaul your operations or force your crew to learn complicated software. Here is the seamless 3-stage journey from Day 1 setup to morning revenue.
            </p>
          </div>

          <div className="timeline">
            {/* Stage 1 */}
            <div className="stageCard">
              <div>
                <div className="stageCardTop">
                  <div className="stageNumberBadge">01</div>
                  <span className="stageTimelineTag">Day 1: Setup</span>
                </div>
                <h3>15-Minute Plug &amp; Play Setup</h3>
                <p className="stageCardSubtitle">
                  Zero apps for your crew to learn. Zero operational disruption.
                </p>

                <div className="stageItemsList">
                  <div>
                    <div className="stageItemTitle">
                      <Check style={{ width: '15px', height: '15px', color: 'var(--yellow)' }} />
                      <span>Forward Your After-Hours Line</span>
                    </div>
                    <p className="stageItemText">
                      Simply forward your existing office phone number to Ollie whenever you clock out (5 PM, weekends, or holidays).
                    </p>
                  </div>

                  <div>
                    <div className="stageItemTitle">
                      <Check style={{ width: '15px', height: '15px', color: 'var(--yellow)' }} />
                      <span>Connect Your Existing CRM</span>
                    </div>
                    <p className="stageItemText">
                      Native one-click sync with ServiceTitan, Housecall Pro, Jobber, FieldEdge, or custom dispatch boards.
                    </p>
                  </div>

                  <div>
                    <div className="stageItemTitle">
                      <Check style={{ width: '15px', height: '15px', color: 'var(--yellow)' }} />
                      <span>Set Your Custom On-Call Rules</span>
                    </div>
                    <p className="stageItemText">
                      Define your emergency triage criteria, technician rotations, overtime rates, and escalation thresholds.
                    </p>
                  </div>
                </div>
              </div>

              <div className="stageOutcomeBox">
                <b style={{ color: 'var(--yellow)', display: 'block', marginBottom: '2px' }}>✓ Day 1 Outcome:</b>
                Your autonomous 2nd shift goes live tonight. Your evenings are officially protected.
              </div>
            </div>

            {/* Stage 2 */}
            <div className="stageCard">
              <div>
                <div className="stageCardTop">
                  <div className="stageNumberBadge">02</div>
                  <span className="stageTimelineTag">Night 1: Live Execution</span>
                </div>
                <h3>Autonomous Midnight Execution</h3>
                <p className="stageCardSubtitle">
                  Every call answered in 2 rings. Panicked homeowners calmed &amp; booked.
                </p>

                <div className="stageItemsList">
                  <div>
                    <div className="stageItemTitle">
                      <Check style={{ width: '15px', height: '15px', color: 'var(--yellow)' }} />
                      <span>1.4-Second Emergency Triage</span>
                    </div>
                    <p className="stageItemText">
                      Ollie answers with human warmth and guides callers through main water or gas shutoffs while locking their slot.
                    </p>
                  </div>

                  <div>
                    <div className="stageItemTitle">
                      <Check style={{ width: '15px', height: '15px', color: 'var(--yellow)' }} />
                      <span>On-Call Tech SMS Dispatch</span>
                    </div>
                    <p className="stageItemText">
                      Auto-creates the CRM Work Order and pings your on-call technician with address, gate code, and verified parts.
                    </p>
                  </div>

                  <div>
                    <div className="stageItemTitle">
                      <Check style={{ width: '15px', height: '15px', color: 'var(--yellow)' }} />
                      <span>Digital 3-Tier Quoting</span>
                    </div>
                    <p className="stageItemText">
                      Presents Good / Better / Best repair packages approved directly on the customer’s phone with locked margins.
                    </p>
                  </div>
                </div>
              </div>

              <div className="stageOutcomeBox">
                <b style={{ color: 'var(--yellow)', display: 'block', marginBottom: '2px' }}>✓ Night 1 Outcome:</b>
                Tech rolls with verified parts. Owner sleeps completely uninterrupted.
              </div>
            </div>

            {/* Stage 3 */}
            <div className="stageCard">
              <div>
                <div className="stageCardTop">
                  <div className="stageNumberBadge">03</div>
                  <span className="stageTimelineTag">Day 2+: Morning Payoff</span>
                </div>
                <h3>Morning Cash, Reviews &amp; Growth</h3>
                <p className="stageCardSubtitle">
                  Zero accounts receivable aging. Automated Google 5-star reputation.
                </p>

                <div className="stageItemsList">
                  <div>
                    <div className="stageItemTitle">
                      <Check style={{ width: '15px', height: '15px', color: 'var(--yellow)' }} />
                      <span>Same-Night Tap-to-Pay</span>
                    </div>
                    <p className="stageItemText">
                      Customer pays via Apple Pay or card on-site before tech leaves. Cash deposits directly into your merchant bank account.
                    </p>
                  </div>

                  <div>
                    <div className="stageItemTitle">
                      <Check style={{ width: '15px', height: '15px', color: 'var(--yellow)' }} />
                      <span>Automated 5-Star Review Cadence</span>
                    </div>
                    <p className="stageItemText">
                      8:30 AM polite follow-up deep-links satisfied homeowners directly to your Google Business Profile for reviews.
                    </p>
                  </div>

                  <div>
                    <div className="stageItemTitle">
                      <Check style={{ width: '15px', height: '15px', color: 'var(--yellow)' }} />
                      <span>7:00 AM Executive Briefing</span>
                    </div>
                    <p className="stageItemText">
                      Concise morning briefing in your inbox summarizing revenue captured, technician hours, and auto-booked tune-ups.
                    </p>
                  </div>
                </div>
              </div>

              <div className="stageOutcomeBox">
                <b style={{ color: 'var(--yellow)', display: 'block', marginBottom: '2px' }}>✓ Ongoing Outcome:</b>
                Zero uncollected emergency invoices and compounding #1 local Google Maps ranking.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Synchronized Service Lifecycle */}
      <section className="dark" id="lifecycle">
        <div className="wrap">
          <div className="head">
            <div className="eyebrow">
              <span className="dot"></span> Synchronized Service Lifecycle
            </div>
            <h2>How The Entire Call Runs On Both Sides Of The Glass.</h2>
            <p>
              An emergency call isn't just answering a phone. It is a synchronized chain of triage, technician routing, digital quoting, payment, and reputation. See how Ollie coordinates both sides.
            </p>
          </div>

          <div className="lifecycleContainer">
            {/* Horizontal Stage Stepper Tabs */}
            <div className="lifecycleStepper">
              {LIFECYCLE_STAGES.map((stage, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`lifecycleTabBtn ${currentStageIdx === idx ? 'active' : ''}`}
                  onClick={() => setCurrentStageIdx(idx)}
                >
                  <span className="tabNum">0{idx + 1}</span>
                  <span className="tabLabel">{stage.title}</span>
                </button>
              ))}
            </div>

            {/* Lifecycle Detail Panel */}
            <div className="lifecyclePanelWrapper">
              <div className="lifecyclePanelHeader">
                <div>
                  <div className="lifecycleStageMeta">{activeStage.meta}</div>
                  <h3 className="lifecyclePanelTitle">{activeStage.title}</h3>
                  <p style={{ margin: 0, color: 'var(--muted)', fontSize: '14px' }}>{activeStage.desc}</p>
                </div>
                <div style={{ background: 'rgba(254, 218, 106, 0.12)', border: '1px solid rgba(254, 218, 106, 0.3)', padding: '8px 14px', borderRadius: '10px', fontSize: '11px', fontWeight: 800, color: 'var(--yellow)' }}>
                  Autonomous 2nd Shift Execution
                </div>
              </div>

              <div className="lifecycleDualCards">
                {/* Left: Customer Experience */}
                <div className="perspectiveCard">
                  <div>
                    <div className="perspectiveCardHeader">
                      <span className="perspectiveBadge customer">
                        Customer Smartphone
                      </span>
                      <span style={{ fontSize: '10px', color: '#8dc8ff', fontWeight: 700 }}>
                        Live Homeowner Portal
                      </span>
                    </div>

                    <h4 className="perspectiveTitle">{activeStage.customerTitle}</h4>
                    <p className="perspectiveText">{activeStage.customerText}</p>
                  </div>

                  <div className="perspectiveTelemetryBox">
                    <span style={{ color: '#8dc8ff', display: 'block', fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                      Incoming SMS Notification:
                    </span>
                    {activeStage.customerTelemetry}
                  </div>
                </div>

                {/* Right: Contractor Operations */}
                <div className="perspectiveCard">
                  <div>
                    <div className="perspectiveCardHeader">
                      <span className="perspectiveBadge contractor">
                        Contractor Operations
                      </span>
                      <span style={{ fontSize: '10px', color: 'var(--yellow)', fontWeight: 700 }}>
                        CRM Dispatch Sync
                      </span>
                    </div>

                    <h4 className="perspectiveTitle">{activeStage.opsTitle}</h4>
                    <p className="perspectiveText">{activeStage.opsText}</p>
                  </div>

                  <div className="perspectiveTelemetryBox">
                    <span style={{ color: 'var(--yellow)', display: 'block', fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                      System Telemetry Stream:
                    </span>
                    {activeStage.opsTelemetry}
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="lifecycleControlsBar">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setCurrentStageIdx(prev => Math.max(0, prev - 1))}
                  disabled={currentStageIdx === 0}
                  style={{ opacity: currentStageIdx === 0 ? 0.4 : 1 }}
                >
                  ← Previous Stage
                </button>
                <span className="micro" style={{ fontWeight: 800, color: 'var(--silver)' }}>
                  STAGE {currentStageIdx + 1} OF 6
                </span>
                <button
                  type="button"
                  className="btn primary"
                  onClick={() => setCurrentStageIdx(prev => Math.min(5, prev + 1))}
                  disabled={currentStageIdx === 5}
                  style={{ opacity: currentStageIdx === 5 ? 0.4 : 1 }}
                >
                  Next Stage →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="features">
        <div className="wrap">
          <div className="head">
            <div className="eyebrow">
              <span className="dot"></span> Complete Operational Suite
            </div>
            <h2>Everything Your 2nd Shift Needs To Capture Revenue Autonomously.</h2>
            <p>
              Engineered specifically for how US plumbing, HVAC, and electrical fleets operate. Dependable, quiet, and designed to capture high-margin after-hours work.
            </p>
          </div>

          <div className="featuresGrid">
            {/* Card 1 */}
            <div className="capabilityCard">
              <div className="capabilityIconWrap">
                <PhoneCall style={{ width: '20px', height: '20px' }} />
              </div>
              <div>
                <h3>Emergency Voice Triage &amp; Intake</h3>
                <p>Answers inbound calls in 2 rings with human empathy, guides panicked callers through water/gas shutoffs, and filters out non-emergencies for 8:00 AM tomorrow.</p>
                <div className="capabilityCardTag">
                  <Check style={{ width: '13px', height: '13px' }} />
                  <span>Sub-2s connection · Ring 1 pickup</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="capabilityCard">
              <div className="capabilityIconWrap">
                <Navigation style={{ width: '20px', height: '20px' }} />
              </div>
              <div>
                <h3>Autonomous On-Call Dispatch &amp; CRM Sync</h3>
                <p>Creates Work Orders directly inside ServiceTitan, Housecall Pro, or Jobber and dispatches your on-call technician via SMS with turn-by-turn routing and gate codes.</p>
                <div className="capabilityCardTag">
                  <Check style={{ width: '13px', height: '13px' }} />
                  <span>Zero new apps for technicians to learn</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="capabilityCard">
              <div className="capabilityIconWrap">
                <CreditCard style={{ width: '20px', height: '20px' }} />
              </div>
              <div>
                <h3>Protected Margins &amp; Digital Quoting</h3>
                <p>Technicians present clear Good / Better / Best repair packages directly to the homeowner’s smartphone. Pre-authorized digital signatures protect your 62%+ target margin.</p>
                <div className="capabilityCardTag">
                  <Check style={{ width: '13px', height: '13px' }} />
                  <span>Enforces after-hours overtime menus</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="capabilityCard">
              <div className="capabilityIconWrap">
                <Sparkles style={{ width: '20px', height: '20px' }} />
              </div>
              <div>
                <h3>Same-Night Tap-to-Pay Settlement</h3>
                <p>Homeowners pay via Apple Pay, Google Pay, or card on-site before the technician drives away. Direct merchant deposit with zero 60-day accounts receivable aging.</p>
                <div className="capabilityCardTag">
                  <Check style={{ width: '13px', height: '13px' }} />
                  <span>0 Days Sales Outstanding (DSO)</span>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="capabilityCard">
              <div className="capabilityIconWrap">
                <Wrench style={{ width: '20px', height: '20px' }} />
              </div>
              <div>
                <h3>Parts Pre-Check &amp; Field Context</h3>
                <p>Matches reported issues against truck inventory before rolling, ensuring technicians arrive with universal fittings and capacitors to eliminate costly return trips.</p>
                <div className="capabilityCardTag">
                  <Check style={{ width: '13px', height: '13px' }} />
                  <span>Reduces secondary truck trips by 88%</span>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="capabilityCard">
              <div className="capabilityIconWrap">
                <Clock style={{ width: '20px', height: '20px' }} />
              </div>
              <div>
                <h3>7:00 AM Executive Morning Briefing</h3>
                <p>Receive a concise executive email in your inbox while drinking your coffee: calls answered, tickets booked, revenue banked, and technician hours logged.</p>
                <div className="capabilityCardTag">
                  <Check style={{ width: '13px', height: '13px' }} />
                  <span>Delivered at 7:00 AM every morning</span>
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="capabilityCard">
              <div className="capabilityIconWrap">
                <Truck style={{ width: '20px', height: '20px' }} />
              </div>
              <div>
                <h3>Multi-Tech Rotation &amp; Zone Routing</h3>
                <p>Supports multi-crew weekend rotations, primary vs. secondary on-call escalation, and territory-based dispatch across multiple hubs or metro zones.</p>
                <div className="capabilityCardTag">
                  <Check style={{ width: '13px', height: '13px' }} />
                  <span>All-inclusive in the $597/mo plan</span>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="capabilityCard">
              <div className="capabilityIconWrap">
                <Star style={{ width: '20px', height: '20px' }} />
              </div>
              <div>
                <h3>Commercial &amp; VIP Priority Trees</h3>
                <p>Configurable priority escalation rules for commercial accounts, restaurant managers, and VIP property clients with direct bridge lines to designated managers.</p>
                <div className="capabilityCardTag">
                  <Check style={{ width: '13px', height: '13px' }} />
                  <span>All-inclusive in the $597/mo plan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Calculator */}
      <section className="dark" id="calculator">
        <div className="wrap">
          <div className="head">
            <div className="eyebrow">
              <span className="dot"></span> Interactive Financial Model
            </div>
            <h2>Calculate Your Missed Call Revenue Leakage.</h2>
            <p>
              Adjust the sliders below to mirror your fleet size, average ticket price, and missed call rate — including calls missed while under a sink, working on a roof, on vacation, or after hours.
            </p>
          </div>

          <div className="calcGrid">
            <div className="calcPanel">
              <div className="field">
                <label>
                  <span>Fleet Type</span>
                  <b>{selectedTrade}</b>
                </label>
                <div className="quick">
                  {["Plumbing & Drain", "HVAC & Refrigeration", "Electrical Fleet", "Roofing & Restoration"].map(trade => (
                    <button
                      key={trade}
                      type="button"
                      className={selectedTrade === trade ? 'active' : ''}
                      onClick={() => {
                        setSelectedTrade(trade);
                        if (trade === "Plumbing & Drain") { setCalls(80); setTicket(1450); setMissRate(26); }
                        else if (trade === "HVAC & Refrigeration") { setCalls(75); setTicket(3200); setMissRate(30); }
                        else if (trade === "Electrical Fleet") { setCalls(85); setTicket(1850); setMissRate(24); }
                        else if (trade === "Roofing & Restoration") { setCalls(45); setTicket(7500); setMissRate(32); }
                      }}
                    >
                      {trade}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field">
                <label>
                  <span>Monthly Inbound Calls &amp; Requests</span>
                  <b>{calls} calls / mo</b>
                </label>
                <input
                  type="range"
                  min="20"
                  max="500"
                  value={calls}
                  step="5"
                  onChange={e => setCalls(Number(e.target.value))}
                />
              </div>

              <div className="field">
                <label>
                  <span>Average Ticket / Job Value</span>
                  <b>{formatCurrency(ticket)}</b>
                </label>
                <input
                  type="range"
                  min="400"
                  max="10000"
                  value={ticket}
                  step="50"
                  onChange={e => setTicket(Number(e.target.value))}
                />
              </div>

              <div className="field">
                <label>
                  <span>Missed Call Rate (Field Hands-Full &amp; After-Hours)</span>
                  <b>{missRate}%</b>
                </label>
                <input
                  type="range"
                  min="5"
                  max="80"
                  value={missRate}
                  onChange={e => setMissRate(Number(e.target.value))}
                />
              </div>

              <div className="field">
                <label>
                  <span>Ollie Capture Efficiency</span>
                  <b>{recapRate}%</b>
                </label>
                <input
                  type="range"
                  min="10"
                  max="95"
                  value={recapRate}
                  onChange={e => setRecapRate(Number(e.target.value))}
                />
              </div>

              <div className="micro" style={{ marginTop: '14px', lineHeight: 1.6 }}>
                💡 <b>Industry Baseline:</b> 84% of callers who reach voicemail (because a tech is under a sink, on a roof, or it's after hours) hang up immediately and hire the next contractor on Google Maps.
              </div>
            </div>

            <div className="resultPanel">
              <div className="resultHero">
                <span>ESTIMATED ANNUAL REVENUE RECOVERY</span>
                <strong>{formatCurrency(annualRecovered)}</strong>
              </div>

              <div className="resultGrid">
                <div className="resultCell">
                  <span>Monthly Leaked Revenue</span>
                  <b>{formatCurrency(monthlyLeaked)}</b>
                </div>
                <div className="resultCell">
                  <span>Annual Lost Demand</span>
                  <b>{formatCurrency(annualLeaked)}</b>
                </div>
                <div className="resultCell">
                  <span>Missed Calls / Mo</span>
                  <b>{missedCallsMonth.toFixed(1)} calls</b>
                </div>
                <div className="resultCell">
                  <span>Recovered Jobs / Mo</span>
                  <b>{recoveredCallsMonth.toFixed(1)} jobs</b>
                </div>
                <div className="resultCell">
                  <span>All-Inclusive Plan</span>
                  <b style={{ color: 'var(--yellow)' }}>$597 / mo</b>
                </div>
                <div className="resultCell">
                  <span>Modeled ROI Multiple</span>
                  <b style={{ color: 'var(--yellow)' }}>{opportunityMultiple}×</b>
                </div>
              </div>

              <div style={{ marginTop: '22px' }}>
                <button
                  type="button"
                  className="btn primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '15px 20px', fontSize: '13px' }}
                  onClick={() => handleOpenAuditModal(Math.round(annualRecovered))}
                >
                  Recapture This {formatCurrency(annualRecovered)} for $597/mo →
                </button>
              </div>

              <div className="micro" style={{ textAlign: 'center', marginTop: '10px' }}>
                100% confidential · 15-minute call log audit · Zero obligation
              </div>
            </div>
          </div>

          {/* Interactive 24-Hour Call & Revenue Distribution Graph */}
          <div className="graphSectionCard">
            <div className="graphHeader">
              <div>
                <div style={{ color: 'var(--yellow)', fontSize: '11px', fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  ● 24-Hour Fleet Dispatch Telemetry &amp; Revenue Curve
                </div>
                <h3 className="graphTitle">
                  Where Your Calls Come In — And Where You Leak Revenue
                </h3>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)' }}>
                  Click any time block below to inspect field hands-full overflow vs. after-hours emergencies.
                </p>
              </div>

              <div className="graphLegend">
                <div className="graphLegendItem">
                  <span className="graphDot" style={{ background: '#ff887e' }}></span>
                  <span style={{ color: 'var(--silver)' }}>Voicemail Drop-Offs (Without Ollie)</span>
                </div>
                <div className="graphLegendItem">
                  <span className="graphDot" style={{ background: 'var(--yellow)' }}></span>
                  <span style={{ color: '#f7f7f9' }}>100% Recaptured by Ollie</span>
                </div>
              </div>
            </div>

            {/* Interactive SVG Line and Area Graph */}
            <div className="curveGraphContainer">
              <div style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                <svg
                  viewBox="0 0 840 250"
                  className="graphSvgWrap"
                  style={{ minWidth: '600px', display: 'block' }}
                >
                  <defs>
                    <linearGradient id="capturedCurveGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#feda6a" stopOpacity="0.32" />
                      <stop offset="85%" stopColor="#feda6a" stopOpacity="0.04" />
                      <stop offset="100%" stopColor="#feda6a" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="missedCurveGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff887e" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#ff887e" stopOpacity="0" />
                    </linearGradient>
                    <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#feda6a" floodOpacity="0.6" />
                    </filter>
                  </defs>

                  {/* Horizontal Gridlines & Y-Axis Scale */}
                  {[
                    { label: '20 calls', y: 40 },
                    { label: '15 calls', y: 81 },
                    { label: '10 calls', y: 122 },
                    { label: '5 calls', y: 164 },
                    { label: '0 calls', y: 205 }
                  ].map((grid, i) => (
                    <g key={i}>
                      <line
                        x1="65"
                        y1={grid.y}
                        x2="775"
                        y2={grid.y}
                        stroke="rgba(212, 212, 220, 0.08)"
                        strokeDasharray={i === 4 ? 'none' : '4 4'}
                        strokeWidth="1"
                      />
                      <text
                        x="55"
                        y={grid.y + 3}
                        textAnchor="end"
                        fill="#767985"
                        fontSize="10"
                        fontWeight="700"
                        fontFamily="monospace"
                      >
                        {grid.label}
                      </text>
                    </g>
                  ))}

                  {/* Shaded Area Paths */}
                  <path d={missedAreaPath} fill="url(#missedCurveGrad)" />
                  <path d={capturedAreaPath} fill="url(#capturedCurveGrad)" />

                  {/* Curves */}
                  <path
                    d={missedCurvePath}
                    fill="none"
                    stroke="#ff887e"
                    strokeWidth="2.5"
                    strokeDasharray="5 5"
                    opacity="0.85"
                  />
                  <path
                    d={capturedCurvePath}
                    fill="none"
                    stroke="#feda6a"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Vertical Guideline at Selected Point */}
                  <line
                    x1={activePoint.x}
                    y1="30"
                    x2={activePoint.x}
                    y2="205"
                    stroke="rgba(254, 218, 106, 0.45)"
                    strokeDasharray="3 3"
                    strokeWidth="1.5"
                  />

                  {/* Interactive Nodes along the curve */}
                  {graphPoints.map((pt, i) => {
                    const isSelected = selectedGraphIdx === i;
                    return (
                      <g key={i} onClick={() => setSelectedGraphIdx(i)} style={{ cursor: 'pointer' }}>
                        {/* Invisible enlarged hit area */}
                        <circle cx={pt.x} cy={pt.yCaptured} r="26" fill="transparent" />

                        {/* Missed line node */}
                        <circle
                          cx={pt.x}
                          cy={pt.yMissed}
                          r={isSelected ? 5 : 3.5}
                          fill="#ff887e"
                          stroke="#17181c"
                          strokeWidth="1.5"
                        />

                        {/* Captured line node */}
                        {isSelected && (
                          <circle
                            cx={pt.x}
                            cy={pt.yCaptured}
                            r="11"
                            fill="rgba(254, 218, 106, 0.2)"
                            stroke="rgba(254, 218, 106, 0.5)"
                            strokeWidth="1"
                          />
                        )}
                        <circle
                          cx={pt.x}
                          cy={pt.yCaptured}
                          r={isSelected ? 7 : 5}
                          fill={isSelected ? '#feda6a' : '#232630'}
                          stroke="#feda6a"
                          strokeWidth="2.5"
                          filter={isSelected ? 'url(#nodeGlow)' : 'none'}
                        />

                        {/* Node Value Label on selected */}
                        {isSelected && (
                          <g transform={`translate(${pt.x}, ${Math.max(22, pt.yCaptured - 32)})`}>
                            <rect
                              x="-56"
                              y="-11"
                              width="112"
                              height="22"
                              rx="6"
                              fill="#2c303d"
                              stroke="#feda6a"
                              strokeWidth="1.2"
                            />
                            <text
                              x="0"
                              y="4"
                              textAnchor="middle"
                              fill="#feda6a"
                              fontSize="10"
                              fontWeight="800"
                            >
                              {pt.value} ({pt.totalCalls} calls)
                            </text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* X-Axis Timeline Segment Buttons */}
              <div className="curveTimelineButtons">
                {graphPoints.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedGraphIdx(idx)}
                    className={`curveTimelineBtn ${selectedGraphIdx === idx ? 'active' : ''}`}
                  >
                    <div>{item.hour}</div>
                    <div style={{ fontSize: '9px', opacity: 0.75, marginTop: '2px' }}>{item.label.split(' ')[0]}</div>
                  </button>
                ))}
              </div>

              {/* Selected Time Slot Drill-Down HUD */}
              <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid var(--line)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', alignItems: 'center' }}>
                <div style={{ background: 'var(--panel)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--line)' }}>
                  <span style={{ fontSize: '10px', color: '#a4a8b6', fontWeight: 700, textTransform: 'uppercase' }}>Selected Window</span>
                  <div style={{ fontSize: '15px', fontWeight: 900, color: '#ffffff', marginTop: '2px' }}>
                    {activePoint.hour} · {activePoint.label}
                  </div>
                </div>

                <div style={{ background: 'var(--panel)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--line)' }}>
                  <span style={{ fontSize: '10px', color: '#a4a8b6', fontWeight: 700, textTransform: 'uppercase' }}>Captured Demand</span>
                  <div style={{ fontSize: '15px', fontWeight: 900, color: 'var(--yellow)', marginTop: '2px' }}>
                    {activePoint.totalCalls} Calls · {activePoint.value}
                  </div>
                </div>

                <div style={{ background: 'var(--panel)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--line)', gridColumn: 'span 2' }}>
                  <span style={{ fontSize: '10px', color: '#ff887e', fontWeight: 800, textTransform: 'uppercase' }}>
                    Primary Leak &amp; Ollie Resolution:
                  </span>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>
                    {activePoint.scenario}: <span style={{ fontWeight: 400, color: 'var(--silver)' }}>{activePoint.details}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Simulation Replay */}
      <section id="replay">
        <div className="wrap">
          <div className="head">
            <div className="eyebrow">
              <span className="dot"></span> Live 2nd Shift Simulation
            </div>
            <h2>Watch A Midnight Emergency Turn Into A Booked Job In 50 Seconds.</h2>
            <p>
              An unedited replay of an incoming holiday pipe burst emergency handled autonomously by Ollie’s 2nd shift from first ring to technician confirmation.
            </p>
          </div>

          <div className="simGrid">
            <div className="replay">
              <div className="replayScreen">
                <div className="replayTop">
                  <span>DISPATCH LOG · INCIDENT #4819</span>
                  <span>{REPLAY_LINES[replayIdx].time}</span>
                </div>

                <button
                  type="button"
                  className="play"
                  onClick={handleTogglePlay}
                  aria-label="Toggle Live Replay"
                >
                  {isPlayingReplay ? '■' : replayIdx >= REPLAY_LINES.length - 1 ? '↻' : '▶'}
                </button>

                <div className="voice">
                  <div className={REPLAY_LINES[replayIdx].speaker === 'Caller' ? 'caller' : 'ollie'}>
                    <b>{REPLAY_LINES[replayIdx].speaker} · {REPLAY_LINES[replayIdx].time}</b>
                    <br />
                    {REPLAY_LINES[replayIdx].text}
                  </div>
                </div>
              </div>

              <div className="buttons">
                <button
                  type="button"
                  className="btn primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => handleOpenAuditModal()}
                >
                  Audit My Calls for $597/mo →
                </button>
              </div>
            </div>

            <div className="log">
              <div className="boxTitle">Autonomous dispatch timeline</div>
              <div className="eventLog">
                <div className="logRow">
                  <div className="logTime">8:14:15</div>
                  <div>
                    <b>Safety Confirmation</b>
                    <p>Caller guided to shut off main valve clockwise 90 degrees. Water leak stopped.</p>
                  </div>
                </div>
                <div className="logRow">
                  <div className="logTime">8:14:19</div>
                  <div>
                    <b>Route &amp; Availability Checked</b>
                    <p>Checks on-call schedule and GPS proximity: Dave Miller is 14 minutes away in Truck 04.</p>
                  </div>
                </div>
                <div className="logRow">
                  <div className="logTime">8:14:36</div>
                  <div>
                    <b>Work Order Auto-Created in ServiceTitan</b>
                    <p>Work Order #8912 generated. SMS sent to technician with gate code and parts list.</p>
                  </div>
                </div>
                <div className="logRow">
                  <div className="logTime">8:14:52</div>
                  <div>
                    <b>Technician En Route</b>
                    <p>Dave Miller confirms receipt and rolls in Truck 04 with universal press fittings.</p>
                  </div>
                </div>
              </div>

              <div className="workorder">
                <div className="boxTitle">ServiceTitan Live Work Order</div>
                <div className="workorderGrid">
                  <div>Customer<b>Sarah Jenkins</b></div>
                  <div>Urgency<b>P1 Emergency</b></div>
                  <div>Location<b>482 Elm Ridge Terrace</b></div>
                  <div>Technician<b>Dave Miller · Truck 04</b></div>
                  <div>Safety status<b>Shutoff verified closed</b></div>
                  <div>Financial value<b>+$1,850 repair ticket captured</b></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned $597 All-Inclusive Pricing Showcase */}
      <section className="dark" id="pricing">
        <div className="wrap">
          <div className="head">
            <div className="eyebrow">
              <span className="dot"></span> One Transparent Investment · Complete Fleet Protection
            </div>
            <h2>Everything Ollie Offers. Just $597 Monthly.</h2>
            <p>
              No tiered feature gates, no per-truck surcharges, and zero setup fees. Covers daytime field overflow when your crew is under sinks or on roofs, full vacation backup, and after-hours emergency dispatch for your entire fleet.
            </p>
          </div>

          <div className="pricingHeroContainer">
            {/* Primary Left Pricing Pillar */}
            <div className="pricingPillarCard">
              <div>
                <div className="pricingBadge">
                  <Sparkles style={{ width: '12px', height: '12px' }} />
                  ★ 24/7 FLEET COVERAGE · FIELD, VACATION &amp; NIGHTS
                </div>

                <div className="priceValue">
                  <strong>$597</strong>
                  <span>/ month</span>
                </div>

                <p className="priceDesc">
                  Unlimited daytime field overflow, hands-full backup, vacation coverage &amp; after-hours emergency dispatch across your entire fleet.
                </p>

                <button
                  type="button"
                  className="ctaButton"
                  onClick={() => handleOpenAuditModal(597)}
                >
                  <span>Deploy Ollie for $597/mo</span>
                  <ArrowRight style={{ width: '16px', height: '16px' }} />
                </button>

                <div className="reassurances">
                  <div className="reassuranceItem">
                    <Zap style={{ width: '13px', height: '13px', color: 'var(--yellow)' }} />
                    <span>15-minute phone forward setup</span>
                  </div>
                  <div className="reassuranceItem">
                    <ShieldCheck style={{ width: '13px', height: '13px', color: 'var(--yellow)' }} />
                    <span>No long-term contracts · Cancel anytime</span>
                  </div>
                  <div className="reassuranceItem">
                    <Clock style={{ width: '13px', height: '13px', color: 'var(--yellow)' }} />
                    <span>Covers field overflow, vacations &amp; nights</span>
                  </div>
                </div>
              </div>

              <div className="valueStatBox">
                <b style={{ color: '#f7f7f9', display: 'block', marginBottom: '3px' }}>💡 Fleet Math That Pays For Itself:</b>
                A single captured emergency call ($1,850 avg ticket) pays for over 3 months of Ollie operations.
              </div>
            </div>

            {/* Right Side: 4 Clean Operational Quadrants */}
            <div className="pricingFeaturesGrid">
              {/* Box 1: Voice & Emergency Triage */}
              <div className="pricingFeatureBox">
                <div className="pricingFeatureBoxHeader">
                  <div className="pricingFeatureIconWrap">
                    <PhoneCall style={{ width: '16px', height: '16px' }} />
                  </div>
                  <div className="pricingFeatureTitle">Voice &amp; Safety Triage</div>
                </div>
                <ul className="pricingFeatureList">
                  <li>
                    <Check />
                    <span>Unlimited 2nd shift, weekend &amp; holiday answering</span>
                  </li>
                  <li>
                    <Check />
                    <span>Sub-2-second connection rate with human warmth</span>
                  </li>
                  <li>
                    <Check />
                    <span>Emergency water/gas shutoff guidance for homeowners</span>
                  </li>
                  <li>
                    <Check />
                    <span>Separates urgent dispatch from next-day booking</span>
                  </li>
                </ul>
              </div>

              {/* Box 2: Autonomous Dispatch & CRM */}
              <div className="pricingFeatureBox">
                <div className="pricingFeatureBoxHeader">
                  <div className="pricingFeatureIconWrap">
                    <Navigation style={{ width: '16px', height: '16px' }} />
                  </div>
                  <div className="pricingFeatureTitle">Autonomous Dispatch &amp; Telemetry</div>
                </div>
                <ul className="pricingFeatureList">
                  <li>
                    <Check />
                    <span>SMS turn-by-turn routing with zero apps for techs</span>
                  </li>
                  <li>
                    <Check />
                    <span>Real-time sync to ServiceTitan, Housecall Pro &amp; Jobber</span>
                  </li>
                  <li>
                    <Check />
                    <span>Truck parts pre-check &amp; gate access verification</span>
                  </li>
                  <li>
                    <Check />
                    <span>Multi-tech rotations &amp; geographic territory routing</span>
                  </li>
                </ul>
              </div>

              {/* Box 3: Field Quoting & Same-Night Cash */}
              <div className="pricingFeatureBox">
                <div className="pricingFeatureBoxHeader">
                  <div className="pricingFeatureIconWrap">
                    <CreditCard style={{ width: '16px', height: '16px' }} />
                  </div>
                  <div className="pricingFeatureTitle">Protected Margins &amp; Payment</div>
                </div>
                <ul className="pricingFeatureList">
                  <li>
                    <Check />
                    <span>Digital Good / Better / Best quoting on customer phone</span>
                  </li>
                  <li>
                    <Check />
                    <span>Enforced 62%+ gross profit margin &amp; overtime rules</span>
                  </li>
                  <li>
                    <Check />
                    <span>Same-night Apple Pay, Google Pay &amp; card tap-to-pay</span>
                  </li>
                  <li>
                    <Check />
                    <span>Zero accounts receivable aging · Paid before tech leaves</span>
                  </li>
                </ul>
              </div>

              {/* Box 4: Reputation & Executive Intelligence */}
              <div className="pricingFeatureBox">
                <div className="pricingFeatureBoxHeader">
                  <div className="pricingFeatureIconWrap">
                    <Star style={{ width: '16px', height: '16px' }} />
                  </div>
                  <div className="pricingFeatureTitle">5-Star SEO &amp; Executive Briefing</div>
                </div>
                <ul className="pricingFeatureList">
                  <li>
                    <Check />
                    <span>Automated 8:30 AM Google 5-Star review text cadence</span>
                  </li>
                  <li>
                    <Check />
                    <span>7:00 AM executive morning operational briefing in inbox</span>
                  </li>
                  <li>
                    <Check />
                    <span>Cold estimate reactivation &amp; seasonal service tune-ups</span>
                  </li>
                  <li>
                    <Check />
                    <span>Commercial VIP escalation trees &amp; manager bridges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Commitment Banner */}
          <div className="pricingGuaranteeBanner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(254, 218, 106, 0.15)', border: '1px solid rgba(254, 218, 106, 0.35)', color: 'var(--yellow)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <ShieldCheck style={{ width: '18px', height: '18px' }} />
              </div>
              <div style={{ fontSize: '12px', color: 'var(--silver)', lineHeight: 1.5 }}>
                <strong style={{ color: '#f7f7f9', display: 'block', fontSize: '13px' }}>Simple Month-To-Month Partnership · Zero Long-Term Lock-In</strong>
                Deploy Ollie with zero setup fees, no per-truck taxes, and zero long-term commitments. Scale up or pause anytime.
              </div>
            </div>

            <button
              type="button"
              className="btn"
              style={{ whiteSpace: 'nowrap', borderColor: 'rgba(254, 218, 106, 0.4)' }}
              onClick={() => handleOpenAuditModal(597)}
            >
              Get Started with Ollie →
            </button>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section>
        <div className="wrap">
          <div className="head">
            <div className="eyebrow">
              <span className="dot"></span> Clear Answers · Zero Ambiguity
            </div>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about deploying Ollie across your daytime field operations, vacations, and after-hours.</p>
          </div>
          <div className="faq">
            <details open>
              <summary>Does Ollie only work at night, or during the daytime too?</summary>
              <p>Ollie protects your fleet 24/7/365. Whenever your crew can't answer because they are shoulder-deep under a sink, balancing on a 2-story roof with safety harnesses, driving between jobs, or when you're away on a family vacation, your phone rolls to Ollie after 2 rings. It eliminates daytime busy signals, protects family time, and covers 100% of late-night emergencies.</p>
            </details>
            <details>
              <summary>How long does onboarding take?</summary>
              <p>Setup takes less than 15 minutes. You forward your existing office line when busy or off-shift, connect your CRM (ServiceTitan, Housecall Pro, Jobber, or FieldEdge), and set your on-call technician rules. Your fleet backup can go live today.</p>
            </details>
            <details>
              <summary>Do our technicians have to learn or download a new app?</summary>
              <p>No. Your technicians don’t have to download anything. Ollie communicates via standard SMS with customer notes, gate codes, parts match, and Google Maps directions—exactly the way they already operate in the field.</p>
            </details>
            <details>
              <summary>What if an emergency caller needs to speak with the business owner directly?</summary>
              <p>You define custom escalation rules. If a high-liability emergency occurs or a VIP commercial account calls, Ollie places them on courteous hold and instantly bridges the call to your mobile with a brief verbal summary.</p>
            </details>
            <details>
              <summary>What if a call is not a true emergency?</summary>
              <p>Ollie identifies non-emergencies (like routine maintenance inquiries or general estimate requests) and books them into your calendar for the next available business slot, preserving your on-call tech’s rest.</p>
            </details>
            <details>
              <summary>Are there long-term contracts or cancellation fees?</summary>
              <p>None. Ollie operates on a straightforward month-to-month basis with no setup fees, no lock-in contracts, and no cancellation penalties. You have complete flexibility to pause or cancel at any time.</p>
            </details>
            <details>
              <summary>Which dispatch and CRM systems are supported?</summary>
              <p>Ollie features native two-way sync with ServiceTitan, Housecall Pro, Jobber, and FieldEdge, as well as support for custom dispatch spreadsheets and commercial telephony systems.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Audit CTA */}
      <section id="audit">
        <div className="wrap">
          <div className="cta">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="dot"></span> Free 15-Minute Audit
            </div>
            <h2>Ready to see how much revenue you're losing to missed calls?</h2>
            <p>
              We’ll analyze your recent call volume, quantify your missed field, vacation, and after-hours demand, and show you how to capture it in 15 minutes.
            </p>
            <div className="buttons">
              <button
                type="button"
                className="btn primary"
                onClick={() => handleOpenAuditModal()}
              >
                Claim Your Free After-Hours Audit →
              </button>
              <a className="btn" href="#calculator">
                Calculate Leakage
              </a>
            </div>
            <div className="micro">
              100% confidential · No spam or salespeople · 15-minute call
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="wrap foot">
          <div>
            <span className="brand" style={{ fontSize: '20px' }}>
              ollie<span style={{ color: 'var(--yellow)' }}>.</span>
            </span>
            <br />
            <span style={{ color: 'var(--silver)' }}>The Autonomous 2nd Shift for Trade Fleets</span>
          </div>
          <div>© {new Date().getFullYear()} Ollie Operations Inc. All rights reserved.</div>
          <div>
            <a href="#start">Start</a> · <a href="#lifecycle">How It Works</a> · <a href="#features">Capabilities</a> · <a href="#calculator">ROI</a> · <a href="#pricing">Pricing</a>
          </div>
        </div>
      </footer>

      {/* Audit Modal */}
      <AuditApplicationModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        initialCalculatedLeak={initialLeakAmount}
      />
    </>
  );
}
