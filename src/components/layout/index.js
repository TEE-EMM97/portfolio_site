import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/react";
import { Context } from "../../store/context";
import { Toggle } from "../common/toggle";
import { useTheme } from "@emotion/react";
import { Footer } from "../common/footer";
import { Particle } from "./particles";
import { Scroll } from "../common/scroll";
import { MusicPlayer } from "./musicPlayer";
import "./layout.scss";
export const Layout = ({ children }) => {
  const { state } = useContext(Context);
  const theme = useTheme();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            background-color: ${state.isDark
              ? theme.dark.background
              : theme.light.background};

            color: ${state.isDark ? theme.dark.font : theme.light.font};
            transition: ease-in 0.2s;
          }

          .rhap_container {
            background-color: ${state.isDark
              ? theme.dark.background
              : theme.light.background} !important;
            box-shadow: 0px 0px 0px 0px;
          }

          #tsparticles {
            color: ${state.isDark
              ? theme.dark.font
              : theme.light.font} !important;
          }
        `}
      />
      <div className="site-wrapper">
        <div className="main-content">
          <Toggle />
          {children}
        </div>

        <Scroll />
        <Particle />
        <Footer />
        <MusicPlayer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
