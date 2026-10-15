import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VendorPartners } from './components/VendorPartners';
import { BFSISection } from './components/BFSISection';
import { CareerPortal } from './components/CareerPortal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { JobApplicationModal } from './components/JobApplicationModal';
import { ApplicationTrackerModal } from './components/ApplicationTrackerModal';
import { UdyamCertificateModal } from './components/UdyamCertificateModal';
import { JobOpening, JobApplication } from './types';
import { SAMPLE_APPLICATIONS, INITIAL_JOBS } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);
  const [selectedJobForApply, setSelectedJobForApply] = useState<JobOpening | null>(null);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState<boolean>(false);
  const [isUdyamModalOpen, setIsUdyamModalOpen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [applications, setApplications] = useState<JobApplication[]>(SAMPLE_APPLICATIONS);

  const handleApplyForJob = (job: JobOpening) => {
    setSelectedJobForApply(job);
    setIsApplyModalOpen(true);
  };

  const handleOpenGeneralApply = () => {
    setSelectedJobForApply(INITIAL_JOBS[0]);
    setIsApplyModalOpen(true);
  };

  const handleExploreJobs = () => {
    setActiveTab('careers');
    const el = document.getElementById('careers');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplicationSubmitted = (newApp: JobApplication) => {
    setApplications((prev) => [newApp, ...prev]);
  };

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenApplyModal={handleOpenGeneralApply}
        onOpenTrackModal={() => setIsTrackModalOpen(true)}
        onOpenUdyamModal={() => setIsUdyamModalOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreJobs={handleExploreJobs}
          onOpenTrackModal={() => setIsTrackModalOpen(true)}
          onOpenApplyModal={handleOpenGeneralApply}
          onOpenUdyamModal={() => setIsUdyamModalOpen(true)}
        />

        {/* 3rd-Party Vendor Partners (Zepto, Blinkit, Amazon, Flipkart, Apna Mart, Facility & Security) */}
        <VendorPartners
          onSelectRole={(category) => {
            handleExploreJobs();
          }}
          onOpenApplyModal={handleOpenGeneralApply}
        />

        {/* BFSI & Finance Department (Lead Filtration WFH, Loan Settlement, Credit Card) */}
        <BFSISection
          onOpenApplyModal={handleOpenGeneralApply}
        />

        {/* Dynamic Career Portal */}
        <CareerPortal
          onApplyForJob={handleApplyForJob}
          onOpenTrackModal={() => setIsTrackModalOpen(true)}
          onOpenUdyamModal={() => setIsUdyamModalOpen(true)}
        />

        {/* Kolkata Office, Map Landmark, Contact & Fraud Alert */}
        <ContactSection
          onOpenUdyamModal={() => setIsUdyamModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavClick={scrollToSection}
        onOpenApplyModal={handleOpenGeneralApply}
        onOpenUdyamModal={() => setIsUdyamModalOpen(true)}
      />

      {/* Integrated Live Chat Tools */}
      <ChatWidget
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
        onOpenApplyModal={handleOpenGeneralApply}
      />

      {/* Interactive Job Application Modal */}
      <JobApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        selectedJob={selectedJobForApply}
        onApplicationSubmitted={handleApplicationSubmitted}
      />

      {/* Interactive Application Tracker Modal */}
      <ApplicationTrackerModal
        isOpen={isTrackModalOpen}
        onClose={() => setIsTrackModalOpen(false)}
        applications={applications}
      />

      {/* Official Government of India Udyam Certificate Modal */}
      <UdyamCertificateModal
        isOpen={isUdyamModalOpen}
        onClose={() => setIsUdyamModalOpen(false)}
      />

      {/* Floating Quick Helpline Pill */}
      <div className="fixed bottom-5 left-5 z-40">
        <a
          href="tel:7044211966"
          className="group px-4 py-3 rounded-full bg-white/95 hover:bg-slate-50 text-slate-800 border-2 border-emerald-500 shadow-xl shadow-slate-400/25 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 ring-1 ring-emerald-500/30"
          title="Direct Recruitment Helpline: 7044211966"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            <span className="text-xs font-bold">📞</span>
          </div>
          <div className="text-left">
            <span className="block text-[9px] uppercase tracking-wider text-slate-500 font-bold leading-none">
              HR Helpline
            </span>
            <span className="text-xs font-extrabold text-emerald-700 font-mono">
              7044211966
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
