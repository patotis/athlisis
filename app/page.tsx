import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', textAlign: 'center' }}>
      <div style={{ width: 56, height: 56, borderRadius: 14, background: 'linear-gradient(135deg, #3b82f6, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 900, marginBottom: 24 }}>A</div>
      <h1 style={{ fontSize: 48, fontWeight: 900, margin: '0 0 16px', background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Athlisis</h1>
      <p style={{ color: '#8892a4', fontSize: 18, marginBottom: 40, maxWidth: 480 }}>AI-Powered Wellness Practice Management για διαιτολόγους, personal trainers και κλινικές.</p>
      <div style={{ display: 'flex', gap: 12 }}>
        <Link href="/sign-up" style={{ padding: '14px 28px', borderRadius: 10, background: 'linear-gradient(135deg, #3b82f6, #6366f1)', color: 'white', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Δωρεάν Δοκιμή →</Link>
        <Link href="/sign-in" style={{ padding: '14px 24px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.15)', color: 'white', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>Σύνδεση</Link>
      </div>
    </main>
  )
}
