"use client";

import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell
} from 'recharts';
import { formatCurrency } from '@/lib/utils';

const conversionData = [
  { name: 'RFQ Received', value: 100 },
  { name: 'Under Review', value: 92 },
  { name: 'Quotation Sent', value: 85 },
  { name: 'Approved', value: 64 },
  { name: 'Invoiced', value: 58 },
  { name: 'Paid', value: 52 },
];

const divisionalRevenue = [
  { name: 'Logistics', revenue: 4500000 },
  { name: 'IT', revenue: 3200000 },
  { name: 'Events', revenue: 2100000 },
  { name: 'AI Solutions', revenue: 1500000 },
  { name: 'General', revenue: 800000 },
];

const acquisitionData = [
  { m: 'Jan', v: 4 }, { m: 'Feb', v: 7 }, { m: 'Mar', v: 5 }, { m: 'Apr', v: 12 }, { m: 'May', v: 18 }
];

export default function AnalyticsCharts() {
  return (
    <div className="space-y-6">
      {/* Conversion Funnel */}
      <div className="premium-card p-6">
        <div className="mb-8">
          <h3 className="text-lg font-bold text-white mb-1">Conversion Funnel</h3>
          <p className="text-xs text-gray-500">Drop-off rates across the automation lifecycle</p>
        </div>
        <div className="h-[300px] w-full min-w-0 relative">
          <ResponsiveContainer width="100%" height="100%" minHeight={300}>
            <BarChart data={conversionData} layout="vertical" margin={{ left: 40 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#222" />
              <XAxis type="number" hide />
              <YAxis 
                dataKey="name" 
                type="category" 
                stroke="#666" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false}
                width={100}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Bar dataKey="value" fill="#0070F3" radius={[0, 4, 4, 0]}>
                {conversionData.map((_, index) => (
                  <Cell key={`cell-${index}`} fillOpacity={1 - (index * 0.1)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue by Division */}
        <div className="premium-card p-6">
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white mb-1">Revenue by Division</h3>
            <p className="text-xs text-gray-500">Top performing service categories</p>
          </div>
          <div className="h-[300px] w-full min-w-0 relative">
            <ResponsiveContainer width="100%" height="100%" minHeight={300}>
              <BarChart data={divisionalRevenue}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#222" />
                <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v/1000000}M`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
                  formatter={(v) => formatCurrency(Number(v))}
                />
                <Bar dataKey="revenue" fill="#0070F3" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Customer Acquisition */}
        <div className="premium-card p-6">
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white mb-1">Customer Acquisition</h3>
            <p className="text-xs text-gray-500">Growth trend for new enterprise accounts</p>
          </div>
          <div className="h-[300px] w-full min-w-0 relative">
            <ResponsiveContainer width="100%" height="100%" minHeight={300}>
              <AreaChart data={acquisitionData}>
                <defs>
                  <linearGradient id="colorAcq" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#222" />
                <XAxis dataKey="m" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
                <Area type="monotone" dataKey="v" stroke="#10b981" fill="url(#colorAcq)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
