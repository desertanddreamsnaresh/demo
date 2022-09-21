/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "nextjs",
    path: "",
  },
};

module.exports = nextConfig
