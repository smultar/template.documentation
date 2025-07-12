"use client";

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
    >
      {children}
    </NextThemesProvider>
  )
}

// Named export
export { Provider }

// Default export
export default Provider