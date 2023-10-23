import Category from '@/components/block/PostCard/Category';
import { Box, SVGIcon } from '@/components/base';
import Link from 'next/link';
import { article, descStyle, link, list, titleStyle } from '@/components/block/PostCard/index.css';

interface PostCardProps {
  category: 'DEV' | 'LIFE' | 'FIRE';
  title: string;
  desc: string;
  createdAt: string;
  readingTime: string;
  url: string;
}

export default function PostCard({
  category,
  title,
  desc,
  createdAt,
  url,
  readingTime,
}: PostCardProps) {
  return (
    <Box as={'li'} className={list}>
      <Link href={url} className={link}>
        <Box as={'article'} className={article}>
          <Category category={category} />
          <h4 className={titleStyle}>{title}</h4>
          <p className={descStyle}>{desc}</p>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Box as={'time'} color={'textMuted'}>
              {createdAt}
            </Box>
            <Box as={'span'} display={'flex'} alignItems={'center'} color={'textMuted'}>
              <Box as={'span'} width={'4'} height={'4'} marginRight={'1'}>
                <SVGIcon id={'clock'} width={'100%'} height={'100%'} />
              </Box>
              {readingTime}
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}
