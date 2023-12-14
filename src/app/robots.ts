import { MetadataRoute } from 'next';
import siteConfig from '@/site.config';

const createRules = () => {
  if (process.env.VERCEL_ENV === 'production') {
    return {
      userAgent: '*',
      allow: '/',
    };
  }
  return {
    userAgent: '*',
    disallow: '/',
  };
};

export default function robots(): MetadataRoute.Robots {
  return {
    rules: createRules(),
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
