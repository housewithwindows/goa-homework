import React, { useState } from 'react';

function ColorChangeButton() {
  const [color, setColor] = useState('blue'); // Initial button color

  const handleClick = () => {
    setColor(prevColor => (prevColor === 'blue' ? 'green' : 'blue')); // Toggle color
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: color,
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
      }}
    >
      Click me!
    </button>
  );
}

export default ColorChangeButton;
