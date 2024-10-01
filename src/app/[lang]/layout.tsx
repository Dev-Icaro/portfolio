import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/app/globals.css';
import { i18n, Locale } from '@/../i18n-config';
import LocaleSwitcher from './_components/locale-switcher';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Icaro Kiiler',
  description: 'My personal website',
  icons: {
    icon: '/favicon.png',
  },
};

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '400'] });

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body className={`${roboto.className}`}>
        <header className="w-full p-4 bg-black" id="head">
          <div className="container">
            <ScrollReveal effect="fade-up">
              <LocaleSwitcher className="ml-auto" />
            </ScrollReveal>
          </div>
        </header>
        {children}
        <Button className="bg-black rounded fixed bottom-8 right-8 text-white p-2 h-10" asChild>
          <Link href="#head">
            <ChevronUp className="h-10 w-6" />
          </Link>
        </Button>
      </body>
    </html>
  );
}
