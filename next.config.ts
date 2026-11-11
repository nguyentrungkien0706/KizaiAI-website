import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gói gọn máy chủ Node để chạy trong Docker (Dokploy).
  output: "standalone",
};

export default nextConfig;
