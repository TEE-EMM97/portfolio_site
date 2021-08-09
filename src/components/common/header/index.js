// import React, {useState} from 'react'
// import { Link } from 'gatsby'
// import styled from '@emotion/styled'
// import Toggle from '../../layout/toggle/index'
// import '../../layout/layout.scss'

// const MenuIcon = styled.button`
//   position: absolute;
//   top: 2rem;
//   left: 2rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 1.5rem;
//   height: 1.5rem;
//   background: transparent;
//   border: 0;
//   cursor: pointer;
//   z-index: 6; 

//   div {
//     width: 1.5rem;
//     height: 0.33rem;
//     border-radius: 5px;
//     transform-origin: 1px;
//     position: relative;
//     transition: opacity 300ms, transform 300ms;
    
//     :first-of-type {
//       transform: ${({ nav }) => (nav ? 'rotate(45deg)' : 'rotate(0)')};
//     }

//     :nth-of-type(2) {
//       opacity: ${({ nav }) => (nav ? '0' : '1')};
//     }

//     :nth-of-type(3) {
//       transform: ${({ nav }) => (nav ? 'rotate(-45deg)' : 'rotate(0)')};
//     }
//   }
// `

// const MenuLinks = styled.nav`
//   display:flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   width: 100%;
//   z-index: 5;
//   position: absolute;
//   top: 0;
//   right: 0;
//   transition: 300ms;
//   transform: ${({ nav }) => (nav ? 'translateY(0)' : 'translateY(-100%)')};
  
//   ul {
//     list-style-type: none;
//   }

//   li {
//     margin-top: 1rem;
//   }

//   a {
//     text-decoration: none;
//     font-size: 1.5rem;
//     transition: color 300ms;
 
//     :hover {
//       color: #546456
//     }
//   }
//   `

// const Header = ({ navProps }) => {
//   const [nav, showNav] = useState(false)
//   return (
//     <>
//       <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
//         <div className="menu-icon" />
//         <div className="menu-icon" />
//         <div className="menu-icon" />
//       </MenuIcon>

//         <MenuLinks className="menu-list" nav={nav}>
//           <ul>
//             <li><Link to='/'>Home</Link></li>
//             <li><Link to='/blog/'>Blog</Link></li>
//             <li><Link to='/projects/'>Projects</Link></li>
//           </ul>
//       </MenuLinks>
      
//       {/* <Button children={`Contact me!`} linkTo={`email`} buttonStyle={`btn--checkBlog`} buttonSize={`btn--x--small`}/> */}
//     </>
//   )
// }

// export default Header;
