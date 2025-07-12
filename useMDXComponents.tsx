import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme
import { MDXComponents } from 'nextra/mdx-components';
 
// Get the default MDX components
const themeComponents = getThemeComponents()
 
// Merge components
const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    ...themeComponents,
    ...components
  }
}

// Named export for use in MDX files
export default useMDXComponents;