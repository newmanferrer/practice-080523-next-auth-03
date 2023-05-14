import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Next Auth and Prisma with Postgres 3 | Home Page',
    template: 'Next Auth and Prisma with Postgres 3 | %s'
  },
  description: 'Generated by create next app',
  category: 'web development | Practice',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Prisma', 'Postgres', 'Next Auth'],
  creator: 'Newman Ferrer',
  authors: [{ name: 'Newman Ferrer', url: 'https://github.com/newmanferrer' }]
}

interface IRootLayout {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}