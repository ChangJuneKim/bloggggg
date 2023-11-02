'use client';

import { Box, MyLink } from '@/components/base';
import ThemeButton from '@/components/layout/Header/ThemeButton';
import { navi } from '@/components/layout/Header/index.css';
import { usePathname } from 'next/navigation';
import siteConfig from '@/site.config';

const links = [...siteConfig.nav];
export const Navigation = () => {
  const pathname = usePathname();

  return (
    <Box display="flex" alignItems="center" flexDirection="row">
      <nav aria-label="Primary navigation">
        <Box display="flex" alignItems="center" flexDirection="row" as="ul" className={navi}>
          {links.map((item, index) => {
            const notLastItem = index !== links.length - 1;

            return (
              <li key={item.link}>
                <MyLink
                  className={`${pathname === item.link ? 'active' : ''}`}
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
