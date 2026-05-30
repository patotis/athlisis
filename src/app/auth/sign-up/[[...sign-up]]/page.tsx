import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-[#080c14] flex">
      <div className="hidden lg:flex flex-col justify-center px-16 flex-1
                      bg-gradient-to-br from-blue-500/8 via-indigo-500/5 to-cyan-500/4
                      border-r border-white/[0.07] relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full
                        bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)]" />
        <div className="flex items-center gap-3 mb-16">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500
                          flex items-center justify-center font-display font-black text-lg
                          text-white shadow-[0_0_28px_rgba(99,102,241,0.4)]">A</div>
          <span className="font-display font-bold text-xl text-white">Athlisis</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                        bg-green-500/10 border border-green-500/20
                        text-green-400 text-xs font-display font-semibold mb-8 w-fit">
          ✓ 14 ημέρες δωρεάν · Χωρίς πιστωτική κάρτα
        </div>
        <h2 className="font-display font-black text-4xl text-white leading-tight mb-4">
          Ξεκίνα σήμερα δωρεάν
        </h2>
        <p className="text-[#8892a4] text-base leading-relaxed max-w-sm mb-10">
          Εγγράψου σε 2 λεπτά και αποκτά πλήρη πρόσβαση σε όλες τις δυνατότητες
          του Athlisis Professional για 14 ημέρες.
        </p>
        <div className="flex flex-col gap-3">
          {[
            { icon: "✓", text: "Έως 10 πελάτες δωρεάν" },
            { icon: "✓", text: "5 AI πλάνα για να δοκιμάσεις" },
            { icon: "✓", text: "Ακύρωση ανά πάσα στιγμή" },
          ].map((f) => (
            <div key={f.text} className="flex items-center gap-3 text-sm text-[#8892a4]">
              <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center
                               justify-center text-green-400 font-bold">{f.icon}</span>
              {f.text}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <SignUp
          path="/auth/sign-up"
          routing="path"
          signInUrl="/auth/sign-in"
        />
      </div>
    </main>
  );
}
