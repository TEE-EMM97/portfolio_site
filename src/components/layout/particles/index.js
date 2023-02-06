import React, { useContext, useCallback } from "react";
import { Context } from "../../../store/context";
import { useTheme } from "@emotion/react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Particle = () => {
  const { state } = useContext(Context);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const theme = useTheme();
  return (
    <div>
      <Particles
        style={{
          height: "100vh",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
        }}
        options={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 2000,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.06,
              color: {
                value: state.isDark ? theme.dark.font : theme.light.font,
              },
            },
            color: {
              value: state.isDark ? theme.dark.font : theme.light.font,
            },
            move: {
              direction: "left",
              speed: 0.1,
            },
            size: {
              value: 2,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 3,
              },
            },
          },
          detectRetina: true,
        }}
        init={particlesInit}
        loaded={particlesLoaded}
      />
    </div>
  );
};
