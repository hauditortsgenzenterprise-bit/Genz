import React, { useState } from 'react';
import { 
  Briefcase, 
  PhoneCall, 
  MessageSquare, 
  MapPin, 
  Menu, 
  X, 
  Laptop, 
  ShieldCheck, 
  ChevronRight,
  TrendingUp,
  FileCheck2,
  Award
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

import { CompanyLogo } from './CompanyLogo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenApplyModal?: () => void;
  onOpenTrackModal?: () => void;
  onOpenUdyamModal?: () => void;
  onOpenChat?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenApplyModal,
  onOpenTrackModal,
  onOpenUdyamModal,
  onOpenChat,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'vendors', label: 'Vendor Network' },
    { id: 'bfsi', label: 'BFSI & Finance (WFH)' },
    { id: 'careers', label: 'Career Portal', badge: 'Hiring' },
    { id: 'contact', label: 'Kolkata Office' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-800 transition-all shadow-sm">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-xs py-1.5 px-4 text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-indigo-200">
            <span className="inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              VERIFIED VENDOR
            </span>
            <button
              onClick={onOpenUdyamModal}
              className="inline-flex items-center gap-1 font-bold px-2.5 py-0.5 rounded-full bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-400/40 text-[10px] transition-colors"
              title="Click to check Government Udyam Registration Certificate"
            >
              <Award className="w-3 h-3 text-amber-300" />
              <span>Govt Registered (Udyam: UDYAM-WB-10-0049281)</span>
            </button>
            <span className="hidden sm:inline text-slate-200">
              Zepto • Blinkit • Flipkart • Amazon • Apna Mart • Security & Housekeeping
            </span>
            <span className="sm:hidden text-slate-200">
              Zepto • Blinkit • Amazon • WFH Finance
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-200">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-emerald-400" />
              <span className="font-bold text-emerald-300">{COMPANY_INFO.displayPhone}</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <div className="hidden md:flex items-center gap-1 text-slate-300 text-[11px]">
              <MapPin className="w-3 h-3 text-indigo-400" />
              <span>Kashi Nath Dutta Rd, Kolkata 700036</span>
            </div>
            <button
              onClick={onOpenUdyamModal}
              className="hidden xl:flex items-center gap-1 text-xs text-amber-300 hover:text-amber-200 hover:underline transition-all"
              title="Verify Government MSME Certificate"
            >
              <Award className="w-3 h-3 text-amber-300" />
              <span>Govt Certificate</span>
            </button>
            <button
              onClick={onOpenTrackModal}
              className="hidden lg:flex items-center gap-1 text-xs text-indigo-200 hover:text-white hover:underline transition-all"
            >
              <FileCheck2 className="w-3 h-3 text-indigo-400" />
              <span>Track Application</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group py-2"
          >
            <div className="flex items-center group-hover:opacity-95 transition-opacity">
              <CompanyLogo variant="header" theme="light" size="lg" className="h-11 sm:h-12 w-auto" />
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all relative flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-blue-700 bg-blue-50/90 shadow-sm border border-blue-200/80 font-bold' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                      link.badge === 'Hiring' 
                        ? 'bg-rose-100 text-rose-700 border border-rose-300' 
                        : 'bg-indigo-100 text-indigo-700 border border-indigo-300'
                    }`}>
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 transition-all shadow-md shadow-emerald-600/20"
              title="Call Kolkata Recruitment Desk directly"
            >
              <PhoneCall className="w-3.5 h-3.5 text-white animate-bounce" />
              <span>Call: 7044211966</span>
            </a>

            <button
              onClick={onOpenChat}
              className="p-2.5 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 transition-colors relative"
              title="Open Live Chat / HR Desk"
            >
              <MessageSquare className="w-4 h-4 text-indigo-600" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse"></span>
            </button>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1.5 transition-colors"
            >
              <span>WhatsApp HR</span>
            </a>

            <button
              onClick={onOpenUdyamModal}
              className="px-3 py-2 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1.5 transition-colors shadow-xs"
              title="Click to check Government Udyam Registration Certificate"
            >
              <Award className="w-3.5 h-3.5 text-amber-700" />
              <span>Govt Udyam Certificate</span>
            </button>

            <button
              onClick={onOpenApplyModal}
              className="px-4 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-indigo-600/25 flex items-center gap-1.5 transition-all active:scale-95"
            >
              <Briefcase className="w-4 h-4" />
              <span>Apply for Job</span>
            </button>
          </div>

          {/* Mobile Menu & Quick Call Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center gap-1 shadow-md shadow-emerald-600/30"
              title="Call 7044211966"
            >
              <PhoneCall className="w-3.5 h-3.5 text-white" />
              <span>7044211966</span>
            </a>
            <button
              onClick={onOpenChat}
              className="p-2 text-slate-600 bg-slate-100 rounded-lg border border-slate-200"
              aria-label="Open HR Chat"
            >
              <MessageSquare className="w-4 h-4 text-indigo-600" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                  activeTab === link.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenUdyamModal?.();
              }}
              className="w-full py-2.5 px-3 rounded-lg text-sm font-bold bg-amber-50 text-amber-900 border border-amber-300 flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4 text-amber-700" />
              <span>Govt Udyam Certificate (UDYAM-WB-10-0049281)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrackModal?.();
              }}
              className="w-full py-2.5 px-3 rounded-lg text-sm font-medium bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center gap-2"
            >
              <FileCheck2 className="w-4 h-4 text-indigo-600" />
              <span>Track Application Status</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal?.();
              }}
              className="w-full py-2.5 px-3 rounded-lg text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
            >
              <Briefcase className="w-4 h-4" />
              <span>Apply Online Now</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full py-2.5 px-3 rounded-lg text-sm font-bold bg-emerald-600 text-white flex items-center justify-center gap-2 shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>Call Kolkata Desk: 7044211966</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
