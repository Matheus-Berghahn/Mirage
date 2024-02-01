import type { Metadata } from 'next'
import './globals.css'
import Header from '@/pages/Home/components/Header'
import Footer from '@/pages/Home/components/Footer'

export const metadata: Metadata = {
  title: 'ImagiAI',
  description: 'Crie e edite imagens com inteligência artificial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='container mx-auto flex flex-wrap p-5 pb-0 md:flex-row w-full'>
        <Header />
          {children}
        <Footer />
        </div>
      </body>
    </html>
  )
}
