import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'

export default async function Dashboard() {
  const { userId } = await auth()
  if (!userId) redirect('/sign-in')

  const user = await currentUser()

  return (
    <div style={{ minHeight: '100vh', background: '#080c14', color: 'white' }}>
      {/* Topbar */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16, background: '#0d1220' }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #3b82f6, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 14 }}>A</div>
        <span style={{ fontWeight: 700, fontSize: 16 }}>Athlisis</span>
        <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ color: '#8892a4', fontSize: 13 }}>Γεια, {user?.firstName ?? 'there'} 👋</span>
          <UserButton />
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: '32px 24px', maxWidth: 1200, margin: '0 auto' }}>
        {/* Greeting */}
        <div style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(99,102,241,0.06))', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 16, padding: '24px 28px', marginBottom: 24 }}>
          <p style={{ color: '#3b82f6', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>✦ Καλωσόρισες</p>
          <h1 style={{ fontSize: 26, fontWeight: 900, marginBottom: 6 }}>Γεια σου, {user?.firstName ?? 'there'} 👋</h1>
          <p style={{ color: '#8892a4', fontSize: 14 }}>Το dashboard σου είναι έτοιμο. Ξεκίνα προσθέτοντας τον πρώτο σου πελάτη.</p>
        </div>

        {/* KPI Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
          {[
            { label: 'Ενεργοί Πελάτες', value: '0', color: '#3b82f6', icon: '👥' },
            { label: 'Συμμόρφωση', value: '—', color: '#10b981', icon: '📊' },
            { label: 'Έσοδα Μήνα', value: '€0', color: '#f59e0b', icon: '💰' },
            { label: 'AI Πλάνα', value: '0', color: '#8b5cf6', icon: '🤖' },
          ].map(kpi => (
            <div key={kpi.label} style={{ background: '#0d1220', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '20px' }}>
              <div style={{ fontSize: 22, marginBottom: 12 }}>{kpi.icon}</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: kpi.color, marginBottom: 4 }}>{kpi.value}</div>
              <div style={{ fontSize: 12, color: '#8892a4' }}>{kpi.label}</div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div style={{ background: '#0d1220', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: 24 }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: '#8892a4', marginBottom: 16 }}>Γρήγορες Ενέργειες</h2>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              { label: '+ Νέος Πελάτης', color: '#3b82f6' },
              { label: '🤖 AI Meal Plan', color: '#6366f1' },
              { label: '📅 Νέο Ραντεβού', color: '#10b981' },
            ].map(action => (
              <button key={action.label} style={{ padding: '10px 20px', borderRadius: 8, background: action.color + '20', border: `1px solid ${action.color}40`, color: action.color, fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
