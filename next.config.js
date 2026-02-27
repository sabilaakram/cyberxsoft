/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1338",
        pathname: "/uploads/**/*",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "strapi.cyberxsoft.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/insights/news",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/insights/case-study",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/insights/blogs",
        destination: "/insights",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
