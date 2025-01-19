import React from 'react';
import './Button.css';

function Button({ type, children, link }) {
  const className = `button ${type === 'primary' ? 'primary-button' : 'secondary-button'}`;
  return (
    <a href={link} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default Button; 