'use client';

import Link from 'next/link';
import {
  header,
  headerContent,
  link,
  linkItem,
  navi,
  scrolledHeader,
  title,
} from '@/components/layout/header.css';
import { useEffect, useState } from 'react';
import ThemeButton from '@/components/ThemeButton';

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
        <h1 className={title}>블로긔</h1>
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
