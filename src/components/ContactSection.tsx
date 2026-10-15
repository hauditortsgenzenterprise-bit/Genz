import React, { useState } from 'react';
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  ShieldAlert, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Building,
  Navigation,
  Award,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, FAQS } from '../data/mockData';

interface ContactSectionProps {
  onOpenUdyamModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenUdyamModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Job Application / Interview Query',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Building className="w-3.5 h-3.5 text-blue-600" />
            <span>KOLKATA HEADQUARTERS & WALK-IN DESK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect with Gen Z Enterprise
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Visit our registered Kolkata office on Kashi Nath Dutta Road or connect instantly via phone and WhatsApp.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Address */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden group hover:shadow-md hover:border-slate-300 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Registered Office Address</h3>
            <p className="text-sm text-slate-700 font-semibold leading-relaxed">
              Kashi Nath Dutta Road, Kolkata 700036
            </p>
            <p className="text-xs text-slate-500 mt-1">
              West Bengal, India (Easily accessible via Baranagar, Sinthee & Dunlop)
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs text-blue-700 font-medium">
              <Navigation className="w-3.5 h-3.5" />
              <span>Walk-in Interviews: Mon-Sat, 9:30 AM - 7:30 PM</span>
            </div>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden group hover:shadow-md hover:border-slate-300 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Recruitment Helplines</h3>
            <p className="text-2xl font-extrabold text-emerald-700 font-mono tracking-tight">
              7044211966
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Toll-free candidate assistance & interview desk
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex-1 text-center py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
              >
                Call Desk
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-emerald-800 border border-slate-200 text-xs font-bold transition-colors"
              >
                WhatsApp HR
              </a>
            </div>
          </div>

          {/* Card 3: Email & Corporate */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden group hover:shadow-md hover:border-slate-300 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 border border-indigo-100">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Official Email ID</h3>
            <p className="text-sm font-bold text-indigo-700 break-all">
              wfhgenzenterprise@yahoo.com
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Send resumes, vendor inquiries, and settlement files
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs text-slate-600 font-medium">
              <Clock className="w-3.5 h-3.5 text-indigo-600" />
              <span>Response within 4-6 business hours</span>
            </div>
          </div>
        </div>

        {/* Form & Map Landmark Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Send a Message to Kolkata HR</h3>
            <p className="text-xs text-slate-500 mb-6">
              Inquire about current openings, schedule an on-spot interview, or request vendor staffing contracts.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Message Dispatched Successfully!</h4>
                <p className="text-xs text-slate-600">
                  Our Kolkata recruitment coordinator will contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-emerald-700 underline hover:text-emerald-800"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Debashis Mondal"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 7044211966"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. you@yahoo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Inquiry Purpose</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    >
                      <option>Job Application / Interview Query</option>
                      <option>Want to be an HR / Recruiter on Gen Z Enterprise</option>
                      <option>Work From Home (WFH) Lead Filtration</option>
                      <option>Zepto / Blinkit Warehouse Joining</option>
                      <option>Loan Settlement Support</option>
                      <option>B2B Vendor Staffing Contract</option>
                      <option>Security Guard & Housekeeping Staffing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Your Message or Query</label>
                  <textarea
                    rows={4}
                    placeholder="Provide details about your experience, preferred location in Kolkata, or WFH setup..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to Gen Z Enterprise</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Map & Transit Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* Government of India Udyam Registration Certificate Card */}
            <div className="bg-amber-50/80 border-2 border-amber-300 rounded-2xl p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-amber-200">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-700" />
                  <span className="text-xs font-bold text-amber-950 uppercase tracking-wider">
                    Government Registered Enterprise
                  </span>
                </div>
                <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-mono font-bold">
                  MSME Govt of India
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between items-center text-slate-700">
                  <span className="text-slate-600">Enterprise Name:</span>
                  <span className="font-extrabold text-slate-900">{COMPANY_INFO.udyamRegistration.enterpriseName}</span>
                </div>
                <div className="flex justify-between items-center text-slate-700">
                  <span className="text-slate-600">Udyam Registration No:</span>
                  <span className="font-mono font-bold text-blue-900 bg-white px-2 py-0.5 rounded border border-amber-300">
                    {COMPANY_INFO.udyamRegistration.urn}
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-700">
                  <span className="text-slate-600">Registered Category:</span>
                  <span className="font-semibold text-slate-800">{COMPANY_INFO.udyamRegistration.type}</span>
                </div>
                <div className="flex justify-between items-center text-slate-700">
                  <span className="text-slate-600">Direct Helpline:</span>
                  <a href="tel:7044211966" className="font-bold text-emerald-700 hover:underline">
                    7044211966
                  </a>
                </div>
              </div>

              <p className="text-[11px] text-slate-600 leading-normal">
                All employees and job seekers can independently check this company registration on the official Ministry of MSME portal to ensure full legal compliance.
              </p>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={onOpenUdyamModal}
                  className="flex-1 py-2 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </button>
                <a
                  href={COMPANY_INFO.udyamRegistration.portalVerifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-xs transition-colors flex items-center gap-1 shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  <span>Govt Portal</span>
                </a>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Location Map Guide
                </span>
                <span className="text-[10px] bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded font-mono font-bold">
                  PIN 700036
                </span>
              </div>

              {/* Map Illustration Box */}
              <div className="my-4 rounded-xl bg-slate-50 border border-slate-200 p-5 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div>
                <MapPin className="w-10 h-10 text-rose-500 mx-auto mb-2 animate-bounce" />
                <h4 className="font-extrabold text-slate-900 text-base">Kashi Nath Dutta Road</h4>
                <p className="text-xs text-slate-600 mt-1">Kolkata 700036, West Bengal</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-left text-[11px] text-slate-600">
                  <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-xs">
                    <strong className="text-slate-900 block">Near Transit:</strong>
                    Baranagar Metro & Dunlop
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-xs">
                    <strong className="text-slate-900 block">Connectivity:</strong>
                    BT Road & Sinthee Crossing
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Kashi+Nath+Dutta+Road+Kolkata+700036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

              {/* Candidate Protection Warning */}
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-2">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-xs">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>OFFICIAL FRAUD & SCAM WARNING</span>
                </div>
                <p className="text-[11px] text-rose-800 leading-relaxed">
                  Gen Z Enterprise strictly enforces a <strong>100% Free Recruitment Policy</strong>. We do not charge registration charges, medical fees, gate pass charges, or uniform fees. If anyone asks you for money in our name, report immediately to <strong>7044211966</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions</h3>
            <p className="text-xs text-slate-500 mt-1">Everything you need to know about joining and working with us</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 text-left flex items-center justify-between text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-blue-600" /> : <ChevronDown className="w-4 h-4 shrink-0 text-slate-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
