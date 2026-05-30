import Link from "next/link";

export const metadata = { title: "Πελάτες — Athlisis" };

const clients = [
  { id: "1", name: "Μαρία Παπαδοπούλου",    email: "maria@email.com",  plan: "Μεσογειακή Δίαιτα",  status: "active",  adherence: 87, months: 3 },
  { id: "2", name: "Αλέξανδρος Κωστόπουλος",email: "alex@email.com",   plan: "Keto",                status: "active",  adherence: 91, months: 1 },
  { id: "3", name: "Ελένη Τσιώτου",          email: "eleni@email.com",  plan: "Vegan Αθλητικό",     status: "warning", adherence: 72, months: 5 },
  { id: "4", name: "Νίκος Δημητρίου",        email: "nikos@email.com",  plan: "Μεσογειακή",         status: "active",  adherence: 89, months: 8 },
  { id: "5", name: "Σοφία Αντωνίου",         email: "sofia@email.com",  plan: "Intermittent Fasting",status: "active",  adherence: 86, months: 2 },
];

export default function ClientsPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display font-black text-2xl">Πελάτες</h1>
          <p className="text-sm text-[#8892a4] mt-1">{clients.length} ενεργοί πελάτες</p>
        </div>
        <Link href="/clients/new" className="btn-primary">
          <span>+</span> Νέος Πελάτης
        </Link>
      </div>

      {/* Search + filters */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.07]
                        rounded-lg px-3 py-2 flex-1 max-w-sm">
          <span className="text-[#4a5568]">🔍</span>
          <input placeholder="Αναζήτηση..." className="bg-transparent outline-none text-sm
                                                         text-white placeholder-[#4a5568] w-full" />
        </div>
        <select className="input-field w-auto text-sm">
          <option>Όλοι</option>
          <option>Ενεργοί</option>
          <option>Σε αναμονή</option>
        </select>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.07]">
              <th className="text-left px-5 py-3 text-[10px] font-display font-bold
                             text-[#4a5568] uppercase tracking-wider">Πελάτης</th>
              <th className="text-left px-5 py-3 text-[10px] font-display font-bold
                             text-[#4a5568] uppercase tracking-wider">Πλάνο</th>
              <th className="text-left px-5 py-3 text-[10px] font-display font-bold
                             text-[#4a5568] uppercase tracking-wider">Συμμόρφωση</th>
              <th className="text-left px-5 py-3 text-[10px] font-display font-bold
                             text-[#4a5568] uppercase tracking-wider">Διάρκεια</th>
              <th className="text-left px-5 py-3 text-[10px] font-display font-bold
                             text-[#4a5568] uppercase tracking-wider">Κατάσταση</th>
              <th />
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.05]">
            {clients.map((c) => (
              <tr key={c.id} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500
                                    to-indigo-500 flex items-center justify-center
                                    text-xs font-display font-bold text-white flex-shrink-0">
                      {c.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{c.name}</p>
                      <p className="text-xs text-[#8892a4]">{c.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-sm text-[#8892a4]">{c.plan}</td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden w-20">
                      <div
                        className={`h-full rounded-full ${
                          c.adherence >= 85 ? "bg-green-500" :
                          c.adherence >= 70 ? "bg-orange-500" : "bg-red-500"
                        }`}
                        style={{ width: `${c.adherence}%` }}
                      />
                    </div>
                    <span className={`text-xs font-display font-bold ${
                      c.adherence >= 85 ? "text-green-400" :
                      c.adherence >= 70 ? "text-orange-400" : "text-red-400"
                    }`}>{c.adherence}%</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-sm text-[#8892a4]">{c.months} μήνες</td>
                <td className="px-5 py-3.5">
                  <span className={`tag text-[10px] ${
                    c.status === "active" ? "bg-green-500/10 text-green-400" :
                    "bg-orange-500/10 text-orange-400"
                  }`}>
                    {c.status === "active" ? "Ενεργός" : "Ανανέωση"}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <Link href={`/clients/${c.id}`}
                    className="text-xs text-blue-400 opacity-0 group-hover:opacity-100
                               transition-opacity hover:text-blue-300">
                    Προβολή →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
