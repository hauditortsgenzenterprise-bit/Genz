import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Copy, 
  Check, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  FileText, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Printer, 
  Award,
  AlertTriangle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface UdyamCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UdyamCertificateModal: React.FC<UdyamCertificateModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const udyam = COMPANY_INFO.udyamRegistration;

  if (!isOpen) return null;

  const handleCopyUrn = () => {
    navigator.clipboard.writeText(udyam.urn);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 my-8 overflow-hidden print:border-none print:shadow-none print:p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors print:hidden"
          aria-label="Close certificate modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tricolor Ribbon on Top */}
        <div className="absolute top-0 left-0 right-0 h-2 flex">
          <div className="flex-1 bg-amber-500"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-emerald-600"></div>
        </div>

        {/* Certificate Header */}
        <div className="text-center pt-2 pb-4 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>GOVERNMENT OF INDIA REGISTERED ENTERPRISE</span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-2">
            {/* Government Emblem / Insignia Mockup */}
            <div className="w-12 h-12 rounded-full bg-amber-50 border-2 border-amber-300 flex items-center justify-center text-amber-700 font-serif font-black text-xs shadow-inner">
              <span className="text-center leading-none text-[9px] font-bold">
                सत्यमेव<br />जयते<br />GOVT
              </span>
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-slate-900">
                Ministry of Micro, Small and Medium Enterprises
              </h4>
              <p className="text-[11px] text-slate-500 font-medium">
                सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय • Government of India
              </p>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 tracking-tight">
            UDYAM REGISTRATION CERTIFICATE
          </h3>
          <p className="text-xs text-slate-500 font-semibold">
            उद्यम पंजीकरण प्रमाणपत्र
          </p>
        </div>

        {/* Live Status Callout */}
        <div className="my-4 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-extrabold tracking-wider text-emerald-800 block">
                Certificate Standing: ACTIVE & VERIFIED
              </span>
              <span className="text-base sm:text-lg font-mono font-extrabold text-slate-900 tracking-wider">
                {udyam.urn}
              </span>
            </div>
          </div>

          <button
            onClick={handleCopyUrn}
            className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 self-start sm:self-auto"
            title="Copy Udyam Registration Number"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copy URN</span>
              </>
            )}
          </button>
        </div>

        {/* Certificate Details Table */}
        <div className="bg-slate-50/80 rounded-2xl border border-slate-200 overflow-hidden text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="p-3.5 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">
                Name of Enterprise
              </span>
              <span className="font-extrabold text-slate-900 text-sm">
                {udyam.enterpriseName}
              </span>
            </div>

            <div className="p-3.5 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">
                Type of Enterprise
              </span>
              <span className="font-bold text-slate-800">
                {udyam.type}
              </span>
            </div>
          </div>

          <div className="border-t border-slate-200 p-3.5 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">
              Major Activity / Sector
            </span>
            <span className="font-semibold text-slate-900">
              {udyam.majorActivity}
            </span>
            <p className="text-[11px] text-slate-600 mt-0.5">
              NIC Codes: <strong className="text-indigo-700">{udyam.nicCode}</strong> — {udyam.nicDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-slate-200 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="p-3.5 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">
                Registered Office Address
              </span>
              <span className="text-slate-800 font-medium">
                {udyam.address}
              </span>
            </div>

            <div className="p-3.5 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">
                Official Verification Helpline & Email
              </span>
              <div className="space-y-0.5">
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-emerald-700 font-bold hover:underline block font-mono">
                  📞 {COMPANY_INFO.displayPhone}
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-700 hover:underline block text-[11px]">
                  ✉️ {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Candidate & Employee Government Verification Instructions */}
        <div className="mt-5 p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
          <div className="flex items-center gap-2 mb-2 text-blue-900 font-bold text-xs">
            <Award className="w-4 h-4 text-blue-700" />
            <span>How Candidates and Employees Can Verify on Official Govt Portal:</span>
          </div>

          <ol className="list-decimal list-inside space-y-1 text-xs text-slate-700">
            <li>
              Visit the official Ministry of MSME verification page: 
              <strong className="text-blue-800 font-mono text-[11px] ml-1">udyamregistration.gov.in/Udyam_Verify.aspx</strong>
            </li>
            <li>
              Enter Udyam Registration Number: <span className="font-mono font-bold bg-white px-1.5 py-0.5 rounded border border-blue-300 text-blue-900">{udyam.urn}</span>
            </li>
            <li>
              Enter the verification Captcha on the government portal and click <strong className="text-slate-900">Verify</strong>.
            </li>
            <li>
              The official Government of India database will confirm <strong>GEN Z ENTERPRISE</strong> as a registered enterprise.
            </li>
          </ol>

          <div className="mt-3 pt-3 border-t border-blue-200/80 flex flex-wrap items-center justify-between gap-3">
            <a
              href={udyam.portalVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md shadow-blue-700/20 flex items-center gap-2 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Verify on Official Govt Portal (Udyam_Verify.aspx)</span>
            </a>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors print:hidden"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print / Save Copy</span>
            </button>
          </div>
        </div>

        {/* Zero Scam / Fraud Protection Warning */}
        <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-slate-700 flex items-start gap-2.5 text-[11px]">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900">Employee & Candidate Protection Note:</strong> As a registered MSME entity under the Government of India, 
            Gen Z Enterprise strictly complies with lawful, zero-cost recruitment regulations. We never charge money, gate-pass fees, or training charges.
            Direct verification helpline: <a href="tel:7044211966" className="text-emerald-700 font-bold underline">7044211966</a>.
          </div>
        </div>

        <div className="mt-5 text-center print:hidden">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
          >
            Close Certificate Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
