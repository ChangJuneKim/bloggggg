import { compareDesc, parseISO, setHours } from 'date-fns';
import { Feed } from 'feed';
import { NextResponse } from 'next/server';
import SiteConfig from '@/site.config';
import { allPosts, Post } from '@/contentlayer/generated';

const createCompleteUrl = (path: string) => {
  if (path.startsWith('/')) {
    return `${SiteConfig.url}${path}`;
  }
  return `${SiteConfig.url}/${path}`;
};
const createImageUrl = (src: string, width: number, height: number, escape = false) => {
  if (src.startsWith('https://images.unsplash.com/') && !src.includes('?')) {
    const amp = escape ? '&amp;' : '&';
    return `${src}?fit=crop${amp}w=${width}${amp}h=${height}`;
  } else if (!src.includes('://')) {
    return createCompleteUrl(src);
  }
  return src;
};

const createContent = (post: Post, url: string) => `
<img src="${createImageUrl(
  post.thumbnail,
  1000,
  420
)}" width="1000" height="420" vspace="3" hspace="8" align="center">
<p>${post.description}</p>
<p>Read the full article on <a href="${url}">changjune.com</a></p>`;

const me = {
  name: 'ChangJune Kim',
  email: 'kchang6869@gmail.com',
  link: SiteConfig.url,
};

const createFeed = () => {
  const feed = new Feed({
    title: 'changjune.com',
    description: 'A site about software development by ChangJune Kim',
    id: SiteConfig.url,
    link: SiteConfig.url,
    language: 'en',
    favicon: `${SiteConfig.url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ChangJune Kim`,
    author: me,
  });

  allPosts
    .sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)))
    .forEach((post) => {
      const url = `${SiteConfig.url}${post.url}`;
      feed.addItem({
        title: post.title,
        id: url,
        link: url,
        description: post.description,
        content: createContent(post, url),
        author: [me],
        date: setHours(parseISO(post.createdAt), 13),
        category: post.tags?.map((tag) => ({ name: tag.title })),
        image: createImageUrl(post.thumbnail, 256, 256, true),
      });
    });

  return feed.rss2();
};

export const GET = async () => {
  const feed = await createFeed();
  return new NextResponse(feed, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
