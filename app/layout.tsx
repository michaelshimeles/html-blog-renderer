import Provider from '@/app/provider'
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'


export const metadata: Metadata = {
  metadataBase: new URL("https://html-blog.rasmic.xyz"),
  title: {
    default: 'HTML',
    template: `%s | HTML`
  },
  description: 'Set up HTML rendering for blog content in Next.js 15, moving away from Markdown to a more flexible HTML-based approach.',
  openGraph: {
    description: 'Set up HTML rendering for blog content in Next.js, moving away from Markdown to a more flexible HTML-based approach.',
    images: ['https://utfs.io/f/7b032369-edf0-4248-af33-891f8e356f92-k8z3io.png'],
    url: 'https://html-blog.rasmic.xyz/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTML Blog',
    description: 'Set up HTML rendering for blog content in Next.js, moving away from Markdown to a more flexible HTML-based approach.',
    creator: "@rasmickyy",
    images: ['https://utfs.io/f/7b032369-edf0-4248-af33-891f8e356f92-k8z3io.png'],
  },
  keywords: ['Michael Shimeles, Ras Mic', 'HTML Blog Rendering'],
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </Provider>
        <Analytics />
      </body>
    </html>
  )
}