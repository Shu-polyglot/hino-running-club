import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: "/hino-running-club",
        assetPrefix: "/hino-running-club/",
        images: { unoptimized: true },
        trailingSlash: true,
        typescript: { ignoreBuildErrors: true },
      }
    : {}),
};

export default nextConfig;
