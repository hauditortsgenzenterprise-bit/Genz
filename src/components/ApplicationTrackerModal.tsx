import React, { useState } from 'react';
import { 
  X, 
  Search, 
  FileCheck2, 
  CheckCircle2, 
  Clock, 
  PhoneCall, 
  MessageSquare, 
  AlertCircle,
  Building,
  UserCheck
} from 'lucide-react';
import { JobApplication } from '../types';
import { SAMPLE_APPLICATIONS, COMPANY_INFO } from '../data/mockData';

interface ApplicationTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  applications: JobApplication[];
}

export const ApplicationTrackerModal: React.FC<ApplicationTrackerModalProps> = ({
  isOpen,
  onClose,
  applications,
}) => {
  const [searchKey, setSearchKey] = useState('');
  const [activeResult, setActiveResult] = useState<JobApplication | null>(SAMPLE_APPLICATIONS[0]);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const allApps = [...applications, ...SAMPLE_APPLICATIONS];

  const handleSearch = (queryKey?: string) => {
    const q = (queryKey || searchKey).trim().toLowerCase();
    if (!q) return;

    setHasSearched(true);
    const found = allApps.find(
      (a) =>
        a.id.toLowerCase() === q ||
        a.phone.includes(q) ||
        a.email.toLowerCase().includes(q) ||
        a.fullName.toLowerCase().includes(q)
    );

    setActiveResult(found || null);
  };

  const steps = [
    { title: 'Application Received', label: 'Screening round auto-initiated' },
    { title: 'Telephonic Screening', label: 'Spoken round with Kolkata HR Desk' },
    { title: 'Document Verification', label: 'Aadhaar, PAN & Bank validation' },
    { title: 'Offer & Onboarding', label: 'Roster allocation & training start' },
  ];

  const getStepIndex = (status: JobApplication['status']) => {
    switch (status) {
      case 'Received': return 0;
      case 'Screening': return 1;
      case 'Interview Scheduled': return 2;
      case 'Document Verified': return 3;
      case 'Selected': return 4;
      default: return 1;
    }
  };

  const currentStep = activeResult ? getStepIndex(activeResult.status) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-200 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close status tracker"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-2">
            <FileCheck2 className="w-3 h-3" /> Live Candidate Tracker
          </div>
          <h3 className="text-2xl font-extrabold text-white">Track Application Status</h3>
          <p className="text-xs text-slate-400 mt-1">
            Enter your Application ID or registered mobile number to check hiring status.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="e.g. GZE-2026-7842 or 9830112233"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            onClick={() => handleSearch()}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1.5"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
          </button>
        </div>

        {/* Quick Demo Pre-fill chips */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-[11px] text-slate-400">
          <span>Try Demo IDs:</span>
          {['GZE-2026-7842', 'GZE-2026-8190', 'GZE-2026-6421'].map((id) => (
            <button
              key={id}
              onClick={() => {
                setSearchKey(id);
                handleSearch(id);
              }}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-indigo-300 font-mono text-[10px]"
            >
              {id}
            </button>
          ))}
        </div>

        {/* Result Area */}
        {activeResult ? (
          <div className="space-y-6">
            {/* Header info */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span className="font-mono font-bold text-indigo-400 text-sm">{activeResult.id}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {activeResult.status}
                </span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-500">Applicant:</span>
                <span className="font-semibold text-white">{activeResult.fullName}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-500">Applied Role:</span>
                <span className="font-semibold text-white">{activeResult.jobTitle}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-500">Applied Date:</span>
                <span>{activeResult.appliedDate}</span>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                Recruitment Stages
              </span>
              <div className="space-y-3">
                {steps.map((step, idx) => {
                  const isDone = idx < currentStep;
                  const isCurrent = idx === currentStep - 1;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                        isDone
                          ? 'bg-emerald-600 text-white'
                          : isCurrent
                          ? 'bg-blue-600 text-white ring-4 ring-blue-500/20 animate-pulse'
                          : 'bg-slate-800 text-slate-500'
                      }`}>
                        {isDone ? '✓' : idx + 1}
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${isDone || isCurrent ? 'text-white' : 'text-slate-500'}`}>
                          {step.title}
                        </div>
                        <div className="text-[11px] text-slate-400">{step.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* HR Note */}
            {activeResult.notes && (
              <div className="p-3.5 bg-blue-950/30 border border-blue-900/40 rounded-xl text-xs text-blue-200">
                <strong>HR Desk Remarks:</strong> {activeResult.notes}
              </div>
            )}

            {/* Direct Connect Buttons */}
            <div className="flex gap-2 pt-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold text-center border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Kolkata Desk</span>
              </a>

              <a
                href={`https://wa.me/917044211966?text=Hi,%20I%20am%20tracking%20my%20application%20${activeResult.id}%20for%20${encodeURIComponent(activeResult.jobTitle)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Query</span>
              </a>
            </div>
          </div>
        ) : hasSearched ? (
          <div className="text-center py-8 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
            <AlertCircle className="w-10 h-10 text-amber-400 mx-auto" />
            <h4 className="text-sm font-bold text-white">No Application Found</h4>
            <p className="text-xs text-slate-400 max-w-xs mx-auto">
              Please double check the ID or contact our recruitment team directly at <strong>{COMPANY_INFO.phone}</strong>.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};
