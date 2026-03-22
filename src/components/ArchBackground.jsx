import React from 'react';
import './ArchBackground.css';

const ArchBackground = () => {
  return (
    <div className="arch-bg-container">
      <div className="arch-bg"></div>
      <div className="arch-lines">
        <div className="line line-h" style={{ top: '20%', animationDelay: '0s' }}></div>
        <div className="line line-h" style={{ top: '60%', animationDelay: '1.5s' }}></div>
        <div className="line line-v" style={{ left: '30%', animationDelay: '0.5s' }}></div>
        <div className="line line-v" style={{ left: '70%', animationDelay: '2s' }}></div>
        <div className="circle-draw" style={{ top: '30%', left: '40%' }}></div>
      </div>
      <div className="hero-overlay-gradient"></div>
    </div>
  );
};

export default ArchBackground;
