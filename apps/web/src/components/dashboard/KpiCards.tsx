"use client";

const kpis = [
  {
    label: "Ενεργοί Πελάτες",
    value: "28",
    delta: "+4 αυτό το μήνα",
    up: true,
    icon: "👥",
    color: "blue",
    bg: "rgba(59,130,246,0.1)",
    gradient: "from-blue-500 to-blue-400",
  },
  {
    label: "Μέση Συμμόρφωση",
    value: "87%",
    delta: "+5% εβδομάδα",
    up: true,
    icon: "📊",
    color: "green",
    bg: "rgba(16,185,129,0.1)",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    label: "Έσοδα Μήνα",
    value: "€4,920",
    delta: "+18% vs Απρίλιος",
    up: true,
    icon: "💰",
    color: "orange",
    bg: "rgba(245,158,11,0.1)",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    label: "AI Πλάνα Μήνα",
    value: "28",
    delta: "57 AI calls / 150",
    up: null,
    icon: "🤖",
    color: "purple",
    bg: "rgba(139,92,246,0.1)",
    gradient: "from-purple-500 to-violet-400",
  },
];

export function KpiCards() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className="card card-hover p-5 flex flex-col gap-3"
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
            style={{ background: kpi.bg }}
          >
            {kpi.icon}
          </div>
          <div>
            <p
              className={`font-display font-black text-3xl leading-none mb-1
                          bg-gradient-to-br ${kpi.gradient} bg-clip-text text-transparent`}
            >
              {kpi.value}
            </p>
            <p className="text-xs text-[#8892a4]">{kpi.label}</p>
          </div>
          <p
            className={`text-xs flex items-center gap-1 ${
              kpi.up === true
                ? "text-green-400"
                : kpi.up === false
                ? "text-red-400"
                : "text-[#4a5568]"
            }`}
          >
            {kpi.up === true && "▲"}
            {kpi.up === false && "▼"}
            {kpi.delta}
          </p>
        </div>
      ))}
    </div>
  );
}
