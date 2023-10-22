import '../styles/reset.css';
import '../styles/globalStyles.css';
import '../styles/rehype.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Providers from '@/app/providers';
import { SkipNavLink } from '@/components/a11y/SkipNav';
import { Footer, Header } from '../components/layout';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '김창준의 블로그',
  description: 'Generated by create next app',
};

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={pretendard.className}>
        <SkipNavLink />
        <Providers>
          <Header />
          {/*<SkipNavContent>{children}</SkipNavContent>*/}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
