'use client';

import {
  header,
  headerContent,
  headerLink,
  linkItem,
  logoContainer,
  navi,
  scrolledHeader,
} from '@/components/layout/Header/index.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ThemeButton from './ThemeButton';
import { MyLink } from '@/components/base/MyLink';

const links = [
  { label: 'Resume', href: '/resume' },
  { label: 'Posts', href: '/posts' },
  { label: 'Portfolio', href: '/portfolio' },
];
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
    <header className={`${header} ${isScrolled ? scrolledHeader : ''}`}>
      <div className={headerContent}>
        <div className={logoContainer}>
          <Image src="/assets/images/logo.png" width={42} height={42} alt="로고" priority />
        </div>
        <nav className={navi}>
          <ul className={navi}>
            {links.map((l) => (
              <li key={l.label} className={linkItem}>
                <MyLink href={l.href} className={headerLink}>
                  {l.label}
                </MyLink>
              </li>
            ))}
          </ul>
          <ThemeButton />
        </nav>
      </div>
    </header>
  );
}
