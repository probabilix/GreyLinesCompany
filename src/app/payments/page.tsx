"use client";

import React from 'react';

import { 
  MessageSquare, 
  Send, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  Mail,
  Calendar,
  ArrowUpRight,
  Zap,
  TrendingUp,
  ExternalLink
} from 'lucide-react';
import { MOCK_INVOICES } from '@/lib/mock-data';
import { cn, formatCurrency, formatDate } from '@/lib/utils';

export default function PaymentsPage() {
  const followUpData = MOCK_INVOICES.filter(inv => inv.status === 'Overdue' || inv.status === 'Pending');

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1 flex items-center gap-3">
              <MessageSquare className="text-brand-blue" />
              Payment <span className="text-brand-blue">Follow-ups</span>
          </h1>
          <p className="text-gray-500 text-sm">Automated AI reminder system and collection probability tracking.</p>
        </div>
        
        <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20 text-xs font-bold flex items-center gap-2">
                <Zap className="w-3 h-3 fill-brand-blue" />
                Auto-reminders Active
            </div>
            <button className="px-4 py-2 bg-white/5 border border-border-subtle rounded-lg text-sm font-medium hover:bg-white/10 transition-all">
                Export Aging Report
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Urgency Summary */}
          <div className="lg:col-span-1 space-y-6">
              <div className="premium-card p-6 border-rose-500/20 bg-rose-500/[0.02]">
                  <div className="flex items-center gap-2 text-rose-500 mb-4">
                      <AlertTriangle className="w-5 h-5" />
                      <h3 className="font-bold text-sm uppercase tracking-widest">High Urgency</h3>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-2">4</h2>
                  <p className="text-xs text-gray-500">Invoices overdue by more than 30 days requiring immediate attention.</p>
              </div>

              <div className="premium-card p-6">
                  <h3 className="font-bold text-white text-sm mb-4">Automation Activity</h3>
                  <div className="space-y-4">
                      {[
                          { date: '2h ago', action: 'Reminder #3 Sent', to: 'stc.com.sa', status: 'Delivered' },
                          { date: '5h ago', action: 'Payment Link Generated', to: 'aramco.com', status: 'Clicked' },
                          { date: 'Yesterday', action: 'Auto-Call Scheduled', to: 'neom.com', status: 'Pending' },
                      ].map((item, i) => (
                          <div key={i} className="flex gap-3">
                              <div className="w-px bg-border-subtle relative">
                                  <div className="absolute top-1 -left-1 w-2 h-2 rounded-full bg-brand-blue" />
                              </div>
                              <div>
                                  <p className="text-xs font-bold text-white">{item.action}</p>
                                  <p className="text-[10px] text-gray-500">{item.to} • {item.date}</p>
                                  <span className="text-[9px] font-bold text-brand-blue uppercase">{item.status}</span>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

          {/* Follow-up Cards */}
          <div className="lg:col-span-2 space-y-4">
              {followUpData.map((inv, idx) => (
                  <div
                    key={inv.id}
                    className="premium-card p-6 flex flex-col md:flex-row gap-6 relative group overflow-hidden animate-fade-in"
                  >
                      <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 rounded-lg bg-white/5 border border-border-subtle flex items-center justify-center">
                                  <Mail className="w-5 h-5 text-gray-400" />
                              </div>
                              <div>
                                  <h3 className="font-bold text-white">{inv.customerEmail}</h3>
                                  <p className="text-[10px] text-gray-500 font-mono">{inv.invoiceNumber}</p>
                              </div>
                              <div className={cn(
                                  "ml-auto px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                                  inv.status === 'Overdue' ? "bg-rose-500/10 text-rose-500" : "bg-amber-500/10 text-amber-500"
                              )}>
                                  {inv.status}
                              </div>
                          </div>

                          <div className="grid grid-cols-3 gap-4 mb-6">
                              <div>
                                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Due Amount</p>
                                  <p className="text-lg font-bold text-white">{formatCurrency(inv.amount)}</p>
                              </div>
                              <div>
                                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Due Date</p>
                                  <p className="text-sm font-bold text-gray-300">{formatDate(inv.dueDate)}</p>
                              </div>
                              <div>
                                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Reminders</p>
                                  <p className="text-sm font-bold text-white">3 Sent</p>
                              </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                              <div className="flex items-center gap-4">
                                  <div className="flex flex-col">
                                      <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Payment Probability</span>
                                      <div className="flex items-center gap-2">
                                          <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                              <div className="h-full bg-emerald-500" style={{ width: '82%' }} />
                                          </div>
                                          <span className="text-xs font-bold text-emerald-500">82%</span>
                                      </div>
                                  </div>
                              </div>
                              <button className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1 group/btn">
                                  View Full Invoice
                                  <ArrowUpRight className="w-3 h-3 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                              </button>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
}
