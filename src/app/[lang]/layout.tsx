import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/app/globals.css';
import { i18n, Locale } from '@/../i18n-config';
import LocaleSwitcher from './_components/locale-switcher';
import ScrollReveal from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'Icaro Kiiler',
  description: 'My personal website',
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
        <header className="w-full p-4 bg-black">
          <div className="container">
            <ScrollReveal effect="fade-up">
              <LocaleSwitcher className="ml-auto" />
            </ScrollReveal>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
