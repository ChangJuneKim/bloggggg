const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const { withContentlayer } = require('next-contentlayer');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },

  async redirects() {
    return [
      {
        source: '/posts/:page',
        destination: '/posts/categories/all/pages/1',
        permanent: true,
      },
      {
        source: '/posts/pages/((?!\\d).*)',
        destination: '/posts/categories/all/pages/1',
        permanent: true,
      },
      {
        source: '/posts/pages/:page',
        destination: '/posts/categories/all/pages/:page',
        permanent: true,
      },
      {
        source: '/posts/categories/all',
        destination: '/posts/categories/all/pages/1',
        permanent: true,
      },
    ];
  },
};

module.exports = withVanillaExtract(withContentlayer(nextConfig));
