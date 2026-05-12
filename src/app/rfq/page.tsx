"use client";

import React from 'react';
import { DataTable } from '@/components/ui/DataTable';
import { MOCK_RFQS } from '@/lib/mock-data';
import { RFQ } from '@/types';
import { cn, formatCurrency, formatDate } from '@/lib/utils';

export default function RFQTrackerPage() {
  const columns = [
    { 
      header: 'RFQ ID', 
      accessor: (rfq: RFQ) => (
        <span className="font-mono font-bold text-brand-blue">{rfq.id}</span>
      ) 
    },
    { 
      header: 'Customer', 
      accessor: (rfq: RFQ) => (
        <div>
          <p className="font-semibold text-white">{rfq.customerName}</p>
          <p className="text-xs text-gray-500">{rfq.customerEmail}</p>
        </div>
      ) 
    },
    { header: 'Subject', accessor: 'subject' as keyof RFQ },
    { 
      header: 'Service', 
      accessor: (rfq: RFQ) => (
        <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
          {rfq.serviceRequested}
        </span>
      ) 
    },
    { 
      header: 'Budget', 
      accessor: (rfq: RFQ) => formatCurrency(rfq.budget) 
    },
    { 
      header: 'Urgency', 
      accessor: (rfq: RFQ) => (
        <span className={cn(
          "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
          rfq.urgency === 'Critical' ? "bg-rose-500/10 text-rose-500 border border-rose-500/20" :
          rfq.urgency === 'High' ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" :
          "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
        )}>
          {rfq.urgency}
        </span>
      ) 
    },
    { 
      header: 'Date', 
      accessor: (rfq: RFQ) => formatDate(rfq.date) 
    },
    { 
      header: 'Status', 
      accessor: (rfq: RFQ) => (
        <div className="flex items-center gap-2">
          <div className={cn(
            "w-2 h-2 rounded-full",
            rfq.status === 'Approved' ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" :
            rfq.status === 'Quotation Sent' ? "bg-brand-blue shadow-[0_0_8px_rgba(0,112,243,0.5)]" :
            "bg-gray-500"
          )} />
          <span className="text-xs font-medium">{rfq.status}</span>
        </div>
      ) 
    },
  ];

  return (
    <div className="space-y-8">
      <DataTable 
        title="RFQ Tracker" 
        description="Monitor and manage all incoming Request for Quotations."
        data={MOCK_RFQS} 
        columns={columns} 
      />
    </div>
  );
}
