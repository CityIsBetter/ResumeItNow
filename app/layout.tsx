import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import { ThemeWrapper } from '@/components/ThemeWrapper';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/components/SessionProvider';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ResumeIt',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ThemeWrapper>
            <Navbar />
            {children}
            <Footer />
          </ThemeWrapper>
        </SessionProvider>
      </body>
    </html>
  )
}
