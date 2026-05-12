"use client";

import React from 'react';
import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend: number;
  trendType: 'up' | 'down';
  description?: string;
  delay?: number;
}

export function StatCard({ title, value, icon: Icon, trend, trendType, description, delay = 0 }: StatCardProps) {
  return (
    <div
      className="premium-card p-6 flex flex-col gap-4 relative overflow-hidden group animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon className="w-16 h-16 text-brand-blue" />
      </div>
      
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-brand-blue/10 border border-brand-blue/20">
          <Icon className="w-5 h-5 text-brand-blue" />
        </div>
        <div className={cn(
          "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full",
          trendType === 'up' ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
        )}>
          {trendType === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {trend}%
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-white tracking-tight">{value}</h3>
        {description && <p className="text-[10px] text-gray-600 mt-2">{description}</p>}
      </div>

      <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <div 
          className={cn("h-full rounded-full transition-all duration-1000", trendType === 'up' ? "bg-brand-blue" : "bg-rose-500")}
          style={{ width: `${Math.min(100, trend * 2)}%` }}
        />
      </div>
    </div>
  );
}
