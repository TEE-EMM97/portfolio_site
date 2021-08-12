import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/react';
import Context from '../../store/context';
import { useTheme } from '@emotion/react';
import Footer from '../common/footer';
import Particles from './particles';
import Toggle from '../layout/toggle';
import './layout.scss';
const Layout = ({ children }) => {
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
              transition: ease-in .2s;
          }

          #tsparticles {
            color: ${state.isDark
              ? theme.dark.font
          : theme.light.font} !important;
            }
        `}
      />
      <section className="site-wrapper">
          <Particles />
          <div className="main-content">
          <Toggle />
            {children}
          </div>
            <Footer />
      </section>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
