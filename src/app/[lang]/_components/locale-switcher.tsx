'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { type Locale } from '@/../i18n-config';
import { Button } from '@/components/ui/button';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function LocaleSwitcher({ className }: ComponentProps<'div'>) {
  const pathName = usePathname();
  const currentLocale = pathName.split('/')[1] as Locale;

  const redirectPathname = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className={cn('flex items-center gap-5 w-fit text-white', className)}>
      <Button asChild className={cn({ 'border transition-all': currentLocale === 'pt-BR' })}>
        <Link href={redirectPathname('pt-BR')}>
          <Image
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg"
            alt="United States"
            width={20}
            height={20}
            className="mr-2"
          />
          BR
        </Link>
      </Button>
      <div>|</div>
      <Button asChild className={cn({ 'border': currentLocale === 'en-US' })}>
        <Link href={redirectPathname('en-US')}>
          <Image
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            alt="United States"
            width={20}
            height={20}
            className="mr-2"
          />
          EN
        </Link>
      </Button>
    </div>
  );
}
