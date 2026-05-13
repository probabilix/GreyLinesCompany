"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { cn } from '@/lib/utils';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar when route changes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex flex-col min-h-screen transition-all duration-300">
        <Navbar onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <main className={cn(
          "flex-1 p-4 lg:p-8 transition-all duration-300",
          "lg:ml-64"
        )}>
          {children}
        </main>
      </div>
    </div>
  );
}
