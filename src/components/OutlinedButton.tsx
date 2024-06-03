// OutlinedButton.tsx

import React from 'react';
import { Link } from 'react-router-dom';

import './OutlinedButton.css';

interface OutlinedButtonProps {
  text: string;
  fontSize?: string;
  to: string; // The destination URL
}


const OutlinedButton: React.FC<OutlinedButtonProps> = ({ text, fontSize, to }) => {
  return (
    <Link to={to}>
      <button
        className="outlined-button"
        style={{ fontSize: fontSize || '0.75rem' }}
      >
        {text}
      </button>
    </Link>
  );
};

export default OutlinedButton;;
