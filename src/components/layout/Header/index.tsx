'use client';

import {
  header,
  hideHeaderShadow,
  isHomePath,
  isTopBackground,
  isTopColor,
} from '@/components/layout/Header/index.css';
import { useEffect, useState } from 'react';
import { Box } from '@/components/base';
import Logo from '@/components/layout/Header/Logo';
import { FullWidthContainer } from '@/components/layout';
import { Navigation } from '@/components/layout/Header/Navigation';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <FullWidthContainer
        variant="navigation"
        height={'navigationHeight'}
        data-variant-name={'navigation'}
        className={isScrolled ? isTopBackground : hideHeaderShadow}
      >
        <Box
          display={'flex'}
          as={'header'}
          alignItems={'center'}
          className={`${header} ${pathname === '/' || pathname === '/posts' ? isHomePath : ''} ${
            isScrolled ? isTopColor : ''
          } `}
        >
          <Logo />
          <Navigation />
        </Box>
      </FullWidthContainer>
    </>
  );
}
