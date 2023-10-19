import { Box, MyLink } from '@/components/base';
import ThemeButton from '@/components/layout/Header/ThemeButton';
import { navi } from '@/components/layout/Header/index.css';

/**
 * Navigation component containing the primary links + Darkmode toggle
 */
const links = [
  { name: 'Resume', link: '/resume' },
  { name: 'Posts', link: '/posts' },
  { name: 'Portfolio', link: '/portfolio' },
];
export const Navigation = () => {
  return (
    <Box display="flex" alignItems="center" flexDirection="row">
      <nav aria-label="Primary navigation">
        <Box display="flex" alignItems="center" flexDirection="row" as="ul" className={navi}>
          {links.map((item, index) => {
            const notLastItem = index !== links.length - 1;

            return (
              <li key={item.link}>
                <MyLink
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
