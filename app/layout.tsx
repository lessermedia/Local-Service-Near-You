import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LocalServiceNearYou - Programmatic SEO & Backlink Solutions',
  description: 'Scale your local business with programmatic SEO articles and high-quality backlinks. Get instant authority, local citations, and search visibility at scale.',
  keywords: 'programmatic SEO, backlinks, local SEO, content marketing, local business marketing, SEO services, link building',
  openGraph: {
    title: 'LocalServiceNearYou - Programmatic SEO & Backlink Solutions',
    description: 'Scale your local business with programmatic SEO articles and high-quality backlinks.',
    type: 'website',
    url: 'https://localservicenearyou.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LocalServiceNearYou - Programmatic SEO Solutions',
    description: 'Scale your local business with programmatic SEO articles and high-quality backlinks.',
  },
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
        {children}
      </body>
    </html>
  )
}
