/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: "/estproject",
  env: {
    ASSET_PREFIX: "/estproject",
  },
};

module.exports = nextConfig;