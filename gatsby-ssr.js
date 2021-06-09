/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { ThemeProvider } from "emotion-theming"
import GlobalStateProvider from "./src/store/GlobalStateProvider"
import { theme } from "./src/theme/theme"

export const wrapRootElement = ({ element }) => (
  <GlobalStateProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </GlobalStateProvider>
)