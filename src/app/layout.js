import './globals.css'

import { siteConfig } from '@/root/config/site'
import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from '@/provider/theme-provider'
import Header from '@/components/header'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'Portfolio',
    'Frontend',
    'Developer',
    'React',
    'Next.js',
    'TailwindCSS'
  ],
  authors: [
    {
      name: 'Jose Ignacio',
      url: siteConfig.url
    }
  ],
  creator: 'Jose Ignacio',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@jozefzin'
  },
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang='es-CL' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'font-sans antialiased selection:bg-primary selection:text-secondary [&_:focus-visible]:outline-none',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='h-full relative min-w-0 pt-[calc(72px_+_1.5rem_-_0.5rem)] pb-6 px-4 antialiased max-w-3xl mx-auto'>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
