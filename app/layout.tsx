import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BUSINESS_CONFIG } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${BUSINESS_CONFIG.brandName} - ${BUSINESS_CONFIG.tagline}`,
  description: `${BUSINESS_CONFIG.description} Find plumbers, HVAC technicians, electricians, and more.`,
  keywords: 'local services, plumbers, HVAC, electricians, home services, contractors',
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
