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
        source: '/posts/pages/:page',
        destination: '/posts/categories/all/pages/:page',
        permanent: true,
      },
    ];
  },
};

module.exports = withVanillaExtract(withContentlayer(nextConfig));
