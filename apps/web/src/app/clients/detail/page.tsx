import Link from "next/link";
export default function ClientDetailPage() {
  return (
    <div className="p-6">
      <Link href="/clients" className="text-[#8892a4] hover:text-white text-sm">← Πελάτες</Link>
      <div className="card p-8 text-center mt-6">
        <p className="text-4xl mb-4">👤</p>
        <h2 className="font-display font-bold text-xl mb-2">Client Profile</h2>
        <p className="text-[#8892a4] text-sm mb-6">Σύνδεσε τη βάση δεδομένων για πραγματικά δεδομένα.</p>
        <Link href="/meal-plans/generate" className="btn-primary mx-auto w-fit">Δημιούργησε AI Πλάνο</Link>
      </div>
    </div>
  );
}
