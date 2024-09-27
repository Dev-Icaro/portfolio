'use client';

import { ComponentProps, PropsWithChildren, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ScrollRevealProps extends ComponentProps<'div'>, PropsWithChildren {
  effect: 'fade-up' | 'fade-down' | 'fade-right' | 'fade-left';
}

const ScrollReveal = ({ children, effect, ...props }: ScrollRevealProps) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos={effect} {...props}>
      {children}
    </div>
  );
};

export default ScrollReveal;
