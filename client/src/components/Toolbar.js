import React from 'react';

function Toolbar({ onColorChange, onReset }) {
  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      padding: '1rem',
      background: '#eee',
      justifyContent: 'center',
      borderBottom: '1px solid #ccc'
    }}>
      <label>
        Choose Car Color: 
        <input type="color" onChange={(e) => onColorChange(e.target.value)} />
      </label>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default Toolbar;
