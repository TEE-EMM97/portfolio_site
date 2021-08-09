import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';
import Button from '../../common/button';
import React, { useState, useEffect } from 'react';
import '../layout.scss';

const Hello = ({ siteDescription }) => {
  const variants = {
    rotate: [0, -25, 0, -25, 0],
  };
  
  //Custom hook to check screensize.

  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = useState( isBrowser ? window.innerWidth : 0);
  const breakpoint = 700;

  useEffect(() => {
    if (!isBrowser) return false;
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [isBrowser])


  return (
    <section className="intro">
      <Fade>
        <h1 className="intro__hello">
          Hello
          <motion.div
            whileHover={variants}
            animate={variants}
            transition={{ type: 'tween', stiffness: 100 }}
            style={{ paddingLeft: 10, lineHeight: '38px' }}
          >
            <span role="img" aria-labelledby="waving">
              👋
            </span>
          </motion.div>
        </h1>

        <p className="intro__para">{siteDescription}</p>
        <div className="intro__touch">
          <Button
            children={`Get in Touch!`}
            linkTo={`mailto:tevmcc@gmail.com`}
            buttonStyle={`btn--checkBlog`}
            buttonSize={ width < breakpoint ? 'btn--x--small' : 'btn--medium'}
          />
        </div>
      </Fade>
    </section>
  );
};

Hello.protoTypes = {
  siteDescription: PropTypes.string,
};

Hello.defaultProps = {
  siteDescription: ``,
};

export default Hello;
