import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './button.scss';

const STYLES = [
  'btn--checkBlog',
  'btn--goBackH',
  'btn--goPrevBlog',
  'btn--goNextBlog',
];

const SIZES = ['btn--x--small', 'btn--small', 'btn--medium', 'btn--large'];

const LINKS = ['blog', 'projects', '/', '#'];

const Button = ({
  children,
  type,
  onClick,
  linkTo,
  buttonStyle,
  buttonSize,
}) => {
  /********* 
   Import {use state} from 'react' to use below
   *********/

  // const [background, setBackground] = useState('#fdfdfd');
  // const setAnimation = (background) => {
  //   setBackground(background)
  // };

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[1];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonLink = LINKS.includes(linkTo) ? linkTo : LINKS[0];

  return (
    <button
      class={`btn ${checkButtonSize} ${checkButtonStyle}`}
      onClick={onClick}
      type={type}
    >
      <div class="button__bg">
        </div>
      <Link to={`${checkButtonLink}`}>
        {children}
      </Link>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
  buttonSize: PropTypes.string,
  linkTo: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  onMouseValue: PropTypes.string,
};

Button.defaultProps = {
  children: `Button`,
  buttonStyle: `btn--primary--solid`,
  buttonSize: `btn--large`,
  type: 'button',
};

export default Button;
