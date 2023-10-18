'use client';

import Link from 'next/link';
import {
  header,
  headerContent,
  link,
  linkItem,
  logoContainer,
  navi,
  scrolledHeader,
} from '@/components/layout/header.css';
import { useEffect, useState } from 'react';
import ThemeButton from '@/components/ThemeButton';
import Image from 'next/image';

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
          <Image src="/assets/images/logo.png" width={42} height={42} alt="로고" />
        </div>
        <nav className={navi}>
          <ul className={navi}>
            {links.map((l) => (
              <li key={l.label} className={linkItem}>
                <Link href={l.href} className={link}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeButton />
        </nav>
      </div>
    </header>
  );
}
