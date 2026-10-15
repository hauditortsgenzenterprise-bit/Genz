import React, { useState, useEffect } from 'react';
import { 
  Laptop, 
  Users, 
  PhoneCall, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  FileText, 
  Plus, 
  Send, 
  AlertCircle, 
  Calendar, 
  ShieldCheck, 
  Check, 
  X, 
  Pause, 
  Play, 
  BookOpen, 
  ExternalLink,
  Sparkles,
  Award
} from 'lucide-react';
import { LeadItem, TeamNote } from '../types';
import { INITIAL_LEADS, INITIAL_TEAM_NOTES, COMPANY_INFO } from '../data/mockData';

export const VirtualWorkspace: React.FC = () => {
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<'crm' | 'standup' | 'scripts' | 'clock'>('crm');

  // Leads State
  const [leads, setLeads] = useState<LeadItem[]>(INITIAL_LEADS);
  const [leadFilter, setLeadFilter] = useState<string>('All');
  const [selectedLead, setSelectedLead] = useState<LeadItem | null>(INITIAL_LEADS[0]);

  // Shift Clock state
  const [isOnShift, setIsOnShift] = useState<boolean>(true);
  const [shiftSeconds, setShiftSeconds] = useState<number>(3 * 3600 + 24 * 60 + 15); // Started 3h 24m ago
  const [breakMode, setBreakMode] = useState<boolean>(false);

  // Team Notes State
  const [teamNotes, setTeamNotes] = useState<TeamNote[]>(INITIAL_TEAM_NOTES);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteCategory, setNewNoteCategory] = useState<'Announcement' | 'Target' | 'SOP Update' | 'Kudos'>('Announcement');

  // Timer effect for shift
  useEffect(() => {
    let interval: any = null;
    if (isOnShift && !breakMode) {
      interval = setInterval(() => {
        setShiftSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOnShift, breakMode]);

  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Lead qualification action
  const updateLeadStatus = (leadId: string, newStatus: LeadItem['status']) => {
    setLeads((prev) =>
      prev.map((lead) => {
        if (lead.id === leadId) {
          return { ...lead, status: newStatus };
        }
        return lead;
      })
    );
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead({ ...selectedLead, status: newStatus });
    }
  };

  // Add new lead note
  const handleAddTeamNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteContent.trim()) return;

    const newNote: TeamNote = {
      id: `NOTE-${Date.now()}`,
      author: 'You (Remote Agent)',
      role: 'WFH Team Member',
      time: 'Just now',
      category: newNoteCategory,
      content: newNoteContent.trim(),
    };

    setTeamNotes([newNote, ...teamNotes]);
    setNewNoteContent('');
  };

  // Metrics
  const qualifiedCount = leads.filter((l) => l.status === 'Qualified' || l.status === 'Settlement Scheduled').length;
  const processedCount = leads.filter((l) => l.status !== 'Pending').length;
  const earnedBonusToday = qualifiedCount * 45;

  const filteredLeads = leads.filter((lead) => {
    if (leadFilter === 'All') return true;
    return lead.status === leadFilter;
  });

  return (
    <section id="workspace" className="py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Workspace Title & Live Status */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
              <Laptop className="w-3.5 h-3.5" />
              <span>COLLABORATIVE VIRTUAL WORKSPACE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Agent Command Center & Remote Hub
            </h2>
            <p className="mt-1 text-slate-300 text-sm">
              Integrated real-time workspace for Gen Z Enterprise remote agents: Lead Filtration CRM, daily team standup, and operational guides.
            </p>
          </div>

          {/* Quick Shift Status & Punch Card */}
          <div className="flex flex-wrap items-center gap-3 bg-slate-900 border border-slate-800 p-3 rounded-2xl shrink-0">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-950 rounded-xl border border-slate-800 text-xs">
              <div className={`w-2.5 h-2.5 rounded-full ${isOnShift ? (breakMode ? 'bg-amber-400 animate-ping' : 'bg-emerald-400 animate-pulse') : 'bg-rose-400'}`} />
              <span className="text-slate-400">Shift Status:</span>
              <span className="font-bold text-white">
                {isOnShift ? (breakMode ? 'On Break' : 'Active On Shift') : 'Punched Out'}
              </span>
            </div>

            <div className="px-3 py-1.5 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono font-bold text-indigo-300">
              ⏱ {formatTime(shiftSeconds)}
            </div>

            <div className="flex items-center gap-1.5">
              {isOnShift ? (
                <>
                  <button
                    onClick={() => setBreakMode(!breakMode)}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-semibold border border-slate-700 flex items-center gap-1"
                    title={breakMode ? 'Resume Shift' : 'Take Break'}
                  >
                    {breakMode ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => setIsOnShift(false)}
                    className="px-3 py-1.5 rounded-lg bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/40 text-xs font-semibold"
                  >
                    Punch Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => { setIsOnShift(true); setBreakMode(false); }}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20"
                >
                  Punch In
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Workspace Sub-Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-800 pb-4">
          <button
            onClick={() => setActiveWorkspaceTab('crm')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeWorkspaceTab === 'crm'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <PhoneCall className="w-4 h-4" />
            <span>Lead Filtration CRM Dialer</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-blue-400/20 text-white font-bold">
              {leads.length}
            </span>
          </button>

          <button
            onClick={() => setActiveWorkspaceTab('standup')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeWorkspaceTab === 'standup'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Team Standup & Bulletin</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-indigo-400/20 text-white font-bold">
              {teamNotes.length}
            </span>
          </button>

          <button
            onClick={() => setActiveWorkspaceTab('scripts')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeWorkspaceTab === 'scripts'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>SOP & Calling Scripts</span>
          </button>
        </div>

        {/* TAB 1: LEAD FILTRATION CRM DIALER */}
        {activeWorkspaceTab === 'crm' && (
          <div className="space-y-6">
            {/* Live Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
                <span className="text-[11px] text-slate-400 uppercase font-semibold">Leads in Queue</span>
                <div className="text-2xl font-extrabold text-white mt-1">{leads.length}</div>
                <span className="text-[10px] text-blue-400">Assigned today</span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
                <span className="text-[11px] text-slate-400 uppercase font-semibold">Screened / Processed</span>
                <div className="text-2xl font-extrabold text-white mt-1">{processedCount}</div>
                <span className="text-[10px] text-slate-400 font-mono">
                  {Math.round((processedCount / leads.length) * 100)}% shift progress
                </span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
                <span className="text-[11px] text-slate-400 uppercase font-semibold">Qualified Leads</span>
                <div className="text-2xl font-extrabold text-emerald-400 mt-1">{qualifiedCount}</div>
                <span className="text-[10px] text-emerald-400">Eligible for bonus</span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
                <span className="text-[11px] text-slate-400 uppercase font-semibold">Today's Bonus Earned</span>
                <div className="text-2xl font-extrabold text-amber-400 mt-1">₹{earnedBonusToday}</div>
                <span className="text-[10px] text-amber-300 font-mono">Credited to wallet</span>
              </div>
            </div>

            {/* Main CRM Layout: Queue + Lead Caller View */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Lead Queue List */}
              <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Customer Calling Queue
                  </span>
                  <div className="flex gap-1">
                    {['All', 'Pending', 'Qualified'].map((f) => (
                      <button
                        key={f}
                        onClick={() => setLeadFilter(f)}
                        className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                          leadFilter === f
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
                  {filteredLeads.map((lead) => {
                    const isSelected = selectedLead?.id === lead.id;
                    return (
                      <div
                        key={lead.id}
                        onClick={() => setSelectedLead(lead)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-blue-950/60 border-blue-500 shadow-md ring-1 ring-blue-500/50'
                            : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white text-sm">{lead.customerName}</span>
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            lead.status === 'Qualified' || lead.status === 'Settlement Scheduled'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : lead.status === 'Follow Up'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : lead.status === 'Rejected'
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                              : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          }`}>
                            {lead.status}
                          </span>
                        </div>

                        <div className="text-xs text-indigo-300 mt-1 font-medium">{lead.serviceType}</div>
                        <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                          <span>{lead.city}</span>
                          <span className="font-mono text-slate-500">{lead.phone}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Active Lead Details & Call Action Desk */}
              <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                {selectedLead ? (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-slate-400">{selectedLead.id}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300">
                            Priority: {selectedLead.priority}
                          </span>
                        </div>
                        <h3 className="text-2xl font-extrabold text-white mt-1">{selectedLead.customerName}</h3>
                        <p className="text-xs text-slate-400">{selectedLead.city} • Assigned: {selectedLead.assignedTime}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${COMPANY_INFO.phone}`}
                          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-600/30 transition-all"
                        >
                          <PhoneCall className="w-3.5 h-3.5" />
                          <span>Dial Customer</span>
                        </a>
                      </div>
                    </div>

                    {/* Customer Loan/Product Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-slate-400 block mb-1">Product Inquired:</span>
                        <span className="font-bold text-white text-sm">{selectedLead.serviceType}</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-slate-400 block mb-1">Amount / Portfolio:</span>
                        <span className="font-bold text-emerald-400 text-sm">{selectedLead.loanAmount || 'Under Verification'}</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-slate-400 block mb-1">Estimated CIBIL Score:</span>
                        <span className="font-bold text-indigo-300 text-sm font-mono">{selectedLead.cibilEstimate || 'N/A'}</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-slate-400 block mb-1">Assigned Branch:</span>
                        <span className="font-bold text-white text-sm">Kolkata 700036 Hub</span>
                      </div>
                    </div>

                    {/* Case Notes */}
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                      <span className="font-bold text-slate-300 block mb-1">Customer Remarks & Notes:</span>
                      <p className="text-slate-400 leading-relaxed">{selectedLead.notes}</p>
                    </div>

                    {/* Action Buttons to Qualify / Follow Up / Reject */}
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                        Call Disposition & Status Update (Lead Filtration)
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <button
                          onClick={() => updateLeadStatus(selectedLead.id, 'Qualified')}
                          className="py-2.5 px-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Qualify Lead</span>
                        </button>

                        <button
                          onClick={() => updateLeadStatus(selectedLead.id, 'Settlement Scheduled')}
                          className="py-2.5 px-3 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>Settlement</span>
                        </button>

                        <button
                          onClick={() => updateLeadStatus(selectedLead.id, 'Follow Up')}
                          className="py-2.5 px-3 rounded-xl bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border border-amber-500/40 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Clock className="w-3.5 h-3.5" />
                          <span>Follow-up</span>
                        </button>

                        <button
                          onClick={() => updateLeadStatus(selectedLead.id, 'Rejected')}
                          className="py-2.5 px-3 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/40 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>Reject</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-16 text-slate-500 text-sm">
                    Select a lead from the left queue to view details.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TEAM STANDUP & BULLETIN */}
        {activeWorkspaceTab === 'standup' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Standup Notes List */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-400" />
                    <span>Daily Standup & Hub Announcements</span>
                  </h3>
                  <span className="text-xs text-slate-400">Kolkata Central Office</span>
                </div>

                <div className="space-y-3">
                  {teamNotes.map((note) => (
                    <div
                      key={note.id}
                      className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm">{note.author}</span>
                          <span className="text-xs text-slate-400">({note.role})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            note.category === 'Announcement'
                              ? 'bg-blue-500/20 text-blue-300'
                              : note.category === 'Target'
                              ? 'bg-amber-500/20 text-amber-300'
                              : note.category === 'Kudos'
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : 'bg-purple-500/20 text-purple-300'
                          }`}>
                            {note.category}
                          </span>
                          <span className="text-[11px] text-slate-500 font-mono">{note.time}</span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{note.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Post Standup Update Form */}
              <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Plus className="w-4 h-4 text-blue-400" />
                  <span>Post Team Handover / Update</span>
                </h4>
                <p className="text-xs text-slate-400">
                  Share shift progress, call logs, or request dark store roster assistance with the central team.
                </p>

                <form onSubmit={handleAddTeamNote} className="space-y-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 block mb-1">Category</label>
                    <select
                      value={newNoteCategory}
                      onChange={(e) => setNewNoteCategory(e.target.value as any)}
                      aria-label="Category for new standup note"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="Announcement">General Update</option>
                      <option value="Target">Shift Target Report</option>
                      <option value="SOP Update">SOP Question / Note</option>
                      <option value="Kudos">Team Appreciation</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 block mb-1">Message</label>
                    <textarea
                      rows={4}
                      value={newNoteContent}
                      onChange={(e) => setNewNoteContent(e.target.value)}
                      placeholder="e.g. Filtered 35 leads in morning shift. 12 qualified for Personal Loan OTS..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-md shadow-blue-600/25"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit to Hub Standup</span>
                  </button>
                </form>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Monitored by Kolkata HQ HR & Compliance Team</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SOP & CALLING SCRIPTS */}
        {activeWorkspaceTab === 'scripts' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Script 1: Lead Filtration Script */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  Script 1: WFH Lead Filtration
                </span>
                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-mono">
                  Hindi / Bengali / English
                </span>
              </div>
              <h4 className="text-lg font-bold text-white">Inbound Lead Verification Opening</h4>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-3 font-mono">
                <p>
                  <strong>Opening:</strong> "Namaskar, am I speaking with Mr./Ms. [Customer Name]? I am calling from the Banking & Credit Verification Desk on behalf of Gen Z Enterprise Kolkata..."
                </p>
                <p>
                  <strong>Eligibility Check:</strong> "We received your inquiry regarding loan restructuring / credit card pre-approval. To help expedite the sanction, may I confirm your current employment type and approximate monthly take-home?"
                </p>
                <p>
                  <strong>Qualification Filter:</strong> If salaried &gt; ₹18,000 and CIBIL &gt; 650 ➔ Mark as "Qualified" in CRM and assign to Bank Officer.
                </p>
              </div>
            </div>

            {/* Script 2: Loan Settlement Script */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  Script 2: Loan Settlement Advisory
                </span>
                <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-mono">
                  Debt Relief
                </span>
              </div>
              <h4 className="text-lg font-bold text-white">One-Time Settlement (OTS) Negotiation</h4>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-3 font-mono">
                <p>
                  <strong>Empathy Anchor:</strong> "We understand you have encountered unexpected hardship. Rather than piling penal interest, we can represent your case to the credit committee for a 40% to 50% waiver on principal + interest..."
                </p>
                <p>
                  <strong>Document Request:</strong> "Please submit your salary reduction letter or medical affidavit so our Kolkata legal wing can draft the official OTS proposal to the bank."
                </p>
                <p>
                  <strong>Closure:</strong> Emphasize bank NOC issuance within 15-21 working days after clearance.
                </p>
              </div>
            </div>

            {/* Script 3: Zepto Dark Store Picker SOP */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 md:col-span-2">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                  SOP Guidelines: Zepto & Blinkit Dark Store Associate
                </span>
                <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-mono">
                  10-Min Fulfillment
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="font-bold text-white block mb-1">1. Scanning Accuracy</span>
                  Always beep item barcode. Never manually override if product SKU differs. Check expiry date &gt; 30 days.
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="font-bold text-white block mb-1">2. Cold Chain Segregation</span>
                  Dairy, frozen peas, and ice creams must be placed in thermal insulated pouches before handing over to rider.
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="font-bold text-white block mb-1">3. Packing Speed</span>
                  Aim for sub-120 seconds pick-to-pack speed to secure daily speed incentives.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
