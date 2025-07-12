import type { NextConfig } from 'next';
import nextra from 'nextra';

const config: NextConfig = {
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.tsx',
    },
  },
};

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
});

export default withNextra(config);
