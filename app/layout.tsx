import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Larnacei Global Limited - Redefining Luxury, Elevating Lifestyle',
  description: 'Your premier partner for real estate, construction, cryptocurrency trading, and global travel services across Nigeria. Luxury lifestyle solutions from Larnacei Global Limited.',
  keywords: 'Larnacei Global, luxury real estate Nigeria, construction services, cryptocurrency trading, travel services, Nigerian business',
  authors: [{ name: 'Larnacei Global Limited' }],
  openGraph: {
    title: 'Larnacei Global Limited - Redefining Luxury, Elevating Lifestyle',
    description: 'Your premier partner for real estate, construction, cryptocurrency trading, and global travel services across Nigeria.',
    type: 'website',
    url: 'https://larnaceiglobal.com',
    siteName: 'Larnacei Global Limited',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Larnacei Global Limited - Redefining Luxury, Elevating Lifestyle',
    description: 'Your premier partner for real estate, construction, cryptocurrency trading, and global travel services across Nigeria.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/assets/larnacei-coloured.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 