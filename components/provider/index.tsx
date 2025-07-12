'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

// Types
import type * as React from 'react';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
    >
      {children}
    </NextThemesProvider>
  );
};

// Named export
export { Provider };

// Default export
export default Provider;
