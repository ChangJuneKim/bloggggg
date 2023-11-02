import { MetadataRoute } from 'next';
import siteConfig from '@/site.config';
import { allPosts } from '@/contentlayer/generated';

export default function sitemap(): MetadataRoute.Sitemap {
  const allCategory = ['all', 'dev', 'life', 'fire'];
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
    {
      url: `${siteConfig.url}/posts/pages/1`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...allPosts.map((post) => {
      return {
        url: `${siteConfig.url}/posts/${post._raw.flattenedPath}`,
        lastModified: new Date(post.createdAt),
      };
    }),
    ...allCategory.map((category) => {
      return {
        url: `${siteConfig.url}/posts/categories/${category}/pages/1`,
      };
    }),
  ];
}
