"use client";

import React from 'react';

import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  Phone, 
  Mail, 
  Building2,
  TrendingUp,
  CreditCard,
  ArrowUpRight
} from 'lucide-react';
import { MOCK_CUSTOMERS } from '@/lib/mock-data';
import { Customer } from '@/types';
import { cn, formatCurrency, formatDate } from '@/lib/utils';

export default function CustomersPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Customer <span className="text-brand-blue">Portfolio</span></h1>
          <p className="text-gray-500 text-sm">Manage enterprise relationships and track customer lifecycle value.</p>
        </div>
        
        <div className="flex items-center gap-3">
            <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-brand-blue" />
                <input 
                    type="text" 
                    placeholder="Search accounts..." 
                    className="bg-white/5 border border-border-subtle rounded-lg py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-blue/50 w-64 transition-all"
                />
            </div>
            <button className="px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-blue-600 transition-all">
                <Plus className="w-4 h-4" />
                Add Customer
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_CUSTOMERS.map((cust, idx) => (
              <div
                key={cust.id}
                className="premium-card p-6 group hover:scale-[1.02] transition-all animate-fade-in"
              >
                  <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-blue to-purple-600 flex items-center justify-center border-2 border-white/10 text-white font-bold text-xl shadow-lg shadow-brand-blue/20">
                              {cust.name.charAt(0)}
                          </div>
                          <div>
                              <h3 className="text-lg font-bold text-white group-hover:text-brand-blue transition-colors">{cust.company}</h3>
                              <p className="text-xs text-gray-500 flex items-center gap-1">
                                  <Building2 className="w-3 h-3" />
                                  Enterprise Account
                              </p>
                          </div>
                      </div>
                      <div className={cn(
                          "px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                          cust.paymentStatus === 'Good' ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                      )}>
                          {cust.paymentStatus} Standing
                      </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-white/5 border border-border-subtle">
                          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Revenue</p>
                          <p className="text-sm font-bold text-white">{formatCurrency(cust.revenueGenerated)}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-border-subtle">
                          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Health Score</p>
                          <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-white">{cust.healthScore}%</span>
                              <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                                  <div className="h-full bg-emerald-500" style={{ width: `${cust.healthScore}%` }} />
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                          <Mail className="w-3.5 h-3.5 text-brand-blue" />
                          {cust.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                          <Phone className="w-3.5 h-3.5 text-brand-blue" />
                          {cust.phone}
                      </div>
                  </div>

                  <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
                      <div className="text-[10px] text-gray-500">
                          Last active: <span className="text-gray-300">{formatDate(cust.lastInteraction)}</span>
                      </div>
                      <button className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1 group/btn">
                          View Activity
                          <ArrowUpRight className="w-3 h-3 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
}
