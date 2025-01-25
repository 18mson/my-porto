
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { NavDesktop } from 'components/ui/Navbar';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
  return (
    <html lang="en">
      <body 
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased bg-accent text-primary
        `}
      >
        <header className="bg-primary text-primary ">
          <NavDesktop />
        </header>
        {children}
      </body>
    </html>
  );
}
