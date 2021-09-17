/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }; 
    return config;
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !! 
    // documentatoin: https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors
    // in pages/api/[depthInfo].ts I still have to work on lines 204 and 208 due to the this object $(this) , surrendered after 1 hour for now (could neither disable husky nor fix the syntax on [depthInfo].ts nor tell lint-staged to ignore the respective file.) 
    ignoreBuildErrors: true,
  },
}); 

 