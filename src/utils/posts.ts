import { allPosts } from '@/contentlayer/generated';
import { compareDesc } from 'date-fns/fp';

export const descAllPosts = allPosts.sort((a, b) =>
  compareDesc(new Date(a.createdAt), new Date(b.createdAt))
);
