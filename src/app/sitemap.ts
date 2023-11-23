import { MetadataRoute } from 'next';
import siteConfig from '@/site.config';
import { allPosts } from '@/contentlayer/generated';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteConfig.url}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...allPosts.map((post) => {
      return {
        url: `${siteConfig.url}/posts/${post._raw.flattenedPath}`,
        lastModified: new Date(post.createdAt),
      };
    }),
  ];
}
