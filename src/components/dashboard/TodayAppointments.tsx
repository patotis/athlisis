"use client";

import Link from "next/link";

const appointments = [
  { id: "1", client: "Μαρία Παπαδοπούλου", type: "Zoom",        time: "10:00", duration: "45λ", topic: "Επανεκτίμηση πλάνου", color: "bg-blue-500"  },
  { id: "2", client: "Αλέξανδρος Κωστόπουλος", type: "Δια ζώσης", time: "12:30", duration: "60λ", topic: "Σωματική σύσταση",  color: "bg-green-500" },
  { id: "3", client: "Νίκος Δημητρίου",    type: "Meet",        time: "16:00", duration: "45λ", topic: "Follow-up εξέτασης", color: "bg-purple-500" },
];

export function TodayAppointments() {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-bold text-sm text-[#8892a4]">
          Σημερινά Ραντεβού
        </h3>
        <Link href="/appointments" className="text-xs text-blue-400 hover:text-blue-300">
          Ημερολόγιο →
        </Link>
      </div>
      <div className="space-y-3">
        {appointments.map((a) => (
          <div key={a.id}
            className="flex items-center gap-3 p-3 rounded-xl
                       bg-white/[0.03] border border-white/[0.07]
                       hover:bg-white/[0.05] hover:border-white/[0.12]
                       transition-all cursor-pointer">
            <div className={`w-1 h-10 rounded-full flex-shrink-0 ${a.color}`} />
            <div className={`flex flex-col items-center justify-center w-11 h-11
                             rounded-lg ${a.color}/10 flex-shrink-0`}>
              <span className={`font-display font-bold text-sm leading-none
                               ${a.color.replace('bg-', 'text-')}`}>
                {a.time.split(':')[0]}
              </span>
              <span className={`text-[10px] ${a.color.replace('bg-', 'text-')} opacity-70`}>
                :{a.time.split(':')[1]}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{a.client}</p>
              <p className="text-xs text-[#8892a4]">{a.topic}</p>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <span className="tag bg-white/[0.06] text-[#8892a4] text-[10px]">
                {a.type}
              </span>
              <span className="text-[10px] text-[#4a5568]">{a.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
