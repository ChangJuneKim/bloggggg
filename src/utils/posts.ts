import { allPosts, Post } from '@/contentlayer/generated';
import { compareDesc } from 'date-fns/fp';

type PostsByCategory = Record<string, Array<Post>>;

export const descAllPosts = () => {
  return [...allPosts].sort((a, b) => compareDesc(new Date(b.createdAt), new Date(a.createdAt)));
};

export const getAllTagsOfPosts = () => {
  const tags = allPosts.reduce<Array<string>>((tags, post) => {
    if (post.tags && post.tags.length > 0) {
      const tagTitles = post.tags.map((tag) => tag.title!);
      return tags.concat(tagTitles);
    }
    return tags;
  }, []);

  return [...new Set(tags)];
};

export const getTagsOfPost = (post: Post) => {
  return [...new Set(post?.tags?.map((tag) => tag.title))];
};

export const getPostsByCategory = () => {
  const postsByCategory = allPosts.reduce((postsByCategory, post) => {
    postsByCategory[post.category] = [...(postsByCategory[post.category] || []), post];
    return postsByCategory;
  }, {} as PostsByCategory);

  return { ...postsByCategory, all: descAllPosts() } as PostsByCategory;
};

type Props<T> = {
  items: T[];
  perItems: number;
};

export const chunkArray = <T>({ items, perItems }: Props<T>): T[][] => {
  let results: Array<Array<T>> = [];

  let temps: Array<T> = [];

  for (const [index, item] of items.entries()) {
    temps.push(item);

    if ((index + 1) % perItems === 0) {
      results.push(temps);

      temps = [];
    }
  }

  if (temps.length > 0) {
    results.push(temps);
  }

  return results;
};
