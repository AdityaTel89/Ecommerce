// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Foodzy - A Treasure of Tastes',
  description: 'Premium organic vegetables',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="w-full overflow-x-hidden">
     
        <main className="w-full min-h-screen">{children}</main>
      
      </body>
    </html>
  )
}
