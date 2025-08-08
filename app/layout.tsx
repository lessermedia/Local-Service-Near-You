import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BUSINESS_CONFIG } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${BUSINESS_CONFIG.brandName} - ${BUSINESS_CONFIG.tagline}`,
  description: `${BUSINESS_CONFIG.description} Find plumbers, HVAC technicians, electricians, and more.`,
  keywords: 'local services, plumbers, HVAC, electricians, home services, contractors',
  generator: 'v0.dev',
  verification: {
    google: 'DPTRV07KvdAyLCphFJaaaQ3y_452_ZdXoMmXmZaVeUo'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1KL3LP6GDL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1KL3LP6GDL');
          `}
        </Script>
      </head>
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
