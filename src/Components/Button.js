// src/components/Button.js
import React from 'react';
import PropTypes from 'prop-types';
import './Styles/Button.css';

const Button = ({ type = 'button', onClick, children, className = '', style = {}, href, ...props }) => {
  if (href) {
    return (
      <a 
        href={href}
        className={`button ${className}`}
        style={style}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

// Type checking with PropTypes
Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  href: PropTypes.string, // Added prop type for href
};

export default Button;
