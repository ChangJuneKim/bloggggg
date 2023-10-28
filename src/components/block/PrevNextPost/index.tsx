import { Post } from '@/contentlayer/generated';
import { Box, MyLink } from '@/components/base';
import {
  content,
  descStyle,
  imageContainer,
  link,
  readingTimeStyle,
  titleStyle,
} from '@/components/block/PostCard/index.css';
import Image from 'next/image';
import IconSpan from '@/components/extended/IconSpan';
import { format } from 'date-fns';
import { composeClassNames } from '@/components/base/Box/createBox';
import {
  contentContainer,
  nextPostStyle,
  prevPostStyle,
} from '@/components/block/PrevNextPost/index.css';

interface PrevNextPostProps {
  type: 'prev' | 'next';
  post: Post | null;
}
export default function PrevNextPost({ type, post }: PrevNextPostProps) {
  if (!post) return null;
  const {
    thumbnail,
    description,
    createdAt,
    readingTime: { _readingTime },
    url,
    title,
  } = post;

  return (
    <MyLink
      href={url}
      className={composeClassNames(link, type === 'prev' ? prevPostStyle : nextPostStyle)}
      style={{ display: 'block', width: '100%', maxWidth: '500px' }}
    >
      <Box as={'h4'} fontWeight={'semibold'} textAlign={type === 'next' ? 'right' : undefined}>
        {type === 'next' ? '다음 글  →' : '←  이전 글'}
      </Box>
      <Box
        display={'flex'}
        flexDirection={type === 'next' ? 'row-reverse' : undefined}
        justifyContent={'space-between'}
      >
        <Box
          background={'wordHighlight'}
          borderRadius={'2xl'}
          className={imageContainer}
          marginLeft={type === 'next' ? '4' : undefined}
          marginRight={type === 'prev' ? '4' : undefined}
        >
          <Image src={thumbnail} alt={title} width={100} height={100} />
        </Box>
        <Box className={composeClassNames(content, contentContainer)}>
          <h4 className={titleStyle}>{title}</h4>
          <p className={descStyle}>{description}</p>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Box as={'time'} color={'textMuted'} className={readingTimeStyle}>
              {format(new Date(createdAt), 'yyyy년 MM월 dd일')} 발행
            </Box>
            <IconSpan iconId={'clock'} className={readingTimeStyle}>
              {_readingTime}
            </IconSpan>
          </Box>
        </Box>
      </Box>
    </MyLink>
  );
}
