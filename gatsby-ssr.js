/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react";
import { ThemeProvider } from "@emotion/react";
import GlobalStateProvider from "./src/store/GlobalStateProvider";
import { theme } from "./src/themes";

export const wrapRootElement = ({ element }) => (
  /* GlobalStateProvider wraps our app where the theme element is passed in.*/
  <GlobalStateProvider>
    {/* ThemeProvider reads off of state provider which passes the data to change theme */}
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </GlobalStateProvider>
);
