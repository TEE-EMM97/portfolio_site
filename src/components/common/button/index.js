import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const STYLES = [
  'btn--checkBlog',
  'btn--scroll',
  'btn--d-none'
];

const SIZES = ['btn--x--small', 'btn--chev','btn--small', 'btn--medium', 'btn--large'];




const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[1];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];


  return (
    <button
      className={`btn ${checkButtonSize} ${checkButtonStyle}`}
      onClick={onClick}
      type={type}
    >
      <div className="button__bg">
        </div>
          {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
  buttonSize: PropTypes.string,
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
