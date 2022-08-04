/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.annihil.us"],
  },
  // env: {
  //   MARVEL_API_KEY: "",
  // },
};

module.exports = nextConfig;
