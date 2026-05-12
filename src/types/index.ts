export type RFQStatus = 'RFQ Received' | 'Under Review' | 'Quotation Sent' | 'Revised' | 'Approved' | 'Invoiced' | 'Closed';

export interface RFQ {
  id: string;
  customerName: string;
  customerEmail: string;
  subject: string;
  serviceRequested: string;
  quantity: number;
  budget: number;
  urgency: 'Low' | 'Medium' | 'High' | 'Critical';
  date: string;
  status: RFQStatus;
}

export type QuotationStatus = 'Draft' | 'Sent' | 'Revised' | 'Approved' | 'Rejected' | 'Expired';

export interface Quotation {
  id: string;
  rfqId: string;
  customerName: string;
  customerEmail: string;
  amount: number;
  status: QuotationStatus;
  revisionNumber: number;
  approvalProbability: number;
  generatedDate: string;
  items: Array<{
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }>;
}

export type POStatus = 'Pending' | 'Acknowledged' | 'Processing' | 'Completed' | 'Cancelled';

export interface PurchaseOrder {
  id: string;
  poNumber: string;
  customerName: string;
  quotationId: string;
  amount: number;
  status: POStatus;
  date: string;
  timeline: Array<{
    status: string;
    date: string;
    completed: boolean;
  }>;
}

export type InvoiceStatus = 'Draft' | 'Pending' | 'Paid' | 'Overdue' | 'Cancelled';

export interface Invoice {
  id: string;
  invoiceNumber: string;
  customerEmail: string;
  amount: number;
  dueDate: string;
  status: InvoiceStatus;
  paymentStatus: 'Unpaid' | 'Partial' | 'Paid';
  issuedDate: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  totalQuotations: number;
  invoicesGenerated: number;
  revenueGenerated: number;
  paymentStatus: 'Good' | 'Fair' | 'Poor';
  lastInteraction: string;
  healthScore: number;
}

export interface Service {
  id: string;
  name: string;
  category: 'Logistics & Warehousing' | 'Advertising & Interior Fit-outs' | 'Technology & IT' | 'Events & Brand Activations' | 'AI Solutions' | 'General Services';
  price: number;
  timeline: string;
  keywords: string[];
  active: boolean;
}

export interface AutomationLog {
  id: string;
  timestamp: string;
  type: 'Email Received' | 'Classification' | 'Extraction' | 'Quotation Generated' | 'Invoice Generated' | 'Reminder Sent';
  description: string;
  status: 'Success' | 'Processing' | 'Failed';
  confidenceScore?: number;
  metadata: Record<string, any>;
}
