/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: isProd ? "/estproject" : "",
  env: {
    ASSET_PREFIX: isProd ? "/estproject" : "",
  },
  images: { unoptimized: true }
};

module.exports = nextConfig;