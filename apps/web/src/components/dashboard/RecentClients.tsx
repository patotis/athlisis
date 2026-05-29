"use client";

import Link from "next/link";

const clients = [
  { id: "1", name: "Μαρία Παπαδοπούλου", plan: "Μεσογειακή Δίαιτα · ΣΔ2", status: "active",   initials: "ΜΠ", grad: "from-blue-500 to-indigo-500",  months: "3μ" },
  { id: "2", name: "Αλέξανδρος Κωστόπουλος", plan: "Keto · Μυϊκή ανάπτυξη",status: "active",   initials: "ΑΚ", grad: "from-emerald-500 to-cyan-500", months: "1μ" },
  { id: "3", name: "Ελένη Τσιώτου",      plan: "Vegan · Αθλητική απόδοση",   status: "warning",  initials: "ΕΤ", grad: "from-orange-500 to-red-500",   months: "5μ" },
  { id: "4", name: "Νίκος Δημητρίου",    plan: "Μεσογειακή · Καρδιαγγειακά", status: "active",   initials: "ΝΔ", grad: "from-purple-500 to-pink-500",  months: "8μ" },
  { id: "5", name: "Σοφία Αντωνίου",     plan: "IF · Hormonal balance",       status: "active",   initials: "ΣΑ", grad: "from-cyan-500 to-blue-500",   months: "2μ" },
];

const statusLabel: Record<string, { label: string; cls: string }> = {
  active:  { label: "Ενεργός",  cls: "bg-green-500/10 text-green-400" },
  warning: { label: "Ανανέωση", cls: "bg-orange-500/10 text-orange-400" },
  inactive:{ label: "Ανενεργός",cls: "bg-red-500/10 text-red-400" },
};

export function RecentClients() {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-bold text-sm text-[#8892a4] tracking-wide">
          Πρόσφατοι Πελάτες
        </h3>
        <Link href="/clients" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
          Όλοι →
        </Link>
      </div>

      <div className="space-y-1">
        {clients.map((c) => (
          <Link
            key={c.id}
            href={`/clients/${c.id}`}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg
                       hover:bg-white/[0.04] transition-all group"
          >
            <div className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center
                             justify-center text-xs font-display font-bold text-white
                             bg-gradient-to-br ${c.grad}`}>
              {c.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white group-hover:text-blue-300
                            transition-colors truncate">
                {c.name}
              </p>
              <p className="text-xs text-[#8892a4] truncate">{c.plan} · {c.months}</p>
            </div>
            <span className={`tag text-[10px] ${statusLabel[c.status]?.cls ?? ""}`}>
              {statusLabel[c.status]?.label ?? c.status}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
