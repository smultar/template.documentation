import type { NextConfig } from 'next';
import nextra from 'nextra';

const withNextra = nextra({
  // Specify the theme you are using, e.g., 'nextra-theme-docs' or 'nextra-theme-blog'
});

const { experimental: exp, ...config } = withNextra({
  reactStrictMode: true,
});

// Move `experimental.turbo` to `config.turbopack` while preserving other configuration
const { turbo: turbopack, ...experimental } = exp || {};
const nextConfig: NextConfig = {
  ...config,
  experimental,
  turbopack: {
    ...turbopack,
    ...config.turbopack,
  },
};

export default nextConfig;
