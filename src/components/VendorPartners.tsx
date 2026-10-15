import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Truck, 
  Package, 
  Store, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Building, 
  CheckCircle, 
  Clock, 
  IndianRupee, 
  MapPin,
  Users
} from 'lucide-react';
import { PARTNER_COMPANIES } from '../data/mockData';

interface VendorPartnersProps {
  onSelectRole: (category: string) => void;
  onOpenApplyModal: () => void;
}

export const VendorPartners: React.FC<VendorPartnersProps> = ({
  onSelectRole,
  onOpenApplyModal,
}) => {
  const [selectedPartner, setSelectedPartner] = useState<number>(0);

  const vendorDetails = [
    {
      partner: 'Zepto',
      type: 'Quick-Commerce 10-Minute Dark Store Operations',
      overview: 'Gen Z Enterprise acts as the certified third-party vendor sourcing and managing on-ground warehouse talent for Zepto dark stores across Kolkata, North 24 Parganas, and surrounding sectors.',
      keyRoles: [
        { title: 'Dark Store Picker', desc: 'Pick grocery and FMCG items with high speed and zero error using barcode scanner.', pay: '₹14,000 - ₹19,000 + per order bonus' },
        { title: 'Order Packer', desc: 'Pack temperature-sensitive and fragile products securely in insulated eco bags.', pay: '₹14,500 - ₹20,000 + incentives' },
        { title: 'Hub Dispatch Rider', desc: 'Deliver instant grocery orders within specified dark store radius.', pay: '₹18,000 - ₹28,000 (Fuel + Drop bonus)' },
      ],
      stations: ['Dunlop Hub', 'Sinthee Dark Store', 'Shyambazar Node', 'Salt Lake Sec V', 'Baranagar Hub', 'New Town'],
      perks: ['Weekly Payouts Available', 'Mobile Reimbursement / OT Bonus', 'Free Uniform & ID Badge', 'ESI & PF Benefits'],
    },
    {
      partner: 'Blinkit',
      type: 'Instant Grocery Fulfillment & Supply Operations',
      overview: 'Supporting Blinkit mini-warehouses with verified pickers, sorters, and inventory associates ensuring 99.8% order accuracy and speedy stock turnaround.',
      keyRoles: [
        { title: 'Hub Inventory Sorter', desc: 'Check received crates, scan batch barcodes, and organize stock by shelf racks.', pay: '₹15,000 - ₹21,000' },
        { title: 'Quality Checker (Fresh)', desc: 'Inspect fresh fruits, vegetables, and dairy for freshness standards.', pay: '₹16,000 - ₹22,500' },
        { title: 'Fulfillment Supervisor', desc: 'Coordinate floor operations and shift rosters across peak order hours.', pay: '₹22,000 - ₹30,000' },
      ],
      stations: ['Kolkata North Hubs', 'Jessore Road Facility', 'Dum Dum Metro Station Hub', 'Behala Node'],
      perks: ['Shift Rotation Support', 'Medical Insurance', 'Performance Incentives', 'Quick Joining (Within 24 Hours)'],
    },
    {
      partner: 'Amazon & Flipkart',
      type: 'Mega Logistics, FC Sorting & Delivery Operations',
      overview: 'Vendor contract for e-commerce sorting hubs, mother hubs, and regional line-haul dispatch operations across Greater Kolkata and Howrah logistic zones.',
      keyRoles: [
        { title: 'FC Inbound/Outbound Associate', desc: 'Sort boxes from incoming trucks, barcode scanning, and pallet shrink wrapping.', pay: '₹16,500 - ₹23,000' },
        { title: 'Line-Haul Dispatch Operator', desc: 'Verify vehicle manifest, load roll cages into distribution trucks.', pay: '₹17,000 - ₹24,000' },
        { title: 'Returns & RTO Specialist', desc: 'Scan returned packages, evaluate condition, and reconcile inventory data.', pay: '₹16,000 - ₹22,000' },
      ],
      stations: ['Dankuni Mega Logistics Park', 'Uluberia FC', 'Howrah Hub', 'Kolkata Airport Cargo Hub'],
      perks: ['Subsidized Canteen & Transport', 'Overtime Double Rate', 'Attendance Award (₹1,500)', 'Career Progression to TL'],
    },
    {
      partner: 'Apna Mart',
      type: 'Omnichannel Retail & Supermarket Staffing',
      overview: 'Staffing front-line retail associates for modern neighborhood supermarkets, grocery chains, and local consumer outlets.',
      keyRoles: [
        { title: 'Store POS Cashier', desc: 'Scan items, manage UPI/card payments, maintain daily cash balance.', pay: '₹14,000 - ₹19,500' },
        { title: 'Shelf Merchandiser', desc: 'Stack shelves cleanly, display price tags, rotate first-in-first-out products.', pay: '₹13,500 - ₹18,000' },
        { title: 'Store Customer Assistant', desc: 'Help shoppers locate items, offer promotional bundle assistance.', pay: '₹13,000 - ₹17,500' },
      ],
      stations: ['Baranagar', 'Belgharia', 'Sinthee', 'Bagbazar', 'Madhyamgram'],
      perks: ['Day Shifts Available', 'Store Sales Incentives', 'Staff Purchase Discount', 'Friendly Work Culture'],
    },
    {
      partner: 'Facility & Security Services',
      type: 'Corporate Housekeeping & Trained Security Guards',
      overview: 'Professional security guarding and corporate sanitation services for corporate offices, residential complexes, shopping complexes, and logistics centers.',
      keyRoles: [
        { title: 'Uniformed Security Guard', desc: 'Entry/exit visitor gate logs, physical checking, perimeter night patrolling.', pay: '₹13,000 - ₹18,500 (8hr / 12hr)' },
        { title: 'Head Security Supervisor', desc: 'CCTV surveillance monitoring, team briefing, emergency protocol readiness.', pay: '₹20,000 - ₹26,000' },
        { title: 'Corporate Housekeeping Staff', desc: 'Office sanitization, restroom hygiene, pantry service, and floor maintenance.', pay: '₹12,000 - ₹16,500' },
      ],
      stations: ['Kashi Nath Dutta Road Commercial Buildings', 'Sector V Tech Parks', 'North Kolkata Hubs'],
      perks: ['Neat Uniform & Equipment Provided', 'Statutory PF & ESIC Benefits', 'On-time 7th of Every Month Payout', 'Background Police Verified'],
    },
  ];

  const current = vendorDetails[selectedPartner];

  return (
    <section id="vendors" className="py-20 bg-slate-900 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
            <Truck className="w-3.5 h-3.5" />
            <span>CERTIFIED 3RD-PARTY VENDOR ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted Workforce Partner for Leading Brands
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            We supply high-efficiency manpower to Zepto, Blinkit, Flipkart, Amazon, and Apna Mart dark stores, retail branches, and logistics centers, backed by dedicated facility and security personnel.
          </p>
        </div>

        {/* Vendor Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {vendorDetails.map((item, index) => {
            const isSelected = selectedPartner === index;
            return (
              <button
                key={item.partner}
                onClick={() => setSelectedPartner(index)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-400/40'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700'
                }`}
              >
                <span>{item.partner}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Vendor Deep Dive Card */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {current.partner} Operations
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Active Vendor Contract
                </span>
              </div>
              <p className="text-sm font-medium text-indigo-400 mt-1">{current.type}</p>
              <p className="text-slate-300 text-sm mt-2 max-w-3xl">{current.overview}</p>
            </div>

            <div className="flex sm:flex-col gap-2 shrink-0">
              <button
                onClick={onOpenApplyModal}
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Apply for {current.partner}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectRole('Quick Commerce & Warehouse')}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition-colors border border-slate-700 text-center"
              >
                View All {current.partner} Jobs
              </button>
            </div>
          </div>

          {/* Roles Grid */}
          <div className="mt-8">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Open Positions Under This Contract
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {current.keyRoles.map((role, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800/90 rounded-xl p-4 hover:border-slate-700 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white text-base">{role.title}</span>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Immediate
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-3 leading-relaxed">{role.desc}</p>
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Pay Scale:</span>
                    <span className="font-semibold text-indigo-300">{role.pay}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hub Locations & Perks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-slate-800 text-sm">
            <div>
              <div className="flex items-center gap-2 text-white font-semibold mb-3">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Station & Hub Locations (Kolkata Region)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {current.stations.map((loc, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800">
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-white font-semibold mb-3">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Vendor Associate Benefits</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                {current.perks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Client Partnership Notice */}
        <div className="mt-12 bg-gradient-to-r from-indigo-950/60 via-slate-900 to-slate-950 border border-indigo-900/40 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">Need Bulk Manpower or Vendor Staffing in Kolkata?</h4>
            <p className="text-xs text-slate-300">
              Are you an e-commerce, quick-commerce, retail brand, or corporate office? We provide screened, verified workforce within 48 hours.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="mailto:wfhgenzenterprise@yahoo.com?subject=Vendor%20Manpower%20Inquiry%20from%20Website"
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-slate-900 hover:bg-slate-200 transition-colors"
            >
              Request Corporate Proposal
            </a>
            <a
              href="tel:7044211966"
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              Call Kolkata Operations: 7044211966
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
