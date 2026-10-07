import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/honors",
        destination: "/member-club",
        permanent: true,
      },
      {
        source: "/clubs",
        destination: "/member-club",
        permanent: true,
      },
      {
        source: "/support",
        destination: "/participation",
        permanent: true,
      },
      {
        source: "/partnerships",
        destination: "/projects-social",
        permanent: true,
      },
      {
        source: "/mission/about",
        destination: "/mission",
        permanent: true,
      },
      {
        source: "/areas-focus/about",
        destination: "/activity-areas",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
