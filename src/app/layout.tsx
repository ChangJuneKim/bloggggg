import '@/styles/reset.css';
import '@/styles/globalStyles.css';
import '@/styles/rehype.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Providers from '@/app/providers';
import { SkipNavLink } from '@/components/a11y';
import { ReactNode } from 'react';
import SiteConfig from '@/site.config';
import { Footer, Header } from '@/components/layout';

export const metadata: Metadata = {
  metadataBase: new URL('https://changjune.com'),
  title: {
    default: SiteConfig.title,
    template: `${SiteConfig.title} | %s`,
  },
  description: '학습하는 개발자, 함께 성장하는 공간입니다.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta name="naver-site-verification" content="c758199201ad8d709bff4424fcfddf12c298b478" />
      </head>
      <body className={pretendard.className}>
        <SkipNavLink />
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
