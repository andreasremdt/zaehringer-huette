import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        port: "3000",
        protocol: "http",
      },
    ],
  },
};

export default withPayload(nextConfig);
