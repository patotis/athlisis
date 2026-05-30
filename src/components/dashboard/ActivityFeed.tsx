"use client";

const feed = [
  { dot: "bg-blue-500",   text: "Μαρία Παπαδοπούλου κατέγραψε πρωινό — 380 kcal",              time: "2λ" },
  { dot: "bg-green-500",  text: "Αλέξανδρος ολοκλήρωσε Upper Body προπόνηση",                  time: "18λ" },
  { dot: "bg-purple-500", text: "AI δημιούργησε πλάνο 7 ημερών για Σοφία Αντωνίου",            time: "1ω" },
  { dot: "bg-orange-500", text: "Νίκος μέτρησε βάρος — 84.2kg (-0.4kg)",                        time: "2ω" },
  { dot: "bg-blue-400",   text: "Νέο μήνυμα από Ελένη Τσιώτου",                                time: "3ω" },
];

export function ActivityFeed() {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-bold text-sm text-[#8892a4]">Live Feed</h3>
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      </div>
      <div className="space-y-0 divide-y divide-white/[0.05]">
        {feed.map((item, i) => (
          <div key={i} className="flex items-start gap-3 py-2.5">
            <span className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${item.dot}`} />
            <p className="text-xs text-[#8892a4] flex-1 leading-relaxed">{item.text}</p>
            <span className="text-[10px] text-[#4a5568] flex-shrink-0">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
