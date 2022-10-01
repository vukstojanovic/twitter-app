/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      "pbs.twimg.com",
      "abs.twimg.com",
      "media-exp1.licdn.com",
    ],
  },
};

module.exports = nextConfig;
