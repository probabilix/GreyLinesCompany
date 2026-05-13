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

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden animate-fade-in"
          onClick={onClose}
        />
      )}

      <aside className={cn(
        "w-64 h-screen bg-dark-charcoal border-r border-border-subtle flex flex-col fixed left-0 top-0 z-[70] transition-transform duration-300 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-5 flex items-center gap-3 border-b border-border-subtle/50 relative">
          <Link href="/" className="flex items-center gap-3 w-full" onClick={onClose}>
            <img 
              src="https://res.cloudinary.com/deahibe46/image/upload/v1778151329/ChatGPT_Image_May_4_2026_04_39_57_PM_rw36mp.png" 
              alt="Logo" 
              className="w-12 h-12 object-contain rounded-xl shadow-lg shadow-brand-blue/10"
            />
            <div className="flex flex-col">
              <h1 className="text-[26px] font-black tracking-tighter leading-none">
                <span className="text-gray-400">Grey</span>
                <span className="text-brand-blue">line</span>
              </h1>
              <span className="text-[10px] font-extrabold text-gray-500 tracking-[0.2em] uppercase mt-0.5">Group</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} onClick={onClose}>
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
    </>
  );
}
