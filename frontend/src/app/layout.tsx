import type { Viewport, Metadata } from 'next'
import { AuthProvider } from './context/AuthContext'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#FF6B6B',
  colorScheme: 'light',
}

export const metadata: Metadata = {
  title: 'Foodzy - A Treasure of Tastes',
  description: 'Order delicious food online',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* ✅ Wrap with AuthProvider */}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
