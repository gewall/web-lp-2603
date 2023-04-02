/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["id-ID", "en-US"],
    defaultLocale: "id-ID",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;

