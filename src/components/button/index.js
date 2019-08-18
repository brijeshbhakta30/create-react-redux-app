import React from 'react';
import PropTypes from "prop-types";
import cs from 'classnames';

const buttonTypes = {
  primary: 'btn-primary',
  disabled: 'btn-disabled',
  success: 'btn-success',
};

const Button = ({ type, btnClass, children }) => {
  const btnClassType = buttonTypes[type] || buttonTypes.primary;
  return (
    <button className={cs('btn', btnClassType, btnClass)}>{children}</button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'disabled', 'success']),
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;
