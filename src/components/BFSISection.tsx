import React, { useState } from 'react';
import { 
  CreditCard, 
  Percent, 
  Filter, 
  Laptop, 
  ShieldCheck, 
  IndianRupee, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight,
  Headphones,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

interface BFSISectionProps {
  onOpenApplyModal: () => void;
}

export const BFSISection: React.FC<BFSISectionProps> = ({
  onOpenApplyModal,
}) => {
  const [activeFinanceTab, setActiveFinanceTab] = useState<'lead_filtration' | 'loan_settlement' | 'credit_card'>('lead_filtration');

  return (
    <section id="bfsi" className="py-20 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <IndianRupee className="w-3.5 h-3.5" />
            <span>REMOTE BFSI & FINANCIAL SERVICES DEPARTMENT (INR)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work From Home Financial Operations & Lead Filtration
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Our specialized Kolkata-backed financial wing connects banking clients with structured telesales, one-time loan debt settlement negotiation, and high-precision remote lead filtration.
          </p>
        </div>

        {/* 3 Pillars Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <button
            onClick={() => setActiveFinanceTab('lead_filtration')}
            className={`p-5 rounded-2xl text-left border transition-all ${
              activeFinanceTab === 'lead_filtration'
                ? 'bg-gradient-to-b from-blue-900/40 to-slate-900 border-blue-500/60 shadow-lg shadow-blue-900/30 ring-1 ring-blue-500/40'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-3">
              <Filter className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Lead Filtration (WFH)</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Verify borrower eligibility, income, CIBIL readiness, and filter qualified prospects for bank underwriting.
            </p>
            <span className="inline-block mt-3 text-[11px] font-semibold text-blue-400">
              45+ Remote Openings →
            </span>
          </button>

          <button
            onClick={() => setActiveFinanceTab('loan_settlement')}
            className={`p-5 rounded-2xl text-left border transition-all ${
              activeFinanceTab === 'loan_settlement'
                ? 'bg-gradient-to-b from-indigo-900/40 to-slate-900 border-indigo-500/60 shadow-lg shadow-indigo-900/30 ring-1 ring-indigo-500/40'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-3">
              <Percent className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Loan Settlement Wing</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Advise stressed borrowers on legitimate one-time settlement (OTS), EMI restructuring, and debt relief solutions.
            </p>
            <span className="inline-block mt-3 text-[11px] font-semibold text-indigo-400">
              High Commission Slabs →
            </span>
          </button>

          <button
            onClick={() => setActiveFinanceTab('credit_card')}
            className={`p-5 rounded-2xl text-left border transition-all ${
              activeFinanceTab === 'credit_card'
                ? 'bg-gradient-to-b from-teal-900/40 to-slate-900 border-teal-500/60 shadow-lg shadow-teal-900/30 ring-1 ring-teal-500/40'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-teal-600/20 text-teal-400 flex items-center justify-center mb-3">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Credit Card Sales & KYC</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Connect with pre-approved banking clients for premium card issuance, cashback cards, and instant digital V-KYC.
            </p>
            <span className="inline-block mt-3 text-[11px] font-semibold text-teal-400">
              Per-Card Payouts (₹350-900) →
            </span>
          </button>
        </div>

        {/* Detailed Tab Display */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          {activeFinanceTab === 'lead_filtration' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-block px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 font-mono text-xs font-semibold">
                  100% REMOTE / WORK FROM HOME
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Lead Filtration: Smart Customer Verification & Pre-Screening
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  As our remote Lead Filtration executive, you work comfortably from your home using your smartphone or laptop. 
                  You will receive automated daily lead queues of customers who submitted inquiries for loans and credit services.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Income Qualification:</strong> Verify if customer has minimum ₹18,000/mo net salary or valid ITR filing.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Credit Health Check:</strong> Ask basic repayment history questions to estimate CIBIL readiness (&gt;650 score).</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>CRM Tagging:</strong> Mark status as "Qualified", "Call Back", or "Not Interested" directly in the agent portal.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Zero Pressure:</strong> Clear calling scripts provided in Bengali, Hindi, and English.</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenApplyModal}
                    className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
                  >
                    <span>Apply for WFH Lead Filtration</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="tel:7044211966"
                    className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
                  >
                    Call HR Desk: 7044211966
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-950 rounded-xl p-5 border border-slate-800">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <span className="font-bold text-slate-300">WFH Earning Structure</span>
                  <span className="text-emerald-400 font-mono font-bold">Guaranteed Base + Incentives</span>
                </div>
                <div className="space-y-3 py-4 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-900">
                    <span className="text-slate-400">Fixed Monthly Stipend:</span>
                    <span className="font-bold text-white">₹14,000 - ₹18,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-900">
                    <span className="text-slate-400">Per Qualified Lead Bonus:</span>
                    <span className="font-bold text-emerald-400">₹30 to ₹60 per lead</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-900">
                    <span className="text-slate-400">Expected Monthly Leads:</span>
                    <span className="font-bold text-white">120 - 200 Leads</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-900">
                    <span className="text-slate-400">Total Take-Home Potential:</span>
                    <span className="font-extrabold text-blue-400 text-sm">₹20,000 - ₹26,000 / mo</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-950/40 rounded-lg border border-blue-900/50 text-[11px] text-blue-200">
                  💡 Training is 100% remote via Google Meet / Zoom. No previous BPO experience required.
                </div>
              </div>
            </div>
          )}

          {activeFinanceTab === 'loan_settlement' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-block px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 font-mono text-xs font-semibold">
                  DEBT RESOLUTION & RESTRUCTURING
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Ethical Loan Settlement & Credit Relief Assistance
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We assist distressed borrowers facing financial hardship, salary cuts, medical emergencies, or business losses. 
                  Our team navigates bank policies to facilitate legal, structured one-time settlements (OTS) and waiver agreements.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Customer Advocacy:</strong> Help borrowers legally pause harassment and negotiate payable lump-sum waivers (30% to 60% reduction).</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Documentation Support:</strong> Collate hardship letters, medical proofs, or loss of employment affidavits for bank committee review.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Official Bank NOC:</strong> Ensure customer receives a genuine No Objection Certificate (NOC) and updated credit status.</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenApplyModal}
                    className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2"
                  >
                    <span>Apply for Loan Settlement Executive</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="tel:7044211966"
                    className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
                  >
                    Speak with Kolkata BFSI Manager
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-950 rounded-xl p-5 border border-slate-800">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <span className="font-bold text-slate-300">Loan Settlement Highlights</span>
                  <span className="text-emerald-400 font-mono font-bold">High Earning Potential</span>
                </div>
                <div className="space-y-3 py-4 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-900">
                    <span className="text-slate-400">Fixed Base Salary:</span>
                    <span className="font-bold text-white">₹18,000 - ₹24,000 / mo</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-900">
                    <span className="text-slate-400">Success Fee Incentive:</span>
                    <span className="font-bold text-emerald-400">2.5% to 6% per account</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-900">
                    <span className="text-slate-400">Average Settlement Size:</span>
                    <span className="font-bold text-white">₹2,00,000 - ₹8,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-900">
                    <span className="text-slate-400">Total Top Earner Payout:</span>
                    <span className="font-extrabold text-indigo-400 text-sm">₹35,000 - ₹50,000+ / mo</span>
                  </div>
                </div>
                <div className="p-3 bg-indigo-950/40 rounded-lg border border-indigo-900/50 text-[11px] text-indigo-200">
                  ⚖️ All settlement processes adhere strictly to RBI Fair Practices Code and NBFC recovery norms.
                </div>
              </div>
            </div>
          )}

          {activeFinanceTab === 'credit_card' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-block px-2.5 py-1 rounded bg-teal-500/10 text-teal-400 font-mono text-xs font-semibold">
                  BANKING CARDS & KYC DESK
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Credit Card Sales, Telecalling & Instant V-KYC
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Our credit card desk handles inbound inquiries and pre-qualified databases for premier Indian private banks and NBFC partners. 
                  Provide genuine benefit walkthroughs, assist in quick digital video KYC, and track card dispatch to the customer's doorstep.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Pre-Approved Portfolios:</strong> No cold spamming; call leads who have requested credit card consultations.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Instant Digital V-KYC:</strong> Guide applicants step-by-step through paperless video verification.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Fast Approvals:</strong> Integrated partner API enables approval decisions within 15-30 minutes.</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenApplyModal}
                    className="px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-lg shadow-teal-600/30 transition-all flex items-center gap-2"
                  >
                    <span>Apply for Credit Card Telesales</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="https://wa.me/917044211966?text=Hi%20Gen%20Z%20Enterprise,%20I%20am%20interested%20in%20Credit%20Card%20Telesales%20and%20KYC%20roles."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 font-semibold text-xs border border-slate-700 transition-colors"
                  >
                    Inquire via WhatsApp
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-950 rounded-xl p-5 border border-slate-800">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <span className="font-bold text-slate-300">Credit Card Commission Slabs</span>
                  <span className="text-emerald-400 font-mono font-bold">Uncapped Rewards</span>
                </div>
                <div className="space-y-3 py-4 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-900">
                    <span className="text-slate-400">Base Salary (Full-time):</span>
                    <span className="font-bold text-white">₹16,000 - ₹20,000 / mo</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-900">
                    <span className="text-slate-400">1 - 15 Cards Disbursed:</span>
                    <span className="font-bold text-teal-400">₹350 / approved card</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-900">
                    <span className="text-slate-400">16 - 35 Cards Disbursed:</span>
                    <span className="font-bold text-teal-400">₹550 / approved card</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-900">
                    <span className="text-slate-400">36+ Cards Super Performer:</span>
                    <span className="font-bold text-emerald-400">₹850 / card + ₹5,000 bonus</span>
                  </div>
                </div>
                <div className="p-3 bg-teal-950/40 rounded-lg border border-teal-900/50 text-[11px] text-teal-200">
                  💳 Direct weekly payout of card incentives directly to your verified bank account.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
