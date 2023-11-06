'use client';

import { Box, MyLink } from '@/components/base';
import ThemeButton from '@/components/layout/Header/ThemeButton';
import { navi } from '@/components/layout/Header/index.css';
import { usePathname } from 'next/navigation';
import siteConfig from '@/site.config';

const links = [...siteConfig.nav];
export const Navigation = () => {
  const pathname = usePathname();

  const isActiveLink = (link: string) => {
    // 단순히 현재 경로와 링크가 동일한지 확인
    if (link === pathname) {
      return true;
    }

    return pathname.includes('/posts/categories/') && link.includes('/posts/categories/');
  };

  return (
    <Box display="flex" alignItems="center" flexDirection="row">
      <nav aria-label="Primary navigation">
        <Box display="flex" alignItems="center" flexDirection="row" as="ul" className={navi}>
          {links.map((item, index) => {
            const notLastItem = index !== links.length - 1;
            const isActive = isActiveLink(item.link);
            return (
              <li key={item.link}>
                <MyLink
                  className={isActive ? 'active' : ''}
                  href={item.link}
                  fontSize={[`md`, null, null, `lg`]}
                  marginRight={notLastItem ? [`2`, `4`] : undefined}
                  p="2"
                >
                  {item.name}
                </MyLink>
              </li>
            );
          })}
        </Box>
      </nav>
      <ThemeButton />
    </Box>
  );
};
