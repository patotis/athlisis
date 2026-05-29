"use client";

import { useState } from "react";
import Link from "next/link";
import type { User } from "@clerk/nextjs/server";

interface TopbarProps {
  user: User | null;
}

export function Topbar({ user }: TopbarProps) {
  const [search, setSearch] = useState("");

  return (
    <header className="flex items-center gap-4 px-6 py-3.5
                       border-b border-white/[0.07] bg-[#0d1220]/80
                       backdrop-blur-xl flex-shrink-0 sticky top-0 z-10">
      <div className="flex-1">
        <p className="font-display font-semibold text-[15px] text-white">Dashboard</p>
        <p className="text-xs text-[#8892a4]">
          {new Date().toLocaleDateString("el-GR", {
            weekday: "long", day: "numeric", month: "long", year: "numeric",
          })}
        </p>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.07]
                      rounded-lg px-3 py-2 w-56 transition-all
                      focus-within:border-blue-500/50 focus-within:ring-2
                      focus-within:ring-blue-500/10">
        <svg className="w-3.5 h-3.5 text-[#4a5568] flex-shrink-0" viewBox="0 0 20 20"
             fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="9" cy="9" r="5.5"/><path d="M15 15l3 3"/>
        </svg>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Αναζήτηση πελάτη..."
          className="bg-transparent border-none outline-none text-sm text-white
                     placeholder-[#4a5568] w-full"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <button className="relative w-8 h-8 rounded-lg bg-white/[0.03] border
                           border-white/[0.07] flex items-center justify-center
                           text-[#8892a4] hover:text-white hover:bg-white/[0.06]
                           transition-all">
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none"
               stroke="currentColor" strokeWidth="1.5">
            <path d="M10 2a6 6 0 00-6 6c0 4-2 5-2 5h16s-2-1-2-5a6 6 0 00-6-6z"/>
            <path d="M7.5 17a2.5 2.5 0 005 0"/>
          </svg>
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full
                           bg-blue-500 border border-[#0d1220]" />
        </button>

        {/* New Plan CTA */}
        <Link href="/meal-plans/generate" className="btn-primary text-xs px-3 py-2">
          <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none"
               stroke="currentColor" strokeWidth="2">
            <path d="M10 5v10M5 10h10"/>
          </svg>
          Νέο Πλάνο AI
        </Link>
      </div>
    </header>
  );
}
