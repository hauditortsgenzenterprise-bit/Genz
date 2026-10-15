import React, { useState, useMemo } from 'react';
import { 
  Briefcase, 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  IndianRupee, 
  Users, 
  Laptop, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Flame, 
  ArrowRight, 
  Calculator, 
  PhoneCall, 
  MessageSquare,
  FileCheck2,
  Sparkles,
  UserCheck,
  Award
} from 'lucide-react';
import { JobOpening, JobDepartment } from '../types';
import { INITIAL_JOBS, COMPANY_INFO } from '../data/mockData';

interface CareerPortalProps {
  onApplyForJob: (job: JobOpening) => void;
  onOpenTrackModal: () => void;
  onOpenUdyamModal?: () => void;
}

export const CareerPortal: React.FC<CareerPortalProps> = ({
  onApplyForJob,
  onOpenTrackModal,
  onOpenUdyamModal,
}) => {
  const [selectedDept, setSelectedDept] = useState<JobDepartment>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('All');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  // Calculator State
  const [calcRole, setCalcRole] = useState<'lead_filtration' | 'loan_settlement' | 'credit_card' | 'zepto_picker'>('lead_filtration');
  const [calcVolume, setCalcVolume] = useState<number>(25);

  const departments: JobDepartment[] = [
    'All',
    'Work From Home (WFH)',
    'BFSI & Finance',
    'Quick Commerce & Warehouse',
    'Facility & Security',
  ];

  const filteredJobs = useMemo(() => {
    return INITIAL_JOBS.filter((job) => {
      // Department filter
      if (selectedDept !== 'All' && job.department !== selectedDept) {
        return false;
      }
      // Work type filter
      if (filterType !== 'All' && job.type !== filterType) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(query);
        const matchesClient = job.clientPartner?.toLowerCase().includes(query) || false;
        const matchesLoc = job.location.toLowerCase().includes(query);
        const matchesTags = job.tags.some((t) => t.toLowerCase().includes(query));
        const matchesDesc = job.description.toLowerCase().includes(query);
        return matchesTitle || matchesClient || matchesLoc || matchesTags || matchesDesc;
      }
      return true;
    });
  }, [selectedDept, filterType, searchQuery]);

  // Calculate earnings for calculator
  const calculatedEarnings = useMemo(() => {
    switch (calcRole) {
      case 'lead_filtration': {
        const base = 15000;
        const incentivePerLead = 40;
        const monthlyLeads = calcVolume * 24; // 24 working days
        const incentive = monthlyLeads * incentivePerLead * 0.4; // 40% qualification rate
        return {
          roleName: 'WFH Lead Filtration Specialist',
          base,
          incentive: Math.round(incentive),
          total: Math.round(base + incentive),
          metricLabel: 'Daily Inbound Leads Called',
          unit: 'calls/day',
        };
      }
      case 'loan_settlement': {
        const base = 20000;
        const avgSettlementFee = 15000;
        const closedCases = Math.floor(calcVolume / 5);
        const commission = closedCases * avgSettlementFee * 0.08;
        return {
          roleName: 'Loan Settlement Advisor',
          base,
          incentive: Math.round(commission),
          total: Math.round(base + commission),
          metricLabel: 'Monthly Distressed Accounts Handled',
          unit: 'accounts',
        };
      }
      case 'credit_card': {
        const base = 16000;
        const cardPayout = calcVolume > 20 ? 650 : 450;
        const cardIncentive = calcVolume * cardPayout;
        return {
          roleName: 'Credit Card Telesales & KYC Officer',
          base,
          incentive: Math.round(cardIncentive),
          total: Math.round(base + cardIncentive),
          metricLabel: 'Monthly Cards Successfully Issued',
          unit: 'cards/month',
        };
      }
      case 'zepto_picker': {
        const base = 15500;
        const perOrderBonus = 8;
        const monthlyOrders = calcVolume * 26; // 26 days
        const bonus = monthlyOrders * perOrderBonus;
        return {
          roleName: 'Zepto Dark Store Picker & Packer',
          base,
          incentive: Math.round(bonus),
          total: Math.round(base + bonus),
          metricLabel: 'Daily Orders Packed & Picked',
          unit: 'orders/day',
        };
      }
    }
  }, [calcRole, calcVolume]);

  const toggleExpand = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  return (
    <section id="careers" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
              <Briefcase className="w-3.5 h-3.5 text-blue-600" />
              <span>DYNAMIC CAREER & HIRING PORTAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Live Openings in Kolkata & WFH
            </h2>
            <p className="mt-2 text-slate-600 text-sm max-w-2xl">
              100% Free Placement Guarantee. Direct hiring for Zepto, Blinkit, Amazon, Flipkart, Apna Mart, BFSI finance lead filtration, security guards, and corporate housekeeping.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenTrackModal}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <FileCheck2 className="w-4 h-4 text-indigo-600" />
              <span>Track Application</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>HR Desk: 7044211966</span>
            </a>
          </div>
        </div>

        {/* Want to be an HR on Gen Z Enterprise Feature Callout */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 via-indigo-50/70 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 sm:p-7 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200 text-xs font-bold">
                <UserCheck className="w-4 h-4 text-indigo-600" />
                <span>INTERNAL HIRING CALL: BECOME A RECRUITER</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Want to be an HR on Gen Z Enterprise? Apply Here or on Job Portal!
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Join our internal Talent Acquisition & Human Resources team in Kolkata (Kashi Nath Dutta Road, 700036) or Work From Home. Help us recruit for Zepto, Blinkit, Amazon, Flipkart, Apna Mart, and remote BFSI financial teams.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-700 pt-1">
                <span className="bg-white/80 px-2.5 py-1 rounded-md border border-indigo-100">💰 <strong>₹18,000 - ₹32,000/month</strong> + Incentives</span>
                <span className="bg-white/80 px-2.5 py-1 rounded-md border border-indigo-100">📍 Kolkata HQ / Full WFH Available</span>
                <span className="bg-white/80 px-2.5 py-1 rounded-md border border-indigo-100">🎓 Freshers & Experienced Welcome</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
              <button
                onClick={() => {
                  const hrJob = INITIAL_JOBS.find(j => j.id === 'GZE-HR-100') || INITIAL_JOBS[0];
                  onApplyForJob(hrJob);
                }}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm shadow-md shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <UserCheck className="w-4 h-4" />
                <span>Apply for HR Position Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`https://wa.me/917044211966?text=Hi%20Gen%20Z%20Enterprise,%20I%20want%20to%20apply%20to%20be%20an%20HR%20Recruiter%20at%20your%20company`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp HR Line (7044211966)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search jobs by title, partner (Zepto, Blinkit, Amazon), skill, or Kolkata location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Work Type Filter */}
            <div className="md:col-span-4">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                aria-label="Filter job openings by work arrangement"
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="All">All Work Arrangements</option>
                <option value="Work From Home">Work From Home (WFH Only)</option>
                <option value="Full Time">Full Time</option>
                <option value="Rotational Shifts">Rotational Shifts (Dark Store/Warehouse)</option>
              </select>
            </div>
          </div>

          {/* Department Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200">
            <span className="text-xs text-slate-500 font-semibold mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Dept:
            </span>
            {departments.map((dept) => {
              const isSelected = selectedDept === dept;
              return (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-500'
                      : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {dept}
                </button>
              );
            })}
          </div>
        </div>



        {/* Direct Candidate Helpline Banner */}
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-slate-700">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <PhoneCall className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block">Prefer talking to a recruiter directly?</span>
              <span className="text-slate-600">Call our official Kolkata line <strong className="text-emerald-700">7044211966</strong> for immediate screening & interview schedule.</span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-sm transition-all flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call 7044211966</span>
            </a>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-500">
          <span>Showing <strong className="text-slate-900">{filteredJobs.length}</strong> active openings</span>
          <span className="text-emerald-700 font-medium flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Updated today with Kolkata & Pan-India roles
          </span>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 gap-4 mb-14">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <Briefcase className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No matching job openings found</h3>
              <p className="text-xs text-slate-500 mt-1">Try clearing your search query or selecting "All" departments.</p>
              <button
                onClick={() => { setSelectedDept('All'); setSearchQuery(''); setFilterType('All'); }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;
              const isWFH = job.type === 'Work From Home' || job.department === 'Work From Home (WFH)';

              return (
                <div
                  key={job.id}
                  className={`bg-white border rounded-2xl p-5 sm:p-6 transition-all shadow-sm ${
                    job.urgentHiring
                      ? 'border-indigo-300 hover:border-indigo-400 hover:shadow-md'
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {job.urgentHiring && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                            <Flame className="w-3 h-3 text-rose-500" /> URGENT HIRING
                          </span>
                        )}

                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          isWFH
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}>
                          {job.type}
                        </span>

                        {job.clientPartner && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                            Partner: {job.clientPartner}
                          </span>
                        )}

                        <span className="text-[11px] text-slate-400 font-mono">
                          {job.id}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-rose-500" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <IndianRupee className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="font-bold text-emerald-700">{job.salaryRange}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-indigo-600" />
                          <span>{job.openingsCount} Vacancies</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0 pt-2 lg:pt-0">
                      <button
                        onClick={() => toggleExpand(job.id)}
                        className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 flex items-center gap-1.5 transition-colors"
                      >
                        <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      <a
                        href={`https://wa.me/917044211966?text=Hi%20Gen%20Z%20Enterprise,%20I%20want%20to%20apply%20for%20${encodeURIComponent(job.title)}%20(${job.id})`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold transition-colors flex items-center gap-1"
                        title="Chat with HR on WhatsApp"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WhatsApp</span>
                      </a>

                      <button
                        onClick={() => onApplyForJob(job)}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition-all flex items-center gap-1.5"
                      >
                        <span>Apply Online</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Expanded Details Pane */}
                  {isExpanded && (
                    <div className="mt-5 pt-5 border-t border-slate-200 space-y-4 animate-in fade-in duration-150">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                          <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Key Responsibilities:
                          </h4>
                          <ul className="space-y-1.5 text-slate-600">
                            {job.responsibilities.map((r, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="text-blue-600 font-bold">•</span>
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                          <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Candidate Eligibility:
                          </h4>
                          <ul className="space-y-1.5 text-slate-600">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="text-emerald-600 font-bold">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                            <li className="pt-1 text-[11px] text-slate-500">
                              <strong>Education:</strong> {job.education}
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Incentive note */}
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                          <IndianRupee className="w-4 h-4 text-emerald-600" />
                          <span>Incentive & Bonus: {job.incentives}</span>
                        </div>
                        <button
                          onClick={() => onApplyForJob(job)}
                          className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-lg transition-colors self-start sm:self-auto shadow-sm"
                        >
                          Fill Application Form
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Dynamic Salary & Commission Calculator */}
        <div className="bg-gradient-to-r from-slate-50 via-indigo-50/40 to-blue-50/50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold">
                <Calculator className="w-3.5 h-3.5 text-indigo-600" />
                <span>INTERACTIVE EARNING ESTIMATOR</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Calculate Your Expected Monthly Income
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Choose a job profile and adjust your daily activity target to view real-time estimates of your guaranteed base pay plus performance incentives.
              </p>

              {/* Role Selector Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {[
                  { id: 'lead_filtration', label: 'Lead Filtration' },
                  { id: 'loan_settlement', label: 'Loan Settlement' },
                  { id: 'credit_card', label: 'Credit Card Sales' },
                  { id: 'zepto_picker', label: 'Zepto Picker' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCalcRole(item.id as any)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all text-center ${
                      calcRole === item.id
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Volume Slider */}
              <div className="pt-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-semibold">{calculatedEarnings.metricLabel}:</span>
                  <span className="font-mono font-bold text-indigo-700 bg-white border border-slate-200 px-2.5 py-0.5 rounded shadow-sm">
                    {calcVolume} {calculatedEarnings.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="1"
                  value={calcVolume}
                  onChange={(e) => setCalcVolume(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>Part-time / Moderate</span>
                  <span>Full-time Target</span>
                  <span>High Performer</span>
                </div>
              </div>
            </div>

            {/* Calculated Result Card */}
            <div className="lg:col-span-5 bg-white border border-indigo-200 rounded-2xl p-6 text-center space-y-4 shadow-sm">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
                <IndianRupee className="w-3.5 h-3.5 text-emerald-600" />
                <span>AMOUNTS IN INDIAN RUPEES (INR ₹)</span>
              </div>

              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">
                Estimated Monthly Earning
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 flex items-center justify-center gap-1">
                <span>₹{calculatedEarnings.total.toLocaleString('en-IN')}</span>
                <span className="text-xs font-medium text-slate-500">INR / month</span>
              </div>

              <div className="space-y-2 py-3 border-y border-slate-200 text-xs">
                <div className="flex justify-between text-slate-700">
                  <span className="flex items-center gap-1">
                    <IndianRupee className="w-3 h-3 text-slate-400" /> Fixed Base Salary:
                  </span>
                  <span className="font-semibold text-slate-900">₹{calculatedEarnings.base.toLocaleString('en-IN')} INR</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span className="flex items-center gap-1">
                    <IndianRupee className="w-3 h-3 text-emerald-600" /> Est. Performance Bonus:
                  </span>
                  <span className="font-semibold text-emerald-700">+₹{calculatedEarnings.incentive.toLocaleString('en-IN')} INR</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500">
                Punctuality & attendance bonus of ₹1,000 to ₹1,500 INR additional upon 95% roster attendance.
              </div>

              <button
                onClick={() => {
                  const targetJob = INITIAL_JOBS.find(j => j.tags.some(t => t.toLowerCase().includes(calcRole.replace('_', ' '))));
                  if (targetJob) {
                    onApplyForJob(targetJob);
                  } else {
                    onApplyForJob(INITIAL_JOBS[0]);
                  }
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Apply for this Role Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
