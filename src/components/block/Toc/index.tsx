import { Box, MyLink } from '@/components/base';
import { TocStyle } from '@/components/block/Toc/index.css';

type heading = {
  level: number;
  text: string;
  slug: string;
};

interface TocProps {
  headings: Array<heading>;
}

export default function Toc({ headings = [] }: TocProps) {
  let level2Counter = 0; // Level 2의 카운터
  let level3Counter = 0; // Level 3의 카운터

  return (
    <Box as={'aside'}>
      <Box as={'nav'} className={TocStyle}>
        <Box as={'ul'}>
          {headings?.map((heading) => {
            let label = ''; // 각 항목에 대한 라벨

            if (heading.level === 2) {
              level2Counter++;
              level3Counter = 0; // Level 2 항목이 등장하면 Level 3 카운터를 초기화
              label = `${level2Counter}`;
            } else if (heading.level === 3) {
              level3Counter++;
              label = `${level2Counter}-${level3Counter}`;
            }

            const marginLeft = (heading.level - 1) * 12; // Level에 따른 마진
            return (
              <li key={heading.slug} style={{ marginLeft: `${marginLeft}px` }}>
                <MyLink href={`#${heading.slug}`}>
                  {label}. {heading.text}
                </MyLink>
              </li>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
