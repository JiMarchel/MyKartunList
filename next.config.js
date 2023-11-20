/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
      {
        hostname: "img1.ak.crunchyroll.com",
      },
    ],
  },
};

module.exports = nextConfig;
