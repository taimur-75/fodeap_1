import React, { useState } from 'react';
import burger from '../images/burger.jpg';
import momos from '../images/momos.jpg';
import iceCream from '../images/ice_cream.jpg';

export default function Slider() {
  const images = [burger, momos, iceCream];
  const [currentIndex, setCurrentIndex] = useState(0);

  function showNextImage() {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  function showPreviousImage() {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }

  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <img
        src={images[currentIndex]}
        alt="slider"
        style={{ width: '850px', height: '285px', marginTop: '20px' }}
      />
      
      {/* Left Arrow (<) */}
      <span
        onClick={showPreviousImage}
        style={{
          position: 'absolute',
          left: '270px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '30px',
          cursor: 'pointer',
          color: 'white',
        }}
      >
        &lt;
      </span>

      {/* Right Arrow (>) */}
      <span
        onClick={showNextImage}
        style={{
          position: 'absolute',
          right: '270px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '30px',
          cursor: 'pointer',
          color: 'white',
        }}
      >
        &gt;
      </span>
    </div>
  );
}
