"use client";

import React, { useState } from 'react';

import { 
  Package, 
  Search, 
  Filter, 
  Plus, 
  Edit2, 
  Trash2, 
  Check, 
  X,
  Tag,
  Clock,
  Zap
} from 'lucide-react';
import { MOCK_SERVICES } from '@/lib/mock-data';
import { Service } from '@/types';
import { cn, formatCurrency } from '@/lib/utils';

export default function ProductsPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Logistics & Warehousing', 'Technology & IT', 'AI Solutions', 'Advertising & Interior Fit-outs', 'Events & Brand Activations'];

  const filteredServices = filter === 'All' ? MOCK_SERVICES : MOCK_SERVICES.filter(s => s.category === filter);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">Products & <span className="text-brand-blue">Services</span></h1>
          <p className="text-gray-500 text-sm">Manage your catalog and automated pricing.</p>
        </div>
        
        <button className="w-full sm:w-auto px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg shadow-brand-blue/20">
            <Plus className="w-4 h-4" />
            <span className="whitespace-nowrap">Add Service</span>
        </button>
      </div>

      <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
          {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                    "px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap border transition-all",
                    filter === cat 
                        ? "bg-brand-blue text-white border-brand-blue" 
                        : "bg-white/5 border-border-subtle text-gray-500 hover:text-white hover:border-white/20"
                )}
              >
                  {cat}
              </button>
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((svc, idx) => (
              <div
                key={svc.id}
                className="premium-card p-6 flex flex-col gap-5 group animate-fade-in"
              >
                  <div className="flex items-center justify-between">
                      <div className={cn(
                          "px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest",
                          svc.category === 'AI Solutions' ? "bg-brand-blue/20 text-brand-blue border border-brand-blue/30" : "bg-white/5 border border-white/10 text-gray-400"
                      )}>
                          {svc.category}
                      </div>
                      <div className="flex items-center gap-2">
                          <button className="p-1.5 rounded-lg hover:bg-white/10 text-gray-500 transition-all">
                              <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-rose-500/10 text-gray-500 hover:text-rose-500 transition-all">
                              <Trash2 className="w-3.5 h-3.5" />
                          </button>
                      </div>
                  </div>

                  <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-brand-blue transition-colors">{svc.name}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          Est. Delivery: {svc.timeline}
                      </div>
                  </div>

                  <div className="py-4 border-y border-border-subtle flex items-center justify-between">
                      <div>
                          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Starting From</p>
                          <p className="text-xl font-bold text-white">{formatCurrency(svc.price)}</p>
                      </div>
                      <div className="flex flex-col items-end">
                          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Status</p>
                          <div className={cn(
                              "flex items-center gap-1.5 text-xs font-bold",
                              svc.active ? "text-emerald-500" : "text-gray-500"
                          )}>
                              <div className={cn("w-1.5 h-1.5 rounded-full", svc.active ? "bg-emerald-500 animate-pulse" : "bg-gray-500")} />
                              {svc.active ? 'Active' : 'Inactive'}
                          </div>
                      </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                      {svc.keywords.map(kw => (
                          <span key={kw} className="text-[10px] font-medium text-gray-500 bg-white/5 border border-border-subtle px-2 py-0.5 rounded flex items-center gap-1">
                              <Tag className="w-2.5 h-2.5" />
                              {kw}
                          </span>
                      ))}
                  </div>

                  <button className="w-full py-2 bg-white/5 border border-border-subtle rounded-lg text-xs font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-brand-blue" />
                      Configure AI Pricing
                  </button>
              </div>
          ))}
      </div>
    </div>
  );
}
