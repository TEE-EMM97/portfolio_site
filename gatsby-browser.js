/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react";
import { ThemeProvider } from "@emotion/react";
import { GlobalStateProvider } from "./src/store/GlobalStateProvider";
import { theme } from "./src/themes";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export const wrapRootElement = ({ element }) => (
  <GlobalStateProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </GlobalStateProvider>
);
