import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const siteUrl = 'https://csy20.works'
const siteTitle = 'Chitresh Yadav | Flutter Developer'
const siteDescription =
  'Flutter developer portfolio of Chitresh Yadav (~csy). Skilled in designing modern Material 3 UI and scalable applications using Riverpod/BLoC.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Chitresh Yadav',
  },
  description: siteDescription,
  keywords: [
    'Flutter developer',
    'Flutter portfolio',
    'Chitresh Yadav',
    'mobile app development',
    'Material 3',
    'Riverpod',
    'Dart',
  ],
  authors: [{ name: 'Chitresh Yadav', url: siteUrl }],
  creator: 'Chitresh Yadav',
  publisher: 'Chitresh Yadav',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: siteTitle,
    locale: 'en_US',
    images: [
      {
        url: `${siteUrl}/pfp.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Portrait of Flutter developer Chitresh Yadav',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    creator: '@the__csy20',
    images: [`${siteUrl}/pfp.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'technology',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Chitresh Yadav',
  url: siteUrl,
  jobTitle: 'Flutter Developer',
  sameAs: [
    'https://github.com/csy20',
    'https://www.linkedin.com/in/csy20/',
    'https://x.com/the__csy20',
  ],
  worksFor: {
    '@type': 'Organization',
    name: '~csy studio',
  },
  knowsAbout: ['Flutter', 'Dart', 'Firebase', 'Mobile Development'],
  image: `${siteUrl}/pfp.jpeg`,
  email: 'mailto:chitreshy20@gmail.com',
  description: siteDescription,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
