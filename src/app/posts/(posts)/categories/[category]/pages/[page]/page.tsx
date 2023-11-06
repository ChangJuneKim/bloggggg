import { Box } from '@/components/base';
import { Pagination, PostsSection } from '@/components/block';
import { chunkArray, filterPostsByKeyword, getPostsByCategory } from '@/utils/posts';
import { CategoryType } from '@/components/block/PostCard/Category';
import siteConfig from '@/site.config';
import CategorySelect from '@/components/pages/posts/CategorySelect';
import PostSearch from '@/components/pages/posts/PostSearch';
import { postToolbarStyle } from '@/app/posts/(posts)/categories/[category]/pages/[page]/index.css';
import { postsSection } from '@/app/posts/(posts)/layout.css';

// export const dynamic = '';

type Params = {
  category: 'all' | CategoryType;
  page: string;
};
export interface CategoryPostsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
  params: Params;
}

export default function CategoryPostsPage({ searchParams, params }: CategoryPostsPageProps) {
  const { page = '1', category = 'all' } = params;
  const postsByCategory = filterPostsByKeyword(
    getPostsByCategory()[category] ?? [],
    (searchParams.keyword || '') as string
  );
  const postCount = postsByCategory.length;

  const chunkedPosts = chunkArray({ items: postsByCategory, perItems: siteConfig.postsPerPage })[
    Number(page || 1) - 1
  ];

  return (
    <Box>
      <Box className={postToolbarStyle}>
        <CategorySelect category={category} />
        <PostSearch searchParams={searchParams} category={category} />
      </Box>
      {postCount > 0 ? (
        <>
          <Box>
            <p>
              총 <b>{postCount}개</b>의 글이 있습니다.
            </p>
          </Box>
          <PostsSection chunkedPosts={chunkedPosts} searchParams={searchParams} />
        </>
      ) : (
        <>
          <p>😥 조건에 맞는 글이 없습니다.</p>
          <Box as={'section'} className={postsSection}></Box>
        </>
      )}
      <Pagination total={postCount} page={page} />
    </Box>
  );
}

export async function generateMetadata({ params: { page, category } }: { params: Params }) {
  let cate;
  switch (category) {
    case 'dev':
      cate = '개발';
      break;
    case 'life':
      cate = '일상';
      break;
    case 'fire':
      cate = '삽질';
      break;
    case 'all':
      cate = '전체';
      break;
    default:
      cate = '전체';
  }

  return {
    title: `Posts ${cate} ${page} 페이지`,
    description: `블로그 ${cate} 카테고리의 ${page} 페이지 입니다.`,
  };
}

type PathParams = {
  category: string;
  page: string;
};

export const generateStaticParams = async () => {
  const postsByCategory = getPostsByCategory();

  const paths: Array<PathParams> = [];

  Object.keys(postsByCategory).forEach((category) => {
    const numberOfPages = Math.ceil(postsByCategory[category].length / siteConfig.postsPerPage);
    const pages = Array.from({ length: numberOfPages }, (_, i) => ({ category, page: `${i + 1}` }));
    paths.push(...pages);
  });

  return paths;
};
