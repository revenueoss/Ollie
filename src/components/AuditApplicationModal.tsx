import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { AuditFormData } from '../types';

interface AuditApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCalculatedLeak?: number;
}

export const AuditApplicationModal: React.FC<AuditApplicationModalProps> = ({
  isOpen,
  onClose,
  initialCalculatedLeak
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<AuditFormData>({
    businessName: '',
    trade: 'Plumbing',
    revenue: '$1M – $2.5M',
    crewSize: '4 to 8 Service Vehicles',
    currentHandling: 'Owner / Office Manager Cellphone',
    primaryLeak: 'Daytime missed calls while crew is working',
    ownerName: '',
    phone: '',
    email: '',
    cityState: '',
    calculatedLeakage: initialCalculatedLeak || 185000
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#1d1e22] border border-[#393f4d] rounded-3xl shadow-2xl p-6 sm:p-8 font-sans text-[#f7f7f9]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#d4d4dc] hover:text-[#feda6a] p-1.5 rounded-lg hover:bg-[#393f4d]/40 cursor-pointer transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 border-b border-[rgba(212,212,220,0.12)] pb-5">
          <div className="text-xs font-semibold text-[#feda6a] tracking-wider uppercase mb-1">
            Confidential 2nd Shift Audit
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-[#f7f7f9]">
            {submitted ? '2nd Shift Audit Received' : 'Request Your Ollie 2nd Shift Operations Audit'}
          </h3>
          <p className="text-xs text-[#a4a7b3] mt-1">
            {submitted
              ? 'Your intake details have been queued for direct partner review.'
              : 'Strictly for established trade contractors ($500K–$5M). Step ' + step + ' of 3.'}
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-[#feda6a]/15 border border-[#feda6a]/40 text-[#feda6a] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-xl text-[#f7f7f9]">
                Application Queued for Review
              </h4>
              <p className="text-xs sm:text-sm text-[#d4d4dc] leading-relaxed max-w-sm mx-auto">
                Thank you, <strong className="text-[#feda6a]">{formData.ownerName || 'Partner'}</strong>. We have received the operational profile for <strong className="text-[#feda6a]">{formData.businessName || 'your company'}</strong>.
              </p>
              <div className="bg-[#272a34] border border-[#393f4d] p-4 rounded-xl text-xs text-[#d4d4dc] text-left space-y-1.5 mt-4">
                <div className="text-[#feda6a] font-bold mb-1">Intake Summary:</div>
                <div>• Trade: {formData.trade} ({formData.revenue})</div>
                <div>• Fleet: {formData.crewSize}</div>
                <div>• Market Location: {formData.cityState || 'Stated Region'}</div>
                <div>• Direct Contact: {formData.phone}</div>
                <div>• Plan: $597 / month all-inclusive</div>
              </div>
            </div>

            <p className="text-xs text-[#a4a7b3] leading-relaxed max-w-sm mx-auto pt-2">
              Our engineering team will review your market territory against existing client exclusivity and contact you to schedule your call-log audit.
            </p>

            <button
              onClick={handleReset}
              className="mt-4 w-full py-3.5 bg-[#feda6a] hover:bg-[#ffe68a] text-[#1d1e22] text-xs uppercase tracking-wider font-extrabold rounded-xl cursor-pointer transition-all shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleNext} className="space-y-4 text-xs">
            {/* Step 1: Business Profile */}
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div>
                  <label className="block text-[#d4d4dc] font-semibold mb-1.5 text-xs">
                    Trade Business Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Keystone State Plumbing & Heating"
                    className="w-full px-3.5 py-2.5 bg-[#272a34] border border-[#393f4d] rounded-xl text-[#f7f7f9] placeholder-[#a4a7b3] focus:outline-none focus:border-[#feda6a] text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#d4d4dc] font-semibold mb-1.5 text-xs">
                      Primary Trade *
                    </label>
                    <select
                      name="trade"
                      value={formData.trade}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-[#272a34] border border-[#393f4d] rounded-xl text-[#f7f7f9] focus:outline-none focus:border-[#feda6a] text-sm"
                    >
                      <option value="Plumbing">Plumbing &amp; Drain</option>
                      <option value="HVAC">HVAC &amp; Refrigeration</option>
                      <option value="Electrical">Electrical Contracting</option>
                      <option value="Roofing">Roofing &amp; Gutters</option>
                      <option value="Restoration">Water/Fire Restoration</option>
                      <option value="General Trades">Commercial Facilities</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#d4d4dc] font-semibold mb-1.5 text-xs">
                      Annual Gross Revenue *
                    </label>
                    <select
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-[#272a34] border border-[#393f4d] rounded-xl text-[#f7f7f9] focus:outline-none focus:border-[#feda6a] text-sm"
                    >
                      <option value="$500K – $1M">$500,000 – $1,000,000</option>
                      <option value="$1M – $2.5M">$1,000,000 – $2,500,000</option>
                      <option value="$2.5M – $5M">$2,500,000 – $5,000,000</option>
                      <option value="$5M+">$5,000,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#d4d4dc] font-semibold mb-1.5 text-xs">
                    Service Fleet Size (Active Trucks) *
                  </label>
                  <select
                    name="crewSize"
                    value={formData.crewSize}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#272a34] border border-[#393f4d] rounded-xl text-[#f7f7f9] focus:outline-none focus:border-[#feda6a] text-sm"
                  >
                    <option value="2 to 4 Service Vehicles">2 to 4 Service Trucks</option>
                    <option value="5 to 8 Service Vehicles">5 to 8 Service Trucks</option>
                    <option value="9 to 15 Service Vehicles">9 to 15 Service Trucks</option>
                    <option value="16+ Fleet / Multi-Location">16+ Fleet (Multi-Territory)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Operational Bottlenecks */}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div>
                  <label className="block text-[#d4d4dc] font-semibold mb-1.5 text-xs">
                    How Are Inbound Calls Currently Handled? *
                  </label>
                  <select
                    name="currentHandling"
                    value={formData.currentHandling}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#272a34] border border-[#393f4d] rounded-xl text-[#f7f7f9] focus:outline-none focus:border-[#feda6a] text-sm"
                  >
                    <option value="Owner cellphone (rings in field)">Owner cellphone (rings while on job sites)</option>
                    <option value="Full-time receptionist / office manager">Full-time office receptionist (8 AM–5 PM)</option>
                    <option value="Traditional call answering service">Traditional third-party answering service (takes message only)</option>
                    <option value="Voicemail / automated IVR tree">Voicemail / phone tree greeting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#d4d4dc] font-semibold mb-1.5 text-xs">
                    Primary Operational Bottleneck *
                  </label>
                  <select
                    name="primaryLeak"
                    value={formData.primaryLeak}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#272a34] border border-[#393f4d] rounded-xl text-[#f7f7f9] focus:outline-none focus:border-[#feda6a] text-sm"
                  >
                    <option value="Daytime missed calls while crew is working">Daytime missed calls while crew is working</option>
                    <option value="Unfollowed cold estimates / dead quotes">Unfollowed estimates dying in customer inboxes</option>
                    <option value="After-hours, weekend & holiday emergency calls">After-hours, weekend &amp; holiday emergency calls</option>
                    <option value="Dormant customer database not being reactivated">Dormant past customer records sitting untouched</option>
                    <option value="Low Google review velocity capping Map Pack rank">Low Google review velocity vs fast-growing competitors</option>
                  </select>
                </div>

                <div className="bg-[#272a34] border border-[#393f4d] p-3.5 rounded-xl">
                  <span className="text-[11px] text-[#a4a7b3] uppercase tracking-wider block">Targeted Leakage Recovery Goal:</span>
                  <div className="font-mono tabular-nums text-lg font-bold text-[#feda6a] mt-0.5">
                    ${formData.calculatedLeakage?.toLocaleString()} estimated annual recoverable demand
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Owner Contact & Verification */}
            {step === 3 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div>
                  <label className="block text-[#d4d4dc] font-semibold mb-1.5 text-xs">
                    Owner / Managing Partner Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    placeholder="e.g. Robert Gallagher"
                    className="w-full px-3.5 py-2.5 bg-[#272a34] border border-[#393f4d] rounded-xl text-[#f7f7f9] placeholder-[#a4a7b3] focus:outline-none focus:border-[#feda6a] text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#d4d4dc] font-semibold mb-1.5 text-xs">
                      Direct Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full px-3.5 py-2.5 bg-[#272a34] border border-[#393f4d] rounded-xl text-[#f7f7f9] placeholder-[#a4a7b3] focus:outline-none focus:border-[#feda6a] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[#d4d4dc] font-semibold mb-1.5 text-xs">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="owner@trades.com"
                      className="w-full px-3.5 py-2.5 bg-[#272a34] border border-[#393f4d] rounded-xl text-[#f7f7f9] placeholder-[#a4a7b3] focus:outline-none focus:border-[#feda6a] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#d4d4dc] font-semibold mb-1.5 text-xs">
                    Primary Market / Service Area (City &amp; State) *
                  </label>
                  <input
                    type="text"
                    required
                    name="cityState"
                    value={formData.cityState}
                    onChange={handleChange}
                    placeholder="e.g. Dallas-Fort Worth, TX or Greater Philadelphia, PA"
                    className="w-full px-3.5 py-2.5 bg-[#272a34] border border-[#393f4d] rounded-xl text-[#f7f7f9] placeholder-[#a4a7b3] focus:outline-none focus:border-[#feda6a] text-sm"
                  />
                </div>

                <div className="p-3 bg-[#feda6a]/10 border border-[#feda6a]/30 rounded-xl text-[11px] text-[#d4d4dc] flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#feda6a] shrink-0 mt-0.5" />
                  <span>
                    Your operational data is strictly protected under non-disclosure and used solely to prepare your custom revenue audit report.
                  </span>
                </div>
              </div>
            )}

            {/* Navigation & Submit Controls */}
            <div className="pt-4 border-t border-[rgba(212,212,220,0.12)] flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2.5 bg-[#272a34] border border-[#393f4d] hover:bg-[#393f4d] text-[#d4d4dc] text-xs font-semibold rounded-xl cursor-pointer transition-colors"
                >
                  ← Previous Step
                </button>
              ) : (
                <div></div>
              )}

              <button
                type="submit"
                className="px-6 py-2.5 bg-[#feda6a] hover:bg-[#ffe68a] text-[#1d1e22] text-xs uppercase tracking-wider font-extrabold rounded-xl cursor-pointer transition-all shadow-md flex items-center gap-2"
              >
                <span>{step === 3 ? 'Submit Audit Application' : 'Proceed to Step ' + (step + 1)}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#1d1e22]" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
