import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gói gọn máy chủ Node để chạy trong Docker (Dokploy).
  output: "standalone",
  // Không lộ công nghệ qua header x-powered-by.
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/og/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
