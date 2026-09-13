import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Tiago Lima | Analista de QA',
  description: 'Analista de Qualidade focado em qualidade de software, automação (Cypress, Appium, K6), performance, cultura Shift-Left e IA aplicada a QA.',
  openGraph: {
    title: 'Tiago Lima | Analista de QA',
    description: 'Portfólio profissional de QA com foco em automação Web, Mobile, APIs RESTful e Testes de Carga com K6.',
    url: 'https://seu-portfolio.vercel.app',
    siteName: 'Tiago Lima - Portfólio QA',
    images: [
      {
        url: '/avatar.jpg',
        width: 800,
        height: 800,
        alt: 'Tiago Lima - Analista de QA',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiago Lima | Analista de QA',
    description: 'Portfólio profissional de QA com foco em automação Web, Mobile, APIs RESTful e Testes de Carga com K6.',
    images: ['/avatar.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#101c19',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}