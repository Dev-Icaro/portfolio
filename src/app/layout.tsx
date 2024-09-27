import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Icaro Kiiler',
  description: 'My personal website',
};

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '400'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}
