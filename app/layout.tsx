import Provider from '@/app/provider'
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'


export const metadata: Metadata = {
  metadataBase: new URL("https://rasmic.xyz"),
  title: {
    default: 'Ras Mic',
    template: `%s | Ras Mic`
  },
  description: 'Michael Shimeles (Ras Mic) is a Full Stack Engineer, with experience building production web applications that scale.',
  openGraph: {
    description: 'Michael Shimeles (Ras Mic) is a Full Stack Engineer, with experience building production web applications that scale.',
    images: ['https://bp26mqjoy5krq52s.public.blob.vercel-storage.com/cover-IyiM4KsixDygfvo6k9xZP5LMmjSb6q.png'],
    url: 'https://rasmic.xyz/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ras Mic',
    description: 'Michael Shimeles (Ras Mic) is a Full Stack Engineer, with experience building production web applications that scale.',
    creator: "@rasmickyy",
    images: ['https://bp26mqjoy5krq52s.public.blob.vercel-storage.com/cover-IyiM4KsixDygfvo6k9xZP5LMmjSb6q.png'],
  },
  keywords: ['Michael Shimeles, Ras Mic'],
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="https://utfs.io/f/6cccb5f9-f7e6-4abf-a35f-4c1df51713c4-5cxw4y.jpg"
          as="image"
        />
      </head>
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