const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();
const path = require('path');

/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    config.resolve.alias['#'] = path.join(__dirname, 'public');
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = withVanillaExtract(nextConfig);
