import { allPosts, Post } from '@/contentlayer/generated';
import { useMemo } from 'react';
import { POSTS_PER_PAGE } from '@/constants/post';
import chunkArray from '@/utils/chunkArray';
import {
  descAllPosts,
  getCurrentIndex,
  getPostBySlug,
  getPostsByCategory,
  getUniqueTags,
} from '@/utils/posts';

type PostsByCategory = Record<string, Array<Post>>;

type Props = {
  slug?: string;
  category?: string;
};

const usePosts = ({ slug, category }: Props = {}) => {
  const uniqueTagTitles = useMemo(() => getUniqueTags(allPosts), []);
  const sortedPosts = useMemo(() => descAllPosts(allPosts), []);
  const postsByCategory = useMemo<PostsByCategory>(
    () => getPostsByCategory(sortedPosts),
    [sortedPosts]
  );
  const filterPosts = category ? postsByCategory[category] : sortedPosts;
  const postBySlug = useMemo(() => getPostBySlug(sortedPosts, slug || ''), [slug, sortedPosts]);

  const currentIndex = useMemo<number>(
    () => getCurrentIndex(sortedPosts, slug || ''),
    [slug, sortedPosts]
  );
  const prevPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;

  const chunkedPosts = useMemo<Array<Array<Post>>>(() => {
    return chunkArray({ items: filterPosts, perItems: POSTS_PER_PAGE });
  }, [filterPosts]);

  return {
    allPosts: sortedPosts,
    postBySlug,
    prevPost,
    nextPost,
    postsByCategory,
    chunkedPosts,
    uniqueTagTitles,
  };
};

export default usePosts;
