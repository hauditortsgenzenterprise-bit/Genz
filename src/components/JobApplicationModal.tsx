import React, { useState, useEffect } from 'react';
import { 
  X, 
  Briefcase, 
  Upload, 
  CheckCircle2, 
  PhoneCall, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Laptop, 
  Smartphone,
  ArrowRight
} from 'lucide-react';
import { JobOpening, JobApplication } from '../types';
import { INITIAL_JOBS, COMPANY_INFO } from '../data/mockData';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedJob?: JobOpening | null;
  onApplicationSubmitted: (app: JobApplication) => void;
}

export const JobApplicationModal: React.FC<JobApplicationModalProps> = ({
  isOpen,
  onClose,
  selectedJob,
  onApplicationSubmitted,
}) => {
  const [jobId, setJobId] = useState(selectedJob?.id || INITIAL_JOBS[0].id);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Kolkata');
  const [shiftPreference, setShiftPreference] = useState('Morning Shift');
  const [hasLaptop, setHasLaptop] = useState(true);
  const [hasSmartphone, setHasSmartphone] = useState(true);
  const [experience, setExperience] = useState('Fresher');
  const [education, setEducation] = useState('12th Pass');
  const [resumeName, setResumeName] = useState<string | null>(null);
  const [submittedApp, setSubmittedApp] = useState<JobApplication | null>(null);

  useEffect(() => {
    if (selectedJob) {
      setJobId(selectedJob.id);
    }
  }, [selectedJob]);

  if (!isOpen) return null;

  const currentJob = INITIAL_JOBS.find((j) => j.id === jobId) || INITIAL_JOBS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newApp: JobApplication = {
      id: `GZE-2026-${randomSuffix}`,
      jobId: currentJob.id,
      jobTitle: currentJob.title,
      fullName: fullName.trim(),
      email: email.trim() || `${phone.slice(-4)}@candidate.in`,
      phone: phone.trim(),
      city: city.trim(),
      department: currentJob.department,
      shiftPreference,
      hasLaptop,
      hasSmartphone,
      status: 'Screening',
      appliedDate: new Date().toISOString().split('T')[0],
      notes: 'Application received online. Auto-assigned to Kolkata TA Desk for phone screening.',
    };

    onApplicationSubmitted(newApp);
    setSubmittedApp(newApp);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeName(e.target.files[0].name);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Close application form"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedApp ? (
          /* Submission Success State */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300 shadow-xs">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Application Submitted Successfully
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                Welcome to Gen Z Enterprise!
              </h3>
              <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto">
                Your application for <strong>{submittedApp.jobTitle}</strong> has been registered with our Kolkata recruitment team.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 max-w-md mx-auto text-left space-y-2 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500">Application Tracking ID:</span>
                <span className="font-mono font-extrabold text-indigo-700 text-sm">{submittedApp.id}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Applicant:</span>
                <span className="font-bold text-slate-900">{submittedApp.fullName}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Current Status:</span>
                <span className="font-semibold text-emerald-700">{submittedApp.status} (In Queue)</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Contact Number:</span>
                <span className="font-mono font-bold text-slate-900">{submittedApp.phone}</span>
              </div>
            </div>

            {/* Quick Actions after Apply */}
            <div className="space-y-2 max-w-md mx-auto pt-2">
              <a
                href={`https://wa.me/917044211966?text=Hi%20Gen%20Z%20Enterprise,%20I%20have%20submitted%20my%20application%20${submittedApp.id}%20for%20${encodeURIComponent(submittedApp.jobTitle)}.%20My%20name%20is%20${encodeURIComponent(submittedApp.fullName)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md shadow-emerald-600/25"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Notify HR via WhatsApp (7044211966)</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors"
              >
                Done / Back to Website
              </button>
            </div>
          </div>
        ) : (
          /* Application Form */
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
                <Briefcase className="w-3 h-3" /> 100% Free Candidate Application
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Join Gen Z Enterprise</h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill this simple form to apply for Work From Home, Zepto, Blinkit, Amazon, or BFSI roles.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Job Opening */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Selected Position *
                </label>
                <select
                  value={jobId}
                  onChange={(e) => setJobId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                >
                  {INITIAL_JOBS.map((j) => (
                    <option key={j.id} value={j.id}>
                      {j.title} ({j.salaryRange})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Debashis Mondal"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 7044211966"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Email & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. yourname@yahoo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Current City / Area in Kolkata
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Baranagar / Dunlop / Salt Lake"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Education & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Highest Education
                  </label>
                  <select
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  >
                    <option>10th Pass</option>
                    <option>12th Pass (Higher Secondary)</option>
                    <option>Graduate (BA / B.Com / B.Sc / B.Tech)</option>
                    <option>Post Graduate / Diploma</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Experience Level
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  >
                    <option>Fresher (0 Years)</option>
                    <option>6 Months - 1 Year</option>
                    <option>1 - 2 Years</option>
                    <option>3+ Years (Senior / TL)</option>
                  </select>
                </div>
              </div>

              {/* Hardware / WFH Readiness checkboxes */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2">
                <span className="text-[11px] font-bold text-slate-700 block">
                  Device Availability (For Remote / Field Coordination)
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasSmartphone}
                      onChange={(e) => setHasSmartphone(e.target.checked)}
                      className="rounded accent-blue-600"
                    />
                    <Smartphone className="w-3.5 h-3.5 text-blue-600" />
                    <span>Android Smartphone</span>
                  </label>

                  <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasLaptop}
                      onChange={(e) => setHasLaptop(e.target.checked)}
                      className="rounded accent-indigo-600"
                    />
                    <Laptop className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Laptop / PC</span>
                  </label>
                </div>
              </div>

              {/* Optional Resume Mockup */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Upload Resume / CV (Optional)
                </label>
                <div className="relative border border-dashed border-slate-300 hover:border-slate-400 rounded-xl p-3 text-center transition-colors bg-slate-50">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
                    <Upload className="w-4 h-4 text-blue-600" />
                    <span>{resumeName ? `Attached: ${resumeName}` : 'Click to attach PDF / DOCX resume'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Application to Kolkata HR</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-slate-500 mt-2">
                  🔒 Zero Fees Guaranteed. Your data is kept secure and handled strictly for hiring.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
