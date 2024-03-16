import { MetadataRoute } from 'next';
import siteConfig from '@/site.config';
import { allPosts } from '@/contentlayer/generated';

type SitemapEntry = {
  url: string;
  lastModified?: string | Date;
};

const rootEntry: SitemapEntry = {
  url: siteConfig.url,
  lastModified: new Date(),
};

const resumeEntry: SitemapEntry = {
  url: `${siteConfig.url}/resume`,
  lastModified: new Date(),
};

const postEntries = allPosts.map((post) => {
  return {
    url: `${siteConfig.url}/${post._raw.flattenedPath}`,
    lastModified: new Date(post.createdAt),
  };
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [rootEntry, resumeEntry, ...postEntries];
}
