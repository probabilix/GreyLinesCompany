"use client";

import React from 'react';
import { Search, Bell, User, Activity, Calendar, Menu } from 'lucide-react';
import { format } from 'date-fns';

interface NavbarProps {
  onToggle?: () => void;
}

export function Navbar({ onToggle }: NavbarProps) {
  const now = new Date();

  return (
    <header className="h-16 border-b border-border-subtle bg-background/50 backdrop-blur-md sticky top-0 z-40 px-4 lg:px-8 flex items-center justify-between lg:ml-64 transition-all duration-300">
      <div className="flex items-center gap-4 lg:gap-6 flex-1">
        <button 
          onClick={onToggle}
          className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="relative w-full max-w-[200px] sm:max-w-96 group hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-brand-blue transition-colors" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-white/5 border border-border-subtle rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all"
            suppressHydrationWarning
          />
        </div>
        
        <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <Activity className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">System Live</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 lg:gap-6">
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-400 border-r border-border-subtle pr-6">
          <Calendar className="w-4 h-4" />
          <span suppressHydrationWarning>{format(now, 'MMM do')}</span>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-full hover:bg-white/5 transition-colors text-gray-400 hover:text-white">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-brand-blue rounded-full border-2 border-background" />
          </button>
          
          <div className="flex items-center gap-3 pl-2 cursor-pointer group">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold text-white group-hover:text-brand-blue transition-colors text-nowrap">Admin User</p>
            </div>
            <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-gradient-to-br from-brand-blue to-purple-600 flex items-center justify-center border-2 border-white/10 group-hover:border-brand-blue/50 transition-all">
              <User className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
