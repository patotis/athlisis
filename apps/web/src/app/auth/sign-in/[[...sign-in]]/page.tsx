import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-[#080c14] flex">
      {/* Left hero panel */}
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
        <h2 className="font-display font-black text-4xl text-white leading-tight mb-4">
          Καλωσόρισες πίσω
        </h2>
        <p className="text-[#8892a4] text-base leading-relaxed max-w-sm mb-10">
          Συνέχισε να διαχειρίζεσαι τους πελάτες σου, να δημιουργείς AI πλάνα
          και να αναλύεις την πρόοδό τους.
        </p>
        <div className="flex flex-col gap-3">
          {[
            { icon: "🤖", text: "AI meal plans σε 10 δευτερόλεπτα" },
            { icon: "📊", text: "Real-time adherence tracking" },
            { icon: "📱", text: "Mobile app για τους πελάτες σου" },
          ].map((f) => (
            <div key={f.text} className="flex items-center gap-3 text-sm text-[#8892a4]">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                {f.icon}
              </span>
              {f.text}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Clerk SignIn */}
      <div className="flex-1 flex items-center justify-center p-8">
        <SignIn
          path="/auth/sign-in"
          routing="path"
          signUpUrl="/auth/sign-up"
        />
      </div>
    </main>
  );
}
