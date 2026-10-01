import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Activity } from 'lucide-react';

interface ForemanNavbarProps {
  onRequestAudit: () => void;
  onOpenDashboard?: () => void;
  isDashboardActive?: boolean;
}

export const ForemanNavbar: React.FC<ForemanNavbarProps> = ({ 
  onRequestAudit, 
  onOpenDashboard,
  isDashboardActive = false
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs' 
        : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
        
        {/* Brand Logo & Product Identifier */}
        <div className="flex items-center gap-3">
          <a 
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <span className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-amber-500 font-extrabold text-base tracking-tight shadow-xs">
              O
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 font-sans leading-none">
                Ollie
              </span>
              <span className="text-[10px] font-medium text-slate-500 tracking-wide uppercase mt-0.5">
                2nd Shift Operations
              </span>
            </div>
          </a>
        </div>

        {/* Clean Modern Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#where-we-start" className="hover:text-slate-900 transition-colors">
            Where We Start
          </a>
          <a href="#how-it-works" className="hover:text-slate-900 transition-colors">
            How It Works
          </a>
          <a href="#features" className="hover:text-slate-900 transition-colors">
            Capabilities
          </a>
          <a href="#calculator" className="hover:text-slate-900 transition-colors">
            ROI Calculator
          </a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">
            Pricing
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          {onOpenDashboard && (
            <button
              onClick={onOpenDashboard}
              className={`hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors border ${
                isDashboardActive
                  ? 'bg-amber-50 text-amber-900 border-amber-300'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-amber-600" />
              <span>Live Console</span>
            </button>
          )}

          <button
            onClick={onRequestAudit}
            className="px-4.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.98] transition-all rounded-lg shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <span>Free Revenue Audit</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2.5 text-sm font-medium text-slate-700">
            <a 
              href="#where-we-start" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Where We Start
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              How It Works
            </a>
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Capabilities
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              ROI Calculator
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Pricing
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            {onOpenDashboard && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDashboard();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-slate-100 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Activity className="w-4 h-4 text-amber-600" />
                <span>Open Live Command Console</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestAudit();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-slate-900 text-white font-semibold text-xs flex items-center justify-center gap-1.5"
            >
              <span>Get Free Revenue Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
