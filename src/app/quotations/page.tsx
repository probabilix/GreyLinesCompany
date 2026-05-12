"use client";

import React from 'react';

import { 
  FileCheck, 
  Download, 
  RefreshCw, 
  Eye, 
  MoreVertical,
  Zap,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { MOCK_QUOTATIONS } from '@/lib/mock-data';
import { Quotation } from '@/types';
import { cn, formatCurrency, formatDate } from '@/lib/utils';

export default function QuotationsPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Quotations</h1>
          <p className="text-gray-500 text-sm">Manage AI-generated and manual quotations.</p>
        </div>
        <button className="px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-all shadow-lg shadow-brand-blue/20 flex items-center gap-2">
          Create New Quotation
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_QUOTATIONS.map((qt, idx) => (
          <div
            key={qt.id}
            className="premium-card p-6 flex flex-col gap-5 group animate-fade-in"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white group-hover:text-brand-blue transition-colors">{qt.id}</h3>
                  <p className="text-[10px] text-gray-500 font-mono">v{qt.revisionNumber + 1}.0</p>
                </div>
              </div>
              <div className={cn(
                "px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider",
                qt.status === 'Approved' ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" :
                qt.status === 'Sent' ? "bg-brand-blue/10 text-brand-blue border border-brand-blue/20" :
                "bg-gray-500/10 text-gray-500 border border-gray-500/20"
              )}>
                {qt.status}
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-semibold text-white">{qt.customerName}</p>
              <p className="text-xs text-gray-500">{qt.customerEmail}</p>
            </div>

            <div className="flex items-center justify-between py-4 border-y border-border-subtle">
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Amount</p>
                <p className="text-xl font-bold text-white">{formatCurrency(qt.amount)}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Approval Status</p>
                <div className="flex items-center gap-2 justify-end">
                   <div className={cn(
                    "w-2 h-2 rounded-full animate-pulse",
                    qt.status === 'Approved' ? "bg-emerald-500" : "bg-amber-500"
                   )} />
                   <span className="text-xs font-bold text-gray-300">{qt.status}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Generated {formatDate(qt.generatedDate)}
              </div>
              <div className="flex items-center gap-1 text-brand-blue">
                <Zap className="w-3 h-3 fill-brand-blue" />
                AI Verified
              </div>
            </div>

            <button className="w-full py-2 bg-white/5 border border-border-subtle rounded-lg text-xs font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                View Quotation Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
