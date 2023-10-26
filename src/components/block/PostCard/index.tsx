import Category from '@/components/block/PostCard/Category';
import { Box, SVGIcon } from '@/components/base';
import Link from 'next/link';
import {
  article,
  content,
  descStyle,
  imageContainer,
  link,
  list,
  readingTimeStyle,
  titleStyle,
} from '@/components/block/PostCard/index.css';
import Image from 'next/image';

interface PostCardProps {
  category: 'DEV' | 'LIFE' | 'FIRE';
  title: string;
  desc: string;
  createdAt: string;
  readingTime: string;
  thumbnail: string;
  url: string;
}

export default function PostCard({
  category,
  title,
  desc,
  createdAt,
  url,
  thumbnail,
  readingTime,
}: PostCardProps) {
  return (
    <Box as={'li'} className={list}>
      <Link href={url} className={link}>
        <Box as={'article'} className={article} display={'flex'}>
          <Box background={'wordHighlight'} borderRadius={'2xl'} className={imageContainer}>
            <Image src={thumbnail} alt={title} width={140} height={140} />
          </Box>
          <Box className={content}>
            <Category category={category} />
            <h4 className={titleStyle}>{title}</h4>
            <p className={descStyle}>{desc}</p>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Box as={'time'} color={'textMuted'} className={readingTimeStyle}>
                {createdAt}
              </Box>
              <Box
                as={'span'}
                display={'flex'}
                alignItems={'center'}
                color={'textMuted'}
                className={readingTimeStyle}
              >
                <Box as={'span'} width={'4'} height={'4'} marginRight={'1'}>
                  <SVGIcon id={'clock'} width={'100%'} height={'100%'} />
                </Box>
                {readingTime}
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}
