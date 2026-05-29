"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/server";

type NavItem = {
  href: string
  icon: string
  label: string
  badge?: string
  pulse?: boolean
}
type NavSection = { section: string; items: NavItem[] }
const navItems: NavSection[] = [
  {
    section: "Κύρια",
    items: [
      { href: "/dashboard",     icon: "⊞",  label: "Dashboard" },
      { href: "/clients",       icon: "👥", label: "Πελάτες",       badge: "28" },
      { href: "/appointments",  icon: "📅", label: "Ραντεβού",      badge: "3" },
      { href: "/meal-plans",    icon: "🥗", label: "Διατροφικά Πλάνα" },
    ],
  },
  {
    section: "AI & Ανάλυση",
    items: [
      { href: "/meal-plans/generate", icon: "🤖", label: "AI Generator", pulse: true },
      { href: "/analytics",           icon: "📈", label: "Αναλυτικά" },
    ],
  },
  {
    section: "Επικοινωνία",
    items: [
      { href: "/messaging", icon: "💬", label: "Μηνύματα", badge: "7" },
      { href: "/settings",  icon: "⚙️", label: "Ρυθμίσεις" },
    ],
  },
];

interface SidebarProps {
  user: User | null;
}

export function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-60 flex-shrink-0 flex flex-col
                      bg-[#0d1220] border-r border-white/[0.07]
                      overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full
                      bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_70%)]
                      pointer-events-none" />

      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5
                      border-b border-white/[0.07] flex-shrink-0">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500
                        flex items-center justify-center font-display font-black text-sm
                        text-white shadow-[0_0_16px_rgba(99,102,241,0.35)] flex-shrink-0">
          A
        </div>
        <span className="font-display font-bold text-[17px] text-white">Athlisis</span>
        <span className="ml-auto text-[9px] font-display font-bold tracking-wider
                         px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500
                         to-indigo-500 text-white">PRO</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
        {navItems.map((section) => (
          <div key={section.section}>
            <p className="px-3 mb-1.5 text-[9px] font-display font-bold
                          uppercase tracking-[1.2px] text-[#4a5568]">
              {section.section}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive =
                  item.href === "/dashboard"
                    ? pathname === "/dashboard"
                    : pathname.startsWith(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg
                                  text-sm transition-all
                                  ${isActive
                                    ? "bg-blue-500/10 text-white border border-blue-500/20"
                                    : "text-[#8892a4] hover:bg-white/[0.04] hover:text-white"
                                  }`}
                    >
                      <span className="text-base leading-none">{item.icon}</span>
                      <span className="font-medium flex-1">{item.label}</span>
                      {item.badge && (
                        <span className="text-[10px] font-display font-bold
                                         px-1.5 py-0.5 rounded-full
                                         bg-blue-500 text-white min-w-[18px] text-center">
                          {item.badge}
                        </span>
                      )}
                      {item.pulse && (
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* User footer */}
      <div className="px-4 py-4 border-t border-white/[0.07] flex-shrink-0">
        <div className="flex items-center gap-3 p-2.5 rounded-xl
                        bg-white/[0.03] border border-white/[0.07]">
          <UserButton  />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white truncate">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-[10px] text-[#4a5568] truncate">
              {user?.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
