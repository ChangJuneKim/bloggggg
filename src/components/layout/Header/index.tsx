'use client';

import { header } from '@/components/layout/Header/index.css';
import { useEffect, useState } from 'react';
import { Box } from '@/components/base';
import Logo from '@/components/layout/Header/Logo';
import { FullWidthContainer } from '@/components/layout';
import { Navigation } from '@/components/layout/Header/Navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

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
      >
        <Box
          display={'flex'}
          as={'header'}
          color={'heading'}
          alignItems={'center'}
          className={header}
        >
          <Logo />
          <Navigation />
        </Box>
      </FullWidthContainer>
    </>
  );
}
