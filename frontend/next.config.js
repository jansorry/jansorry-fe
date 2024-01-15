/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: `${'backend-url'}/:path*`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
