/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sa-east-1.graphassets.com",
      },
    ],
  },
};

export default nextConfig;
