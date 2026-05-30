import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="min-h-screen bg-[#060a12] text-white flex flex-col">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center gap-6 px-10 py-4
                      bg-[rgba(6,10,18,0.85)] backdrop-blur-xl border-b border-white/[0.07]">
        <div className="flex items-center gap-2.5 mr-auto">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500
                          flex items-center justify-center font-display font-black text-sm text-white
                          shadow-[0_0_20px_rgba(99,102,241,0.4)]">A</div>
          <span className="font-display font-bold text-lg">Athlisis</span>
        </div>
        <Link href="/auth/sign-in"
          className="text-[#8892a4] text-sm hover:text-white transition-colors">
          Σύνδεση
        </Link>
        <Link href="/auth/sign-up" className="btn-primary">
          Δωρεάν Δοκιμή →
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center
                          px-6 pt-32 pb-20 relative overflow-hidden">
        {/* Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px]
                        rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18)_0%,transparent_60%)]
                        blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px]
                        rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_60%)]
                        blur-3xl pointer-events-none" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                        bg-indigo-500/10 border border-indigo-500/25 text-indigo-400
                        text-xs font-display font-semibold tracking-wide mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          ✦ AI-Powered Wellness OS — v2.0
        </div>

        <h1 className="font-display font-black text-5xl md:text-7xl leading-[1.06]
                       tracking-tight max-w-4xl mx-auto mb-6">
          Το{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400
                           bg-clip-text text-transparent">
            operating system
          </span>
          <br />για σύγχρονους επαγγελματίες υγείας
        </h1>

        <p className="text-lg md:text-xl text-[#8892a4] max-w-xl mx-auto mb-10 leading-relaxed">
          AI meal plans σε δευτερόλεπτα, CRM, ημερολόγιο, analytics και mobile app
          για τους πελάτες σου — όλα σε ένα μέρος.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-14">
          <Link href="/auth/sign-up"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl
                       bg-gradient-to-r from-blue-500 to-indigo-500 text-white
                       font-display font-bold text-base
                       shadow-[0_8px_32px_rgba(59,130,246,0.4)]
                       hover:shadow-[0_12px_40px_rgba(59,130,246,0.55)]
                       hover:-translate-y-0.5 transition-all">
            Ξεκίνα Δωρεάν — 14 ημέρες
            <span>→</span>
          </Link>
          <Link href="/auth/sign-in"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl
                       border border-white/10 bg-white/[0.03] text-white
                       font-display font-semibold text-base
                       hover:bg-white/[0.06] transition-all">
            Σύνδεση
          </Link>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2.5 justify-center max-w-2xl">
          {[
            "🤖 AI Meal Plans",
            "👥 Client CRM",
            "📅 Smart Calendar",
            "📊 Analytics",
            "📱 Mobile App",
            "💬 Messaging",
            "🏋️ Workout Builder",
            "📄 PDF Reports",
          ].map((f) => (
            <span key={f}
              className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]
                         text-[#8892a4] text-xs font-display font-semibold">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-white/[0.07] bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-3 gap-8 text-center">
          {[
            ["1,200+", "Επαγγελματίες"],
            ["38K+", "Ενεργοί Πελάτες"],
            ["95K+", "AI Πλάνα"],
          ].map(([val, label]) => (
            <div key={label}>
              <div className="font-display font-black text-3xl bg-gradient-to-r
                             from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                {val}
              </div>
              <div className="text-sm text-[#8892a4]">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
