import { Box } from '@/components/base';
import usePosts from '@/hooks/usePosts';
import { PrimaryButton } from '@/components/extended';

export default function LatestPosts() {
  const { allPosts } = usePosts();
  return (
    // <Box as={'section'} className={postsSection}>
    //   <h3>최신 포스트</h3>
    //   <Box as={'ul'}>
    //     {allPosts.slice(0, 5).map((post) => {
    //       const { category, title, description, url, createdAt, readingTime, thumbnail } = post;
    //       return (
    //         <PostCard
    //           key={title}
    //           category={category as 'DEV' | 'LIFE' | 'FIRE'}
    //           title={title}
    //           desc={description}
    //           createdAt={format(new Date(createdAt), 'yyyy년 MM월 dd일')}
    //           readingTime={readingTime._readingTime}
    //           thumbnail={thumbnail}
    //           url={url}
    //         />
    //       );
    //     })}
    //   </Box>
    //   <Box display={'flex'} justifyContent={'flex-end'} marginTop={'8'} marginBottom={'8'}>
    //     <SecondaryButton to={'/posts'}>All Posts</SecondaryButton>
    //   </Box>
    // </Box>
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      __height={'80vh'}
    >
      <Box as={'h1'} fontSize={'2xl'} marginBottom={'4'}>
        블로그 이사 중 입니다. 🚚💨
      </Box>
      <PrimaryButton to={'https://window6kim.tistory.com/'} buttonType={'external'}>
        티스토리
      </PrimaryButton>
    </Box>
  );
}
