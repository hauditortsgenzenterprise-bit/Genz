import React from 'react';
import { 
  Building2, 
  Laptop, 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  Users, 
  MapPin, 
  PhoneCall, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Lock,
  Award
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { CompanyLogo } from './CompanyLogo';

interface HeroProps {
  onExploreJobs: () => void;
  onOpenTrackModal: () => void;
  onOpenApplyModal: () => void;
  onOpenUdyamModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreJobs,
  onOpenTrackModal,
  onOpenApplyModal,
  onOpenUdyamModal,
}) => {
  return (
    <section id="home" className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-slate-200">
      {/* Subtle background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-100/60 via-indigo-50/50 to-orange-50/40 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-md">
                <CompanyLogo variant="full" theme="light" size="lg" className="h-12 sm:h-14 w-auto" />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>OFFICIAL 3RD-PARTY VENDOR</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Powering India’s Next-Gen{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600">
                Work From Home & Quick-Commerce
              </span>{' '}
              Workforce.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              <strong className="text-slate-900 font-bold">Gen Z Enterprise</strong> is an authorized third-party vendor providing manpower solutions for 
              <span className="text-slate-900 font-semibold"> Zepto, Blinkit, Flipkart, Amazon & Apna Mart</span>, alongside full-scale 
              <span className="text-blue-700 font-semibold"> BFSI Remote Operations</span> (Credit Card, Loan Settlement, & Lead Filtration WFH), security guards, and corporate housekeeping.
            </p>

            {/* Trust Badges Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold">100% Free Placement (Zero Fees)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                <Laptop className="w-4 h-4 text-blue-600" />
                <span className="font-semibold">Verified Remote & WFH Desk</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                <MapPin className="w-4 h-4 text-rose-600" />
                <span className="font-semibold">Kolkata 700036 Physical HQ</span>
              </div>
            </div>



            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onExploreJobs}
                className="px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl shadow-indigo-600/25 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Browse Dynamic Job Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenApplyModal}
                className="px-5 py-3.5 rounded-xl text-sm font-bold bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 flex items-center gap-2 transition-all shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Quick Online Application</span>
              </button>

              <button
                onClick={onOpenTrackModal}
                className="px-4 py-3.5 rounded-xl text-xs font-bold text-slate-600 hover:text-blue-700 transition-colors"
              >
                Track Submitted Application →
              </button>
            </div>

            {/* Prominent Direct Phone Highlight */}
            <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 flex flex-wrap items-center justify-between gap-3 shadow-md shadow-emerald-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/30">
                  <PhoneCall className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 block">
                    Official Recruitment Helpline & Walk-in Desk
                  </span>
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`} 
                    className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight hover:text-emerald-700 transition-colors"
                  >
                    7044211966
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call 7044211966</span>
                </a>
                <a
                  href={`https://wa.me/917044211966?text=Hi%20Gen%20Z%20Enterprise,%20I%20am%20calling%20regarding%20job%20openings`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-emerald-800 border border-emerald-300 text-xs font-bold transition-colors shadow-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Direct Contact snippet */}
            <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              <div>
                <span className="block text-slate-500 uppercase tracking-wider text-[10px] font-bold">Kolkata Office Location</span>
                <span className="text-slate-900 font-semibold">Kashi Nath Dutta Road, Kolkata 700036</span>
              </div>
              <div>
                <span className="block text-slate-500 uppercase tracking-wider text-[10px] font-bold">Company Contact Number</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-emerald-700 font-extrabold text-sm hover:underline flex items-center gap-1">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>7044211966</span>
                </a>
              </div>
              <div>
                <span className="block text-slate-500 uppercase tracking-wider text-[10px] font-bold">Official Email</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-700 font-semibold hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Highlights & Vendor Status Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Live Vendor Dispatch Board</span>
                </div>
                <span className="text-[11px] text-slate-500 font-mono font-semibold">Kolkata HQ Hub</span>
              </div>

              {/* Vendor Badges Grid */}
              <div className="grid grid-cols-2 gap-3 py-4">
                <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200/80">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-purple-700 text-sm">ZEPTO</span>
                    <span className="text-[10px] bg-purple-200/60 text-purple-800 px-1.5 py-0.5 rounded font-mono font-bold">10-MIN</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1">Dark Store Pickers & Delivery</p>
                  <p className="text-[10px] text-emerald-700 mt-1 font-bold">180+ Active Openings</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-amber-700 text-sm">BLINKIT</span>
                    <span className="text-[10px] bg-amber-200/60 text-amber-800 px-1.5 py-0.5 rounded font-mono font-bold">INSTANT</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1">Hub Sorting & Grocery Pack</p>
                  <p className="text-[10px] text-emerald-700 mt-1 font-bold">140+ Active Openings</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-blue-700 text-sm">AMAZON / FK</span>
                    <span className="text-[10px] bg-blue-200/60 text-blue-800 px-1.5 py-0.5 rounded font-mono font-bold">SUPPLY CHAIN</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1">FC Sorting & Dispatch</p>
                  <p className="text-[10px] text-emerald-700 mt-1 font-bold">370+ Active Openings</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-emerald-700 text-sm">APNA MART</span>
                    <span className="text-[10px] bg-emerald-200/60 text-emerald-800 px-1.5 py-0.5 rounded font-mono font-bold">RETAIL</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1">Cashier & Stock Associate</p>
                  <p className="text-[10px] text-emerald-700 mt-1 font-bold">95+ Active Openings</p>
                </div>
              </div>

              {/* BFSI Highlights Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <CreditCard className="w-4 h-4 text-indigo-300" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">BFSI Remote Department</span>
                </div>
                <p className="text-xs text-indigo-100 leading-relaxed">
                  • <strong>Lead Filtration:</strong> Income & CIBIL eligibility verification (WFH)<br />
                  • <strong>Loan Settlement:</strong> Bank debt restructuring & OTS negotiation<br />
                  • <strong>Credit Cards:</strong> Pre-approved card sales & digital KYC
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-300 font-bold">Earn ₹15k - ₹35k/mo + High Incentives</span>
                  <button
                    onClick={onOpenApplyModal}
                    className="text-[11px] font-bold text-slate-900 bg-white hover:bg-slate-100 px-3 py-1 rounded-md transition-colors"
                  >
                    Quick Apply
                  </button>
                </div>
              </div>

              {/* Facility & Security banner */}
              <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-700">
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-slate-500" />
                  <span>Security Guards & Housekeeping</span>
                </div>
                <span className="text-slate-500 text-[11px]">Uniform & ESIC/PF Provided</span>
              </div>
            </div>

            {/* Quick Stat Bar */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-white border border-slate-200 p-3 rounded-2xl shadow-sm">
                <div className="text-xl font-extrabold text-slate-900">100%</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Free Placement</div>
              </div>
              <div className="bg-white border border-slate-200 p-3 rounded-2xl shadow-sm">
                <div className="text-xl font-extrabold text-emerald-600">0 Fees</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">100% Free Hiring</div>
              </div>
              <div className="bg-white border border-slate-200 p-3 rounded-2xl shadow-sm">
                <div className="text-xl font-extrabold text-indigo-600">24-48 Hrs</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Fast Onboarding</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
