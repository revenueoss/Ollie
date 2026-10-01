export type TradeVertical = 'Plumbing' | 'HVAC' | 'Electrical' | 'Roofing' | 'Restoration' | 'General Trades';

export type RevenueTier = '$500K – $1M' | '$1M – $2.5M' | '$2.5M – $5M' | '$5M+';

export interface AuditFormData {
  businessName: string;
  trade: TradeVertical;
  revenue: RevenueTier;
  crewSize: string;
  currentHandling: string;
  primaryLeak: string;
  ownerName: string;
  phone: string;
  email: string;
  cityState: string;
  calculatedLeakage?: number;
}

export interface CaseFile {
  id: string;
  number: string;
  title: string;
  context: string;
  narrative: string;
  costOfInaction: string;
  leakCategory: string;
}

export interface EngineWorkOrder {
  number: string;
  name: string;
  oneLinePromise: string;
  mechanism: string;
  honestBoundary?: string;
  metricsLabel: string;
  metricsValue: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
