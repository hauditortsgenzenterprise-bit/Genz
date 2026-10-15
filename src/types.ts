export type JobDepartment = 
  | 'All'
  | 'Work From Home (WFH)'
  | 'BFSI & Finance'
  | 'Quick Commerce & Warehouse'
  | 'Facility & Security';

export interface JobOpening {
  id: string;
  title: string;
  department: 'Work From Home (WFH)' | 'BFSI & Finance' | 'Quick Commerce & Warehouse' | 'Facility & Security';
  clientPartner?: 'Zepto' | 'Blinkit' | 'Amazon' | 'Flipkart' | 'Apna Mart' | 'BFSI Banking' | 'Gen Z Enterprise';
  location: string;
  type: 'Full Time' | 'Part Time' | 'Work From Home' | 'Rotational Shifts';
  salaryRange: string;
  openingsCount: number;
  experience: string;
  education: string;
  tags: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  incentives: string;
  urgentHiring?: boolean;
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  department: string;
  shiftPreference: string;
  hasLaptop: boolean;
  hasSmartphone: boolean;
  status: 'Received' | 'Screening' | 'Interview Scheduled' | 'Document Verified' | 'Selected';
  appliedDate: string;
  notes?: string;
}

export interface LeadItem {
  id: string;
  customerName: string;
  phone: string;
  city: string;
  serviceType: 'Credit Card Application' | 'Personal Loan Settlement' | 'Lead KYC Filtration' | 'Business Loan Enquiry';
  loanAmount?: string;
  cibilEstimate?: number;
  assignedTime: string;
  status: 'Pending' | 'Qualified' | 'Follow Up' | 'Settlement Scheduled' | 'Rejected';
  priority: 'High' | 'Medium' | 'Low';
  notes: string;
}

export interface TeamNote {
  id: string;
  author: string;
  role: string;
  time: string;
  content: string;
  category: 'Announcement' | 'Target' | 'SOP Update' | 'Kudos';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'agent' | 'system';
  text: string;
  time: string;
  options?: string[];
}
