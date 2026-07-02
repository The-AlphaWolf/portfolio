import type { NextConfig } from "next";

/**
 * Configured for STATIC EXPORT so the site can be hosted on GitHub Pages
 * (or any static file host) with no Node.js server.
 *
 * GitHub Pages "project sites" (https://<user>.github.io/<repo>/) serve the
 * site from a sub-path, which Next.js needs to know as `basePath`. It is read
 * from NEXT_PUBLIC_BASE_PATH so that:
 *  - local dev/build: unset → site served from "/" (no change needed),
 *  - CI deploy: .github/workflows/deploy.yml sets it automatically to
 *    "/<repo-name>" (or "" for a user site) — no hardcoding required.
 * For a manual build targeting a project site, run:
 *    NEXT_PUBLIC_BASE_PATH=/repo-name npm run build
 * (see README.md for details).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  // When basePath is set, Next.js serves all pages and assets under it
  // (assetPrefix defaults to basePath — no separate config needed).
  ...(basePath ? { basePath } : {}),

  // Emit /section/index.html style paths — plays nicer with static hosts.
  trailingSlash: true,

  images: {
    // next/image's optimizer needs a server; static export requires this
    // flag. Images remain responsive via their width/height/sizes props.
    unoptimized: true,
  },
};

export default nextConfig;
