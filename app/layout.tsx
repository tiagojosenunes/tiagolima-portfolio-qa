import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Tiago Lima | Analista de Qualidade de Software (QA)',
  description: 'Analista de QA focado em automação Web, Mobile e APIs RESTful (Cypress, Appium, K6), cultura Shift-Left, testes de performance e Agentes de IA para Qualidade.',
  keywords: [
    'Tiago Lima',
    'QA Analyst',
    'Analista de Qualidade',
    'Automação de Testes',
    'Cypress',
    'Appium',
    'K6',
    'Shift-Left',
    'Testes de API',
    'IA para QA'
  ],
  authors: [{ name: 'Tiago Lima' }],
  creator: 'Tiago Lima',
  openGraph: {
    title: 'Tiago Lima | Analista de QA',
    description: 'Portfólio profissional de QA com foco em automação Web/Mobile, APIs RESTful, testes de performance com K6 e aplicação de Agentes de IA.',
    url: 'https://tiagolima-portfolio-qa-two.vercel.app',
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
    description: 'Portfólio de Qualidade de Software: Automação Web, Mobile, APIs e Performance com K6.',
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