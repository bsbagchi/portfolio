let userConfig = undefined;
try {
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  // ignore error
}

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Getting the repository name from the GITHUB_REPOSITORY environment variable
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`; // Set asset prefix to the repository name
  basePath = `/${repo}`; // Set base path to the repository name
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Necessary when exporting statically
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  assetPrefix,  // GitHub Pages serves files from a subdirectory
  basePath,     // GitHub Pages serves files from a subdirectory
  output: 'export', // Static export for GitHub Pages deployment
  
  // If you're using a custom config, merge it here
  ...userConfig,
};

// Merging custom user config if it exists
function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return;
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

mergeConfig(nextConfig, userConfig);

export default nextConfig;
