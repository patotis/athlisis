import { auth, currentUser } from "@clerk/nextjs/server";
import { KpiCards } from "@/components/dashboard/KpiCards";
import { RecentClients } from "@/components/dashboard/RecentClients";
import { TodayAppointments } from "@/components/dashboard/TodayAppointments";
import { AiInsights } from "@/components/dashboard/AiInsights";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";

export default async function DashboardPage() {
  const user = await currentUser();
  const firstName = user?.firstName ?? "there";

  return (
    <div className="p-6 space-y-6">
      {/* Greeting banner */}
      <div className="relative overflow-hidden rounded-2xl
                      bg-gradient-to-r from-blue-500/8 via-indigo-500/5 to-cyan-500/4
                      border border-blue-500/12 p-6">
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full
                        bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)]
                        pointer-events-none" />
        <p className="text-xs font-display font-semibold tracking-widest
                      uppercase text-blue-400 mb-1">✦ Καλημέρα</p>
        <h1 className="font-display font-black text-2xl mb-1">
          Γεια σου, <span className="italic font-normal text-cyan-400">{firstName}</span> 👋
        </h1>
        <p className="text-sm text-[#8892a4]">
          Το dashboard σου είναι έτοιμο. Ας δούμε τι συμβαίνει σήμερα.
        </p>
      </div>

      {/* KPI Cards */}
      <KpiCards />

      {/* Main grid */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <RecentClients />
          <TodayAppointments />
        </div>
        <div className="space-y-6">
          <AiInsights />
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}
