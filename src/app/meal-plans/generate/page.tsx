"use client";

import { useState } from "react";

export default function AiGeneratePage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [step, setStep] = useState("");

  const steps = [
    "Υπολογισμός TDEE & μακροθρεπτικών...",
    "Ανάλυση παθήσεων & αλλεργιών...",
    "Επιλογή τροφών από βάση δεδομένων...",
    "Δημιουργία 7 ημερών γευμάτων με Claude AI...",
    "Βελτιστοποίηση γλυκαιμικού δείκτη...",
    "Τελικός κλινικός έλεγχος...",
  ];

  async function generate() {
    setLoading(true);
    setDone(false);
    for (const s of steps) {
      setStep(s);
      await new Promise((r) => setTimeout(r, 900));
    }
    setLoading(false);
    setDone(true);
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="font-display font-black text-2xl mb-1">AI Meal Plan Generator</h1>
      <p className="text-sm text-[#8892a4] mb-6">
        Powered by Claude Sonnet · Δημιούργησε εξατομικευμένο πλάνο σε δευτερόλεπτα
      </p>

      <div className="card p-6 space-y-5 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Πελάτης</label>
            <select className="input-field">
              <option>Μαρία Παπαδοπούλου</option>
              <option>Αλέξανδρος Κωστόπουλος</option>
            </select>
          </div>
          <div>
            <label className="label">Τύπος Διατροφής</label>
            <select className="input-field">
              <option>Μεσογειακή</option>
              <option>Keto</option>
              <option>Vegan</option>
              <option>Diabetic</option>
            </select>
          </div>
          <div>
            <label className="label">Στόχος Θερμίδων</label>
            <input type="number" defaultValue={1750} className="input-field" />
          </div>
          <div>
            <label className="label">Διάρκεια</label>
            <select className="input-field">
              <option>7 ημέρες</option>
              <option>14 ημέρες</option>
            </select>
          </div>
        </div>
        <div>
          <label className="label">Πρόσθετες οδηγίες AI</label>
          <textarea
            rows={3}
            placeholder="π.χ. Αποφεύγει κόκκινο κρέας, προτιμά απλά γεύματα..."
            className="input-field resize-none"
          />
        </div>
      </div>

      <button onClick={generate} disabled={loading} className="btn-primary w-full justify-center py-3.5 text-base mb-6">
        {loading ? "Δημιουργία..." : "✦ Δημιουργία με AI"}
      </button>

      {loading && (
        <div className="card p-8 text-center space-y-4">
          <div className="flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
          <p className="text-sm font-display font-semibold text-white">Το AI εργάζεται...</p>
          <p className="text-xs text-[#8892a4]">{step}</p>
        </div>
      )}

      {done && (
        <div className="card p-6 border-green-500/20 bg-green-500/5">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">✅</span>
            <div>
              <p className="font-display font-bold text-white">Πλάνο Δημιουργήθηκε!</p>
              <p className="text-xs text-[#8892a4]">Μεσογειακό · 7 ημέρες · 1750 kcal · Claude AI</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 mb-4">
            {[["1750", "kcal"], ["95g", "Πρωτ."], ["180g", "Υδατ."], ["60g", "Λίπη"]].map(([v, l]) => (
              <div key={l} className="bg-white/[0.04] rounded-xl p-3 text-center">
                <p className="font-display font-bold text-lg text-blue-400">{v}</p>
                <p className="text-[10px] text-[#4a5568] uppercase tracking-wider font-display font-semibold">{l}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <button className="btn-primary flex-1 justify-center text-sm py-2.5">
              Αποθήκευση στον Πελάτη
            </button>
            <button className="btn-secondary flex-1 justify-center text-sm py-2.5">
              📄 Export PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
