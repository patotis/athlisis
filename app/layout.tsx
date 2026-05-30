import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Athlisis',
  description: 'AI Wellness Platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="el">
        <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#080c14', color: 'white' }}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
