import React, { useState, useEffect } from 'react';
import { Parallax, ParallaxProps } from 'react-parallax';
import './ParallaxScenery.css';

const ParallaxScenery = () => {
  const [parallaxHeight, setParallaxHeight] = useState('100vh');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setParallaxHeight('40vh');
      } else if (window.innerWidth <= 800) {
        setParallaxHeight('60vh');
      } else if (window.innerWidth <= 1200) {
        setParallaxHeight('80vh');
      } else {
        setParallaxHeight('100vh');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set the initial height based on the current window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const parallaxProps: ParallaxProps = {
    bgImage: 'Scenery.png',
    strength: 500,
    style: { height: parallaxHeight },
  };

  return (
    <Parallax {...parallaxProps}>
      <div className='parallax-container'>
        <div className='content'>
          <p className='img-txt'>THETA TAU AT LONG BEACH</p>
          <h1 className='img-txt'>
            We are the first & foremost professional engineering fraternity at Long Beach.
          </h1>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxScenery;
