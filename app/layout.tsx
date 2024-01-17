import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CartProvider from '@/providers/CartProviders';
import { Toaster } from 'react-hot-toast';

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
      <body className={`${poppins.className} text-slate-700`}>
        <Toaster
          toastOptions={{
            style: {
              background: 'rgb(51 65 85)',
              color: '#fff'
            }
          }}
        />
        <CartProvider>
          <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className={`flex-grow`}>{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
