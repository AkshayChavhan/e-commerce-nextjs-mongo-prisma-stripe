import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400'] });

export const metadata: Metadata = {
  title: 'E-Cart App',
  description: 'E-cart app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col min-h-screen'>
        {/* <div className='flex flex-col min-h-screen'> */}
          <Navbar />
          <main className={`flex-grow`}>{children}</main>
          <Footer />
        {/* </div> */}
      </body>
    </html>
  )
}
