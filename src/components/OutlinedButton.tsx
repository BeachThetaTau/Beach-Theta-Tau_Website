// OutlinedButton.tsx

import React from 'react';
import './OutlinedButton.css';

interface OutlinedButtonProps {
  text: string;
  fontSize?: string; 
}

const OutlinedButton: React.FC<OutlinedButtonProps> = ({ text, fontSize }) => {
  return (
    <button
      className="outlined-button"
      style={{ fontSize: fontSize || '0.75rem' }} // Set the font size dynamically or use a default value
    >
      {text}
    </button>
  );
};

export default OutlinedButton;
