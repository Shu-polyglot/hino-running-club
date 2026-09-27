import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/hino-running-club" : "",
  },
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
