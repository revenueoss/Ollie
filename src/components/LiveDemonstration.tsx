import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, Clock, CheckCircle2, ShieldCheck, MapPin, User, Calendar, Wrench, RotateCcw } from 'lucide-react';

interface DemoStep {
  time: string;
  speaker: 'Caller' | 'Ollie Voice' | 'Autonomous Dispatch' | 'Technician Dave';
  content: string;
  note?: string;
}

const DEMO_STEPS: DemoStep[] = [
  {
    time: '8:14:02 PM',
    speaker: 'Caller',
    content: "Hi... please tell me someone is working tonight! A pipe just burst in my upstairs ceiling, water is coming through the canned lights and my kids are screaming!",
  },
  {
    time: '8:14:04 PM',
    speaker: 'Ollie Voice',
    content: "I'm right here with you. Take a deep breath—I am dispatching our on-call technician right now. First, do you know where your main water shutoff valve is located in the basement or garage?",
    note: "Emergency safety triage: instantly halts catastrophic property damage within seconds"
  },
  {
    time: '8:14:15 PM',
    speaker: 'Caller',
    content: "Yes, behind the water heater... wait, okay, I turned the yellow valve perpendicular. The roaring stopped. Oh thank god.",
  },
  {
    time: '8:14:19 PM',
    speaker: 'Ollie Voice',
    content: "Great work. The water flow is stopped. I have your address as 482 Elm Ridge Terrace in Oakwood. Our on-call master technician Dave is finishing a job 12 minutes away. I've locked him in for your emergency inspection between 8:45 PM and 9:15 PM.",
    note: "Checks real-time on-call technician GPS radius & route capacity"
  },
  {
    time: '8:14:32 PM',
    speaker: 'Caller',
    content: "Yes! Please send Dave right now, that is totally fine. Thank you so much for answering, I dialed two other plumbers and got voicemail.",
  },
  {
    time: '8:14:36 PM',
    speaker: 'Autonomous Dispatch',
    content: "Work order created in ServiceTitan. Calendar slot locked. Dispatched via SMS to Technician Dave Miller with customer notes, shutoff confirmation, and gate code #4192.",
    note: "100% CRM sync: zero manual double-entry or midnight phone tag for the owner"
  },
  {
    time: '8:14:52 PM',
    speaker: 'Technician Dave',
    content: "En route to Elm Ridge Terrace. ETA 18 minutes. Tools & replacement PEX fittings pre-stocked on truck.",
    note: "Owner sleeps uninterrupted. Job captured: $1,850 estimated repair ticket."
  }
];

export const LiveDemonstration: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(DEMO_STEPS.length - 1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep(prev => {
          if (prev < DEMO_STEPS.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleStartPlay = () => {
    setActiveStep(0);
    setIsPlaying(true);
  };

  const handlePausePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="demo" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100 scroll-mt-20">
      
      {/* Category Kicker */}
      <div className="text-center mb-4">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Live Call &amp; Dispatch Simulation
        </span>
      </div>

      {/* Main Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Watch a midnight emergency turn into a booked job in 50 seconds.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          An unedited replay of an incoming holiday emergency call handled autonomously by Ollie’s 2nd shift from first ring to technician confirmation.
        </p>
      </div>

      {/* Simulator Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
        {/* Controls Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 font-semibold text-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Live 2nd Shift Dispatch Log · Incident #4819</span>
          </div>

          <div className="flex items-center gap-2">
            {isPlaying ? (
              <button
                onClick={handlePausePlay}
                className="px-4 py-2 bg-slate-900 text-white font-medium rounded-lg text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Pause className="w-3.5 h-3.5 fill-white" />
                <span>Pause</span>
              </button>
            ) : (
              <button
                onClick={handleStartPlay}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Play Live Replay</span>
              </button>
            )}

            <button
              onClick={() => {
                setActiveStep(DEMO_STEPS.length - 1);
                setIsPlaying(false);
              }}
              className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200/60 transition-colors"
              title="View Complete Replay"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 2-Column Split: Dialogue Stream & CRM Confirmation */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Chronological Dialogue Replay */}
          <div className="lg:col-span-7 space-y-4">
            {DEMO_STEPS.slice(0, activeStep + 1).map((step, idx) => {
              const isCaller = step.speaker === 'Caller';
              const isOllie = step.speaker === 'Ollie Voice';
              const isDispatch = step.speaker === 'Autonomous Dispatch';

              return (
                <div 
                  key={idx}
                  className={`p-4 rounded-xl border text-xs space-y-2 transition-all ${
                    isCaller
                      ? 'bg-slate-50 border-slate-200'
                      : isOllie
                      ? 'bg-amber-50/80 border-amber-200 text-amber-950'
                      : isDispatch
                      ? 'bg-blue-50/80 border-blue-200 text-blue-950 font-mono'
                      : 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                  }`}
                >
                  <div className="flex items-center justify-between font-semibold border-b border-black/5 pb-1.5">
                    <span className="font-bold flex items-center gap-1.5">
                      {step.speaker}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{step.time}</span>
                  </div>

                  <p className="leading-relaxed">
                    {step.content}
                  </p>

                  {step.note && (
                    <div className="text-[11px] font-medium text-slate-500 italic pt-1">
                      💡 {step.note}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Work Order Status & Result */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
              <span className="font-semibold text-slate-300">ServiceTitan Live Work Order</span>
              <span className="text-emerald-400 font-mono font-semibold">WO #8912 Booked</span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Customer &amp; Location:</span>
                <span className="font-semibold text-white">Sarah Jenkins · 482 Elm Ridge Terrace</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Urgency Classification:</span>
                <span className="text-amber-400 font-semibold">P1 Emergency · Main Water Line Burst</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Assigned On-Call Technician:</span>
                <span className="text-white font-semibold">Dave Miller (Truck 04) · 18 min ETA</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Safety Status:</span>
                <span className="text-emerald-400 font-semibold">Main shutoff verified closed by customer</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs">
              <span className="text-slate-400 block text-[11px]">Financial Value:</span>
              <span className="text-xl font-bold font-mono text-emerald-400">+$1,850.00 Captured</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Zero owner intervention required at midnight</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
