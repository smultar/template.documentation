import type { MDXComponents } from 'nextra/mdx-components';
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'; // nextra-theme-blog or your custom theme

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    ...themeComponents,
    ...components,
  };
};

export { useMDXComponents };

// Named export for use in MDX files
export default useMDXComponents;
