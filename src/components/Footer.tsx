import React from 'react';
import { 
  Building2, 
  MapPin, 
  PhoneCall, 
  Mail, 
  ShieldCheck, 
  Laptop, 
  CreditCard, 
  Truck,
  Heart,
  ChevronRight,
  Award,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

import { CompanyLogo } from './CompanyLogo';

interface FooterProps {
  onNavClick: (tab: string) => void;
  onOpenApplyModal: () => void;
  onOpenUdyamModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenApplyModal, onOpenUdyamModal }) => {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <CompanyLogo variant="full" theme="light" size="lg" className="h-14 w-auto" />
            </div>

            <p className="text-slate-600 leading-relaxed text-xs max-w-sm">
              Authorized third-party manpower and recruitment vendor for quick-commerce giants (Zepto, Blinkit), e-commerce marketplaces (Amazon, Flipkart, Apna Mart), facility housekeeping, and remote BFSI lead filtration & loan settlement operations.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-emerald-700 font-bold text-emerald-700">
                  {COMPANY_INFO.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-blue-700 underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Commerce Vendors */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold uppercase tracking-wider text-[11px]">
              Partner Network
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li>
                <button onClick={() => onNavClick('vendors')} className="hover:text-blue-600 transition-colors">
                  Zepto Dark Stores (10-Min)
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('vendors')} className="hover:text-blue-600 transition-colors">
                  Blinkit Grocery Fulfillment
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('vendors')} className="hover:text-blue-600 transition-colors">
                  Amazon FC Sorting Hubs
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('vendors')} className="hover:text-blue-600 transition-colors">
                  Flipkart Supply Chain
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('vendors')} className="hover:text-blue-600 transition-colors">
                  Apna Mart Retail Associates
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('vendors')} className="hover:text-blue-600 transition-colors">
                  Security Guards & Housekeeping
                </button>
              </li>
            </ul>
          </div>

          {/* BFSI & WFH Operations */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold uppercase tracking-wider text-[11px]">
              BFSI & WFH Wing
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li>
                <button onClick={() => onNavClick('bfsi')} className="hover:text-blue-600 transition-colors">
                  Lead Filtration (Work From Home)
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('bfsi')} className="hover:text-blue-600 transition-colors">
                  Loan Settlement (OTS Advisory)
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('bfsi')} className="hover:text-blue-600 transition-colors">
                  Credit Card Telesales & KYC
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('careers')} className="hover:text-blue-600 transition-colors">
                  Career Portal & Jobs
                </button>
              </li>
              <li>
                <button onClick={onOpenApplyModal} className="text-blue-600 hover:text-blue-800 font-semibold">
                  Apply for WFH Roles →
                </button>
              </li>
            </ul>
          </div>

          {/* Safety & Compliance */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold uppercase tracking-wider text-[11px]">
              Compliance & Safety
            </h4>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-[11px]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Fee Recruitment</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-normal">
                Gen Z Enterprise NEVER charges candidates any fee. Report unauthorized extortion immediately to 7044211966.
              </p>
            </div>

            {/* Government MSME Udyam Box */}
            <div className="p-3 rounded-xl bg-amber-50/90 border border-amber-300 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-[10px] uppercase text-amber-950 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-700" />
                  Govt Registered
                </span>
                <span className="text-[9px] font-mono font-bold bg-white text-slate-800 px-1.5 py-0.5 rounded border border-amber-200">
                  MSME
                </span>
              </div>
              <p className="text-[10px] font-mono font-bold text-amber-900">
                {COMPANY_INFO.udyamRegistration.urn}
              </p>
              <button
                onClick={onOpenUdyamModal}
                className="w-full mt-1 py-1 px-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-[10px] transition-colors flex items-center justify-center gap-1"
              >
                <span>Verify Govt Certificate</span>
              </button>
            </div>

            <div className="text-[11px] text-slate-500">
              Operating hours: Mon-Sat 9:30 AM to 7:30 PM (Kolkata Time).
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Gen Z Enterprise. Registered under Ministry of MSME, Govt of India (URN: {COMPANY_INFO.udyamRegistration.urn}) at Kashi Nath Dutta Road, Kolkata 700036.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onOpenUdyamModal} className="text-amber-800 font-bold hover:underline">
              Udyam Registration Certificate
            </button>
            <a
              href={COMPANY_INFO.udyamRegistration.portalVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-0.5"
            >
              <span>Verify on Govt Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
