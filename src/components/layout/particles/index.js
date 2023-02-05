// import React, {useContext} from 'react';
// import Context from '../../../store/context'
// import { useTheme } from '@emotion/react'

// const Particle = () => {
//   const { state } = useContext(Context)
//   const theme = useTheme()
//   return (
//     <div>
//       <Particles
//         style={{
//           height: '100vh',
//           position: 'fixed',
//           top: 0,
//           right: 0,
//           left: 0,
//         }}
//         params={{
//           particles: {
//             number: {
//               value: 60,
//               density: {
//                 enable: true,
//                 value_area: 2000,
//               },
//             },
//             line_linked: {
//               enable: true,
//               opacity: 0.06,
//               color: {
//                 value: state.isDark ? theme.dark.font : theme.light.font
//               }
//             },
//             color: {
//               value: state.isDark ? theme.dark.font : theme.light.font
//             },
//             move: {
//               direction: 'left',
//               speed: 0.1,
//             },
//             size: {
//               value: 2,
//             },
//             opacity: {
//               anim: {
//                 enable: true,
//                 speed: 1,
//                 opacity_min: 0.05,
//               },
//             },
//           },
//           interactivity: {
//             events: {
//               onclick: {
//                 enable: true,
//                 mode: 'push',
//               },
//             },
//             modes: {
//               push: {
//                 particles_nb: 3,
//               },
//             },
//           },
//           retina_detect: true,
//         }}
//       />
//     </div>
//   );
// };

// export default Particle;
