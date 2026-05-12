"use client";

import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Chat Panel */}
      {isOpen && (
        <div className="mb-4 w-96 glass-dark rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col animate-fade-in">
          {/* Header */}
          <div className="p-4 bg-brand-blue/10 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-none">Greyline AI</h4>
                <p className="text-[10px] text-brand-blue font-bold uppercase tracking-wider mt-1">Virtual Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-md transition-colors text-gray-500">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="h-80 p-4 overflow-y-auto space-y-4">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded bg-brand-blue flex-shrink-0 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="p-3 rounded-2xl rounded-tl-none bg-white/5 border border-white/5 text-xs text-gray-300 leading-relaxed max-w-[80%]">
                Hello! I'm monitoring your workflows. You have 3 new RFQs that look like high-value opportunities. Should I generate draft quotations for them?
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
              <div className="p-3 rounded-2xl rounded-tr-none bg-brand-blue text-white text-xs leading-relaxed max-w-[80%]">
                Yes, please process them using the Standard Logistics pricing tier.
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-6 h-6 rounded bg-brand-blue flex-shrink-0 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="p-3 rounded-2xl rounded-tl-none bg-white/5 border border-white/5 text-xs text-gray-300 leading-relaxed max-w-[80%]">
                Processing... Done. I've created 3 draft quotations for Aramco, NEOM, and STC. You can review them in the Quotations tab.
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <div className="px-4 py-2 flex gap-2 overflow-x-auto border-t border-white/5">
            <button className="whitespace-nowrap px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 hover:text-white hover:bg-white/10 transition-all">Check Invoices</button>
            <button className="whitespace-nowrap px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 hover:text-white hover:bg-white/10 transition-all">Revenue Report</button>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/5 flex gap-2">
            <input 
              type="text" 
              placeholder="Ask me anything..." 
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-brand-blue/50"
            />
            <button className="p-2 bg-brand-blue text-white rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-brand-blue/20">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300",
          isOpen ? "bg-white text-black" : "bg-brand-blue text-white animate-bounce"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full border-2 border-background text-[8px] font-bold flex items-center justify-center">3</span>
        )}
      </button>
    </div>
  );
}
