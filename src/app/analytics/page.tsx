"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { 
  ArrowUpRight, 
  Target, 
  Zap, 
  Calendar,
  Filter
} from 'lucide-react';

// Load all recharts-based charts lazily to prevent Turbopack from hanging
const AnalyticsCharts = dynamic(() => import('@/components/dashboard/AnalyticsCharts'), { 
  ssr: false, 
  loading: () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="h-[400px] w-full animate-pulse bg-white/5 rounded-xl" />
      <div className="h-[400px] w-full animate-pulse bg-white/5 rounded-xl" />
    </div>
  )
});

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">Business <span className="text-brand-blue">Intelligence</span></h1>
          <p className="text-gray-500 text-sm">Deep insights into conversion and performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex-1 sm:flex-none px-4 py-2 bg-white/5 border border-border-subtle rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
            <Calendar className="w-4 h-4" />
            <span className="whitespace-nowrap">This Quarter</span>
          </button>
          <button className="flex-1 sm:flex-none px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg shadow-brand-blue/20">
            <Filter className="w-4 h-4" />
            <span className="whitespace-nowrap">Filters</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="premium-card p-6 flex flex-col justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-brand-blue" />
          </div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Acceptance Rate</h4>
          <h2 className="text-4xl font-bold text-white mb-2">67.4%</h2>
          <div className="flex items-center justify-center gap-1 text-emerald-500 text-xs font-bold">
            <ArrowUpRight className="w-3 h-3" />
            +4.2% since last month
          </div>
        </div>

        <div className="premium-card p-6 flex flex-col justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-emerald-500" />
          </div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">AI Efficiency</h4>
          <h2 className="text-4xl font-bold text-white mb-2">92.1%</h2>
          <p className="text-[10px] text-gray-500">Tasks handled without manual intervention</p>
        </div>
      </div>

      {/* Charts — loaded lazily */}
      <AnalyticsCharts />
    </div>
  );
}
