"use client";

import React from 'react';
import { DataTable } from '@/components/ui/DataTable';
import { PurchaseOrder } from '@/types';
import { cn, formatCurrency, formatDate } from '@/lib/utils';
import { FileText, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

import { MOCK_PURCHASE_ORDERS } from '@/lib/mock-data';

export default function PurchaseOrdersPage() {
  const columns = [
    { 
      header: 'PO Number', 
      accessor: (po: PurchaseOrder) => (
        <span className="font-mono font-bold text-white">{po.poNumber}</span>
      ) 
    },
    { header: 'Customer', accessor: 'customerName' as keyof PurchaseOrder },
    { header: 'Linked QT', accessor: 'quotationId' as keyof PurchaseOrder },
    { 
      header: 'Amount', 
      accessor: (po: PurchaseOrder) => (
        <span className="font-bold text-white">{formatCurrency(po.amount)}</span>
      ) 
    },
    { 
      header: 'Date', 
      accessor: (po: PurchaseOrder) => formatDate(po.date) 
    },
    { 
      header: 'Status', 
      accessor: (po: PurchaseOrder) => (
        <span className={cn(
          "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit",
          po.status === 'Acknowledged' ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" :
          po.status === 'Pending' ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" :
          "bg-gray-500/10 text-gray-500 border border-gray-500/20"
        )}>
          {po.status}
        </span>
      ) 
    },
    {
        header: 'Timeline',
        accessor: (po: PurchaseOrder) => (
            <div className="flex items-center gap-1">
                {[1,2,3,4].map(i => (
                    <div key={i} className={cn(
                        "w-4 h-1 rounded-full",
                        i <= (po.status === 'Acknowledged' ? 2 : 1) ? "bg-brand-blue" : "bg-white/10"
                    )} />
                ))}
            </div>
        )
    }
  ];

  return (
    <div className="space-y-8">
      <DataTable 
        title="Purchase Orders" 
        description="Monitor approved purchase orders and their execution timeline."
        data={MOCK_PURCHASE_ORDERS} 
        columns={columns} 
      />
    </div>
  );
}
