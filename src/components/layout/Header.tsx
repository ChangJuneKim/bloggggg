'use client';

import Link from 'next/link';
import {
  header,
  headerContent,
  linkStyle,
  scrolledHeader,
  title,
} from '@/components/layout/header.css';
import { useEffect, useState } from 'react';

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
        <nav>
          {links.map((l) => (
            <Link key={l.label} href={l.href} className={linkStyle}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
