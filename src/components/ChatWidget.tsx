import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  PhoneCall, 
  MapPin, 
  Briefcase, 
  CheckCheck, 
  Smile, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { ChatMessage } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenApplyModal?: () => void;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  isOpen,
  onToggle,
  onOpenApplyModal,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'agent',
      text: 'Namaskar! Welcome to Gen Z Enterprise Kolkata HR Desk. I am Pooja from Talent Acquisition. How can I help you today?',
      time: 'Just now',
      options: [
        'Want to be an HR on Gen Z Enterprise',
        'Apply for WFH Lead Filtration',
        'Zepto / Blinkit Warehouse Jobs',
        'Loan Settlement Department',
        'Kolkata Office Location & Walk-in',
        'Chat on WhatsApp (7044211966)',
      ],
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputVal;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal('');

    // Simulate Agent response
    setIsTyping(true);
    setTimeout(() => {
      let replyText = '';
      let replyOptions: string[] | undefined = undefined;

      const lower = text.toLowerCase();

      if (lower.includes('want to be a hr') || lower.includes('want to be an hr') || lower.includes('hr recruiter') || lower.includes('be a hr') || lower.includes('be an hr') || lower.includes('talent acquisition')) {
        replyText = 'We are actively hiring HR Recruiters & Talent Acquisition Executives to join Gen Z Enterprise! Fixed salary is ₹18,000 - ₹32,000/mo + ₹200 to ₹500 incentive per joined candidate. You can work from our Kolkata office (Kashi Nath Dutta Rd, 700036) or Work From Home. Would you like to apply now?';
        replyOptions = ['Apply for HR Position Now', 'WhatsApp HR Manager (7044211966)', 'Call Kolkata Desk (7044211966)'];
      } else if (lower.includes('lead') || lower.includes('filtration') || lower.includes('wfh') || lower.includes('home')) {
        replyText = 'Our Work From Home (WFH) Lead Filtration job allows you to verify loan eligibility & KYC details remotely. Salary is ₹14,000 - ₹26,000/mo including incentives. You need a smartphone or laptop. Would you like to fill out the online application?';
        replyOptions = ['Yes, Apply Online Now', 'Ask Salary Breakdown', 'Talk to HR (7044211966)'];
      } else if (lower.includes('zepto') || lower.includes('blinkit') || lower.includes('warehouse') || lower.includes('picker')) {
        replyText = 'We have 300+ active openings for Zepto & Blinkit dark stores across Dunlop, Sinthee, Shyambazar, and Salt Lake. Roles include Pickers, Order Packers, and Delivery Associates with earnings up to ₹24,000/mo. Free uniform and fast 24-hr joining!';
        replyOptions = ['Apply for Zepto', 'Apply for Blinkit', 'Visit Kolkata Office'];
      } else if (lower.includes('loan') || lower.includes('settlement') || lower.includes('debt') || lower.includes('credit')) {
        replyText = 'In our BFSI Department, we negotiate legal debt settlement (OTS) and handle credit card sales. Full training is provided. Base salary is ₹18,000 to ₹35,000 + uncapped commission!';
        replyOptions = ['Apply for BFSI Role', 'Request Corporate Callback'];
      } else if (lower.includes('location') || lower.includes('address') || lower.includes('office') || lower.includes('walk-in')) {
        replyText = 'Our registered Kolkata office is located at Kashi Nath Dutta Road, Kolkata 700036 (Near Sinthee / Baranagar). Walk-in hours: Monday to Saturday, 9:30 AM to 7:30 PM. Direct line: 7044211966.';
        replyOptions = ['Call Kolkata Office Now', 'Open WhatsApp Chat'];
      } else if (lower.includes('fee') || lower.includes('charge') || lower.includes('money')) {
        replyText = 'GEN Z ENTERPRISE NEVER CHARGES ANY REGISTRATION OR RECRUITMENT FEES. Our hiring is 100% free of cost. Beware of unauthorized agents asking for money.';
        replyOptions = ['Report Fraudulent Agent', 'Apply Online'];
      } else if (lower.includes('whatsapp') || lower.includes('call') || lower.includes('phone') || lower.includes('contact')) {
        replyText = `You can call our direct Kolkata recruitment helpline at ${COMPANY_INFO.phone} or click below to message us directly on WhatsApp with our recruitment officers.`;
        replyOptions = ['Open WhatsApp Link', 'Send Resume via Email'];
      } else {
        replyText = `Thank you for your message! Our talent acquisition team at Kashi Nath Dutta Road, Kolkata is reviewing this. You can also directly call or WhatsApp our official number 7044211966 for immediate interview scheduling.`;
        replyOptions = ['Apply for Jobs', 'WhatsApp HR (7044211966)'];
      }

      const agentMsg: ChatMessage = {
        id: `agent-${Date.now()}`,
        sender: 'agent',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: replyOptions,
      };

      setMessages((prev) => [...prev, agentMsg]);
      setIsTyping(false);
    }, 900);
  };

  const handleOptionClick = (opt: string) => {
    if (
      opt === 'Yes, Apply Online Now' || 
      opt === 'Apply Online' || 
      opt === 'Apply for Jobs' || 
      opt === 'Apply for Zepto' || 
      opt === 'Apply for Blinkit' || 
      opt === 'Apply for BFSI Role' || 
      opt === 'Apply for WFH Lead Filtration' ||
      opt === 'Apply for HR Position Now' ||
      opt === 'Want to be an HR on Gen Z Enterprise'
    ) {
      onOpenApplyModal?.();
      return;
    }
    if (opt === 'Chat on WhatsApp (7044211966)' || opt === 'Open WhatsApp Chat' || opt === 'Open WhatsApp Link' || opt === 'WhatsApp HR (7044211966)' || opt === 'WhatsApp HR Manager (7044211966)') {
      window.open(COMPANY_INFO.whatsappUrl, '_blank');
      return;
    }
    if (opt === 'Call Kolkata Office Now' || opt === 'Talk to HR (7044211966)' || opt === 'Call Kolkata Desk (7044211966)') {
      window.location.href = `tel:${COMPANY_INFO.phone}`;
      return;
    }
    handleSendMessage(opt);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={onToggle}
          className="relative group p-3.5 sm:px-4 sm:py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl shadow-indigo-600/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 border border-indigo-400/30"
          aria-label="Open HR Chat Tools"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse"></span>
          </div>
          <span className="hidden sm:inline font-bold text-xs">
            {isOpen ? 'Close Chat Desk' : 'Chat with HR Desk'}
          </span>
        </button>
      </div>

      {/* Slide-in Chat Drawer / Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[92vw] sm:w-[400px] h-[550px] max-h-[80vh] z-50 bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 p-4 border-b border-indigo-800/40 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm shadow-xs">
                  PR
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white"></div>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight text-white">Pooja Roy</h4>
                <p className="text-[11px] text-indigo-200">Kolkata Talent Acquisition Desk</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-emerald-600/40 hover:bg-emerald-600/60 text-white transition-colors"
                title="Open WhatsApp"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={onToggle}
                className="p-1.5 rounded-lg hover:bg-white/20 text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 flex items-center justify-between text-[11px] text-slate-600">
            <span>Kolkata HQ: Kashi Nath Dutta Rd (700036)</span>
            <a href={`tel:${COMPANY_INFO.phone}`} className="text-emerald-700 font-bold hover:underline">
              7044211966
            </a>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50 text-xs">
            {messages.map((msg) => {
              const isAgent = msg.sender === 'agent';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isAgent ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${
                      isAgent
                        ? 'bg-white text-slate-800 border border-slate-200 rounded-tl-sm shadow-xs'
                        : 'bg-blue-600 text-white rounded-tr-sm shadow-md'
                    }`}
                  >
                    <p className="leading-relaxed">{msg.text}</p>
                    <div className={`flex items-center justify-end gap-1 mt-1 text-[9px] ${isAgent ? 'text-slate-400' : 'text-blue-100'}`}>
                      <span>{msg.time}</span>
                      {!isAgent && <CheckCheck className="w-3 h-3 text-blue-200" />}
                    </div>
                  </div>

                  {/* Options Chips */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                      {msg.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleOptionClick(opt)}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 shadow-xs transition-colors text-left"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-2 bg-white rounded-xl w-16 text-slate-400 border border-slate-200 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about WFH jobs, Zepto, or call 7044211966..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white"
              />
              <button
                type="submit"
                disabled={!inputVal.trim()}
                className="p-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white transition-colors shadow-xs"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
