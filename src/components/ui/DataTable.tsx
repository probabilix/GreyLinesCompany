"use client";

import React from 'react';
import { Search, Filter, Download, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  title: string;
  description?: string;
  onRowClick?: (item: T) => void;
}

export function DataTable<T extends { id: string | number }>({ data, columns, title, description, onRowClick }: DataTableProps<T>) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          {description && <p className="text-gray-500 text-sm mt-1">{description}</p>}
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-brand-blue" />
            <input 
              type="text" 
              placeholder="Filter results..." 
              className="bg-white/5 border border-border-subtle rounded-lg py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-blue/50 transition-all w-64"
            />
          </div>
          <button className="p-2 bg-white/5 border border-border-subtle rounded-lg text-gray-400 hover:text-white transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 bg-white/5 border border-border-subtle rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-all">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="premium-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-subtle bg-white/5">
                {columns.map((col, idx) => (
                  <th key={idx} className={cn("px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider", col.className)}>
                    {col.header}
                  </th>
                ))}
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {data.map((item) => (
                <tr 
                  key={item.id} 
                  onClick={() => onRowClick?.(item)}
                  className="hover:bg-white/[0.02] transition-colors cursor-pointer group"
                >
                  {columns.map((col, idx) => (
                    <td key={idx} className={cn("px-6 py-4 text-sm text-gray-300", col.className)}>
                      {typeof col.accessor === 'function' ? col.accessor(item) : (item[col.accessor] as React.ReactNode)}
                    </td>
                  ))}
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 rounded-md hover:bg-white/10 text-gray-500 hover:text-white transition-all opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 border-t border-border-subtle flex items-center justify-between bg-white/5">
          <p className="text-xs text-gray-500">
            Showing <span className="text-white font-medium">1-{data.length}</span> of <span className="text-white font-medium">{data.length}</span> results
          </p>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-md border border-border-subtle text-gray-500 hover:text-white hover:bg-white/5 transition-all disabled:opacity-30" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-md bg-brand-blue text-white text-xs font-bold">1</button>
              <button className="w-8 h-8 rounded-md hover:bg-white/5 text-gray-400 text-xs font-bold transition-all">2</button>
            </div>
            <button className="p-1.5 rounded-md border border-border-subtle text-gray-500 hover:text-white hover:bg-white/5 transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
