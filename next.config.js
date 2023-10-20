const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const { withContentlayer } = require('next-contentlayer');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = withVanillaExtract(withContentlayer(nextConfig));
