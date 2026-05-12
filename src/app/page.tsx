"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { 
  ClipboardList, 
  FileCheck, 
  TrendingUp, 
  Zap, 
  ArrowUpRight,
  RefreshCw,
  Clock,
  ExternalLink,
  History,
  ChevronRight
} from 'lucide-react';
import { StatCard } from '@/components/dashboard/StatCard';
import { formatCurrency } from '@/lib/utils';
import { MOCK_STATS, MOCK_LOGS } from '@/lib/mock-data';

// Dynamically import charts so Turbopack doesn't freeze compiling recharts server-side
const RevenueChart = dynamic(() => import('@/components/dashboard/Charts').then(m => ({ default: m.RevenueChart })), { ssr: false, loading: () => <div className="h-[300px] w-full animate-pulse bg-white/5 rounded-xl" /> });
const DivisionPieChart = dynamic(() => import('@/components/dashboard/Charts').then(m => ({ default: m.DivisionPieChart })), { ssr: false, loading: () => <div className="h-[300px] w-full animate-pulse bg-white/5 rounded-xl" /> });

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">
            Dashboard <span className="text-brand-blue">Overview</span>
          </h1>
          <p className="text-gray-500 text-sm">Welcome back. Here's what's happening with Greyline AI today.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white/5 border border-border-subtle rounded-lg text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Sync Logs
          </button>
          <button className="px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-all shadow-lg shadow-brand-blue/20 flex items-center gap-2">
            Generate Report
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total RFQs Received" 
          value={MOCK_STATS.totalRfqs} 
          icon={ClipboardList} 
          trend={12.5} 
          trendType="up"
          delay={0.1}
        />
        <StatCard 
          title="Quotations Sent" 
          value={MOCK_STATS.quotationsSent} 
          icon={FileCheck} 
          trend={8.2} 
          trendType="up"
          delay={0.2}
        />
        <StatCard 
          title="Revenue Generated" 
          value={formatCurrency(MOCK_STATS.revenueGenerated)} 
          icon={TrendingUp} 
          trend={24.1} 
          trendType="up"
          description="Total settled revenue"
          delay={0.3}
        />
        <StatCard 
          title="Automation Success" 
          value={`${MOCK_STATS.automationSuccessRate}%`} 
          icon={Zap} 
          trend={1.4} 
          trendType="up"
          description="AI precision score"
          delay={0.4}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 premium-card p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-white">Revenue Growth</h3>
              <p className="text-xs text-gray-500">Monthly revenue trends across all divisions</p>
            </div>
            <select className="bg-white/5 border border-border-subtle rounded-md px-3 py-1 text-xs focus:outline-none">
              <option>Last 7 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <RevenueChart />
        </div>

        <div className="premium-card p-6">
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white">Division Split</h3>
            <p className="text-xs text-gray-500">Revenue distribution by division</p>
          </div>
          <DivisionPieChart />
          <div className="mt-6 space-y-3">
            {[
              { label: 'Logistics', color: 'bg-brand-blue', value: '35%' },
              { label: 'Technology', color: 'bg-blue-500', value: '28%' },
              { label: 'Events', color: 'bg-blue-400', value: '22%' },
              { label: 'AI Services', color: 'bg-blue-300', value: '15%' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${item.color}`} />
                  <span className="text-gray-400">{item.label}</span>
                </div>
                <span className="font-bold text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity Logs */}
        <div className="premium-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <History className="w-5 h-5 text-brand-blue" />
              Live Automation Logs
            </h3>
            <button className="text-xs text-brand-blue hover:underline">View All</button>
          </div>
          
          <div className="space-y-4">
            {MOCK_LOGS.map((log, index) => (
              <div key={log.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-border-subtle">
                <div className="mt-1">
                  {log.status === 'Success' ? (
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-white truncate">{log.type}</p>
                    <span className="text-[10px] text-gray-500 font-mono bg-white/5 px-2 py-0.5 rounded uppercase" suppressHydrationWarning>
                      {new Date(log.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-2">{log.description}</p>
                  {log.confidenceScore && (
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-brand-blue rounded-full" 
                          style={{ width: `${log.confidenceScore * 100}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-mono text-brand-blue">{(log.confidenceScore * 100).toFixed(0)}% Conf.</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Insights */}
        <div className="grid grid-cols-2 gap-6">
          <div className="premium-card p-6 flex flex-col justify-between bg-gradient-to-br from-brand-blue/10 to-transparent">
            <div>
              <Zap className="w-8 h-8 text-brand-blue mb-4" />
              <h4 className="font-bold text-white mb-2">AI Insights</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Automated quotations have reduced manual entry time by <span className="text-brand-blue font-bold">124 hours</span> this month.
              </p>
            </div>
            <button className="mt-4 text-xs font-semibold text-brand-blue flex items-center gap-1 group">
              Optimize Workflows
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="premium-card p-6 flex flex-col justify-between border-brand-blue/30">
            <div>
              <Clock className="w-8 h-8 text-brand-blue mb-4" />
              <h4 className="font-bold text-white mb-2">Pending POs</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                You have <span className="text-white font-bold">8 high-value POs</span> awaiting signature from Aramco.
              </p>
            </div>
            <button className="mt-4 text-xs font-semibold text-brand-blue flex items-center gap-1 group">
              Follow Up Now
              <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="premium-card col-span-2 p-6 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full border-4 border-brand-blue/20 border-t-brand-blue flex items-center justify-center">
              <span className="text-sm font-bold text-white">88%</span>
            </div>
            <div>
              <h4 className="font-bold text-white">Monthly Target</h4>
              <p className="text-xs text-gray-400">You are $120k away from your quarterly goal of $1.5M.</p>
            </div>
            <button className="ml-auto px-4 py-2 bg-white/5 border border-border-subtle rounded-lg text-xs font-medium hover:bg-white/10 transition-all">
              Update Goal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


