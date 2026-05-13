"use client";

import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie, Legend
} from 'recharts';

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

const divisionData = [
  { name: 'Logistics', value: 400, color: '#0070F3' },
  { name: 'IT', value: 300, color: '#3B82F6' },
  { name: 'Events', value: 300, color: '#60A5FA' },
  { name: 'AI', value: 200, color: '#93C5FD' },
];

export function RevenueChart() {
  return (
    <div className="h-[300px] w-full min-w-0 relative">
      <ResponsiveContainer width="100%" height="100%" minHeight={300}>
        <AreaChart data={data} style={{ outline: 'none' }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0070F3" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#0070F3" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#222" />
          <XAxis 
            dataKey="name" 
            stroke="#666" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false}
          />
          <YAxis 
            stroke="#666" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip 
            trigger="click"
            contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
            itemStyle={{ color: '#fff' }}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#0070F3" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorValue)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function DivisionPieChart() {
  return (
    <div className="h-[300px] w-full min-w-0 relative">
      <ResponsiveContainer width="100%" height="100%" minHeight={300}>
        <PieChart style={{ outline: 'none' }}>
          <Pie
            data={divisionData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {divisionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
             trigger="click"
             contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
             itemStyle={{ color: '#fff' }}
          />
          <Legend verticalAlign="bottom" height={36}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
