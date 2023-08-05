import NavBar from '@/components/NavBar/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextNinja',
  description: 'Be the next Next Ninja',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <NavBar></NavBar>
        </div>
        {children}
        </body>
    </html>
  )
}
