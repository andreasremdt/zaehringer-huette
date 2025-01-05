import { withPayload } from "@payloadcms/next/withPayload";

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined || process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [NEXT_PUBLIC_SERVER_URL].map((item) => {
      const url = new URL(item);

      return {
        hostname: url.hostname,
        protocol: url.protocol.replace(":", ""),
      };
    }),
  },
};

export default withPayload(nextConfig);
