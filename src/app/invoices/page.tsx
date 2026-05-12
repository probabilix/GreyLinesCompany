"use client";

import React from 'react';
import { DataTable } from '@/components/ui/DataTable';
import { MOCK_INVOICES } from '@/lib/mock-data';
import { Invoice } from '@/types';
import { cn, formatCurrency, formatDate } from '@/lib/utils';
import { AlertCircle, CheckCircle2, Clock } from 'lucide-react';

export default function InvoicesPage() {
  const columns = [
    { 
      header: 'Invoice No.', 
      accessor: (inv: Invoice) => (
        <span className="font-mono font-bold text-white">{inv.invoiceNumber}</span>
      ) 
    },
    { header: 'Customer Email', accessor: 'customerEmail' as keyof Invoice },
    { 
      header: 'Amount', 
      accessor: (inv: Invoice) => (
        <span className="font-bold text-white">{formatCurrency(inv.amount)}</span>
      ) 
    },
    { 
      header: 'Issued Date', 
      accessor: (inv: Invoice) => formatDate(inv.issuedDate) 
    },
    { 
      header: 'Due Date', 
      accessor: (inv: Invoice) => (
        <div className="flex flex-col">
          <span className="text-gray-300">{formatDate(inv.dueDate)}</span>
          {inv.status === 'Overdue' && (
            <span className="text-[10px] text-rose-500 font-bold flex items-center gap-1">
              <AlertCircle className="w-2.5 h-2.5" />
              Overdue by 12 days
            </span>
          )}
        </div>
      ) 
    },
    { 
      header: 'Status', 
      accessor: (inv: Invoice) => (
        <span className={cn(
          "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit",
          inv.status === 'Paid' ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" :
          inv.status === 'Overdue' ? "bg-rose-500/10 text-rose-500 border border-rose-500/20" :
          "bg-amber-500/10 text-amber-500 border border-amber-500/20"
        )}>
          {inv.status === 'Paid' && <CheckCircle2 className="w-3 h-3" />}
          {inv.status === 'Pending' && <Clock className="w-3 h-3" />}
          {inv.status === 'Overdue' && <AlertCircle className="w-3 h-3" />}
          {inv.status}
        </span>
      ) 
    },
    {
        header: 'Payment Bar',
        accessor: (inv: Invoice) => (
            <div className="w-32">
                <div className="flex justify-between text-[8px] mb-1 text-gray-500 uppercase font-bold">
                    <span>{inv.paymentStatus}</span>
                    <span>100%</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div 
                        className={cn(
                            "h-full rounded-full",
                            inv.paymentStatus === 'Paid' ? "bg-emerald-500" :
                            inv.paymentStatus === 'Partial' ? "bg-amber-500" : "bg-white/10"
                        )} 
                        style={{ width: inv.paymentStatus === 'Paid' ? '100%' : inv.paymentStatus === 'Partial' ? '40%' : '0%' }} 
                    />
                </div>
            </div>
        )
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="premium-card p-6 bg-gradient-to-br from-rose-500/10 to-transparent border-rose-500/20">
            <p className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-1">Overdue Amount</p>
            <h2 className="text-3xl font-bold text-white">{formatCurrency(145000)}</h2>
            <p className="text-[10px] text-gray-500 mt-2">Across 4 high-priority invoices</p>
        </div>
        <div className="premium-card p-6">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Pending Amount</p>
            <h2 className="text-3xl font-bold text-white">{formatCurrency(850000)}</h2>
            <p className="text-[10px] text-gray-500 mt-2">Awaiting payment confirmation</p>
        </div>
        <div className="premium-card p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border-emerald-500/20">
            <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-1">Collected This Month</p>
            <h2 className="text-3xl font-bold text-white">{formatCurrency(2450000)}</h2>
            <p className="text-[10px] text-gray-500 mt-2">15% increase from last month</p>
        </div>
      </div>

      <DataTable 
        title="Invoice Management" 
        description="Track all generated invoices and their payment status."
        data={MOCK_INVOICES} 
        columns={columns} 
      />
    </div>
  );
}
