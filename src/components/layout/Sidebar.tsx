"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  ClipboardList, 
  FileCheck, 
  Receipt, 
  MessageSquare, 
  BarChart3, 
  Package, 
  Users, 
  History, 
  Zap,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'RFQ Tracker', icon: ClipboardList, href: '/rfq' },
  { name: 'Quotations', icon: FileCheck, href: '/quotations' },
  { name: 'Purchase Orders', icon: FileText, href: '/purchase-orders' },
  { name: 'Invoices', icon: Receipt, href: '/invoices' },
  { name: 'Payment Follow-ups', icon: MessageSquare, href: '/payments' },
  { name: 'Analytics', icon: BarChart3, href: '/analytics' },
  { name: 'Products & Services', icon: Package, href: '/products' },
  { name: 'Customers', icon: Users, href: '/customers' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-dark-charcoal border-r border-border-subtle flex flex-col fixed left-0 top-0 z-50">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
          <Zap className="text-white w-5 h-5 fill-white" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">Greyline</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <div
                className={cn(
                  "flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 group",
                  isActive 
                    ? "bg-brand-blue/10 text-brand-blue shadow-[inset_0_0_10px_rgba(0,112,243,0.05)]" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={cn("w-5 h-5", isActive ? "text-brand-blue" : "group-hover:text-white")} />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                {isActive && (
                  <ChevronRight className="w-4 h-4" />
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <div className="p-4 rounded-xl bg-gradient-to-br from-brand-blue/20 to-transparent border border-brand-blue/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">AI Active</span>
          </div>
          <p className="text-[10px] text-gray-400 leading-relaxed">
            Greyline AI is monitoring 12 active RFQs and 4 pending payments.
          </p>
        </div>
      </div>
    </aside>
  );
}
