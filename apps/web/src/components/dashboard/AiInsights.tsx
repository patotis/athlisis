"use client";

const insights = [
  { emoji: "⚠️", text: "Ελένη Τσιώτου δεν έχει καταγράψει γεύμα εδώ και 3 μέρες. Κίνδυνος αποχώρησης.", level: "warning" },
  { emoji: "🎯", text: "Αλέξανδρος έφτασε στόχο +2.1kg μυϊκής μάζας. Αναπροσαρμογή πρωτεΐνης.", level: "success" },
  { emoji: "📊", text: "Μέση ενεργειακή πρόσληψη 94% του στόχου αυτή την εβδομάδα.", level: "info" },
  { emoji: "💡", text: "Βέλτιστη ώρα follow-up για Μαρία: σήμερα 14:00–16:00.", level: "info" },
];

export function AiInsights() {
  return (
    <div className="rounded-xl bg-gradient-to-br from-indigo-500/8 to-blue-500/5
                    border border-indigo-500/20 p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full
                        bg-indigo-500/15 border border-indigo-500/25
                        text-indigo-400 text-[10.5px] font-display font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Athlisis AI
        </div>
      </div>
      <div className="space-y-2">
        {insights.map((ins, i) => (
          <div key={i}
            className="flex gap-2.5 p-3 rounded-lg
                       bg-white/[0.03] border border-white/[0.06]">
            <span className="text-sm flex-shrink-0 mt-0.5">{ins.emoji}</span>
            <p className="text-xs text-[#8892a4] leading-relaxed">{ins.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
