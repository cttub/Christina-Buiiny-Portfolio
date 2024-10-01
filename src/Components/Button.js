import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Styles/Button.css';

const Button = ({ target, type = 'button', onClick, children, className = '', style = {}, href, ...props }) => {
  // If href is provided, determine whether it's an internal or external link
  const isExternal = href && (href.startsWith('http') || href.startsWith('//'));

  if (href) {
    if (isExternal) {
      // If the link is external, use <a> tag
      return (
        <a 
          target={target}
          href={href}
          className={`button ${className}`}
          style={style}
          {...props}
        >
          {children}
        </a>
      );
    } else {
      // If the link is internal, use <Link> from react-router-dom
      return (
        <Link 
          to={href}
          className={`button ${className}`}
          style={style}
          {...props}
        >
          {children}
        </Link>
      );
    }
  }

  // Default button for non-link buttons
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
