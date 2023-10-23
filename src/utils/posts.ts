import { Post } from '@/contentlayer/generated';
import { compareDesc } from 'date-fns/fp';

type PostsByCategory = Record<string, Array<Post>>;

export const descAllPosts = (allPosts: Array<Post>) => {
  return [...allPosts].sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)));
};

export const getUniqueTags = (allPosts: Array<Post>) => {
  const tags = allPosts.reduce<Array<string>>((tags, post) => {
    if (post.tags && post.tags.length > 0) {
      const tagTitles = post.tags.map((tag) => tag.title!);
      return tags.concat(tagTitles);
    }
    return tags;
  }, []);

  return Array.from(new Set(tags));
};

export const getPostsByCategory = (allPosts: Array<Post>) => {
  return allPosts.reduce((postsByCategory, post) => {
    postsByCategory[post.category] = [...(postsByCategory[post.category] || []), post];

    return postsByCategory;
  }, {} as PostsByCategory);
};

export const getPostBySlug = (allPosts: Array<Post>, slug: string) => {
  return allPosts.find((post) => post._raw.flattenedPath === slug);
};

export const getCurrentIndex = (allPosts: Array<Post>, slug: string) => {
  return allPosts.findIndex((post) => post._raw.flattenedPath === slug);
};
