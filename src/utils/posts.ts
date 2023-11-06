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
  const postsByCategory = descAllPosts().reduce((postsByCategory, post) => {
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

export const filterPostsByKeyword = (posts: Array<Post>, keyword: string) => {
  return posts.filter((post) => {
    // 제목이나 설명에 키워드가 포함되어 있는지 확인
    const inTitle = post.title.toLowerCase().includes(keyword.toLowerCase());
    const inDescription = post.description.toLowerCase().includes(keyword.toLowerCase().trim());

    // 태그 중 하나라도 키워드를 포함하고 있는지 확인
    const inTags = post?.tags?.some((tag) =>
      tag?.title?.toLowerCase().includes(keyword.toLowerCase())
    );

    console.log(inTitle, inDescription, inTags);
    console.log(post.description, keyword);
    // 위 조건 중 하나라도 참이면 필터링에 포함
    return inTitle || inDescription || inTags;
  });
};
